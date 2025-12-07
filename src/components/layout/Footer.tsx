import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Trainers", path: "/trainers" },
  { name: "Appointment", path: "/appointment" },
  { name: "Blog", path: "/blog" },
];

const programs = [
  "Gym Training",
  "Yoga Classes",
  "Zumba Sessions",
  "Aerobics",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Women's Gold Gym" className="h-16 w-auto" />
            </Link>
            <h3 className="font-display text-2xl font-bold text-secondary">
              Women's Gold Gym
            </h3>
            <p className="text-silver text-sm leading-relaxed">
              The only women-exclusive fitness center in Khulna. Empowering women through Gym, Yoga, Zumba & Aerobics.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-secondary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-silver hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-xl font-semibold text-secondary mb-6">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-silver text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold text-secondary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-silver text-sm">
                  Amin Plaza, 68/B KDA Avenue, Khulna
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a
                  href="tel:+8801995615155"
                  className="text-silver hover:text-primary transition-colors text-sm"
                >
                  +880 1995 615155
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a
                  href="mailto:wgyg.khl@gmail.com"
                  className="text-silver hover:text-primary transition-colors text-sm"
                >
                  wgyg.khl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver/20 mt-12 pt-8 text-center">
          <p className="text-silver text-sm">
            © {new Date().getFullYear()} Women's Gold Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
