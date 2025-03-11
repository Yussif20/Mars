import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components'; // Import your Header component

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-inter">
      {/* Header - Fixed across all routes */}
      <header className="w-full bg-white shadow-xs">
        <Header />
      </header>

      {/* Main content area - Centered, 4/6 width */}
      <main className="flex-grow flex justify-center items-start py-8">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Outlet renders the matched route's component */}
          <Outlet />
        </div>
      </main>

      {/* Footer - Fixed across all routes */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};
