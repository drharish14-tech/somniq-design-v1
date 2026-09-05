# Handoff: SOMNIQ v1 — "Glass Depth" Sleep Tracking App

## Overview
SOMNIQ is a **wearable-free sleep tracking app**: it infers sleep from phone lock/unlock patterns and detects snoring via the phone microphone (100% on-device). An AI coach named **Aria** delivers morning debriefs and actionable nudges. Core concepts: **Sleep Debt** (hero metric), **Sleep Score** (0–100), **Energy/circadian curve**, and **snoring analysis** with OSA risk screening.

This package contains the final approved v1 design (updated with the vivid debt orb, tappable score breakdown, and actionable energy timeline).

## About the Design Files
The files in this bundle are **design references created in HTML/React (inline Babel JSX)** — prototypes showing intended look and behavior, **not production code to copy directly**. Your task is to **recreate these designs 1:1 in the target codebase's environment** (e.g. React Native, Flutter, SwiftUI, Jetpack Compose) using its established patterns. If no codebase exists yet, choose the framework best suited for a cross-platform mobile app (React Native or Flutter recommended) and implement the designs there.

## Fidelity
**High-fidelity (hifi).** These are pixel-perfect mockups with final colors, typography, spacing, copy, and interactions. Recreate the UI **exactly** — the client requires 100% design fidelity. All values below are exact; when in doubt, read the JSX source files, which are the source of truth (all styles are inline and explicit).

## Design Tokens (exact values — see `somniq-system.jsx`)

### Colors
| Token | Value | Use |
|---|---|---|
| bg | `#000` | screen background |
| ink | `#fff` | primary text |
| muted | `rgba(255,255,255,0.55)` | secondary text |
| faint | `rgba(255,255,255,0.35)` | tertiary text, inactive icons |
| hairline | `rgba(255,255,255,0.08)` | dividers |
| border | `rgba(255,255,255,0.1)` | glass card borders |
| violet | `#a78bfa` | primary accent, score |
| cyan | `#22d3ee` | secondary accent, duration, PASSIVE status |
| pink | `#ec4899` | gradient stop only |
| green | `#34d399` | positive / recovered / low risk |
| amber | `#fbbf24` | energy, warnings, moderate |
| rose | `#fb7185` | negative / high debt / sign-out |

### Glass card (the core surface — used everywhere)
- background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`
- border: `1px solid rgba(255,255,255,0.1)`
- backdrop blur: `20px`
- border-radius: `22px` (default; pills `100px`, small cards `14–18px`)
- Hero cards get a top highlight line: 1px, `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`

### Typography
- UI font: **Inter** (Google Fonts) — weights 300–800; fallback `-apple-system, system-ui, sans-serif`
- Numeric font: **JetBrains Mono** with `font-variant-numeric: tabular-nums` — ALL data values (times, scores, percentages)
- Eyebrow style: 9px, letter-spacing 2.5, weight 600, uppercase, muted color
- Screen titles: 22–24px / 700 / letter-spacing −0.02em
- Card titles: 17px / 700; body 13–13.5px / line-height ~1.55; captions 10–11px

### Aurora background (every screen)
2–3 large radial-gradient blobs (`radial-gradient(circle, <color> 0%, transparent 70%)`), blur 40px, absolutely positioned. Palettes: **violet** (dashboard/profile: violet 0.55, cyan 0.4, pink 0.3), **cool** (track: cyan 0.45, indigo 0.4), **dawn** (report: amber/pink/violet).

### Key animations
- `ariaSpin`: 360° rotation, linear — 8s (Aria avatar), 10s (debt orb)
- `slowBreathe`: scale 1→1.08, opacity 0.5→0.8, 5–6s ease-in-out
- `recPulse`: opacity 1→0.4, for recording dot
- Screen transitions: fade + scale 0.985→1

## Screens / Views
Frame: iPhone 390×844, dark. Content scrolls under a floating tab bar. Screen padding: `54px 18px 100px`.

### 1. Login (`screen-login-report.jsx`)
Logo orb, "SOMNIQ" wordmark, tagline, Google/Apple sign-in buttons, privacy note. Dark with violet aurora.

### 2. Dashboard "Agent" tab (`screen-dashboard.jsx`) — the money screen
Top → bottom:
1. **Header**: eyebrow date "WED, JUL 2" + "Good morning, Harish" (name in violet→cyan gradient text, 24px/700). Right: 36px avatar circle — conic-gradient ring (violet→cyan→pink), 2px padding, dark inner circle with initial "H". Tap → Profile.
2. **Sleep-debt hero card** (glass, padding 26/24/24):
   - Centered **170px orb**: rotating conic-gradient ring (violet→cyan→pink→violet, `ariaSpin` 10s, saturate 1.3) + same conic gradient at inset −18px, blur 26px, opacity 0.55 as halo + inner sphere (inset 4px): `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.16), rgba(20,16,40,0.96) 42%, #07050f)`, inset shadows top-white/bottom-violet.
   - Inside orb: "2.8" 52px/800, letter-spacing −0.045em, gradient fill white→violet, violet glow; "h" 24px/600 50% white; eyebrow "HOURS OF DEBT".
   - Flanking micro-stats (flex 1 each, centered, nowrap): left "7h 12m / LAST NIGHT" (cyan, JetBrains Mono 13px), right "74 / SCORE ⌄" (violet) — **tappable**.
   - **Score breakdown** (expands on score tap, top hairline divider): "WHY 74" + "74/100"; 4 rows (label 74px wide / 4px progress bar with glow / points right-aligned): Duration 90% cyan 27/30 · Continuity 60% rose 15/25 · Consistency 92% green 23/25 · Snoring 45% amber 9/20; caption "The 4am wake and snoring cost you the most — both are fixable."
   - Below: "↓ 1.3h recovered this week" (green 13px/600) and "At this pace you're debt-free by **Sat, Jul 12**."
