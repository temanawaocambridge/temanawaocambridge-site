<template>
  <footer>
    <div class="rainbow-bar"></div>
    <div class="footer-body">
      <div class="container grid">
        <div class="col-brand">
          <img src="/logo.png" alt="Te Manawa o Cambridge" class="footer-logo" width="64" height="64" />
          <p class="tagline">He manawa tītī,<br>he manawa toa.</p>
          <p class="tagline-en">A strong heart, a courageous heart.</p>
          <div class="socials">
            <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" aria-label="Te Manawa o Cambridge on Facebook" class="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.facebook.com/martinreuben" target="_blank" rel="noopener noreferrer" aria-label="Ray &amp; Dwain Reuben on Facebook" class="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
          </div>
        </div>

        <div class="col">
          <h4>Navigate</h4>
          <RouterLink v-for="l in navLinks" :key="l.to" :to="l.to" class="foot-link">{{ l.label }}</RouterLink>
        </div>

        <div class="col">
          <h4>Get Involved</h4>
          <RouterLink to="/events" class="foot-link">Upcoming Events</RouterLink>
          <!-- <RouterLink to="/donate" class="foot-link">Tākoha / Donate</RouterLink> -->
          <RouterLink to="/contact" class="foot-link">Volunteer</RouterLink>
          <RouterLink to="/contact" class="foot-link">Room Hire</RouterLink>
        </div>

        <div class="col">
          <h4>Contact</h4>
          <a href="mailto:raylene@temanawaocambridge.org.nz" class="foot-link">raylene@temanawaocambridge.org.nz</a>
          <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer" class="foot-link">Te Manawa o Cambridge</a>
          <a href="https://www.facebook.com/martinreuben" target="_blank" rel="noopener noreferrer" class="foot-link">Ray &amp; Dwain Reuben</a>
          <p class="address">27 Jarrett Terrace<br>Leamington, Cambridge 3432<br>Waikato, NZ</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container bottom-inner">
        <p>&copy; {{ year }} Te Manawa o Cambridge Trust. All rights reserved.</p>
        <p>Registered Charity CC61648 · Leamington, Cambridge, Waikato</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]
</script>

<style scoped>
footer {
  background: var(--navy-dark);
  color: var(--white);
  margin-top: auto;
}
.footer-body { padding: 64px 0 48px; }
.grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 48px;
}
.footer-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 16px;
}
.tagline {
  font-family: var(--font-head);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.4;
  margin-bottom: 4px;
}
.tagline-en {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.45);
  font-style: italic;
  margin-bottom: 20px;
}
.socials { display: flex; gap: 10px; }
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  transition: background var(--t-base), color var(--t-base);
  cursor: pointer;
}
.social-btn:hover { background: var(--blue); color: var(--white); }

h4 {
  font-family: var(--font-head);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 16px;
  font-weight: 700;
}
.col { display: flex; flex-direction: column; gap: 10px; }
.foot-link {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  transition: color var(--t-fast);
  cursor: pointer;
}
.foot-link:hover { color: var(--white); }
.address {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.6;
  margin-top: 4px;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 0;
}
.bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-body { padding: 40px 0 32px; }
  .bottom-inner { flex-direction: column; gap: 4px; text-align: center; }
}
</style>
