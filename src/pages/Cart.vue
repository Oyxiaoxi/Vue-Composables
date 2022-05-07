<script setup lang="ts">
import { CheckIcon, ClockIcon } from '@heroicons/vue/solid'
import { useCart } from '~/composables/useCart'
const { cart, updateQuantity, removeFromCart, isCartEmpty } = useCart()
</script>

<template>
  <div v-if="isCartEmpty" bg="white">
    Your Cart is Empty!
  </div>
  <div v-if="!isCartEmpty" class="bg-white">
    <div class="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
        Shopping Cart
      </h1>

      <form class="mt-12">
        <div>
          <h2 class="sr-only">
            Items in your shopping cart
          </h2>

          <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
            <li v-for="item in cart.items" :key="item.productId" class="flex py-6 sm:py-10">
              <div class="flex-shrink-0">
                <img :src="item.imageSrc" :alt="item.imageAlt" class="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32">
              </div>

              <div class="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                <div>
                  <div class="flex justify-between sm:grid sm:grid-cols-2">
                    <div class="pr-6 text-left">
                      <h3 class="text-sm">
                        <a :href="item.href" class="font-medium text-gray-700 hover:text-gray-800">
                          {{ item.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">
                        Color: {{ item.color }}
                      </p>
                      <p v-if="item.size" class="mt-1 text-sm text-gray-500">
                        Size: {{ item.size }}
                      </p>
                    </div>

                    <p class="text-sm font-medium text-gray-900 text-right">
                      ￥{{ item.price }}
                    </p>
                  </div>

                  <div class="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                    <div>
                      <el-input-number
                        :model-value="item.quantity"
                        @update:modelValue="(quantity: number) => updateQuantity(item, quantity)"
                      />
                    </div>
                    <button
                      type="button"
                      ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3
                      @click.prevent="removeFromCart(item)"
                    >
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                  <CheckIcon v-if="item.inStock" class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <ClockIcon v-else class="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                  <span>{{ item.inStock ? 'In stock' : `Ships in ${item.leadTime}` }}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Order summary -->
        <div class="mt-10 sm:ml-32 sm:pl-6">
          <div class="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
            <h2 class="sr-only">
              Order summary
            </h2>

            <div class="flow-root">
              <dl class="-my-4 text-sm divide-y divide-gray-200">
                <div class="py-4 flex items-center justify-between">
                  <dt class="text-gray-600">
                    Subtotal
                  </dt>
                  <dd class="font-medium text-gray-900">
                    $99.00
                  </dd>
                </div>
                <div class="py-4 flex items-center justify-between">
                  <dt class="text-gray-600">
                    Shipping
                  </dt>
                  <dd class="font-medium text-gray-900">
                    $5.00
                  </dd>
                </div>
                <div class="py-4 flex items-center justify-between">
                  <dt class="text-gray-600">
                    Tax
                  </dt>
                  <dd class="font-medium text-gray-900">
                    $8.32
                  </dd>
                </div>
                <div class="py-4 flex items-center justify-between">
                  <dt class="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd class="text-base font-medium text-gray-900">
                    $112.32
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
              Checkout
            </button>
          </div>

          <div class="mt-6 text-sm text-center text-gray-500">
            <p>
              or <a href="#" class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></a>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