3. **Aria card** (violet-tinted glass: `linear-gradient(135deg, rgba(167,139,250,0.18), rgba(34,211,238,0.05))`, violet border 0.25): Aria orb avatar (28px conic ring, black center "A", spins 8s), "Aria · MORNING DEBRIEF · 6:42 AM"; body copy re phone patterns; buttons "Set 1pm cutoff" (white pill, black text) + "Tell me more" (ghost).
4. **Energy card** (tap → Energy screen): "Energy now / 92%" + amber pill "🔥 PEAK · UNTIL 12:30"; SVG curve (amber stroke 1.5 with glow, gradient fill below, rose-shaded dip zone 2–4p, dashed white "now" marker line + white dot); JetBrains Mono time axis 6a·now·2p·4p·10p; 3 bullet rows with glowing 6px dots: amber "Now – 12:30 · deep work…", rose "2:00 – 4:00 · dip…", cyan "4:30 · second wind…".
5. **Debt trend card**: 7 bars (M–S), height = hours×12px, colors rose→amber→green as debt falls (4.1→2.8), value above each bar, day letter below.
6. **Privacy strip** (glass 14px radius): phone icon, "Tracked from phone patterns · No wearable", violet UPGRADE pill.
7. **Ask Aria pill** (glass, radius 100): sparkles icon, "Ask Aria…" placeholder, 30px gradient mic button.

### 3. Track (`screen-track.jsx`)
Idle: large tap-to-record button with breathing rings, mic-permission copy, tips. Recording state (`TrackRec`): live waveform, elapsed timer, snore-event counter, stop button → Report.

### 4. Insights (`screen-insights.jsx`)
Snore summary (47 Events / 38m Duration / Mod Intensity in 3 columns with hairline separators), hourly snore-intensity bar chart 11p–6a (rose >0.6, amber >0.3), amber alert "Peak snoring: 2 – 4 AM (28 events)", OSA risk card (conic progress ring, "LOW" green), trend, "Share with Doctor" row (PDF via WhatsApp).

### 5. Energy (`screen-energy.jsx`)
Full circadian map with zones, drivers list, Aria tip.

### 6. Report (`screen-login-report.jsx`)
Morning report after recording: dawn aurora, score, stages, snore summary.

### 7. Profile (`screen-profile.jsx`)
Avatar (80px conic ring), name/email, Free Plan pill, upgrade CTA (violet→pink, "₹499/mo"), sleep-profile rows (Ideal 8h, Bedtime 11:30 PM, Wake 6:30 AM, Concerns), settings list (Notifications, Health Connect green-dot connected, Privacy, Export, Help), rose Sign Out, "SOMNIQ v1".

### Tab bar (all main screens)
Floating glass dock: absolute bottom 24, left/right 14, radius 100, `rgba(12,12,16,0.72)` + blur 28, border white-0.1, shadow `0 16px 40px rgba(0,0,0,0.5)` + inset top highlight. 5 tabs: Agent (sparkles) · Track (moon) · Insights (pulse) · Energy (sunny) · Profile (person). Active tab: violet/cyan gradient pill bg, violet border, `#d6c9ff` label, icon drop-shadow glow; inactive: faint white outline icons. Icons: **Ionicons v7** (filled when active, `-outline` when not).

## Interactions & Behavior
- Tab bar navigates between the 5 main screens; screen change uses fade/scale-in.
- Avatar (header) → Profile. Energy card → Energy screen. Score micro-stat → toggles breakdown.
- Track: tap record → recording state → stop → Report.
- Aria buttons are visual only in the mock — wire to real actions (reminder scheduling, chat).
- All data is **mock/placeholder** (74 score, 2.8h debt, 47 snore events…). Real app needs: score formula (Duration 30 + Continuity 25 + Consistency 25 + Snoring 20 = 100), debt = Σ(goal − actual) over trailing 14 days (product decisions, not final).

## State Management (prototype-level)
- `active` screen id; `scoreOpen` boolean (dashboard breakdown); recording state (idle/recording/report).
- Real app: nightly sleep sessions, snore events, debt series, user profile/goals, subscription tier.

## Assets
- Fonts: Inter + JetBrains Mono (Google Fonts).
- Icons: Ionicons v7 (`ion-icon` names visible in source: sparkles, moon, pulse, sunny, person, mic, warning-outline, chevron-forward, document-text-outline, phone-portrait-outline, notifications-outline, fitness-outline, shield-checkmark-outline, download-outline, help-circle-outline, log-out-outline, star).
- No raster images. All visuals are CSS gradients/SVG.

## Files
- `SOMNIQ App v1.html` — entry point; loads all JSX below via Babel standalone; includes phone-frame chrome and screen navigation.
- `SOMNIQ App v1 standalone.html` — same app bundled into one self-contained offline file (open directly in a browser to see the reference).
- `somniq-system.jsx` — **design system source of truth**: tokens (`G`), glass(), eyebrow, monoNum, Aurora, AriaOrb, GlassPill, SectionHead, TabBar, ScreenHeader, keyframes.
- `screen-dashboard.jsx`, `screen-track.jsx`, `screen-insights.jsx`, `screen-energy.jsx`, `screen-profile.jsx`, `screen-login-report.jsx` — one file per screen.
- `ios-frame.jsx` — iPhone bezel used for presentation only; **do not implement** — the app fills the real device screen.
