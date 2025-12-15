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
      onClick={logOutHandler}
      className="text-sm font-medium text-gray-400 transition-colors hover:text-amber-400 "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
