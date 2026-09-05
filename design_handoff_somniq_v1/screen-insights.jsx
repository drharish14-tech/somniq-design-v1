// Insights screen — snoring analysis
const Insights = ({ onNav }) => {
  const G = window.G;
  const snoreData = [
    { hour: '11p', i: 0 }, { hour: '12', i: 0.1 }, { hour: '1', i: 0.15 },
    { hour: '2', i: 0.7 }, { hour: '3', i: 0.9 }, { hour: '4', i: 0.5 },
    { hour: '5', i: 0.1 }, { hour: '6a', i: 0 },
  ];
  const intensityBreakdown = [
    { label: 'Epic', count: 4, pct: 8, color: G.rose },
    { label: 'Loud', count: 12, pct: 26, color: G.amber },
    { label: 'Light', count: 19, pct: 40, color: '#60a5fa' },
    { label: 'Quiet', count: 12, pct: 26, color: G.green },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="cool" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        <window.ScreenHeader title="Insights" subtitle="Snoring & sleep analysis" />

        {/* Summary card */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <div style={window.eyebrow}>Last night</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>
            {[
              { v: '47', l: 'Events', c: G.ink },
              { v: '38m', l: 'Duration', c: G.ink },
              { v: 'Mod', l: 'Intensity', c: G.amber },
            ].map((s, i) => (
              <div key={s.l} style={{
                textAlign: 'center', position: 'relative',
                borderRight: i < 2 ? `1px solid ${G.hairline}` : 'none',
              }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: s.c, ...window.monoNum, letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ ...window.eyebrow, fontSize: 9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <window.SectionHead eye="Timeline" title="When you snored" />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120, marginTop: 14 }}>
            {snoreData.map((s, i) => {
              const pct = Math.max(s.i * 100, 4);
              const color = s.i > 0.6 ? G.rose : s.i > 0.3 ? G.amber : s.i > 0 ? 'rgba(251,191,36,0.4)' : 'rgba(255,255,255,0.06)';
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%' }}>
                  <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{
                      width: '100%', height: pct + '%', background: color, borderRadius: 4,
                      boxShadow: s.i > 0.6 ? `0 0 8px ${G.rose}88` : 'none',
                    }} />
                  </div>
                  <div style={{ fontSize: 10, color: G.faint, ...window.monoNum }}>{s.hour}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 14, justifyContent: 'center' }}>
            {[
              { c: G.rose, l: 'Heavy' },
              { c: G.amber, l: 'Moderate' },
              { c: 'rgba(251,191,36,0.4)', l: 'Light' },
            ].map(li => (
              <div key={li.l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: li.c }} />
                <span style={{ fontSize: 10, color: G.muted }}>{li.l}</span>
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 14,
            padding: 10, borderRadius: 12,
            background: `${G.amber}14`, border: `1px solid ${G.amber}33`,
          }}>
            <ion-icon name="warning-outline" style={{ fontSize: 14, color: G.amber }}></ion-icon>
            <span style={{ fontSize: 11, color: G.amber, fontWeight: 500 }}>
              Peak snoring: 2 – 4 AM (28 events)
            </span>
          </div>
        </div>

        {/* Intensity breakdown */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <window.SectionHead eye="Severity" title="Intensity breakdown" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
            {intensityBreakdown.map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 56, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 4, background: b.color, boxShadow: `0 0 6px ${b.color}66` }} />
                  <span style={{ fontSize: 11, color: G.muted }}>{b.label}</span>
                </div>
                <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: b.pct + '%', background: b.color, borderRadius: 4 }} />
                </div>
                <div style={{ width: 24, fontSize: 13, fontWeight: 700, ...window.monoNum, textAlign: 'right' }}>{b.count}</div>
                <div style={{ width: 28, fontSize: 10, color: G.faint, textAlign: 'right' }}>{b.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Aria analysis */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(167,139,250,0.18) 0%, rgba(34,211,238,0.05) 100%)',
          }),
          border: `1px solid ${G.violet}44`,
          padding: 16, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <window.AriaOrb size={26} />
            <div style={{ fontSize: 12, fontWeight: 600 }}>Aria</div>
            <div style={{ ...window.eyebrow, fontSize: 9 }}>· ANALYSIS</div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)' }}>
            47 events over 38 min, concentrated 2–4 AM. Pattern suggests your airway relaxes more in deeper phases — consistent with positional or mild obstructive snoring.
          </div>
        </div>

        {/* Recommendation */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.02) 100%)',
          }),
          border: `1px solid ${G.cyan}33`,
          padding: 18, marginBottom: 14,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 12,
            background: `${G.cyan}22`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
          }}>
            <ion-icon name="fitness-outline" style={{ fontSize: 18, color: G.cyan }}></ion-icon>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Reduce snoring</div>
          <div style={{ fontSize: 12, color: G.muted, lineHeight: 1.5, marginBottom: 14 }}>
            Side sleeping and head elevation could reduce snoring by 60–80%. Aria will track your progress nightly.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              flex: 1, background: 'rgba(255,255,255,0.95)', color: '#000',
              border: 'none', borderRadius: 12, padding: '10px 12px',
              fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}><ion-icon name="checkmark" style={{ fontSize: 14 }}></ion-icon> Start plan</button>
            <button style={{
              background: 'rgba(255,255,255,0.06)', color: G.ink,
              border: `1px solid ${G.border}`, borderRadius: 12, padding: '10px 14px',
              fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
            }}>Learn more</button>
          </div>
        </div>

        {/* OSA Risk */}
        <div style={{ ...window.glass(), padding: 16, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 28,
              background: `conic-gradient(${G.green} 25%, rgba(255,255,255,0.06) 25%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 23,
                background: '#0a0a0a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: G.green }}>LOW</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>OSA Risk Assessment</div>
              <div style={{ fontSize: 11, color: G.muted, lineHeight: 1.5 }}>
                No concerning breathing pauses. Snoring is positional and intensity-based.
              </div>
            </div>
          </div>
        </div>

        {/* Action rows */}
        {[
          { i: 'document-text-outline', c: G.violet, t: 'Share with Doctor', s: 'PDF report via WhatsApp' },
          { i: 'trending-up-outline', c: G.cyan, t: '7-Day Snoring Trend', s: 'Compare with previous nights' },
        ].map(a => (
          <div key={a.t} style={{
            ...window.glass({ borderRadius: 16 }),
            display: 'flex', alignItems: 'center', gap: 12,
            padding: 14, marginBottom: 8, cursor: 'pointer',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: `${a.c}22`, border: `1px solid ${a.c}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ion-icon name={a.i} style={{ fontSize: 14, color: a.c }}></ion-icon>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{a.t}</div>
              <div style={{ fontSize: 11, color: G.muted, marginTop: 1 }}>{a.s}</div>
            </div>
            <ion-icon name="chevron-forward" style={{ fontSize: 14, color: G.faint }}></ion-icon>
          </div>
        ))}
      </div>
      <window.TabBar active="insights" onNav={onNav} />
    </div>
  );
};

window.Insights = Insights;
