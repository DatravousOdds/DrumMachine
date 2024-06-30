import Buttons from "./Buttons";

import heater1 from "/audio/Heater-1.mp3";
import heater2 from "/audio/Heater-2.mp3";
import heater3 from "/audio/Heater-3.mp3";
import heater4 from "/audio/Heater-4_1.mp3";
import cev_h2 from "/audio/Cev-H2.mp3";
import dscOh from "/audio/Dsc_Oh.mp3";
import kick from "/audio/Kick_n_Hat.mp3";
import rp4Kick from "/audiopath/RP4_KICK_1.mp3
import heater6 from "/audio/Heater-6.mp3";
const audioPath = [
  { id: "Q", src: heater1 },
  { id: "W", src: heater2 },
  { id: "E", src: heater3 },
  { id: "A", src: heater4 },
  {id: "S", src: cev_h2},
  {id: "D", src: dscOh},
  {id: "Z", src: kick},
  {id: "X", src: rp4Kick},
  {id: "C", src: heater6}
];

const Display = ({ handleDrumPadClick }) => {
  return (
    <>
      <div className="wrapper">
        <div className="drumpalette">
          <div className="drumpalette-container">
            {audioPath.map((pad) => (
          <div id={pad.id} className="drum-pad" onClick={handleDrumPadClick}>
            <audio src={pad.src}></audio>{pad.id}</div>
            ))}
            
            
            
            
            
            
            
            
          </div>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default Display;
