import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";
import "../index.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <span className="hidden sm:inline">TanStack Router Demo</span>
                <span className="sm:hidden">TS Router</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                About
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                Products
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                Dashboard
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                Blog
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base">
            &copy; 2025 TanStack Router Demo. Built with React & TanStack
            Router.
          </p>
        </div>
      </footer>

      {/* Development Tools */}
      <TanStackRouterDevtools />
    </div>
  );
}
