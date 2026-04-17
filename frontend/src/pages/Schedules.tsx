export default function Schedules() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Schedules</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
          New Schedule
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-sm font-medium text-gray-700">Automated shutdown and startup schedules</h2>
        </div>
        <div className="px-6 py-8 text-center text-gray-400 text-sm">
          No schedules defined. Create one to start saving on non-prod infrastructure.
        </div>
      </div>
    </div>
  )
}
