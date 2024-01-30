import React, { useState, useEffect } from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";
import Navbar from "./Navbar";

const Results = () => {
  const mentalStates = [
    { state: "happy", image: "/images/happy.png" },
    { state: "calm", image: "/images/calm.png" },
    { state: "neutral", image: "/images/neutral.png" },
    { state: "surprise", image: "/images/surprised.png" },
  ];

  const getRandomState = () => {
    const randomIndex = Math.floor(Math.random() * mentalStates.length);
    return mentalStates[randomIndex];
  };

  const randomState = getRandomState();

  return (
    <>
      <Navbar title="Result" />
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h5" gutterBottom>
                Student is in {randomState.state} mode with positive mental well
                being.
              </Typography>
              <img
                src={randomState.image}
                alt={randomState.state}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "50px solid #fff",
                  borderRadius: "50%",
                  margin: "10px",
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Results;
