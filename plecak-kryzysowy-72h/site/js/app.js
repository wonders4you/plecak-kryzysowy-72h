/* =====================================================================
 * app.js – logika strony "Plecak Kryzysowy / Ewakuacyjny / Survivalowy / Przetrwania 72h"
 * Vanilla JS, bez zależności. Wszystkie treści z window.PA_CONTENT.
 * ===================================================================== */
(function () {
  'use strict';

  // Brak danych – nic nie rób
  if (!window.PA_CONTENT) {
    console.error('Brak window.PA_CONTENT – nie załadowano data/content.js');
    return;
  }
  var C = window.PA_CONTENT;

  /* ---------- Pomocnicze: tworzenie elementów ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!attrs.hasOwnProperty(k)) continue;
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k === 'dataset') {
          for (var d in attrs.dataset) node.dataset[d] = attrs.dataset[d];
        } else if (k.indexOf('on') === 0 && typeof attrs[k] === 'function') {
          node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else {
          node.setAttribute(k, attrs[k]);
        }
      }
    }
    if (children) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  /* ---------- Pomocnicze: lista z elementów ---------- */
  function makeList(items) {
    var ul = el('ul');
    items.forEach(function (i) { ul.appendChild(el('li', { text: i })); });
    return ul;
  }

  /* ---------- Pomocnicze: tabela z wierszy ---------- */
  function makeTable(rows) {
    if (!rows || !rows.length) return el('span');
    var table = el('table');
    var thead = el('thead');
    var headRow = el('tr');
    rows[0].forEach(function (h) { headRow.appendChild(el('th', { text: h })); });
    thead.appendChild(headRow);
    table.appendChild(thead);

    var tbody = el('tbody');
    for (var i = 1; i < rows.length; i++) {
      var tr = el('tr');
      rows[i].forEach(function (cell) { tr.appendChild(el('td', { text: cell })); });
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
  }

  /* ---------- Render: Wprowadzenie ---------- */
  function renderIntro() {
    var sec = document.getElementById('intro');
    if (!sec) return;
    sec.appendChild(el('h2', { text: C.INTRO.title }));
    C.INTRO.body.forEach(function (p) {
      sec.appendChild(el('p', { text: p }));
    });
  }

  /* ---------- Render: Filozofia ---------- */
  function renderPhilosophy() {
    var sec = document.getElementById('filozofia');
    if (!sec) return;
    sec.appendChild(el('h2', { text: C.PHILOSOPHY.title }));
    sec.appendChild(el('p', { text: C.PHILOSOPHY.body }));

    var cards = el('div', { class: 'color-cards' });
    C.PHILOSOPHY.modules.forEach(function (m) {
      cards.appendChild(el('div', { class: 'color-card card-' + m.color }, [
        el('h3', { text: m.emoji + ' ' + m.name }),
        el('p', { class: 'desc', text: m.desc })
      ]));
    });
    sec.appendChild(cards);
  }

  /* ---------- Render: Moduły (rozwijane karty) ---------- */
  function renderModules() {
    var container = document.getElementById('modules-container');
    if (!container) return;

    C.MODULES.forEach(function (mod) {
      var card = el('div', { class: 'module-card module-color-' + mod.color });

      // Nagłówek karty (klik rozwija/zwija)
      var header = el('div', { class: 'module-header', role: 'button', tabindex: '0', 'aria-expanded': 'false' }, [
        el('span', { class: 'module-emoji', text: mod.emoji }),
        el('span', { class: 'module-name', text: mod.name }),
        el('span', { class: 'module-toggle', text: '▶' })
      ]);

      function toggleCard() {
        var open = card.classList.toggle('open');
        header.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
      header.addEventListener('click', toggleCard);
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCard(); }
      });

      card.appendChild(header);

      // Ciało – 7 stałych podsekcji
      var body = el('div', { class: 'module-body' });
      mod.sections.forEach(function (s) {
        var sub = el('div', { class: 'subsection' });
        sub.appendChild(el('h3', { text: s.title }));
        if (s.body) sub.appendChild(el('p', { text: s.body }));
        if (s.list) sub.appendChild(makeList(s.list));
        if (s.table) sub.appendChild(makeTable(s.table));
        body.appendChild(sub);
      });
      card.appendChild(body);
      container.appendChild(card);
    });
  }

  /* ---------- Render: Poziomy ---------- */
  function renderLevels() {
    var sec = document.getElementById('poziomy');
    if (!sec) return;
    sec.appendChild(el('h2', { text: 'Poziomy przygotowania' }));
    sec.appendChild(el('p', { class: 'muted', text: 'Wybierz poziom pasujący do sytuacji, klimatu i budżetu. Możesz rozbudowywać w miarę możliwości.' }));

    C.LEVELS.forEach(function (lvl) {
      var card = el('div', { class: 'level-card' });
      card.appendChild(el('h3', { text: lvl.name }));
      card.appendChild(el('p', { class: 'level-meta', text: 'Waga: ' + lvl.weight + ' · Pojemność plecaka: ' + lvl.capacity }));
      card.appendChild(makeList(lvl.items));
      sec.appendChild(card);
    });
  }

  /* ---------- Render: Scenariusze ---------- */
  function renderScenarios() {
    var sec = document.getElementById('scenariusze');
    if (!sec) return;
    sec.appendChild(el('h2', { text: 'Scenariusze' }));
    sec.appendChild(el('p', { class: 'muted', text: 'Dopasuj plecak do realnych scenariuszy w Twoim regionie.' }));

    C.SCENARIOS.forEach(function (sc) {
      var card = el('div', { class: 'scenario-card' });
      card.appendChild(el('h3', { text: sc.name }));
      card.appendChild(makeList(sc.key));
      sec.appendChild(card);
    });
  }

  /* ---------- Render: Czego nie pakować ---------- */
  function renderDontPack() {
    var sec = document.getElementById('nie-pakowac');
    if (!sec) return;
    sec.appendChild(el('h2', { text: 'Czego NIE pakować' }));
    sec.appendChild(el('p', { class: 'muted', text: 'W plecaku awaryjnym mniej znaczy więcej. Poniżej rzeczy, które często lądują w plecakach, a nie powinny.' }));

    C.DONT_PACK.forEach(function (d) {
      var card = el('div', { class: 'dont-card' });
      card.appendChild(el('h3', { text: d.category }));
      card.appendChild(makeList(d.items));
      sec.appendChild(card);
    });
  }

  /* ---------- Render: Checklista (interaktywna + do druku/kopiowania) ---------- */
  function renderChecklist() {
    var container = document.getElementById('checklist-container');
    if (!container) return;

    C.MODULES.forEach(function (mod) {
      var group = el('div', { class: 'checklist-group module-color-' + mod.color });
      group.appendChild(el('h3', { text: mod.emoji + ' ' + mod.name }));

      // Zbierz elementy z sekcji "Minimum (must-have)"
      var minSection = mod.sections.find(function (s) { return s.title.indexOf('Minimum') === 0; });
      if (!minSection || !minSection.list) return;

      var ul = el('ul');
      minSection.list.forEach(function (item, idx) {
        var id = 'chk-' + mod.id + '-' + idx;
        var input = el('input', { type: 'checkbox', id: id, 'data-module': mod.id });
        var label = el('label', { for: id }, [input, el('span', { text: item })]);
        ul.appendChild(el('li', {}, [label]));
      });
      group.appendChild(ul);
      container.appendChild(group);
    });
  }

  /* ---------- Akcja: Drukuj ---------- */
  function bindPrint() {
    var btn = document.getElementById('btn-print');
    if (btn) btn.addEventListener('click', function () { window.print(); });
  }

  /* ---------- Akcja: Kopiuj checklistę ---------- */
  function bindCopy() {
    var btn = document.getElementById('btn-copy');
    var status = document.getElementById('copy-status');
    if (!btn || !status) return;

    btn.addEventListener('click', function () {
      // Zbuduj tekst checklisty z zaznaczeniami
      var lines = ['=== PLECACZ AWARYJNY 72h – CHECKLISTA ===', ''];
      C.MODULES.forEach(function (mod) {
        lines.push('[' + mod.emoji + ' ' + mod.name.toUpperCase() + ']');
        var minSection = mod.sections.find(function (s) { return s.title.indexOf('Minimum') === 0; });
        if (!minSection || !minSection.list) return;
        minSection.list.forEach(function (item) {
          // Sprawdź stan checkboxa w DOM, jeśli istnieje
          var cb = document.querySelector('input[data-module="' + mod.id + '"][id^="chk-' + mod.id + '-"]');
          // Tu uproszczone: zawsze [ ] – użytkownik może zaznaczać w edytorze
          lines.push('    [ ] ' + item);
        });
        lines.push('');
      });
      lines.push('=== PRZEGLĄD CO 6 MIESIĘCY: leki, racje, woda, baterie, waga ===');

      var text = lines.join('\n');

      function showOk() {
        status.textContent = 'Skopiowano do schowka ✓';
        status.className = 'copy-status ok';
        setTimeout(function () { status.textContent = ''; status.className = 'copy-status'; }, 2500);
      }
      function showErr() {
        status.textContent = 'Nie udało się skopiować – użyj Ctrl+C';
        status.className = 'copy-status err';
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showOk).catch(function () {
          fallbackCopy(text) ? showOk() : showErr();
        });
      } else {
        fallbackCopy(text) ? showOk() : showErr();
      }
    });
  }

  // Rezerwowa metoda kopiowania (starsze przeglądarki / file://)
  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  /* ---------- Motyw jasny/ciemny ---------- */
  function bindTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var icon = btn.querySelector('.theme-icon');

    function updateIcon() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (icon) icon.textContent = dark ? '☀️' : '🌙';
    }
    updateIcon();

    btn.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('pa-theme', 'light'); } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('pa-theme', 'dark'); } catch (e) {}
      }
      updateIcon();
    });
  }

  /* ---------- Nawigacja: aktywny link + smooth scroll ---------- */
  function bindNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
    var sections = links.map(function (l) {
      var id = l.getAttribute('href').slice(1);
      return { link: l, section: document.getElementById(id) };
    }).filter(function (s) { return s.section; });

    // Aktywny link na podstawie scrolla
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            var active = document.querySelector('.nav-link[href="#' + e.target.id + '"]');
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      sections.forEach(function (s) { observer.observe(s.section); });
    }
  }

  /* ---------- Wyszukiwarka ---------- */
  function bindSearch() {
    var input = document.getElementById('search');
    var clear = document.getElementById('search-clear');
    if (!input) return;

    // Zbuduj indeks tekstowy z sekcji i kart modułów
    var index = [];
    function collect(node, owner) {
      if (!node) return;
      var text = node.textContent.toLowerCase();
      if (text) index.push({ node: node, owner: owner || node, text: text });
    }

    // Sekcje główne
    document.querySelectorAll('.section').forEach(function (sec) {
      collect(sec, sec);
    });

    var timer = null;
    function runSearch() {
      var q = input.value.trim().toLowerCase();
      if (clear) clear.classList.toggle('visible', q.length > 0);

      if (!q) {
        // Reset
        index.forEach(function (item) {
          item.node.classList.remove('is-hidden-by-search');
          unhighlight(item.node);
        });
        return;
      }

      index.forEach(function (item) {
        var hit = item.text.indexOf(q) !== -1;
        item.node.classList.toggle('is-hidden-by-search', !hit);
        if (hit) highlight(item.node, q);
      });
    }

    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(runSearch, 120);
    });

    if (clear) {
      clear.addEventListener('click', function () {
        input.value = '';
        runSearch();
        input.focus();
      });
    }
  }

  function highlight(node, q) {
    // Proste wyróżnianie – tylko w liściach tekstowych, bez zepsucia HTML
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.toLowerCase().indexOf(q) !== -1
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    var cur;
    while ((cur = walker.nextNode())) nodes.push(cur);
    nodes.forEach(function (n) {
      var text = n.nodeValue;
      var lower = text.toLowerCase();
      var idx = lower.indexOf(q);
      if (idx === -1) return;
      var frag = document.createDocumentFragment();
      frag.appendChild(document.createTextNode(text.slice(0, idx)));
      var mark = el('mark', { class: 'search-hit', text: text.slice(idx, idx + q.length) });
      frag.appendChild(mark);
      frag.appendChild(document.createTextNode(text.slice(idx + q.length)));
      n.parentNode.replaceChild(frag, n);
    });
  }

  function unhighlight(node) {
    var marks = node.querySelectorAll('mark.search-hit');
    marks.forEach(function (m) {
      var parent = m.parentNode;
      parent.replaceChild(document.createTextNode(m.textContent), m);
      parent.normalize();
    });
  }

  /* ---------- Aktualizacja tekstów z META ---------- */
  function applyMeta() {
    var t = document.getElementById('brand-title');
    if (t) t.textContent = C.META.title;
    var s = document.getElementById('brand-sub');
    if (s) s.textContent = C.META.subtitle;
    var ft = document.getElementById('footer-title');
    if (ft) ft.textContent = C.META.title;
    var fl = document.getElementById('footer-license');
    if (fl) fl.textContent = 'Licencja ' + C.META.license + ' · v' + C.META.version;
    document.title = C.META.title;

    // Linki inspiracji – synchronizuj z content.js (URL + etykieta)
    var mainLink = document.getElementById('inspiration-link-main');
    var footerLink = document.getElementById('inspiration-link-footer');
    [mainLink, footerLink].forEach(function (l) {
      if (!l) return;
      l.setAttribute('href', C.INSPIRATION_LINK);
      l.setAttribute('target', '_blank');
      l.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* ---------- Init ---------- */
  function init() {
    applyMeta();
    renderIntro();
    renderPhilosophy();
    renderModules();
    renderLevels();
    renderScenarios();
    renderDontPack();
    renderChecklist();
    bindPrint();
    bindCopy();
    bindTheme();
    bindNav();
    bindSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
