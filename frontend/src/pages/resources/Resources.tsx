import { NavLink, Outlet } from 'react-router-dom'

const resourceTabs = [
  { to: '/app/resources/ec2', label: 'EC2', icon: '⚡' },
  { to: '/app/resources/eks', label: 'EKS', icon: '☸' },
  { to: '/app/resources/rds', label: 'RDS', icon: '🗄' },
]

export default function Resources() {
  return (
    <div className="reveal">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>
          Resources
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
          Inventory and utilization across your AWS services.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
        {resourceTabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 18px',
              fontSize: 13,
              fontWeight: 500,
              color: isActive ? 'var(--amber)' : 'var(--text-secondary)',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid var(--amber)' : '2px solid transparent',
              marginBottom: -1,
              transition: 'all 0.15s',
            })}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  )
}
