import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Container,
    Link,
  } from "@mui/material";
  
  const Footer = () => {
    return (
      <Box
        sx={{
          width: "80%",
          height: "auto",
          backgroundColor: "#020E3F",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: 3,
          color: "white",
          margin: "auto",
          mt: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Menu
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                Home
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                About Us
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                Products
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Contact Us
              </Link>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                Blog
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                FAQ
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Support
              </Link>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Customer Area
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                Login
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                Register
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Order Tracking
              </Link>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Company Area
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                About Us
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                mb={1}
              >
                Careers
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Press
              </Link>
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"} xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" mb={2}>
                Subscribe to our newsletter to get the latest updates.
              </Typography>
              <Box display="flex">
                <TextField
                  variant="outlined"
                  size="medium"
                  placeholder="Your email"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px 0 0 4px",
                    flex: 1,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ borderRadius: "0 4px 4px 0", backgroundColor: "#FF9800" }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  