import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProviderLayout from "./components/ProviderLayout";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<ProviderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/provider/:id" element={<ServiceDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;