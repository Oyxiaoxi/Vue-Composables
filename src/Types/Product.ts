export interface Product {
  id: number
  name: string
  href: string
  imageSrc: string
  imageAlt: string
  price: number
  stock?: number
  color: string
  size: string
  inStock: boolean
  leadTime?: string
  [key: string]: any
}

export interface CartItem {
  productId: number
  href: string
  imageSrc: string
  imageAlt: string
  color: string
  size: string
  inStock: boolean
  leadTime?: string
  quantity: number
  name: string
  price: number
}
