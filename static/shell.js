document.addEventListener('DOMContentLoaded', function () {
  var check = document.getElementById('nav-toggle');
  var toggle = document.querySelector('.nav-toggle');
  var sidebar = document.getElementById('sidebar');

  function setExpanded(open) {
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('nav-open', open);
  }

  if (check) {
    check.addEventListener('change', function () {
      setExpanded(check.checked);
    });
  }

  function closeNav() {
    if (!check) return;
    check.checked = false;
    setExpanded(false);
  }

  function closeSwitchers(except) {
    document.querySelectorAll('.switcher[open]').forEach(function (panel) {
      if (panel !== except) panel.open = false;
    });
  }

  document.querySelectorAll('.switcher').forEach(function (panel) {
    panel.addEventListener('toggle', function () {
      if (panel.open) closeSwitchers(panel);
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.switcher')) closeSwitchers(null);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    closeSwitchers(null);
    closeNav();
  });

  if (sidebar) {
    sidebar.querySelectorAll('summary a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        if (window.matchMedia('(max-width: 960px)').matches) closeNav();
      });
    });
    sidebar.addEventListener('click', function (event) {
      if (!event.target.closest('a')) return;
      if (window.matchMedia('(max-width: 960px)').matches) closeNav();
    });
  }

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 961px)').matches) closeNav();
  });

  var filter = document.getElementById('nav-filter');
  var tree = document.querySelector('.sidebar-tree');
  if (filter && tree) {
    var form = filter.closest('form');
    if (form) form.addEventListener('submit', function (event) { event.preventDefault(); });

    filter.addEventListener('input', function () {
      var query = filter.value.trim().toLowerCase();
      var links = tree.querySelectorAll('a');
      links.forEach(function (link) {
        var match = !query || link.textContent.toLowerCase().indexOf(query) !== -1;
        link.classList.toggle('filter-miss', !match);
      });

      tree.querySelectorAll('details').forEach(function (panel) {
        if (!query) {
          panel.classList.remove('filter-miss');
          if (panel.hasAttribute('data-filter-opened')) {
            panel.open = panel.getAttribute('data-filter-opened') === '1';
            panel.removeAttribute('data-filter-opened');
          }
          return;
        }
        var summary = panel.querySelector(':scope > summary');
        var summaryMatch = summary && summary.textContent.toLowerCase().indexOf(query) !== -1;
        if (summaryMatch) {
          panel.querySelectorAll('a.filter-miss').forEach(function (link) {
            link.classList.remove('filter-miss');
          });
        }
        var childMatch = false;
        panel.querySelectorAll('a').forEach(function (link) {
          if (!link.classList.contains('filter-miss')) childMatch = true;
        });
        var show = summaryMatch || childMatch;
        panel.classList.toggle('filter-miss', !show);
        if (show) {
          if (!panel.hasAttribute('data-filter-opened')) {
            panel.setAttribute('data-filter-opened', panel.open ? '1' : '0');
          }
          panel.open = true;
        }
      });
    });
  }
});
