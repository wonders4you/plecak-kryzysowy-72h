# Wkład w projekt (CONTRIBUTING)

Dziękujemy za chęć współtworzenia projektu **Plecak Kryzysowy / Ewakuacyjny / Survivalowy / Przetrwania 72h**! Ten dokument opisuje, jak dodawać treści i kod tak, żeby projekt pozostał spójny i użyteczny.

## 1. Zasady ogólne

- **Język:** polski.
- **Styl:** rzeczowy, praktyczny, bez paniki i bez marketingu. Skupiamy się na realnych scenariuszach (powódź, pożar, blackout, ewakuacja, korek na autostradzie itp.).
- **Brak promocji komercyjnych** – nie wklejamy linków afiliacyjnych ani reklam sklepów. Wyjątkiem jest jedyny link do inspiracji: [Plecak Awaryjny 17](https://kams.com.pl/p25214,plecak-awaryjny-17.html).
- **Licencja:** MIT. Wkładając treść, zgadzasz się na publikację pod tą licencją.

## 2. Jak zgłosić zmianę

1. Zrób fork repozytorium.
2. Utwórz branch: `feature/<krotki-opis>` lub `fix/<krotki-opis>`.
3. Wprowadź zmiany (patrz sekcje poniżej).
4. Upewnij się, że strona lokalnie działa (patrz `README.md`).
5. Otwórz Pull Request z opisem: **co zmieniono, dlaczego, jaki scenariusz to poprawia**.

Drobne poprawki (literówki, wagi) możesz zgłaszać też jako Issue.

## 3. Dodawanie / modyfikacja treści Markdown (`docs/`)

### Stała struktura pliku modułu

Każdy plik w `docs/03-moduly/` **musi** zawierać następujące sekcje (w tej kolejności):

```markdown
# <Nazwa modułu>

## Po co ten moduł
## Minimum (must-have)
## Dobrze mieć
## Opcjonalnie / zaawansowane
## Orientacyjna waga i objętość
## Typowe błędy
## Alternatywy
```

### Konwencje

- Używaj list punktowanych dla elementów wyposażenia.
- Podawaj orientacyjną wagę (g) i objętość tam, gdzie to sensowne.
- Wagi traktuj jako orientacyjne – zależą od konkretnego modelu sprzętu.
- Unikaj linków do sklepów; zamiast tego opisuj kategorię sprzętu (np. „multitool z nożem, szczypcami i otwieraczem”).

### Checklista

`docs/07-checklista.md` zawiera tabelę Markdown oraz wersję „do skopiowania”. Przy aktualizacji modułów zaktualizuj też checklists.

## 4. Dodawanie nowego modułu

1. Utwórz `docs/03-moduly/<kolor-nazwa>.md` z zachowaniem stałej struktury.
2. Dodaj wpis w `site/data/content.js` (skopiuj strukturę istniejącego modułu).
3. (Opcjonalnie) Dodaj pozycję w nawigacji `site/index.html`.
4. Zaktualizuj `docs/01-filozofia.md` oraz `docs/07-checklista.md`.

## 5. Zmiany w stronie (`site/`)

- **Tylko vanilla HTML5 + CSS + JS.** Żadnych frameworków, bundlerów, Node, npm.
- Strona ma działać offline i po wrzuceniu na GitHub Pages bez builda.
- Wszystkie treści ładowane z `site/data/content.js` – nie hardkoduj treści w `index.html`.
- Kod komentarz po polsku, zwięźle, tam gdzie to pomaga zrozumieć logikę.
- Link do inspiracji musi pozostać w sekcji „Inspiracja” na stronie głównej **oraz** w stopce na każdej podstronie.

## 6. Code style

- Wcięcia: 2 spacje (HTML/CSS/JS) oraz Markdown.
- Linie nie dłuższe niż ~100 znaków (tam gdzie to ma sens).
- Pliki kodowane w UTF-8, końce linii LF.

## 7. Testowanie przed PR

- Otwórz `site/index.html` lokalnie (lub przez `python -m http.server` w katalogu `site/`).
- Sprawdź: nawigację, wyszukiwarkę, rozwijanie/zwijanie sekcji, tryb jasny/ciemny, „Drukuj” i „Kopiuj checklistę”.
- Sprawdź responsywność (wąski ekran telefonu).
- Upewnij się, że link do inspiracji działa i otwiera się w nowej karcie.

## 8. Code of Conduct

Bądź uprzejmy i rzeczowy. Projekt ma charakter edukacyjny – szanuj różne poziomy doświadczenia uczestników. Wszelkie merytoryczne spory rozstrzygamy argumentami i odniesieniami do realnych scenariuszy.

Dziękujemy za wkład!
