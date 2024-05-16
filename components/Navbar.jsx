import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-white text-2xl font-bold">
              Stock
            </a>
          </div>
          <div>
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/marketnews" className="text-white ml-4">
             Market News
            </Link>
            <Link href="#" className="text-white ml-4">
              Companies
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
