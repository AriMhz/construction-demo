"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ProjectFilters } from "@/components/projects/project-filters"
import { useState } from "react"
import { FEATURED_PROJECTS, PROJECT_TYPES } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProjectsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter projects based on type and search
  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    const matchesType = !selectedType || project.type === selectedType
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesType && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      <Header theme="dark" />

      {/* Page Header */}
      <section className="py-12 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Our Projects</h1>
              <p className="text-lg text-muted-foreground">
                Explore {FEATURED_PROJECTS.length} completed projects across Nepal
              </p>
            </div>
            <Button asChild>
              <Link href="/projects/new" className="flex items-center gap-2">
                <Plus size={18} />
                Submit Your Project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search */}
          <ProjectFilters
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            projectTypes={PROJECT_TYPES}
          />

          {/* Gallery */}
          {filteredProjects.length > 0 ? (
            <ProjectGallery projects={filteredProjects} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No projects found matching your criteria.</p>
              <Button variant="outline" onClick={() => setSelectedType(null)}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
