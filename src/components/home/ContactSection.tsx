import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - in production, this would save to JSON/database
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store in localStorage for now (would be JSON file in production)
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    messages.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("messages", JSON.stringify(messages));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Contact <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-5 border border-border/50">
                <MapPin className="text-primary mb-3" size={24} />
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground text-sm">
                  Amin Plaza, 68/B KDA Avenue, Khulna
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border/50">
                <Phone className="text-primary mb-3" size={24} />
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a
                  href="tel:+8801995615155"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +880 1995 615155
                </a>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border/50">
                <Mail className="text-primary mb-3" size={24} />
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a
                  href="mailto:wgyg.khl@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  wgyg.khl@gmail.com
                </a>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border/50">
                <Clock className="text-primary mb-3" size={24} />
                <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                <p className="text-muted-foreground text-sm">9 AM - 9 PM Daily</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5522015911797!2d89.55314709301673!3d22.81905093286551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91303f3b19a9%3A0x9b93551d2755b255!2sWoman's%20Gold%20Yoga%20%26%20Gym!5e0!3m2!1sen!2sbd!4v1765088078385!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Women's Gold Gym Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
