import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Archivo from "../pages/Archivo";
import Ventas from "../pages/Ventas";
import Compras from "../pages/Compras";
import Clientes from "../pages/Clientes";
import Proveedores from "../pages/Proveedores";
import Stock from "../pages/Stock";
import Caja from "../pages/Caja";
import Informes from "../pages/Informes";
import Configuracion from "../pages/Configuracion";
import Usuarios from "../pages/Usuarios";
import Ayuda from "../pages/Ayuda";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/archivo" element={<Archivo />}></Route>
      <Route path="/ventas" element={<Ventas />}></Route>
      <Route path="/compras" element={<Compras />}></Route>
      <Route path="/clientes" element={<Clientes />}></Route>
      <Route path="/proveedores" element={<Proveedores />}></Route>
      <Route path="/stock" element={<Stock />}></Route>
      <Route path="/caja" element={<Caja />}></Route>
      <Route path="/informes" element={<Informes />}></Route>
      <Route path="/configuracion" element={<Configuracion />}></Route>
      <Route path="/usuarios" element={<Usuarios />}></Route>
      <Route path="/ayuda" element={<Ayuda />}></Route>
    </ReactDomRoutes>
  );
};
