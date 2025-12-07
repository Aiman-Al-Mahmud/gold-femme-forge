import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgramsSection from "@/components/home/ProgramsSection";
import PricingSection from "@/components/home/PricingSection";

export default function Programs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Comprehensive fitness programs designed exclusively for women.
            </p>
          </div>
        </section>

        <ProgramsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
