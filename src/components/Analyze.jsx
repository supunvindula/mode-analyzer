import React, { useState } from "react";
import Navbar from "./Navbar";
import Recorder from "./Recorder";
import { Grid, Typography, Paper } from "@mui/material";
import ModRecorder from "./ModRecorder";
import ParticlesBg from "particles-bg";

const Analyze = () => {
  const recording = useState(false);
  return (
    <>
      <Navbar title="Analyzer" />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="h-screen"
      >
        <Grid item>
          {/* <Recorder /> */}
          <ModRecorder isRecording={recording} />
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{ padding: 2, marginTop: 4, textAlign: "center" }}
          >
            <Typography variant="body2">
              Processing time may vary due to the traffic on network!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {recording[0] && <ParticlesBg type="lines" bg={true} />}
    </>
  );
};

export default Analyze;
