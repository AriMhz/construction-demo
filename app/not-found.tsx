import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="text-6xl font-serif font-bold text-primary">404</div>
          <h1 className="text-3xl font-serif font-bold">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
