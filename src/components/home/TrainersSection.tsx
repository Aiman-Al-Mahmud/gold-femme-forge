import { Button } from "@/components/ui/button";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    image: trainer1,
    name: "Fatima Rahman",
    specialty: "Gym & Fitness Expert",
    experience: "8+ years experience",
  },
  {
    image: trainer2,
    name: "Nusrat Jahan",
    specialty: "Yoga Instructor",
    experience: "6+ years experience",
  },
  {
    image: trainer3,
    name: "Sadia Akter",
    specialty: "Zumba & Aerobics",
    experience: "5+ years experience",
  },
];

export default function TrainersSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Experts
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our certified female trainers are dedicated to helping you achieve your fitness goals
            in a comfortable and supportive environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm card-hover border border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {trainer.name}
                </h3>
                <p className="text-primary font-medium text-sm mt-1">
                  {trainer.specialty}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {trainer.experience}
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
