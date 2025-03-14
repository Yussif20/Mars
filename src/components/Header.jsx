import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import { Button } from './Button';
import LanguageSwitcher from './LanguageSwitcher';

import { useTranslation } from 'react-i18next';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[95%] lg:w-[70%] mx-auto px-4 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold z-20 flex-shrink-0">
        <img
          src="https://framerusercontent.com/images/0sQkZs5gqXS5nmVpJvWHpP2MYII.svg"
          alt="Logo"
          className="h-10"
        />
      </NavLink>
      <LanguageSwitcher />
      {/* Burger Menu (visible below 800px) */}
      <button
        className="md:hidden z-20 focus:outline-none flex-shrink-0 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-0 top-2.5' : 'top-0 translate-y-0'
            }`}
          ></span>
          <span
            className={`absolute w-full h-0.5 bg-black transition-all duration-300 ease-in-out top-2.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`absolute w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen
                ? '-rotate-45 translate-y-0 top-2.5'
                : 'top-5 translate-y-0'
            }`}
          ></span>
        </div>
      </button>

      {/* Desktop Navigation (hidden below 800px unless menu is open) */}
      <div className="hidden md:flex md:flex-row md:items-center md:static md:bg-transparent md:shadow-none md:py-0 md:flex-1 md:justify-center">
        <ul className="flex flex-col md:flex-row md:space-x-6 text-gray-500 text-sm font-medium leading-5 tracking-[0px] space-y-4 md:space-y-0 text-center">
          <li>
            <NavLink
              to="/compatible-devices"
              className={({ isActive }) =>
                `transition-colors ease-in ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.compatibleDevices')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data-plans"
              className={({ isActive }) =>
                `transition-colors ease-in ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.dataPlans')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `transition-colors ease-in ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.aboutUs')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ease-in ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.contactUs')}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block md:flex-shrink-0">
        <Button animated size="md" onClick={() => setIsOpen(false)}>
          <p className="flex items-center justify-center gap-2">
            {t('buttons.getTheApp')}
            <span className="text-black inline-flex items-center justify-center w-6 h-6 bg-white border border-black rounded-full">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </p>
        </Button>
      </div>

      {/* Mobile Menu (only visible when isOpen is true) */}
      {isOpen && (
        <div className="z-50 flex flex-col items-center absolute top-16 left-0 right-0 w-full bg-white shadow-md py-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-gray-500 text-sm font-medium leading-5 tracking-[0px] text-center">
            <li>
              <NavLink
                to="/compatible-devices"
                className={({ isActive }) =>
                  `transition-colors ease-in ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.compatibleDevices')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/data-plans"
                className={({ isActive }) =>
                  `transition-colors ease-in ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.dataPlans')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `transition-colors ease-in ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.aboutUs')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors ease-in ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.contactUs')}
              </NavLink>
            </li>
          </ul>
          <div className="mt-4">
            <Button animated size="md" onClick={() => setIsOpen(false)}>
              <p className="flex items-center justify-center gap-2">
                {t('buttons.getTheApp')}
                <span className="text-black inline-flex items-center justify-center w-6 h-6 bg-white border border-black rounded-full">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </p>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
