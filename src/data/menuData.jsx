import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export const menuItems = [
  {
    id: "Archivo",
    name: "Archivo",
    actions: [
      { id: 1, label: "Abrir", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Guardar", icon: <DescriptionOutlinedIcon /> },
    ],
  },
  {
    id: "Ventas",
    name: "Ventas",
    actions: [
      { id: 1, label: "Factura", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Remito", icon: <LocalShippingOutlinedIcon /> },
      { id: 3, label: "Pedido", icon: <ShoppingCartOutlinedIcon /> },
      { id: 4, label: "Presupuesto", icon: <AttachMoneyOutlinedIcon /> },
      { id: 5, label: "Consulta", icon: <SearchOutlinedIcon /> },
      { id: 6, label: "Anulación", icon: <HighlightOffOutlinedIcon /> },
      // prettier-ignore
      { id: 7, label: "Cuenta\nCorriente", icon: <AccountBalanceOutlinedIcon />},
      { id: 8, label: "Movimientos", icon: <SwapHorizOutlinedIcon /> },
    ],
  },
  {
    id: "Compras",
    name: "Compras",
    actions: [
      { id: 1, label: "Factura", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Remito", icon: <LocalShippingOutlinedIcon /> },
      { id: 3, label: "Pedido", icon: <ShoppingCartOutlinedIcon /> },
      { id: 4, label: "Presupuesto", icon: <AttachMoneyOutlinedIcon /> },
      { id: 5, label: "Consulta", icon: <SearchOutlinedIcon /> },
      { id: 6, label: "Anulación", icon: <HighlightOffOutlinedIcon /> },
      // prettier-ignore
      { id: 7, label: "Cuenta\nCorriente", icon: <AccountBalanceOutlinedIcon /> },
      { id: 8, label: "Precios", icon: <MonetizationOnOutlinedIcon /> },
    ],
  },
  {
    id: "Clientes",
    name: "Clientes",
    actions: [
      { id: 1, label: "Crea", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Modifica", icon: <DescriptionOutlinedIcon /> },
      { id: 3, label: "Elimina", icon: <HighlightOffOutlinedIcon /> },
      { id: 4, label: "Consulta", icon: <SearchOutlinedIcon /> },
      // prettier-ignore
      { id: 5, label: "Cuenta\nCorriente", icon: <AccountBalanceOutlinedIcon /> },
    ],
  },
  {
    id: "Proveedores",
    name: "Proveedores",
    actions: [
      { id: 1, label: "Crea", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Modifica", icon: <DescriptionOutlinedIcon /> },
      { id: 3, label: "Elimina", icon: <HighlightOffOutlinedIcon /> },
      { id: 4, label: "Consulta", icon: <SearchOutlinedIcon /> },
      // prettier-ignore
      { id: 5, label: "Cuenta\nCorriente", icon: <AccountBalanceOutlinedIcon /> },
    ],
  },
  {
    id: "Stock",
    name: "Stock",
    actions: [
      { id: 1, label: "Productos", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Categorias", icon: <DescriptionOutlinedIcon /> },
      { id: 3, label: "Marcas", icon: <DescriptionOutlinedIcon /> },
      { id: 4, label: "Ajuste", icon: <DescriptionOutlinedIcon /> },
    ],
  },
  {
    id: "Caja",
    name: "Caja",
    actions: [{ id: 1, label: "Consulta", icon: <DescriptionOutlinedIcon /> }],
  },
  {
    id: "Informes",
    name: "Informes",
    actions: [
      { id: 1, label: "Ventas por día", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Ventas por mes", icon: <DescriptionOutlinedIcon /> },
      // prettier-ignore
      { id: 3, label: "Productos más vendidos", icon: <DescriptionOutlinedIcon /> },
      { id: 4, label: "Ganancias", icon: <DescriptionOutlinedIcon /> },
      { id: 5, label: "IVA", icon: <DescriptionOutlinedIcon /> },
    ],
  },
  {
    id: "Configuración",
    name: "Configuración",
    actions: [
      { id: 1, label: "Datos de empresa", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Moneda", icon: <DescriptionOutlinedIcon /> },
      { id: 3, label: "Copia de seguridad", icon: <DescriptionOutlinedIcon /> },
    ],
  },
  {
    id: "Usuarios",
    name: "Usuarios",
    actions: [
      { id: 1, label: "Crea", icon: <DescriptionOutlinedIcon /> },
      { id: 2, label: "Modifica", icon: <DescriptionOutlinedIcon /> },
      { id: 3, label: "Elimina", icon: <DescriptionOutlinedIcon /> },
      { id: 4, label: "Permisos", icon: <DescriptionOutlinedIcon /> },
      { id: 5, label: "Salir", icon: <DescriptionOutlinedIcon /> },
    ],
  },
  {
    id: "Ayuda",
    name: "Ayuda",
    actions: [{ id: 1, label: "Soporte", icon: <DescriptionOutlinedIcon /> }],
  },
];
