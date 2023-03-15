import React, { useState } from "react";
import { Link } from "react-scroll";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import homeInfo from "app/data/containers/home.json";

const MenuMobile = (props) => {
  const { menuItems } = homeInfo.menu;
  const [openDrawer, setOpenDrawer] = useState(false);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const swipeableDrawerProps = {
    disableBackdropTransition: !iOS,
    disableDiscovery: iOS,
    open: openDrawer,
    onClose: () => setOpenDrawer(false),
    onOpen: () => setOpenDrawer(true),
  };

  return (
    <div className={props?.className}>
      <SwipeableDrawer
        anchor="right"
        classes={{ paper: "bg-neutral-alternative1-900" }}
        {...swipeableDrawerProps}
      >
        <div className="border-b border-neutral-alternative1-300 py-s">
          <IconButton
            className="justify-end text-white"
            onClick={() => setOpenDrawer(false)}
            disableRipple
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List className="pt-0">
          {menuItems.map(({ id, name, linkTo }) => {
            return (
              <ListItem
                key={id}
                divider
                className="border-neutral-alternative1-300 py-s"
              >
                <Link
                  activeClass="!text-primary-500"
                  className="body2 mx-xs font-semibold text-white"
                  to={linkTo}
                  spy
                  smooth
                  duration={600}
                >
                  {name}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>

      <IconButton
        className="justify-end text-white"
        onClick={() => setOpenDrawer(true)}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default MenuMobile;
