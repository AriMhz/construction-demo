import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header theme="dark" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About HIMALAYA BUILD CO.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading construction excellence in Nepal with decades of expertise in residential, commercial, and
            institutional projects.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card border-t border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To deliver exceptional construction services that transform visions into reality while maintaining the
                highest standards of quality, safety, and professionalism.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to understanding our clients' unique needs and providing tailored solutions that exceed
                expectations and create lasting value.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be Nepal's most trusted and innovative construction company, recognized for our commitment to
                excellence, sustainability, and community development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a Nepal where modern construction practices and eco-friendly solutions create spaces that
                enhance quality of life for all communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Uncompromising quality in every project",
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Transparent and honest business practices",
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Eco-friendly construction solutions",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Modern techniques and technology",
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card border-t border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                bio: "25+ years in construction management",
                image: "/team/rajesh.jpg",
              },
              {
                name: "Priya Shrestha",
                role: "Head of Design",
                bio: "Award-winning architect and designer",
                image: "/team/priya.png",
              },
              {
                name: "Amit Patel",
                role: "Project Manager",
                bio: "Expert in large-scale project execution",
                image: "/team/amit.png",
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-background rounded-lg overflow-hidden border border-border group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-accent mb-2 font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["ISO 9001:2015", "Nepal Construction Standards", "Environmental Compliance", "Safety Certified"].map(
              (cert, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-primary" size={24} />
                  </div>
                  <p className="text-sm font-semibold">{cert}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
