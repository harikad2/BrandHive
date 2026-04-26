import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, CheckCircle2, Shield, Share2, Heart } from "lucide-react";
import Button from "../components/Button";
import BookingModal from "../components/BookingModal";
import { providers } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser, openAuthModal } = useAuth();
  
  const provider = providers.find(p => p.id === id);

  if (!provider) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Provider not found</h2>
        <Button onClick={() => navigate("/")}>Go back home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-500 hover:border-brand-200 transition-colors bg-white shadow-sm">
            <Share2 size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-rose-500 hover:border-rose-200 transition-colors bg-white shadow-sm">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Profile Header Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <div className="h-48 md:h-64 overflow-hidden relative">
              <img 
                src={provider.coverImage} 
                alt="Cover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            <div className="px-6 md:px-10 pb-10 relative">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16 mb-6">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white relative z-10 shrink-0">
                  <img 
                    src={provider.avatar} 
                    alt={provider.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow pt-2 md:pt-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-slate-900">{provider.name}</h1>
                    {provider.topRated && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-md flex items-center">
                        <Star size={12} className="mr-1 fill-current" /> Top Rated
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm">
                    <div className="flex items-center gap-1 text-yellow-500 font-medium">
                      <Star size={16} className="fill-current" />
                      <span className="text-slate-800">{provider.rating}</span>
                      <span className="text-slate-400">({provider.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-slate-400" />
                      {provider.location}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">About Me</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {provider.longDescription}
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Services Offered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {provider.services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="mt-0.5 text-brand-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium text-slate-800">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-500 font-medium">Starting from</span>
              <span className="text-3xl font-bold text-slate-900">₹{provider.startingPrice}</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock size={18} className="text-slate-400" />
                <span>Usually responds in 2 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Shield size={18} className="text-brand-500" />
                <span>BrandHive Protected Payment</span>
              </div>
              {provider.availableToday && (
                <div className="flex items-center gap-3 text-sm text-emerald-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span>Available for work today</span>
                </div>
              )}
            </div>
            
            <Button 
              size="lg" 
              className="w-full text-lg shadow-brand-500/20"
              onClick={() => {
                if (currentUser) {
                  setIsModalOpen(true);
                } else {
                  openAuthModal();
                }
              }}
            >
              Book Service
            </Button>
            
            <p className="text-center text-xs text-slate-400 mt-4">
              You won't be charged yet
            </p>
          </div>
        </div>
        
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        providerName={provider.name}
        service={provider.services[0] || "Custom Project"}
      />
    </div>
  );
}
