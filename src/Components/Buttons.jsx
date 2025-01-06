import { useRef } from "react";


const Buttons = ({
  volumeChange,
  volume,
  handlePowerSwitch,
  handleBankSwitch,
  powerSwitch,
  bankSwitch,
}) => {
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
          <div className="control">
            <div style={{ fontWeight: 600 }}>Power</div>
            <div onClick={handlePowerSwitch} className="select">
              <div
                className={`inner power ${powerSwitch ? "active" : ''}`}
              ></div>
              <div className="inner-right"></div>
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

          <div className="control">
            <div style={{ fontWeight: 600 }}>Bank</div>
            <div onClick={handleBankSwitch} className="select">
              <div className={`inner bank ${bankSwitch ? 'active' : ''}`}></div>
              <div className="inner-right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
