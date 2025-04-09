import Buttons from "./Buttons";

const Display = ({
  handleDrumPadClick,
  audioPath,
  volumeChange,
  volume,
  handlePowerSwitch,
  handleBankSwitch,
  powerSwitch,
  bankSwitch,
  currentSound,
}) => {
  return (
    <>
      <div id="display" className="wrapper">
        <div className="drumpalette">
          <div id="drum-pads" className="drumpalette-container">
            {audioPath.map((sound) => (
              <div
                key={sound.id}
                id={sound.id}
                className="drum-pad"
                onClick={handleDrumPadClick}
              >
                {sound.id}
                <audio className="clip" src={sound.src} id={sound.id}></audio>
              </div>
            ))}
          </div>
        </div>
        <Buttons
          volumeChange={volumeChange}
          volume={volume}
          handlePowerSwitch={handlePowerSwitch}
          handleBankSwitch={handleBankSwitch}
          powerSwitch={powerSwitch}
          bankSwitch={bankSwitch}
          currentSound={currentSound}
        />
      </div>
    </>
  );
};

export default Display;
