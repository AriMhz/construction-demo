import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { Service } from "@/lib/services-data"

interface ServiceGridProps {
  services: Service[]
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Showing {services.length} service{services.length !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              {/* Content */}
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-2">
                  {service.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        badge === "HOT DEAL" ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                  {service.name}
                </h3>

                <p className="text-muted-foreground">{service.description}</p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(service.rating) ? "fill-accent text-accent" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{service.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                </div>
              </div>

              {/* Pricing and Specs */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tier</p>
                  <p className="font-semibold text-primary">{service.tier}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="font-semibold">{service.timeline}</p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                  <p className="text-3xl font-bold text-accent">NPR {(service.basePrice / 100000).toFixed(1)}L</p>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <Link href={`/services/${service.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/checkout?service=${service.id}`}>Buy Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
