import { Link, useParams } from 'react-router-dom'

export default function EnvironmentDetail() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="reveal">
      <div style={{ marginBottom: 24 }}>
        <Link to="/app/environments" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Environments
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'rgba(245,158,11,0.08)',
          border: '1px solid rgba(245,158,11,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="8" rx="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2"/>
          </svg>
        </div>
        <div>
          <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 26, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            {id}
          </h1>
          <span className="badge badge-amber" style={{ marginTop: 4 }}>Active</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Resources</h2>
          </div>
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>No resources linked to this environment.</p>
          </div>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Shutdown Schedule</h2>
          </div>
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>No schedule configured.</p>
            <Link to="/app/schedules" style={{ display: 'inline-block', marginTop: 12, fontSize: 13, color: 'var(--amber)', textDecoration: 'none' }}>
              Create a schedule →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
