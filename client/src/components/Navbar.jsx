import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hexagon, Search, Menu, LogOut, User } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../firebase/auth";
import Button from "./Button";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-500 text-white p-1.5 rounded-lg group-hover:bg-brand-600 transition-colors">
                <Hexagon size={24} className="fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                BrandHive
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors">
                Explore
              </Link>
              <Link to="/categories" className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors">
                Categories
              </Link>
              <Link to="/how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors">
                How it works
              </Link>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-slate-500 hover:text-brand-500 transition-colors p-2">
                <Search size={20} />
              </button>
              
              {currentUser ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 py-1.5 px-3 rounded-full">
                    <User size={16} className="text-slate-500" />
                    <span className="text-sm font-medium text-slate-700 max-w-[100px] truncate">
                      {currentUser.email}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => logout()} className="text-slate-500 hover:text-red-500">
                    <LogOut size={18} />
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setIsAuthOpen(true)}>Log in</Button>
                  <Button variant="primary" size="sm" onClick={() => setIsAuthOpen(true)}>Join as Provider</Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-slate-500 hover:text-slate-700 p-2">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
