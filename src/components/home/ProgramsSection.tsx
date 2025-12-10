import { Dumbbell, Heart, Music, Zap } from "lucide-react";
import fitnessModel from "@/assets/yoga4.jpg";

const programs = [
  {
    icon: Dumbbell,
    title: "Gym Training",
    schedule: "9 AM – 9 PM (Everyday)",
    description: "Full body workout with modern equipment and personal guidance.",
  },
  {
    icon: Heart,
    title: "Yoga (Online & Offline)",
    schedule: "10 AM",
    description: "Connect mind, body & soul with our peaceful yoga sessions.",
  },
  {
    icon: Heart,
    title: "Yoga (Offline)",
    schedule: "4 PM & 6 PM",
    description: "Evening yoga classes for relaxation and flexibility.",
  },
  {
    icon: Music,
    title: "Zumba",
    schedule: "2 Days a Week",
    description: "Dance your way to fitness with energetic Zumba sessions.",
  },
];

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Transform Your <span className="text-primary">Fitness Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our comprehensive fitness programs designed exclusively for women. 
              Our expert trainers will guide you through every step of your transformation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-sm card-hover border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {program.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {program.schedule}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src={fitnessModel}
                alt="Fitness woman"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/50 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
