<template>
  <div class="page-hero">
    <div class="container">
      <p class="eyebrow">Ngā Kaupeka</p>
      <h1>Events & Community</h1>
      <p>We bring Cambridge together through events that celebrate our people, our culture, and our community.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <!-- Facebook CTA -->
      <div class="fb-cta card">
        <div class="fb-cta-inner">
          <div class="fb-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </div>
          <div>
            <h2>Stay up to date on Facebook</h2>
            <p>Follow our pages for the latest events, announcements, and community news from Te Manawa o Cambridge.</p>
          </div>
          <div class="fb-btns">
            <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" class="btn btn-primary fb-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Te Manawa o Cambridge
            </a>
            <a href="https://www.facebook.com/martinreuben" target="_blank" rel="noopener noreferrer" class="btn fb-btn fb-btn--secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Ray &amp; Dwain Reuben
            </a>
          </div>
        </div>
      </div>

      <!-- Past & upcoming events -->
      <div class="events-header">
        <p class="eyebrow">Ngā Kaupeka</p>
        <h2 class="section-title">Our Events</h2>
        <p class="section-sub">Here are some of the events we run throughout the year. Check Facebook for current dates and details.</p>
      </div>

      <div class="events-list" role="list">
        <article v-for="e in events" :key="e.title" class="event-row card" role="listitem">
          <div class="event-accent" :style="{ background: e.color }"></div>
          <div class="event-content">
            <div class="event-header">
              <span class="event-cat" :style="{ background: e.color + '18', color: e.color }">{{ e.type }}</span>
              <span v-if="e.when" class="event-when">{{ e.when }}</span>
            </div>
            <h3>{{ e.title }}</h3>
            <p>{{ e.desc }}</p>
            <p v-if="e.location" class="event-location">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ e.location }}
            </p>
          </div>
        </article>
      </div>

      <div class="get-involved card">
        <h3>Want to get involved?</h3>
        <p>We're always looking for volunteers, stall holders, performers, and community groups to join us. Get in touch to find out how you can be part of what we do.</p>
        <div class="gi-actions">
          <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
          <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost-dark">Message on Facebook</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    title: 'Christmas in the Park',
    desc: 'An annual community celebration at Leamington Domain featuring BBQ, food trucks, community stalls, boot sales, and festive fun for the whole whānau.',
    type: 'Annual',
    when: 'December each year',
    location: 'Leamington Domain, Cambridge',
    color: 'var(--red)',
  },
  {
    title: 'Carols by Candlelight',
    desc: 'Old-school carols in the Cambridge town square — a community-led festive tradition bringing together choirs, fundraising groups, and the wider community.',
    type: 'Annual',
    when: 'December each year',
    location: 'Cambridge Town Square',
    color: 'var(--blue)',
  },
  {
    title: 'Matariki Celebrations',
    desc: 'Celebrating te ao Māori and the Māori New Year with our community. We come together to give thanks, share kai, and honour our connections to each other.',
    type: 'Annual',
    when: 'June / July each year',
    location: 'Cambridge',
    color: 'var(--purple)',
  },
  {
    title: 'Community Kai & Gatherings',
    desc: 'Throughout the year we organise informal community kai and social gatherings — a chance for Cambridge whānau to connect, share a meal, and support one another.',
    type: 'Throughout the year',
    when: null,
    location: 'Various Cambridge locations',
    color: 'var(--green)',
  },
  {
    title: 'Whiteware & Goods Collection Days',
    desc: 'We coordinate collection days for old whiteware, scrap metal, and unwanted goods — a free service that keeps Cambridge homes and streets clear of clutter.',
    type: 'Periodic',
    when: null,
    location: 'Cambridge-wide',
    color: 'var(--orange)',
  },
]
</script>

<style scoped>
.fb-cta {
  margin-bottom: 56px;
  background: linear-gradient(135deg, #1877f2, #0e5cb8);
  color: var(--white);
  border: none;
}
.fb-cta-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  flex-wrap: wrap;
}
.fb-icon {
  width: 64px;
  height: 64px;
  background: rgba(255,255,255,0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--white);
}
.fb-cta-inner div { flex: 1; min-width: 200px; }
.fb-cta-inner h2 { font-size: 1.2rem; font-weight: 800; color: var(--white); margin-bottom: 6px; }
.fb-cta-inner p { font-size: 0.9rem; color: rgba(255,255,255,0.8); line-height: 1.6; }
.fb-btns { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
.fb-btn { background: var(--white); color: #1877f2; flex-shrink: 0; }
.fb-btn:hover { background: var(--off-white); transform: translateY(-2px); }
.fb-btn--secondary { background: rgba(255,255,255,0.15); color: var(--white); }
.fb-btn--secondary:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }

.events-header { margin-bottom: 32px; }

.events-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
.event-row { display: flex; overflow: hidden; cursor: default; }
.event-accent { width: 6px; flex-shrink: 0; }
.event-content { padding: 24px 28px; flex: 1; }
.event-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
.event-cat {
  font-family: var(--font-head);
  font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  padding: 3px 10px; border-radius: 100px;
}
.event-when { font-size: 0.8rem; color: var(--text-muted); }
.event-content h3 { font-size: 1.05rem; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
.event-content p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; }
.event-location {
  display: flex; align-items: center; gap: 5px;
  font-size: 0.8rem; color: var(--text-muted); margin-top: 10px;
}

.get-involved {
  padding: 36px;
  text-align: center;
  background: var(--off-white);
  border: none;
  box-shadow: none;
}
.get-involved h3 { font-size: 1.3rem; font-weight: 800; color: var(--navy); margin-bottom: 10px; }
.get-involved p { font-size: 0.95rem; color: var(--text-muted); max-width: 540px; margin: 0 auto; line-height: 1.7; }
.gi-actions { display: flex; gap: 12px; justify-content: center; margin-top: 24px; flex-wrap: wrap; }

.btn-ghost-dark {
  background: transparent; color: var(--navy);
  border: 1.5px solid var(--border);
  padding: 14px 28px; border-radius: var(--radius-sm);
  font-family: var(--font-head); font-size: 0.95rem; font-weight: 600;
  cursor: pointer; transition: all var(--t-base);
  display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
}
.btn-ghost-dark:hover { border-color: var(--navy); background: var(--navy); color: var(--white); }
</style>
