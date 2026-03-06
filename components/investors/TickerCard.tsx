import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react'

interface TickerCardProps {
  symbol: string
  name: string
  price: string
  change: string
  changePercent: string
  isPositive: boolean
  volume: string
  lastUpdate: string
}

export function TickerCard({ symbol, name, price, change, changePercent, isPositive, volume, lastUpdate }: TickerCardProps) {
  return (
    <div className="bg-white p-6 rounded-xs border border-neutral-200 hover:border-accent/40 transition-all duration-500 group relative overflow-hidden">
      {/* Decorative Accent Bar */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="text-2xl font-display font-bold text-dark group-hover:text-accent transition-colors duration-300">{symbol}</h3>
          <p className="text-sm text-slate font-body">{name}</p>
        </div>
        <div className={`p-3 rounded-full transition-transform duration-500 group-hover:scale-110 ${isPositive ? 'bg-green-100/50 text-green-700' : 'bg-red-100/50 text-red-700'}`}>
          <TrendingUp className="w-5 h-5" />
        </div>
      </div>
      
      <div className="mb-4 relative z-10">
        <span className="text-5xl font-body font-bold text-dark tracking-tight">{price}</span>
       <span className="text-sm text-slate font-body ml-2 font-medium">VES</span>
      </div>

      <div className="flex items-center gap-2 mb-6 relative z-10">
        <span className={`inline-flex items-center px-2 py-1 rounded-sm text-sm font-semibold ${isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {change} ({changePercent})
        </span>
        <span className="text-xs text-slate-400 font-body uppercase tracking-wider font-semibold">Hoy</span>
      </div>

      <div className="pt-4 border-t border-neutral-100 flex justify-between items-center text-sm relative z-10">
        <span className="text-slate font-body">Volumen: <span className="font-semibold text-dark">{volume}</span></span>
         <span className="text-slate-400 font-body text-xs">{lastUpdate}</span>
      </div>
    </div>
  )
}
