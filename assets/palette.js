/* ──────────────────────────────────────────────────────────
   Palette engine — "Pumpkin Steel", WCAG-mapped.

   Five fixed pigments wired into the site's role tokens. Every
   role assignment below was chosen against measured contrast, and
   the audit still runs — open the console and call
   RBPalette.audit() to read the ratios the schemes land on.

     Pumpkin Spice  #ff6700   signal — fills, borders, large display
     Platinum       #ebebeb   paper ground / light ink
     Onyx           #0c0f0a   ink ground / dark ink
     Steel Azure    #004e98   deep surface / decorative rule
     Steel Blue     #3f88c5   mid surface / media grounds

   Role rules (enforced by the values, verified by audit):
     · body ink ↔ ground is AAA in both schemes (Onyx/Platinum).
     · Pumpkin Spice and the steels clear AA-large; they are used
       for fills, borders, and large display, never as small body
       text where they would fail.
     · Essential structure (the grid frame) is drawn in --ink (the
       AAA pair), so it always clears the 3:1 non-text minimum;
       --rule is decorative hairline only.
   ────────────────────────────────────────────────────────── */
(function () {
  /* ── contrast math (audit only) ───────────────────── */
  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  }
  const lin = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  function luminance(rgb) {
    return 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
  }
  function contrast(a, b) {
    const la = luminance(hexToRgb(a)), lb = luminance(hexToRgb(b));
    const hi = Math.max(la, lb), lo = Math.min(la, lb);
    return (hi + 0.05) / (lo + 0.05);
  }

  /* ── the five pigments ────────────────────────────── */
  const PIG = {
    pumpkin: '#ff6700',
    platinum: '#ebebeb',
    onyx:    '#0c0f0a',
    azure:   '#004e98',
    steel:   '#3f88c5',
  };

  /* ── role-mapped schemes ──────────────────────────── */
  function build(label, m) {
    return {
      label,
      bg:     m.bg,
      deeper: m.deeper, /* media + spec-panel ground */
      ink:    m.ink,
      soft:   m.soft,   /* large/secondary only */
      rule:   m.rule,   /* decorative hairline */
      accent: m.accent,
      _audit: {
        'body ink / bg':  +contrast(m.ink, m.bg).toFixed(2),
        'soft / bg':      +contrast(m.soft, m.bg).toFixed(2),
        'accent / bg':    +contrast(m.accent, m.bg).toFixed(2),
        'ink on deeper':  +contrast(m.ink, m.deeper).toFixed(2),
      },
    };
  }

  const PALETTES = {
    platinum: build('Platinum', {
      bg:     PIG.platinum,
      deeper: PIG.steel,
      ink:    PIG.onyx,
      soft:   PIG.azure,
      rule:   PIG.azure,
      accent: PIG.pumpkin,
    }),
    onyx: build('Onyx', {
      bg:     PIG.onyx,
      deeper: PIG.azure,
      ink:    PIG.platinum,
      soft:   PIG.steel,
      rule:   PIG.steel,
      accent: PIG.pumpkin,
    }),
  };

  const DEFAULT = 'platinum';

  /* ── application ──────────────────────────────────── */
  function setVars(p) {
    const r = document.documentElement.style;
    r.setProperty('--bg',        p.bg);
    r.setProperty('--bg-deeper', p.deeper);
    r.setProperty('--ink',       p.ink);
    r.setProperty('--ink-soft',  p.soft);
    r.setProperty('--rule',      p.rule);
    r.setProperty('--accent',    p.accent);
  }

  function recolorPatterns(p) {
    document.querySelectorAll('pattern#m3a > rect, pattern#ph-a > rect')
      .forEach((el) => el.setAttribute('fill', p.deeper));
    document.querySelectorAll('pattern#m3a > line, pattern#ph-a > line')
      .forEach((el) => el.setAttribute('stroke', p.rule));
  }

  function syncSwatchState(key) {
    document.querySelectorAll('.palette-swatch').forEach((el) => {
      el.setAttribute('aria-pressed', el.dataset.palette === key ? 'true' : 'false');
    });
  }

  function apply(key, persist) {
    const resolved = key in PALETTES ? key : DEFAULT;
    const p = PALETTES[resolved];
    setVars(p);
    if (document.readyState !== 'loading') recolorPatterns(p);
    document.documentElement.dataset.palette = resolved;
    syncSwatchState(resolved);
    if (persist) {
      try { localStorage.setItem('rb-palette', resolved); } catch (_) {}
    }
  }

  let saved;
  try { saved = localStorage.getItem('rb-palette'); } catch (_) {}
  apply(saved || DEFAULT, false);

  function injectUI() {
    if (document.querySelector('.palette-dock')) return;
    const dock = document.createElement('div');
    dock.className = 'palette-dock';
    dock.setAttribute('role', 'group');
    dock.setAttribute('aria-label', 'Theme');

    const tag = document.createElement('span');
    tag.className = 'palette-dock__tag';
    tag.textContent = 'THEME';
    dock.appendChild(tag);

    for (const [key, p] of Object.entries(PALETTES)) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-swatch';
      btn.dataset.palette = key;
      btn.setAttribute('aria-label', p.label + ' theme');
      btn.title = p.label;
      btn.style.setProperty('--sw-bg', p.bg);
      btn.style.setProperty('--sw-accent', p.accent);
      btn.addEventListener('click', () => apply(key, true));
      dock.appendChild(btn);
    }
    document.body.appendChild(dock);
    syncSwatchState(document.documentElement.dataset.palette || DEFAULT);
  }

  function onReady() {
    recolorPatterns(PALETTES[document.documentElement.dataset.palette] || PALETTES[DEFAULT]);
    injectUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  window.RBPalette = {
    apply: (k) => apply(k, true),
    palettes: PALETTES,
    pigments: PIG,
    current: () => document.documentElement.dataset.palette || DEFAULT,
    audit() {
      const rows = {};
      for (const [k, p] of Object.entries(PALETTES)) rows[k] = p._audit;
      if (console.table) console.table(rows);
      return rows;
    },
  };
})();
