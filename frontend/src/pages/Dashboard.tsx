import { Link } from 'react-router-dom'

const stats = [
  {
    label: 'Monthly Savings',
    value: '$0',
    sub: 'Connect AWS to start tracking',
    color: 'var(--green)',
    variant: 'stat-card-green',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    label: 'Active Environments',
    value: '0',
    sub: 'No environments configured',
    color: 'var(--amber)',
    variant: 'stat-card-amber',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5"/>
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    label: 'Open Recommendations',
    value: '0',
    sub: 'Requires AWS connection',
    color: '#3b82f6',
    variant: 'stat-card-blue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: 'Scheduled Shutdowns',
    value: '0',
    sub: 'No schedules defined',
    color: '#8b5cf6',
    variant: 'stat-card-blue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
]

const quickActions = [
  {
    title: 'Connect AWS Account',
    desc: 'Attach an IAM role to start discovering resources and tracking costs.',
    cta: 'Configure →',
    to: '/app/settings',
    accent: 'var(--amber)',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.15)',
  },
  {
    title: 'Create an Environment',
    desc: 'Group your AWS resources into logical environments for scheduling.',
    cta: 'Add environment →',
    to: '/app/environments',
    accent: '#3b82f6',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.15)',
  },
  {
    title: 'Set a Shutdown Schedule',
    desc: 'Define when non-prod environments should power down to save costs.',
    cta: 'Create schedule →',
    to: '/app/schedules',
    accent: 'var(--green)',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.15)',
  },
]

export default function Dashboard() {
  return (
    <div className="reveal">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1 style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 28,
            color: 'var(--text-primary)',
            marginBottom: 4,
            letterSpacing: '-0.01em',
          }}>
            Good morning
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Here's an overview of your AWS cost optimization status.
          </p>
        </div>
        <Link to="/app/settings" className="btn-amber" style={{ padding: '9px 18px', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Connect AWS
        </Link>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat-card ${s.variant} reveal`}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {s.label}
              </span>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: `${s.color}15`,
                border: `1px solid ${s.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color,
              }}>
                {s.icon}
              </div>
            </div>
            <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 36, color: s.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 8 }}>
              {s.value}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Getting started + activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20, alignItems: 'start' }}>
        {/* Quick actions */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Getting started
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {quickActions.map((action, i) => (
              <div
                key={action.title}
                className="reveal"
                style={{
                  background: action.bg,
                  border: `1px solid ${action.border}`,
                  borderRadius: 12,
                  padding: '20px 24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  animationDelay: `${0.2 + i * 0.08}s`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>
                    {action.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {action.desc}
                  </p>
                </div>
                <Link
                  to={action.to}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: action.accent,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {action.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Activity / cost breakdown */}
        <div
          className="reveal"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            animationDelay: '0.35s',
          }}
        >
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
              Estimated Impact
            </span>
            <span className="badge badge-amber">Preview</span>
          </div>

          <div style={{ padding: '20px' }}>
            {[
              { label: 'Scheduled shutdowns', est: '~$800–2,400/mo', icon: '🕐' },
              { label: 'Right-sizing (EC2)', est: '~$200–800/mo', icon: '⚡' },
              { label: 'EBS optimization', est: '~$50–300/mo', icon: '💾' },
              { label: 'Reserved Instances', est: 'up to 72% off', icon: '📦' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(30,45,61,0.5)',
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--green)', fontFamily: '"JetBrains Mono", monospace', marginTop: 2 }}>
                    {item.est}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 16, padding: '14px', background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.12)', borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, fontFamily: '"JetBrains Mono", monospace' }}>
                TOTAL POTENTIAL
              </div>
              <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--green)' }}>
                $1,050–3,500<span style={{ fontSize: 13, fontFamily: '"Outfit", sans-serif', color: 'var(--text-muted)' }}>/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
