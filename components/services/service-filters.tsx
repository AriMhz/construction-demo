"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

interface ServiceFiltersProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  selectedTier: string | null
  onTierChange: (tier: string | null) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  sortBy: "price-low" | "price-high" | "rating" | "popular"
  onSortChange: (sort: "price-low" | "price-high" | "rating" | "popular") => void
  categories: string[]
  tiers: string[]
}

export function ServiceFilters({
  selectedCategory,
  onCategoryChange,
  selectedTier,
  onTierChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  categories,
  tiers,
}: ServiceFiltersProps) {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Sort */}
      <div>
        <h3 className="font-semibold mb-3">Sort By</h3>
        <div className="space-y-2">
          {(
            [
              { value: "popular", label: "Most Popular" },
              { value: "price-low", label: "Price: Low to High" },
              { value: "price-high", label: "Price: High to Low" },
              { value: "rating", label: "Highest Rated" },
            ] as const
          ).map((option) => (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                sortBy === option.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => onCategoryChange(null)}
            className="w-full justify-start"
            size="sm"
          >
            All Categories
            {selectedCategory === null && <X size={14} className="ml-auto" />}
          </Button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(selectedCategory === category ? null : category)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {category}
              {selectedCategory === category && <X size={14} className="ml-auto inline" />}
            </button>
          ))}
        </div>
      </div>

      {/* Tier */}
      <div>
        <h3 className="font-semibold mb-3">Tier Level</h3>
        <div className="space-y-2">
          <Button
            variant={selectedTier === null ? "default" : "outline"}
            onClick={() => onTierChange(null)}
            className="w-full justify-start"
            size="sm"
          >
            All Tiers
            {selectedTier === null && <X size={14} className="ml-auto" />}
          </Button>
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => onTierChange(selectedTier === tier ? null : tier)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                selectedTier === tier
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {tier}
              {selectedTier === tier && <X size={14} className="ml-auto inline" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-4">
          <div className="px-2 py-4 bg-muted rounded">
            <Slider
              value={[priceRange[0], priceRange[1]]}
              onValueChange={(value) => onPriceRangeChange([value[0], value[1]])}
              min={0}
              max={2000000}
              step={50000}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">NPR {(priceRange[0] / 100000).toFixed(1)}L</span>
            <span className="text-muted-foreground">NPR {(priceRange[1] / 100000).toFixed(1)}L</span>
          </div>
        </div>
      </div>
    </div>
  )
}
