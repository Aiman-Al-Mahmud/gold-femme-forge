import fitnessModel from "@/assets/yoga.jpg";

export default function WelcomeSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
              Welcome to Women's Gold Gym –{" "}
              <span className="text-gold">
                Khulna's Only Dedicated Women's Fitness, Yoga & Aerobics
              </span>
            </h2>
            <p className="mt-6 text-primary-foreground/90 text-lg leading-relaxed">
              At Women's Gold Gym, we believe every woman deserves a safe, empowering space 
              to achieve her fitness goals. Our state-of-the-art facility offers personalized 
              training programs, expert guidance, and a supportive community that celebrates 
              your journey to wellness.
            </p>
            <p className="mt-4 text-primary-foreground/80 text-base">
              Join us and transform your life through fitness, yoga, zumba, and aerobics 
              in an exclusive women-only environment.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/30 rounded-3xl transform rotate-3" />
              <img
                src={fitnessModel}
                alt="Women's Gold Gym - Fitness Model"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
