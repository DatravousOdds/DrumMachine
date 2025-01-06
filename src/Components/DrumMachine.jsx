import Display from "./Display";

import { useState, useRef } from "react";

const DrumMachine = () => {
  const header = "Drum Machine App";
  const audioPath = [
    { id: "Q", src: "/audio/Heater-1.mp3" },
    { id: "W", src: "/audio/Heater-2.mp3" },
    { id: "E", src: "/audio/Heater-3.mp3" },
    { id: "A", src: "/audio/Heater-4_1.mp3" },
    { id: "S", src: "/audio/Cev_H2.mp3" },
    { id: "D", src: "/audio/Dsc_Oh.mp3" },
    { id: "Z", src: "/audio/Kick_n_Hat.mp3" },
    { id: "X", src: "/audiopath/RP4_KICK_1.mp3" },
    { id: "C", src: "/audio/Heater-6.mp3" },
  ];
  const [drum, setDrum] = useState("");
  const [vol, setVolume] = useState();
  const [powerSwitch, setPowerSwitch] = useState(false);
  const [bankSwitch, setBankSwitch] = useState(false);

  // handles

  // handles switch toggle
  const handlePowerSwitch = () => {
    setPowerSwitch(!powerSwitch);
  };

  // Handle bank switch toggle
  const handleBankSwitch = () => {
    setBankSwitch(!bankSwitch);
  };
  // handles volume change
  const handleVolumeChange = (e) => {
    const value = e.target.value;
    setVolume(value);
  };

  // handles drum pad interactions
  const handleDrumPadClick = (event) => {
    const drumPad = event.currentTarget;
    console.log(drumPad);
    const audio = drumPad.querySelector("audio");
    const audioName = drumPad.id;
    if (audio) {
      audio.play();
    }

    if (audioName) {
      console.log(audioName);
      setDrum(audioName);
    }
  };

  return (
    <>
      <header>{header}</header>
      <div id="drum-machine">
        <Display
          handleDrumPadClick={handleDrumPadClick}
          audioPath={audioPath}
          volumeChange={handleVolumeChange}
          volume={vol}
          handlePowerSwitch={handlePowerSwitch}
          handleBankSwitch={handleBankSwitch}
        />
      </div>
    </>
  );
};

export default DrumMachine;
