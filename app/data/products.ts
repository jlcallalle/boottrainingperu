import tenisFeminino from '~/assets/images/tenis-treino-feminino.webp'
import divasImage from '~/assets/images/divas1.webp'
import bootzImage from '~/assets/images/bootz1.webp'

export const products = [
  {
    name: 'Zapatillas de entrenamiento',
    tag: 'Destacado',
    price: 259.9,
    desc: 'Zapatillas de entrenamiento físico para mujer, diseñadas para gym, funcional y uso diario.',
    image: tenisFeminino,
    sizes: [34, 35, 36, 37, 38, 39],
    note: 'Envío gratis en Lima'
  },
  {
    name: 'Botas Divas entrenamiento',
    tag: 'Nuevo',
    price: 239.9,
    desc: 'Modelo urbano con acabado premium y suela cómoda para gym y uso diario.',
    image: divasImage,
    sizes: [35, 36, 37, 38],
    note: '6% dto. por transferencia'
  },
  {
    name: 'Botas Bootz entrenamiento',
    tag: 'Top ventas',
    price: 229.9,
    desc: 'Diseño moderno en tonos suaves, ideal para una propuesta femenina y visual.',
    image: bootzImage,
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
