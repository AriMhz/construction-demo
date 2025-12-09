"use client"

interface PaymentMethodsProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
}

const methods = [
  {
    id: "khalti",
    name: "Khalti",
    description: "Popular mobile payment in Nepal",
    icon: "💳",
  },
  {
    id: "esewa",
    name: "eSewa",
    description: "Nepal's leading digital payment",
    icon: "📱",
  },
  {
    id: "fonepay",
    name: "Fonepay",
    description: "Mobile wallet payment",
    icon: "☎️",
  },
  {
    id: "card",
    name: "Card via Stripe",
    description: "International Visa/Mastercard",
    icon: "🏦",
  },
]

export function PaymentMethods({ selectedMethod, onMethodChange }: PaymentMethodsProps) {
  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <label
          key={method.id}
          className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedMethod === method.id
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 bg-background"
          }`}
        >
          <input
            type="radio"
            name="payment-method"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={(e) => onMethodChange(e.target.value)}
            className="w-4 h-4 cursor-pointer"
          />
          <div className="flex-1">
            <p className="font-semibold flex items-center gap-2">
              <span>{method.icon}</span>
              {method.name}
            </p>
            <p className="text-sm text-muted-foreground">{method.description}</p>
          </div>
          {selectedMethod === method.id && <div className="w-2 h-2 bg-primary rounded-full"></div>}
        </label>
      ))}
    </div>
  )
}
