KOTLOVSKY PORTFOLIO — v20 DOM-safe hotfix

Dlaczego v20:
v19 trafiało głównie w tło, ale nie w prawdziwe elementy contact/video. v20 działa też przez JS:
- samo wstrzykuje 3 social icons pod mailto/write me,
- ukrywa stary samotny social link z lewej,
- znajduje realne linki YouTube i dodaje im klasę do hover/play icon,
- brick jest minimalnie ciemniejszy niż v19.

Jak wdrożyć:
1. Wklej zawartość v20-hotfix.css na sam koniec obecnego style.css.
2. Wklej zawartość v20-hotfix.js na sam koniec obecnego script.js.
3. Jeżeli chcesz ręcznie podmienić HTML contact, użyj contact-social-block-v20.html.
   Ale JS powinien też sam wstrzyknąć sociale, nawet jeśli HTML zostawisz.
4. Sprawdź przez ?v=20 oraz twarde odświeżenie Ctrl+F5.

Uwaga:
Jeśli po tym nadal nie ma hover/play, to script.js nie jest ładowany albo kod jest cache'owany.
Wtedy trzeba sprawdzić w index.html, czy script.js ma query string, np. script.js?v=20.
