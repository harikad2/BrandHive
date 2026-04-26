import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProviderLayout from "./components/ProviderLayout";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AuthModal from "./components/AuthModal";

function AppContent() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<ProviderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/provider/:id" element={<ServiceDetailPage />} />
        </Route>
      </Routes>
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;