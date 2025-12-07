import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, User } from "lucide-react";

const services = [
  "Gym Training",
  "Yoga (Online)",
  "Yoga (Offline)",
  "Zumba",
  "Aerobics",
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    timeSlot: "7:00 PM - 8:00 PM",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store in localStorage (would be JSON file in production)
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    appointments.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "pending",
    });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    toast.success("Appointment booked successfully! We'll contact you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      timeSlot: "7:00 PM - 8:00 PM",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Book an <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Schedule your visit to Women's Gold Gym. Our team will confirm your appointment shortly.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding">
          <div className="container-custom mx-auto max-w-2xl">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+880 1XXX XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground font-medium">
                    Service of Interest
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date" className="text-foreground font-medium">
                      Preferred Date
                    </Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                        className="pl-10 h-12"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="timeSlot" className="text-foreground font-medium">
                      Available Time Slot
                    </Label>
                    <div className="relative mt-2">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="timeSlot"
                        value="7:00 PM - 8:00 PM"
                        disabled
                        className="pl-10 h-12 bg-muted"
                      />
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">
                      Appointments are only available between 7 PM - 8 PM
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
