import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FEATURED_PROJECTS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const project = FEATURED_PROJECTS.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Project Header */}
      <section className="relative py-20 border-b overflow-hidden">
        {/* Background Image with Overlay */}
        {project.image && (
          <div className="absolute inset-0 z-0">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          </div>
        )}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Button variant="ghost" className="mb-6 hover:bg-white/20 text-white hover:text-white" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{project.name}</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-white/90">
              <div>
                <p className="text-sm text-white/70 mb-1">Location</p>
                <p className="flex items-center gap-2 font-semibold">
                  <MapPin size={18} className="text-white" />
                  {project.location}
                </p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Year Completed</p>
                <p className="flex items-center gap-2 font-semibold">
                  <Calendar size={18} className="text-white" />
                  {project.year}
                </p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Project Type</p>
                <p className="flex items-center gap-2 font-semibold">
                  <TrendingUp size={18} className="text-white" />
                  {project.type}
                </p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Images</p>
                <p className="flex items-center gap-2 font-semibold">
                  <Users size={18} className="text-white" />
                  {project.imageCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {FEATURED_PROJECTS.map((p, idx) => (
              <div
                key={p.id}
                className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg overflow-hidden relative group"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${project.name} - Gallery Image ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-serif font-bold text-primary/20 mb-2">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-muted-foreground">Project Image</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-card border-t border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.summary}</p>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold">Project Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      State-of-the-art construction techniques and materials
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Full compliance with Nepal building codes and standards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Sustainable and eco-friendly construction practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Dedicated project management and quality control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold mb-4">Interested in Similar Work?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact our team to discuss your construction project and get a personalized quote.
                </p>
                <Button className="w-full mb-3">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>

              {/* Client Testimonial */}
              <div className="mt-6 bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  "HIMALAYA BUILD CO. exceeded our expectations. Their attention to detail and professionalism is
                  outstanding."
                </p>
                <p className="font-semibold text-sm">— Project Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.filter((p) => p.type === project.type && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-accent transition-all"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-accent/10 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-serif font-bold text-primary/20 mb-2">
                        {relatedProject.name.split(" ")[0]}
                      </div>
                      <p className="text-xs text-muted-foreground">{relatedProject.year}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold group-hover:text-primary transition-colors">
                      {relatedProject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{relatedProject.location}</p>
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
