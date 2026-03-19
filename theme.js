(function() {
  var saved = localStorage.getItem('theme');
  var theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    updateIcon(btn, theme);
    btn.addEventListener('click', function() {
      theme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateIcon(btn, theme);
    });
  });

  function updateIcon(btn, t) {
    btn.textContent = t === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
    btn.title = t === 'dark' ? 'Light mode' : 'Dark mode';
  }
})();
