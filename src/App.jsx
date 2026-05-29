import { Routes } from "./routes/routes";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";

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

const topMenu = [
  "Archivo",
  "Ventas",
  "Compras",
  "Fondos",
  "Contabilidad",
  "Stock",
  "Recursos Humanos",
  "Archivo",
  "Informes",
  "Configuración",
  "Usuarios",
  "Ayuda",
];

const quickActions = [
  { icon: <DescriptionOutlinedIcon />, label: "Factura" },
  { icon: <LocalShippingOutlinedIcon />, label: "Remito" },
  { icon: <ShoppingCartOutlinedIcon />, label: "Pedido" },
  { icon: <AttachMoneyOutlinedIcon />, label: "Presupuesto" },
  { icon: <InsertDriveFileOutlinedIcon />, label: "Otros" },
  { icon: <SearchOutlinedIcon />, label: "Consulta" },
  { icon: <HighlightOffOutlinedIcon />, label: "Anulación" },
  { icon: <ReceiptLongOutlinedIcon />, label: "Facturación\nElectrónica" },
  { icon: <AccountBalanceOutlinedIcon />, label: "Cuenta\nCorriente" },
  { icon: <SwapHorizOutlinedIcon />, label: "Movimientos" },
  { icon: <ReceiptLongOutlinedIcon />, label: "Planilla\nde cobros" },
  { icon: <WarningAmberOutlinedIcon />, label: "Deudas\nTotales" },
  { icon: <MonetizationOnOutlinedIcon />, label: "Precios" },
  { icon: <PercentOutlinedIcon />, label: "Bonificaciones" },
];

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "#d9641c",
            height: 85,
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              minHeight: "78px !important",
              px: 2,
            }}
          >
            {/* TOP BAR */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 35,
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  opacity: 0.9,
                }}
              >
                Empresarial - Principal
              </Typography>

              <Box sx={{ width: 50 }} />
            </Box>

            {/* MENU */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 0.5,
                overflowX: "auto",
              }}
            >
              {topMenu.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "#fff",
                    backgroundColor: "transparent",
                    textTransform: "none",
                    fontSize: 13,
                    minWidth: "auto",
                    px: 1.2,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>

        {/* ACTION BAR */}
        <Box
          sx={{
            backgroundColor: "#efefef",
            px: 2,
            py: 2,
            display: "flex",
            gap: 2,
            overflowX: "auto",
          }}
        >
          {quickActions.map((action, index) => (
            <Box
              key={index}
              sx={{
                minWidth: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#777",
              }}
            >
              <IconButton
                sx={{
                  color: "#888",
                  mb: 0.5,
                }}
              >
                {action.icon}
              </IconButton>

              <Typography
                align="center"
                sx={{
                  fontSize: 11,
                  lineHeight: 1.1,
                  whiteSpace: "pre-line",
                }}
              >
                {action.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
