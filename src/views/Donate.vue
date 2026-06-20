<template>
  <div class="page-hero donate-hero">
    <div class="container">
      <p class="eyebrow" style="color:rgba(255,255,255,0.6)">Tākoha</p>
      <h1>Support Te Manawa</h1>
      <p>Your generosity keeps our doors open and our community thriving. Every dollar makes a real difference.</p>
    </div>
  </div>

  <section class="section">
    <div class="container layout">

      <!-- Form -->
      <div class="form-panel">
        <h2 class="section-title">Make a Donation</h2>
        <p class="section-sub" style="margin-bottom:32px">Choose a one-off or regular donation below.</p>

        <!-- Frequency -->
        <fieldset class="freq-group" aria-label="Donation frequency">
          <legend class="sr-only">Donation frequency</legend>
          <div class="freq-toggle">
            <button
              v-for="f in ['One-off', 'Monthly']" :key="f"
              class="freq-btn"
              :class="{ active: frequency === f }"
              type="button"
              :aria-pressed="frequency === f"
              @click="frequency = f"
            >{{ f }}</button>
          </div>
        </fieldset>

        <!-- Amount -->
        <fieldset class="amount-group" aria-label="Donation amount">
          <legend class="amount-legend">Select an amount</legend>
          <div class="amounts">
            <button
              v-for="a in presets" :key="a"
              type="button"
              class="amount-btn"
              :class="{ active: selected === a && !custom }"
              :aria-pressed="selected === a && !custom"
              @click="selected = a; custom = ''"
            >${{ a }}</button>
            <div class="custom-wrap">
              <span class="custom-prefix">$</span>
              <input
                v-model="custom"
                type="number"
                placeholder="Other"
                min="1"
                class="custom-input"
                aria-label="Enter custom amount"
                @focus="selected = null"
              />
            </div>
          </div>
        </fieldset>

        <p v-if="total" class="impact-msg" role="status" aria-live="polite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <strong>${{ total }}</strong>&nbsp;{{ frequency === 'Monthly' ? '/ month' : 'one-off' }} — {{ impactMessage }}
        </p>

        <form @submit.prevent="submit" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="d-first">First Name</label>
              <input id="d-first" v-model="form.first" type="text" required autocomplete="given-name" placeholder="Aroha" />
            </div>
            <div class="form-group">
              <label for="d-last">Last Name</label>
              <input id="d-last" v-model="form.last" type="text" required autocomplete="family-name" placeholder="Te Kanawa" />
            </div>
          </div>
          <div class="form-group">
            <label for="d-email">Email</label>
            <input id="d-email" v-model="form.email" type="email" required autocomplete="email" placeholder="aroha@example.com" />
          </div>
          <div class="form-group">
            <label for="d-msg">Message (optional)</label>
            <textarea id="d-msg" v-model="form.message" placeholder="Leave a message for our whānau..."></textarea>
          </div>
          <button type="submit" class="btn btn-donate submit-btn" :disabled="!total">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Donate ${{ total || '...' }}{{ frequency === 'Monthly' ? ' / month' : '' }}
          </button>
          <p class="secure-note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Secure payment · Tax receipts issued for all donations
          </p>
        </form>
      </div>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="impact-card card">
          <h3>Your Impact</h3>
          <ul class="impact-list">
            <li v-for="i in impacts" :key="i.amount">
              <span class="impact-amt">${{ i.amount }}</span>
              <span>{{ i.desc }}</span>
            </li>
          </ul>
        </div>
        <div class="trust-card card">
          <h3>Why Donate?</h3>
          <p>Te Manawa o Cambridge is a registered charity. All donations are used directly to support our community programmes and whānau services.</p>
          <p>We publish annual reports and are fully transparent about how funds are used.</p>
        </div>
      </aside>
    </div>
  </section>

  <!-- Thank you modal -->
  <Teleport to="body">
    <div v-if="submitted" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" @click.self="submitted = false">
      <div class="modal card">
        <div class="modal-icon">💚</div>
        <h2 id="modal-title">Ngā mihi nui!</h2>
        <p>Thank you for your generous donation of <strong>${{ lastTotal }}</strong>. Your support means the world to our community.</p>
        <button class="btn btn-primary" @click="submitted = false" style="margin-top:24px;width:100%;justify-content:center">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const frequency = ref('One-off')
