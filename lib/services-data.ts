/* Comprehensive services database with Nepal-first pricing */

export interface Service {
  id: string
  name: string
  category: string
  tier: string
  basePrice: number
  description: string
  longDescription: string
  features: string[]
  timeline: string
  estimatedDuration: string
  addOns: AddOn[]
  rating: number
  reviews: number
  badges: string[]
  image?: string
}

export interface AddOn {
  id: string
  name: string
  price: number
}

// Generate services based on categories, tiers, and regional multipliers
const categories = ["Foundation", "MEP", "Finishing", "Landscaping", "Retrofit", "Inspection"] as const
const tiers = ["Basic", "Standard", "Premium"] as const
const basePrices: Record<string, number> = {
  Foundation: 1250000,
  MEP: 800000,
  Finishing: 450000,
  Landscaping: 320000,
  Retrofit: 450000,
  Inspection: 150000,
}

const tierMultipliers: Record<string, number> = {
  Basic: 0.7,
  Standard: 1.0,
  Premium: 1.5,
}

const regionMultipliers: Record<string, number> = {
  Kathmandu: 1.1,
  Pokhara: 1.05,
  Lalitpur: 1.08,
  Bhaktapur: 1.05,
  Chitwan: 0.95,
  Lumbini: 0.95,
}

const categoryDescriptions: Record<string, { description: string; features: string[] }> = {
  Foundation: {
    description: "Complete foundation systems engineered for stability and longevity",
    features: [
      "Soil analysis and testing",
      "Foundation design consultation",
      "Excavation and preparation",
      "Concrete pour and curing",
      "Quality assurance testing",
    ],
  },
  MEP: {
    description: "Integrated mechanical, electrical, and plumbing systems",
    features: [
      "System design and planning",
      "Installation and coordination",
      "Ductwork and piping",
      "Electrical wiring and distribution",
      "Testing and commissioning",
    ],
  },
  Finishing: {
    description: "Interior and exterior finishing that brings projects to life",
    features: [
      "Painting and surface treatment",
      "Flooring installation",
      "Wall treatments and textures",
      "Trim and molding",
      "Final detailing and cleanup",
    ],
  },
  Landscaping: {
    description: "Professional outdoor design and installation",
    features: [
      "Site analysis and planning",
      "Drainage system installation",
      "Plant and material selection",
      "Hardscaping and pathways",
      "Irrigation system setup",
    ],
  },
  Retrofit: {
    description: "Structural upgrades for safety and performance",
    features: [
      "Structural assessment",
      "Seismic reinforcement",
      "Material upgrades",
      "Code compliance updates",
      "Quality verification",
    ],
  },
  Inspection: {
    description: "Professional inspection and assessment services",
    features: [
      "Comprehensive site inspection",
      "Detailed report and documentation",
      "Photo and video documentation",
      "Recommendations and analysis",
      "Follow-up consultation",
    ],
  },
}

const addonsByCategory: Record<string, AddOn[]> = {
  Foundation: [
    { id: "soil-testing", name: "Extended Soil Testing", price: 100000 },
    { id: "premium-materials", name: "Premium Concrete Mix", price: 150000 },
    { id: "waterproofing", name: "Advanced Waterproofing", price: 200000 },
  ],
  MEP: [
    { id: "smart-systems", name: "Smart Building Integration", price: 250000 },
    { id: "backup-power", name: "Backup Power Systems", price: 300000 },
    { id: "green-hvac", name: "Eco-Friendly HVAC", price: 180000 },
  ],
  Finishing: [
    { id: "premium-paint", name: "Premium Paint Finishes", price: 80000 },
    { id: "natural-flooring", name: "Natural Stone Flooring", price: 120000 },
    { id: "custom-trim", name: "Custom Trim Work", price: 100000 },
  ],
  Landscaping: [
    { id: "irrigation", name: "Smart Irrigation System", price: 150000 },
    { id: "lighting", name: "Landscape Lighting", price: 100000 },
    { id: "eco-materials", name: "Premium Eco Materials", price: 80000 },
  ],
  Retrofit: [
    { id: "advanced-testing", name: "Advanced Structural Testing", price: 200000 },
    { id: "premium-materials", name: "Premium Reinforcement Materials", price: 250000 },
    { id: "certifications", name: "Full Certification Package", price: 150000 },
  ],
  Inspection: [
    { id: "video-report", name: "Video Documentation Package", price: 50000 },
    { id: "drone-survey", name: "Drone Survey", price: 80000 },
    { id: "extended-report", name: "Extended Analysis Report", price: 60000 },
  ],
}

export function generateServices(): Service[] {
  const services: Service[] = []
  let id = 1

  categories.forEach((category) => {
    tiers.forEach((tier) => {
      const basePrice = basePrices[category]
      const tierMultiplier = tierMultipliers[tier]
      const price = Math.round(basePrice * tierMultiplier)

      const categoryInfo = categoryDescriptions[category]

      services.push({
        id: `service-${id}`,
        name: `${category} ${tier} Package`,
        category,
        tier,
        basePrice: price,
        description: `${tier} tier ${category.toLowerCase()} services for your project`,
        longDescription: categoryInfo.description,
        features: categoryInfo.features,
        timeline: tier === "Basic" ? "4-6 weeks" : tier === "Standard" ? "6-8 weeks" : "8-12 weeks",
        estimatedDuration: tier === "Basic" ? "30-45 days" : tier === "Standard" ? "45-60 days" : "60-90 days",
        addOns: addonsByCategory[category] || [],
        rating: 4.5 + Math.random() * 0.5,
        reviews: Math.floor(Math.random() * 50) + 10,
        badges: id <= 2 ? ["Popular"] : id % 3 === 0 ? ["HOT DEAL"] : id % 5 === 0 ? ["NEW"] : [],
      })
      id++
    })
  })

  return services
}

export const SERVICES = generateServices()
