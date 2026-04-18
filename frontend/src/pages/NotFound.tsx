import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', background: 'var(--bg)', textAlign: 'center', padding: '32px',
    }}>
      <div style={{
        fontFamily: '"DM Serif Display", serif',
        fontSize: 120,
        lineHeight: 1,
        color: 'rgba(245,158,11,0.1)',
        marginBottom: -20,
        letterSpacing: '-0.04em',
      }}>
        404
      </div>
      <h1 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 32, color: 'var(--text-primary)', marginBottom: 12 }}>
        Page not found
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 360 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/" className="btn-amber" style={{ padding: '10px 24px', fontSize: 14, textDecoration: 'none' }}>
          Back to home
        </Link>
        <Link to="/app" style={{ padding: '10px 24px', fontSize: 14, textDecoration: 'none', color: 'var(--text-secondary)', border: '1px solid var(--border)', borderRadius: 8 }}>
          Go to dashboard
        </Link>
      </div>
    </div>
  )
}
