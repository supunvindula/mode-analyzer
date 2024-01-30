import React, { useState, useEffect } from "react";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { PlayArrow, Pause, Stop } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const useAudioPermission = () => {
  const [audioPermission, setAudioPermission] = useState(null);

  const requestAudioPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioPermission(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error requesting audio permission:", error);
      setAudioPermission(false);
    }
  };

  return { audioPermission, requestAudioPermission };
};

const ModRecorder = ({ isRecording }) => {
  const [loading, setLoading] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [secondClick, setSecondClick] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [record, setRecord] = isRecording;
  const { audioPermission, requestAudioPermission } = useAudioPermission();
  const navigateTo = useNavigate();

  const handleClick = async () => {
    setLoading(true);

    // Request audio permission
    await requestAudioPermission();

    // Continue if audio permission is granted
    if (audioPermission) {
      // Simulate a timer (you can replace this with your actual logic)
      setTimeout(() => {
        setLoading(false);
        setRecord(true);
        setFirstClick(true);
      }, 2000);
    } else {
      setLoading(false);
      console.log("Audio permission denied.");
    }
  };

  const handleSecondClick = () => {
    setSecondClick(true);
    setRecord(false);

    // Simulate processing time (you can replace this with your actual logic)
    setTimeout(() => {
      setRedirect(true);
    }, 2000);
  };

  // Redirect to a new page on the third click
  useEffect(() => {
    if (redirect) {
      navigateTo("/results"); // Replace with your desired route
    }
  }, [redirect, navigateTo]);

  // Reset the states on component unmount (cleanup)
  useEffect(() => {
    return () => {
      setLoading(false);
      setFirstClick(false);
      setSecondClick(false);
      setRedirect(false);
    };
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={firstClick ? handleSecondClick : handleClick}
        disabled={secondClick || redirect}
        endIcon={
          loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : secondClick ? (
            <Stop />
          ) : (
            <IconButton color="inherit" edge="end" aria-label="play">
              {firstClick ? <Pause /> : <PlayArrow />}
            </IconButton>
          )
        }
      >
        {redirect
          ? "Redirecting..."
          : secondClick
          ? "Processing..."
          : firstClick
          ? "Recording..."
          : "Record Your Voice"}
      </Button>
    </>
  );
};

export default ModRecorder;
