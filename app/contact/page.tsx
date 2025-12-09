"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Store inquiry in localStorage for demo
    const inquiries = JSON.parse(localStorage.getItem("contact-inquiries") || "[]")
    inquiries.push({
      id: `inquiry-${Date.now()}`,
      ...formData,
      submittedAt: new Date().toISOString(),
    })
    localStorage.setItem("contact-inquiries", JSON.stringify(inquiries))

    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header theme="dark" />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Contact our team today and let's build something
            extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+977-1-XXXXXXX</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">info@himalaya.build</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">Within 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-card border-t border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Send us a Message</h2>

              {submitted && (
                <div className="p-4 mb-6 bg-accent/20 border border-accent/40 rounded-lg">
                  <p className="text-accent font-semibold">Thank you! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <Input
                    name="phone"
                    placeholder="+977-1-XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <Input
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Why Choose HIMALAYA BUILD CO.?</h3>
                <ul className="space-y-3">
                  {[
                    "Decade of experience in Nepalese construction market",
                    "Expert team with international certifications",
                    "Custom solutions tailored to your needs",
                    "Transparent pricing and timelines",
                    "Quality-assured project delivery",
                    "24/7 support and consultancy",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Request a Free Consultation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a 30-minute call with our project manager to discuss your needs.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Schedule Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
