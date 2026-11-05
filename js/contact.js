// ---------- CONTACT FORM (Formspree, no page reload) ----------
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    formStatus.className = 'form-status sending';
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formStatus.textContent = "Sent — we'll get back to you shortly.";
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.className = 'form-status error';
      }
    } catch (err) {
      formStatus.textContent = "Network error. Please try again.";
      formStatus.className = 'form-status error';
    }
  });
}

