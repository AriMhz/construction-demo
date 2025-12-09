"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface CheckoutFormProps {
  onSubmit: () => void
  isProcessing: boolean
}

export function CheckoutForm({ onSubmit, isProcessing }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    projectDetails: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <Input name="fullName" placeholder="Your name" value={formData.fullName} onChange={handleChange} required />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Phone Number</label>
          <Input name="phone" placeholder="+977-1-XXXXXXX" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">City</label>
          <Input name="city" placeholder="Kathmandu" value={formData.city} onChange={handleChange} required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Project Address</label>
        <Input
          name="address"
          placeholder="Project location address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Project Details (Optional)</label>
        <Textarea
          name="projectDetails"
          placeholder="Tell us more about your project..."
          rows={3}
          value={formData.projectDetails}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Complete Payment"}
      </Button>
    </form>
  )
}
