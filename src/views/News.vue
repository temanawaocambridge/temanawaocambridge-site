<template>
  <div class="page-hero">
    <div class="container">
      <p class="eyebrow">Ngā Kōrero Hou</p>
      <h1>News & Updates</h1>
      <p>Stay connected with what's happening at Te Manawa o Cambridge.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <!-- Facebook feed CTA -->
      <div class="fb-cta card">
        <div class="fb-inner">
          <div class="fb-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </div>
          <div class="fb-text">
            <h2>Our latest news is on Facebook</h2>
            <p>Follow our pages for real-time updates, event announcements, community news, and to connect with Ray and Dwain directly.</p>
          </div>
          <div class="fb-btns">
            <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" class="btn btn-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Te Manawa o Cambridge
            </a>
            <a href="https://www.facebook.com/martinreuben" target="_blank" rel="noopener noreferrer" class="btn btn-white-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Ray &amp; Dwain Reuben
            </a>
          </div>
        </div>
      </div>

      <!-- Highlights -->
      <div class="highlights-header">
        <p class="eyebrow">Community Highlights</p>
        <h2 class="section-title">What We've Been Up To</h2>
        <p class="section-sub">A snapshot of some of the ways Te Manawa o Cambridge has been supporting and connecting our community.</p>
      </div>

      <div class="highlights-grid">
        <article v-for="h in highlights" :key="h.title" class="highlight-card card">
          <div class="hl-thumb" :style="{ background: `linear-gradient(135deg, ${h.c1}, ${h.c2})` }" aria-hidden="true">
            <div class="hl-icon">
              <component :is="h.icon" aria-hidden="true" />
            </div>
          </div>
          <div class="hl-body">
            <span class="hl-cat">{{ h.category }}</span>
            <h3>{{ h.title }}</h3>
            <p>{{ h.desc }}</p>
          </div>
        </article>
      </div>

      <!-- Get involved -->
      <div class="stay-connected card">
        <h3>Stay Connected</h3>
        <p>The best way to stay up to date with Te Manawa o Cambridge is to follow us on Facebook and reach out directly. We love hearing from our community.</p>
        <div class="sc-actions">
          <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Follow on Facebook
          </a>
          <RouterLink to="/contact" class="btn btn-ghost-dark">Get In Touch</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const mkIcon = (paths) => defineComponent({
  render: () => h('svg', { viewBox:'0 0 24 24', fill:'none', stroke:'white', 'stroke-width':'2', width:'28', height:'28' },
    paths.map(d => h('path', { d }))
  )
})

const highlights = [
  {
    title: 'Christmas in the Park 2024',
    desc: 'We hosted our annual Christmas in the Park at Leamington Domain — bringing together BBQ, food trucks, community stalls and festive fun for hundreds of Cambridge whānau.',
    category: 'Community Event',
    c1: '#e63329', c2: '#a8231a',
    icon: mkIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2','M23 21v-2a4 4 0 0 0-3-3.87','M16 3.13a4 4 0 0 1 0 7.75']),
  },
  {
    title: 'Matariki Donations from Little Thinkers',
    desc: 'A massive thank you to the whānau and staff of Little Thinkers for their generous donations in celebration of Matariki — fostering community connection, one whānau at a time.',
    category: 'Community Generosity',
    c1: '#7b3fa0', c2: '#562c72',
    icon: mkIcon(['M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2']),
  },
  {
    title: 'Clothing & Household Goods Support',
    desc: 'Every week we connect families with donated clothing, baby items, furniture, and whiteware. If you need support or have items to donate, reach out — we\'re here to help.',
    category: 'Ongoing Support',
    c1: '#3db560', c2: '#2a8a44',
    icon: mkIcon(['M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z']),
  },
  {
    title: 'Whiteware Collection Days',
    desc: 'We coordinate free collection days for old whiteware, scrap metal, and unwanted goods across Cambridge — helping keep our homes and community tidy.',
    category: 'Community Service',
    c1: '#29abe2', c2: '#1a7ab5',
    icon: mkIcon(['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z','M9 22V12h6v10']),
  },
  {
    title: 'Carols by Candlelight — Coming Up',
    desc: 'We\'re planning an old-school Carols by Candlelight in the Cambridge town square. We\'re calling on choirs and fundraising groups to join us — get in touch if you\'d like to be involved.',
    category: 'Upcoming Event',
    c1: '#f5821f', c2: '#c4621a',
    icon: mkIcon(['M9 18V5l12-2v13','M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z','M18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z']),
  },
  {
    title: 'Name Change Approved',
    desc: 'We are proud to have officially become Te Manawa o Cambridge Charitable Trust, having previously operated as the Cambridge Youth Centre Trust. Our kaupapa remains the same — serving our community.',
    category: 'Organisation',
    c1: '#1e2d4e', c2: '#2c4070',
    icon: mkIcon(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
  },
]
</script>

<style scoped>
.fb-cta {
  background: linear-gradient(135deg, #1877f2, #0e5cb8);
  border: none;
  margin-bottom: 56px;
}
.fb-inner {
  display: flex; align-items: center; gap: 24px; padding: 32px; flex-wrap: wrap;
}
.fb-icon {
  width: 64px; height: 64px; background: rgba(255,255,255,0.15);
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--white);
}
.fb-text { flex: 1; min-width: 200px; }
.fb-text h2 { font-size: 1.2rem; font-weight: 800; color: var(--white); margin-bottom: 6px; }
.fb-text p { font-size: 0.9rem; color: rgba(255,255,255,0.8); line-height: 1.6; }
.fb-btns { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
.btn-white { background: var(--white); color: #1877f2; font-weight: 700; }
.btn-white:hover { background: var(--off-white); transform: translateY(-2px); }
.btn-white-outline { background: rgba(255,255,255,0.15); color: var(--white); font-weight: 700; border: 1.5px solid rgba(255,255,255,0.4); }
.btn-white-outline:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }

.highlights-header { margin-bottom: 32px; }
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.highlight-card { display: flex; flex-direction: column; }
.hl-thumb {
  height: 100px; display: flex; align-items: center; justify-content: center;
}
.hl-icon {
  width: 52px; height: 52px; border-radius: 12px;
  background: rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
}
.hl-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
.hl-cat {
  display: block; font-family: var(--font-head); font-size: 0.68rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; color: var(--blue); margin-bottom: 8px;
}
.hl-body h3 { font-size: 1rem; font-weight: 700; color: var(--navy); line-height: 1.35; margin-bottom: 8px; }
.hl-body p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.65; flex: 1; }

.stay-connected {
  padding: 36px; text-align: center;
  background: var(--off-white); border: none; box-shadow: none;
}
.stay-connected h3 { font-size: 1.3rem; font-weight: 800; color: var(--navy); margin-bottom: 10px; }
.stay-connected p { font-size: 0.95rem; color: var(--text-muted); max-width: 540px; margin: 0 auto; line-height: 1.7; }
.sc-actions { display: flex; gap: 12px; justify-content: center; margin-top: 24px; flex-wrap: wrap; }

.btn-ghost-dark {
  background: transparent; color: var(--navy); border: 1.5px solid var(--border);
  padding: 14px 28px; border-radius: var(--radius-sm);
  font-family: var(--font-head); font-size: 0.95rem; font-weight: 600;
  cursor: pointer; transition: all var(--t-base);
  display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
}
.btn-ghost-dark:hover { border-color: var(--navy); background: var(--navy); color: var(--white); }

@media (max-width: 900px) { .highlights-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .highlights-grid { grid-template-columns: 1fr; } }
</style>