const presets = [20, 50, 100, 250]
const selected = ref(50)
const custom = ref('')
const submitted = ref(false)
const lastTotal = ref(null)
const form = ref({ first: '', last: '', email: '', message: '' })

const total = computed(() => custom.value ? Number(custom.value) : selected.value)

const impacts = [
  { amount: 20,  desc: 'feeds a whānau at our community kai night' },
  { amount: 50,  desc: 'funds a week of after-school activities for tamariki' },
  { amount: 100, desc: 'covers a month of te reo Māori classes' },
  { amount: 250, desc: 'sponsors a term of youth mentorship' },
]

const impactMessage = computed(() => {
  const t = Number(total.value)
  if (t >= 250) return 'sponsors a term of youth mentorship'
  if (t >= 100) return 'covers a month of te reo Māori classes'
  if (t >= 50)  return 'funds a week of tamariki activities'
  return 'makes a real difference to our community'
})

function submit() {
  lastTotal.value = total.value
  submitted.value = true
  form.value = { first: '', last: '', email: '', message: '' }
  selected.value = 50
  custom.value = ''
}
</script>

<style scoped>
.donate-hero { background: linear-gradient(135deg, #c8251b, var(--red)); }

.layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 48px;
  align-items: start;
}

/* Frequency */
.freq-group { border: none; padding: 0; margin-bottom: 24px; }
.freq-toggle {
  display: inline-flex;
  background: var(--gray-50);
  border-radius: var(--radius-sm);
  padding: 4px;
}
.freq-btn {
  padding: 8px 24px;
  border: none;
  background: none;
  border-radius: calc(var(--radius-sm) - 2px);
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--t-base);
}
.freq-btn.active {
  background: var(--white);
  color: var(--navy);
  box-shadow: var(--shadow-sm);
}
.freq-btn:focus-visible { outline: 2px solid var(--blue); }

/* Amounts */
.amount-group { border: none; padding: 0; margin-bottom: 12px; }
.amount-legend {
  font-family: var(--font-head);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 12px;
  display: block;
}
.amounts { display: flex; gap: 10px; flex-wrap: wrap; }
.amount-btn {
  padding: 12px 22px;
  border: 1.5px solid var(--border);
  background: var(--white);
  border-radius: var(--radius-sm);
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy);
  cursor: pointer;
  transition: all var(--t-base);
}
.amount-btn:hover { border-color: var(--navy); }
.amount-btn.active { background: var(--navy); color: var(--white); border-color: var(--navy); }
.amount-btn:focus-visible { outline: 2px solid var(--blue); }

.custom-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.custom-prefix {
  position: absolute;
  left: 14px;
  font-family: var(--font-head);
  font-weight: 700;
  color: var(--text-muted);
  pointer-events: none;
}
.custom-input {
  width: 110px;
  padding: 12px 12px 12px 28px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy);
  transition: border-color var(--t-base);
}
.custom-input:focus { outline: none; border-color: var(--navy); }

.impact-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  color: #166534;
  margin-bottom: 24px;
}
.impact-msg svg { color: #16a34a; flex-shrink: 0; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.submit-btn {
  width: 100%;
  justify-content: center;
  font-size: 1rem;
  padding: 15px;
  margin-top: 4px;
}
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.secure-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 12px;
  text-align: center;
}

/* Sidebar */
.impact-card, .trust-card { padding: 28px; margin-bottom: 16px; }
.impact-card h3, .trust-card h3 {
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 16px;
}
.impact-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.impact-list li { display: flex; gap: 12px; align-items: flex-start; font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; }
.impact-amt {
  font-family: var(--font-head);
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--navy);
  background: var(--gray-50);
  padding: 2px 8px;
  border-radius: 4px;
  flex-shrink: 0;
  white-space: nowrap;
}
.trust-card p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 10px; }

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  backdrop-filter: blur(4px);
}
.modal {
  max-width: 400px;
  width: 90%;
  padding: 48px 40px;
  text-align: center;
}
.modal-icon { font-size: 3rem; margin-bottom: 16px; }
.modal h2 { font-size: 1.7rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; }
.modal p { color: var(--text-muted); line-height: 1.7; }

.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { order: -1; }
}
@media (max-width: 480px) {
  .form-row { grid-template-columns: 1fr; }
  .modal { padding: 36px 24px; }
}
</style>
