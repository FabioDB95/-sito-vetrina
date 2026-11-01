# Sito vetrina — Studio Visivo

Template responsive statico per GitHub Pages: galleria filtrabile Macro/Prodotti, schede descrittive e lightbox per visualizzare le immagini.

## Personalizzazione
- `index.html`: nome del progetto, testi, contatti e sezioni.
- `style.css`: colori, spaziature, layout e responsive design.
- `app.js`: array `PRODUCTS`. Per ogni voce modifica `title`, `description`, `image`, `alt`, `category` e `label`.
- Sostituisci l'email `ciao@studiovisivo.it` con il tuo indirizzo.

Le immagini di esempio sono remote da Unsplash. Per immagini tue, caricale nel repository (per esempio nella cartella `images/`) e usa percorsi come `images/foto-01.jpg`.

## Pubblicazione con GitHub Pages
1. Crea un repository su GitHub, per esempio `sito-vetrina`.
2. Carica `index.html`, `style.css`, `app.js` e questo README nella radice del repository.
3. Apri **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**.
5. Seleziona branch `main` e cartella `/ (root)`, quindi premi **Save**.
6. Attendi il completamento del deploy. L'indirizzo sarà normalmente `https://TUO-USERNAME.github.io/sito-vetrina/`.

Per un sito all'indirizzo `https://TUO-USERNAME.github.io/`, il repository deve chiamarsi `TUO-USERNAME.github.io`.

Nota: GitHub Pages pubblica contenuti statici; non include un database o un pannello amministrativo. Per aggiungere nuovi post, modifica l'array `PRODUCTS` in `app.js` e fai commit/push.
