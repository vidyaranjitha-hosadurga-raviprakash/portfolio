import React, { useState, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Grid, Button, Drawer, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sticky from "react-stickynode";

import { ThemeToggler } from "components";
import { useDarkMode } from "contexts";
import { LIGHT_MODE, navbarItems } from "data/Constants";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width:480px)");
  const { mode } = useDarkMode();

  const navBarBgColor = useMemo(
    () =>
      mode === LIGHT_MODE
        ? "var(--primary-color-light)"
        : "var(--secondary-color)",
    [mode]
  );

  const displayNavbarItems = () => {
    return (
      <>
        {navbarItems.map((item, index) => (
          <Grid key={index} item>
            <Button key={index} mb={2} color="primary">
              <ScrollLink to={item} spy smooth offset={-100} duration={500}>
                {item}
              </ScrollLink>
            </Button>
          </Grid>
        ))}
        <Grid item sx={{ position: "relative", top: "-0.5rem" }}>
          <ThemeToggler />
        </Grid>
      </>
    );
  };

  const sideDrawer = () => {
    return (
      <Drawer
        open={drawerOpen}
        anchor={"right"}
        onClose={() => setDrawerOpen(false)}
      >
        <Grid
          container
          item
          direction="column"
          spacing={5}
          sx={{ width: "15rem", marginTop: "0.2rem" }}
        >
          <Grid item>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ float: "right", padding: "0rem 2rem" }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid item>
            <Grid
              container
              item
              direction="column"
              spacing={4}
              alignItems="center"
            >
              {displayNavbarItems()}
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    );
  };

  return (
    <Sticky enabled innerZ={99}>
      <Box
        component={"header"}
        style={{
          padding: "1rem 2rem",
          background: navBarBgColor,
        }}
      >
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid item>
            <Grid container item spacing={2}>
              {isMobileScreen ? (
                <Grid item mt={0.5}>
                  <IconButton onClick={() => setDrawerOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                  {sideDrawer()}
                </Grid>
              ) : (
                <>{displayNavbarItems()}</>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Sticky>
  );
};
