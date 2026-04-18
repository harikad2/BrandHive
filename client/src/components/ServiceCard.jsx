import { Link } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";
import Button from "./Button";

export default function ServiceCard({ provider }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src={provider.coverImage || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop"} 
          alt={`${provider.name} workspace`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {provider.topRated && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
            Top Rated
          </div>
        )}
        {provider.availableToday && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
            <Clock size={12} /> Today
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="absolute -top-10 right-6 rounded-full border-4 border-white overflow-hidden w-16 h-16 shadow-sm bg-white">
          <img 
            src={provider.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"} 
            alt={provider.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-1 mb-2 text-yellow-500">
          <Star size={16} className="fill-current" />
          <span className="font-bold text-slate-800">{provider.rating}</span>
          <span className="text-slate-400 text-sm">({provider.reviews})</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-1">
          {provider.name}
        </h3>
        
        <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
          <MapPin size={14} />
          <span>{provider.location}</span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-grow">
          {provider.shortDescription}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-sm font-medium text-slate-800">
            From <span className="text-brand-600">₹{provider.startingPrice}</span>
          </div>
          <Link to={`/provider/${provider.id}`}>
            <Button variant="secondary" size="sm" className="group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
