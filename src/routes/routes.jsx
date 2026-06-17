import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </ReactDomRoutes>
  );
};
