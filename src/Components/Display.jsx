import Buttons from "./Buttons";
import { useState } from "react";
import heater1 from "/audio/Heater-1.mp3";

const Display = ({handleDrumPadClick}) => {
  

  return (
    <>
      <div className="wrapper">
        <div className="drumpalette">
          <div className="drumpalette-container">
            <div
              className="drum-pad"
              id="Heater-1"
              onClick={handleDrumPadClick}
            >
              <audio className="clip" src={heater1} id="Q"></audio>Q
            </div>
            <div className="drum-pad">
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src="/audio/Heater-2.mp3"
                id="W"
              ></audio>
              W
            </div>
            <div className="drum-pad">
              E
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src="/audio/Heater-3.mp3"
                id="E"
              ></audio>
            </div>
            <div className="drum-pad">
              A
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src=""
                id="A"
              ></audio>
            </div>
            <div className="drum-pad">
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src=""
                id="S"
              ></audio>
              S
            </div>
            <div className="drum-pad">
              D{" "}
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src=""
                id="D"
              ></audio>
            </div>
            <div className="drum-pad">
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src=""
                id="Z"
              ></audio>
              Z
            </div>
            <div className="drum-pad">
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src=""
                id="X"
              ></audio>
              X
            </div>
            <div className="drum-pad">
              <audio
                className="clip"
                onClick={handleDrumPadClick}
                src=""
                id="C"
              ></audio>
              C
            </div>
          </div>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default Display;
