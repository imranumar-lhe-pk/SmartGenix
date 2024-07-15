import { Box, Typography } from "@mui/material";
import React from "react";

function Information() {
  return (
    <Box>
      <Box textAlign="center" mt={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Upgrade Your Auto Shop.
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Who Says No to SmartGenix?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Box
          component="img"
          src="/Frame 211.png"
          alt="Image 1"
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
            mb: 2,
          }}
        />
        <Box
          component="img"
          src="/Frame 212.png"
          alt="Image 2"
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
            mb: 2,
          }}
        />
        <Box
          component="img"
          src="/Frame 213.png"
          alt="Image 3"
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
          }}
        />
      </Box>
    </Box>
  );
}

export default Information;
