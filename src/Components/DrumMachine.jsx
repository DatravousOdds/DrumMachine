import Display from "./Display";
import Buttons from "./Buttons";

const DrumMachine = () => {
  const header = "Drum Machine App";

  
  return (
    <>
      <header>{header}</header>
      <div id="drum-machine">
        <Display />
        
      </div>
    </>
  );
};

export default DrumMachine;
