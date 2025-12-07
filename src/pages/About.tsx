import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Clock } from "lucide-react";
import fitnessModel from "@/assets/fitness-model-1.jpg";

const features = [
  {
    icon: Heart,
    title: "Women-Only Environment",
    description: "A safe, comfortable space designed exclusively for women to train and grow.",
  },
  {
    icon: Users,
    title: "Expert Female Trainers",
    description: "Our certified trainers understand women's unique fitness needs and goals.",
  },
  {
    icon: Award,
    title: "Premium Equipment",
    description: "State-of-the-art fitness equipment and facilities for the best workout experience.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Open from 9 AM to 9 PM every day to fit your busy schedule.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              The only women-exclusive fitness center in Khulna, empowering women since day one.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Empowering Women Through <span className="text-primary">Fitness</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Women's Gold Gym was founded with a simple yet powerful mission: to create a safe, 
                    supportive, and empowering space where women can focus on their fitness journey 
                    without any hesitation.
                  </p>
                  <p>
                    As the only women-exclusive fitness center in Khulna, we understand the unique 
                    challenges women face in achieving their health and fitness goals. Our dedicated 
                    team of female trainers is committed to helping you every step of the way.
                  </p>
                  <p>
                    Whether you're looking to build strength, improve flexibility through yoga, 
                    dance your way to fitness with Zumba, or simply lead a healthier lifestyle, 
                    Women's Gold Gym is here for you.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/appointment">
                    <Button variant="hero" size="lg">
                      Join Us Today
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src={fitnessModel}
                  alt="About Women's Gold Gym"
                  className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/50 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-muted">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Why Choose <span className="text-primary">Us</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center card-hover border border-border/50"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="section-padding bg-card">
          <div className="container-custom mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Founder</span>
            </h2>
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Anjuman Ara (Anju)
              </h3>
              <p className="text-primary font-medium mt-2">Owner & Founder</p>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                With a passion for women's health and fitness, Anjuman Ara founded Women's Gold Gym 
                to provide women in Khulna with a dedicated space to pursue their fitness goals. 
                Her vision continues to inspire and empower women every day.
              </p>
              <div className="mt-6 text-muted-foreground">
                <p>Amin Plaza, 68/B KDA Avenue, Khulna</p>
                <p className="mt-1">Contact: +880 1995 615155</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
