import { useRef } from "react";

const Buttons = ({ volumeChange, volume, handleSwitchChange }) => {
 
  
  const smallBtnStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0.25rem",
  };

  return (
    <>
      <div className="btns-container">
        <div style={smallBtnStyles}>
          <div className="control" onClick={handleSwitchChange}>
            <div style={{ fontWeight: 600 }}>Power</div>
            <div  className="select">
              <div className="inner"></div>
            </div>
          </div>

          <div className="output">
            <div>{volume}</div>
          </div>
          <div className="volume-container">
            <input
              type="range"
              id="vol"
              min={0}
              max={100}
              value={volume}
              onChange={volumeChange}
            />
          </div>

          <div className="control" onClick={handleSwitchChange}>
            <div style={{ fontWeight: 600 }}>Volume</div>
            <div  className="select">
              <div className="inner"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
