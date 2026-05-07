<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['buy-product', 'show-toast'])

const colorOptions = [
  {
    label: 'Blanco / Rosa',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80'
  },
  {
    label: 'Negro',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=500&q=80'
  },
  {
    label: 'Blanco',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80'
  },
  {
    label: 'Sport',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80'
  }
]

const allSizes = [35, 36, 37, 38, 39, 40]

const mainImage    = ref(colorOptions[0].image)
const activeThumb  = ref(0)
const activeColor  = ref(0)
const activeSizes  = ref([])
const quantity     = ref(1)
const cart         = ref([])
const openAccordion = ref(0)

const accordionItems = [
  {
    title: 'Descripción',
    content: 'Zapatilla deportiva con diseño moderno, estructura cómoda y visual pensada para gym, entrenamiento funcional y estilo urbano.'
  },
  {
    title: 'Detalles',
    content: 'Exterior sintético premium, suela ligera y acabado versátil para una propuesta ecommerce enfocada en conversión.'
  },
  {
    title: 'Cambios y envíos',
    content: 'Envíos a todo Perú y políticas de cambio por talla para dar confianza al usuario en su primera compra.'
  }
]

const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.total, 0))
const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0))

const selectThumb = (i) => { activeThumb.value = i; mainImage.value = colorOptions[i].image }
const selectColor = (i) => { activeColor.value = i; mainImage.value = colorOptions[i].image; activeThumb.value = i }
const toggleSize  = (size) => {
  const i = activeSizes.value.indexOf(size)
  if (i === -1) activeSizes.value.push(size)
  else activeSizes.value.splice(i, 1)
}
const toggleAccordion = (i) => { openAccordion.value = openAccordion.value === i ? null : i }

const showToast = inject('showToast')

const addToCart = () => {
  if (!activeSizes.value.length) { showToast('Selecciona al menos una talla.'); return }
  cart.value.push({
    name:      props.product.name,
    color:     colorOptions[activeColor.value].label,
    image:     colorOptions[activeColor.value].thumb,
    sizes:     [...activeSizes.value],
    quantity:  quantity.value,
    unitPrice: props.product.price,
    total:     props.product.price * quantity.value * activeSizes.value.length
  })
  showToast(`Producto agregado: ${props.product.name}`)
  emit('buy-product', props.product.name)
}

const removeFromCart = (i) => { cart.value.splice(i, 1) }

const buyWhatsapp = () => {
  if (!activeSizes.value.length) { showToast('Selecciona al menos una talla antes de continuar.'); return }
  const color   = colorOptions[activeColor.value].label
  const message = `Hola, deseo comprar ${props.product.name}, color ${color}, tallas ${activeSizes.value.join(', ')} y cantidad ${quantity.value}.`
  window.open(`https://wa.me/51999999999?text=${encodeURIComponent(message)}`, '_blank')
}

const sendSummary = () => {
  if (!cart.value.length) { showToast('Primero agrega productos al resumen.'); return }
  const lines   = cart.value.map((item, i) =>
    `${i + 1}. ${item.name} | Color: ${item.color} | Tallas: ${item.sizes.join(', ')} | Cantidad: ${item.quantity} | Subtotal: S/ ${item.total.toFixed(2)}`
  )
  const message = `Hola, deseo este pedido:\n${lines.join('\n')}\n\nTotal estimado: S/ ${cartTotal.value.toFixed(2)}`
  window.open(`https://wa.me/51999999999?text=${encodeURIComponent(message)}`, '_blank')
}
</script>

