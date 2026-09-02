# 72h — Plecak kryzysowy

Lokalna, interaktywna checklista na pierwsze 72 godziny kryzysu: domownicy, waga, daty ważności, ICE, scenariusze i kopia JSON. Dane zostają w przeglądarce — bez konta.

**Autor:** [wonders4you](https://wonders4you.com/) · licencja [MIT](LICENSE)

## Linki

- Repozytorium: [github.com/wonders4you/plecak-kryzysowy-72h](https://github.com/wonders4you/plecak-kryzysowy-72h)
- Strona (dokumentacja HTML): [wonders4you.github.io/plecak-kryzysowy-72h](https://wonders4you.github.io/plecak-kryzysowy-72h/)
- Inspiracja: [kams.com.pl — plan na 3 dni bez prądu](https://kams.com.pl/a840,co-zrobic-gdy-zabraknie-pradu-na-3-dni-sprawdzony-plan-awaryjny.html)
- BHP: [bhp4all.pl](https://bhp4all.pl)

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja nasłuchuje na porcie 8080.

## Co jest w środku

| Zakładka | Co robi |
|---|---|
| Start | Gotowość, scenariusz, waga |
| Plecak | Checklista, sticky waga, znaczniki Kluczowe / Region |
| Teraz | Kolejność chwytania przy ewakuacji |
| Daty | Przeglądy, Google Calendar, plik .ics |
| Domownicy | Osoby, zima, region, poziom |
| ICE | Kontakty, druk, PDF |
| Wiedza | Artykuły, scenariusze, FAQ |
| Kopia | JSON, CSV, Google Sheets |

Katalog Markdown i stara strona HTML zostają w `plecak-kryzysowy-72h/`.
