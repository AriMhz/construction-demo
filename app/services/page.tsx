"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceGrid } from "@/components/services/service-grid"
import { ServiceFilters } from "@/components/services/service-filters"
import { useState, useMemo } from "react"
import { SERVICE_CATEGORIES, SERVICE_TIERS } from "@/lib/constants"
import { generateServices } from "@/lib/services-data"

export default function ServicesPage() {
  const services = useMemo(() => generateServices(), [])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000])
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating" | "popular">("popular")

  // Filter and sort services
  const filteredServices = useMemo(() => {
    const result = services.filter((service) => {
      const matchCategory = !selectedCategory || service.category === selectedCategory
      const matchTier = !selectedTier || service.tier === selectedTier
      const matchPrice = service.basePrice >= priceRange[0] && service.basePrice <= priceRange[1]
      return matchCategory && matchTier && matchPrice
    })

    // Sort
    if (sortBy === "price-low") result.sort((a, b) => a.basePrice - b.basePrice)
    if (sortBy === "price-high") result.sort((a, b) => b.basePrice - a.basePrice)
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating)
    if (sortBy === "popular") result.sort((a, b) => b.reviews - a.reviews)

    return result
  }, [services, selectedCategory, selectedTier, priceRange, sortBy])

  return (
    <main className="min-h-screen bg-background">
      <Header theme="dark" />

      {/* Page Header */}
      <section className="py-12 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Browse {services.length} professional construction services tailored for Nepal
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <ServiceFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedTier={selectedTier}
                onTierChange={setSelectedTier}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                sortBy={sortBy}
                onSortChange={setSortBy}
                categories={Array.from(SERVICE_CATEGORIES)}
                tiers={Array.from(SERVICE_TIERS)}
              />
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-3">
              {filteredServices.length > 0 ? (
                <ServiceGrid services={filteredServices} />
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">No services found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null)
                      setSelectedTier(null)
                      setPriceRange([0, 2000000])
                    }}
                    className="text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
