import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FEATURED_PROJECTS } from "@/lib/constants"
import { MapPin, Calendar } from "lucide-react"

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest completed works showcasing innovation, quality, and excellence in construction.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg bg-card border border-border transition-all hover:shadow-xl hover:border-accent ${idx === 0 ? "lg:col-span-1 lg:row-span-2" : ""
                }`}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden ${idx === 0 ? "h-96 md:h-full" : "h-64"}`}
              >
                {/* Fallback gradient if image fails, or loading state */}
                <div className="absolute inset-0 bg-muted/20" />

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
                    <div className="text-center">
                      <div className="text-6xl font-serif font-bold text-primary/20 mb-2">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-muted-foreground">{project.imageCount} High-Res Images</p>
                    </div>
                  </div>
                )}

                {/* Overlay gradient for text readability if text were over image (it's not here, but good practice) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.summary}</p>

                {/* Meta Info */}
                <div className="flex gap-4 text-sm text-muted-foreground mb-4 pb-4 border-t border-border">
                  <div className="flex items-center gap-2 pt-4">
                    <MapPin size={16} className="text-accent" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-4">
                    <Calendar size={16} className="text-accent" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="ghost" className="w-full hover:bg-primary/10 text-primary" asChild>
                  <Link href={`/projects/${project.id}`}>View Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
