<script setup>
const emit = defineEmits(['show-toast'])

const form = reactive({
  name: '',
  phone: '',
  email: '',
  reason: '',
  message: ''
})

const submitForm = () => {
  emit('show-toast', `Gracias ${form.name}, tu consulta fue enviada.`)

  form.name = ''
  form.phone = ''
  form.email = ''
  form.reason = ''
  form.message = ''
}
</script>

<template>
  <section id="contacto" class="py-4 py-lg-5">
    <div class="container">
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-5">
          <div class="contact-panel info h-100">
            <div class="eyebrow contact-eyebrow">Contacto</div>

            <h3 class="contact-title">
              Hablemos de tu tienda deportiva
            </h3>

            <p class="contact-text">
              Usa esta sección para recibir consultas, pedidos o solicitudes de compra.
            </p>

            <ul class="contact-list">
              <li>
                <strong>WhatsApp ventas</strong>
                +51 999 999 999
              </li>
              <li>
                <strong>Correo comercial</strong>
                ventas@bootfitperu.pe
              </li>
              <li>
                <strong>Ubicación</strong>
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="contact-panel form h-100">
            <div class="section-head mb-3 d-block">
              <h3 class="contact-form-title">Envíanos un mensaje</h3>
              <p>Formulario base listo para conectar a EmailJS, Formspree o backend propio.</p>
            </div>

            <form class="row g-3" @submit.prevent="submitForm">
              <div class="col-md-6">
                <label class="form-label fw-bold">Nombre</label>
                <input v-model="form.name" class="form-control" type="text" placeholder="Tu nombre" required>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-bold">Celular</label>
                <input v-model="form.phone" class="form-control" type="tel" placeholder="987 654 321" required>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-bold">Correo</label>
                <input v-model="form.email" class="form-control" type="email" placeholder="tucorreo@gmail.com" required>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-bold">Tipo de consulta</label>
                <select v-model="form.reason" class="form-select" required>
                  <option value="">Selecciona una opción</option>
                  <option>Compra de producto</option>
                  <option>Stock y tallas</option>
                  <option>Distribución / mayorista</option>
                  <option>Otro</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label fw-bold">Mensaje</label>
                <textarea
                  v-model="form.message"
                  class="form-control"
                  rows="6"
                  placeholder="Hola, deseo información sobre el modelo Silver Rose en talla 37..."
                  required
                />
              </div>

              <div class="col-12">
                <div class="form-note">
                  Al enviar, se mostrará una validación visual en Vue.
                </div>
              </div>

              <div class="col-12 d-flex gap-2 mt-1 card-actions-mobile">
                <button class="btn detail-btn flex-fill py-3" type="submit">
                  Enviar consulta
                </button>

                <a class="btn buy-btn flex-fill py-3 d-grid place-items-center" href="#inicio">
                  Volver arriba
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>