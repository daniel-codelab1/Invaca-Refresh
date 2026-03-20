import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MallDetailView, MallData } from '@/components/malls/MallDetailView'
import { getStrapiMedia, STRAPI_BASE_URL } from '@/lib/tools'

// Robust populate query for deep components and nested related images
const POPULATE_QUERY = '&populate[MainImage]=true&populate[SecondaryImage]=true&populate[Gallery]=true&populate[Stats]=true&populate[Performance]=true&populate[Contact]=true&populate[HeroVideo]=true&populate[Brands][populate]=*&populate[Managers][populate]=*'

// Helper function to dynamically map an API item to MallData structure
function mapStrapiMall(apiData: any): MallData | null {
  if (!apiData) return null;
  
  return {
    id: apiData.id,
    name: apiData.Name || '',
    location: apiData.Location || '',
    address: apiData.Address || '',
    title: apiData.Title || '',
    description: apiData.Description || '',
    heroVideo: apiData.HeroVideo?.url ? `${STRAPI_BASE_URL}${apiData.HeroVideo.url}` : '',
    image: apiData.MainImage?.url ? `${STRAPI_BASE_URL}${apiData.MainImage.url}` : '/images/malls/tolon/fachada-tolon-1.jpg',
    image2: apiData.SecondaryImage?.url ? `${STRAPI_BASE_URL}${apiData.SecondaryImage.url}` : '/images/malls/tolon/fachada-tolon-1.jpg',
    commercialArea: apiData.CommercialArea || '',
    stats: {
      stores: apiData.Stats?.Stores || 0,
      restaurants: apiData.Stats?.Restaurants || 0,
      parkingSpots: apiData.Stats?.ParkingSpots || 0,
    },
    managers: apiData.Managers ? apiData.Managers.map((m: any) => ({
      role: m.Role || '',
      name: m.Name || '',
      email: m.Email || '',
      image: m.Photo?.url ? `${STRAPI_BASE_URL}${m.Photo.url}` : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    })) : [],
    performance: {
      annualVisitors: apiData.Performance?.AnnualVisitors || '',
      openingYear: apiData.Performance?.OpeningYear || '',
      socialFollowers: apiData.Performance?.SocialFollowers || '',
    },
    services: apiData.Services ? apiData.Services.split(',').map((s: string) => s.trim()) : ['Wi-Fi Gratuito', 'Valet Parking', 'Seguridad 24/7'],
    brands: apiData.Brands ? apiData.Brands.map((b: any) => ({
      name: b.Name,
      image: b.Image?.url ? `${STRAPI_BASE_URL}${b.Image.url}` : '/images/assets/bg-ivc-4.jpg'
    })) : [],
    gallery: apiData.Gallery && apiData.Gallery.length > 0 
      ? apiData.Gallery.map((g: any) => `${STRAPI_BASE_URL}${g.url}`) 
      : ['/images/assets/bg-ivc-4.jpg'],
    contact: {
      phone: apiData.Contact?.Phone || '',
      phone2: apiData.Contact?.PhoneUrl || '',
      email: apiData.Contact?.Email || '',
      openingHours: apiData.Contact?.OpeningHours || '',
      website: apiData.Contact?.Website || '',
      instagram: apiData.Contact?.Instagram || '',
    },
    mapEmbedUrl: apiData.MapEmbedUrl || '',
  }
}


export async function generateStaticParams() {
  const result = await getStrapiMedia('/api/malls?fields[0]=Slug')
  if (result && result.data) {
    return result.data.map((mall: any) => ({
      id: mall.Slug,
    }))
  }
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const decodedId = decodeURIComponent(id)
  
  const result = await getStrapiMedia(`/api/malls?filters[Slug][$eq]=${decodedId}`)
  
  if (!result || !result.data || result.data.length === 0) {
    return {
      title: 'Centro Comercial no encontrado | INVACA',
    }
  }

  const mall = result.data[0]

  return {
    title: `${mall.Name} | INVACA`,
    description: mall.Description,
  }
}

export default async function MallDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const decodedId = decodeURIComponent(id)
  
  const result = await getStrapiMedia(`/api/malls?filters[Slug][$eq]=${decodedId}${POPULATE_QUERY}`)

  if (!result || !result.data || result.data.length === 0) {
    notFound()
  }

  const mallDataMapped = mapStrapiMall(result.data[0])

  if (!mallDataMapped) {
    notFound()
  }

  return <MallDetailView mall={mallDataMapped} />
}
