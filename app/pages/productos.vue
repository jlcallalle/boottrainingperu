<script setup>
const showToast = inject('showToast')

const handleBuy = (productName) => {
  showToast(`Producto agregado: ${productName}`)
}
</script>

<template>
  <ProductList @buy-product="handleBuy" />
</template>
