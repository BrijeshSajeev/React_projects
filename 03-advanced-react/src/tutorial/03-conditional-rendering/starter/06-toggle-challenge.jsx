import React from "react";
const ToggleChallenge = () => {
  const [state, setState] = React.useState(true);
  const handler = () => {
    setState(state === true ? false : true);
  };
  return (
    <div>
      <button className="btn" onClick={handler}>
        Togle
      </button>
      {state === false ? (
        <h5 className="alert alert-danger">Opps</h5>
      ) : (
        <Comp />
      )}
    </div>
  );
};

const Comp = () => {
  return (
    <div>
      <h2 className="alert alert-good">Hello World</h2>
    </div>
  );
};

export default ToggleChallenge;
