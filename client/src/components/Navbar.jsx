import { Menu, Search } from "lucide-react";
import titleSvg from "../assets/eStore.svg";
import logoSvg from "../assets/eStore_logo_only.svg";
import InputIcon from "./UI/InputIcon";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-primary/50 to-primary/30 p-2 shadow-bottom-sm sticky top-0 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <a
          href="/"
          className="hidden hover:bg-black/20 p-2 rounded-md md:block"
        >
          <img src={titleSvg.src} alt="eStore - title" className="w-24" />
        </a>
        <a href="/" className="active:bg-black/20 p-2 rounded-md md:hidden">
          <img src={logoSvg.src} alt="eStore - title" className="block w-8" />
        </a>
        <InputIcon icon={<Search />} placeholder={"Busca tus productos aqui"} />
        <div className="cursor-pointer p-1 rounded-md border-2 border-black/50 ">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
