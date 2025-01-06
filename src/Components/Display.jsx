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
}) => {
  return (
    <>
      <div className="wrapper">
        <div className="drumpalette">
          <div className="drumpalette-container">
            {audioPath.map((pad) => (
              <div
                key={pad.id}
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
        <Buttons 
          volumeChange={volumeChange}
          volume={volume}
          handlePowerSwitch={handlePowerSwitch}
          handleBankSwitch={handleBankSwitch}
          powerSwitch={powerSwitch}
          bankSwitch={bankSwitch}
          />
      </div>
    </>
  );
};

export default Display;
