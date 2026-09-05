// SOMNIQ — Glass Depth design system shared atoms
// Wearable-free, mic-based snoring + phone-pattern sleep tracking

const G = {
  bg: '#000',
  ink: '#fff',
  muted: 'rgba(255,255,255,0.55)',
  faint: 'rgba(255,255,255,0.35)',
  hairline: 'rgba(255,255,255,0.08)',
  border: 'rgba(255,255,255,0.1)',
  glassFill: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
  violet: '#a78bfa',
  cyan: '#22d3ee',
  pink: '#ec4899',
  green: '#34d399',
  amber: '#fbbf24',
  rose: '#fb7185',
  font: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

const glass = (extra = {}) => ({
  background: G.glassFill,
  border: `1px solid ${G.border}`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: 22,
  ...extra,
});

const eyebrow = {
  fontSize: 9, letterSpacing: 2.5, fontWeight: 600,
  color: G.muted, textTransform: 'uppercase',
};

const monoNum = { fontFamily: G.mono, fontVariantNumeric: 'tabular-nums' };

// Aurora background — shared across screens
const Aurora = ({ palette = 'violet' }) => {
  const palettes = {
    violet: [
      { c: 'rgba(124,58,237,0.55)', x: -80, y: -120, w: 320 },
      { c: 'rgba(34,211,238,0.4)', x: 'right', y: 200, w: 280 },
      { c: 'rgba(236,72,153,0.3)', x: -50, y: 'bottom', w: 260 },
    ],
    dawn: [
      { c: 'rgba(251,191,36,0.4)', x: -60, y: -100, w: 280 },
      { c: 'rgba(236,72,153,0.35)', x: 'right', y: 100, w: 260 },
      { c: 'rgba(167,139,250,0.3)', x: 0, y: 'bottom', w: 320 },
    ],
    cool: [
      { c: 'rgba(34,211,238,0.45)', x: -80, y: -100, w: 300 },
      { c: 'rgba(99,102,241,0.4)', x: 'right', y: 250, w: 280 },
    ],
  };
  const ps = palettes[palette] || palettes.violet;
  return (
    <>
      {ps.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: p.y === 'bottom' ? 'auto' : p.y,
          bottom: p.y === 'bottom' ? 0 : 'auto',
          left: p.x === 'right' ? 'auto' : p.x,
          right: p.x === 'right' ? -80 : 'auto',
          width: p.w, height: p.w,
          background: `radial-gradient(circle, ${p.c} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />
      ))}
    </>
  );
};

// Aria avatar — conic gradient orb, optional pulse
const AriaOrb = ({ size = 28, pulse = false }) => (
  <div style={{
    width: size, height: size, borderRadius: size / 2,
    background: 'conic-gradient(from 0deg, #a78bfa, #22d3ee, #ec4899, #a78bfa)',
    boxShadow: '0 0 16px rgba(167,139,250,0.6)',
    position: 'relative',
    animation: pulse ? 'ariaSpin 8s linear infinite' : 'none',
  }}>
    <div style={{
      position: 'absolute', inset: 3, borderRadius: (size - 6) / 2,
      background: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 700, color: '#fff',
    }}>A</div>
  </div>
);

// Glass pill — for badges, status indicators
const GlassPill = ({ children, color = G.violet, glow = false, style = {} }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: `${color}22`,
    border: `1px solid ${color}55`,
    color, padding: '5px 10px', borderRadius: 100,
    fontSize: 10, fontWeight: 600, letterSpacing: 1,
    ...(glow && { boxShadow: `0 0 12px ${color}66` }),
    ...style,
  }}>{children}</div>
);

// Section header with eyebrow + title
const SectionHead = ({ eye, title, right }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
    <div>
      {eye && <div style={eyebrow}>{eye}</div>}
      <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 2 }}>{title}</div>
    </div>
    {right}
  </div>
);

// Bottom tab bar — floating glass dock
const TabBar = ({ active, onNav }) => {
  const tabs = [
    { id: 'dashboard', label: 'Agent', icon: 'sparkles' },
    { id: 'track', label: 'Track', icon: 'moon' },
    { id: 'insights', label: 'Insights', icon: 'pulse' },
    { id: 'energy', label: 'Energy', icon: 'sunny' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 24, left: 14, right: 14, zIndex: 50,
      display: 'flex', padding: 6,
      background: 'rgba(12,12,16,0.72)',
      backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
      border: `1px solid rgba(255,255,255,0.1)`,
      borderRadius: 100,
      boxShadow: '0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
    }}>
      {tabs.map(t => {
        const isActive = t.id === active;
        return (
          <button key={t.id} onClick={() => onNav(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            background: isActive ? 'linear-gradient(135deg, rgba(167,139,250,0.28), rgba(34,211,238,0.14))' : 'none',
            border: isActive ? '1px solid rgba(167,139,250,0.35)' : '1px solid transparent',
            borderRadius: 100,
            cursor: 'pointer',
            padding: '7px 4px 6px', color: isActive ? '#d6c9ff' : G.faint,
            fontFamily: G.font,
            transition: 'all 0.25s ease',
          }}>
            <ion-icon name={isActive ? t.icon : `${t.icon}-outline`}
              style={{ fontSize: 20, filter: isActive ? 'drop-shadow(0 0 8px rgba(167,139,250,0.8))' : 'none' }}></ion-icon>
            <span style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: 0.4 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// Status header — greeting / page title
const ScreenHeader = ({ greeting, name, right, title, subtitle }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 4px 18px', position: 'relative' }}>
    {greeting ? (
      <div>
        <div style={{ ...eyebrow, fontSize: 9, marginBottom: 3 }}>WED, JUL 2</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>
          {greeting}, <span style={{
            background: `linear-gradient(135deg, ${G.violet}, ${G.cyan})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>{name}</span>
        </div>
      </div>
    ) : (
      <div>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 11, color: G.muted, marginTop: 2 }}>{subtitle}</div>}
      </div>
    )}
    {right}
  </div>
);

window.G = G;
window.glass = glass;
window.eyebrow = eyebrow;
window.monoNum = monoNum;
window.Aurora = Aurora;
window.AriaOrb = AriaOrb;
window.GlassPill = GlassPill;
window.SectionHead = SectionHead;
window.TabBar = TabBar;
window.ScreenHeader = ScreenHeader;

// Inject global keyframes once
if (typeof document !== 'undefined' && !document.getElementById('somniq-keyframes')) {
  const style = document.createElement('style');
  style.id = 'somniq-keyframes';
  style.textContent = `
    @keyframes breathe {
      0%, 100% { transform: translate(-50%, -50%) scale(0.96); opacity: 0.7; }
      50%      { transform: translate(-50%, -50%) scale(1.04); opacity: 1; }
    }
    @keyframes pulseRing {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(1.3); opacity: 0; }
    }
    @keyframes ariaSpin {
      to { transform: rotate(360deg); }
    }
    @keyframes recPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    @keyframes ambientDrift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(20px, -10px) scale(1.05); }
      66% { transform: translate(-15px, 15px) scale(0.97); }
    }
    @keyframes slowBreathe {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50%      { transform: scale(1.08); opacity: 0.8; }
    }
    @keyframes screenFadeIn {
      from { opacity: 0; transform: scale(0.985); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes auroraDrift {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20px, -30px); }
    }
  `;
  document.head.appendChild(style);
}
