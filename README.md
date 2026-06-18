# JustWin — strona platformy do zarządzania klubem sportowym

Odświeżona, statyczna strona internetowa dla **JustWin** — elastycznej platformy
do zarządzania klubem i akademią sportową. Łączy planowanie treningów,
monitoring zawodników, komunikację, płatności oraz analitykę (z integracją
Microsoft Power BI) w jednej aplikacji.

Projekt powstał jako redesign i ulepszenie strony [justwin.pl](https://justwin.pl)
w oparciu o dane i ofertę firmy.

## Struktura

| Plik | Opis |
| --- | --- |
| `index.html` | Strona główna — hero, funkcje, dla kogo, statystyki, proces, CTA |
| `funkcje.html` | Szczegółowy opis funkcji i integracji |
| `dla-kogo.html` | Grupy odbiorców: kluby, akademie, kadry, trenerzy, zawodnicy |
| `cennik.html` | Plany cenowe oraz FAQ |
| `kontakt.html` | Dane kontaktowe i formularz „Umów demo” |
| `assets/css/style.css` | Kompletny system projektowy i style |
| `assets/js/main.js` | Interakcje: menu mobilne, animacje, liczniki, FAQ, formularz |
| `assets/img/favicon.svg` | Logo / favicon |

## Cechy

- **Bez zależności i frameworków** — czysty HTML, CSS i JavaScript (vanilla).
- **W pełni responsywna** — działa na komputerach, tabletach i telefonach.
- **Nowoczesny design** — ciemny motyw sportowy, gradienty, glassmorphism,
  animacje pojawiania się i animowane liczniki.
- **Własne ilustracje SVG** — makiety panelu trenera, wykresy i widok aplikacji
  mobilnej (brak zależności od zewnętrznych obrazów dla kluczowych elementów UI).
- **Dostępność i SEO** — semantyczny HTML, opisy `aria`, meta i Open Graph,
  respektowanie `prefers-reduced-motion`.

## Uruchomienie lokalne

Strona jest statyczna — wystarczy otworzyć `index.html` w przeglądarce lub
uruchomić prosty serwer:

```bash
python3 -m http.server 8000
# następnie otwórz http://localhost:8000
```

## Uwagi dot. treści

- Dane kontaktowe (adres ul. Wierzbowa 31, 62-081 Wysogotowo) pochodzą z
  publicznych rejestrów. Adres e-mail, telefon, ceny i statystyki są
  przykładowe — przed publikacją warto zastąpić je faktycznymi danymi firmy.
- Zdjęcia w sekcjach „Dla kogo” ładowane są z Unsplash. Można je podmienić na
  własne fotografie klubu/akademii, podmieniając adresy `background-image`.
- Formularz kontaktowy działa w trybie demonstracyjnym (front-end). Aby
  odbierać zgłoszenia, należy podłączyć backend lub usługę typu form-handler.
