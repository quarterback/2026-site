/* ──────────────────────────────────────────────────────────
   Projects renderer — data, not hand-written HTML.

   Reads projects.json and renders each entry by one rule:
     · a project WITH an image   → a screenshot card in the grid
     · a project WITHOUT an image → a title-plus-blurb row in a list
   "Current" work renders first; "Past work" renders into a
   separate list that can be shown or hidden with the toggle.
   ────────────────────────────────────────────────────────── */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* A project with an image → framed screenshot card. */
  function card(p) {
    var el = document.createElement('article');
    el.className = 'cell';

    var head = '';
    if (p.url) {
      head =
        '<div class="cell__head"><a class="live-link" href="' +
        esc(p.url) + '" target="_blank" rel="noopener">Visit the project</a></div>';
    }

    var titleInner = p.url
      ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>'
      : esc(p.title);

    var mediaOpen = p.url
      ? '<a class="cell__media" href="' + esc(p.url) +
        '" target="_blank" rel="noopener" aria-label="' + esc(p.title) + '">'
      : '<div class="cell__media">';
    var mediaClose = p.url ? '</a>' : '</div>';

    el.innerHTML =
      head +
      '<h2 class="cell__title">' + titleInner + '</h2>' +
      mediaOpen +
      '<svg class="ph" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="1600" height="1000" fill="url(#m3a)"/></svg>' +
      '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" />' +
      mediaClose +
      '<p class="cell__prose">' + esc(p.blurb) + '</p>';
    return el;
  }

  /* A project without an image → simple title-plus-blurb row. */
  function row(p) {
    var el = document.createElement('li');
    el.className = 'row';
    var title = p.url
      ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>'
      : esc(p.title);
    el.innerHTML =
      '<h3 class="row__title">' + title + '</h3>' +
      '<p class="row__blurb">' + esc(p.blurb) + '</p>';
    return el;
  }

  /* Split a list into image cards and text rows, render into the
     given grid + list containers. */
  function renderGroup(items, grid, list) {
    var hasCards = false, hasRows = false;
    items.forEach(function (p) {
      if (p.image) { grid.appendChild(card(p)); hasCards = true; }
      else { list.appendChild(row(p)); hasRows = true; }
    });
    grid.hidden = !hasCards;
    list.hidden = !hasRows;
  }

  function init(data) {
    renderGroup(
      data.current || [],
      document.getElementById('grid'),
      document.getElementById('list')
    );

    var past = data.past || [];
    if (past.length) {
      renderGroup(
        past,
        document.getElementById('past-grid'),
        document.getElementById('past-list')
      );
    } else {
      var sec = document.getElementById('past');
      if (sec) sec.hidden = true;
    }

    /* Show / hide the Past work block. */
    var toggle = document.getElementById('past-toggle');
    var body = document.getElementById('past-body');
    if (toggle && body) {
      toggle.addEventListener('click', function () {
        var open = body.hidden;
        body.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Hide past work' : 'Show past work';
      });
    }
  }

  fetch('projects.json')
    .then(function (r) { return r.json(); })
    .then(init)
    .catch(function (e) {
      var grid = document.getElementById('grid');
      if (grid) grid.innerHTML =
        '<p style="font-family:var(--mono);font-size:13px">Could not load projects.json — ' +
        esc(e.message) + '</p>';
    });
})();
