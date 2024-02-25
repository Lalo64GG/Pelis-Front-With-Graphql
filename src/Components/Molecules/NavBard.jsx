import { Outlet } from "react-router-dom";
import { NavLink } from "../Atoms/NavLink";

export const Navbar = () => {

  return (
    <div>
      <header className="w-full text-white">
        <nav className="flex justify-around items-center gap-x-4 shadow-md w-full ">
        <h1 className="text-xl font-bold">HBO MAX</h1>
           <div className="flex gap-x-16">
            <NavLink to="/home">Inicio</NavLink>
            <NavLink to="/home/peliculas">Peliculas</NavLink>
            <NavLink to="/home/series"> Series </NavLink>
            <NavLink to="/">Logout</NavLink>
           </div>
        </nav>
      </header>

      <main className="px-4">
        <Outlet/>
      </main>
    </div>
  );
};
