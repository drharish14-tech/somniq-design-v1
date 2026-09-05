// Login + Report screens

const Login = ({ onContinue }) => {
  const G = window.G;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="violet" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto',
        padding: '64px 24px 40px',
        color: G.ink, fontFamily: G.font,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginTop: 60, marginBottom: 60 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 22, margin: '0 auto 20px',
            background: `linear-gradient(135deg, ${G.violet} 0%, ${G.cyan} 100%)`,
            boxShadow: `0 8px 32px ${G.violet}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 36, fontWeight: 800, color: '#fff',
            letterSpacing: '-0.04em',
          }}>S</div>
          <div style={{
            fontSize: 32, fontWeight: 800, letterSpacing: '0.18em',
            background: `linear-gradient(135deg, #fff 0%, ${G.violet} 100%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>SOMNIQ</div>
          <div style={{ fontSize: 13, color: G.muted, marginTop: 6, letterSpacing: 0.5 }}>
            Your Sleep Agent
          </div>
        </div>

        {/* Form */}
        <div style={{ ...window.glass(), padding: 24, marginBottom: 16 }}>
          <div style={{ ...window.eyebrow, marginBottom: 10 }}>Phone Number</div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${G.border}`,
            borderRadius: 14, padding: '12px 14px', marginBottom: 16,
          }}>
            <div style={{ ...window.monoNum, fontSize: 14, fontWeight: 600 }}>+91</div>
            <div style={{ width: 1, height: 16, background: G.border }} />
            <input placeholder="98765 43210" style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              color: G.ink, fontSize: 14, fontFamily: 'inherit', ...window.monoNum,
            }} />
          </div>

          <button onClick={onContinue} style={{
            width: '100%', padding: '14px',
            background: `linear-gradient(135deg, ${G.violet}, ${G.cyan})`,
            border: 'none', borderRadius: 14,
            color: '#fff', fontSize: 14, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: `0 8px 24px ${G.violet}44`,
            marginBottom: 14,
          }}>
            Continue with Phone
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '8px 0' }}>
            <div style={{ flex: 1, height: 1, background: G.hairline }} />
            <span style={{ fontSize: 11, color: G.faint }}>or</span>
            <div style={{ flex: 1, height: 1, background: G.hairline }} />
          </div>

          <button onClick={onContinue} style={{
            width: '100%', padding: '12px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${G.border}`, borderRadius: 14,
            color: G.ink, fontSize: 13, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: 4, background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: '#000',
            }}>G</div>
            Continue with Google
          </button>
        </div>

        <button onClick={onContinue} style={{
          padding: '12px',
          background: 'transparent',
          border: `1px dashed ${G.border}`, borderRadius: 14,
          color: G.muted, fontSize: 12, fontWeight: 500,
          cursor: 'pointer', fontFamily: 'inherit',
          letterSpacing: 0.5,
        }}>Try Demo</button>

        <div style={{ flex: 1 }} />

        <div style={{ textAlign: 'center', fontSize: 11, color: G.faint }}>
          New here? <span style={{ color: G.violet, cursor: 'pointer', fontWeight: 600 }} onClick={onContinue}>Create account</span>
        </div>
      </div>
    </div>
  );
};

