import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Get in touch with our team today to discuss your construction needs and receive a personalized consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="tel:+977-1-XXXXXXX">Call Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
