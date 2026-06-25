<template>
  <div class="page-hero">
    <div class="container">
      <p class="eyebrow">Ko wai mātou</p>
      <h1>About Te Manawa o Cambridge</h1>
      <p>Our story, our kaupapa, and the people who make it happen.</p>
    </div>
  </div>

  <!-- Story -->
  <section class="section">
    <div class="container">
      <p class="eyebrow">Our Story</p>
      <h2 class="section-title">He manawa tītī, he manawa toa</h2>
      <p class="story-intro">A strong heart, a courageous heart — that is the kaupapa behind everything Raylene and Dwain Reuben do.</p>

      <div class="story-timeline">

        <div class="timeline-item">
          <div class="timeline-dot" style="background: var(--blue)"></div>
          <div class="timeline-content">
            <span class="timeline-year">2022</span>
            <h3>It started with the rangatahi</h3>
            <p>Raylene and Dwain Reuben looked around Cambridge and saw something that didn't sit right — young people without connection, without support, without somewhere to belong. So they did what they always do: they showed up. The Cambridge Youth Centre Trust was born, with a simple mission to support the youth of Cambridge and give them a safe space to land.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot" style="background: var(--green)"></div>
          <div class="timeline-content">
            <span class="timeline-year">Growing</span>
            <h3>The families followed</h3>
            <p>You can't support rangatahi without supporting their whānau. Raylene and Dwain found themselves fielding messages around the clock — washing machines for solo mamas, beds for kids who had none, baby gear for mothers fleeing violence, drawers for a 13-year-old enrolling in high school the next morning. Cambridge looks like a wealthy town from the outside. But there are families here who are struggling in silence, and once people knew Ray and Dwain were listening, they didn't stop reaching out.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot" style="background: var(--purple)"></div>
          <div class="timeline-content">
            <span class="timeline-year">The shift</span>
            <h3>Te Manawa o Cambridge</h3>
            <p>The kaupapa had grown bigger than its name. The trust widened its purpose to encompass all families in need — not just youth — and became Te Manawa o Cambridge: <em>the heart of Cambridge</em>. It's a reflection of what Ray and Dwain had already been doing. As one of their team put it: <em>"It is seemingly a wealthy town, but is rich in needs amongst the sectors lacking connection. That's what we do — offer a safe space, get them talking, then point them to professional services."</em></p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot" style="background: var(--orange)"></div>
          <div class="timeline-content">
            <span class="timeline-year">Every day</span>
            <h3>The work that doesn't stop</h3>
            <p>Raylene describes what she does plainly: <em>"I work closely with local families, bridging them to the agencies and services they need. I play a vital role as their advocate, ensuring their voices are heard and their needs are met."</em> What that looks like in practice is Dwain loading furniture into a trailer at night, Raylene on the phone sending a referral to Salvation Army, both of them coordinating clothing packs, kai, beds, and washing machines — while still finding time to run Christmas in the Park for hundreds of Cambridge whānau. They do it because they care. Full stop.</p>
          </div>
        </div>

      </div>

      <div class="tikanga-stack">
        <div v-for="v in tikanga" :key="v.word" class="tikanga-item" :style="{ '--c': v.color }">
          <div class="t-dot" :style="{ background: v.color }"></div>
          <div>
            <strong>{{ v.word }}</strong>
            <span>{{ v.english }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What we do -->
  <section class="section section--tinted">
    <div class="container">
      <p class="eyebrow">Ō mātou mahi</p>
      <h2 class="section-title">What We Do</h2>
      <p class="section-sub">We provide practical, community-led support for Cambridge whānau across a range of needs.</p>
      <div class="services-grid">
        <div v-for="s in services" :key="s.title" class="service-card card">
          <div class="service-top" :style="{ background: `linear-gradient(135deg, ${s.c1}, ${s.c2})` }">
            <div class="service-icon">
              <component :is="s.icon" aria-hidden="true" />
            </div>
          </div>
          <div class="service-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="section">
    <div class="container">
      <p class="eyebrow">Te Kapa</p>
      <h2 class="section-title">Our People</h2>

      <h3 class="people-subheading">Community Team</h3>
      <p class="section-sub" style="margin-bottom:32px">The people on the ground making it happen every day.</p>
      <div class="team-grid">
        <div v-for="m in team" :key="m.name" class="team-card card">
          <div class="avatar" :style="{ background: m.color }">
            <span>{{ m.initials }}</span>
          </div>
          <h3>{{ m.name }}</h3>
          <p>{{ m.role }}</p>
        </div>
      </div>

      <h3 class="people-subheading" style="margin-top:56px">Board of Trustees</h3>
      <p class="section-sub" style="margin-bottom:32px">Our trustees govern Te Manawa o Cambridge Trust (CC61648) and guide our strategic direction.</p>
      <div class="team-grid">
        <div v-for="t in trustees" :key="t.name" class="team-card card">
          <div class="avatar" :style="{ background: t.color }">
            <span>{{ t.initials }}</span>
          </div>
          <h3>{{ t.name }}</h3>
          <p>{{ t.role }}</p>
        </div>
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

const tikanga = [
  { word: 'Manaakitanga', english: 'Hospitality & respect for all people', color: 'var(--blue)' },
  { word: 'Whanaungatanga', english: 'Relationships and belonging', color: 'var(--green)' },
  { word: 'Kaitiakitanga', english: 'Guardianship of people and community', color: 'var(--purple)' },
  { word: 'Aroha', english: 'Love, empathy, and compassion', color: 'var(--red)' },
]

const services = [
  {
    title: 'Whānau Advocacy',
    desc: 'We walk alongside families as advocates — making sure their voices are heard and their needs are met when navigating agencies and services.',
    icon: mkIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2','M23 21v-2a4 4 0 0 0-3-3.87','M16 3.13a4 4 0 0 1 0 7.75']),
    c1: '#29abe2', c2: '#1a7ab5',
  },
  {
    title: 'Clothing Support',
    desc: 'We collect and redistribute donated clothing for all ages — babies, children, and adults. If you need clothing or have items to donate, reach out.',
    icon: mkIcon(['M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z']),
    c1: '#7b3fa0', c2: '#562c72',
  },
  {
    title: 'Household Goods',
    desc: 'We help source and redistribute furniture, whiteware, baby equipment, and household items to families who need them most.',
    icon: mkIcon(['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z','M9 22V12h6v10']),
    c1: '#3db560', c2: '#2a8a44',
  },
  {
    title: 'Community Events',
    desc: 'We organise events that bring Cambridge together — Christmas in the Park, Carols by Candlelight, Matariki celebrations, and more.',
    icon: mkIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707']),
    c1: '#f5821f', c2: '#c4621a',
  },
]

const team = [
  { name: 'Raylene Reuben',  role: 'Co-Founder & Leader', initials: 'RR', color: 'var(--blue)' },
  { name: 'Dwain Reuben',    role: 'Co-Founder & Leader', initials: 'DR', color: 'var(--navy)' },
  { name: 'Manda Alexander', role: 'Community Support',   initials: 'MA', color: 'var(--green)' },
  { name: 'Annette Peake',   role: 'Community Support',   initials: 'AP', color: 'var(--purple)' },
  { name: 'Ayesha Newport',     role: 'Community Support',   initials: 'SM', color: 'var(--orange)' },
]

const trustees = [
  { name: 'Raylene Reuben', role: 'Chairperson', initials: 'RR', color: 'var(--blue)' },
  { name: 'Cherese Eriepa', role: 'Secretary',   initials: 'CE', color: 'var(--green)' },
  { name: 'Tynaya Mane',    role: 'Treasurer',   initials: 'TM', color: 'var(--purple)' },
  { name: 'Andrea Ruff',    role: 'Trustee',     initials: 'AR', color: 'var(--orange)' },
  { name: 'Aroha Herewini', role: 'Trustee',     initials: 'AH', color: 'var(--red)' }
]
</script>

<style scoped>
.story-intro {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 620px;
  margin: 12px 0 52px;
  font-style: italic;
}

.story-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 56px;
  position: relative;
  padding-left: 32px;
}
.story-timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(to bottom, var(--blue), var(--green), var(--purple), var(--orange));
  opacity: 0.3;
}

