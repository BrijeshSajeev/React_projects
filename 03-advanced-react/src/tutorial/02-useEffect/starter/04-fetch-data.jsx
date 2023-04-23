import { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const func = async () => {
    const user = await fetch(url);
    const data = await user.json();
    setUsers(data);
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <section>
      <h3>GitHub users</h3>
      <ul className="users">
        {users.map((user) => {
          const { login, avatar_url, id, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
