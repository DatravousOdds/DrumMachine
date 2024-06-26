import Buttons from './Buttons';

const Display = () => {
  return (
    <>
      <div className="wrapper">
        
        <div className="drumpalette">
          <div className="drumpalette-container">
            <div className="drum-pad">
              <audio></audio>Q
            </div>
            <div className="drum-pad">
              <audio></audio>W
            </div>
            <div className="drum-pad">
              <audio></audio>E
            </div>
            <div className="drum-pad">
              <audio></audio>A
            </div>
            <div className="drum-pad">
              <audio></audio>S
            </div>
            <div className="drum-pad">
              <audio></audio>D
            </div>
            <div className="drum-pad">
              <audio></audio>Z
            </div>
            <div className="drum-pad">
              <audio></audio>X
            </div>
            <div className="drum-pad">
              <audio></audio>C
            </div>
          </div>
          
        </div>
        <Buttons/>
      </div>
    </>
  );
};

export default Display;
