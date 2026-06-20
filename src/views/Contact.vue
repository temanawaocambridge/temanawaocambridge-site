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

      <form @submit.prevent="submit" class="contact-form" novalidate aria-label="Contact form">
        <h2 class="section-title">Send a Message</h2>
        <p style="color:var(--text-muted);margin-bottom:28px;font-size:0.95rem;line-height:1.7">Whether you need support, have items to donate, or want to get involved — fill in the form and we'll get back to you as soon as we can.</p>

        <div class="form-row">
          <div class="form-group">
            <label for="c-first">First Name *</label>
            <input id="c-first" v-model="form.first" type="text" required autocomplete="given-name" placeholder="Your first name" />
          </div>
          <div class="form-group">
            <label for="c-last">Last Name *</label>
            <input id="c-last" v-model="form.last" type="text" required autocomplete="family-name" placeholder="Your last name" />
          </div>
        </div>
        <div class="form-group">
          <label for="c-email">Email *</label>
          <input id="c-email" v-model="form.email" type="email" required autocomplete="email" placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label for="c-phone">Phone</label>
          <input id="c-phone" v-model="form.phone" type="tel" autocomplete="tel" placeholder="Your phone number" />
        </div>
        <div class="form-group">
          <label for="c-subject">How can we help?</label>
          <select id="c-subject" v-model="form.subject">
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
          <textarea id="c-msg" v-model="form.message" required placeholder="Tell us how we can help..." style="min-height:140px"></textarea>
        </div>
        <p v-if="error" class="form-error">Something went wrong — please try again or contact us on Facebook.</p>
        <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
          {{ submitting ? 'Sending…' : 'Send Message' }}
          <svg v-if="!submitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </form>

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

  <Teleport to="body">
    <div v-if="sent" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" @click.self="sent = false">
      <div class="modal card">
        <div class="modal-icon">✉️</div>
        <h2 id="contact-modal-title">Kua tukuna!</h2>
        <p>Thank you for your message. We'll be in touch as soon as we can.</p>
        <button class="btn btn-primary" @click="sent = false" style="margin-top:24px;width:100%;justify-content:center">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const sent = ref(false)
const error = ref(false)
const submitting = ref(false)
const form = ref({ first: '', last: '', email: '', phone: '', subject: '', message: '' })

async function submit() {
  submitting.value = true
  error.value = false
  try {
    const res = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${form.value.first} ${form.value.last}`.trim(),
        email: form.value.email,
        phone: form.value.phone,
        subject: form.value.subject,
        message: form.value.message,
      }),
    })
    if (!res.ok) throw new Error('Failed')
    sent.value = true
    form.value = { first: '', last: '', email: '', phone: '', subject: '', message: '' }
  } catch {
    error.value = true
  } finally {
    submitting.value = false
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
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.submit-btn { width: 100%; justify-content: center; font-size: 1rem; padding: 15px; margin-top: 4px; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
.form-error { color: var(--red); font-size: 0.875rem; margin-top: 8px; }

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

.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: var(--z-modal); backdrop-filter: blur(4px);
}
.modal { max-width: 400px; width: 90%; padding: 48px 40px; text-align: center; }
.modal-icon { font-size: 3rem; margin-bottom: 16px; }
.modal h2 { font-size: 1.7rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; }
.modal p { color: var(--text-muted); line-height: 1.7; }

@media (max-width: 900px) { .layout { grid-template-columns: 1fr; } }
@media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
</style>
