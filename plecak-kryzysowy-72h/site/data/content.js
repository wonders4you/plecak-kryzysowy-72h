/* =====================================================================
 * content.js – treść strony "Plecak Kryzysowy / Ewakuacyjny / Survivalowy / Przetrwania 72h"
 * Wszystkie treści ładowane z tego pliku. Edytuj tutaj, nie w index.html.
 * Struktura: sekcje + moduły z 7 stałymi podsekcjami.
 * ===================================================================== */

const INSPIRATION_LINK = 'https://kams.com.pl/p25214,plecak-awaryjny-17.html';
const INSPIRATION_LABEL = 'Plecak Awaryjny 17';

/* Metadane projektu (do nagłówka / stopki) */
const META = {
  title: 'Plecak Kryzysowy / Ewakuacyjny / Survivalowy / Przetrwania 72h',
  subtitle: 'Otwarta, modularna checklista i wiedza o plecaku kryzysowym (ewakuacyjnym, survivalowym, przetrwania)',
  version: '1.0',
  license: 'MIT'
};

/* Wprowadzenie – sekcja tekstowa na stronie głównej */
const INTRO = {
  id: 'intro',
  title: 'Wprowadzenie',
  body: [
    'Plecak kryzysowy (nazywany też ewakuacyjnym, survivalowym lub plecakiem przetrwania) to zbiór najważniejszych rzeczy, które pozwalają przetrwać i funkcjonować przez pierwsze 72 godziny kryzysu – czasu, w którym zazwyczaj rusza pomoc państwowa i służby. Nie jest to „plecak survivalisty na koniec świata”, lecz praktyczny zestaw na realne sytuacje: powódź, pożar, blackout, ewakuację, korek na autostradzie.',
    'Projekt jest otwarty (licencja MIT) – możesz go skopiować, zmodyfikować i dostosować do swoich potrzeb (region, klimat, liczba osób, leki).'
  ]
};

/* Filozofia 4 modułów – opis kolorów */
const PHILOSOPHY = {
  id: 'filozofia',
  title: 'Filozofia 4 modułów',
  body: 'Plecak podzielony jest na 4 kolorowe moduły (jak w inspiracji Plecak Awaryjny 17). Podział pozwala szybko znaleźć rzeczy w stresie i przy słabym świetle, oraz łatwo przeglądać i uzupełniać zapasy.',
  modules: [
    { color: 'czerwony',  emoji: '🔴', name: 'Pierwsza pomoc',                              desc: 'Apteczka, opatrunki, leki, koc termiczny' },
    { color: 'szary',     emoji: '⚪', name: 'Higiena',                                       desc: 'Higiena osobista, dezynfekcja, zapasy' },
    { color: 'niebieski', emoji: '🔵', name: 'Woda + Żywność',                                desc: 'Woda, filtry, racje, naczynia, kuchenka' },
    { color: 'czarny',    emoji: '⚫', name: 'Schronienie, światło, narzędzia, komunikacja', desc: 'Koc/namiot, latarki, multitool, radio, powerbank, dokumenty' }
  ]
};

