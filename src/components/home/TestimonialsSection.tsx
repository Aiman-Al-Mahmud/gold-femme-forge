import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import fitnessModel1 from "@/assets/tes3.jpg";
import fitnessModel2 from "@/assets/tes2.jpg";
import yoga5 from "@/assets/tes1.jpg";

const testimonials = [
  {
    name: "Rashida Begum",
    role: "Member since 2022",
    content:
      "Women's Gold Gym has completely transformed my life. The trainers are incredibly supportive and the women-only environment makes me feel so comfortable. I've lost 15 kgs and gained so much confidence!",
    rating: 5,
    image: fitnessModel1,
  },
  {
    name: "Tahmina Akter",
    role: "Member since 2023",
    content:
      "The yoga classes here are amazing! The peaceful environment and expert instruction have helped me manage my stress and improve my flexibility. Highly recommend to all women in Khulna.",
    rating: 5,
    image: yoga5,
  },
  {
    name: "Nasreen Sultana",
    role: "Member since 2021",
    content:
      "Best decision I ever made was joining this gym. The Zumba sessions are so fun and energetic. I look forward to every workout. The staff treats everyone like family.",
    rating: 5,
    image: fitnessModel2,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
          }`}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Member Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-8">
              What Our <span className="text-primary">Members Say</span>
            </h2>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-secondary fill-secondary"
                      size={20}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-20"
          }`}>
            <div className="relative z-10">
              <img
                key={currentIndex}
                src={testimonials[currentIndex].image}
                alt="Happy fitness member"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl transition-all duration-500 animate-fade-up"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/50 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
