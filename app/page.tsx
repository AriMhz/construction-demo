import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { ServicesPreview } from "@/components/home/services-preview"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
