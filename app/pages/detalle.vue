<script setup>
import { products } from '~/data/products'

const route = useRoute()

const selectedProduct = computed(() => {
  const name = route.query.producto
  return products.find(p => p.name === name) ?? products[0]
})
</script>

<template>
  <ProductDetail :product="selectedProduct" />
</template>
