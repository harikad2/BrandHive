import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ id, name, count, icon: Icon, colorClass, bgImage }) {
  return (
    <Link 
      to={`/category/${id}`}
      className="group relative bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-400 transition-all duration-300 flex flex-col h-full min-h-[200px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={name}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-auto ${colorClass} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className="text-white" />
        </div>
        
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-300 transition-colors drop-shadow-sm">
            {name}
          </h3>
          
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-sm font-medium">{count} Providers</span>
            <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-400" />
          </div>
        </div>
      </div>
    </Link>
  );
}
