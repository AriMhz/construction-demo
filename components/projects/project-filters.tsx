"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface ProjectFiltersProps {
  selectedType: string | null
  onTypeChange: (type: string | null) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  projectTypes: readonly string[]
}

export function ProjectFilters({
  selectedType,
  onTypeChange,
  searchQuery,
  onSearchChange,
  projectTypes,
}: ProjectFiltersProps) {
  return (
    <div className="mb-12 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          placeholder="Search projects by name, location, or tags..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Type Filters */}
      <div>
        <p className="text-sm font-semibold mb-3">Filter by Type</p>
        <div className="flex flex-wrap gap-2">
          <Button variant={selectedType === null ? "default" : "outline"} onClick={() => onTypeChange(null)} size="sm">
            All Projects
          </Button>
          {projectTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => onTypeChange(type)}
              size="sm"
            >
              {type}
              {selectedType === type && <X size={14} className="ml-2" />}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
