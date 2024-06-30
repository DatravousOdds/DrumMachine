import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";

const DrumMachine = () => {
  const header = "Drum Machine App";
  const [drum, setDrum] = useState("");

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
        <Display handleDrumPadClick={handleDrumPadClick}/>
      </div>
    </>
  );
};

export default DrumMachine;
