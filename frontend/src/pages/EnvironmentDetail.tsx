import { Link, useParams } from 'react-router-dom'

export default function EnvironmentDetail() {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <div className="mb-6">
        <Link to="/environments" className="text-sm text-blue-600 hover:underline">
          ← Back to Environments
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Environment: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Resources</h2>
          <p className="text-gray-400 text-sm">No resources linked to this environment.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Shutdown Schedule</h2>
          <p className="text-gray-400 text-sm">No schedule configured.</p>
        </div>
      </div>
    </div>
  )
}
