import Display from "./Display";

import { useState, useRef } from "react";

const DrumMachine = () => {
  const header = "Drum Machine App";
  const audioPath = [
    { id: "Q", src: "/audio/Heater-1.mp3", name: "Heater 1" },
    { id: "W", src: "/audio/Heater-2.mp3", name: "Heater 2" },
    { id: "E", src: "/audio/Heater-3.mp3", name: "Heater 3" },
    { id: "A", src: "/audio/Heater-4_1.mp3", name: "Heater 4" },
    { id: "S", src: "/audio/Cev_H2.mp3", name: "Cev H2" },
    { id: "D", src: "/audio/Dsc_Oh.mp3", name: "Dsc Oh" },
    { id: "Z", src: "/audio/Kick_n_Hat.mp3", name: "Kick n Hat" },
    { id: "X", src: "/audiopath/RP4_KICK_1.mp3", name: "Kick" },
    { id: "C", src: "/audio/Heater-6.mp3", name: "Heater 6" },
  ];
  const [drum, setDrum] = useState("");
  const [vol, setVolume] = useState(50);
  const [powerSwitch, setPowerSwitch] = useState(true);
  const [bankSwitch, setBankSwitch] = useState(false);
  const [currentSound, setCurrentSound] = useState("");

  // handles switch toggle
  const handlePowerSwitch = () => {
    setPowerSwitch(!powerSwitch);
    console.log(!powerSwitch);
    if (powerSwitch) {
      setCurrentSound(""); // Clear display when powered off
    }
  };

  // Handle bank switch toggle
  const handleBankSwitch = () => {
    if (powerSwitch) {
      setBankSwitch(!bankSwitch);
      setCurrentSound(bankSwitch ? "Heater Kit" : "Smooth Plano Kit");
    }
  };
  // handles volume change
  const handleVolumeChange = (e) => {
    if (powerSwitch) {
      const value = e.target.value;
      setVolume(value);
      setCurrentSound(`Volume: ${value}`);

      // Cler the display after 1 second
      setTimeout(() => {
        setCurrentSound("");
      }, 1000);
    }
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
      const soundName = audioPath.find((name) => name.id === audioName);
      console.log(soundName.name);
      setCurrentSound(soundName.name);
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
          currentSound={currentSound}
          bankSwitch={bankSwitch}
          powerSwitch={powerSwitch}
        />
      </div>
    </>
  );
};

export default DrumMachine;
