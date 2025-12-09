/* Nepal-focused pricing and configuration constants */

import { getAssetPath } from "./utils/path"

export const NEPAL_LOCATIONS = [
  { name: "Kathmandu", multiplier: 1.1 },
  { name: "Pokhara", multiplier: 1.05 },
  { name: "Lalitpur", multiplier: 1.08 },
  { name: "Bhaktapur", multiplier: 1.05 },
  { name: "Chitwan", multiplier: 0.95 },
  { name: "Lumbini", multiplier: 0.95 },
] as const

export const SERVICE_CATEGORIES = ["Foundation", "MEP", "Finishing", "Landscaping", "Retrofit", "Inspection"] as const

export const SERVICE_TIERS = ["Basic", "Standard", "Premium"] as const

export const PROJECT_TYPES = ["Residential", "Commercial", "Institutional", "Hospitality"] as const

export const BADGE_TYPES = ["HOT DEAL", "POPULAR", "NEW", "MOST BOUGHT"] as const

export const BASE_PRICES_NPR = {
  Foundation: 1250000,
  MEP: 800000,
  Finishing: 450000,
  Landscaping: 320000,
  Retrofit: 450000,
  Inspection: 150000,
} as const

export const PAYMENT_METHODS = ["Khalti", "eSewa", "Fonepay", "Card (Stripe)"] as const

export const FEATURED_PROJECTS = [
  {
    id: "pokhara-lakeside",
    name: "Pokhara Lakeside Residence",
    type: "Residential",
    location: "Lakeside, Pokhara, Nepal",
    year: 2025,
    summary: "Full-scale interior and exterior redesign, seismic retrofit, water-proofing, modern Façade.",
    tags: ["Luxury", "Residential", "Retrofitting"],
    imageCount: 8,
    image: getAssetPath("/projects/pokhara-lakeside.jpg"),
  },
  {
    id: "kathmandu-tower",
    name: "Kathmandu Commercial Tower — Block B",
    type: "Commercial",
    location: "New Baneshwor, Kathmandu",
    year: 2024,
    summary: "Structure & MEP coordination, façade glazing, elevator installation.",
    tags: ["Commercial", "High-Rise", "MEP"],
    imageCount: 6,
    image: getAssetPath("/projects/kathmandu-tower.jpg"),
  },
  {
    id: "chitwan-school",
    name: "Chitwan Community School Build",
    type: "Institutional",
    location: "Bharatpur, Chitwan",
    year: 2023,
    summary: "4 classrooms, solar-ready roof, playground, local-materials-first approach.",
    tags: ["Social", "Earthquake Resilient", "Community"],
    imageCount: 5,
    image: getAssetPath("/projects/chitwan-school.jpg"),
  },
  {
    id: "lumbini-resort",
    name: "Lumbini Resort & Spa Refurb",
    type: "Hospitality",
    location: "Lumbini, Nepal",
    year: 2025,
    summary: "Landscape lighting, pool retiling, accessibility upgrades, eco-friendly HVAC.",
    tags: ["Hospitality", "Renovation", "Eco"],
    imageCount: 7,
    image: getAssetPath("/projects/lumbini-resort.jpg"),
  },
] as const
