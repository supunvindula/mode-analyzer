// src/components/Hero.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Navbar from "./Navbar";
import ParticlesBg from "particles-bg";

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15, // or null,
  g: 5, // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * 2,
      particle.radius * 2
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

const Hero = () => {
  const navigateTo = useNavigate();

  const handleAnalyzeClick = () => {
    console.log("fff");
    // Navigate to the new page (replace "/new-page" with your desired route)
    navigateTo("/analyze");
  };

  return (
    <>
      <Navbar title="MODE ANALYZER" />
      <div className="h-screen flex flex-col justify-center items-center">
        {/* Your hero section content goes here */}
        <h1 className="text-4xl font-bold mb-4 text-primary">Mode Analyzer</h1>
        <div className="space-x-4">
          <Button label="ANALYZE" onClick={handleAnalyzeClick} />
          <Button label="ABOUT" variant="outlined" />
        </div>
      </div>
      <ParticlesBg type="cobweb" config={config} bg={true} />
    </>
  );
};

export default Hero;
