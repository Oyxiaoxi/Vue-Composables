<script setup lang="ts">
import { useCart } from '~/composables/useCart'
import type { Product } from '~/Types/Product'
const { addToCard } = useCart()
const products = ref<Product[]>([])
onMounted(() => {
  products.value = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: 140,
      stock: 5,
      color: 'Mint',
      size: 'Medium',
      inStock: true,
    },
    {
      id: 2,
      name: 'Zip High Wall Tote',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
      imageAlt: 'TODO',
      price: 150,
      stock: 10,
      color: 'Charcoal',
      inStock: false,
      leadTime: '7-8 years',
      size: 'Large',
    },
    {
      id: 3,
      name: 'Halfsize Tote',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-03.jpg',
      imageAlt: 'TODO',
      price: 210,
      stock: 20,
      color: 'Cyan',
      size: 'Medium',
      inStock: true,
    },
    {
      id: 4,
      name: 'High Wall Tote',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-04.jpg',
      imageAlt: 'TODO',
      price: 340,
      stock: 3,
      color: 'Gray',
      size: 'Medium',
      inStock: true,
    },
  ]
})
</script>
<template>
  <div bg-white>
    <div max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8>
      <h2 text-xl font-bold text-gray-900>
        Customers also bought
      </h2>

      <div mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8>
        <div v-for="product in products" :key="product.id">
          <div relative>
            <div relative w-full h-72 rounded-lg overflow-hidden>
              <img :src="product.imageSrc" :alt="product.imageAlt" w-full h-full object-center object-cover>
            </div>
            <div relative mt-4>
              <h3 text-sm font-medium text-gray-900>
                {{ product.name }}
              </h3>
            </div>
            <div absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden>
              <div aria-hidden="true" absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50 />
              <p relative text-lg font-semibold text-white>
                ￥{{ product.price }}
              </p>
            </div>
          </div>
          <div mt-6>
            <a
              :href="product.href"
              relative
              flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200 
              @click.prevent="addToCard(product)"
            >
              Add to bag
              <span class="sr-only">, { product.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
