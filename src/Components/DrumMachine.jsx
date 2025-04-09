import Display from "./Display";

import { useState, useRef, useEffect } from "react";

const DrumMachine = () => {
  const header = "Drum Machine App";
  let audioPath = [
    { id: "Q", src: "/audio/Heater-1.mp3", name: "Chord 1" },
    { id: "W", src: "/audio/Heater-2.mp3", name: "Chord 2" },
    { id: "E", src: "/audio/Heater-3.mp3", name: "Chord 3" },
    { id: "A", src: "/audio/Heater-4_1.mp3", name: "Shaker" },
    { id: "S", src: "/audio/Cev_H2.mp3", name: "Open HH" },
    { id: "D", src: "/audio/Dsc_Oh.mp3", name: "Closed HH" },
    { id: "Z", src: "/audio/Kick_n_Hat.mp3", name: "Punchy Kick" },
    { id: "X", src: "/audio/RP4_KICK_1.mp3", name: "Side Stick" },
    { id: "C", src: "/audio/Heater-6.mp3", name: "Snare" },
  ];
  const [drum, setDrum] = useState("");
  const [vol, setVolume] = useState(50);
  const [powerSwitch, setPowerSwitch] = useState(true);
  const [bankSwitch, setBankSwitch] = useState(false);
  const [currentSound, setCurrentSound] = useState("");

  // Add useEffect to handle key presses
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!powerSwitch) return;
      const key = event.key.toUpperCase();
      console.log("Key pressed:", key);
      const soundInfo = audioPath.find((sound) => sound.id === key);
      console.log("Sound info:", soundInfo);
      if (soundInfo) {
        const drumPad = document.getElementById(key);
        if (drumPad) {
          const audio = drumPad.querySelector("audio");
          if (audio) {
            audio.volume = vol / 100;
            audio.currentTime = 0;
            audio.play();
            setCurrentSound(soundInfo.name);
            setTimeout(() => {
              setCurrentSound("");
            }, 1000);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [powerSwitch, vol, audioPath]);

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
    if (!powerSwitch) return;
    const drumPad = event.currentTarget;

    const audio = drumPad.querySelector("audio");

    const audioName = drumPad.id; // This is the letter (Q, W, E, etc.)

    audio.volume = vol / 100; // Set the volume based on the slider value

    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();

    const soundInfo = audioPath.find((sound) => sound.id === audioName);
    setCurrentSound(soundInfo.name);

    setTimeout(() => {
      setCurrentSound("");
    }, 1000);
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
