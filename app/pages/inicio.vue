<script setup>
const showToast = inject('showToast')

const handleBuy = (productName) => {
  showToast(`Producto agregado: ${productName}`)
}
</script>

<template>
  <HeroSection />
  <ProductList @buy-product="handleBuy" />
  <BenefitSection />
</template>
