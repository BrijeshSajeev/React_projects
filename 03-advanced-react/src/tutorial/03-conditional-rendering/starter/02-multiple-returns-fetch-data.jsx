import { useEffect, useState } from "react";
const url = "https://api.github.com/users/BrijeshSajeev";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        setIsError(true);
        console.log(err.message);
      }
      setIsLoading(false);
    };
    func();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Someting worng</h2>;
  }
  const { avatar_url, name, bio, company } = user;

  return (
    <section>
      <img
        src={avatar_url}
        alt=""
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <h4>{company}</h4>
      <h5>{bio}</h5>
    </section>
  );
};
export default MultipleReturnsFetchData;
