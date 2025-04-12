import { Menu, Search } from "lucide-react";
import titleSvg from "../assets/eStore.svg";
import logoSvg from "../assets/eStore_logo_only.svg";
import InputIcon from "./UI/InputIcon";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-screamin-green to-screamin-green/80 p-2 shadow-bottom-sm sticky top-0">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <img
          src={titleSvg.src}
          alt="eStore - title"
          className="hidden w-24 md:block"
        />
        <img
          src={logoSvg.src}
          alt="eStore - title"
          className="block w-8 md:hidden"
        />
        <InputIcon icon={<Search />} placeholder={"Busca tus productos aqui"} />
        <div className="cursor-pointer p-1 rounded-md border-2 border-black/50 ">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
