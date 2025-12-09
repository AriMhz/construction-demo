import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Layers, Leaf, Wrench } from "lucide-react"

const services = [
  {
    id: "premium-foundation",
    name: "Premium Foundation Package",
    price: "1,250,000",
    badge: "HOT DEAL",
    description: "Complete foundation systems for luxury villas and commercial spaces.",
    icon: Layers,
    tags: ["Foundation", "Residential"],
  },
  {
    id: "seismic-retrofit",
    name: "Seismic Retrofit Kit",
    price: "450,000",
    badge: "MOST BOUGHT",
    description: "Earthquake-resilient upgrades for existing structures.",
    icon: Zap,
    tags: ["Retrofit", "Safety"],
  },
  {
    id: "mep-office",
    name: "MEP Complete",
    price: "800,000",
    badge: "POPULAR",
    description: "Full mechanical, electrical & plumbing systems for office spaces.",
    icon: Wrench,
    tags: ["MEP", "Commercial"],
  },
  {
    id: "eco-landscape",
    name: "Eco Landscape + Drainage",
    price: "320,000",
    badge: "NEW",
    description: "Sustainable landscaping with modern drainage solutions.",
    icon: Leaf,
    tags: ["Landscaping", "Eco-Friendly"],
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to Nepal's unique needs and market conditions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative rounded-lg bg-background border border-border p-6 hover:shadow-lg hover:border-accent transition-all"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${service.badge === "HOT DEAL"
                        ? "bg-accent text-accent-foreground animate-pulse"
                        : service.badge === "POPULAR"
                          ? "bg-primary/20 text-primary"
                          : service.badge === "MOST BOUGHT"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      }`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4 p-3 w-fit bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-t border-border pt-4">
                  <p className="text-2xl font-bold text-accent">NPR {service.price}</p>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full" asChild>
                  <Link href={`/services/${service.id}`}>View Details</Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* View All Services */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">Browse All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
