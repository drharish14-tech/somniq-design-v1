// Profile screen
const Profile = ({ onNav }) => {
  const G = window.G;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      <window.Aurora palette="violet" />
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        padding: '54px 18px 100px', color: G.ink, fontFamily: G.font,
      }}>
        <window.ScreenHeader title="Profile" />

        {/* User card */}
        <div style={{ ...window.glass(), padding: 24, textAlign: 'center', marginBottom: 14 }}>
          <div style={{
            width: 80, height: 80, borderRadius: 40, margin: '0 auto 14px',
            background: `conic-gradient(from 0deg, ${G.violet}, ${G.cyan}, ${G.pink}, ${G.violet})`,
            padding: 3,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: 37, background: '#0a0a0a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, fontWeight: 700,
              background: `linear-gradient(135deg, ${G.violet}, ${G.cyan})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>H</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>Harish</div>
          <div style={{ fontSize: 12, color: G.muted, marginTop: 3 }}>drharish14@gmail.com</div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 12,
            background: 'rgba(255,255,255,0.06)', border: `1px solid ${G.border}`,
            padding: '5px 12px', borderRadius: 100,
          }}>
            <ion-icon name="star" style={{ fontSize: 11, color: G.amber }}></ion-icon>
            <span style={{ fontSize: 11, fontWeight: 600 }}>Free Plan</span>
          </div>
        </div>

        {/* Upgrade CTA */}
        <div style={{
          ...window.glass({
            background: 'linear-gradient(135deg, rgba(167,139,250,0.25) 0%, rgba(236,72,153,0.15) 100%)',
          }),
          border: `1px solid ${G.violet}55`,
          padding: 18, marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: `linear-gradient(135deg, ${G.violet}, ${G.pink})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 4px 16px ${G.violet}66`,
          }}>
            <ion-icon name="sparkles" style={{ fontSize: 20, color: '#fff' }}></ion-icon>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Upgrade to Plus</div>
            <div style={{ fontSize: 11, color: G.muted, marginTop: 2 }}>AI coaching · unlimited history · sleep reports</div>
          </div>
          <button style={{
            background: '#fff', color: '#000', border: 'none',
            borderRadius: 100, padding: '8px 14px',
            fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            ...window.monoNum,
          }}>₹499/mo</button>
        </div>

        {/* Sleep profile */}
        <div style={{ ...window.glass(), padding: 18, marginBottom: 14 }}>
          <window.SectionHead eye="Goals" title="Sleep profile" />
          <div style={{ marginTop: 8 }}>
            {[
              { l: 'Ideal Sleep', v: '8h' },
              { l: 'Typical Bedtime', v: '11:30 PM' },
              { l: 'Typical Wake', v: '6:30 AM' },
              { l: 'Concerns', v: 'Snoring · Fatigue' },
            ].map((r, i) => (
              <div key={r.l} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0',
                borderTop: i > 0 ? `1px solid ${G.hairline}` : 'none',
              }}>
                <span style={{ fontSize: 13, color: G.muted }}>{r.l}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div style={{ ...window.glass(), padding: 6, marginBottom: 14 }}>
          {[
            { i: 'notifications-outline', t: 'Notifications', s: 'Morning debrief, coaching tips' },
            { i: 'fitness-outline', t: 'Health Connect', s: 'Connected', badge: G.green },
            { i: 'shield-checkmark-outline', t: 'Privacy', s: 'Audio never leaves device' },
            { i: 'download-outline', t: 'Export Data', s: 'CSV, PDF reports' },
            { i: 'help-circle-outline', t: 'Help & Support', s: 'support@somniq.ai' },
          ].map((s, i, arr) => (
            <div key={s.t} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: 14, cursor: 'pointer',
              borderTop: i > 0 ? `1px solid ${G.hairline}` : 'none',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: 'rgba(255,255,255,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ion-icon name={s.i} style={{ fontSize: 16, color: G.muted }}></ion-icon>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{s.t}</div>
                <div style={{ fontSize: 11, color: G.muted, marginTop: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {s.badge && <span style={{ width: 6, height: 6, borderRadius: 3, background: s.badge, boxShadow: `0 0 6px ${s.badge}` }} />}
                  {s.s}
                </div>
              </div>
              <ion-icon name="chevron-forward" style={{ fontSize: 14, color: G.faint }}></ion-icon>
            </div>
          ))}
        </div>

        {/* Sign out */}
        <button onClick={() => onNav('login')} style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          background: 'rgba(251,113,133,0.08)', border: `1px solid ${G.rose}33`,
          color: G.rose, padding: '14px',
          borderRadius: 14, cursor: 'pointer', fontFamily: 'inherit',
          fontSize: 13, fontWeight: 600, marginBottom: 14,
        }}>
          <ion-icon name="log-out-outline" style={{ fontSize: 16 }}></ion-icon>
          Sign Out
        </button>

        <div style={{ textAlign: 'center', fontSize: 10, color: G.faint }}>SOMNIQ v1.0.0</div>
      </div>
      <window.TabBar active="profile" onNav={onNav} />
    </div>
  );
};

window.Profile = Profile;
