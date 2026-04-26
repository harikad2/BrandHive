import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import ServiceCard from "../components/ServiceCard";
import { categories, providers } from "../data/mockData";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LandingPage() {
  const { currentUser } = useAuth();
  
  const getFirstName = (user) => {
    if (!user) return "";
    if (user.displayName) return user.displayName.split(" ")[0];
    if (user.email) {
      const namePart = user.email.split("@")[0];
      return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
    return "User";
  };

  const userName = getFirstName(currentUser);
  // Get top 4 rated providers for the featured section
  const featuredProviders = providers
    .filter(p => p.topRated)
    .slice(0, 4);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden rounded-3xl bg-slate-900 text-white mt-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="People working" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl px-8 md:px-12">
          {currentUser ? (
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Welcome <br/><span className="text-brand-400">{userName}</span>
            </h1>
          ) : (
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Connect. <br/><span className="text-brand-400">Discover.</span> Book.
            </h1>
          )}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Find the perfect creative professional for your next big project. 
            From web developers to photographers, hire top talent instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold">
              Find a Provider
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-white/10 hover:bg-white/20 text-white">
              How it works
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Explore Categories</h2>
            <p className="text-slate-500">Find the right talent for your specific needs</p>
          </div>
          <Link to="/categories" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors self-start sm:self-auto">
            View all <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const actualCount = providers.filter(p => p.categoryId === category.id).length;
            return <CategoryCard key={category.id} {...category} count={actualCount} />;
          })}
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Top Rated Talent</h2>
            <p className="text-slate-500">Work with our highly recommended professionals</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredProviders.map((provider) => (
            <ServiceCard key={provider.id} provider={provider} />
          ))}
        </div>
      </section>
    </div>
  );
}
