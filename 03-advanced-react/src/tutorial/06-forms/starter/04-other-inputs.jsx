import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  // For Check Box
  const [check, setCheck] = useState(false);
  const handleCheck = (e) => {
    console.log(e.target.checked);
    setCheck(e.target.checked);
  };
  // For Select
  const [framework, setFramework] = useState("react");
  const handleSelect = (e) => {
    // console.log(e.target.value);
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input type="checkbox" checked={check} onChange={handleCheck} />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="framework" onChange={handleSelect}>
            {frameworks.map((framework) => {
              return (
                <option value={framework} key={framework}>
                  {framework}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
