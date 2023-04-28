const ControlledInputs = () => {
  return (
    <form action="" className="form">
      <h4>Form</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" className="form-input" />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" id="email" className="form-input" />
      </div>
      <button className="btn btn-block">submit</button>
    </form>
  );
};
export default ControlledInputs;
