import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-500 text-white p-1 rounded-md">
                <Hexagon size={20} className="fill-current" />
              </div>
              <span className="text-lg font-bold text-slate-900">BrandHive</span>
            </Link>
            <p className="text-slate-500 text-sm mb-4">
              Connect. Discover. Book. The premier platform for finding top-tier service providers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="#" className="hover:text-brand-500 transition-colors">How to hire</Link></li>
              <li><Link to="#" className="hover:text-brand-500 transition-colors">Talent Marketplace</Link></li>
              <li><Link to="#" className="hover:text-brand-500 transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">For Providers</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="#" className="hover:text-brand-500 transition-colors">How to find work</Link></li>
              <li><Link to="#" className="hover:text-brand-500 transition-colors">Create a Profile</Link></li>
              <li><Link to="#" className="hover:text-brand-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="#" className="hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-brand-500 transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BrandHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
