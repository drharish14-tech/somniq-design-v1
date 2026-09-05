// Track screen — idle (tap to record) + active recording state

const TrackIdle = ({ onNav, onStart }) => {
  const G = window.G;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="violet" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        <window.ScreenHeader title="Track Sleep" subtitle="Tonight · Mic-based detection" />

        {/* Big mic button */}
        <div style={{ textAlign: 'center', padding: '28px 0 24px' }}>
          <div style={{ position: 'relative', width: 200, height: 200, margin: '0 auto' }}>
            {/* outer pulse rings */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: `1px solid ${G.violet}33`, animation: 'pulseRing 3s ease-out infinite',
            }} />
            <div style={{
              position: 'absolute', inset: 14, borderRadius: '50%',
              border: `1px solid ${G.violet}22`,
            }} />
            <div style={{
              position: 'absolute', inset: 28, borderRadius: '50%',
              border: `1px solid ${G.violet}11`,
            }} />
            {/* core button */}
            <button onClick={onStart} style={{
              position: 'absolute', inset: 44, borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, #c4b5fd, ${G.violet} 50%, #6d28d9)`,
              border: 'none', cursor: 'pointer',
              boxShadow: `0 12px 40px rgba(167,139,250,0.5), inset 0 1px 0 rgba(255,255,255,0.3)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ion-icon name="moon" style={{ fontSize: 44, color: '#fff' }}></ion-icon>
            </button>
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, marginTop: 18 }}>Tap to start</div>
          <div style={{ fontSize: 12, color: G.muted, marginTop: 6, padding: '0 32px', lineHeight: 1.5 }}>
            Clinical-grade snoring detection. 100% private — audio never leaves your phone.
          </div>
        </div>

        {/* Clinical ML engine */}
        <div style={{ ...window.glass({
          background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.02) 100%)',
          border: `1px solid ${G.cyan}33`,
        }), padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <ion-icon name="hardware-chip" style={{ fontSize: 16, color: G.cyan }}></ion-icon>
            <div style={{ fontSize: 12, fontWeight: 700, color: G.cyan }}>Clinical ML Engine v2</div>
            <div style={{ flex: 1 }} />
            <window.GlassPill color={G.cyan}>ON-DEVICE</window.GlassPill>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
            {[
              { v: '97.1%', l: 'Accuracy' },
              { v: '722KB', l: 'Model' },
              { v: '4-Class', l: 'Intensity' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center', padding: '8px 4px', background: 'rgba(255,255,255,0.03)', borderRadius: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700, ...window.monoNum }}>{s.v}</div>
                <div style={{ fontSize: 9, color: G.muted, marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
            {[
              { c: G.green, t: 'Noise-robust to 5dB SNR' },
              { c: G.cyan, t: 'Quiet · Light · Loud · Epic grading' },
              { c: G.amber, t: 'OSA pre-screening risk score' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 5, height: 5, borderRadius: 3, background: r.c, boxShadow: `0 0 6px ${r.c}` }} />
                <div style={{ fontSize: 11, color: G.muted }}>{r.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips grid */}
        <div style={{ ...window.glass(), padding: 16, marginBottom: 12 }}>
          <div style={{ ...window.eyebrow, marginBottom: 12 }}>Setup tips</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { i: 'battery-charging', c: G.green, t: 'Plug in charger' },
              { i: 'phone-portrait', c: G.cyan, t: 'Nightstand, face down' },
              { i: 'volume-low', c: G.amber, t: 'Quiet environment' },
              { i: 'wifi', c: G.violet, t: 'Keep phone unlocked' },
            ].map(t => (
              <div key={t.t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: `${t.c}22`, border: `1px solid ${t.c}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <ion-icon name={t.i} style={{ fontSize: 14, color: t.c }}></ion-icon>
                </div>
                <div style={{ fontSize: 11, color: G.muted }}>{t.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Passive tracking active */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.02) 100%)',
            border: `1px solid ${G.violet}33`,
          }),
          padding: 14, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: `${G.violet}22`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ion-icon name="shield-checkmark" style={{ fontSize: 16, color: G.violet }}></ion-icon>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: G.violet }}>Passive tracking active</div>
            <div style={{ fontSize: 11, color: G.muted, marginTop: 2 }}>Sleep debt updates daily without recording</div>
          </div>
        </div>
      </div>
      <window.TabBar active="track" onNav={onNav} />

      <style>{`
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
      `}</style>
    </div>
  );
};

