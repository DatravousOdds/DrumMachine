import Buttons from "./Buttons";

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

const Display = ({ handleDrumPadClick }) => {
  return (
    <>
      <div className="wrapper">
        <div className="drumpalette">
          <div className="drumpalette-container">
            {audioPath.map((pad) => (
              <div
                id={pad.id}
                className="drum-pad"
                onClick={handleDrumPadClick}
              >
                <audio src={pad.src}></audio>
                {pad.id}
              </div>
            ))}
          </div>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default Display;
