import { useRef } from "react";

const Buttons = ({
  volumeChange,
  volume,
  handlePowerSwitch,
  handleBankSwitch,
  powerSwitch,
  bankSwitch,
  currentSound,
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
            <div className="select">
              <div
                onClick={handlePowerSwitch}
                className={`inner power ${powerSwitch ? "active" : ""}`}
              ></div>
            </div>
          </div>

          <div className="output">
            <div>{powerSwitch ? currentSound : ""}</div>
          </div>
          <div className="volume-container">
            <input
              type="range"
              id="vol"
              min={0}
              max={100}
              value={volume}
              onChange={volumeChange}
              disabled={!powerSwitch}
            />
          </div>

          <div className="control">
            <div style={{ fontWeight: 600 }}>Bank</div>
            <div className="select">
              <div
                onClick={handleBankSwitch}
                className={`inner bank ${bankSwitch ? "active" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
