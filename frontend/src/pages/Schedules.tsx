export default function Schedules() {
  const exampleSchedules = [
    { name: 'Weeknight shutdown', cron: '0 20 * * 1-5', targets: 'staging, dev', next: 'Mon 20:00', status: 'example' },
    { name: 'Weekend shutdown', cron: '0 0 * * 6', targets: 'all non-prod', next: 'Sat 00:00', status: 'example' },
  ]

  return (
    <div className="reveal">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>
            Schedules
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Automated shutdown and startup windows for your environments.
          </p>
        </div>
        <button className="btn-amber" style={{ padding: '9px 18px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          New Schedule
        </button>
      </div>

      {/* Info banner */}
      <div style={{
        padding: '14px 18px',
        background: 'rgba(59,130,246,0.06)',
        border: '1px solid rgba(59,130,246,0.15)',
        borderRadius: 10,
        display: 'flex', gap: 12, alignItems: 'flex-start',
        marginBottom: 24,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#3b82f6', marginBottom: 2 }}>Example schedules below</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
            Connect your AWS account and create an environment to activate real schedules.
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Schedule Name</th>
              <th>Cron Expression</th>
              <th>Targets</th>
              <th>Next Run</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {exampleSchedules.map((s) => (
              <tr key={s.name} style={{ opacity: 0.55 }}>
                <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{s.name}</td>
                <td>
                  <code style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'var(--amber)', background: 'rgba(245,158,11,0.08)', padding: '2px 6px', borderRadius: 4 }}>
                    {s.cron}
                  </code>
                </td>
                <td style={{ color: 'var(--text-secondary)' }}>{s.targets}</td>
                <td style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'var(--text-secondary)' }}>{s.next}</td>
                <td>
                  <span className="badge badge-blue">Example</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ padding: '24px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
            No active schedules. <button style={{ background: 'none', border: 'none', color: 'var(--amber)', cursor: 'pointer', fontSize: 13, padding: 0, fontFamily: '"Outfit", sans-serif' }}>Create your first schedule →</button>
          </p>
        </div>
      </div>
    </div>
  )
}
