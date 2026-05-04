<template>
  <div>
    <div class="topbar text-center py-3">
      🚚 Envíos a todo Perú | Cambios por talla | Compra segura
    </div>

    <header class="site-header sticky-top">
      <nav class="navbar navbar-expand-lg py-3">
        <div class="container">
          <a class="navbar-brand brand d-flex align-items-center gap-3 m-0" href="#inicio">
            <div class="brand-badge">BF</div>
            <div>
              <h1>Boot Fit Perú</h1>
              <p>Zapatillas deportivas para gym</p>
            </div>
          </a>

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
              <li class="nav-item"><a class="nav-link active" href="#inicio">Inicio</a></li>
              <li class="nav-item"><a class="nav-link" href="#catalogo">Productos</a></li>
              <li class="nav-item"><a class="nav-link" href="#beneficios">Beneficios</a></li>
              <li class="nav-item"><a class="nav-link" href="#detalle">Detalle</a></li>
              <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
            </ul>

            <div class="d-flex align-items-center justify-content-center gap-2 mt-3 mt-lg-0">
              <button class="icon-btn" aria-label="Buscar">🔍</button>
              <a class="btn primary-btn px-4 py-3" href="#catalogo">Comprar ahora</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>