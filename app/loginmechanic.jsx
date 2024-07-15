"use client";
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

const LoginMechanic = () => {
  const router = useRouter();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified email regex

    if (!data.email.trim()) {
      validationError.email = 'Please enter email';
    } else if (!regex.test(data.email)) {
      validationError.email = 'Invalid email';
    }

    if (!data.password.trim()) {
      validationError.password = 'Please enter password';
    }

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
    } else {
      setErrors({});
      console.log("Mechanic login:", data);
      setData({ email: '', password: '' });

      // Delay the redirection slightly to ensure state update
      setTimeout(() => {
        router.replace("/home");
      }, 100);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Mechanic Login
      </Typography>
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
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginMechanic;
