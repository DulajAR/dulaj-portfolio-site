const projects = {
  electricity: { title: 'Sri Lanka Electricity Bill Calculator', category: 'MOBILE / EVERYDAY UTILITY', summary: 'A practical Flutter app focused on electricity bill estimates for Sri Lankan consumers.', tags: ['Flutter', 'Dart', 'Bundled tariff assets'], idea: 'Make electricity consumption and bill estimation easier to understand in the Sri Lankan CEB and LECO context, with tariff information bundled into the app for supported offline calculations.', features: ['A Flutter interface for electricity bill estimation.', 'Locally bundled tariff assets for offline tariff support.', 'An open-source codebase for learning and further development.'], note: 'Bill results are estimates. Actual charges depend on the applicable tariff, billing period, taxes, and adjustments. Portfolio visuals are interface illustrations, not screenshots of the released app.', url: 'https://github.com/DulajAR/electricity-bill-calculator', action: 'Explore the source code ↗' },
  tap: { title: 'Tap Rush', category: 'MOBILE / A LITTLE COMPETITION', summary: 'An Android tapping game built with Flutter. A small idea with plenty of opportunities to learn through play.', tags: ['Flutter', 'Dart', 'Android'], idea: 'Build an approachable mobile game around a simple action: tapping. A focused game loop turns timing, feedback, and a clean interface into the core experience.', features: ['A Flutter-based Android game project.', 'Fast-paced tapping gameplay.', 'A repository to explore the implementation and continue developing the idea.'], note: 'The optional browser challenge on this portfolio is a separate miniature demo inspired by the project. It is not the Flutter app. Project artwork is illustrative.', url: 'https://github.com/DulajAR/tap-rush-flutter', action: 'Explore the source code ↗' },
  salon: { title: 'Ishara Salon', category: 'WEB / A LOCAL BUSINESS, ONLINE', summary: 'A salon website project combining a welcoming customer experience with content management.', tags: ['Next.js', 'TypeScript', 'Firebase'], idea: 'Give a salon a digital home where visitors can discover its services and get in touch, while making service content manageable through an admin area.', features: ['A rose-inspired visual direction and service presentation.', 'Firebase authentication for the admin login.', 'Service-management and customer inquiry work developed as part of the project.'], note: 'This project is presented as ongoing development. The portfolio visual is an interface illustration. No unverified live address or client results are claimed.', url: null },
  rental: { title: 'Sukkanama', category: 'WEB + MOBILE / THE NEXT JOURNEY', summary: 'A vehicle rental and booking project connecting vehicle owners with people looking for their next ride.', tags: ['React', 'Vite', 'Firebase', 'Cloudinary', 'Flutter'], idea: 'Bring vehicle discovery, owner listings, and rental bookings into a connected experience. This project has grown through web and mobile development.', features: ['Vehicle discovery and rental booking flows.', 'Owner and customer experiences.', 'A web project using React, Firebase, and Cloudinary, alongside Flutter mobile work.'], note: 'Portfolio artwork is illustrative. The project link opens the separately hosted Sukkanama website.', url: 'https://sukkanama-vehicle-rent.web.app/', action: 'Visit the project ↗' }
};

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); } });

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  document.querySelectorAll('.project').forEach(project => { const visible = category === 'all' || project.dataset.category === category; project.hidden = !visible; if (visible) count++; });
  document.querySelector('.work-count').textContent = `${count} ${category === 'all' ? 'projects, plenty of curiosity' : category === 'mobile' ? 'mobile app projects' : 'web projects'}`;
}));

const projectDialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.project];
  document.querySelector('#dialog-category').textContent = p.category;
  document.querySelector('#dialog-title').textContent = p.title;
  document.querySelector('#dialog-summary').textContent = p.summary;
  document.querySelector('#dialog-idea').textContent = p.idea;
  document.querySelector('#dialog-note').textContent = p.note;
  document.querySelector('#dialog-tags').replaceChildren(...p.tags.map(tag => { const el = document.createElement('span'); el.textContent = tag; return el; }));
  document.querySelector('#dialog-features').replaceChildren(...p.features.map(feature => { const el = document.createElement('li'); el.textContent = feature; return el; }));
  const link = document.querySelector('#dialog-link'); link.hidden = !p.url; if (p.url) { link.href = p.url; link.textContent = p.action; } else link.removeAttribute('href');
  projectDialog.showModal(); document.body.classList.add('dialog-open');
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); });
});

document.querySelector('#copy-email').addEventListener('click', async () => {
  const button = document.querySelector('#copy-email');
  try { await navigator.clipboard.writeText('dulajayeshmantha91@gmail.com'); button.textContent = 'Email copied ✓'; document.querySelector('#copy-status').textContent = 'Email address copied to clipboard.'; }
  catch { button.textContent = 'Select the address above'; document.querySelector('#copy-status').textContent = 'Copy is unavailable in this browser. Please select the email address above.'; }
});

const demoDialog = document.querySelector('#demo-dialog');
const tapTarget = document.querySelector('#tap-target');
const startButton = document.querySelector('#start-game');
const scoreDisplay = document.querySelector('#demo-score');
const timeDisplay = document.querySelector('#demo-time');
const demoStatus = document.querySelector('#demo-status');
const bestDisplay = document.querySelector('#demo-best');
let gameTimer = null, gameDeadline = 0, gameScore = 0, gameActive = false, best = 0;
try { best = Math.max(0, Number(localStorage.getItem('dulaj-tap-demo-best')) || 0); } catch {}
bestDisplay.textContent = String(best);
function endGame(cancelled = false) {
  clearInterval(gameTimer); gameTimer = null; gameActive = false; tapTarget.disabled = true; startButton.disabled = false;
  startButton.textContent = 'Try again ↗';
  if (cancelled) { demoStatus.textContent = 'Challenge paused. Start again when you’re ready.'; return; }
  timeDisplay.innerHTML = '0.0<span>s</span>';
  if (gameScore > best) { best = gameScore; bestDisplay.textContent = String(best); try { localStorage.setItem('dulaj-tap-demo-best', String(best)); } catch {} demoStatus.textContent = `New best here! ${gameScore} taps in 10 seconds.`; }
  else demoStatus.textContent = `${gameScore} taps. Fancy one more try?`;
}
document.querySelector('#open-demo').addEventListener('click', () => { demoDialog.showModal(); document.body.classList.add('dialog-open'); });
startButton.addEventListener('click', () => {
  clearInterval(gameTimer); gameScore = 0; scoreDisplay.textContent = '0'; gameDeadline = performance.now() + 10000; gameActive = true; tapTarget.disabled = false; startButton.disabled = true; demoStatus.textContent = 'Go! Tap the circle — or focus it and use Space or Enter.'; tapTarget.focus();
  const tick = () => { const remaining = Math.max(0, (gameDeadline - performance.now()) / 1000); timeDisplay.innerHTML = `${remaining.toFixed(1)}<span>s</span>`; if (remaining <= 0) endGame(); };
  tick(); gameTimer = setInterval(tick, 50);
});
tapTarget.addEventListener('click', () => { if (!gameActive) return; if (performance.now() >= gameDeadline) { endGame(); return; } gameScore++; scoreDisplay.textContent = String(gameScore); });
demoDialog.addEventListener('close', () => { if (gameActive) endGame(true); });
document.addEventListener('visibilitychange', () => { if (document.hidden && gameActive) endGame(true); });
