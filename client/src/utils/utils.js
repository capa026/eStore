import controller from "@assets/controller.svg";
import monitor from "@assets/monitor.svg";
import phone from "@assets/phone.svg";
import watch from "@assets/watch.svg";
import femaleClothes from "@assets/female-clothes.svg";
import maleClothes from "@assets/male-clothes.svg";
import babyStuff from "@assets/baby.svg";
import moto from "@assets/moto.svg";

export const detectDeviceType = () => {
  const device = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";

  return device;
};

export const appRoutes = [
  {
    category: "Videojuegos_y_consolas",
    title: "Videojuegos y consolas",
    icon: controller.src,
  },
  { category: "Computacion", title: "Computacion", icon: monitor.src },
  {
    category: "Telefonos_y_accesorios",
    title: "Telefonos y accesorios",
    icon: phone.src,
  },
  {
    category: "Accesorios_y_Miscelaneos",
    title: "Accesorios y Miscelaneos",
    icon: watch.src,
  },
  {
    category: "Ropa_para_damas",
    title: "Ropa para damas",
    icon: femaleClothes.src,
  },
  {
    category: "Ropa_para_caballeros",
    title: "Ropa para caballeros",
    icon: maleClothes.src,
  },
  {
    category: "Todo_para_tu_bebe",
    title: "Todo para tu bebe",
    icon: babyStuff.src,
  },
  {
    category: "Accesorios_de_moto_y_bicicleta",
    title: "Accesorios de moto y bicicleta",
    icon: moto.src,
  },
];
