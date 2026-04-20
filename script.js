// MESSAGES
const messages = [
  "You are stronger than you think, and I see it every day.",
  "Even on your hardest days, you're still my favorite person.",
  "I’m proud of you, always. Never forget that.",
  "You don’t have to be perfect. You’re already enough.",
  "Every step you take forward matters, no matter how small.",
  "I’ll always be here for you, no matter what.",
  "Your light never fades, even when you feel lost."
];

let index = 0;

function nextMessage() {
  const msg = document.getElementById("message");
  msg.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % messages.length;
    msg.textContent = messages[index];
    msg.style.opacity = 1;
  }, 500);
}

// STAR + HEART GALAXY
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#d9a6ff";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  updateStars();
}

function updateStars() {
  stars.forEach(s => {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

animate();

// RESPONSIVE
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
