import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Filter, ChevronDown } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { categories, providers } from "../data/mockData";

export default function CategoryPage() {
  const { id } = useParams();
  
  const category = categories.find(c => c.id === id);
  const categoryProviders = id 
    ? providers.filter(p => p.categoryId === id)
    : providers; // If no id, show all

  const pageTitle = category ? category.name : "All Providers";
  const pageDescription = category 
    ? `Browse top-rated ${category.name.toLowerCase()} professionals for your next project.`
    : "Browse all our top-rated creative professionals.";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{pageTitle}</h1>
        <p className="text-lg text-slate-600 max-w-2xl">{pageDescription}</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
          <Button variant="secondary" size="sm" className="rounded-full whitespace-nowrap bg-brand-50 border-brand-200 text-brand-700">
            All
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full whitespace-nowrap bg-slate-50 border border-slate-200">
            Top Rated
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full whitespace-nowrap bg-slate-50 border border-slate-200">
            Available Today
          </Button>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center">
            <Filter size={16} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center">
            Sort by: Recommended <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <span className="font-semibold text-slate-900">{categoryProviders.length}</span> 
        <span className="text-slate-500"> providers found</span>
      </div>

      {categoryProviders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProviders.map((provider) => (
            <ServiceCard key={provider.id} provider={provider} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter size={32} className="text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No providers found</h3>
          <p className="text-slate-500 max-w-md mx-auto mb-6">
            We couldn't find any providers matching your criteria. Try adjusting your filters or checking back later.
          </p>
          <Link to="/">
            <Button>Explore other categories</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
