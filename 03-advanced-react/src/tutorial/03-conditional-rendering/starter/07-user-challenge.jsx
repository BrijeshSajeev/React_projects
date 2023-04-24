import React from "react";

const UserChallenge = () => {
  const [user, setUser] = React.useState(null);
  const login = () => {
    setUser({ name: "Brijesh" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello There, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
/*

- create state value
  - user - default value null
- create two functions
  - login - set's user equal to object with name property
  - logout - set's user equal to null
- in jsx use ? to display two different setups

- h4 with "hello there, user name" and logout button
- h4 with "please login " and login button

*/

export default UserChallenge;
