<script setup>
const selectedProduct = ref({
  name: 'Silver Rose',
  price: 229.9,
  image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
})

const toastMessage = ref('')
const showToast = ref(false)

const handleViewDetail = (product) => {
  selectedProduct.value = product

  setTimeout(() => {
    document.getElementById('detalle')?.scrollIntoView({ behavior: 'smooth' })
  }, 100)

  showToastMessage(`Mostrando detalle de ${product.name}`)
}

const handleBuy = (productName) => {
  showToastMessage(`Producto agregado: ${productName}`)
}

const showToastMessage = (message) => {
  toastMessage.value = message
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 2500)
}
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <ProductList
        @view-detail="handleViewDetail"
        @buy-product="handleBuy"
      />
      <BenefitSection />
      <ProductDetail
        :product="selectedProduct"
        @buy-product="handleBuy"
      />
      <ContactSection @show-toast="showToastMessage" />
    </main>

    <AppFooter />

    <a class="whatsapp-float" href="#contacto" aria-label="WhatsApp">💬</a>

    <div class="toast-box" :class="{ show: showToast }">
      {{ toastMessage }}
    </div>
  </div>
</template>