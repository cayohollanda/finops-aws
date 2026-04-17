export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
        <div className="px-6 py-5">
          <h2 className="text-base font-semibold text-gray-800 mb-1">AWS Integration</h2>
          <p className="text-sm text-gray-500 mb-3">Connect your AWS account via IAM role or access keys.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            Configure AWS
          </button>
        </div>
        <div className="px-6 py-5">
          <h2 className="text-base font-semibold text-gray-800 mb-1">Notifications</h2>
          <p className="text-sm text-gray-500">Configure alerts for schedule events and cost anomalies.</p>
        </div>
        <div className="px-6 py-5">
          <h2 className="text-base font-semibold text-gray-800 mb-1">Team</h2>
          <p className="text-sm text-gray-500">Manage team members and permissions.</p>
        </div>
      </div>
    </div>
  )
}
