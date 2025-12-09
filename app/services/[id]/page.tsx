import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Clock, Users, ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { generateServices } from "@/lib/services-data"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const services = generateServices()
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Service Header */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/services" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Services
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-bold ${
                      badge === "HOT DEAL"
                        ? "bg-accent text-accent-foreground animate-pulse"
                        : badge === "Popular"
                          ? "bg-primary/20 text-primary"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{service.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(service.rating) ? "fill-accent text-accent" : "text-muted"}
                    />
                  ))}
                </div>
                <span className="font-semibold">{service.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({service.reviews} reviews)</span>
              </div>

              <p className="text-xl text-muted-foreground">{service.description}</p>
            </div>

            {/* Price Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Starting at</p>
                  <p className="text-4xl font-bold text-accent">NPR {(service.basePrice / 100000).toFixed(1)}L</p>
                  <p className="text-xs text-muted-foreground mt-2">Pricing varies by location</p>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-t border-b">
                  <div className="flex items-center gap-2 py-3">
                    <Clock size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Timeline</p>
                      <p className="font-semibold text-sm">{service.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-3">
                    <Users size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold text-sm">{service.estimatedDuration}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link href={`/checkout?service=${service.id}`}>Buy Now</Link>
                </Button>

                <Button variant="outline" className="w-full mt-3 bg-transparent" asChild>
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Service Overview</h2>
                <p className="text-lg text-muted-foreground mb-4">{service.longDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Optional Add-ons</h2>
                <div className="space-y-3">
                  {service.addOns.map((addon) => (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox id={addon.id} />
                        <label htmlFor={addon.id} className="cursor-pointer">
                          <p className="font-semibold">{addon.name}</p>
                          <p className="text-sm text-muted-foreground">NPR {addon.price.toLocaleString()}</p>
                        </label>
                      </div>
                      <Plus size={18} className="text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Tier Level</p>
                    <p className="font-serif text-xl font-bold">{service.tier}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <p className="font-serif text-xl font-bold">{service.category}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                    <p className="font-serif text-xl font-bold text-primary">{service.timeline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Sidebar */}
            <div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sticky top-24">
                <h3 className="font-serif text-xl font-bold mb-4">Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our team is ready to help you choose the right service for your project.
                </p>
                <Button className="w-full mb-3">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">Average response time: 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-card border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generateServices()
              .filter((s) => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.id}`}
                  className="group p-6 bg-background border border-border rounded-lg hover:shadow-lg hover:border-accent transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedService.name}
                    </h3>
                    <span className="text-sm px-2 py-1 bg-muted rounded text-muted-foreground flex-shrink-0 ml-2">
                      {relatedService.tier}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-accent mb-3">
                    NPR {(relatedService.basePrice / 100000).toFixed(1)}L
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-accent text-accent" />
                    <span className="text-sm font-semibold">{relatedService.rating.toFixed(1)}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
