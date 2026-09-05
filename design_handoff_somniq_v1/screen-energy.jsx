// Energy screen — circadian map + drivers + Aria

const Energy = ({ onNav }) => {
  const G = window.G;
  const zones = [
    { s: 9, e: 11, label: 'Morning Peak', emoji: '🔥', tip: 'Best time for deep work, creative tasks, and important decisions', type: 'peak' },
    { s: 13, e: 15, label: 'Afternoon Dip', emoji: '😴', tip: 'Energy naturally dips — take a 15-min nap or go for a walk', type: 'dip' },
    { s: 17, e: 19, label: 'Evening Peak', emoji: '⚡', tip: 'Second wind — great for exercise or social activities', type: 'peak' },
    { s: 20, e: 22, label: 'Wind Down', emoji: '🌙', tip: 'Start dimming lights and avoiding screens for better sleep', type: 'dip' },
  ];
  const drivers = [
    { i: 'moon', c: G.green, l: 'Deep Sleep', d: '1h 42m — above target', v: '+18', pos: true },
    { i: 'time', c: G.cyan, l: 'Sleep Consistency', d: 'Within 20 min window', v: '+12', pos: true },
    { i: 'trending-down', c: G.amber, l: 'Sleep Debt', d: '2.8h remaining', v: '−8', pos: false },
    { i: 'volume-high', c: G.rose, l: 'Snoring Impact', d: '38 min disturbed sleep', v: '−5', pos: false },
  ];
  const curHour = 10;

  // Energy curve points
  const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  const energy = [25, 45, 68, 85, 92, 88, 72, 55, 42, 48, 62, 75, 80, 70, 55, 35, 20];
  const w = 320, h = 140;
  const stepX = w / (hours.length - 1);
  const toY = e => h - (e / 100) * (h - 24) - 12;
  let curve = '';
  for (let i = 0; i < hours.length; i++) {
    const x = i * stepX, y = toY(energy[i]);
    if (i === 0) curve += `M${x},${y}`;
    else {
      const px = (i - 1) * stepX, py = toY(energy[i - 1]);
      curve += ` C${px + stepX * 0.4},${py} ${x - stepX * 0.4},${y} ${x},${y}`;
    }
  }
  const area = `${curve} L${(hours.length - 1) * stepX},${h} L0,${h} Z`;
  const curIdx = 4;
  const cx = curIdx * stepX, cy = toY(energy[curIdx]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="dawn" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        <window.ScreenHeader title="Energy" subtitle="Tuesday, April 14" />

        {/* Hero */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
            <div>
              <div style={window.eyebrow}>Right now</div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 4 }}>
                <span style={{
                  fontSize: 56, fontWeight: 700, ...window.monoNum, lineHeight: 1, letterSpacing: '-0.04em',
                  background: `linear-gradient(135deg, ${G.amber}, ${G.rose})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>92</span>
                <span style={{ fontSize: 22, color: G.faint, fontWeight: 400, marginLeft: 4 }}>%</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: G.amber, marginTop: 4 }}>Peak Focus Zone</div>
            </div>
            <window.GlassPill color={G.amber} glow>🔥 HIGH ENERGY</window.GlassPill>
          </div>

          {/* Curve */}
          <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
            <defs>
              <linearGradient id="enArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={G.amber} stopOpacity="0.4" />
                <stop offset="100%" stopColor={G.amber} stopOpacity="0" />
              </linearGradient>
              <linearGradient id="enLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={G.green} />
                <stop offset="30%" stopColor={G.amber} />
                <stop offset="60%" stopColor={G.rose} />
                <stop offset="80%" stopColor={G.amber} />
                <stop offset="100%" stopColor={G.violet} />
              </linearGradient>
            </defs>
            {[20, 40, 60, 80].map(p => (
              <line key={p} x1={0} y1={toY(p)} x2={w} y2={toY(p)} stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
            ))}
            <path d={area} fill="url(#enArea)" />
            <path d={curve} fill="none" stroke="url(#enLine)" strokeWidth="2.5" strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 0 6px rgba(251,191,36,0.4))' }} />
            <line x1={cx} y1={cy} x2={cx} y2={h} stroke={G.amber} strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
            <circle cx={cx} cy={cy} r="8" fill={G.amber} opacity="0.25" />
            <circle cx={cx} cy={cy} r="4.5" fill={G.amber} />
            <circle cx={cx} cy={cy} r="2" fill="#fff" />
            {[6, 9, 12, 15, 18, 21].map(hr => {
              const idx = hours.indexOf(hr);
              if (idx < 0) return null;
              const x = idx * stepX;
              const label = hr < 12 ? hr + 'a' : hr === 12 ? '12p' : (hr - 12) + 'p';
              return <text key={hr} x={x} y={h - 0} fill="rgba(255,255,255,0.35)" fontSize="9" textAnchor="middle" fontFamily="Inter">{label}</text>;
            })}
          </svg>
          <div style={{ fontSize: 11, color: G.muted, marginTop: 8, textAlign: 'center' }}>
            Predictable pattern from sleep & circadian rhythm
          </div>
        </div>

        {/* Day timeline */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <window.SectionHead eye="Today" title="Day ahead" />
          <div style={{ marginTop: 8 }}>
            {zones.map((z, i) => {
              const isNow = curHour >= z.s && curHour < z.e;
              const isPast = curHour >= z.e;
              const fmt = h => h > 12 ? (h - 12) + ' PM' : h + ' AM';
              const dotColor = isNow ? G.amber : isPast ? G.faint : (z.type === 'peak' ? G.amber : G.violet);
              return (
                <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i < zones.length - 1 ? 16 : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: 5,
                      background: dotColor,
                      boxShadow: isNow ? `0 0 12px ${G.amber}` : 'none',
                      opacity: isPast ? 0.4 : 1,
                    }} />
                    {i < zones.length - 1 && <div style={{
                      width: 1, flex: 1, marginTop: 4,
                      background: isPast ? G.hairline : 'rgba(255,255,255,0.12)',
                    }} />}
                  </div>
                  <div style={{ flex: 1, opacity: isPast ? 0.5 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                      <span style={{ fontSize: 16 }}>{z.emoji}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: isNow ? G.amber : G.ink }}>{z.label}</span>
                      {isNow && <span style={{
                        fontSize: 8, fontWeight: 700, color: '#000', background: G.amber,
                        padding: '2px 6px', borderRadius: 4, letterSpacing: 0.8,
                      }}>NOW</span>}
                    </div>
                    <div style={{ ...window.monoNum, fontSize: 11, color: G.faint, marginBottom: 4 }}>
                      {fmt(z.s)} – {fmt(z.e)}
                    </div>
                    <div style={{ fontSize: 12, color: G.muted, lineHeight: 1.4 }}>{z.tip}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Drivers */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <window.SectionHead title="What's driving it" />
          <div>
            {drivers.map((d, i) => (
              <div key={d.l} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 0',
                borderTop: i > 0 ? `1px solid ${G.hairline}` : 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: `${d.c}22`, border: `1px solid ${d.c}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <ion-icon name={d.i} style={{ fontSize: 14, color: d.c }}></ion-icon>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{d.l}</div>
                  <div style={{ fontSize: 11, color: G.muted, marginTop: 1 }}>{d.d}</div>
                </div>
                <div style={{
                  ...window.monoNum, fontSize: 13, fontWeight: 700,
                  color: d.pos ? G.green : G.rose,
                  background: d.pos ? `${G.green}1a` : `${G.rose}1a`,
                  padding: '4px 10px', borderRadius: 8,
                }}>{d.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Aria */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(167,139,250,0.18) 0%, rgba(34,211,238,0.05) 100%)',
          }),
          border: `1px solid ${G.violet}44`,
          padding: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <window.AriaOrb size={26} />
            <div style={{ fontSize: 12, fontWeight: 600 }}>Aria</div>
            <div style={{ ...window.eyebrow, fontSize: 9 }}>· ENERGY TIP</div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)' }}>
            You're in your peak focus window now. Energy will dip ~2 PM — a 15-min nap could boost your afternoon by 25%.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button style={{
              flex: 1, background: 'rgba(255,255,255,0.06)', color: G.ink,
              border: `1px solid ${G.border}`, borderRadius: 12, padding: '9px 12px',
              fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}><ion-icon name="alarm" style={{ fontSize: 12 }}></ion-icon> Nap reminder</button>
            <button style={{
              flex: 1, background: 'rgba(255,255,255,0.06)', color: G.ink,
              border: `1px solid ${G.border}`, borderRadius: 12, padding: '9px 12px',
              fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}><ion-icon name="calendar" style={{ fontSize: 12 }}></ion-icon> Block focus</button>
          </div>
        </div>
      </div>
      <window.TabBar active="energy" onNav={onNav} />
    </div>
  );
};

window.Energy = Energy;
