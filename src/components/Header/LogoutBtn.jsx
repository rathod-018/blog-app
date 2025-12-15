import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/auth.js";
import { logOut } from "../../store/authSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logOut());
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logOutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
