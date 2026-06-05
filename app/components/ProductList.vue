<script setup>
import { products } from '~/data/products'

const emit = defineEmits(['buy-product'])
const router = useRouter()

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
