const Buttons = () => {
  const btnStyles = {
    backgroundColor: "black",
    color: "black",
    height: 20,
    padding: "",
    margin: "1rem",
    border: "2px solid black",
    display: "flex",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  };

  const smallBtnStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0.25rem",
    
  };

  const switchBtn = {
    display: "flex",
  };

  const swStyles = {
    background: "red",
    width: "20rem",
  };
  return (
    <>
      <div className="btns-container">
        <div style={smallBtnStyles}>
          
          <div className="control">
            <div style={{fontWeight:600}}>Power</div>
            <div className="select">
              <div className="inner"></div>
            </div>
          </div>
          
          <div className="output">
            <div>
              <p>Testing</p>
            </div>
          </div>
          <div className="volume-container">
            <div className="volume-inner"></div>
          </div>
          
          <div className="control">
            <div style={{fontWeight:600}}>Volume</div>
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
