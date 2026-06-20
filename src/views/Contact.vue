<template>
  <div class="page-hero">
    <div class="container">
      <p class="eyebrow">Whakapā mai</p>
      <h1>Contact Us</h1>
      <p>Need support, want to donate goods, or just want to say kia ora? We'd love to hear from you.</p>
    </div>
  </div>

  <section class="section">
    <div class="container layout">

      <div class="forms-area">

        <!-- Mode toggle -->
        <div class="mode-toggle" role="group" aria-label="Choose form type">
          <button
            type="button"
            class="toggle-btn"
            :class="{ active: mode === 'contact' }"
            @click="mode = 'contact'"
            :aria-pressed="mode === 'contact'"
          >
            Send a Message
          </button>
          <button
            type="button"
            class="toggle-btn referral-toggle"
            :class="{ active: mode === 'referral' }"
            @click="mode = 'referral'"
            :aria-pressed="mode === 'referral'"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            I'd like to refer myself for support
          </button>
        </div>

        <!-- Contact form -->
        <form v-if="mode === 'contact'" @submit.prevent="submitContact" class="contact-form" novalidate aria-label="Contact form">
          <h2 class="section-title">Send a Message</h2>
          <p class="form-intro">Whether you need support, have items to donate, or want to get involved — fill in the form and we'll get back to you as soon as we can.</p>

          <div class="form-row">
            <div class="form-group">
              <label for="c-first">First Name *</label>
              <input id="c-first" v-model="contact.first" type="text" required autocomplete="given-name" placeholder="Your first name" />
            </div>
            <div class="form-group">
              <label for="c-last">Last Name *</label>
              <input id="c-last" v-model="contact.last" type="text" required autocomplete="family-name" placeholder="Your last name" />
            </div>
          </div>
          <div class="form-group">
            <label for="c-email">Email *</label>
            <input id="c-email" v-model="contact.email" type="email" required autocomplete="email" placeholder="your@email.com" />
          </div>
          <div class="form-group">
            <label for="c-phone">Phone</label>
            <input id="c-phone" v-model="contact.phone" type="tel" autocomplete="tel" placeholder="Your phone number" />
          </div>
          <div class="form-group">
            <label for="c-subject">How can we help?</label>
            <select id="c-subject" v-model="contact.subject">
              <option value="">Select a topic...</option>
              <option>I need support</option>
              <option>I have clothing to donate</option>
              <option>I have household goods to donate</option>
              <option>I want to volunteer</option>
              <option>General enquiry</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="c-msg">Message *</label>
            <textarea id="c-msg" v-model="contact.message" required placeholder="Tell us how we can help..." style="min-height:140px"></textarea>
          </div>
          <p v-if="contactError" class="form-error">Something went wrong — please try again or contact us on Facebook.</p>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="contactSubmitting">
            {{ contactSubmitting ? 'Sending…' : 'Send Message' }}
            <svg v-if="!contactSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>

        <!-- Self-referral form -->
        <form v-else @submit.prevent="submitReferral" class="contact-form referral-form" novalidate aria-label="Self-referral form">
          <h2 class="section-title">Self-Referral for Support</h2>
          <p class="form-intro">This form is for people who would like to be considered for support from Te Manawa o Cambridge. All information is kept private and used only to help arrange support for you.</p>

          <fieldset class="form-fieldset">
            <legend>Your Details</legend>

            <div class="form-group">
              <label for="r-name">Full Name *</label>
              <input id="r-name" v-model="referral.fullName" type="text" required autocomplete="name" placeholder="Your full name" />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="r-dob">Date of Birth</label>
                <input id="r-dob" v-model="referral.dob" type="date" autocomplete="bday" />
              </div>
            </div>
            <div class="form-group">
              <label for="r-address">Address *</label>
              <input id="r-address" v-model="referral.address" type="text" required autocomplete="street-address" placeholder="Your home address" />
            </div>
          </fieldset>

          <fieldset class="form-fieldset">
            <legend>How to Reach You</legend>

            <div class="form-row">
              <div class="form-group">
                <label for="r-contact-method">Preferred contact method</label>
                <select id="r-contact-method" v-model="referral.contactMethod">
                  <option value="">Choose one...</option>
                  <option>Phone call</option>
                  <option>Text message</option>
                  <option>Email</option>
                  <option>Facebook message</option>
                  <option>In person</option>
                </select>
              </div>
              <div class="form-group">
                <label for="r-contact-time">Best time to contact you</label>
                <select id="r-contact-time" v-model="referral.contactTime">
                  <option value="">Choose one...</option>
                  <option>Morning (8am–12pm)</option>
                  <option>Afternoon (12pm–5pm)</option>
                  <option>Evening (5pm–7pm)</option>
                  <option>Anytime</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-fieldset">
            <legend>What kind of support do you need?</legend>
            <p class="fieldset-hint">Tick all that apply — we'll do our best to help.</p>

            <div class="checkbox-grid">
              <label v-for="s in supportOptions" :key="s" class="checkbox-label">
                <input type="checkbox" :value="s" v-model="referral.supportTypes" />
                <span>{{ s }}</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="form-fieldset">
            <legend>A bit about your situation</legend>
            <div class="form-group">
              <label for="r-situation">Brief description *</label>
              <textarea
                id="r-situation"
                v-model="referral.situation"
                required
                placeholder="Tell us a little about what's going on and how we can help. You don't need to share more than you're comfortable with."
                style="min-height:120px"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="r-referred-by">Who is making this referral?</label>
              <select id="r-referred-by" v-model="referral.referredBy">
                <option value="">Choose one...</option>
                <option>Myself</option>
                <option>Whānau / family</option>
                <option>GP / doctor</option>
                <option>Other health provider</option>
                <option>Social worker</option>
                <option>Other</option>
              </select>
            </div>
            <div v-if="referral.referredBy === 'Other'" class="form-group">
              <label for="r-referred-other">Please describe</label>
              <input id="r-referred-other" v-model="referral.referredByOther" type="text" placeholder="e.g. school, community worker…" />
            </div>
          </fieldset>

          <fieldset class="form-fieldset">
            <legend>Emergency Contact</legend>
            <div class="form-row">
              <div class="form-group">
                <label for="r-ec-name">Name</label>
                <input id="r-ec-name" v-model="referral.emergencyName" type="text" autocomplete="off" placeholder="Contact's full name" />
              </div>
              <div class="form-group">
                <label for="r-ec-phone">Phone number</label>
                <input id="r-ec-phone" v-model="referral.emergencyPhone" type="tel" autocomplete="off" placeholder="Contact's phone number" />
              </div>
            </div>
          </fieldset>

          <fieldset class="form-fieldset consent-fieldset">
            <legend>Consent</legend>
            <label class="checkbox-label consent-label">
              <input type="checkbox" v-model="referral.consent" required />
              <span>I agree that the information I've shared can be used by Te Manawa o Cambridge staff to arrange support for me. I understand my information will be kept private and not shared without my permission.</span>
            </label>
          </fieldset>

          <p v-if="referralError" class="form-error">Something went wrong — please try again or contact us on Facebook.</p>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="referralSubmitting || !referral.consent">
            {{ referralSubmitting ? 'Sending…' : 'Submit Referral' }}
            <svg v-if="!referralSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>

      </div><!-- /forms-area -->

      <aside class="info-sidebar">
        <div class="info-card card">
          <h3>Find Us</h3>
          <ul class="info-list">
            <li>
              <div class="info-icon" style="color:var(--red)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <strong>Address</strong>
                <p>27 Jarrett Terrace<br>Leamington, Cambridge 3432<br>Waikato, New Zealand</p>
              </div>
            </li>
            <li>
              <div class="info-icon" style="color:var(--blue)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:raylene@temanawaocambridge.org.nz">raylene@temanawaocambridge.org.nz</a></p>
              </div>
            </li>
            <li>
              <div class="info-icon" style="color:var(--purple)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <div>
                <strong>Facebook</strong>
                <p>
                  <a href="https://www.facebook.com/temanawaocambridge/" target="_blank" rel="noopener noreferrer">Te Manawa o Cambridge</a><br>
                  <a href="https://www.facebook.com/martinreuben" target="_blank" rel="noopener noreferrer">Ray &amp; Dwain Reuben</a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="donate-card card">
          <h3>Have items to donate?</h3>
          <p>We accept donations of:</p>
          <ul class="donate-list">
            <li>Clothing (all ages)</li>
            <li>Baby & children's items</li>
            <li>Furniture & whiteware</li>
            <li>Household goods</li>
          </ul>
          <p style="margin-top:12px">Message us on Facebook or email us to arrange drop-off or collection.</p>
        </div>
      </aside>
    </div>
  </section>

  <!-- Contact sent modal -->
  <Teleport to="body">
    <div v-if="contactSent" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" @click.self="contactSent = false">
      <div class="modal card">
        <div class="modal-icon">✉️</div>
        <h2 id="contact-modal-title">Kua tukuna!</h2>
        <p>Thank you for your message. We'll be in touch as soon as we can.</p>
        <button class="btn btn-primary" @click="contactSent = false" style="margin-top:24px;width:100%;justify-content:center">Close</button>
      </div>
    </div>
  </Teleport>

  <!-- Referral sent modal -->
  <Teleport to="body">
    <div v-if="referralSent" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="referral-modal-title" @click.self="referralSent = false">
      <div class="modal card">
        <div class="modal-icon">🤝</div>
        <h2 id="referral-modal-title">Ngā mihi!</h2>
        <p>Your referral has been received. A member of our team will be in touch with you soon to talk about how we can help.</p>
        <p style="margin-top:12px;font-size:0.875rem">If it's urgent, please reach out to us on Facebook or call us directly.</p>
        <button class="btn btn-primary" @click="referralSent = false" style="margin-top:24px;width:100%;justify-content:center">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const mode = ref('contact')

