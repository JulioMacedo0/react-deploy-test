import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndexComponent,
});

function DashboardIndexComponent() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Welcome back! Here's what's happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <div className="ml-2 sm:ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Total Users
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                1,234
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-3 lg:mt-4">
            <span className="text-green-600 text-xs sm:text-sm font-medium">
              ↗ +12%
            </span>
            <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">
              from last month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <div className="ml-2 sm:ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Revenue
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                $12,345
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-3 lg:mt-4">
            <span className="text-green-600 text-xs sm:text-sm font-medium">
              ↗ +8%
            </span>
            <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">
              from last month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="ml-2 sm:ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Orders
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                567
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-3 lg:mt-4">
            <span className="text-green-600 text-xs sm:text-sm font-medium">
              ↗ +23%
            </span>
            <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">
              from last month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 sm:p-2 bg-orange-100 rounded-lg">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div className="ml-2 sm:ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Conversion
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                3.2%
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-3 lg:mt-4">
            <span className="text-red-600 text-xs sm:text-sm font-medium">
              ↘ -2%
            </span>
            <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">
              from last month
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity & Chart */}
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                user: "John Doe",
                action: "made a purchase",
                time: "2 minutes ago",
                color: "green",
              },
              {
                user: "Jane Smith",
                action: "created an account",
                time: "5 minutes ago",
                color: "blue",
              },
              {
                user: "Mike Johnson",
                action: "left a review",
                time: "10 minutes ago",
                color: "purple",
              },
              {
                user: "Sarah Wilson",
                action: "updated profile",
                time: "15 minutes ago",
                color: "orange",
              },
              {
                user: "Tom Brown",
                action: "made a purchase",
                time: "20 minutes ago",
                color: "green",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 sm:space-x-3"
              >
                <div
                  className={`w-2 h-2 bg-${activity.color}-600 rounded-full flex-shrink-0`}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-900 truncate">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📊</div>
              <div className="text-xs sm:text-sm font-medium text-gray-700">
                View Analytics
              </div>
            </button>
            <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-green-400 hover:bg-green-50 transition-colors">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💰</div>
              <div className="text-xs sm:text-sm font-medium text-gray-700">
                Add Revenue
              </div>
            </button>
            <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-purple-400 hover:bg-purple-50 transition-colors">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">👥</div>
              <div className="text-xs sm:text-sm font-medium text-gray-700">
                Manage Users
              </div>
            </button>
            <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">⚙️</div>
              <div className="text-xs sm:text-sm font-medium text-gray-700">
                Settings
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
          Recent Orders
        </h3>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Product
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: "#12345",
                    customer: "John Doe",
                    product: "Wireless Headphones",
                    amount: "$199.99",
                    status: "Completed",
                  },
                  {
                    id: "#12346",
                    customer: "Jane Smith",
                    product: "Smart Watch",
                    amount: "$299.99",
                    status: "Processing",
                  },
                  {
                    id: "#12347",
                    customer: "Mike Johnson",
                    product: "Coffee Mug",
                    amount: "$24.99",
                    status: "Shipped",
                  },
                  {
                    id: "#12348",
                    customer: "Sarah Wilson",
                    product: "Laptop Stand",
                    amount: "$79.99",
                    status: "Completed",
                  },
                ].map((order) => (
                  <tr key={order.id}>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 hidden sm:table-cell">
                      {order.product}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {order.amount}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
