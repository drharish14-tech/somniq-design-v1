// Dashboard (Agent tab) — wearable-free, phone-pattern + mic SOMNIQ
const Dashboard = ({ onNav }) => {
  const G = window.G;
  const [scoreOpen, setScoreOpen] = React.useState(false);
  const scoreParts = [
    { l: 'Duration', s: '7h 12m of 8h goal', pct: 0.90, c: G.cyan, pts: '27/30' },
    { l: 'Continuity', s: '1 wake · 4:02 am unlock', pct: 0.60, c: G.rose, pts: '15/25' },
    { l: 'Consistency', s: 'Bedtime ±18m of usual', pct: 0.92, c: G.green, pts: '23/25' },
    { l: 'Snoring', s: '47 events · moderate', pct: 0.45, c: G.amber, pts: '9/20' },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="violet" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        {/* Header row — v4 style */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 4px 22px' }}>
          <div>
            <div style={{ ...window.eyebrow, fontSize: 9, marginBottom: 3 }}>WED, JUL 2</div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Good morning, <span style={{
                background: `linear-gradient(135deg, ${G.violet}, ${G.cyan})`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Harish</span>
            </div>
          </div>
          <div onClick={() => onNav('profile')} style={{
            width: 36, height: 36, borderRadius: 18, cursor: 'pointer',
            background: `conic-gradient(from 0deg, ${G.violet}, ${G.cyan}, ${G.pink}, ${G.violet})`,
            padding: 2,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: 16, background: '#0a0a0a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 700, color: '#fff',
            }}>H</div>
          </div>
        </div>

        {/* Sleep debt hero — v4 orb */}
        <div style={{ ...window.glass(), padding: '26px 24px 24px', marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Micro-stats flanking the orb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%' }}>
              <div style={{ flex: 1, minWidth: 0, textAlign: 'center' }}>
                <div style={{ ...window.monoNum, fontSize: 13, fontWeight: 600, color: G.cyan, whiteSpace: 'nowrap' }}>7h 12m</div>
                <div style={{ ...window.eyebrow, fontSize: 7.5, letterSpacing: 1.2, marginTop: 3, whiteSpace: 'nowrap' }}>LAST NIGHT</div>
              </div>
              {/* Debt orb — vivid sphere */}
              <div style={{ position: 'relative', width: 170, height: 170, flexShrink: 0 }}>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: `conic-gradient(from 0deg, ${G.violet}, ${G.cyan}, ${G.pink}, ${G.violet})`,
                  animation: 'ariaSpin 10s linear infinite',
                  filter: 'saturate(1.3)',
                }} />
                <div style={{
                  position: 'absolute', inset: -18, borderRadius: '50%',
                  background: `conic-gradient(from 0deg, ${G.violet}, ${G.cyan}, ${G.pink}, ${G.violet})`,
                  filter: 'blur(26px)', opacity: 0.55,
                  animation: 'ariaSpin 10s linear infinite',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', inset: 4, borderRadius: '50%',
                  background: `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.16) 0%, rgba(20,16,40,0.96) 42%, #07050f 100%)`,
                  boxShadow: 'inset 0 2px 12px rgba(255,255,255,0.12), inset 0 -14px 30px rgba(124,58,237,0.35)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{
                      fontSize: 52, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.045em',
                      fontFamily: G.font,
                      background: `linear-gradient(135deg, #fff 30%, ${G.violet})`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      filter: `drop-shadow(0 0 18px ${G.violet}66)`,
                    }}>2.8</span>
                    <span style={{ fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginLeft: 2, fontFamily: G.font }}>h</span>
                  </div>
                  <div style={{ ...window.eyebrow, fontSize: 8.5, marginTop: 7, color: 'rgba(255,255,255,0.6)' }}>HOURS OF DEBT</div>
                </div>
              </div>
              <div onClick={() => setScoreOpen(o => !o)} style={{ flex: 1, minWidth: 0, textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ ...window.monoNum, fontSize: 13, fontWeight: 600, color: G.violet, whiteSpace: 'nowrap' }}>74</div>
                <div style={{ ...window.eyebrow, fontSize: 7.5, letterSpacing: 1.2, marginTop: 3, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  SCORE
                  <ion-icon name={scoreOpen ? 'chevron-up' : 'chevron-down'} style={{ fontSize: 9, color: G.faint }}></ion-icon>
                </div>
              </div>
            </div>

            {/* Score breakdown — expands on tap */}
            {scoreOpen && (
              <div style={{ width: '100%', marginTop: 16, paddingTop: 14, borderTop: `1px solid ${G.hairline}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <div style={{ ...window.eyebrow, fontSize: 8.5 }}>WHY 74</div>
                  <div style={{ ...window.monoNum, fontSize: 10, color: G.faint }}>74/100</div>
                </div>
                {scoreParts.map(p => (
                  <div key={p.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0' }}>
                    <div style={{ width: 74, fontSize: 11, fontWeight: 600, color: G.ink, flexShrink: 0 }}>{p.l}</div>
                    <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                      <div style={{ width: `${p.pct * 100}%`, height: '100%', borderRadius: 2, background: p.c, boxShadow: `0 0 6px ${p.c}88` }}></div>
                    </div>
                    <div style={{ ...window.monoNum, fontSize: 10, color: p.c, width: 38, textAlign: 'right', flexShrink: 0 }}>{p.pts}</div>
                  </div>
                ))}
                <div style={{ fontSize: 11, color: G.muted, lineHeight: 1.5, marginTop: 8 }}>
                  The 4am wake and snoring cost you the most — both are fixable.
                </div>
              </div>
            )}
            <div style={{ fontSize: 13, fontWeight: 600, color: G.green, marginTop: 16 }}>↓ 1.3h recovered this week</div>
            <div style={{ fontSize: 12.5, color: G.muted, marginTop: 5, lineHeight: 1.45, textAlign: 'center' }}>
              At this pace you're debt-free by <span style={{ color: G.ink, fontWeight: 600 }}>Sat, Jul 12</span>.
            </div>
          </div>
        </div>

        {/* Aria card */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(167,139,250,0.18) 0%, rgba(34,211,238,0.05) 100%)',
            border: 'rgba(167,139,250,0.25)',
          }),
          border: `1px solid rgba(167,139,250,0.25)`,
          padding: 18, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <window.AriaOrb size={28} />
            <div style={{ fontSize: 13, fontWeight: 600 }}>Aria</div>
            <div style={{ ...window.eyebrow, fontSize: 9 }}>· MORNING DEBRIEF</div>
            <div style={{ flex: 1 }} />
            <div style={{ ...window.monoNum, fontSize: 10, color: G.faint }}>6:42 AM</div>
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)' }}>
            From your phone patterns, you slept ~<strong>7h 12m</strong>. Screen locked at 11:18 PM, first unlock 6:30 AM. Debt trending down nicely — caffeine after 2pm may explain the 4am wake.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button style={{
              flex: 1, background: 'rgba(255,255,255,0.95)', color: '#000',
              border: 'none', borderRadius: 14, padding: '10px 14px',
              fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            }}>Set 1pm cutoff</button>
            <button style={{
              background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)',
              border: `1px solid ${G.border}`, borderRadius: 14, padding: '10px 14px',
              fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
            }}>Tell me more</button>
          </div>
        </div>

        {/* Energy now — actionable timeline */}
        <div onClick={() => onNav('energy')} style={{ ...window.glass(), padding: 18, marginBottom: 14, cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <div>
              <div style={window.eyebrow}>Energy now</div>
              <div style={{ fontSize: 26, fontWeight: 700, ...window.monoNum, marginTop: 2 }}>
                92<span style={{ fontSize: 13, color: G.faint, fontWeight: 500 }}>%</span>
              </div>
            </div>
            <window.GlassPill color={G.amber}>🔥 PEAK · UNTIL 12:30</window.GlassPill>
          </div>
          <svg width="100%" height="64" viewBox="0 0 300 64" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="dCurve" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(251,191,36,0.5)" />
                <stop offset="100%" stopColor="rgba(251,191,36,0)" />
              </linearGradient>
            </defs>
            {/* Dip zone shading (2–4 pm) */}
            <rect x="160" y="0" width="50" height="48" fill="rgba(251,113,133,0.08)" />
            <path d="M 0 32 Q 40 14, 80 12 T 160 20 T 240 32 T 300 24 L 300 48 L 0 48 Z" fill="url(#dCurve)" />
            <path d="M 0 32 Q 40 14, 80 12 T 160 20 T 240 32 T 300 24" fill="none" stroke={G.amber} strokeWidth="1.5"
              style={{ filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.5))' }} />
            {/* Now marker */}
            <line x1="80" y1="4" x2="80" y2="48" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="80" cy="12" r="3.5" fill="#fff" stroke={G.amber} strokeWidth="1.5" />
            {/* Time axis */}
            {[
              { x: 0, t: '6a' }, { x: 80, t: 'now' }, { x: 160, t: '2p' },
              { x: 210, t: '4p' }, { x: 300, t: '10p' },
            ].map(m => (
              <text key={m.t} x={m.x} y="61" fontSize="8.5" fill={m.t === 'now' ? '#fff' : 'rgba(255,255,255,0.35)'}
                fontWeight={m.t === 'now' ? '700' : '400'}
                textAnchor={m.x === 0 ? 'start' : m.x === 300 ? 'end' : 'middle'}
                fontFamily="'JetBrains Mono', monospace">{m.t}</text>
            ))}
          </svg>
          {/* Actionable windows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
            {[
              { dot: G.amber, txt: <span><strong>Now – 12:30</strong> · deep work window — hardest task first</span> },
              { dot: G.rose, txt: <span><strong>2:00 – 4:00</strong> · dip — meetings, email, or a 20-min walk</span> },
              { dot: G.cyan, txt: <span><strong>4:30</strong> · second wind — good for review &amp; planning</span> },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: r.dot, boxShadow: `0 0 6px ${r.dot}`, flexShrink: 0 }}></span>
                <span style={{ fontSize: 11.5, color: G.muted, lineHeight: 1.4 }}>{r.txt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 7-day debt trend */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <window.SectionHead eye="7 days" title="Debt trend" />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80, marginTop: 8 }}>
            {[
              { d: 'M', h: 4.1, c: G.rose }, { d: 'T', h: 3.8, c: G.rose },
              { d: 'W', h: 3.5, c: G.amber }, { d: 'T', h: 3.9, c: G.amber },
              { d: 'F', h: 3.2, c: G.amber }, { d: 'S', h: 3.0, c: G.amber },
              { d: 'S', h: 2.8, c: G.green },
            ].map((b, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ fontSize: 9, ...window.monoNum, color: b.c }}>{b.h}</div>
                <div style={{ width: '100%', height: b.h * 12, background: b.c, borderRadius: 4, opacity: 0.85 }} />
                <div style={{ fontSize: 10, color: G.faint }}>{b.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Source / privacy strip */}
        <div style={{ ...window.glass({ borderRadius: 14 }), padding: 12, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <ion-icon name="phone-portrait-outline" style={{ fontSize: 16, color: G.cyan }}></ion-icon>
          <div style={{ flex: 1, fontSize: 11, color: G.muted }}>Tracked from phone patterns · No wearable</div>
          <window.GlassPill color={G.violet}>UPGRADE</window.GlassPill>
        </div>

        {/* Ask Aria */}
        <div style={{ ...window.glass({ borderRadius: 100 }), display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px' }}>
          <ion-icon name="sparkles" style={{ fontSize: 14, color: G.violet }}></ion-icon>
          <div style={{ flex: 1, fontSize: 13, color: G.faint }}>Ask Aria…</div>
          <div style={{
            width: 30, height: 30, borderRadius: 15,
            background: `linear-gradient(135deg, ${G.violet}, ${G.cyan})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ion-icon name="mic" style={{ fontSize: 14, color: '#fff' }}></ion-icon>
          </div>
        </div>
      </div>
      <window.TabBar active="dashboard" onNav={onNav} />
    </div>
  );
};

window.Dashboard = Dashboard;
