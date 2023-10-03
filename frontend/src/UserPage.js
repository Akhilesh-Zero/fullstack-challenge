import React, { useContext } from "react"; 
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext"; 

function UserPage() {
  const history = useHistory();
  const { logout } = useContext(UserContext); // Destructure logout from the context

  const handleLogout = () => {
    logout(); // Use the logout from context
    history.push("/"); // redirect to home after logout
  };

  return (
    <div className="user-container">
      <h2>{localStorage.getItem("username")}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
