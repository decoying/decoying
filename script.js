const toggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  toggle.checked = true;
  document.body.classList.add('dark');
}

toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});