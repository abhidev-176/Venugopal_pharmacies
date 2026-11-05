// ---------- CAROUSEL NAVIGATION ----------
const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalSlides = document.querySelectorAll('.slide').length;
let current = 0;

function goTo(index){
  current = Math.max(0, Math.min(totalSlides - 1, index));
  track.style.transform = `translateX(-${current * 100}vw)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === totalSlides - 1;
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

dots.forEach(dot => {
  dot.addEventListener('click', () => goTo(parseInt(dot.dataset.goto, 10)));
});

document.querySelectorAll('.nav-links span').forEach(link => {
  link.addEventListener('click', () => goTo(parseInt(link.dataset.goto, 10)));
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') goTo(current + 1);
  if(e.key === 'ArrowLeft') goTo(current - 1);
});

// Homepage buttons -> jump to Medicines slide (index 2)
document.getElementById('orderNowBtn').addEventListener('click', () => goTo(2));
document.getElementById('uploadRxBtn').addEventListener('click', () => goTo(2));

goTo(0);

