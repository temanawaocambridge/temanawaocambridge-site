<template>
  <header :class="{ scrolled }" role="banner">
    <div class="rainbow-bar"></div>
    <div class="container inner">
      <RouterLink to="/" class="brand" aria-label="Te Manawa o Cambridge — home">
        <img src="/logo.png" alt="Te Manawa o Cambridge logo" class="logo" width="44" height="44" />
        <span class="brand-name">Te Manawa<br><em>o Cambridge</em></span>
      </RouterLink>

      <nav class="nav-desktop" aria-label="Main navigation">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="nav-link">{{ l.label }}</RouterLink>
      </nav>

      <div class="nav-actions">
        <!-- <RouterLink to="/donate" class="btn btn-donate">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Tākoha
        </RouterLink> -->
        <RouterLink to="/contact" class="btn btn-lg btn-donate">
          Get Support?
        </RouterLink>
        <button class="burger" @click="open = !open" :aria-expanded="open.toString()" aria-controls="mobile-menu" aria-label="Toggle menu">
          <span :class="{ open }"></span>
          <span :class="{ open }"></span>
          <span :class="{ open }"></span>
        </button>
      </div>
    </div>

    <nav id="mobile-menu" class="mobile-nav" :class="{ open }" aria-label="Mobile navigation">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="mobile-link" @click="open = false">{{ l.label }}</RouterLink>
      <!-- <RouterLink to="/donate" class="btn btn-donate mobile-donate" @click="open = false">Tākoha / Donate</RouterLink> -->
       <RouterLink to="/contact" class="btn btn-lg btn-donate" @click="open = false">Get Support</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const scrolled = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() { scrolled.value = window.scrollY > 48 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--t-base), box-shadow var(--t-base);
}
header.scrolled {
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.inner {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 68px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: 8px;
}
.brand-name {
  font-family: var(--font-head);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.25;
}
.brand-name em {
  font-style: normal;
  font-weight: 500;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
}

.nav-link {
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-family: var(--font-head);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color var(--t-fast), background var(--t-fast);
  cursor: pointer;
}
.nav-link:hover { color: var(--navy); background: var(--gray-50); }
.nav-link.router-link-active { color: var(--navy); }
.nav-link.router-link-exact-active { color: var(--navy); background: var(--gray-50); }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 16px;
  flex-shrink: 0;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}
.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--navy);
  border-radius: 2px;
  transition: transform var(--t-base), opacity var(--t-base);
  transform-origin: center;
}
.burger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger span.open:nth-child(2) { opacity: 0; }
.burger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 8px 16px 20px;
  gap: 2px;
  background: var(--white);
  border-top: 1px solid var(--border);
}
.mobile-nav.open { display: flex; }
.mobile-link {
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-family: var(--font-head);
  font-weight: 600;
  color: var(--text-muted);
  transition: color var(--t-fast), background var(--t-fast);
  cursor: pointer;
}
.mobile-link:hover { color: var(--navy); background: var(--gray-50); }
.mobile-donate {
  margin-top: 8px;
  justify-content: center;
  border-radius: var(--radius-sm);
}

@media (max-width: 768px) {
  .nav-desktop { display: none; }
  .burger { display: flex; }
  .brand-name { display: none; }
}
@media (max-width: 480px) {
  .nav-actions .btn-donate { display: none; }
}
</style>
