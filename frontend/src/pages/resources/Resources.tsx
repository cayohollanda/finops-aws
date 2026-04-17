import { NavLink, Outlet } from 'react-router-dom'

const resourceTabs = [
  { to: '/resources/ec2', label: 'EC2' },
  { to: '/resources/eks', label: 'EKS' },
  { to: '/resources/rds', label: 'RDS' },
]

export default function Resources() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Resources</h1>
      <div className="flex space-x-1 mb-6 border-b border-gray-200">
        {resourceTabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
