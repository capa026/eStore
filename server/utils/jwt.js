import jwt from "jsonwebtoken";

const ACCESS_KEY = process.env.JWT_ACCESS_KEY;
const REFRESH_KEY = process.env.JWT_REFRESH_KEY;

export const generateTokens = (userID) => {
  const accessToken = jwt.sign({ userID }, ACCESS_KEY, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userID }, REFRESH_KEY, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) => jwt.verify(token, ACCESS_KEY);
export const verifyRefreshToken = (token) => jwt.verify(token, REFRESH_KEY);

/** 

*/
const videojuegosYConsolas = [
  // Retro Consoles
  {
    name: "Consola Retro DOLSAO",
    description:
      "Consola retro con más de 20,000 juegos clásicos integrados y 9 emuladores [[1]].",
    quantity: 50,
    price: 99.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Mini Arcade Machine",
    description:
      "Reproducción en miniatura de una máquina arcade con más de 20 juegos retro incluidos [[3]].",
    quantity: 30,
    price: 49.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },

  // Modern Consoles
  {
    name: "PlayStation 5",
    description:
      "Consola de última generación con gráficos en 4K y SSD ultrarrápido.",
    quantity: 20,
    price: 499.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Xbox Series X",
    description: "Consola potente con rendimiento sin igual para juegos AAA.",
    quantity: 15,
    price: 499.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Nintendo Switch OLED",
    description:
      "Consola híbrida con pantalla OLED de alta calidad y juegos exclusivos [[5]].",
    quantity: 25,
    price: 349.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },

  // Video Games
  {
    name: "FIFA 23",
    description:
      "Juego de fútbol oficial de EA Sports con gráficos realistas y modos multijugador.",
    quantity: 40,
    price: 59.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    description:
      "Aventura épica en un mundo abierto lleno de misterios y desafíos.",
    quantity: 35,
    price: 69.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Call of Duty: Modern Warfare III",
    description:
      "Juego de disparos en primera persona con gráficos impresionantes.",
    quantity: 30,
    price: 69.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Spider-Man 2",
    description:
      "Aventura de acción con gráficos cinematográficos y una historia emocionante.",
    quantity: 25,
    price: 59.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Grand Theft Auto V",
    description:
      "Uno de los juegos más vendidos de todos los tiempos con un mundo abierto inmenso.",
    quantity: 50,
    price: 29.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Minecraft",
    description:
      "Juego sandbox creativo con infinitas posibilidades de construcción y exploración.",
    quantity: 60,
    price: 29.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Fortnite",
    description:
      "Juego de batalla real gratuito con eventos y colaboraciones constantes.",
    quantity: 100,
    price: 12,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Elden Ring",
    description:
      "RPG de acción desarrollado por FromSoftware con una historia profunda y desafiante.",
    quantity: 20,
    price: 59.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Super Mario Bros. Wonder",
    description:
      "Plataformas clásicas con nuevos niveles y mecánicas innovadoras.",
    quantity: 15,
    price: 59.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },

  // Accessories
  {
    name: "Mando Inalámbrico Xbox",
    description: "Control ergonómico compatible con Xbox Series X|S y PC.",
    quantity: 40,
    price: 69.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "DualSense PlayStation 5",
    description: "Control inalámbrico con tecnología háptica avanzada.",
    quantity: 35,
    price: 79.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Cargador para Nintendo Switch",
    description: "Cargador rápido compatible con la consola Nintendo Switch.",
    quantity: 50,
    price: 19.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Tarjeta de Memoria MicroSD 128GB",
    description:
      "Almacenamiento adicional para juegos y aplicaciones en consolas.",
    quantity: 60,
    price: 29.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Soporte Vertical para PS5",
    description:
      "Soporte resistente para mantener la consola organizada y segura.",
    quantity: 25,
    price: 14.99,
    category: "Videojuegos y consolas",
    image_url: "https://via.placeholder.com/150",
  },
];
const computacion = [
  // Laptops and Desktops
  {
    name: "Laptop HP Pavilion",
    description: "Laptop con procesador Intel i5, 8GB RAM y SSD de 256GB.",
    quantity: 15,
    price: 799.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "CPU HP ELITEDESK 800 G3",
    description:
      "Escritorio compacto con Core i5 de 6ta generación, 8GB RAM y SSD de 128GB [[5]].",
    quantity: 10,
    price: 205.0,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Computador de Escritorio i5",
    description:
      "Equipo básico para tareas diarias con procesador i5 y 8GB RAM [[7]].",
    quantity: 20,
    price: 499.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Desktop Mini HP Thin T630",
    description:
      "Mini PC con procesador AMD GX-420GI, ideal para espacios reducidos [[5]].",
    quantity: 12,
    price: 399.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },

  // Components
  {
    name: "ASUS PRIME Z590 A",
    description:
      "Placa madre para gaming con soporte para procesadores Intel de última generación [[6]].",
    quantity: 8,
    price: 249.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "COUGAR Helor 360",
    description:
      "Sistema de enfriamiento líquido para CPUs de alto rendimiento [[6]].",
    quantity: 5,
    price: 129.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Memoria USB 128GB",
    description:
      "Memoria USB portátil con capacidad de 128GB para almacenar archivos importantes [[10]].",
    quantity: 50,
    price: 19.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Disco Duro Externo 1TB",
    description:
      "Almacenamiento externo confiable con capacidad de 1TB [[10]].",
    quantity: 30,
    price: 59.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },

  // Accessories
  {
    name: "Adaptador DisplayPort a VGA",
    description:
      "Convierte puertos DisplayPort a VGA para conectar monitores antiguos [[6]].",
    quantity: 25,
    price: 14.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Mouse Gamer Xtech",
    description: "Mouse ergonómico con luces RGB y alta precisión [[9]].",
    quantity: 40,
    price: 29.9,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Teclado Mecánico Gamer",
    description: "Teclado con switches mecánicos y retroiluminación RGB.",
    quantity: 35,
    price: 79.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Case Gamer ATX",
    description:
      "Gabinete espacioso con ventilación avanzada para PCs de gaming [[7]].",
    quantity: 15,
    price: 95.0,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },

  // Networking
  {
    name: "Router WiFi 6",
    description:
      "Router de alta velocidad compatible con WiFi 6 para redes domésticas.",
    quantity: 20,
    price: 149.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "DECO E4 3 PACK HOME WIFI",
    description:
      "Kit de malla WiFi para cubrir grandes áreas en tu hogar [[5]].",
    quantity: 10,
    price: 109.0,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },

  // Books and Learning Materials
  {
    name: "Computación Básica en 20 Minutos",
    description:
      "Libro ideal para principiantes que necesitan aprender lo esencial de la computación rápidamente [[1]].",
    quantity: 50,
    price: 9.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Curso de Computación Básica",
    description:
      "Taller dirigido a personas mayores de 15 años para aprender hardware, software y redes [[4]].",
    quantity: 100,
    price: 49.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },

  // Miscellaneous
  {
    name: "Fuente de Poder 1500W",
    description:
      "Fuente de poder robusta con certificación 80 Plus Gold para sistemas avanzados [[3]].",
    quantity: 5,
    price: 199.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Chip Cuántico Majorana 1",
    description:
      "Primer chip cuántico del mundo impulsado por una nueva arquitectura topológica [[8]].",
    quantity: 2,
    price: 9999.99,
    category: "Computacion",
    image_url: "https://via.placeholder.com/150",
  },
];
const telefonosYAccesorios = [
  // Smartphones
  {
    name: "iPhone 14 Pro",
    description:
      "Teléfono inteligente con cámara triple y pantalla OLED Super Retina.",
    quantity: 25,
    price: 999.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Smartphone con cámara de 200MP y procesador Exynos ultra rápido.",
    quantity: 20,
    price: 899.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Google Pixel 7 Pro",
    description:
      "Teléfono con cámara líder en fotografía y software optimizado por Google.",
    quantity: 15,
    price: 799.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Xiaomi Redmi Note 12",
    description:
      "Smartphone económico con batería de larga duración y pantalla AMOLED.",
    quantity: 30,
    price: 299.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },

  // Phone Accessories
  {
    name: "Cargador Inalámbrico Rápido",
    description:
      "Cargador inalámbrico compatible con dispositivos Qi, carga hasta 15W.",
    quantity: 50,
    price: 29.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Funda Protectora para iPhone",
    description:
      "Funda resistente a golpes con diseño transparente para iPhone 14.",
    quantity: 40,
    price: 14.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Cable USB-C a Lightning",
    description:
      "Cable certificado MFi para cargar y transferir datos rápidamente.",
    quantity: 60,
    price: 9.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Protector de Pantalla Vidrio Templado",
    description:
      "Protector anti-rayaduras para pantallas de teléfonos inteligentes.",
    quantity: 100,
    price: 7.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },

  // Smartwatches and Wearables
  {
    name: "Apple Watch Series 8",
    description:
      "Reloj inteligente con monitoreo de salud avanzado y GPS integrado.",
    quantity: 15,
    price: 399.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Samsung Galaxy Watch 5",
    description:
      "Smartwatch con batería de larga duración y seguimiento deportivo.",
    quantity: 20,
    price: 249.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Xiaomi Band 7",
    description:
      "Banda inteligente económica con monitor de frecuencia cardíaca y sueño.",
    quantity: 40,
    price: 39.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },

  // Headphones and Audio
  {
    name: "Audífonos Inalámbricos AirPods Pro",
    description:
      "Audífonos con cancelación activa de ruido y estuche de carga inalámbrica.",
    quantity: 35,
    price: 199.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Audífonos Sony WH-1000XM5",
    description:
      "Audífonos premium con cancelación de ruido líder en la industria.",
    quantity: 10,
    price: 349.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Audífonos Bluetooth JBL",
    description:
      "Audífonos económicos con sonido envolvente y batería de 20 horas.",
    quantity: 50,
    price: 49.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },

  // Power Banks
  {
    name: "Power Bank 20,000mAh",
    description:
      "Banco de energía portátil con capacidad para cargar tu teléfono varias veces.",
    quantity: 45,
    price: 29.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Power Bank Solar",
    description:
      "Banco de energía recargable mediante energía solar, ideal para actividades al aire libre.",
    quantity: 20,
    price: 49.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },

  // Miscellaneous Accessories
  {
    name: "Soporte para Teléfono en Coche",
    description:
      "Soporte ajustable para usar tu teléfono como GPS mientras conduces.",
    quantity: 30,
    price: 9.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Lente de Aumento para Smartphone",
    description:
      "Kit de lentes para mejorar la calidad de fotos y videos en tu teléfono.",
    quantity: 25,
    price: 19.99,
    category: "Telefonos y accesorios",
    image_url: "https://via.placeholder.com/150",
  },
];
const accesoriosYMiscelaneos = [
  // Audio Devices
  {
    name: "Audífonos Bluetooth Inalámbricos",
    description: "Audífonos con cancelación de ruido y batería de 30 horas.",
    quantity: 40,
    price: 59.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Bocina Portátil JBL Flip 6",
    description:
      "Bocina resistente al agua con sonido envolvente y diseño compacto.",
    quantity: 30,
    price: 119.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },

  // Smart Home Devices
  {
    name: "Bombilla Inteligente WiFi",
    description:
      "Controla el brillo y color de la luz desde tu teléfono o asistente de voz.",
    quantity: 50,
    price: 19.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Cámara de Seguridad WiFi",
    description:
      "Cámara inteligente con visión nocturna y detección de movimiento.",
    quantity: 25,
    price: 49.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },

  // Travel Accessories
  {
    name: "Adaptador Universal de Viaje",
    description:
      "Adaptador para enchufes en más de 150 países, compatible con USB.",
    quantity: 60,
    price: 14.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Organizador de Equipaje",
    description:
      "Juego de bolsas para mantener tu equipaje organizado durante los viajes.",
    quantity: 35,
    price: 24.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },

  // Gadgets and Tools
  {
    name: "Lámpara LED Recargable",
    description:
      "Lámpara portátil con múltiples niveles de brillo y base plegable.",
    quantity: 45,
    price: 29.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Kit de Herramientas Multifunción",
    description:
      "Herramientas compactas ideales para reparaciones diarias y emergencias.",
    quantity: 20,
    price: 39.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Cargador Solar Portátil",
    description:
      "Cargador recargable mediante energía solar, ideal para actividades al aire libre.",
    quantity: 15,
    price: 49.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },

  // Bags and Cases
  {
    name: "Mochila Antirrobo",
    description:
      "Mochila con cierre oculto y compartimento acolchado para laptop.",
    quantity: 25,
    price: 59.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Estuche Protector para Lentes",
    description:
      "Estuche resistente para proteger tus lentes ópticos o de sol.",
    quantity: 50,
    price: 9.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },

  // Health and Wellness
  {
    name: "Botella de Agua Inteligente",
    description:
      "Botella que te recuerda beber agua y registra tu consumo diario.",
    quantity: 30,
    price: 29.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Masajeador Portátil",
    description:
      "Dispositivo para relajar músculos después de una larga jornada.",
    quantity: 20,
    price: 39.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },

  // Miscellaneous
  {
    name: "Paraguas Plegable Automático",
    description:
      "Paraguas resistente al viento con apertura automática en un solo clic.",
    quantity: 40,
    price: 19.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Linterna LED Recargable",
    description: "Linterna ultra brillante con batería recargable USB.",
    quantity: 35,
    price: 14.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Set de Cubiertos de Acero Inoxidable",
    description: "Juego de cubiertos ligeros y duraderos para uso diario.",
    quantity: 50,
    price: 24.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Almohadilla Térmica Eléctrica",
    description:
      "Almohadilla ajustable para calentar o enfriar partes del cuerpo.",
    quantity: 25,
    price: 34.99,
    category: "Accesorios y Miscelaneos",
    image_url: "https://via.placeholder.com/150",
  },
];
const ropaParaDamas = [
  // Dresses
  {
    name: "Vestido de Noche Elegante",
    description:
      "Vestido largo con detalles bordados, ideal para eventos formales.",
    quantity: 15,
    price: 89.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Vestido Casual Veraniego",
    description:
      "Vestido ligero y fresco con estampado floral para uso diario.",
    quantity: 25,
    price: 49.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Vestido Corto de Fiesta",
    description:
      "Vestido ajustado con lentejuelas brillantes para ocasiones especiales.",
    quantity: 20,
    price: 69.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },

  // Tops
  {
    name: "Blusa de Seda Estampada",
    description: "Blusa elegante con diseño floral y corte holgado.",
    quantity: 30,
    price: 39.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Camiseta Básica Blanca",
    description:
      "Camiseta de algodón suave con cuello redondo, perfecta para el día a día.",
    quantity: 50,
    price: 14.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Top Deportivo Transpirable",
    description: "Top ajustado diseñado para actividades físicas intensas.",
    quantity: 40,
    price: 29.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },

  // Pants and Jeans
  {
    name: "Jeans Skinny Ajustados",
    description: "Pantalones ajustados con elastano para mayor comodidad.",
    quantity: 35,
    price: 59.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Pantalón de Vestir Negro",
    description:
      "Pantalón clásico en color negro, ideal para reuniones de trabajo.",
    quantity: 20,
    price: 49.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Shorts Jean Desgastados",
    description:
      "Shorts casuales con diseño desgastado y bordes deshilachados.",
    quantity: 25,
    price: 34.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },

  // Outerwear
  {
    name: "Chaqueta de Cuero Negra",
    description: "Chaqueta clásica de cuero sintético con cierre frontal.",
    quantity: 15,
    price: 79.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Abrigo Largo de Lana",
    description: "Abrigo elegante y abrigado, perfecto para el invierno.",
    quantity: 10,
    price: 129.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Sudadera con Capucha",
    description: "Sudadera casual con diseño moderno y bolsillos frontales.",
    quantity: 40,
    price: 39.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },

  // Accessories
  {
    name: "Bufanda de Lana",
    description: "Bufanda gruesa y cálida, ideal para climas fríos.",
    quantity: 30,
    price: 19.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Sombrero Fedora de Paja",
    description: "Sombrero versátil para complementar tus outfits de verano.",
    quantity: 25,
    price: 24.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Cinturón de Cuero",
    description:
      "Cinturón ajustable en color marrón, ideal para jeans o vestidos.",
    quantity: 50,
    price: 14.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },

  // Shoes
  {
    name: "Zapatos de Tacón Alto",
    description: "Zapatos elegantes con tacón fino y punta estilizada.",
    quantity: 15,
    price: 59.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Sandalias Planas",
    description:
      "Sandalias cómodas con diseño minimalista y correas ajustables.",
    quantity: 20,
    price: 29.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Botas Altas",
    description:
      "Botas largas estilo militar con cordones y suela antideslizante.",
    quantity: 10,
    price: 89.99,
    category: "Ropa para damas",
    image_url: "https://via.placeholder.com/150",
  },
];
const ropaParaCaballeros = [
  // Shirts
  {
    name: "Camisa Formal Blanca",
    description:
      "Camisa de algodón manga larga en color blanco, ideal para reuniones de trabajo.",
    quantity: 30,
    price: 39.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Camisa Casual a Cuadros",
    description:
      "Camisa casual con diseño a cuadros y corte moderno, perfecta para el día a día.",
    quantity: 25,
    price: 29.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Polo Deportivo Transpirable",
    description:
      "Polo ajustado diseñado para actividades físicas intensas, con tecnología de secado rápido.",
    quantity: 40,
    price: 24.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },

  // Pants and Jeans
  {
    name: "Jeans Rectos Clásicos",
    description: "Pantalones rectos con diseño minimalista y tela resistente.",
    quantity: 35,
    price: 59.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Pantalón Chino Beige",
    description:
      "Pantalón chino ligero en color beige, ideal para uso casual o semi-formal.",
    quantity: 20,
    price: 49.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Shorts Deportivos Negros",
    description:
      "Shorts ajustados con cintura elástica, diseñados para entrenamientos intensos.",
    quantity: 50,
    price: 19.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },

  // Outerwear
  {
    name: "Chaqueta de Cuero Marrón",
    description: "Chaqueta clásica de cuero sintético con diseño vintage.",
    quantity: 15,
    price: 89.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Abrigo Largo de Invierno",
    description: "Abrigo grueso y abrigado, perfecto para climas fríos.",
    quantity: 10,
    price: 129.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Sudadera con Capucha Gris",
    description: "Sudadera casual con diseño moderno y bolsillos frontales.",
    quantity: 40,
    price: 39.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },

  // Accessories
  {
    name: "Corbata de Seda Negra",
    description: "Corbata elegante de seda pura, ideal para eventos formales.",
    quantity: 50,
    price: 14.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Cinturón de Cuero Negro",
    description:
      "Cinturón ajustable en color negro, perfecto para jeans o pantalones formales.",
    quantity: 60,
    price: 19.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Gorra Deportiva Ajustable",
    description: "Gorra ligera con diseño deportivo y panel trasero ajustable.",
    quantity: 70,
    price: 9.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },

  // Shoes
  {
    name: "Zapatos de Vestir Negros",
    description:
      "Zapatos elegantes con acabado brillante, ideales para ocasiones formales.",
    quantity: 20,
    price: 79.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Botines Casuales Marrones",
    description:
      "Botines de cuero sintético con diseño casual y suela antideslizante.",
    quantity: 15,
    price: 69.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Tenis Deportivos Blancos",
    description:
      "Tenis transpirables con diseño minimalista, perfectos para actividades físicas.",
    quantity: 45,
    price: 49.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },

  // Underwear
  {
    name: "Boxers de Algodón (Pack de 3)",
    description:
      "Boxers cómodos de algodón suave, disponibles en colores neutros.",
    quantity: 100,
    price: 19.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Calcetines Deportivos (Pack de 5)",
    description:
      "Calcetines transpirables diseñados para actividades físicas intensas.",
    quantity: 120,
    price: 12.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },

  // Miscellaneous
  {
    name: "Bufanda de Lana Gris",
    description: "Bufanda gruesa y cálida, ideal para climas fríos.",
    quantity: 30,
    price: 14.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Guantes de Piel Negros",
    description:
      "Guantes elegantes de piel sintética, perfectos para el invierno.",
    quantity: 25,
    price: 29.99,
    category: "Ropa para caballeros",
    image_url: "https://via.placeholder.com/150",
  },
];
const todoParaTuBebe = [
  // Baby Clothing
  {
    name: "Conjunto de Ropa para Bebé",
    description:
      "Juego de 3 piezas con camiseta, pantalón y gorro, ideal para recién nacidos.",
    quantity: 40,
    price: 29.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Pijama de Algodón Suave",
    description: "Pijama cómodo y transpirable para bebés de 0-6 meses.",
    quantity: 50,
    price: 19.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Zapatos de Bebé",
    description: "Zapatos suaves y flexibles para proteger los pies del bebé.",
    quantity: 30,
    price: 14.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },

  // Feeding Supplies
  {
    name: "Biberón Anticolico",
    description:
      "Biberón diseñado para reducir el cólico en bebés, con tetina de silicona.",
    quantity: 60,
    price: 9.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Set de Cubiertos para Bebés",
    description:
      "Cubiertos seguros y ergonómicos para que los bebés aprendan a comer solos.",
    quantity: 45,
    price: 12.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Mamadera Térmica",
    description:
      "Botella térmica para mantener la leche o agua caliente durante horas.",
    quantity: 20,
    price: 19.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },

  // Strollers and Carriers
  {
    name: "Coche para Bebé Ligero",
    description:
      "Coche plegable y ligero, perfecto para viajes y paseos diarios.",
    quantity: 15,
    price: 149.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Portabebés Ergonómico",
    description:
      "Portabebés ajustable que permite llevar al bebé en diferentes posiciones.",
    quantity: 25,
    price: 89.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },

  // Toys and Accessories
  {
    name: "Peluche Musical",
    description:
      "Peluche suave con música relajante para ayudar al bebé a dormir.",
    quantity: 50,
    price: 14.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Gimnasio de Actividades",
    description:
      "Tapete con juguetes colgantes para estimular el desarrollo motor del bebé.",
    quantity: 20,
    price: 39.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Bloques de Construcción",
    description:
      "Bloques grandes y seguros para que los bebés exploren y jueguen.",
    quantity: 35,
    price: 19.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },

  // Bath and Hygiene
  {
    name: "Tina para Bañar Bebés",
    description:
      "Tina portátil con soporte para bañar al bebé de manera segura.",
    quantity: 25,
    price: 29.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Kit de Cuidado Personal",
    description:
      "Incluye cepillo para el cabello, cortauñas y peine para bebés.",
    quantity: 40,
    price: 14.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Toallas con Capucha",
    description:
      "Toallas suaves con capucha para envolver al bebé después del baño.",
    quantity: 50,
    price: 9.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },

  // Safety and Health
  {
    name: "Monitor de Sueño Inteligente",
    description:
      "Dispositivo que monitorea la respiración y movimientos del bebé mientras duerme.",
    quantity: 10,
    price: 129.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Termómetro Digital",
    description:
      "Termómetro rápido y preciso para medir la temperatura del bebé.",
    quantity: 30,
    price: 19.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Protector de Enchufes",
    description:
      "Protector de seguridad para evitar que los bebés toquen los enchufes eléctricos.",
    quantity: 100,
    price: 4.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },

  // Miscellaneous
  {
    name: "Saco de Dormir",
    description:
      "Saco cómodo y seguro para que el bebé duerma sin peligro de sofocarse.",
    quantity: 35,
    price: 24.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
  {
    name: "Manta de Algodón",
    description:
      "Manta suave y ligera, ideal para abrigar al bebé durante el día o la noche.",
    quantity: 50,
    price: 12.99,
    category: "Todo para tu bebe",
    image_url: "https://via.placeholder.com/150",
  },
];

export const fakeData = [
  ...computacion,
  ...videojuegosYConsolas,
  ...telefonosYAccesorios,
  ...accesoriosYMiscelaneos,
  ...ropaParaDamas,
  ...ropaParaCaballeros,
  ...todoParaTuBebe,
];
