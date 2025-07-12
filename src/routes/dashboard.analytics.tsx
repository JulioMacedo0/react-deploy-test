import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/analytics")({
  component: DashboardAnalyticsComponent,
});

function DashboardAnalyticsComponent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600">
          Track your performance metrics and gain insights into your business.
        </p>
      </div>

      {/* Time Period Selector */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Performance Overview
          </h2>
          <div className="flex space-x-2">
            {["7D", "30D", "90D", "1Y"].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  period === "30D"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">2.4K</div>
            <div className="text-sm text-blue-700 mb-2">Page Views</div>
            <div className="text-xs text-blue-600">↗ +18% vs last period</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-1">1.8K</div>
            <div className="text-sm text-green-700 mb-2">Unique Visitors</div>
            <div className="text-xs text-green-600">↗ +12% vs last period</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-1">4.2%</div>
            <div className="text-sm text-purple-700 mb-2">Conversion Rate</div>
            <div className="text-xs text-red-600">↘ -0.3% vs last period</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-1">3:24</div>
            <div className="text-sm text-orange-700 mb-2">Avg. Session</div>
            <div className="text-xs text-green-600">↗ +0:45 vs last period</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Traffic Overview
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-gray-600">Interactive Chart Placeholder</div>
              <div className="text-sm text-gray-500 mt-1">
                In a real app, this would show actual traffic data
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Trends
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-gray-600">Revenue Chart Placeholder</div>
              <div className="text-sm text-gray-500 mt-1">
                Monthly revenue breakdown and trends
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Traffic Sources
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              source: "Organic Search",
              visitors: "1,234",
              percentage: "45%",
              color: "blue",
            },
            {
              source: "Direct",
              visitors: "856",
              percentage: "31%",
              color: "green",
            },
            {
              source: "Social Media",
              visitors: "432",
              percentage: "16%",
              color: "purple",
            },
            {
              source: "Referrals",
              visitors: "218",
              percentage: "8%",
              color: "orange",
            },
          ].map((source) => (
            <div key={source.source} className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-3 bg-${source.color}-100 rounded-full flex items-center justify-center`}
              >
                <div
                  className={`w-8 h-8 bg-${source.color}-600 rounded-full`}
                ></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {source.source}
              </h4>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {source.visitors}
              </div>
              <div className={`text-sm font-medium text-${source.color}-600`}>
                {source.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Top Performing Pages
        </h3>
        <div className="space-y-4">
          {[
            { page: "/products", views: "2,445", bounce: "23%", time: "4:32" },
            { page: "/", views: "1,892", bounce: "31%", time: "3:45" },
            { page: "/about", views: "1,234", bounce: "28%", time: "2:56" },
            { page: "/blog", views: "987", bounce: "35%", time: "5:12" },
            { page: "/dashboard", views: "654", bounce: "18%", time: "8:43" },
          ].map((page, index) => (
            <div
              key={page.page}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="text-lg font-semibold text-gray-500">
                  #{index + 1}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{page.page}</div>
                  <div className="text-sm text-gray-600">
                    {page.views} page views
                  </div>
                </div>
              </div>
              <div className="flex space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-gray-500">Bounce Rate</div>
                  <div className="font-semibold text-gray-900">
                    {page.bounce}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500">Avg. Time</div>
                  <div className="font-semibold text-gray-900">{page.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Device Analytics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Device Breakdown
          </h3>
          <div className="space-y-4">
            {[
              { device: "Desktop", percentage: 65, color: "blue" },
              { device: "Mobile", percentage: 28, color: "green" },
              { device: "Tablet", percentage: 7, color: "purple" },
            ].map((device) => (
              <div key={device.device} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {device.device}
                  </span>
                  <span className="text-sm text-gray-600">
                    {device.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-${device.color}-600 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Browser Usage
          </h3>
          <div className="space-y-4">
            {[
              { browser: "Chrome", percentage: 68, color: "green" },
              { browser: "Safari", percentage: 18, color: "blue" },
              { browser: "Firefox", percentage: 9, color: "orange" },
              { browser: "Edge", percentage: 5, color: "blue" },
            ].map((browser) => (
              <div key={browser.browser} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {browser.browser}
                  </span>
                  <span className="text-sm text-gray-600">
                    {browser.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-${browser.color}-600 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${browser.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