<template>
  <section class="py-4 py-lg-5">
    <div class="container">

      <!-- Breadcrumb -->
      <div class="pd-breadcrumb">
        <NuxtLink to="/">Inicio</NuxtLink> /
        <NuxtLink to="/productos">Productos</NuxtLink> /
        Running / <strong>{{ product.name }}</strong>
      </div>

      <!-- Layout principal -->
      <div class="pd-layout">

        <!-- Galería -->
        <div class="pd-gallery">
          <div class="pd-main-image">
            <img :src="mainImage" :alt="product.name">
          </div>
          <div class="pd-thumbs">
            <button
              v-for="(color, i) in colorOptions"
              :key="i"
              class="pd-thumb"
              :class="{ active: activeThumb === i }"
              @click="selectThumb(i)"
            >
              <img :src="color.thumb" :alt="`Vista ${i + 1}`">
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="pd-info">
          <div class="eyebrow">Detalle de producto</div>
          <h2 class="pd-title">{{ product.name }}</h2>
          <div class="pd-price">S/ {{ product.price.toFixed(2) }}</div>
          <p class="pd-installments">Hasta 5 cuotas sin intereses. Cambios por talla disponibles.</p>

          <div class="pd-divider"></div>

          <!-- Colores -->
          <div class="pd-section-label">
            <span>Colores</span>
            <span>{{ colorOptions[activeColor].label }}</span>
          </div>
          <div class="pd-color-options">
            <button
              v-for="(color, i) in colorOptions"
              :key="i"
              class="pd-color-swatch"
              :class="{ active: activeColor === i }"
              @click="selectColor(i)"
            >
              <img :src="color.thumb" :alt="color.label">
            </button>
          </div>

          <div class="pd-divider"></div>

          <!-- Tallas -->
          <div class="pd-section-label">
            <span>Tallas</span>
            <span>Puedes seleccionar una o más</span>
          </div>
          <div class="pd-size-options">
            <button
              v-for="size in allSizes"
              :key="size"
              class="pd-size-btn"
              :class="{ active: activeSizes.includes(size) }"
              @click="toggleSize(size)"
            >
              {{ size }}
            </button>
          </div>

          <!-- Compra -->
          <div class="pd-purchase-row">
            <input v-model.number="quantity" class="pd-qty" type="number" min="1">
            <button class="btn buy-btn py-3" @click="addToCart">Agregar al carrito</button>
          </div>
          <button class="btn detail-btn w-100 py-3 mt-2" @click="buyWhatsapp">
            Comprar por WhatsApp
          </button>

          <!-- Accordion -->
          <div class="pd-accordion">
            <div
              v-for="(item, i) in accordionItems"
              :key="i"
              class="pd-accordion-item"
            >
              <button class="pd-accordion-btn" @click="toggleAccordion(i)">
                {{ item.title }}
                <span>{{ openAccordion === i ? '−' : '+' }}</span>
              </button>
              <div v-show="openAccordion === i" class="pd-accordion-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Productos seleccionados -->
      <div class="pd-selection-area">
        <div class="section-head mb-4">
          <h3>Productos seleccionados</h3>
          <p>Selecciona color, una o más tallas y cantidad para construir el detalle del pedido.</p>
        </div>

        <div class="pd-selection-panel">
          <div class="pd-summary-head">
            <strong>Resumen de selección</strong>
            <span>{{ cartCount }} items</span>
          </div>

          <div v-if="cart.length" class="pd-cart-list">
            <div v-for="(item, i) in cart" :key="i" class="pd-cart-item">
              <img :src="item.image" :alt="item.name">
              <div>
                <h4>{{ item.name }}</h4>
                <p>Color: {{ item.color }}</p>
                <p>Tallas: {{ item.sizes.join(', ') }}</p>
                <p>Cantidad: {{ item.quantity }}</p>
                <p>Total parcial: S/ {{ item.total.toFixed(2) }}</p>
              </div>
              <button class="pd-remove-btn" @click="removeFromCart(i)">Quitar</button>
            </div>
          </div>

          <div v-else class="pd-empty-state">
            Aún no agregaste productos. Selecciona color, una o más tallas y cantidad.
          </div>

          <div class="pd-total-box">
            <div>
              <div class="pd-total-label">Total estimado</div>
              <strong class="pd-total-amount">S/ {{ cartTotal.toFixed(2) }}</strong>
            </div>
            <button class="btn primary-btn px-4 py-3" @click="sendSummary">
              Enviar resumen por WhatsApp
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pd-breadcrumb { font-size: 14px; color: var(--muted); margin-bottom: 18px; }
.pd-breadcrumb strong { color: var(--text); }
.pd-breadcrumb a { color: var(--muted); text-decoration: none; }
.pd-breadcrumb a:hover { color: var(--text); }

.pd-layout {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 26px;
  align-items: start;
}

.pd-gallery {
  background: linear-gradient(135deg, #fff 0%, #f3f4f8 100%);
  border-radius: calc(var(--radius) + 8px);
  box-shadow: var(--shadow);
  padding: 22px;
}

.pd-main-image {
  border-radius: 28px;
  overflow: hidden;
  background: #f5f5f7;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  padding: 24px;
  margin-bottom: 16px;
}

.pd-main-image img {
  width: 100%; height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 32px 36px rgba(0,0,0,.12));
}

.pd-thumbs { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }

