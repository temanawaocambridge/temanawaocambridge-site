<template>
  <div class="page-hero">
    <div class="container">
      <p class="eyebrow">Ō mātou kaiāwhina</p>
      <h1>Our Supporters</h1>
      <p>Over the years, so many local businesses, organisations, and community members have shown up for Te Manawa and the whānau we serve. This page is our way of saying thank you.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">

      <!-- Filter tabs -->
      <div class="filter-bar" role="group" aria-label="Filter supporters by category">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="filter-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
          :aria-pressed="activeCategory === cat"
        >
          <span class="cat-dot" :data-cat="cat" aria-hidden="true"></span>
          {{ cat }}
          <span class="cat-count">{{ cat === 'All' ? partners.length : partners.filter(p => p.category === cat).length }}</span>
        </button>
      </div>

      <!-- Partner grid -->
      <div v-if="filtered.length" class="partner-grid">
        <a
          v-for="partner in filtered"
          :key="partner.name"
          :href="partner.website || undefined"
          :target="partner.website ? '_blank' : undefined"
          :rel="partner.website ? 'noopener noreferrer' : undefined"
          class="partner-card card"
          :class="{ 'no-link': !partner.website }"
          :aria-label="partner.website ? `${partner.name} — visit website` : partner.name"
        >
          <div class="card-logo" :class="{ 'no-bg': !partner.bgColor }" :style="partner.bgColor ? { background: partner.bgColor } : {}">
            <img v-if="partner.logo || partner.logoUrl" :src="partner.logo || partner.logoUrl" :alt="`${partner.name} logo`" />
            <span v-else class="logo-placeholder" aria-hidden="true">{{ initials(partner.name) }}</span>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="cat-badge" :data-cat="partner.category">{{ partner.category }}</span>
              <svg v-if="partner.website" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="external-icon" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
            <h3 class="card-name">{{ partner.name }}</h3>
            <p class="card-desc">{{ partner.description }}</p>
          </div>
        </a>
      </div>

      <p v-else class="no-results">No partners listed in this category yet — check back soon.</p>

      <!-- CTA -->
      <div class="partner-cta card">
        <div class="cta-text">
          <h3>Want to support us?</h3>
          <p>We're always grateful for support from local businesses and organisations who share our values. Get in touch to explore how we can work together.</p>
        </div>
        <RouterLink to="/contact" class="btn btn-primary">Get in Touch</RouterLink>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const modules = import.meta.glob('../../content/partners/*.json', { eager: true })

const partners = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => {
    const od = (a.order ?? 99) - (b.order ?? 99)
    return od !== 0 ? od : a.name.localeCompare(b.name)
  })

const categoryOrder = ['Health', 'Education', 'Business', 'Community']
const categories = ['All', ...categoryOrder]

const activeCategory = ref('All')

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? partners
    : partners.filter(p => p.category === activeCategory.value)
)

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
}
</script>

<style scoped>
/* ── Filter bar ── */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}
.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 2px solid var(--gray-200, #e5e7eb);
  background: transparent;
  font-family: var(--font-head);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-muted);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}
.filter-btn:hover:not(.active) {
  border-color: var(--navy);
  color: var(--navy);
}
.filter-btn.active {
  background: var(--navy);
  border-color: var(--navy);
  color: #fff;
}
.cat-count {
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 1px 7px;
  min-width: 20px;
  text-align: center;
}
.filter-btn:not(.active) .cat-count {
  background: var(--gray-100, #f3f4f6);
  color: var(--text-muted);
}

/* Category dot on filter buttons */
.cat-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.cat-dot[data-cat="Health"]    { background: #16a34a; }
.cat-dot[data-cat="Education"] { background: #2563eb; }
.cat-dot[data-cat="Business"]  { background: #d97706; }
.cat-dot[data-cat="Community"] { background: #9333ea; }
.filter-btn.active .cat-dot { background: rgba(255,255,255,0.7); }

/* ── Grid ── */
.partner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 56px;
}

/* ── Card ── */
.partner-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.18s, box-shadow 0.18s;
}
.partner-card:not(.no-link):hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.partner-card.no-link { cursor: default; }

.card-logo {
  width: 100%;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--gray-50, #f9fafb);
  border: 1px solid var(--gray-200, #e5e7eb);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.card-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
}
.card-logo.no-bg img {
  object-fit: cover;
  padding: 0;
  border-radius: 10px;
}
.logo-placeholder {
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--navy);
  letter-spacing: -0.02em;
}

.card-body { display: flex; flex-direction: column; flex: 1; }

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cat-badge {
  font-family: var(--font-head);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 10px;
  border-radius: 999px;
}
.cat-badge[data-cat="Health"]    { background: #dcfce7; color: #15803d; }
.cat-badge[data-cat="Education"] { background: #dbeafe; color: #1d4ed8; }
.cat-badge[data-cat="Business"]  { background: #fef3c7; color: #b45309; }
.cat-badge[data-cat="Community"] { background: #f3e8ff; color: #7e22ce; }

.external-icon { color: var(--text-muted); opacity: 0.5; }
.partner-card:hover .external-icon { opacity: 1; }

.card-name {
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 8px;
  line-height: 1.3;
}
.card-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ── No results ── */
.no-results {
  text-align: center;
  color: var(--text-muted);
  padding: 64px 0;
  font-size: 0.95rem;
}

/* ── CTA banner ── */
.partner-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 36px;
  background: linear-gradient(135deg, var(--navy) 0%, #2a4a7f 100%);
  color: #fff;
}
.cta-text h3 {
  font-family: var(--font-head);
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 6px;
}
.cta-text p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.6;
  max-width: 480px;
}
.partner-cta .btn-primary {
  background: #fff;
  color: var(--navy);
  white-space: nowrap;
  flex-shrink: 0;
}
.partner-cta .btn-primary:hover { background: rgba(255,255,255,0.9); }

/* ── Responsive ── */
@media (max-width: 640px) {
  .partner-grid { grid-template-columns: 1fr; }
  .partner-cta { flex-direction: column; align-items: flex-start; padding: 24px; }
  .partner-cta .btn-primary { width: 100%; justify-content: center; }
}
</style>
