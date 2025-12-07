import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Monthly Plan",
    price: "2000",
    period: "per month",
    features: [
      "Full gym access",
      "All yoga classes",
      "Zumba sessions",
      "Aerobics classes",
      "Personal locker",
      "Changing rooms",
    ],
    popular: true,
  },
  {
    name: "Other Plan",
    price: "1500",
    period: "per month",
    features: [
      "Basic gym access",
      "Select classes",
      "Flexible timing",
      "More details coming soon",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Membership Plans
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Simple & <span className="text-primary">Affordable</span> Pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle and start your fitness journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 card-hover ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-xl"
                  : "bg-background border-2 border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-2xl font-bold mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">৳{plan.price}</span>
                <span
                  className={
                    plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      size={18}
                      className={plan.popular ? "text-secondary" : "text-primary"}
                    />
                    <span
                      className={
                        plan.popular ? "text-primary-foreground/90" : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/appointment">
                <Button
                  variant={plan.popular ? "secondary" : "default"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
