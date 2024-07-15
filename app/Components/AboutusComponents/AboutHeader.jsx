"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link"; // For Next.js navigation
import { Box } from "@mui/material";

const AboutHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#020E3F' }} elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "30px", marginLeft: "60px" }}
          />
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            lineHeight: "10px",
            color: "white",
          }}
        >
          {["Home", "About us", "Product", "Pricing", "Contact us"].map((text, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              href={`/${text.toLowerCase().replace(/ /g, "-")}`}
              sx={{
                display: { xs: "none", md: "flex" },
                fontSize: { xs: "inherit", sm: "inherit" },
                minWidth: "auto",
                margin: "0 10px",
                color: "white",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            color="inherit"
            sx={{
              border: "2px solid blue",
              marginLeft: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
              mx: 1,
              borderRadius: "10px",
            }}
          >
            Login as a mechanic
          </Button>
          <Button
            color="inherit"
            sx={{
              border: "2px solid blue",
              marginLeft: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
              mx: 1,
              borderRadius: "10px",
            }}
          >
            Login as a user
          </Button>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{
            display: { xs: "flex", md: "none" },
            marginBottom: 1,
            color: 'white'
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: '250px', // Adjust the width as needed
              borderRadius: "10px",
            },
          }}
        >
          <List sx={{ width: '100%', padding: '10px' }} onClick={toggleDrawer}>
            {["Home", "About us", "Product", "Pricing", "Contact us"].map((text, index) => (
              <ListItem button key={index} component={Link} href={`/${text.toLowerCase().replace(/ /g, "-")}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ padding: "10px" }}>
            <Button
              sx={{
                border: "1px solid blue",
                marginBottom: "10px",
                width: "100%",
                borderRadius: "10px",
                mx: 1,
              }}
            >
              Login as a mechanic
            </Button>
            <Button
              sx={{
                border: "1px solid blue",
                width: "100%",
                borderRadius: "10px",
                mx: 1,
              }}
            >
              Login as a user
            </Button>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default AboutHeader;
