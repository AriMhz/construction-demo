import Link from "next/link"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-4">HIMALAYA BUILD CO.</h3>
            <p className="text-sm text-muted-foreground">Premium construction and innovative projects across Nepal.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+977-1-XXXXXXX" className="hover:text-primary">
                  +977-1-XXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@himalaya.build" className="hover:text-primary">
                  info@himalaya.build
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 HIMALAYA BUILD CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
