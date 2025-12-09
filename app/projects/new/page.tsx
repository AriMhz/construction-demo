"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PROJECT_TYPES } from "@/lib/constants"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Upload } from "lucide-react"

interface FormData {
  projectName: string
  location: string
  category: string
  description: string
  clientName: string
  clientEmail: string
  clientPhone: string
  images: File[]
}

export default function SubmitProjectPage() {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    location: "",
    category: "",
    description: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    images: [],
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }))
  }

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate submission - in production, send to API
    setTimeout(() => {
      // Store in IndexedDB for demo purposes
      const projects = JSON.parse(localStorage.getItem("submittedProjects") || "[]")
      projects.push({
        id: `submitted-${Date.now()}`,
        ...formData,
        submittedAt: new Date().toISOString(),
        status: "pending",
      })
      localStorage.setItem("submittedProjects", JSON.stringify(projects))

      setIsLoading(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          projectName: "",
          location: "",
          category: "",
          description: "",
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          images: [],
        })
      }, 3000)
    }, 1500)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Header />
        <div className="text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-accent mx-auto" />
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">Project Submitted!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for submitting your project. Our team will review it and get back to you shortly.
            </p>
          </div>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-card border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Submit Your Project</h1>
          <p className="text-lg text-muted-foreground">
            Share your completed construction project with HIMALAYA BUILD CO. and our community.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Information */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Project Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Name</label>
                  <Input
                    name="projectName"
                    placeholder="e.g., Modern Villa in Kathmandu"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <Input
                    name="location"
                    placeholder="e.g., Kathmandu, Nepal"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROJECT_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Description</label>
                  <Textarea
                    name="description"
                    placeholder="Tell us about your project..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Client Information */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Your Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <Input
                    name="clientName"
                    placeholder="Your name"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input
                      name="clientEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.clientEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input
                      name="clientPhone"
                      placeholder="+977-1-XXXXXXX"
                      value={formData.clientPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Project Images</h2>

              <div className="space-y-4">
                <label className="block border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="font-semibold mb-1">Upload Project Images</p>
                  <p className="text-sm text-muted-foreground">Click to select files or drag and drop</p>
                  <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>

                {/* Uploaded Images */}
                {formData.images.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-3">{formData.images.length} image(s) selected</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((file, idx) => (
                        <div key={idx} className="relative group">
                          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs text-center p-2">
                            <span className="truncate">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 justify-end">
              <Button variant="outline" asChild>
                <Link href="/projects">Cancel</Link>
              </Button>
              <Button size="lg" type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Project"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
