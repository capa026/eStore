import { LogIn, Menu, Pencil, Search, X } from "lucide-react";
import titleSvg from "../assets/eStore.svg";
import logoSvg from "../assets/eStore_logo_only.svg";
import InputIcon from "./UI/InputIcon";
import { useState } from "react";

const DropdownMenu = () => {
  return (
    <div
      className="select-none absolute right-0 top-[50px] flex flex-col md:max-w-[300px] bg-white rounded-bl-md rounded-br-md p-2 text-gray-700 [&_a]:p-1 [&_a]:rounded-md [&_a:hover]:bg-black/20 [&_a]:transition-colors [&_a]:duration-200
      [&_a]:flex [&_a]:items-center [&_a]:gap-2 text-sm
      border border-black/20 !border-t-0
    "
    >
      <a href="/auth/login">
        <LogIn width={18} /> Iniciar Sesion
      </a>
      <div className="w-full h-[1px] bg-black/30 my-1" />
      <a href="/auth/registro">
        <Pencil width={18} />
        Registrarse
      </a>
    </div>
  );
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-primary/50 to-primary/30 p-2 shadow-bottom-sm sticky top-0 backdrop-blur-md z-50">
      <div className="relative container mx-auto flex items-center justify-between gap-4">
        <a
          href="/"
          className="hidden hover:bg-black/20 p-2 rounded-md md:block transition-colors duration-200"
        >
          <img src={titleSvg.src} alt="eStore - title" className="w-24" />
        </a>
        <a href="/" className="active:bg-black/20 p-2 rounded-md md:hidden">
          <img src={logoSvg.src} alt="eStore - title" className="block w-8" />
        </a>
        <InputIcon icon={<Search />} placeholder={"Busca tus productos aqui"} />
        <div
          className="trigger cursor-pointer p-1 rounded-md border-2 border-black/50 hover:bg-black/20 transition-colors duration-200"
          onClick={(e) => setShowDropdown(!showDropdown)}
        >
          {!showDropdown ? <Menu /> : <X />}
        </div>

        {showDropdown && <DropdownMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
