import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assest/shopping_cart-01.jpg";
import useStyles from "./styles";

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} colot="inherit">
            <img
              src={logo}
              alt="Commerxe.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show Cart items" color="inherit" />
            <Badge badgeContent ={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
