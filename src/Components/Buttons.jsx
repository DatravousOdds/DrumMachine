const Buttons = () => {
  const btnStyles = {
    backgroundColor: "white",
    color: "black",
    height: 40,
    padding: "",
    margin: "1rem",
    border: "2px solid black",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
  };

  const smallBtnStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0.25rem",
    border: "2px solid red",
  };

  const switchBtn = {
    display: "flex",
  };

  const swStyles = {
    background: "red",
    width: "20rem",
    
  }
  return (
    <>
      <div className="btns-container">
        <div style={smallBtnStyles}>
          <div style={btnStyles}>
            <div style={switchBtn}>
              <div style={swStyles}></div>
              <div></div>
            </div>
          </div>
          <div style={btnStyles}>Button 2</div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
