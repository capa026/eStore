export const detectDeviceType = () => {
  const device = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";

  return device;
};

export const appRoutes = [
  { category: "Videojuegos_y_consolas", title: "Videojuegos y consolas" },
  { category: "Computacion", title: "Computacion" },
  { category: "Telefonos_y_accesorios", title: "Telefonos y accesorios" },
  { category: "Accesorios_y_Miscelaneos", title: "Accesorios y Miscelaneos" },
  { category: "Ropa_para_damas", title: "Ropa para damas" },
  { category: "Ropa_para_caballeros", title: "Ropa para caballeros" },
  { category: "Todo_para_tu_bebe", title: "Todo para tu bebe" },
  {
    category: "Accesorios_de_moto_y_bicicleta",
    title: "Accesorios de moto y bicicleta",
  },
];
