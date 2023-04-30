import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUser = [...user, newUser];
    setData(updatedUser);
    // console.log(updatedUser);
    document.querySelector(".form").reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
            <input
              type="text"
              className="form-input"
              id="name"
              name={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {user.map((ele) => {
        return <h4 key={ele.id}>{ele.name}</h4>;
      })}
    </div>
  );
};
export default UserChallenge;
