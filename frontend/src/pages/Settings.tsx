export default function Settings() {
  return (
    <div className="reveal">
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 28, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>
          Settings
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
          Manage integrations, notifications, and team access.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'start' }}>
        {/* Sidebar nav */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          {['AWS Integration', 'Notifications', 'Team', 'Billing', 'API Keys'].map((item, i) => (
            <button
              key={item}
              style={{
                width: '100%',
                padding: '12px 16px',
                textAlign: 'left',
                background: i === 0 ? 'rgba(245,158,11,0.06)' : 'transparent',
                border: 'none',
                borderLeft: `3px solid ${i === 0 ? 'var(--amber)' : 'transparent'}`,
                color: i === 0 ? 'var(--amber)' : 'var(--text-secondary)',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
                fontFamily: '"Outfit", sans-serif',
                transition: 'all 0.15s',
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* AWS Integration */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(245,158,11,0.08)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>AWS Integration</h2>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>Connect via IAM Role (recommended) or Access Keys</p>
                </div>
                <span className="badge badge-red" style={{ marginLeft: 'auto' }}>Not connected</span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'AWS Account ID', placeholder: '123456789012', type: 'text' },
                  { label: 'Default Region', placeholder: 'us-east-1', type: 'text' },
                  { label: 'IAM Role ARN', placeholder: 'arn:aws:iam::...', type: 'text' },
                  { label: 'External ID', placeholder: 'Auto-generated', type: 'text' },
                ].map(field => (
                  <div key={field.label}>
                    <label style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>
                      {field.label.toUpperCase()}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        color: 'var(--text-primary)',
                        fontSize: 13,
                        fontFamily: '"JetBrains Mono", monospace',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '14px 16px', marginBottom: 20, fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <div style={{ color: 'var(--text-muted)', marginBottom: 6 }}># Required IAM permissions</div>
                <div>ec2:Describe*, ec2:StopInstances, ec2:StartInstances</div>
                <div>rds:Describe*, rds:StopDBInstance, rds:StartDBInstance</div>
                <div>eks:Describe*, cloudwatch:GetMetricData</div>
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn-amber" style={{ padding: '10px 20px', fontSize: 13 }}>
                  Test Connection
                </button>
                <button className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>
                  View IAM Template
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>Notifications</h2>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>Alerts for schedule events and cost anomalies</p>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Shutdown reminders', desc: '30 min before scheduled shutdown', enabled: true },
                { label: 'Startup confirmation', desc: 'When environments come back online', enabled: true },
                { label: 'Cost anomaly alerts', desc: 'Unexpected spend spikes', enabled: false },
                { label: 'Weekly savings report', desc: 'Summary of savings each Monday', enabled: false },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                  <div style={{
                    width: 40, height: 22, borderRadius: 100,
                    background: item.enabled ? 'var(--amber)' : 'var(--border)',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}>
                    <div style={{
                      width: 16, height: 16,
                      borderRadius: '50%',
                      background: 'white',
                      position: 'absolute',
                      top: 3,
                      left: item.enabled ? 21 : 3,
                      transition: 'left 0.2s',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
