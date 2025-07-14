import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayoutComponent,
});

function DashboardLayoutComponent() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:sticky lg:top-8">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Dashboard
            </h2>
            <nav className="space-y-1 sm:space-y-2">
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors [&.active]:bg-blue-100 [&.active]:text-blue-700 [&.active]:font-medium text-sm sm:text-base"
              >
                Overview
              </Link>
              <Link
                to="/dashboard/analytics"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors [&.active]:bg-blue-100 [&.active]:text-blue-700 [&.active]:font-medium text-sm sm:text-base"
              >
                Analytics
              </Link>
              <Link
                to="/dashboard/settings"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors [&.active]:bg-blue-100 [&.active]:text-blue-700 [&.active]:font-medium text-sm sm:text-base"
              >
                Settings
              </Link>
              <Link
                to="/dashboard/profile"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors [&.active]:bg-blue-100 [&.active]:text-blue-700 [&.active]:font-medium text-sm sm:text-base"
              >
                Profile
              </Link>
            </nav>

            {/* Quick Stats */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                Quick Stats
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Total Users
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    1,234
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Revenue
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-green-600">
                    $12,345
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Orders
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-blue-600">
                    567
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