// ── Contact form ──────────────────────────────────────────
const contactSent = ref(false)
const contactError = ref(false)
const contactSubmitting = ref(false)
const contact = ref({ first: '', last: '', email: '', phone: '', subject: '', message: '' })

async function submitContact() {
  contactSubmitting.value = true
  contactError.value = false
  try {
    const res = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${contact.value.first} ${contact.value.last}`.trim(),
        email: contact.value.email,
        phone: contact.value.phone,
        subject: contact.value.subject,
        message: contact.value.message,
      }),
    })
    if (!res.ok) throw new Error('Failed')
    contactSent.value = true
    contact.value = { first: '', last: '', email: '', phone: '', subject: '', message: '' }
  } catch {
    contactError.value = true
  } finally {
    contactSubmitting.value = false
  }
}

// ── Self-referral form ────────────────────────────────────
const supportOptions = [
  'Food / kai',
  'Clothing',
  'Baby & children\'s items',
  'Furniture & household goods',
  'Budgeting support',
  'Family support',
  'Accommodation',
  'Other',
]

const emptyReferral = () => ({
  fullName: '', dob: '', address: '',
  contactMethod: '', contactTime: '',
  supportTypes: [],
  situation: '',
  referredBy: '', referredByOther: '',
  emergencyName: '', emergencyPhone: '',
  consent: false,
})

const referralSent = ref(false)
const referralError = ref(false)
const referralSubmitting = ref(false)
const referral = ref(emptyReferral())

async function submitReferral() {
  if (!referral.value.consent) return
  referralSubmitting.value = true
  referralError.value = false
  try {
    const res = await fetch('/.netlify/functions/send-referral', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(referral.value),
    })
    if (!res.ok) throw new Error('Failed')
    referralSent.value = true
    referral.value = emptyReferral()
  } catch {
    referralError.value = true
  } finally {
    referralSubmitting.value = false
  }
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: start;
}
.forms-area { min-width: 0; }

/* ── Mode toggle ── */
.mode-toggle {
  display: flex;
  gap: 0;
  margin-bottom: 32px;
  border: 2px solid var(--gray-200, #e5e7eb);
  border-radius: 12px;
  overflow: hidden;
  background: var(--gray-50, #f9fafb);
}
.toggle-btn {
  flex: 1;
  padding: 14px 20px;
  font-family: var(--font-head);
  font-size: 0.9rem;
  font-weight: 700;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-muted, #6b7280);
  transition: background 0.18s, color 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  line-height: 1.3;
}
.toggle-btn:hover:not(.active) {
  background: var(--gray-100, #f3f4f6);
  color: var(--navy, #1a2e4a);
}
.toggle-btn.active {
  background: var(--navy, #1a2e4a);
  color: #fff;
}
.referral-toggle.active {
  background: var(--green, #16a34a);
}

/* ── Forms ── */
.form-intro {
  color: var(--text-muted);
  margin-bottom: 28px;
  font-size: 0.95rem;
  line-height: 1.7;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.submit-btn { width: 100%; justify-content: center; font-size: 1rem; padding: 15px; margin-top: 4px; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
.form-error { color: var(--red); font-size: 0.875rem; margin-top: 8px; }

/* ── Referral-specific ── */
.form-fieldset {
  border: none;
  padding: 0;
  margin: 0 0 28px;
}
.form-fieldset legend {
  font-family: var(--font-head);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--navy);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--gray-100, #f3f4f6);
  width: 100%;
}
.fieldset-hint { font-size: 0.875rem; color: var(--text-muted); margin: -8px 0 14px; }

.checkbox-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.925rem;
  color: var(--text);
  cursor: pointer;
  line-height: 1.4;
}
.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 1px;
  accent-color: var(--green, #16a34a);
  cursor: pointer;
}
.consent-fieldset { background: var(--gray-50, #f9fafb); border-radius: 10px; padding: 20px; }
.consent-fieldset legend { font-size: 0.8rem; }
.consent-label { align-items: flex-start; }
.consent-label span { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; }

/* ── Sidebar ── */
.info-card, .donate-card { padding: 28px; margin-bottom: 16px; }
.info-card h3, .donate-card h3 {
  font-family: var(--font-head); font-size: 1rem; font-weight: 800; color: var(--navy); margin-bottom: 20px;
}
.info-list { list-style: none; display: flex; flex-direction: column; gap: 20px; }
.info-list li { display: flex; gap: 14px; align-items: flex-start; }
.info-icon {
  width: 36px; height: 36px; border-radius: 8px; background: var(--gray-50);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
}
.info-list strong { display: block; font-family: var(--font-head); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 4px; font-weight: 700; }
.info-list p { font-size: 0.9rem; color: var(--text); line-height: 1.6; }
.info-list a { color: var(--blue); }
.info-list a:hover { text-decoration: underline; }

.donate-card p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; }
.donate-list { list-style: none; margin: 10px 0; display: flex; flex-direction: column; gap: 6px; }
.donate-list li { font-size: 0.875rem; color: var(--text-muted); padding-left: 16px; position: relative; }
.donate-list li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; }

/* ── Modals ── */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: var(--z-modal); backdrop-filter: blur(4px);
}
.modal { max-width: 420px; width: 90%; padding: 48px 40px; text-align: center; }
.modal-icon { font-size: 3rem; margin-bottom: 16px; }
.modal h2 { font-size: 1.7rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; }
.modal p { color: var(--text-muted); line-height: 1.7; }

/* ── Responsive ── */
@media (max-width: 900px) { .layout { grid-template-columns: 1fr; } }
@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
  .checkbox-grid { grid-template-columns: 1fr; }
  .toggle-btn { font-size: 0.82rem; padding: 12px 12px; }
}
</style>
