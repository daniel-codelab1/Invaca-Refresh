import { FileDown, FileText } from 'lucide-react'

interface FinancialDoc {
  period: string
  title: string
  file: string
  year: string
}

interface FinancialDocListProps {
  documents: FinancialDoc[]
  className?: string
}

export function FinancialDocList({ documents, className }: FinancialDocListProps) {
  return (
    <div className={className || "grid grid-cols-1 md:grid-cols-2 gap-4"}>
      {documents.map((doc, index) => (
        <div 
          key={index}
          className="relative min-h-80 flex flex-col items-start justify-between rounded-sm p-7 bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center border-b-2 border-dark-400 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:bg-accent-400 hover:before:w-full before:transition-all before:duration-500 before:ease-in-out group"
        >
          <div className='mb-10'>
            <p className="text-2xl font-display font-normal text-white mb-4">{doc.period}</p>
            <p className="text-body-md font-light text-white/60 w-11/12">{doc.title}</p>
          </div>
          <a 
            href={doc.file}
            download
            className="w-auto py-3 px-6 text-body-sm font-body font-semibold flex items-center justify-center bg-white/10 text-white rounded-xs hover:bg-accent hover:text-white transition-colors backdrop-blur-[2px]"
            title="Descargar PDF"
          >
            Descargar
          </a>
        </div>
      ))}
    </div>
  )
}
