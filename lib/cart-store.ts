/* Client-side cart management using SWR patterns */

export interface CartItem {
  serviceId: string
  serviceName: string
  basePrice: number
  selectedAddOns: { id: string; name: string; price: number }[]
  quantity: number
}

export interface Cart {
  items: CartItem[]
  totalAmount: number
}

// Simple localStorage-based cart for demo
export function getCart(): Cart {
  if (typeof window === "undefined") return { items: [], totalAmount: 0 }

  const stored = localStorage.getItem("himalaya-cart")
  if (!stored) return { items: [], totalAmount: 0 }

  return JSON.parse(stored)
}

export function saveCart(cart: Cart) {
  localStorage.setItem("himalaya-cart", JSON.stringify(cart))
}

export function addToCart(item: CartItem) {
  const cart = getCart()
  const existingIndex = cart.items.findIndex((i) => i.serviceId === item.serviceId)

  if (existingIndex >= 0) {
    cart.items[existingIndex].quantity += item.quantity
  } else {
    cart.items.push(item)
  }

  updateCartTotal(cart)
  saveCart(cart)
}

export function removeFromCart(serviceId: string) {
  const cart = getCart()
  cart.items = cart.items.filter((i) => i.serviceId !== serviceId)
  updateCartTotal(cart)
  saveCart(cart)
}

export function updateCartTotal(cart: Cart) {
  cart.totalAmount = cart.items.reduce((total, item) => {
    const itemTotal =
      (item.basePrice + item.selectedAddOns.reduce((sum, addon) => sum + addon.price, 0)) * item.quantity
    return total + itemTotal
  }, 0)
}

export function clearCart() {
  localStorage.removeItem("himalaya-cart")
}
