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
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

const NavBaar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loginType, setLoginType] = useState(""); // "mechanic" or "user"
  

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOpenModal = (type) => {
    setLoginType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setLoginType(""); // Reset login type
  };

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data, [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationError = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified email regex

    if(!data.email.trim()){
      validationError.email = 'please enter email'
    } else if(!regex.test(data.email)) {
      validationError.email = 'invalid email'
    }

    if(data.password.trim()){
      validationError.password ='please enter password'
    }

    setErrors(validationError)
    setData({email: '', password: ''})
    setModalOpen(false);
    setLoginType(""); // Reset login type
  }


  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography variant="h6"  component="div" sx={{ flexGrow: 0 }}>
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
            onClick={() => handleOpenModal("mechanic")}
            sx={{
              border: "2px solid blue",
              marginLeft: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
            }}
          >
            Login as a mechanic
          </Button>
          <Button
            color="inherit"
            onClick={() => handleOpenModal("user")}
            sx={{
              border: "2px solid blue",
              marginLeft: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
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
              width: '250px',
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
            <Button onClick={() => handleOpenModal("mechanic")} sx={{ border: "1px solid blue", marginBottom: "10px", width: "100%" }}>
              Login as a mechanic
            </Button>
            <Button onClick={() => handleOpenModal("user")} sx={{ border: "1px solid blue", width: "100%" }}>
              Login as a user
            </Button>
          </Box>
        </Drawer>
        
        <Dialog open={modalOpen} onClose={handleCloseModal}>
          <DialogTitle>{loginType === "mechanic" ? "Login as Mechanic" : "Login as User"}</DialogTitle>
          <DialogContent>
            {/* Add your login form here */}
            <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
     
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
          href="/steps"
        >
          Login
        </Button>
      </form>
    </Box>
            <p>This is the login form for {loginType === "mechanic" ? "mechanics" : "users"}.</p>
            {/* Example input fields could go here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
         
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default NavBaar;
