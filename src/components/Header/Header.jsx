import React from "react";
import Container from "../container/Container";
import Logo from "../Logo.jsx";
import LogoutBtn from "./LogoutBtn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "Posts", slug: "/all-posts", active: authStatus },
    { name: "Write", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0e0e11] border-b border-[#2a2a2f]">
      <Container>
        <nav className="flex items-center py-4">
          <Link to="/" className="mr-8">
            <Logo width="72px" />
          </Link>
          <ul className="ml-auto flex items-center gap-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="text-sm font-medium text-gray-300 transition-colors hover:text-amber-400"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
