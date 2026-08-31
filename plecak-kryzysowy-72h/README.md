# Plecak Kryzysowy / Ewakuacyjny / Survivalowy / Przetrwania 72h

> Otwarte, modularne repozytorium checklisty i wiedzy o plecaku kryzysowym (ewakuacyjnym, survivalowym, przetrwania) na 72h. Zainspirowani gotowym rozwiązaniem **Plecak Awaryjny 17** stworzyliśmy otwartą, rozwijaną przez społeczność wersję z możliwością publikacji jako statyczna strona HTML + vanilla JS.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deploy-success)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

---

## Spis treści

- [O projekcie](#o-projekcie)
- [Inspiracja](#inspiracja)
- [Filozofia 4 modułów](#filozofia-4-modułów)
- [Struktura repozytorium](#struktura-repozytorium)
- [Jak uruchomić stronę lokalnie](#jak-uruchomić-stronę-lokalnie)
- [Jak dodać własny moduł](#jak-dodać-własny-moduł)
- [Wkład w projekt](#wkład-w-projekt)
- [Licencja](#licencja)

---

## O projekcie

Celem projektu jest zebranie czytelnej, praktycznej wiedzy o tym **co, dlaczego i jak** pakować do plecaka kryzysowego (ewakuacyjnego, survivalowego, przetrwania) na pierwsze 72 godziny kryzysu (powódź, pożar, blackout, ewakuacja, korek na autostradzie itp.).

Repozytorium zawiera:

- **`docs/`** – treść merytoryczną w formacie Markdown,
- **`site/`** – gotową do publikacji statyczną stronę (HTML5 + CSS + vanilla JS, bez frameworków, bez bundlerów, bez Node),
- **`.github/workflows/`** – opcjonalny automatyczny deploy na GitHub Pages.

Styl: rzeczowy, praktyczny, bez paniki i bez marketingu. Skupiamy się na realnych scenariuszach.

## Inspiracja

Projekt powstał pod wpływem gotowego, komercyjnego rozwiązania:

- **Zobacz gotowy produkt, który nas zainspirował:** [Plecak Awaryjny 17](https://kams.com.pl/p25214,plecak-awaryjny-17.html)

Repozytorium nie jest kopią produktu – jest otwartą, rozwijaną przez społeczność wersją wiedzy i checklisty, którą każdy może dostosować do własnych potrzeb.

## Filozofia 4 modułów

Plecak podzielony jest na 4 kolorowe moduły (jak w inspiracji Plecak Awaryjny 17):

| Kolor        | Moduł                                       | Zakres                                                |
|--------------|---------------------------------------------|-------------------------------------------------------|
| 🔴 Czerwony  | Pierwsza pomoc                              | Apteczza, opatrunki, leki, narzędzia ratunkowe        |
| ⚪ Szary     | Higiena                                     | Higiena osobista, środki dezynfekujące, zapasy        |
| 🔵 Niebieski | Woda + Żywność                              | Woda, filtry, racje żywnościowe, naczynia             |
| ⚫ Czarny    | Schronienie, światło, narzędzia, komunikacja| Namiot/koc, latarki, multitool, radio, powerbank      |

Szczegóły: [`docs/01-filozofia.md`](./docs/01-filozofia.md) oraz [`docs/03-moduly/`](./docs/03-moduly/).

## Struktura repozytorium

```
plecak-kryzysowy-72h/
├── README.md
├── LICENSE                          # MIT
├── CONTRIBUTING.md
├── docs/                            # treść merytoryczna (Markdown)
│   ├── 00-wprowadzenie.md
│   ├── 01-filozofia.md
│   ├── 02-wybor-plecaka.md
│   ├── 03-moduly/
│   │   ├── czerwony-pierwsza-pomoc.md
│   │   ├── szary-higiena.md
│   │   ├── niebieski-woda-zywnosc.md
│   │   └── czarny-schronienie-narzedzia.md
│   ├── 04-poziomy.md
│   ├── 05-pakowanie-i-waga.md
│   ├── 06-scenariusze.md
│   ├── 07-checklista.md
│   └── 08-czego-nie-pakowac.md
├── site/                            # wersja webowa (vanilla)
│   ├── index.html
│   ├── css/style.css
│   ├── js/app.js
│   ├── data/content.js
│   └── assets/
└── .github/workflows/pages.yml      # automatyczny deploy na GitHub Pages
```

## Jak uruchomić stronę lokalnie

Strona to czysty HTML/CSS/JS – nie wymaga builda ani instalacji zależności.

**Opcja 1 – bez serwera (najprościej):**

Otwórz plik `site/index.html` bezpośrednio w przeglądarce (dwuklik).

> Uwaga: niektóre przeglądarki blokują ładowanie lokalnych skryptów JS przez `file://`. Jeśli wyszukiwarka/sekcje nie działają, użyj opcji 2.

**Opcja 2 – lokalny serwer (zalecane):**

```bash
# Python 3
cd site
python -m http.server 8000
# otwórz http://localhost:8000
```

```bash
# Node (jeśli zainstalowany)
npx serve site
```

```bash
# PHP
cd site
php -S localhost:8000
```

**Opcja 3 – GitHub Pages:**

Po wypchnięciu repo na GitHub, włącz Pages w ustawieniach repo (Source: branch `main`, folder `/site`). Strona będzie dostępna pod adresem:

```
https://<twoj-uzytkownik>.github.io/<nazwa-repo>/
```

Workflow `.github/workflows/pages.yml` robi to automatycznie po pushu na `main`.

## Jak dodać własny moduł

1. **Utwórz plik Markdown** w `docs/03-moduly/`, np. `zielony-psy.md`.
2. Zachowaj stałą strukturę sekcji (patrz `CONTRIBUTING.md`):
   - Po co ten moduł
   - Minimum (must-have)
   - Dobrze mieć
   - Opcjonalnie / zaawansowane
   - Orientacyjna waga i objętość
   - Typowe błędy
   - Alternatywy
3. **Dodaj wpis w `site/data/content.js`** – skopiuj strukturę istniejącego modułu i uzupełnij treść. Strona zaktualizuje się automatycznie.
4. (Opcjonalnie) Dodaj moduł do nawigacji w `site/index.html`.
5. Otwórz Pull Request – patrz [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Wkład w projekt

Zobacz [`CONTRIBUTING.md`](./CONTRIBUTING.md). Pull requesty i issues mile widziane – szczególnie merytoryczne poprawki, nowe scenariusze i doświadczenia z realnych sytuacji.

## Licencja

Projekt na licencji **MIT** – patrz [`LICENSE`](./LICENSE). Treść merytoryczna i kod są wolne do użytku, modyfikacji i redystrybucji.

---

**Inspiracja:** [Plecak Awaryjny 17](https://kams.com.pl/p25214,plecak-awaryjny-17.html)
