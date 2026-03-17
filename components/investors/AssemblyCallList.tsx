import { Calendar, Clock, FileDown, Megaphone } from 'lucide-react'

interface AssemblyCall {
  date: string
  time: string
  type: string
  title: string
  file: string
  status: 'Open' | 'Closed'
}

interface AssemblyCallListProps {
  calls: AssemblyCall[]
}

export function AssemblyCallList({ calls }: AssemblyCallListProps) {
  return (
    <div className="space-y-4">
      {calls.map((call, index) => (
        <div 
          key={index} 
          className="bg-white px-6 py-6 rounded-xs border border-neutral-200 transition-all duration-500 relative overflow-hidden group hover:border-accent/30"
        >
           {/* Left Accent Strip */}
           <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-b from-accent to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-6 pl-0 md:pl-2">
             <div className="flex-1">
               <div className="flex flex-wrap gap-3 mb-6 md:mb-4">
                 <span className={`inline-flex items-center px-3 py-1 rounded-xs text-xs font-semibold tracking-wide ${
                    call.type === 'Ordinaria' ? 'bg-dark-700 text-dark-50' : 'bg-accent-500 text-accent-50'
                 }`}>
                    <Megaphone className="w-3 h-3 mr-1.5" /> {call.type}
                 </span>
                 <span className="inline-flex items-center px-3 py-1 rounded-xs text-xs font-medium bg-neutral-100 text-dark-700 font-body">
                    <Calendar className="w-3 h-3 mr-1.5" /> {call.date}
                 </span>
                 <span className="inline-flex items-center px-3 py-1 rounded-xs text-xs font-medium bg-neutral-100 text-dark-700 font-body">
                    <Clock className="w-3 h-3 mr-1.5" /> {call.time}
                 </span>
               </div>
               <h3 className="text-body-lg font-body font-semibold text-dark leading-snug">
                 {call.title}
               </h3>
             </div>
             
             <div className="flex-shrink-0 w-full md:w-auto mt-0">
               <a 
                 href={call.file}
                 download
                 className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-dark text-white font-body font-semibold text-sm tracking-wide transition-all duration-300 group-hover:bg-accent"
               >
                 <FileDown className="w-4 h-4 mr-2" />
                 Descargar PDF
               </a>
             </div>
           </div>
        </div>
      ))}
    </div>
  )
}
