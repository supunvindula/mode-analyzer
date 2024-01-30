import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const Recorder = () => {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#004c64",
        borderRadius: "10px",
        maxWidth: "600px",
        minWidth: "600px",
        margin: "auto",
      }}
    >
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        onNotAllowedOrFound={(err) => console.table(err)}
        downloadOnSavePress={true}
        downloadFileExtension="webm"
        mediaRecorderOptions={{
          audioBitsPerSecond: 128000,
        }}
      />
      <br />
    </div>
  );
};

export default Recorder;
