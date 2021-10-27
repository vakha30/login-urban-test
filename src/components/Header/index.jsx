import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import cl from "./header.module.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <NavLink exact to="/" activeClassName={cl.active}>
            <Button color="inherit">Home</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
