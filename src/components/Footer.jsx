import { Link } from 'react-router-dom'; // Updated import for react-router-dom v6

export const Footer = () => {
  return (
    <div className="w-[95%] lg:w-[70%] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold mb-4 sm:mb-0">
        <img
          src="https://framerusercontent.com/images/0sQkZs5gqXS5nmVpJvWHpP2MYII.svg"
          alt="Logo"
          className="h-10"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex flex-col text-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-gray-500 text-sm font-medium leading-5 tracking-[0px]">
        <li>
          <Link
            to="/compatible-devices"
            className="hover:text-black transition-colors ease-in"
          >
            Compatible Devices
          </Link>
        </li>
        <li>
          <Link
            to="/data-plans"
            className="hover:text-black transition-colors ease-in"
          >
            Data Plans
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="hover:text-black transition-colors ease-in"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-black transition-colors ease-in"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};