const Report = ({ onNav }) => {
  const G = window.G;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="violet" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        {/* Header with back */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 18 }}>
          <button onClick={() => onNav('track')} style={{
            ...window.glass({ borderRadius: 12 }),
            width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 0,
          }}>
            <ion-icon name="arrow-back" style={{ fontSize: 16, color: G.ink }}></ion-icon>
          </button>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>Sleep Report</div>
            <div style={{ fontSize: 11, color: G.muted, marginTop: 2 }}>11:18 PM – 6:42 AM</div>
          </div>
        </div>

        {/* Hero score */}
        <div style={{ ...window.glass(), padding: 22, marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 160, height: 160,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${G.green}33 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }} />
          <div style={{ position: 'relative' }}>
            <div style={window.eyebrow}>Sleep Score</div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 4 }}>
              <span style={{
                fontSize: 64, fontWeight: 700, ...window.monoNum, lineHeight: 1, letterSpacing: '-0.04em',
                background: `linear-gradient(135deg, ${G.green}, ${G.cyan})`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>82</span>
              <span style={{ fontSize: 18, color: G.faint, marginLeft: 6 }}>/100</span>
              <div style={{ flex: 1 }} />
              <window.GlassPill color={G.green}>↑ +8</window.GlassPill>
            </div>
            <div style={{ fontSize: 13, color: G.muted, marginTop: 8 }}>Above your 7-night average</div>
          </div>
        </div>

        {/* Session summary */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <div style={window.eyebrow}>Session summary</div>
          <div style={{ ...window.monoNum, fontSize: 11, color: G.faint, marginTop: 2 }}>11:18 PM – 6:42 AM</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 14 }}>
            {[
              { v: '47', l: 'Events' },
              { v: '38m', l: 'Snoring' },
              { v: 'Mod', l: 'Intensity', c: G.amber },
            ].map((s, i) => (
              <div key={s.l} style={{
                textAlign: 'center',
                borderRight: i < 2 ? `1px solid ${G.hairline}` : 'none',
              }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: s.c || G.ink, ...window.monoNum }}>{s.v}</div>
                <div style={{ ...window.eyebrow, fontSize: 9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sleep duration */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.02) 100%)',
          }),
          border: `1px solid ${G.violet}33`,
          padding: 18, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: `${G.violet}22`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ion-icon name="bed" style={{ fontSize: 14, color: G.violet }}></ion-icon>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Sleep Duration</div>
              <div style={{ fontSize: 10, color: G.muted, marginTop: 2 }}>Audio-Based Detection</div>
            </div>
            <div style={{ ...window.monoNum, fontSize: 22, fontWeight: 700, color: G.violet }}>7h 12m</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 14 }}>
            {[
              { v: '94%', l: 'Efficiency', c: G.green },
              { v: '14m', l: 'Fall Asleep', c: G.cyan },
              { v: '4', l: 'Wake-ups', c: G.amber },
            ].map(s => (
              <div key={s.l} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 10, padding: 10, textAlign: 'center',
              }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: s.c, ...window.monoNum }}>{s.v}</div>
                <div style={{ fontSize: 9, color: G.muted, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { l: 'Total Recording', v: '7h 24m' },
              { l: 'Time Asleep', v: '7h 12m', c: G.violet },
              { l: 'Time Awake (WASO)', v: '12m', c: G.amber },
              { l: 'Longest Sleep', v: '3h 18m', c: G.green },
              { l: 'Fell Asleep', v: '11:32 PM' },
              { l: 'Final Wake', v: '6:42 AM' },
            ].map((r, i) => (
              <div key={r.l} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '6px 0',
                borderTop: i > 0 ? `1px solid ${G.hairline}` : 'none',
              }}>
                <span style={{ fontSize: 11, color: G.muted }}>{r.l}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: r.c || G.ink, ...window.monoNum }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk score */}
        <div style={{
          ...window.glass(),
          border: `1px solid ${G.green}44`,
          padding: 18, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 12,
              background: `${G.green}22`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ion-icon name="shield-checkmark" style={{ fontSize: 18, color: G.green }}></ion-icon>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Sleep Risk Score</div>
              <div style={{ fontSize: 10, color: G.muted, marginTop: 2 }}>OSA Pre-Screening</div>
            </div>
            <div style={{
              padding: '6px 12px', borderRadius: 12,
              background: `${G.green}22`, border: `1px solid ${G.green}33`,
            }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: G.green, ...window.monoNum }}>18</span>
              <span style={{ fontSize: 11, color: G.faint, marginLeft: 2 }}>/100</span>
            </div>
          </div>
          <div style={{ position: 'relative', height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
            <div style={{
              height: '100%', width: '18%',
              background: `linear-gradient(90deg, ${G.green}, ${G.cyan})`,
              borderRadius: 3,
              boxShadow: `0 0 8px ${G.green}88`,
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: G.faint, fontWeight: 600, marginBottom: 14 }}>
            <span style={{ color: G.green }}>LOW</span>
            <span>MODERATE</span>
            <span>HIGH</span>
          </div>
          <div style={{ fontSize: 12, color: G.ink, lineHeight: 1.5 }}>
            Low risk pattern. Continue monitoring for 7 nights for a complete picture.
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
            <div style={{ ...window.eyebrow, fontSize: 9 }}>· SESSION ANALYSIS</div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)' }}>
            7h 12m with 94% efficiency. Risk score 18/100 (low). 47 events concentrated 2–4 AM. Fell asleep in 14 min — within your normal range.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => onNav('insights')} style={{
              flex: 1, background: 'rgba(255,255,255,0.06)', color: G.ink,
              border: `1px solid ${G.border}`, borderRadius: 12, padding: '9px 12px',
              fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}><ion-icon name="pulse-outline" style={{ fontSize: 12 }}></ion-icon> Insights</button>
            <button style={{
              flex: 1, background: 'rgba(255,255,255,0.06)', color: G.ink,
              border: `1px solid ${G.border}`, borderRadius: 12, padding: '9px 12px',
              fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}><ion-icon name="share-outline" style={{ fontSize: 12 }}></ion-icon> Share</button>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => onNav('track')} style={{
            flex: 1, background: `linear-gradient(135deg, ${G.violet}, ${G.cyan})`,
            border: 'none', borderRadius: 14, padding: '12px',
            color: '#fff', fontSize: 13, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <ion-icon name="moon" style={{ fontSize: 14 }}></ion-icon>
            Track Again
          </button>
          <button onClick={() => onNav('dashboard')} style={{
            flex: 1, background: 'rgba(255,255,255,0.06)',
            border: `1px solid ${G.border}`, borderRadius: 14, padding: '12px',
            color: G.ink, fontSize: 13, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
          }}>Dashboard</button>
        </div>
      </div>
    </div>
  );
};

window.Login = Login;
window.Report = Report;
