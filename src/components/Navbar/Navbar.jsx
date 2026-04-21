import {
  ItemContainer,
  ItemsContainer,
  LogoStyled,
  NavbarContainer,
  NavbarTittle,
  PrincipalNavbar,
  ToolBar,
  ToolItem,
} from "./NavbarStyles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <PrincipalNavbar>
        <LogoStyled
          src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1773970086/PROYECTOS/EMPRESARIAL/eficacia_umc4yn.svg"
          alt="Empresarial Logo"
        />
        <NavbarTittle>
          <h1>Empresarial - Principal</h1>
        </NavbarTittle>
        <ItemsContainer>
          <ItemContainer>
            <h3>Archivo</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Ventas</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Compras</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Fondos</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Stock</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Configuración</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Usuarios</h3>
          </ItemContainer>
          <ItemContainer>
            <h3>Ayuda</h3>
          </ItemContainer>
        </ItemsContainer>
      </PrincipalNavbar>
      <ToolBar>
        <ToolItem>
          <img src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1773970086/PROYECTOS/EMPRESARIAL/eficacia_umc4yn.svg" />
          <h5>Titulo</h5>
        </ToolItem>
        <ToolItem></ToolItem>
        <ToolItem></ToolItem>
        <ToolItem></ToolItem>
      </ToolBar>
    </NavbarContainer>
  );
};
