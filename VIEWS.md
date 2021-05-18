# Dashboard

  - `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

  - `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

  - `/tables`
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz eventów
      - każda kolumna to 1 stolik
      - każdy wiersz = 30 min
      - ma przypominać widok tygodnia w kalendarzu Googla, gdzie w kolumnach zamiast dni są różne stoliki
      - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
  - `/tables/booking/:id`
    - zawiera wszystkie info o rezerwacji
    - umożliwia edycję i zapisanie zmian
  - `/tables/booking/new`
    - analogicznie do powyższej, bez początkowych informacji
  - `/tables/events/:id`
    - zawiera wszystkie info o event
    - umożliwia edycję i zapisanie zmian
  - `/tables/events/new`
      - analogicznie do powyższej, bez początkowych informacji

# Widok kelnera

  - `/waiter`
    - tabela
      - wiersze to stoliki
      - kolumna to różne info: status, czas od ostatniej aktywności
      - ostatnia kolumna ma dostępne akcje dla danego stolika
  - `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktu
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
  - `/waiter/order/:id`
    - jak powyższa

# Widok kuchni

  - `/kitchen`
    - wyświetla listę zamówień w kolejności ich złożenia
    - lista musi zawierać:
      - numer stolika (lub zamówienia zdalnego)
      - pełne informacje dot. zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
