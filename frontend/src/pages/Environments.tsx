import { Link } from 'react-router-dom'

export default function Environments() {
  return (
    <div className="reveal">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>
            Environments
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Non-prod environments with automated shutdown schedules.
          </p>
        </div>
        <button className="btn-amber" style={{ padding: '9px 18px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add Environment
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['All', 'Active', 'Scheduled', 'Stopped'].map((f, i) => (
          <button
            key={f}
            style={{
              padding: '5px 14px',
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 500,
              border: `1px solid ${i === 0 ? 'rgba(245,158,11,0.3)' : 'var(--border)'}`,
              background: i === 0 ? 'rgba(245,158,11,0.08)' : 'transparent',
              color: i === 0 ? 'var(--amber)' : 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.05em' }}>
            0 environments
          </span>
        </div>

        {/* Empty state */}
        <div style={{ padding: '80px 24px', textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(245,158,11,0.06)',
            border: '1px solid rgba(245,158,11,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="8" rx="2"/>
              <rect x="2" y="14" width="20" height="8" rx="2"/>
            </svg>
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
            No environments yet
          </h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, maxWidth: 360, margin: '0 auto 24px' }}>
            Create an environment to group AWS resources and configure automated shutdown schedules.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button className="btn-amber" style={{ padding: '10px 20px', fontSize: 13 }}>
              Add first environment
            </button>
            <Link to="/app/settings" style={{ padding: '10px 20px', fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--border)', borderRadius: 8 }}>
              Connect AWS first
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
