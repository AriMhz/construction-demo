interface OrderSummaryProps {
  service: any
  addOns: any[]
  quantity: number
  paymentMethod: string
}

export function OrderSummary({ service, addOns, quantity, paymentMethod }: OrderSummaryProps) {
  const serviceTotal = service.basePrice * quantity
  const addOnsTotal = addOns.reduce((sum, addon) => sum + addon.price * quantity, 0)
  const subtotal = serviceTotal + addOnsTotal
  const tax = Math.round(subtotal * 0.13) // 13% VAT in Nepal
  const total = subtotal + tax

  const paymentMethodNames: Record<string, string> = {
    khalti: "Khalti",
    esewa: "eSewa",
    fonepay: "Fonepay",
    card: "Stripe Card Payment",
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>

      {/* Items */}
      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">{service.name}</p>
            <p className="text-sm text-muted-foreground">Qty: {quantity}</p>
          </div>
          <p className="font-semibold">NPR {(serviceTotal / 100000).toFixed(1)}L</p>
        </div>

        {addOns.length > 0 && (
          <div className="space-y-2">
            {addOns.map((addon) => (
              <div key={addon.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">+ {addon.name}</span>
                <span className="text-muted-foreground">NPR {((addon.price * quantity) / 100000).toFixed(1)}L</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Totals */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>NPR {(subtotal / 100000).toFixed(1)}L</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>VAT (13%)</span>
          <span>NPR {(tax / 100000).toFixed(1)}L</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-4 border-t border-border">
          <span>Total</span>
          <span className="text-accent">NPR {(total / 100000).toFixed(1)}L</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
        <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
        <p className="font-semibold">{paymentMethodNames[paymentMethod] || "Select a method"}</p>
      </div>

      {/* Info */}
      <div className="text-xs text-muted-foreground space-y-2">
        <p>✓ Secure payment processing</p>
        <p>✓ 24-hour support</p>
        <p>✓ Money-back guarantee</p>
      </div>
    </div>
  )
}
