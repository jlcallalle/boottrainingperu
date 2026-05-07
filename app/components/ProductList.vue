<script setup>
const emit = defineEmits(['buy-product'])
const router = useRouter()

const products = [
  {
    name: 'Power Black',
    tag: 'Nuevo',
    price: 239.9,
    desc: 'Modelo urbano con acabado premium y suela cómoda para gym y uso diario.',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
    sizes: [35, 36, 37, 38],
    note: '6% dto. por transferencia'
  },
  {
    name: 'Silver Rose',
    tag: 'Top ventas',
    price: 229.9,
    desc: 'Diseño moderno en tonos suaves, ideal para una propuesta femenina y visual.',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
    sizes: [35, 36, 37, 39],
    note: 'Stock limitado'
  },
  {
    name: 'Pastel Flex',
    tag: 'Edición color',
    price: 249.9,
    desc: 'Propuesta más llamativa para campañas visuales, reels y catálogo social.',
    image: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?auto=format&fit=crop&w=900&q=80',
    sizes: [34, 35, 36, 37],
    note: 'Envío gratis en Lima'
  },
  {
    name: 'Classic White',
    tag: 'Gym style',
    price: 219.9,
    desc: 'Limpia, elegante y versátil, perfecta para branding minimalista en ecommerce.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    sizes: [36, 37, 38, 39],
    note: 'Pago seguro online'
  }
]

const goToDetail = (product) => {
  router.push({ path: '/detalle', query: { producto: product.name } })
}
</script>

<template>
  <section class="py-4 py-lg-5">
    <div class="container">
      <div class="section-head d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
        <div>
          <h3>Productos destacados</h3>
          <p>
            Catálogo visual con diseños listos para un ecommerce moderno de zapatillas deportivas.
          </p>
        </div>

        <NuxtLink class="btn secondary-btn px-4 py-3" to="/detalle">
          Ver detalle de producto
        </NuxtLink>
      </div>

      <div class="row g-4">
        <div
          v-for="product in products"
          :key="product.name"
          class="col-md-6 col-xl-3"
        >
          <article class="card product-card">
            <div class="card-media">
              <span class="tag">{{ product.tag }}</span>
              <img :src="product.image" :alt="product.name">
            </div>

            <div class="card-body p-4 d-flex flex-column gap-2">
              <div class="card-title">{{ product.name }}</div>
              <div class="card-desc">{{ product.desc }}</div>

              <div class="price-wrap mt-1">
                <strong>S/ {{ product.price.toFixed(2) }}</strong>
                <span>{{ product.note }}</span>
              </div>

              <div class="d-flex flex-wrap gap-2 mt-2">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  class="chip"
                >
                  {{ size }}
                </button>
              </div>

              <div class="d-flex gap-2 mt-3 card-actions-mobile">
                <button
                  class="btn detail-btn flex-fill py-3"
                  @click="goToDetail(product)"
                >
                  Ver detalle
                </button>

                <button
                  class="btn buy-btn flex-fill py-3"
                  @click="emit('buy-product', product.name)"
                >
                  Comprar
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
