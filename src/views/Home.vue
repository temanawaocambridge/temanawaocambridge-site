<template>
  <!-- ── Hero ──────────────────────────────────────────────── -->
  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero-aurora" aria-hidden="true"></div>
    <div class="container hero-inner">
      <div class="hero-text">
        <p class="eyebrow">Nau mai, haere mai</p>
        <h1 id="hero-heading">He Manawa,<br>He Hapori</h1>
        <p class="hero-sub">Te Manawa o Cambridge is a charitable trust at the heart of Cambridge — connecting whānau to the support they need, one family at a time.</p>
        <div class="hero-actions">
          <RouterLink to="/about" class="btn btn-lg btn-ghost">Learn More</RouterLink>
          <RouterLink to="/contact" class="btn btn-lg btn-donate">Get Support</RouterLink>
        </div>
      </div>
      <div class="hero-logo-wrap" aria-hidden="true">
        <div class="logo-glow"></div>
        <img src="/logo.png" alt="" class="hero-logo" width="360" height="360" loading="eager" />
      </div>
    </div>
    <div class="rainbow-bar hero-rainbow"></div>
  </section>

  <!-- ── What We Do ─────────────────────────────────────────── -->
  <section class="section" aria-labelledby="pillars-heading">
    <div class="container">
      <p class="eyebrow">Ko wai mātou</p>
      <h2 id="pillars-heading" class="section-title">What We Do</h2>
      <p class="section-sub">We work alongside Cambridge whānau — connecting them to the services, resources, and people they need to thrive.</p>

      <div class="pillars" role="list">
        <div v-for="p in pillars" :key="p.title" class="pillar" role="listitem" :style="{ '--c': p.color }">
          <div class="pillar-icon-wrap">
            <component :is="p.icon" class="pillar-icon" aria-hidden="true" />
          </div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── About strip ────────────────────────────────────────── -->
  <section class="section section--tinted" aria-labelledby="about-snippet-heading">
    <div class="container about-strip">
      <div class="about-text">
        <p class="eyebrow">Our Story</p>
        <h2 id="about-snippet-heading" class="section-title">Born from community,<br>for community</h2>
        <p class="section-sub">Founded as the Cambridge Youth Centre Trust and now operating as Te Manawa o Cambridge Charitable Trust, we have grown into a vital support network for Cambridge whānau — bridging families to the agencies and services they need.</p>
        <RouterLink to="/about" class="btn btn-primary" style="margin-top:28px">Learn More About Us</RouterLink>
      </div>
      <div class="about-values" aria-hidden="true">
        <div v-for="v in values" :key="v.word" class="value-chip" :style="{ '--c': v.color }">
          <strong>{{ v.word }}</strong>
          <span>{{ v.english }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Events CTA ─────────────────────────────────────────── -->
  <section class="section" aria-labelledby="events-heading">
    <div class="container events-cta-inner">
      <div>
        <p class="eyebrow">Ngā Kaupeka</p>
        <h2 id="events-heading" class="section-title">Community Events</h2>
        <p class="section-sub">We run community events throughout the year — from Christmas in the Park to Carols by Candlelight. Follow us on Facebook to stay up to date with what's coming up.</p>
        <div class="events-cta-actions">
          <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Follow on Facebook
          </a>
          <RouterLink to="/contact" class="btn btn-ghost-dark">Get In Touch</RouterLink>
        </div>
      </div>
      <div class="past-events" aria-label="Past events">
        <div v-for="e in pastEvents" :key="e.title" class="past-event-card card">
          <div class="pe-accent" :style="{ background: e.color }"></div>
          <div class="pe-body">
            <span class="pe-year">{{ e.year }}</span>
            <h3>{{ e.title }}</h3>
            <p>{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Get Support CTA ────────────────────────────────────── -->
  <section class="donate-band" aria-labelledby="support-heading">
    <div class="donate-aurora" aria-hidden="true"></div>
    <div class="container donate-inner">
      <div class="donate-text">
        <p class="eyebrow" style="color:rgba(255,255,255,0.6)">Tākoha</p>
        <h2 id="support-heading">Need Support?</h2>
        <p>Whether you need clothing, household items, or help connecting to services — reach out to us. No question is too small.</p>
      </div>
      <div class="donate-btns">
        <RouterLink to="/contact" class="btn btn-lg donate-cta-btn">Get In Touch</RouterLink>
        <RouterLink to="/donate" class="btn btn-lg btn-ghost">Donate</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const mkIcon = (paths) => defineComponent({
  render: () => h('svg', { viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'2', width:'28', height:'28' },
    paths.map(d => h('path', { d }))
  )
})

const pillars = [
  {
    icon: mkIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2','M23 21v-2a4 4 0 0 0-3-3.87','M16 3.13a4 4 0 0 1 0 7.75']),
    title: 'Connecting Whānau',
    desc: 'We bridge families to the agencies, services, and support networks they need — acting as advocates every step of the way.',
    color: 'var(--blue)',
  },
  {
    icon: mkIcon(['M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z']),
    title: 'Clothing & Goods',
    desc: 'We collect and redistribute donated clothing, baby items, furniture, and household goods to families in Cambridge who need them.',
    color: 'var(--purple)',
  },
  {
    icon: mkIcon(['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z','M9 22V12h6v10']),
    title: 'Community Support',
    desc: 'From whiteware to baby cots, we help source what families need and connect donors with those who can benefit most.',
    color: 'var(--green)',
  },
  {
    icon: mkIcon(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
    title: 'Events & Connection',
    desc: 'We bring Cambridge together through community events that celebrate our people, foster connection, and spread aroha.',
    color: 'var(--orange)',
  },
]

const values = [
  { word: 'Manaakitanga', english: 'Hospitality & care', color: 'var(--blue)' },
  { word: 'Whanaungatanga', english: 'Relationships',    color: 'var(--green)' },
  { word: 'Kaitiakitanga', english: 'Guardianship',      color: 'var(--purple)' },
  { word: 'Aroha',         english: 'Love & compassion', color: 'var(--red)' },
]

const pastEvents = [
  { year: 'Dec 2024', title: 'Christmas in the Park', desc: 'BBQ, food trucks, community stalls and festive fun at Leamington Domain.', color: 'var(--red)' },
  { year: 'Jun 2025', title: 'Matariki Celebrations', desc: 'Celebrating Matariki with the community, with support from local businesses and whānau.', color: 'var(--blue)' },
  { year: 'Coming up', title: 'Carols by Candlelight', desc: 'Old-school carols in the Cambridge town square — a community-led festive tradition.', color: 'var(--purple)' },
]
</script>

<style scoped>
/* Hero */
.hero {
  background: var(--navy);
  color: var(--white);
  position: relative;
  overflow: hidden;
  min-height: 560px;
  display: flex;
  flex-direction: column;
}
.hero-aurora {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 80% 20%, rgba(41,171,226,0.25) 0%, transparent 55%),
    radial-gradient(ellipse at 10% 80%, rgba(123,63,160,0.2) 0%, transparent 50%);
  animation: aurora 12s ease-in-out infinite alternate;
}
@keyframes aurora {
  from { opacity: 0.7; }
  to   { opacity: 1; }
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 72px;
  flex: 1;
  position: relative;
  z-index: 1;
}
.hero-text .eyebrow { color: var(--blue); }
h1 {
  font-size: clamp(2.8rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.05;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
.hero-sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.75);
  max-width: 480px;
  line-height: 1.75;
  margin-bottom: 36px;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-logo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.logo-glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(247,200,49,0.3) 0%, transparent 70%);
  filter: blur(40px);
  animation: pulse 4s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50%       { transform: scale(1.1); opacity: 1; }
}
.hero-logo {
  width: 360px;
  max-width: 100%;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 24px 48px rgba(0,0,0,0.35));
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
.hero-rainbow { height: 6px; flex-shrink: 0; }

/* Pillars */
.pillars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: var(--block-gap);
}
.pillar {
  padding: 32px 24px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--white);
  border-top: 4px solid var(--c);
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base), box-shadow var(--t-base);
  cursor: default;
}
.pillar:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.pillar-icon-wrap {
  width: 52px; height: 52px; border-radius: 12px;
  background: color-mix(in srgb, var(--c) 12%, transparent);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px; color: var(--c);
}
.pillar h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; color: var(--navy); }
.pillar p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; }

