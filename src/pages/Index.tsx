import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/layout/HeroSection";
import { CategoryNav } from "@/components/layout/CategoryNav";
import { FeaturedSection } from "@/components/products/FeaturedSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryNav />
        <FeaturedSection />
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our best-selling products loved by thousands of customers worldwide.
              </p>
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
