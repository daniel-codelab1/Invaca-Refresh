import { Metadata } from 'next'
import { HeroParallax } from '@/components/ui/HeroParallax'
import { InvestorHubClient } from './InvestorHubClient'
import { getStrapiMedia } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Investor Hub | INVACA',
  description: 'Información financiera y corporativa para inversionistas de INVACA Investment Company.',
}

// Mock Data
// const tickerData = [
//   {
//     symbol: 'IVC.A',
//     name: 'INVACA Investment Company - Clase A',
//     price: '45.50',
//     change: '+1.20',
//     changePercent: '+2.71%',
//     isPositive: true,
//     volume: '15,400',
//     lastUpdate: 'Hace 15 min'
//   },
//   {
//     symbol: 'IVC.B',
//     name: 'INVACA Investment Company - Clase B',
//     price: '42.10',
//     change: '-0.30',
//     changePercent: '-0.71%',
//     isPositive: false,
//     volume: '5,200',
//     lastUpdate: 'Hace 25 min'
//   }
// ]


const fallbackAssemblyCalls = [
  {
    date: '15 Mar 2025',
    time: '10:00 AM',
    type: 'Ordinaria',
    title: 'Convocatoria Asamblea General Ordinaria de Accionistas 2025',
    file: '/docs/convocatoria-ordinaria-2025.pdf',
    status: 'Open' as const
  },
  {
    date: '10 Nov 2024',
    time: '02:00 PM',
    type: 'Extraordinaria',
    title: 'Convocatoria Asamblea General Extraordinaria de Accionistas',
    file: '/docs/convocatoria-extraordinaria-2024.pdf',
    status: 'Closed' as const
  },
]

function formatDate(dateString: string) {
  if (!dateString) return '';
  const dateStr = dateString.includes('T') ? dateString : `${dateString}T00:00:00`;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateString;
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatted = date.toLocaleDateString('es-ES', options);
  // Optional: Capitalize month name
  return formatted.replace(/\b[a-z]/g, char => char.toUpperCase());
}

function formatTime(timeString: string) {
  if (!timeString) return '';
  // Assuming Strapi time format might be "HH:mm:ss.SSS" or "HH:mm"
  const [hoursStr, minutesStr] = timeString.split(':');
  if (!hoursStr || !minutesStr) return timeString;
  
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export default async function InvestorHubPage() {
  const strapiData = await getStrapiMedia('/api/reports?populate=*');
  const investorData = await getStrapiMedia('/api/investor?populate=assemblyCalls.File');
  
  const financialDocs = strapiData?.data?.map((report: any) => {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
    // Append the Strapi URL if the file exists
    const fileUrl = report.File?.url ? `${strapiUrl}${report.File.url}` : '';
    
    return {
      year: report.Year?.toString() || '',
      period: report.Period || '',
      title: report.Title || '',
      file: fileUrl,
    };
  }) || [];

  let finalAssemblyCalls = fallbackAssemblyCalls;
  if (investorData?.data?.assemblyCalls && investorData.data.assemblyCalls.length > 0) {
    finalAssemblyCalls = investorData.data.assemblyCalls.map((call: any) => {
      const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
      const fileUrl = call.File?.url ? `${strapiUrl}${call.File.url}` : '';
      
      return {
        date: formatDate(call.Date),
        time: formatTime(call.Time),
        type: call.Type || '',
        title: call.Title || '',
        file: fileUrl,
        status: call.Condition || 'Open' 
      };
    });
  }

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      {/* 1. Hero Section (Reused Component) */}
      <HeroParallax 
        imageSrc="/images/assets/bg-ivc-3.jpg"
        imageAlt="Invaca Investor Hub Background"
        badgeText="Portal Financiero"
        title="Investor Hub"
        subtitle="Acceso a información para inversionistas, reportes bursátiles, estados financieros y convocatorias oficiales de Invaca."
      />

      {/* 2. Interactive Sections (Client Component) */}
      <InvestorHubClient 
        // tickerData={tickerData}
        financialDocs={financialDocs}
        assemblyCalls={finalAssemblyCalls}
      />
    </div>
  )
}