const TrackRec = ({ onNav, elapsed = '0:23:47', onStop }) => {
  const G = window.G;
  // Synthetic waveform — gentler
  const bars = Array.from({ length: 50 }, (_, i) => {
    const isSnore = (i > 14 && i < 22) || (i > 34 && i < 42);
    return { h: isSnore ? 18 + Math.sin(i * 0.6) * 4 : 3 + Math.abs(Math.sin(i * 0.4)) * 5, snore: isSnore };
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      {/* Ambient breathing aurora — slower, deeper */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${G.violet}33 0%, transparent 60%)`,
        filter: 'blur(60px)',
        animation: 'slowBreathe 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '70%', left: '30%',
        width: 360, height: 360, borderRadius: '50%',
        background: `radial-gradient(circle, ${G.cyan}22 0%, transparent 70%)`,
        filter: 'blur(50px)',
        animation: 'ambientDrift 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '60%', right: '10%',
        width: 280, height: 280, borderRadius: '50%',
        background: `radial-gradient(circle, ${G.pink}1a 0%, transparent 70%)`,
        filter: 'blur(50px)',
        animation: 'ambientDrift 14s ease-in-out infinite reverse',
      }} />

      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        {/* Subtle recording badge */}
        <div style={{ textAlign: 'center', marginBottom: 6 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 100,
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${G.hairline}`,
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 3, background: G.green,
              boxShadow: `0 0 8px ${G.green}`,
              animation: 'recPulse 2s ease infinite',
            }} />
            <span style={{ ...window.eyebrow, fontSize: 9, color: G.muted }}>RECORDING · DO NOT DISTURB</span>
          </div>
        </div>

        {/* Hero — centered breathing orb with elapsed time */}
        <div style={{
          position: 'relative', height: 300,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 8,
        }}>
          {/* Breathing concentric rings */}
          {[280, 220, 160].map((size, i) => (
            <div key={size} style={{
              position: 'absolute',
              width: size, height: size, borderRadius: '50%',
              border: `1px solid ${G.violet}${i === 0 ? '11' : i === 1 ? '22' : '33'}`,
              animation: `breathe 6s ease-in-out infinite ${i * 0.7}s`,
            }} />
          ))}
          {/* Inner orb */}
          <div style={{
            width: 100, height: 100, borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${G.violet}88 0%, ${G.violet}22 50%, transparent 70%)`,
            filter: 'blur(8px)',
            animation: 'slowBreathe 6s ease-in-out infinite',
            position: 'absolute',
          }} />
          <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
            <div style={{ ...window.eyebrow, color: G.faint, marginBottom: 4 }}>ELAPSED</div>
            <div style={{
              fontSize: 56, fontWeight: 200, ...window.monoNum,
              letterSpacing: '-0.05em', lineHeight: 1,
              color: 'rgba(255,255,255,0.95)',
              textShadow: `0 0 32px ${G.violet}66`,
            }}>{elapsed}</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 14, padding: '6px 12px', borderRadius: 100,
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${G.violet}33`,
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            }}>
              <span style={{ fontSize: 12 }}>💤</span>
              <span style={{ fontSize: 11, color: G.violet, fontWeight: 600, letterSpacing: 0.5 }}>ASLEEP · DEEP</span>
            </div>
          </div>
        </div>

        {/* Quiet status row — current readings without dashboard feel */}
        <div style={{
          ...window.glass({ borderRadius: 18 }),
          padding: '14px 18px', marginBottom: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {[
            { l: 'Sleep', v: '5h 12m', c: G.violet },
            { l: 'Snoring', v: '12 ev', c: G.muted },
            { l: 'Eff.', v: '94%', c: G.green },
          ].map((s, i, arr) => (
            <React.Fragment key={s.l}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: s.c, ...window.monoNum }}>{s.v}</div>
                <div style={{ ...window.eyebrow, fontSize: 9, marginTop: 4 }}>{s.l}</div>
              </div>
              {i < arr.length - 1 && <div style={{ width: 1, height: 28, background: G.hairline }} />}
            </React.Fragment>
          ))}
        </div>

        {/* Quiet waveform — collapsed, ambient */}
        <div style={{ ...window.glass({ borderRadius: 18 }), padding: 14, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ ...window.eyebrow, fontSize: 9 }}>AUDIO · LISTENING</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: 3, background: G.violet, opacity: 0.6 }} />
                <span style={{ fontSize: 9, color: G.faint }}>Breath</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: 3, background: G.rose }} />
                <span style={{ fontSize: 9, color: G.faint }}>Snore</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 1.5, height: 32 }}>
            {bars.map((b, i) => (
              <div key={i} style={{
                flex: 1, height: b.h, borderRadius: 1,
                background: b.snore ? G.rose : 'rgba(167,139,250,0.5)',
                opacity: b.snore ? 0.85 : 0.7,
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        </div>

        {/* Aria — minimal, contemplative */}
        <div style={{
          ...window.glass({ borderRadius: 18 }),
          padding: 16, marginBottom: 18,
          background: 'linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(34,211,238,0.03) 100%)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <window.AriaOrb size={22} pulse />
            <div style={{ fontSize: 11, fontWeight: 600, color: G.muted, letterSpacing: 0.5 }}>Aria · whispering</div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', fontWeight: 300 }}>
            Deep sleep for 12 minutes. Snoring eased after you turned. You're recovering 45 minutes of debt tonight.
          </div>
        </div>

        {/* Stop button — quieter, more deliberate */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          <button onClick={onStop} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.06)',
            border: `1px solid ${G.border}`, borderRadius: 100,
            padding: '12px 28px', cursor: 'pointer',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            fontFamily: G.font,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: G.rose, boxShadow: `0 0 8px ${G.rose}` }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: G.ink, letterSpacing: 0.5 }}>End session</span>
          </button>
        </div>
      </div>
      <window.TabBar active="track" onNav={onNav} />
    </div>
  );
};

window.TrackIdle = TrackIdle;
window.TrackRec = TrackRec;
