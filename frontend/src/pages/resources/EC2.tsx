function EmptyResourceState({ service, desc }: { service: string; desc: string }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{service} Instances</span>
        <span className="badge badge-blue">0 instances</span>
      </div>
      <div style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>⚡</div>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
          No {service} instances found
        </h3>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', maxWidth: 320, margin: '0 auto' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function EC2() {
  return (
    <EmptyResourceState
      service="EC2"
      desc="Connect your AWS account to discover EC2 instances and get right-sizing recommendations."
    />
  )
}
