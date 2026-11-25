// Console check
console.log('External JS loaded: script.js');

// Find elements once at the top
const themeBtn = document.querySelector('#theme-btn');
const nameInput = document.querySelector('#name');
const livePreview = document.querySelector('#live-preview');
const addSkillBtn = document.querySelector('#add-skill-btn');
const skillsList = document.querySelector('#skills-list');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

// 1. Click event + classList toggle + Change text
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// 2. Read what is typed (live input event)
nameInput.addEventListener('input', () => {
  const typedName = nameInput.value.trim();
  livePreview.textContent = typedName ? `Hello, ${typedName}!` : 'Hello, visitor!';
});

// 3. Add an element (create, fill, append)
addSkillBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Vercel';
  skillsList.append(li);
  addSkillBtn.disabled = true;
  addSkillBtn.textContent = 'Added!';
});

// 4. Key press event
document.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
});

// 5. Handle form submit without reloading
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = nameInput.value.trim() || 'friend';
  formStatus.textContent = `Thanks, ${userName}! Your message has been received.`;
  contactForm.reset();
  livePreview.textContent = 'Hello, visitor!';
});