/* Moduły – każdy z 7 stałymi podsekcjami (zgodnie z CONTRIBUTING.md) */
const MODULES = [
  {
    id: 'czerwony',
    color: 'czerwony',
    emoji: '🔴',
    name: 'Pierwsza pomoc',
    sections: [
      { title: 'Po co ten moduł', body: 'W pierwszych 72h po zdarzeniu pomoc medyczna może nie dotrzeć przez godziny lub dni. Moduł pozwala zatamować krwawienie, opatrzyć rany, podać leki, utrzymać ciepło.' },
      { title: 'Minimum (must-have)', list: [
        'Apteczka domowa z rozszerzeniem urazowym',
        'Bandaże elastyczne (2 szt.)',
        'Gaza sterylna (kilka opakowań)',
        'Plastry wodoodporne (zestaw)',
        'Taśma medyczna',
        'Nożyczki (tępe końce)',
        'Pęseta',
        'Rękawiczki nitrylowe (2–3 pary)',
        'Koc termiczny NRC (1–2 szt.)',
        'Leki podstawowe (paracetamol, ibuprofen, przeciwbiegunkowy, elektrolity)',
        'Leki osobiste (3 dni + ulotka)',
        'Maseczka FFP2 (1–2 szt.)',
        'Instrukcja pierwszej pomocy (laminowana)'
      ]},
      { title: 'Dobrze mieć', list: [
        'Staz turystyczny / tourniquet (jeśli umiesz używać)',
        'Aplikator oparzeniowy / żel na oparzenia',
        'Spray odkażający (oktenidyna)',
        'Szyny usztywniające',
        'Termometr bezdotykowy',
        'Apteczka dla kobiet (podpaski, leki)',
        'Apteczka dla dziecka (syrop, dawkownik)'
      ]},
      { title: 'Opcjonalnie / zaawansowane', list: [
        'Klips hemostatyczny do nosa',
        'Strzykawki i igły (jeśli wymagane)',
        'Glukagon / insulina zapas (w termosie chłodzącym)',
        'EpiPen (przy alergii na jad owadów)',
        'Kurs pierwszej pomocy – najlepszy „sprzęt” to wiedza'
      ]},
      { title: 'Orientacyjna waga i objętość', table: [
        ['Element', 'Waga (g)', 'Objętość'],
        ['Apteczka podstawowa', '400–700', '~1,5 L'],
        ['Koc termiczny (2 szt.)', '120', 'mała'],
        ['Leki osobiste', '50–150', 'mała'],
        ['Tourniquet', '80', 'bardzo mała'],
        ['Rękawiczki (3 pary)', '30', 'bardzo mała'],
        ['Razem (minimum)', '~700–1100', '~2 L']
      ]},
      { title: 'Typowe błędy', list: [
        'Brak przeglądu – leki przeterminowane, plastry wyschnięte',
        'Brak rękawiczek – zakażenie podczas ratowania kogoś',
        'Brak nożyczek – nie utniesz ubrania nad raną',
        'Tylko plastry – na większą ranę potrzebna gaza + bandaż',
        'Leki bez ulotek – w stresie nie pamiętasz dawkowania',
        'Apteczka na dnie plecaka – tracisz minuty',
        'Zbyt dużo leków „na wszelki wypadek” – waga rośnie'
      ]},
      { title: 'Alternatywy', list: [
        'Gotowe apteczki turystyczne – dobry start, ale uzupełnij o leki osobiste i koc NRC',
        'Apteczka samochodowa (wymagana w PL) – minimum prawne, za słaba na 72h',
        'Koc termiczny vs śpiwór – koc ratuje życie w 30 min, śpiwór jest na noc'
      ]}
    ]
  },
  {
    id: 'szary',
    color: 'szary',
    emoji: '⚪',
    name: 'Higiena',
    sections: [
      { title: 'Po co ten moduł', body: 'Po katastrofach choroby zakaźne zabijają więcej ludzi niż samo zdarzenie. Brak wody, tłok i stres osłabiają odporność. Moduł pozwala utrzymać higienę, odkażać ręce i powierzchnie, załatwiać potrzeby w warunkach polowych.' },
      { title: 'Minimum (must-have)', list: [
        'Mydło w kostce lub płyn (travel size)',
        'Żel antybakteryjny do rąk (min. 60% alkoholu, 100 ml)',
        'Chusteczki nawilżane (1 paczka)',
        'Ręcznik z mikrofibry',
        'Szczoteczka i pasta do zębów',
        'Papier toaletowy (w worku zip-lock)',
        'Worki na śmieci (5–10 szt.)',
        'Podpaski / tampony (mogą służyć jako opatrunek, filtr, zapłon)',
        'Tabletki do odkażania wody (podwójne zastosowanie)',
        'Worki na nieczystości / „kibelek”'
      ]},
      { title: 'Dobrze mieć', list: [
        'Szampon suchy',
        'Maszynka do golenia',
        'Krem ochronny / wazelina na odparzenia',
        'Pieluchy (dziecko / dorosły)',
        'Środek do prania w podróży',
        'Okulary przeciwsłoneczne',
        'Krem z filtrem UV',
        'Pęseta i lusterko'
      ]},
      { title: 'Opcjonalnie / zaawansowane', list: [
        'Toaletka turystyczna z workiem na nieczystości (WAG bag)',
        'Siedzisko / namiot toaletowy',
        'Bidet podróżny / butelka z dziobem',
        'Środek do dezynfekcji powierzchni (alkohol 70%)',
        'Rękawiczki nitrylowe (część wspólna z modułem czerwonym)'
      ]},
      { title: 'Orientacyjna waga i objętość', table: [
        ['Element', 'Waga (g)', 'Objętość'],
        ['Mydło + żel + chusteczki', '250', '~0,5 L'],
        ['Ręcznik mikrofibra', '100', 'mała'],
        ['Papier toaletowy', '150', '~0,5 L'],
        ['Worki na śmieci (10)', '50', 'mała'],
        ['Zestaw do zębów', '50', 'mała'],
        ['Podpaski (10)', '50', 'mała'],
        ['Razem (minimum)', '~650', '~1,5 L']
      ]},
      { title: 'Typowe błędy', list: [
        'Brak papieru toaletnego – w hali ewakuacyjnej kończy się w 2 h',
        'Brak worków na śmieci – nie masz gdzie wrzucić mokrych rzeczy',
        'Perfumy zamiast mydła – nie zastąpią higieny',
        'Brak żelu antybakteryjnego',
        'Zapomnienie o podpaskach',
        'Brak chusteczek nawilżanych',
        'Duże opakowania szamponów – używaj travel-size'
      ]},
      { title: 'Alternatywy', list: [
        'Mydło szare / w kostce – uniwersalne, tanie',
        'Chusteczki dla dzieci – tańsze niż „trekkingowe”',
        'Worek zip-lock zamiast kosmetyczki – wodoodporny',
        'Płyny w mini-butelkach z odmierzanymi dawkami'
      ]}
    ]
  },
  {
    id: 'niebieski',
    color: 'niebieski',
    emoji: '🔵',
    name: 'Woda + Żywność',
    sections: [
      { title: 'Po co ten moduł', body: 'Człowiek przeżyje bez jedzenia tygodnie, ale bez wody 3 dni. W kryzysie woda z kranu może być niedostępna lub skażona. Moduł pozwala nieść zapas wody, uzdatniać wodę ze źródeł, przygotować i zjeść racje.' },
      { title: 'Minimum (must-have)', list: [
        'Woda – 2 L na osobę na dobę (w plecaku 2–3 L + środek uzdatniający)',
        'Butelka / bukłak z szerokim gwintem (1–2 L)',
        'Tabletki do uzdatniania wody (~30 szt.)',
        'Racje żywnościowe – min. 2000 kcal/dobę (puszki, liofilizaty, batony)',
        'Nóż / otwieracz do puszek',
        'Kubek / menażka metalowa',
        'Sól w saszetkach (elektrolity + smak + odkażanie)'
      ]},
      { title: 'Dobrze mieć', list: [
        'Filtr wody (słomkowy / pump)',
        'Kuchenka turystyczna + kartusz',
        'Zapalniczka / krzesiwo',
        'Mleko w proszku / kawa / herbata',
        'Elektrolity w saszetkach',
        'Witamina C / multiwitaminy',
        'Saszetki zupy błyskawicznej',
        'Kubek termiczny',
        'Spork / sztućce'
      ]},
      { title: 'Opcjonalnie / zaawansowane', list: [
        'System filtrujący z workiem (gravity filter) – dla rodziny',
        'Tabletki jodowe – alternatywa dla chloru',
        'UV-sterylizator (SteriPen) – wymaga baterii',
        'Liofilizaty domowe – tanie i lekkie',
        'Kuchenka na drewno (gasifier) – bez paliwa, ale dymi',
        'Słoje z gotowym jedzeniem (konserwy domowe)'
      ]},
      { title: 'Orientacyjna waga i objętość', table: [
        ['Element', 'Waga (g)', 'Objętość'],
        ['Woda 2 L', '2000', '2 L'],
        ['Butelka 1 L (pusta)', '100', '1 L'],
        ['Tabletki do uzdatniania (30)', '30', 'bardzo mała'],
        ['Filtr słomkowy', '60', 'mała'],
        ['Racje 72h (liofilizaty + batony)', '600–900', '~1,5 L'],
        ['Kubek metalowy', '150', '~0,3 L'],
        ['Kuchenka + kartusz mały', '350', '~0,5 L'],
        ['Razem (minimum)', '~3000–3500', '~4 L']
      ]},
      { title: 'Typowe błędy', list: [
        'Za dużo wody, za mało jedzenia – 6 L = 6 kg, nie do noszenia',
        'Brak środka do uzdatniania – skończy się woda, a Ty nie oczyścisz rzeczowej',
        'Tylko słodycze – potrzebne białko i tłuszcz (puszki, orzechy)',
        'Brak soli – w upale tracisz elektrolity',
        'Jedzenie wymagające gotowania bez kuchenki',
        'Brak otwieracza do puszek',
        'Konserwy w szklanych puszkach – tłuką się i ważą',
        'Brak przeglądu – przeterminowane racje, zardzewiała kuchenka'
      ]},
      { title: 'Alternatywy', list: [
        'Woda w woreczkach „mylar” – tańsze, lżejsze, ale delikatne',
        'Słomkowy filtr zamiast tabletek – szybszy, ale nie działa na wirusy',
        'Kuchenka na pastylki (Esbit) – ultra lekka, ale mało wydajna',
        'Jedzenie z domowej spiżarni – puszki i słoje, które rotujesz'
      ]}
    ]
  },
  {
    id: 'czarny',
    color: 'czarny',
    emoji: '⚫',
    name: 'Schronienie, światło, narzędzia, komunikacja',
    sections: [
      { title: 'Po co ten moduł', body: 'Czarny moduł to „reszta”, bez której pierwsze 72h stają się koszmarem: ciepło w nocy, światło w blackoutzie, narzędzia do naprawy, łączność z bliskimi i służbami, oraz dokumenty – bez których nie dostaniesz pomocy.' },
      { title: 'Minimum (must-have)', list: [
        'Koc termiczny NRC (1–2 szt.)',
        'Koc / śpiwór w worku kompresyjnym (zima)',
        'Płaszcz przeciwdeszczowy / poncho',
        'Czapka, rękawiczki, skarpety zapasowe',
        'Latarka czołówka (LED, AAA) – 1 na osobę',
        'Latarka ręczna zapasowa',
        'Baterie zapasowe',
        'Świece / świeca długopaląca',
        'Multitool / nóż składany',
        'Taśma naprawcza (duct tape)',
        'Paracord (5–10 m)',
        'Worki zip-lock',
        'Zapalniczka + krzesiwo + suchy zapłon (2 źródła ognia)',
        'Powerbank (min. 10 000 mAh) + kabel USB',
        'Radio na baterie / korbkę (FM/AM)',
        'Gwizdek',
        'Dokumenty (worek wodoodporny): dowód, paszport, polisa, ICE, ksero recept',
        'Gotówka – drobne i średnie nominały',
        'Mapa papierowa okolicy',
        'Notes + ołówek'
      ]},
      { title: 'Dobrze mieć', list: [
        'Namiot turystyczny 1–2 os. (lub tarp + paracord)',
        'Karimata / mata cienka',
        'Kuchenka (część wspólna z modułem niebieskim)',
        'Ładowarka solarna mała',
        'Radio krótkofalowe / PMR',
        'Okulary ochronne',
        'Maseczka FFP3',
        'Klucze zapasowe do domu / auta'
      ]},
      { title: 'Opcjonalnie / zaawansowane', list: [
        'Satelitarne komunikatory / PLB – dla terenów bez zasięgu',
        'Radio amatorskie (Baofeng) – wymaga licencji',
        'Namiot hamakowy z moskitierą',
        'Powerbank z korbką / panelem – dla długich blackoutów',
        'Klucze do zaworów / narzędzia do odcięcia mediów',
        'Podstawowe narzędzia samochodowe (jeśli plecak w aucie)'
      ]},
      { title: 'Orientacyjna waga i objętość', table: [
        ['Element', 'Waga (g)', 'Objętość'],
        ['Latarka czołówka + baterie', '120', 'mała'],
        ['Latarka ręczna zapasowa', '80', 'mała'],
        ['Multitool', '200', 'mała'],
        ['Taśma naprawcza', '100', 'mała'],
        ['Paracord 10 m', '60', 'mała'],
        ['Powerbank 10 000 mAh + kabel', '250', 'mała'],
        ['Radio na baterie', '300', '~0,5 L'],
        ['Koc NRC (2 szt.)', '120', 'mała'],
        ['Poncho', '250', '~0,5 L'],
        ['Śpiwór kompresyjny (zima)', '800–1200', '~2 L'],
        ['Dokumenty + gotówka', '100', 'bardzo mała'],
        ['Razem (minimum, lato)', '~1500–1800', '~2 L'],
        ['Razem (zima, ze śpiworem)', '~2500–3000', '~4 L']
      ]},
      { title: 'Typowe błędy', list: [
        'Brak zapasowych baterii – latarka bez prądu to plastik',
        'Tylko powerbank, bez kabla – najczęstszy błąd; sprawdź złącza',
        'Dokumenty nie w worku wodoodpornym – po powodzi mokre',
        'Brak gotówki – w blackoutzie karta nie działa',
        'Brak mapy papierowej – telefon pada',
        'Brak gwizdka – krzyk po 10 min słabnie',
        'Tylko radio na baterie, bez zapasowych',
        'Śpiwór zimą bez karimaty – ciepło ucieka w ziemię',
        'Multitool bez noża / otwieracza'
      ]},
      { title: 'Alternatywy', list: [
        'Czołówka + zapasowa latarka ręczna vs jedna mocna – dwie mniejsze bezpieczniejsze',
        'Powerbank + mały panel solarny vs duży powerbank – panel przedłuża',
        'Poncho vs kurtka przeciwdeszczowa – poncho tańszy, służy jako tarp',
        'Śpiwór w worku kompresyjnym vs koc – śpiwór cieplejszy i mniejszy',
        'Radio korbkowe vs na baterie – korbkowe działa zawsze, ale cięższe'
      ]}
    ]
  }
];

