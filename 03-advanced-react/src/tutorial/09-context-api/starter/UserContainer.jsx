import { useContext } from "react";
import NavLinks from "./NavLinks";
import { NavbarContext } from "./Navbar";
function UserContainer() {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
export default UserContainer;
