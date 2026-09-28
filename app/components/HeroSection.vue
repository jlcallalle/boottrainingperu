<script setup>
import heroImage from '~/assets/images/tenis1.jpeg'
</script>

<template>
  <section id="inicio" class="py-4 py-lg-5">
    <div class="container">
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-6">
          <div class="hero-section hero-copy h-100 d-flex flex-column justify-content-center">
            <div class="eyebrow">Zapatillas para entrenar</div>

            <h2 class="hero-title">
              Mejora tus <span>entrenamientos</span> con soporte y performance.
            </h2>

            <p>
              Zapatillas deportivas enfocadas en gimnasio, entrenamiento funcional y rutinas diarias.
              Diseños cómodos, estables y listos para acompañarte en cada repetición.
            </p>

            <div class="d-flex flex-wrap gap-3 mb-4">
              <a class="btn primary-btn px-4 py-3" href="#catalogo">Ver colección</a>
              <a class="btn secondary-btn px-4 py-3" href="#contacto">Solicitar información</a>
            </div>

            <div class="row g-3 mt-1">
              <div class="col-md-4">
                <div class="stat">
                  <strong>+20</strong>
                  <span>Modelos de temporada</span>
                </div>
              </div>

              <div class="col-md-4">
                <div class="stat">
                  <strong>35-40</strong>
                  <span>Tallas disponibles</span>
                </div>
              </div>

              <div class="col-md-4">
                <div class="stat">
                  <strong>24h</strong>
                  <span>Atención por WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="hero-section hero-card h-100">
            <div class="floating-note">Modelo destacado</div>

            <img
              :src="heroImage"
              alt="Zapatilla deportiva destacada"
            >

            <div class="floating-price">
              <small>Desde</small>
              <strong>S/ 229.90</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
