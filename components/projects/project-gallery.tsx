import Link from "next/link"

interface Project {
  id: string
  name: string
  location: string
  year: number
  type: string
  summary: string
  tags: readonly string[] | string[]
  imageCount: number
  image?: string
}

interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group relative rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-accent transition-all"
        >
          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/10 h-64 flex items-center justify-center overflow-hidden relative">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-primary/20 mb-2">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-muted-foreground">{project.imageCount} Images</p>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 bg-card">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif font-bold group-hover:text-primary transition-colors line-clamp-2">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
            <p className="text-xs text-muted-foreground mt-2">{project.year}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