.pd-thumb {
  border: 2px solid transparent;
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: .2s ease;
  aspect-ratio: 1/1;
  padding: 0;
}
.pd-thumb img { width: 100%; height: 100%; object-fit: cover; }
.pd-thumb.active { border-color: #000; box-shadow: 0 10px 18px rgba(0,0,0,.08); }

.pd-info {
  background: var(--surface);
  border-radius: calc(var(--radius) + 8px);
  box-shadow: var(--shadow);
  padding: 30px;
}

.pd-title { margin: 0; font-size: clamp(30px,4vw,46px); line-height: 1.06; letter-spacing: -1px; }
.pd-price { font-size: 34px; font-weight: 800; letter-spacing: -.5px; margin: 16px 0 8px; }
.pd-installments { color: var(--muted); line-height: 1.6; margin-bottom: 22px; }
.pd-divider { height: 1px; background: var(--line); margin: 22px 0; }

.pd-section-label {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 15px; font-weight: 800; margin-bottom: 12px;
}

.pd-color-options { display: flex; flex-wrap: wrap; gap: 10px; }
.pd-color-swatch {
  width: 74px; height: 74px;
  border: 2px solid var(--line);
  border-radius: 18px; overflow: hidden;
  background: #fff; cursor: pointer; transition: .2s ease; padding: 4px;
}
.pd-color-swatch img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
.pd-color-swatch.active { border-color: #000; box-shadow: 0 10px 18px rgba(0,0,0,.08); }

.pd-size-options { display: flex; flex-wrap: wrap; gap: 10px; }
.pd-size-btn {
  min-width: 62px; height: 54px;
  border-radius: 14px; border: 1px solid var(--line);
  background: #fff; font-weight: 700; cursor: pointer; transition: .2s ease; font: inherit;
}
.pd-size-btn:hover { border-color: #111; }
.pd-size-btn.active { background: #000; color: #fff; border-color: #000; }

.pd-purchase-row { display: grid; grid-template-columns: 92px 1fr; gap: 12px; margin-top: 18px; }
.pd-qty {
  width: 100%; height: 56px; border-radius: 14px;
  border: 1px solid var(--line); background: #fff;
  padding: 0 14px; font: inherit; outline: none;
}

.pd-accordion { margin-top: 24px; border-top: 1px solid var(--line); }
.pd-accordion-item { border-bottom: 1px solid var(--line); }
.pd-accordion-btn {
  width: 100%; background: transparent; border: 0;
  padding: 18px 0; display: flex; align-items: center;
  justify-content: space-between; font-size: 16px; font-weight: 800;
  cursor: pointer; text-align: left; font: inherit;
}
.pd-accordion-content { padding: 0 0 18px; color: var(--muted); line-height: 1.75; }

.pd-selection-area { padding-top: 36px; }
.pd-selection-panel {
  background: var(--surface);
  border-radius: calc(var(--radius) + 8px);
  box-shadow: var(--shadow);
  padding: 26px;
}
.pd-summary-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; font-size: 15px; }
.pd-summary-head strong { font-size: 24px; }

.pd-cart-list { display: grid; gap: 14px; margin-top: 18px; }
.pd-cart-item {
  display: grid; grid-template-columns: 82px 1fr auto;
  gap: 14px; padding: 14px;
  border: 1px solid var(--line); border-radius: 18px;
  background: #fff; align-items: center;
}
.pd-cart-item img { width: 82px; height: 82px; object-fit: cover; border-radius: 14px; }
.pd-cart-item h4 { margin: 0 0 6px; font-size: 18px; }
.pd-cart-item p  { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.55; }

.pd-remove-btn {
  background: #fff; border: 1px solid var(--line);
  border-radius: 12px; padding: 10px 12px;
  cursor: pointer; font-weight: 700; font: inherit;
}

.pd-empty-state {
  border: 1px dashed var(--line); border-radius: 18px;
  padding: 22px; color: var(--muted); background: #fcfcfd;
}

.pd-total-box {
  margin-top: 18px; padding: 18px; border-radius: 18px;
  background: #0f0f10; color: #fff;
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; flex-wrap: wrap;
}
.pd-total-label { opacity: .75; font-size: 13px; margin-bottom: 4px; }
.pd-total-amount { font-size: 28px; letter-spacing: -.5px; }

@media (max-width: 980px) { .pd-layout { grid-template-columns: 1fr; } }
@media (max-width: 640px) {
  .pd-thumbs { grid-template-columns: repeat(2,1fr); }
  .pd-purchase-row { grid-template-columns: 1fr; }
  .pd-cart-item { grid-template-columns: 1fr; }
  .pd-info, .pd-gallery { padding: 20px; }
}
</style>
