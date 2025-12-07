import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrainersSection from "@/components/home/TrainersSection";

export default function Trainers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our Expert <span className="text-primary">Trainers</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Meet our certified female trainers dedicated to helping you achieve your fitness goals.
            </p>
          </div>
        </section>

        <TrainersSection />
      </main>
      <Footer />
    </div>
  );
}
