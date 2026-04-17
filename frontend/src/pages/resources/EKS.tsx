export default function EKS() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-sm font-medium text-gray-700">EKS Clusters</h2>
      </div>
      <div className="px-6 py-8 text-center text-gray-400 text-sm">
        No EKS clusters found. Connect your AWS account to see clusters.
      </div>
    </div>
  )
}
