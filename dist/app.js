const CALENDAR = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ35BDJzpHmkNnrWup1emt8qsjTbRtUaaSYRDJSD4R88lS2orxpdqotV0sGKTnu-iuhlQciatRWh';
document.querySelectorAll('[data-demo]').forEach(a => { a.href = CALENDAR; a.target = '_blank'; a.rel = 'noopener'; });
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`AppKeyId inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nInterest: ${data.get('interest')}\n\n${data.get('message')}`);
  document.querySelector('.status').textContent = 'Opening your email client with this message…';
  window.location.href = `mailto:info@cosync.io?subject=${subject}&body=${body}`;
});
