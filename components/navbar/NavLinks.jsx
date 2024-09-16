import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <li>
        <a
          href="/register"
          className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent text-2xl"
          aria-current="page"
        >
          Register
        </a>
      </li>
      <li>
        <a
          href="/schedule"
          className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent text-2xl"
        >
          Schedule
        </a>
      </li>
      <li>
        <Link
          href="/faqs"
          className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent text-2xl"
        >
          FAQ
        </Link>
      </li>
      <li>
        <a
          href="/contact"
          className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent text-2xl"
        >
          Contact
        </a>
      </li>
    </>
  );
};

export default NavLinks;
