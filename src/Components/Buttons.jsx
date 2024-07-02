const Buttons = ({volumeChange, volume }) => {
  

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
              <div className="inner"></div>
            </div>
          </div>

          <div className="output">
            <div>
              Volume: {volume}
            </div>
          </div>
          <div className="volume-container">
            <input type="range" id="vol" min={1} max={100} value={1} onChange={volumeChange}/>
          </div>

          <div className="control">
            <div style={{ fontWeight: 600 }}>Volume</div>
            <div className="select">
              <div className="inner"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
