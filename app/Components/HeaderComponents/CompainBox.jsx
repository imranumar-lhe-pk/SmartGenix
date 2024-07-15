import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

function CompainBox() {
  return (
    <Box mt={{ sm: 18, md: 10, xs: 9 }} px={{ xs: 0, sm: 4, md:0 }}>
      <Box
        width="100%"
        maxWidth="70vw"
        height={185}
        mx="auto"
        bgcolor={"#020E3F"}
        sx={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography color={"white"} textAlign={"center"}>
          Companies that trust us
        </Typography>
        <Box component={"img"} src={"/Frame 16.png"} pt={2} width={150} />
        <Box
          component={"img"}
          src={"/Frame 14.png"}
          sx={{ visibility: { xs: "hidden", sm: "visible" } }}
          p={1}
          width="100%"
          maxWidth={{ md: 800, sm: 450 }}
        />
      </Box>

      <Box
        sx={{
          border: "2px solid gray",
          width: "100%",
          maxWidth: "70vw",
          height: "42vw",
          mx: "auto",
          mt: "10vw",
        //   visibility: { xs: "hidden", md: "visible" },
          display: {md:"flex", xs:'none'},
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography textAlign={"center"} mt={-14}>
          Get Smartgenix on IOS and Android
        </Typography>
        <Box component={"img"} pt={2} width={100} src={"/Frame 131.png"} />

        <Box mt={5} sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Box component={"img"} width={100} src={"/Frame 215.png"} />
            <Box mt={2}>
              <Box component={"img"} width={40} src={"/Frame (1).png"} />
              <Box mt={2}>
                <Box component={"img"} width={100} src={"/Frame 217.png"} />
              </Box>
            </Box>
          </Box>
          <Box mt={0} ml={4}>
            <Box component={"img"} pt={3} width={200} src={"/mask.png"} />
            <Box mt={-37} ml={24}>
              <Box component={"img"} width={30} src={"/Frame.png"} />
              <Box mt={5}>
                <Box component={"img"} width={150} src={"/Frame 216.png"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          mt: { sm: "0%", md: "0" },
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Features For Every Shop Function
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            maxWidth: 500,
            margin: "1rem 0",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          Our all-in-one auto repair shop management software lets you maximize
          efficiency at your shop and grow your business without having to sign
          into multiple tools.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button endIcon={<ArrowForward />} variant="contained">
            See all features
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CompainBox;