/* Poziomy przygotowania */
const LEVELS = [
  {
    name: 'Poziom 1 – Minimum (12–24h)',
    weight: '3–5 kg',
    capacity: '20–30 L',
    items: [
      'Woda 1 L + tabletki',
      'Batoniki / kanapki na 1 dzień',
      'Apteczka podstawowa + koc NRC',
      'Latarka czołówka + baterie',
      'Powerbank + kabel',
      'Dokumenty (ksero) + gotówka',
      'Telefon z numerami ICE',
      'Małe radio na baterie',
      'Papier toaletny, żel antybakteryjny',
      'Poncho / kurtka przeciwdeszczowa'
    ]
  },
  {
    name: 'Poziom 2 – Standard (72h, 1 osoba)',
    weight: '7–10 kg',
    capacity: '30–45 L',
    items: [
      'Woda 2–3 L + filtr + tabletki',
      'Racje 72h (puszki + liofilizaty + batony)',
      'Kuchenka + kartusz + kubek',
      'Apteczka rozszerzona + tourniquet',
      'Śpiwór / koc + karimata (zima)',
      'Multitool + taśma + paracord',
      'Radio + zapas baterii',
      'Powerbank 10 000 mAh',
      'Pełen zestaw higieny',
      'Mapa + notes + ołówek',
      'Czapka, rękawiczki, skarpety zapasowe'
    ]
  },
  {
    name: 'Poziom 3 – Rodzina (72h, 2–4 os.)',
    weight: '15–25 kg (2 plecaki)',
    capacity: '2 × 40–60 L + małe plecaczki',
    items: [
      'Woda 2 L/os + filtr gravity + tabletki',
      'Racje 72h × liczba osób + zapas',
      'Kuchenka większa + 2 kartusze',
      'Apteczka rodzinna (dzieci, kobiety, seniorzy)',
      'Namiot / tarp + karimaty',
      'Śpiwory / koce dla wszystkich',
      'Radio PMR (komunikacja w rodzinie)',
      'Powerbank 20 000 mAh + panel solarny',
      'Dokumenty wszystkich + ksero + pendrive',
      'Pieluchy / leki specjalistyczne / baterie do aparatu',
      'Jedzenie i woda dla zwierząt',
      'Wózek / nosidło dla małego dziecka'
    ]
  }
];

