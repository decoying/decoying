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

function toggleSearch() {
  const wrapper = document.getElementById('searchWrapper');
  const input = document.getElementById('searchInput');

  wrapper.classList.toggle('open');

  if (wrapper.classList.contains('open')) {
    setTimeout(() => input.focus(), 400);
  } else {
    input.value = '';
  }
}

// Stäng med Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('searchWrapper').classList.remove('open');
    document.getElementById('searchInput').value = '';
  }
});