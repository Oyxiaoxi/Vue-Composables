import { ElMessage, ElMessageBox } from 'element-plus'
import type { CartItem, Product } from '~/Types/Product'

const cart = ref({
  items: [] as CartItem[],
})

export const useCart = () => {
  const addToCard = async (product: Product) => {
    const item = cart.value.items.find(item => item.productId === product.id)
    if (item) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      updateQuantity(item, item.quantity + 1)
    }
    else {
      cart.value.items.push({
        productId: product.id,
        href: product.href,
        imageSrc: product.imageSrc,
        imageAlt: product.imageAlt,
        color: product.color,
        size: product.size,
        inStock: product.inStock,
        leadTime: product.leadTime,
        quantity: 1,
        name: product.name,
        price: product.price,
      })
      ElMessage({
        showClose: true,
        message: 'Add to cart success',
        type: 'success',
      })
    }
  }

  const updateQuantity = async (item: CartItem, quantity: number) => {
    if (quantity <= 0) {
      ElMessageBox.confirm(
        'Do you want to remove this item?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          draggable: true,
        },
      ).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        removeFromCart(item)
        ElMessage({
          showClose: true,
          message: 'Delete completed',
          type: 'success',
        })
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })
    }
    item.quantity = quantity
  }

  const totalProducts = computed(() => {
    return cart.value.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  const removeFromCart = async (item: CartItem) => {
    const index = cart.value.items.findIndex(cartItem => cartItem.productId === item.productId)
    if (index > -1)
      cart.value.items.splice(index, 1)
  }

  const isCartEmpty = computed(() => cart.value.items.length === 0)

  return {
    cart,
    addToCard,
    totalProducts,
    updateQuantity,
    removeFromCart,
    isCartEmpty,
  }
}