/* Scenariusze */
const SCENARIOS = [
  {
    name: 'Powódź / ewakuacja z domu',
    key: [
      'Dokumenty w worku wodoodpornym',
      'Gotówka (bankomaty mogą nie działać)',
      'Apteczka + leki osobiste',
      'Woda + tabletki (woda skażona po powrocie)',
      'Powerbank (brak prądu)',
      'Mapa papierowa',
      'Ubranie zapasowe, bielizna, skarpety',
      'Śpiwór / koc (w hali zimno)'
    ]
  },
  {
    name: 'Pożar budynku / okolicy',
    key: [
      'Apteczka (oparzenia, rany, duszność)',
      'Maseczki FFP2 / FFP3 (dym)',
      'Latarka czołówka (gęsty dym = ciemność)',
      'Gwizdek (sygnał dla ratowników)',
      'Dokumenty',
      'Woda (picie + chłodzenie oparzeń)',
      'Okulary ochronne'
    ]
  },
  {
    name: 'Blackout (długi brak prądu)',
    key: [
      'Radio na baterie / korbkę',
      'Powerbank + kabel + (panel solarny)',
      'Latarki + zapas baterii',
      'Świece / lampka olejowa',
      'Woda (pompy nie działają) + tabletki',
      'Jedzenie niewymagające gotowania',
      'Kuchenka gazowa + kartusz',
      'Śpiwór / koce (brak ogrzewania zimą)',
      'Gotówka (terminale nie działają)'
    ]
  },
  {
    name: 'Korek na autostradzie (zima)',
    key: [
      'Koc / śpiwór (grzanie bez silnika)',
      'Czapka, rękawiczki, skarpety zapasowe',
      'Gorące racje (thermos, batony, czekolada)',
      'Powerbank',
      'Łopata składana',
      'Linka holownicza',
      'Kable rozruchowe',
      'Mapa papierowa (objazdy)'
    ]
  },
  {
    name: 'Ewakuacja z pracy / szkoły',
    key: [
      'Woda 0,5 L',
      'Batonik',
      'Powerbank + kabel',
      'Apteczka mini',
      'Latarka czołówka',
      'Gotówka, dokumenty, telefon z ICE',
      'Wygodne buty (jeśli w pracy na obcasie)'
    ]
  },
  {
    name: 'Awaria ogrzewania zimą',
    key: [
      'Śpiwór / koce dla wszystkich',
      'Kuchenka gazowa (do gotowania, NIE do ogrzewania!)',
      'Termosy z gorącą wodą',
      'Czapki, rękawiczki domowe',
      'Koc na okna i drzwi (izolacja)',
      'Świece (trochę ciepła + światło)',
      'Czujnik czadu – absolutnie konieczny!'
    ]
  }
];

