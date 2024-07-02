import Buttons from "./Buttons";

const Display = ({
  handleDrumPadClick,
  audioPath,
  volumeChange,
  volume,
  handleSwitchChange,
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
        <Buttons volumeChange={volumeChange} volume={volume} handleSwitchChange={handleSwitchChange} />
      </div>
    </>
  );
};

export default Display;
