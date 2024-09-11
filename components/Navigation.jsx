const Navigation = () => {
  return (
    <>
      <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-800">
        <div className="max-w-screen flex items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              BU OPEN
            </span>
          </a>

          <div className="hidden w-full md:flex md:w-auto ml-auto">
            <ul className="flex space-x-8 p-4 font-medium border border-gray-800 rounded-lg bg-black md:space-x-8 md:mt-0 md:border-0 md:bg-black">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-gray-800 rounded md:bg-transparent md:text-white md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