/* „Czego nie pakować” – skrócone kategorie */
const DONT_PACK = [
  { category: 'Ciężkie / zbędne', items: [
    '6 L wody w plecaku (lepiej 2 L + tabletki)',
    'Słoje szklane z jedzeniem (konserwy / liofilizaty)',
    'Pełne butelki szamponu (travel-size / mydło w kostce)',
    'Zestaw 10 narzędzi (multitool)',
    'Śpiwór zimowy latem (koc NRC + polar)',
    '3 latarki (1 czołówka + 1 zapasowa)',
    'Apteczka „na każdą chorobę”'
  ]},
  { category: 'Niepraktyczne w 72h', items: [
    'Namiot ekspedycyjny 4-os.',
    'Łóżko polowe (karimata wystarczy)',
    'Książka „przetrwanie 500 s.” (laminowana instrukcja)',
    'Zestaw do łowienia (masz racje)',
    'Sprzęt do wspinaczki (jeśli nie w górach)',
    'Łaźnia polowa (chusteczki nawilżane)',
    'Generator prądu'
  ]},
  { category: 'Fałszywe poczucie bezpieczeństwa', items: [
    'Broń / amunicja (w PL nielegalne bez pozwolenia)',
    'Tarcza / hełm taktyczny',
    'Maski gazowe wojskowe (FFP3 lepsze na dym/pył)',
    'Tabletki antyradiacyjne bez wskazań',
    'Magiczne zioła „na wszystko”',
    'Noże bojowe / miecze (multitool wystarczy)',
    'Kamizelki taktyczne z 20 kieszeniami'
  ]},
  { category: 'Niebezpieczne', items: [
    'Kuchenka gazowa do ogrzewania pomieszczenia (tlenek węgla!)',
    'Świece w łatwopalnych opakowaniach',
    'Lejek do benzyny + zapalniczka razem',
    'Leki bez ulotek i dat',
    'Zużyte baterie wymieszane z nowymi',
    'Łatwopalne płyny w szklanych butelkach',
    'Powerbank bez obudowy / uszkodzony'
  ]},
  { category: 'Krzykliwe / przyciągające uwagę', items: [
    'Militarny camo (lepiej czarny / granatowy / oliwkowy)',
    'Plecak z napisem „TACTICAL / PREPPER”',
    'Naszywki z czaszkami / nożami',
    'Jaskrawe kolory (chyba że ewakuacja w lesie / górach)'
  ]}
];

/* Eksport obiektu do użycia w app.js (window, bo brak modułów) */
window.PA_CONTENT = {
  INSPIRATION_LINK,
  INSPIRATION_LABEL,
  META,
  INTRO,
  PHILOSOPHY,
  MODULES,
  LEVELS,
  SCENARIOS,
  DONT_PACK
};
