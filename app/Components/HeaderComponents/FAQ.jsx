"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const questions = {
    general: [
      {
        question: "What is Blissfull Bytes?",
        answer: "Blissfull Bytes is a cake-related website.",
      },
      {
        question: "How can I contact you?",
        answer: "You can contact us via email or phone.",
      },
      {
        question: "Where are you located?",
        answer: "We are located in New York City.",
      },
    ],
    support: [
      {
        question: "How do I get support?",
        answer: "You can get support by emailing us.",
      },
      {
        question: "What is your support hours?",
        answer: "Our support hours are 9 AM to 5 PM.",
      },
      {
        question: "Can I get help with my order?",
        answer: "Yes, you can get help with your order.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer: "You can create an account by signing up on our website.",
      },
      {
        question: "How do I reset my password?",
        answer: 'You can reset your password by clicking on "Forgot Password".',
      },
      {
        question: "How do I delete my account?",
        answer: "You can delete your account by contacting support.",
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          marginBottom: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: { sm: 3 },
            marginBottom: { xs: 3, sm: 0 },
            width: { xs: "100%", sm: "20%" },
          }}
        >
          <Button
            variant={selectedCategory === "general" ? "contained" : "outlined"}
            onClick={() => handleCategoryChange("general")}
            sx={{ marginBottom: 1 }}
          >
            General
          </Button>
          <Button
            variant={selectedCategory === "support" ? "contained" : "outlined"}
            onClick={() => handleCategoryChange("support")}
            sx={{ marginBottom: 1 }}
          >
            Support
          </Button>
          <Button
            variant={selectedCategory === "account" ? "contained" : "outlined"}
            onClick={() => handleCategoryChange("account")}
          >
            Account
          </Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Grid container spacing={3}>
            {questions[selectedCategory].map((item, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ;
