
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductFeatures from "@/components/ProductFeatures";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ProductFeatures />
      <TestimonialSection />
      <BlogSection />
      <CtaSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
