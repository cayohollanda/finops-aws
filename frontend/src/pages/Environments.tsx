import { Link } from 'react-router-dom'

export default function Environments() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Environments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
          Add Environment
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-sm font-medium text-gray-700">Non-prod environments with scheduled shutdown</h2>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-8 text-center text-gray-400 text-sm">
            No environments configured.{' '}
            <button className="text-blue-600 hover:underline">Add one</button> to get started.
          </div>
        </div>
      </div>
    </div>
  )
}
