"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { OrderSummary } from "@/components/checkout/order-summary"
import { PaymentMethods } from "@/components/checkout/payment-methods"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { generateServices } from "@/lib/services-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const serviceId = searchParams.get("service")
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<any[]>([])
  const [quantity, setQuantity] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<string>("khalti")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  useEffect(() => {
    if (serviceId) {
      const services = generateServices()
      const service = services.find((s) => s.id === serviceId)
      setSelectedService(service)
    }
  }, [serviceId])

  if (!selectedService && !paymentComplete) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-lg text-muted-foreground">No service selected for checkout.</p>
            <Button asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (paymentComplete) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-lg p-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h1 className="text-4xl font-serif font-bold">Payment Successful!</h1>
              <p className="text-lg text-muted-foreground">
                Thank you for your order. A confirmation has been sent to your email.
              </p>

              {/* Order Summary */}
              <div className="bg-background p-6 rounded-lg border border-border text-left">
                <h2 className="font-serif font-bold mb-4">Order Details</h2>
                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                  <p className="flex justify-between">
                    <span>{selectedService.name}</span>
                    <span className="font-semibold">NPR {(selectedService.basePrice / 100000).toFixed(1)}L</span>
                  </p>
                  {selectedAddOns.length > 0 && (
                    <p className="text-muted-foreground">
                      {selectedAddOns.length} add-on{selectedAddOns.length > 1 ? "s" : ""} selected
                    </p>
                  )}
                </div>
                <p className="flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span className="text-accent text-lg">
                    NPR{" "}
                    {(
                      ((selectedService.basePrice + selectedAddOns.reduce((sum, addon) => sum + addon.price, 0)) *
                        quantity) /
                      100000
                    ).toFixed(1)}
                    L
                  </span>
                </p>
              </div>

              <div className="space-y-3 pt-6">
                <p className="text-sm text-muted-foreground">
                  Our team will contact you within 24 hours to confirm project details.
                </p>
                <Button asChild>
                  <Link href="/services">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Checkout Header */}
      <section className="py-8 bg-card border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/services" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Services
            </Link>
          </Button>
          <h1 className="text-4xl font-serif font-bold">Checkout</h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Selection */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Service Details</h2>
                <div className="p-4 bg-background rounded-lg border border-border mb-6">
                  <h3 className="font-serif font-bold text-lg mb-2">{selectedService.name}</h3>
                  <p className="text-muted-foreground mb-4">{selectedService.description}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-2xl font-bold text-accent">
                        NPR {(selectedService.basePrice / 100000).toFixed(1)}L
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">Quantity</label>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-1 border border-border rounded hover:bg-muted"
                        >
                          −
                        </button>
                        <span className="px-4 font-semibold">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-1 border border-border rounded hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add-ons Selection */}
              {selectedService.addOns.length > 0 && (
                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Optional Add-ons</h2>
                  <div className="space-y-3">
                    {selectedService.addOns.map((addon: any) => (
                      <label
                        key={addon.id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAddOns.some((a) => a.id === addon.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedAddOns([...selectedAddOns, addon])
                            } else {
                              setSelectedAddOns(selectedAddOns.filter((a) => a.id !== addon.id))
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{addon.name}</p>
                          <p className="text-sm text-muted-foreground">NPR {addon.price.toLocaleString()}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Method Selection */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Payment Method</h2>
                <PaymentMethods selectedMethod={paymentMethod} onMethodChange={setPaymentMethod} />
              </div>

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <CheckoutForm
                  onSubmit={() => {
                    setIsProcessing(true)
                    setTimeout(() => {
                      setPaymentComplete(true)
                    }, 2000)
                  }}
                  isProcessing={isProcessing}
                />
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <OrderSummary
                service={selectedService}
                addOns={selectedAddOns}
                quantity={quantity}
                paymentMethod={paymentMethod}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
