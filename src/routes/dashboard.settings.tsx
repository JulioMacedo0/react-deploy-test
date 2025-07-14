import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: DashboardSettingsComponent,
});

function DashboardSettingsComponent() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Settings
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
          Account Settings
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                Email Notifications
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Receive email updates about your account
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                SMS Notifications
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Receive SMS alerts for important updates
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                Two-Factor Authentication
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Add an extra layer of security to your account
              </p>
            </div>
            <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
          Privacy Settings
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                Profile Visibility
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Control who can see your profile information
              </p>
            </div>
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Public</option>
              <option>Friends Only</option>
              <option>Private</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                Activity Tracking
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Allow us to track your activity for analytics
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-red-200">
        <h2 className="text-lg sm:text-xl font-semibold text-red-900 mb-4 sm:mb-6">
          Danger Zone
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-red-50 rounded-lg space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-medium text-red-900 text-sm sm:text-base">
                Delete Account
              </h3>
              <p className="text-xs sm:text-sm text-red-700">
                Permanently delete your account and all data
              </p>
            </div>
            <button className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Save Changes
        </button>
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">
          Cancel
        </button>
      </div>
    </div>
  );
}
