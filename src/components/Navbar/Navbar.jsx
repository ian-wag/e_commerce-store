import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography>
            <img
              src={logo}
              alt="MBNGoods"
              height="25px"
              className={classes.image}
            />
            MBNGoods
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
