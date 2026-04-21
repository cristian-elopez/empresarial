import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PrincipalNavbar = styled.div`
  height: 80px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fe4e00;
  position: relative;
`;

export const NavbarTittle = styled.div`
  color: white;
  position: absolute;
  top: 0.5rem;
  h1 {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const ItemsContainer = styled.div`
  width: 98%;
  display: flex;
  justify-content: left;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;

export const ItemContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;

  h3 {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.8rem;
  }
  :hover {
    color: #fe4e00;
    background-color: #ece2e2;
  }
`;

export const LogoStyled = styled.img`
  position: absolute;
  width: 30px;
  top: 0.5rem;
  left: 1.5rem;
`;

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #ece2e2;
`;

export const ToolItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  height: 130px;
  background-color: #fe4e00;
  margin: 0 10px;
  cursor: pointer;

  img {
    width: 60%;
  }
`;
