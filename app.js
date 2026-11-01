// Personalizza qui immagini, titoli, categorie e descrizioni della galleria.
const PRODUCTS = [
  {
    id: 1, category: "macro", label: "Macro", title: "Trame naturali",
    description: "Le venature di una foglia diventano un paesaggio fatto di linee, luce e sfumature.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
    alt: "Dettaglio di una foglia verde"
  },
  {
    id: 2, category: "products", label: "Prodotto", title: "Forma essenziale",
    description: "Un oggetto raccontato attraverso la sua silhouette, i materiali e la luce morbida.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85",
    alt: "Oggetto di design su fondo neutro"
  },
  {
    id: 3, category: "macro", label: "Macro", title: "Petali in controluce",
    description: "Una composizione delicata in cui trasparenze e dettagli costruiscono l'immagine.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
    alt: "Fiori dai colori delicati"
  },
  {
    id: 4, category: "products", label: "Prodotto", title: "Oggetti quotidiani",
    description: "Un prodotto semplice, valorizzato da una composizione pulita e da una luce naturale.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=85",
    alt: "Fotocamera vintage"
  },
  {
    id: 5, category: "macro", label: "Macro", title: "Materia e superficie",
    description: "Avvicinarsi alla materia per scoprire geometrie e texture nascoste.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85",
    alt: "Particolare di una pianta"
  },
  {
    id: 6, category: "products", label: "Prodotto", title: "Dettagli di design",
    description: "Una presentazione essenziale che lascia spazio a materiali, forme e carattere.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85",
    alt: "Interno e oggetti di design"
  }
];

const grid = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
let visibleProducts = PRODUCTS;
let currentIndex = 0;

function renderGallery(items) {
  grid.innerHTML = items.map(item => `
    <article class="gallery-card" tabindex="0" role="button" aria-label="Apri ${item.title}" data-id="${item.id}">
      <div class="card-image">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
        <span class="card-category">${item.label}</span>
      </div>
      <div class="card-meta">
        <div><h3>${item.title}</h3><p>${item.description}</p></div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => openLightbox(Number(card.dataset.id)));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(Number(card.dataset.id));
      }
    });
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");
    const filter = button.dataset.filter;
    visibleProducts = filter === "all" ? PRODUCTS : PRODUCTS.filter(item => item.category === filter);
    renderGallery(visibleProducts);
  });
});

function openLightbox(id) {
  currentIndex = visibleProducts.findIndex(item => item.id === id);
  updateLightbox();
  lightbox.showModal();
}
function updateLightbox() {
  const item = visibleProducts[currentIndex];
  document.querySelector("#lightbox-image").src = item.image;
  document.querySelector("#lightbox-image").alt = item.alt;
  document.querySelector("#lightbox-category").textContent = item.label;
  document.querySelector("#lightbox-title").textContent = item.title;
  document.querySelector("#lightbox-description").textContent = item.description;
}
function moveLightbox(step) {
  currentIndex = (currentIndex + step + visibleProducts.length) % visibleProducts.length;
  updateLightbox();
}
document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderGallery(PRODUCTS);
