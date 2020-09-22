import { Menu, MenuItem } from "@material-ui/core";
import React from "react";

const UserMenu = ({ anchorEl, onClose }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onClose}>Parth</MenuItem>
      <MenuItem onClick={onClose}>parth@gmail.com</MenuItem>
    </Menu>
  );
};

export default UserMenu;
