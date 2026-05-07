<script setup>
const route = useRoute()

const products = [
  {
    name: 'Silver Rose',
    price: 229.9,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Power Black',
    price: 239.9,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Pastel Flex',
    price: 249.9,
    image: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Classic White',
    price: 219.9,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80'
  }
]

const selectedProduct = computed(() => {
  const name = route.query.producto
  return products.find(p => p.name === name) ?? products[0]
})
</script>

<template>
  <ProductDetail :product="selectedProduct" />
</template>
