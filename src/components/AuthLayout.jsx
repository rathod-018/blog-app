import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
    }

    if (!authentication && authStatus) {
      navigate("/");
    }

    setChecking(false);
  }, [authStatus, authentication, navigate]);

  if (checking) return null;

  return <>{children}</>;
}

export default Protected;
