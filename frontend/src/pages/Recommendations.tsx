const categories = [
  { label: 'Right-sizing', description: 'EC2 and RDS instances that are over-provisioned', count: 0 },
  { label: 'Idle Resources', description: 'Resources with near-zero utilization', count: 0 },
  { label: 'EBS Optimization', description: 'Unattached or underused EBS volumes', count: 0 },
  { label: 'Reserved Instances', description: 'On-demand workloads suitable for Reserved Instances', count: 0 },
]

export default function Recommendations() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-semibold text-gray-800">{cat.label}</h2>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                {cat.count} items
              </span>
            </div>
            <p className="text-sm text-gray-500">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
