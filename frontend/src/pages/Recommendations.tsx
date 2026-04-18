const categories = [
  {
    label: 'Right-sizing',
    description: 'EC2 and RDS instances that are over-provisioned',
    count: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    accent: 'var(--amber)',
    potential: '$200–800/mo',
  },
  {
    label: 'Idle Resources',
    description: 'Resources with near-zero utilization in the past 7 days',
    count: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="8" y1="15" x2="16" y2="15"/>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"/>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"/>
      </svg>
    ),
    accent: '#ef4444',
    potential: '$100–500/mo',
  },
  {
    label: 'EBS Optimization',
    description: 'Unattached volumes and gp2 → gp3 migration opportunities',
    count: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    accent: '#3b82f6',
    potential: '$50–300/mo',
  },
  {
    label: 'Reserved Instances',
    description: 'On-demand workloads that qualify for Reserved Instance pricing',
    count: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    accent: '#8b5cf6',
    potential: 'Up to 72% off',
  },
]

export default function Recommendations() {
  return (
    <div className="reveal">
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>
          Recommendations
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
          Cost-saving opportunities detected in your AWS infrastructure.
        </p>
      </div>

      {/* Summary bar */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '16px 24px',
        marginBottom: 24,
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
            Total opportunities
          </div>
          <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--text-primary)' }}>0</div>
        </div>
        <div style={{ width: 1, height: 40, background: 'var(--border)' }} />
        <div>
          <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
            Potential monthly savings
          </div>
          <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--green)' }}>$0</div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            Requires AWS connection to generate recommendations
          </span>
        </div>
      </div>

      {/* Category cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className="card reveal"
            style={{ padding: '24px', animationDelay: `${i * 0.08}s`, cursor: 'default' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 9,
                  background: `${cat.accent}12`,
                  border: `1px solid ${cat.accent}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cat.accent,
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>
                    {cat.label}
                  </h2>
                  <span className="badge badge-blue" style={{ fontSize: 10 }}>
                    {cat.count} items
                  </span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>
              {cat.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace' }}>
                POTENTIAL SAVINGS
              </span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', fontFamily: '"JetBrains Mono", monospace' }}>
                {cat.potential}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
