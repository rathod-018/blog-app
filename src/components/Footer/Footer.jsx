import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-[#0e0e11] border-t border-[#2a2a2f]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="mb-4 flex items-center">
              <Logo width="90px" />
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              A modern blogging platform to share ideas, stories, and knowledge.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-300 hover:text-amber-400"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/write"
                    className="text-sm text-gray-300 hover:text-amber-400"
                  >
                    Write
                  </Link>
                </li>
               
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-gray-300 hover:text-amber-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-gray-300 hover:text-amber-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
