"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lock, Eye, EyeOff } from "lucide-react"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")

  const ADMIN_TOKEN = "himalaya-admin-2025"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_TOKEN) {
      localStorage.setItem("admin-authenticated", "true")
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password")
      setPassword("")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("admin-authenticated")) {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-primary" size={24} />
                </div>
                <h1 className="text-2xl font-serif font-bold">Admin Access</h1>
                <p className="text-muted-foreground text-sm mt-2">Enter the admin password to continue</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Admin Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center">
                Demo password: <span className="font-mono bg-muted px-2 py-1 rounded">{ADMIN_TOKEN}</span>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return <AdminDashboard />
}

function AdminDashboard() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage submissions and project approvals</p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem("admin-authenticated")
              window.location.reload()
            }}
          >
            Logout
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <DashboardCard title="Pending Projects" value="0" color="accent" />
            <DashboardCard title="Approved Projects" value="4" color="primary" />
            <DashboardCard title="New Inquiries" value="0" color="primary" />
            <DashboardCard title="Total Orders" value="0" color="primary" />
          </div>

          {/* Tabs */}
          <AdminTabs />
        </div>
      </section>

      <Footer />
    </main>
  )
}

function DashboardCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <p className="text-sm text-muted-foreground mb-2">{title}</p>
      <p className={`text-3xl font-bold ${color === "accent" ? "text-accent" : "text-primary"}`}>{value}</p>
    </div>
  )
}

function AdminTabs() {
  const [activeTab, setActiveTab] = useState<"submissions" | "approvals" | "orders">("submissions")
  const [submissions, setSubmissions] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    // Load submissions from localStorage
    const stored = localStorage.getItem("submittedProjects")
    if (stored) {
      setSubmissions(JSON.parse(stored))
    }

    // Load orders from localStorage
    const ordersStored = localStorage.getItem("orders")
    if (ordersStored) {
      setOrders(JSON.parse(ordersStored))
    }
  }, [])

  const approvedProjects = submissions.filter((s) => s.status === "approved")
  const pendingProjects = submissions.filter((s) => s.status === "pending")

  const handleApprove = (id: string) => {
    const updated = submissions.map((s) => (s.id === id ? { ...s, status: "approved" } : s))
    setSubmissions(updated)
    localStorage.setItem("submittedProjects", JSON.stringify(updated))
  }

  const handleReject = (id: string) => {
    const updated = submissions.filter((s) => s.id !== id)
    setSubmissions(updated)
    localStorage.setItem("submittedProjects", JSON.stringify(updated))
  }

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="flex gap-2 border-b border-border">
        {(["submissions", "approvals", "orders"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === "submissions" && pendingProjects.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-accent text-accent-foreground rounded text-sm">
                {pendingProjects.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "submissions" && (
          <SubmissionsTab submissions={pendingProjects} onApprove={handleApprove} onReject={handleReject} />
        )}
        {activeTab === "approvals" && <ApprovalsTab projects={approvedProjects} />}
        {activeTab === "orders" && <OrdersTab orders={orders} />}
      </div>
    </div>
  )
}

function SubmissionsTab({
  submissions,
  onApprove,
  onReject,
}: {
  submissions: any[]
  onApprove: (id: string) => void
  onReject: (id: string) => void
}) {
  if (submissions.length === 0) {
    return (
      <div className="text-center py-12 bg-card border border-border rounded-lg">
        <p className="text-lg text-muted-foreground">No pending submissions</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <div key={submission.id} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif font-bold text-lg">{submission.projectName}</h3>
              <p className="text-muted-foreground text-sm">{submission.location}</p>
            </div>
            <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">Pending</span>
          </div>

          <p className="text-muted-foreground mb-4">{submission.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-t border-border pt-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Type</p>
              <p className="font-semibold">{submission.category}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Client</p>
              <p className="font-semibold">{submission.clientName}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="font-semibold text-sm">{submission.clientEmail}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <p className="font-semibold">{submission.clientPhone}</p>
            </div>
          </div>

          {submission.images && submission.images.length > 0 && (
            <p className="text-sm text-muted-foreground mb-4">{submission.images.length} image(s) attached</p>
          )}

          <div className="flex gap-3">
            <Button onClick={() => onApprove(submission.id)} className="flex-1">
              Approve & Publish
            </Button>
            <Button variant="outline" onClick={() => onReject(submission.id)} className="flex-1 bg-transparent">
              Reject
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

function ApprovalsTab({ projects }: { projects: any[] }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12 bg-card border border-border rounded-lg">
        <p className="text-lg text-muted-foreground">No approved projects yet</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-card border border-primary/20 rounded-lg p-6 bg-primary/5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-bold text-lg">{project.projectName}</h3>
              <p className="text-muted-foreground text-sm">{project.location}</p>
            </div>
            <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">Approved</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function OrdersTab({ orders }: { orders: any[] }) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12 bg-card border border-border rounded-lg">
        <p className="text-lg text-muted-foreground">No orders yet</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold">Order #{order.id.slice(-8)}</p>
              <p className="text-muted-foreground text-sm">{order.clientName}</p>
            </div>
            <p className="font-bold text-accent">NPR {(order.total / 100000).toFixed(1)}L</p>
          </div>
        </div>
      ))}
    </div>
  )
}