.timeline-item {
  display: flex;
  gap: 24px;
  padding-bottom: 44px;
  position: relative;
}
.timeline-item:last-child { padding-bottom: 0; }

.timeline-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
  position: absolute;
  left: -32px;
  box-shadow: 0 0 0 4px var(--white), 0 0 0 6px currentColor;
}

.timeline-content { flex: 1; }
.timeline-year {
  display: inline-block;
  font-family: var(--font-head);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--blue);
  margin-bottom: 6px;
}
.timeline-content h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 10px;
}
.timeline-content p {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 0.95rem;
}
.timeline-content em {
  color: var(--navy);
  font-style: italic;
  font-weight: 500;
}

.tikanga-stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 8px;
}
.tikanga-item {
  display: flex; align-items: center; gap: 16px;
  padding: 20px; border-radius: var(--radius);
  border: 1px solid var(--border); background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base); cursor: default;
}
.tikanga-item:hover { transform: translateX(4px); }
.t-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.tikanga-item strong { display: block; font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 2px; }
.tikanga-item span { font-size: 0.85rem; color: var(--text-muted); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: var(--block-gap);
}
.service-card { display: flex; flex-direction: column; }
.service-top {
  height: 100px;
  display: flex; align-items: center; justify-content: center;
}
.service-icon {
  width: 52px; height: 52px; border-radius: 12px;
  background: rgba(255,255,255,0.25);
  display: flex; align-items: center; justify-content: center;
  color: var(--white);
}
.service-body { padding: 20px; flex: 1; }
.service-body h3 { font-size: 1rem; font-weight: 800; color: var(--navy); margin-bottom: 8px; }
.service-body p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.65; }

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  margin-top: 24px;
}
.team-card { text-align: center; padding: 32px 20px; }
.avatar {
  width: 72px; height: 72px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
}
.avatar span { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; color: var(--white); }
.team-card h3 { font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
.team-card p { font-size: 0.85rem; color: var(--text-muted); }

.people-subheading {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border);
}

@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .tikanga-stack { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
