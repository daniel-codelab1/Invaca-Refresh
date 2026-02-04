export interface Mall {
  id: number
  name: string
  location: string
  address?: string
  image: string
  description: string
  stores?: number
  restaurants?: number
  parkingSpots?: number
  visitors?: string
  phone?: string
  email?: string
  openingHours?: string
  features?: string[]
  storeList?: Array<{
    name: string
    category: string
    floor: number
  }>
}

export interface News {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  author?: string
  authorAvatar?: string
  timestamp?: string
  content?: string
}
