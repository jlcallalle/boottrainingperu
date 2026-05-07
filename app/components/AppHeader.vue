<script setup>
const route = useRoute()

const links = [
  { label: 'Inicio',      to: '/'           },
  { label: 'Productos',   to: '/productos'  },
  { label: 'Beneficios',  to: '/beneficios' },
  { label: 'Detalle',     to: '/detalle'    },
  { label: 'Contacto',    to: '/contacto'   },
]
</script>

<template>
  <div>
    <div class="topbar text-center py-3">
      🚚 Envíos a todo Perú | Cambios por talla | Compra segura
    </div>

    <header class="site-header sticky-top">
      <nav class="navbar navbar-expand-lg py-3">
        <div class="container">
          <NuxtLink class="navbar-brand brand d-flex align-items-center m-0" to="/">
            <img
              src="~/assets/images/logo_peru.jpeg"
              alt="Boot Training Brasil Perú"
              class="brand-logo"
            >
          </NuxtLink>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="mainNav" class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto gap-lg-2 text-center">
              <li v-for="link in links" :key="link.to" class="nav-item">
                <NuxtLink
                  :to="link.to"
                  class="nav-link"
                  :class="{ active: route.path === link.to }"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>

            <div class="d-flex align-items-center justify-content-center gap-2 mt-3 mt-lg-0">
              <button class="icon-btn" aria-label="Buscar">🔍</button>
              <NuxtLink class="btn primary-btn px-4 py-3" to="/productos">Comprar ahora</NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
