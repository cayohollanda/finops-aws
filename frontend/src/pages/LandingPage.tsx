import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const startVal = 0
    const raf = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(startVal + (target - startVal) * eased))
      if (progress < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [target, duration, start])
  return value
}

// Intersection observer hook for reveal animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ── Icons ──────────────────────────────────────────────────────────────────
const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
)
const IconTrend = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconServer = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
)
const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 0',
        transition: 'all 0.3s',
        background: scrolled
          ? 'rgba(8, 11, 16, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,45,61,0.5)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#080b10" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: 20, color: '#e2e8f0', letterSpacing: '-0.01em' }}>
            CloudCtrl
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Features', 'How it works', 'Pricing'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/app" style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
            padding: '8px 16px',
          }}>
            Sign in
          </Link>
          <Link to="/app" className="btn-amber" style={{ padding: '8px 20px', fontSize: 14 }}>
            Get started free
          </Link>
        </div>
      </div>
    </nav>
  )
}

// ── Hero Section ───────────────────────────────────────────────────────────
function Hero() {
  const [started, setStarted] = useState(false)
  const savings = useCounter(47823, 2500, started)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="hero-gradient bg-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Ambient glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '8%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '10%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>

        {/* Badge */}
        <div className="reveal" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(245,158,11,0.08)',
          border: '1px solid rgba(245,158,11,0.2)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 32,
        }}>
          <span style={{ fontSize: 10, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)' }}>
            AWS FinOps Automation
          </span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)' }} className="dot-pulse" />
        </div>

        {/* Headline */}
        <h1
          className="reveal reveal-delay-1"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 'clamp(40px, 7vw, 76px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          Stop paying for AWS{' '}
          <span className="text-shimmer">when no one's working.</span>
        </h1>

        {/* Sub */}
        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-secondary)',
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          Automatically shut down non-prod environments after hours.
          Right-size EC2, RDS, EKS. Ship cost intelligence — not spreadsheets.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 64 }}>
          <Link to="/app" className="btn-amber" style={{ padding: '14px 28px', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            Start saving today <IconArrow />
          </Link>
          <a href="#how-it-works" className="btn-ghost" style={{ padding: '14px 28px', fontSize: 15 }}>
            See how it works
          </a>
        </div>

        {/* Live savings ticker */}
        <div
          className="reveal reveal-delay-4 border-gradient"
          style={{
            background: 'var(--bg-card)',
            borderRadius: 12,
            padding: '20px 32px',
            display: 'flex', alignItems: 'center', gap: 24,
            marginBottom: 64,
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
              Saved this month
            </div>
            <div style={{ fontSize: 36, fontFamily: '"DM Serif Display", serif', color: 'var(--green)' }} className="text-glow-amber">
              ${savings.toLocaleString()}
            </div>
          </div>
          <div style={{ width: 1, height: 48, background: 'var(--border)' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
              Avg. reduction
            </div>
            <div style={{ fontSize: 36, fontFamily: '"DM Serif Display", serif', color: 'var(--amber)' }}>
              42%
            </div>
          </div>
          <div style={{ width: 1, height: 48, background: 'var(--border)' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
              Environments managed
            </div>
            <div style={{ fontSize: 36, fontFamily: '"DM Serif Display", serif', color: 'var(--text-primary)' }}>
              1,280+
            </div>
          </div>
        </div>

        {/* Floating service badges */}
        <div className="reveal reveal-delay-5" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'EC2', color: '#f59e0b', icon: '⚡' },
            { label: 'EKS', color: '#3b82f6', icon: '☸' },
            { label: 'RDS', color: '#10b981', icon: '🗄' },
            { label: 'EBS', color: '#8b5cf6', icon: '💾' },
            { label: 'Lambda', color: '#f97316', icon: 'λ' },
          ].map(({ label, color, icon }) => (
            <div
              key={label}
              className="float"
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${color}30`,
                borderRadius: 100,
                padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 600, fontFamily: '"JetBrains Mono", monospace',
                color,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <span>{icon}</span> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Features Section ───────────────────────────────────────────────────────
const features = [
  {
    icon: <IconClock />,
    title: 'Scheduled Shutdowns',
    desc: 'Define cron-based schedules to power down dev, staging, and QA environments outside working hours. Configurable per environment, per team.',
    accent: 'var(--amber)',
  },
  {
    icon: <IconTrend />,
    title: 'Right-Sizing Engine',
    desc: 'Continuous analysis of EC2 and RDS utilization. Get actionable recommendations with estimated savings before you commit to any change.',
    accent: 'var(--green)',
  },
  {
    icon: <IconServer />,
    title: 'EBS Optimization',
    desc: 'Detect unattached volumes, over-provisioned disks, and gp2 volumes eligible for gp3 migration. Every dollar visible.',
    accent: '#3b82f6',
  },
  {
    icon: <IconZap />,
    title: 'One-Click Execution',
    desc: 'Approve recommendations and execute changes directly from the dashboard. Full audit trail with rollback support.',
    accent: '#8b5cf6',
  },
  {
    icon: <IconChart />,
    title: 'Cost Intelligence',
    desc: 'Daily and monthly spend breakdowns per environment, per service. Trend forecasting with anomaly detection built in.',
    accent: '#f97316',
  },
  {
    icon: <IconShield />,
    title: 'Safe by Design',
    desc: 'IAM role-based access with least privilege. Read-only discovery mode. Every action logged and reversible.',
    accent: '#ec4899',
  },
]

function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className={`section-label ${inView ? 'reveal' : ''}`} style={{ marginBottom: 16 }}>
            Features
          </div>
          <h2
            className={inView ? 'reveal reveal-delay-1' : ''}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Everything you need to cut AWS waste
          </h2>
          <p
            className={inView ? 'reveal reveal-delay-2' : ''}
            style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}
          >
            From scheduled shutdowns to right-sizing — one platform, complete visibility.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-amber ${inView ? 'reveal' : ''}`}
              style={{
                padding: '28px',
                animationDelay: `${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: `${f.accent}15`,
                border: `1px solid ${f.accent}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: f.accent, marginBottom: 20,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ───────────────────────────────────────────────────────────
const steps = [
  {
    step: '01',
    title: 'Connect your AWS account',
    desc: 'Attach our read-write IAM role to your account. No credentials stored — pure role assumption via AWS STS. Up in minutes.',
    code: `$ aws iam attach-role-policy \\
  --role-name CloudCtrlRole \\
  --policy-arn arn:aws:iam::aws:policy/CloudCtrlAccess

✓ Role attached successfully
✓ Scanning 847 resources...
✓ Discovery complete — 23 savings found`,
  },
  {
    step: '02',
    title: 'Configure environments & schedules',
    desc: 'Define which accounts, regions, and resource tags belong to each environment. Set the shutdown window once — we handle the rest.',
    code: `environment: staging
  schedule:
    shutdown: "0 20 * * 1-5"  # 8pm weekdays
    startup:  "0 8  * * 1-5"  # 8am weekdays
  targets:
    - type: ec2
      tags: {Env: staging}
    - type: rds
      tags: {Env: staging}`,
  },
  {
    step: '03',
    title: 'Watch the savings compound',
    desc: 'Real-time dashboard shows every dollar saved. Review right-sizing recommendations, approve with one click, and track ROI over time.',
    code: `Monthly Report — March 2025

  Scheduled shutdowns:   $3,240 saved
  EC2 right-sizing:      $1,890 saved
  EBS optimizations:       $670 saved
  ─────────────────────────────────
  Total savings:         $5,800 / mo
  ROI vs. plan cost:     19.3x`,
  },
]

function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section id="how-it-works" style={{ padding: '120px 0', background: 'var(--bg-card)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className={`section-label ${inView ? 'reveal' : ''}`} style={{ marginBottom: 16 }}>
            How it works
          </div>
          <h2
            className={inView ? 'reveal reveal-delay-1' : ''}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            From connected to saving in 15 minutes
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={inView ? 'reveal' : ''}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                gap: 48,
                alignItems: 'center',
                animationDelay: `${0.1 + i * 0.15}s`,
              }}
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: 72,
                  lineHeight: 1,
                  color: 'rgba(245,158,11,0.12)',
                  marginBottom: -16,
                  letterSpacing: '-0.04em',
                }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16, fontFamily: '"DM Serif Display", serif', letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {s.desc}
                </p>
              </div>

              {/* Terminal block */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{
                  background: '#060912',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: '10px 16px',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: '#0a0e19',
                  }}>
                    {['#ef4444', '#f59e0b', '#10b981'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                    ))}
                    <span style={{ marginLeft: 8, fontSize: 11, fontFamily: '"JetBrains Mono", monospace', color: 'var(--text-muted)' }}>
                      terminal
                    </span>
                  </div>
                  <pre style={{
                    margin: 0,
                    padding: '20px 20px',
                    fontSize: 12,
                    fontFamily: '"JetBrains Mono", monospace',
                    color: '#94a3b8',
                    lineHeight: 1.8,
                    whiteSpace: 'pre-wrap',
                    overflowX: 'auto',
                  }}>
                    {s.code.split('\n').map((line, li) => {
                      const isCmd = line.startsWith('$')
                      const isCheck = line.startsWith('✓')
                      const isKey = line.includes(':') && !line.startsWith(' ')
                      const isComment = line.includes('#')
                      return (
                        <span key={li} style={{
                          display: 'block',
                          color: isCmd ? '#e2e8f0' : isCheck ? '#10b981' : isKey ? '#fbbf24' : isComment ? '#475569' : '#94a3b8',
                        }}>
                          {line}
                        </span>
                      )
                    })}
                    <span className="cursor-blink" style={{ color: 'var(--amber)' }}>█</span>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ────────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Starter',
    price: 49,
    desc: 'For small teams getting started with FinOps',
    features: [
      'Up to 3 environments',
      'Scheduled shutdowns',
      'Basic cost reporting',
      '1 AWS account',
      'Email support',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 149,
    desc: 'For engineering teams serious about cost reduction',
    features: [
      'Up to 15 environments',
      'Right-sizing recommendations',
      'EBS optimization',
      'Up to 5 AWS accounts',
      'Slack notifications',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: null,
    desc: 'For organizations with complex multi-account setups',
    features: [
      'Unlimited environments',
      'Multi-region & multi-account',
      'Custom automation rules',
      'SSO & RBAC',
      'Dedicated CSM',
      'SLA guarantee',
    ],
    cta: 'Contact us',
    highlight: false,
  },
]

function Pricing() {
  const { ref, inView } = useInView()

  return (
    <section id="pricing" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className={`section-label ${inView ? 'reveal' : ''}`} style={{ marginBottom: 16 }}>
            Pricing
          </div>
          <h2
            className={inView ? 'reveal reveal-delay-1' : ''}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Plans that pay for themselves
          </h2>
          <p
            className={inView ? 'reveal reveal-delay-2' : ''}
            style={{ color: 'var(--text-secondary)', fontSize: 16 }}
          >
            14-day free trial. No credit card required.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`${plan.highlight ? 'pricing-highlight' : 'card'} ${inView ? 'reveal' : ''}`}
              style={{
                border: `1px solid ${plan.highlight ? 'rgba(245,158,11,0.3)' : 'var(--border)'}`,
                borderRadius: 16,
                padding: '32px',
                position: 'relative',
                animationDelay: `${0.1 + i * 0.1}s`,
                transform: plan.highlight ? 'scale(1.03)' : undefined,
              }}
            >
              {plan.highlight && (
                <div style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: '#080b10',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '4px 16px',
                  borderRadius: 100,
                  fontFamily: '"JetBrains Mono", monospace',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  Most popular
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: plan.highlight ? 'var(--amber)' : 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: '"JetBrains Mono", monospace' }}>
                  {plan.name}
                </div>
                <div style={{ marginBottom: 12 }}>
                  {plan.price ? (
                    <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: 48, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                      ${plan.price}
                      <span style={{ fontSize: 16, color: 'var(--text-muted)', fontFamily: '"Outfit", sans-serif' }}>/mo</span>
                    </span>
                  ) : (
                    <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: 40, color: 'var(--text-primary)' }}>
                      Custom
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {plan.desc}
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                    <span style={{ color: plan.highlight ? 'var(--amber)' : 'var(--green)', flexShrink: 0, marginTop: 1 }}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/app"
                className={plan.highlight ? 'btn-amber' : 'btn-ghost'}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px 24px',
                  fontSize: 14,
                  textDecoration: 'none',
                  borderRadius: 8,
                  fontWeight: 600,
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Section ────────────────────────────────────────────────────────────
function CTA() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-card)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          ref={ref}
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(8,11,16,0) 60%)',
            border: '1px solid rgba(245,158,11,0.15)',
            borderRadius: 24,
            padding: '80px 64px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-40%', left: '50%',
            transform: 'translateX(-50%)',
            width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className={`section-label ${inView ? 'reveal' : ''}`} style={{ marginBottom: 16, position: 'relative' }}>
            Get started today
          </div>
          <h2
            className={inView ? 'reveal reveal-delay-1' : ''}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
              position: 'relative',
            }}
          >
            Your AWS bill has been waiting
            <br />
            <em style={{ color: 'var(--amber)', fontStyle: 'normal' }}>for this conversation.</em>
          </h2>

          <p
            className={inView ? 'reveal reveal-delay-2' : ''}
            style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto 40px', lineHeight: 1.7, position: 'relative' }}
          >
            Connect your first AWS account in 5 minutes. No credit card. Cancel any time.
          </p>

          <div className={inView ? 'reveal reveal-delay-3' : ''} style={{ display: 'flex', gap: 12, justifyContent: 'center', position: 'relative' }}>
            <Link to="/app" className="btn-amber" style={{ padding: '14px 32px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Start free trial <IconArrow />
            </Link>
            <a href="mailto:hello@cloudctrl.io" className="btn-ghost" style={{ padding: '14px 28px', fontSize: 15 }}>
              Talk to us first
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '48px 0',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#080b10" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: 16, color: 'var(--text-primary)' }}>
            CloudCtrl
          </span>
        </div>

        <div style={{ display: 'flex', gap: 32 }}>
          {['Privacy', 'Terms', 'Docs', 'Status'].map(item => (
            <a key={item} href="#" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>
              {item}
            </a>
          ))}
        </div>

        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace' }}>
          © 2025 CloudCtrl · Built for AWS teams
        </div>
      </div>
    </footer>
  )
}

// ── Main export ────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