/* About strip */
.about-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.about-values { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.value-chip {
  padding: 24px 20px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  border-left: 4px solid var(--c);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base);
  cursor: default;
}
.value-chip:hover { transform: translateY(-3px); }
.value-chip strong { display: block; font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
.value-chip span { font-size: 0.8rem; color: var(--text-muted); }

/* Events CTA */
.events-cta-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.events-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
.btn-ghost-dark {
  background: transparent;
  color: var(--navy);
  border: 1.5px solid var(--border);
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-family: var(--font-head);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--t-base);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.btn-ghost-dark:hover { border-color: var(--navy); background: var(--navy); color: var(--white); }

.past-events { display: flex; flex-direction: column; gap: 16px; }
.past-event-card { display: flex; overflow: hidden; cursor: default; }
.pe-accent { width: 6px; flex-shrink: 0; background: var(--c); }
.pe-body { padding: 20px 24px; }
.pe-year { font-family: var(--font-head); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); display: block; margin-bottom: 6px; }
.pe-body h3 { font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
.pe-body p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; }

/* Donate band */
.donate-band {
  background: var(--navy);
  color: var(--white);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}
.donate-aurora {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(230,51,41,0.3) 0%, transparent 60%);
  pointer-events: none;
}
.donate-inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 32px; position: relative; z-index: 1;
}
.donate-text .eyebrow { margin-bottom: 8px; }
.donate-text h2 { font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 800; color: var(--white); margin-bottom: 12px; }
.donate-text p { font-size: 1rem; color: rgba(255,255,255,0.7); max-width: 460px; line-height: 1.7; }
.donate-btns { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; justify-content: flex-end; }
.donate-cta-btn { background: var(--white); color: var(--navy); font-weight: 700; box-shadow: var(--shadow-lg); }
.donate-cta-btn:hover { background: var(--off-white); transform: translateY(-2px); }

@media (max-width: 1024px) {
  .pillars { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; padding-top: 56px; }
  .hero-logo-wrap { display: none; }
  .about-strip, .events-cta-inner { grid-template-columns: 1fr; gap: 40px; }
  .donate-inner { flex-direction: column; text-align: center; }
  .donate-text p { margin: 0 auto; }
  .donate-btns { justify-content: center; }
}
@media (max-width: 600px) {
  .pillars { grid-template-columns: 1fr; }
  .about-values { grid-template-columns: 1fr; }
}
</style>
