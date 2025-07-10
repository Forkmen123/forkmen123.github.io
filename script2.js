// Configuration
const CONFIG = {
    navOpacityThreshold: 200,
    chevronOpacityThreshold: 100,
    defaultSort: 'desc'
};

// État global de l'application
const state = {
    allItems: [],
    currentFilter: 'all',
    currentSort: CONFIG.defaultSort,
    showArchived: false, // Toggle pour afficher les projets archivés
    filters: {
        size: 'all',
        status: 'all',
        sujet: 'all',
        medium: 'all',
        category: 'all'
    }
};

// Éléments DOM (mis en cache)
const elements = {
    gallery: null,
    buttons: null,
    filterSelects: {},
    resetButton: null,
    sortSelect: null,
    archivedToggle: null
};

// Initialisation
document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    cacheElements();
    setupScrollEffects();
    loadGalleryData();
    setupEventListeners();
}

function cacheElements() {
    elements.gallery = document.getElementById('gallery');
    elements.buttons = document.querySelectorAll('[data-filter]');
    elements.filterSelects = {
        size: document.getElementById('filter-size'),
        status: document.getElementById('filter-status'),
        sujet: document.getElementById('filter-sujet'),
        medium: document.getElementById('filter-medium'),
        category: document.getElementById('filter-category')
    };
    elements.resetButton = document.getElementById('reset-filters');
    elements.sortSelect = document.getElementById('sort-select'); // Assumé manquant dans l'original
    elements.archivedToggle = document.getElementById('archived-toggle');
}

// Effets de défilement optimisés avec throttling
function setupScrollEffects() {
    let ticking = false;

    const navElement = document.querySelector('.my-nav');
    const chevronElement = document.querySelector('.my-chevron-opacity-header');

    function updateScrollEffects() {
        const scrollPosition = window.scrollY;

        if (navElement) {
            const navOpacity = Math.max(0, 1 - (scrollPosition / CONFIG.navOpacityThreshold));
            navElement.style.opacity = navOpacity;
        }

        if (chevronElement) {
            const chevronOpacity = Math.max(0, 1 - (scrollPosition / CONFIG.chevronOpacityThreshold));
            chevronElement.style.opacity = chevronOpacity;
        }

        ticking = false;
    }

    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
}

// Chargement des données
async function loadGalleryData() {
    try {
        const response = await fetch('gallery.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        state.allItems = data;
        updateGallery();
    } catch (error) {
        console.error('Erreur lors du chargement de la galerie:', error);
        showErrorMessage('Impossible de charger la galerie. Veuillez réessayer.');
    }
}

// Gestion des erreurs
function showErrorMessage(message) {
    if (elements.gallery) {
        elements.gallery.innerHTML = `
            <div class="error-message">
                <p>${message}</p>
            </div>
        `;
    }
}

// Utilitaires
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttribute(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = `gallery-item ${item.category}`;

    const year = item.date ? new Date(item.date).getFullYear() : '';
    const safeTitle = escapeHtml(item.title || '');
    const safeDescription = escapeHtml(item.description || '');
    const safePrice = escapeHtml(item.price || '');
    const safeStatus = escapeHtml(item.status || '');

    // Échappement spécial pour les attributs HTML (notamment data-title)
    const safeTitleAttr = escapeAttribute(item.title || '');
    const safeDescriptionAttr = escapeAttribute(item.description || '');
    const safeSizeAttr = escapeAttribute(item.size || '');
    const safePriceAttr = escapeAttribute(item.price || '');
    const safeStatusAttr = escapeAttribute(item.status || '');

    const statusClass = item.status === 'disponible' ? 'dot-green' : 'dot-red';
    const descriptionText = safeDescriptionAttr ? `&#8212; <em>${safeDescriptionAttr}</em>` : '';

    div.innerHTML = `
    <div class="position-relative">
        <a href="${item.image}" 
           data-lightbox="gallery" 
           data-title="<strong>${safeTitleAttr}</strong> <em>${descriptionText}</em><small> &#8212; ${safeSizeAttr} &#8212; ${year}<br> ${safePriceAttr}</small><strong> ${safeStatusAttr}</strong>"
           aria-label="Voir ${safeTitle}">
            <img src="${item.thumbnail ? item.thumbnail : item.image}" 
                 class="card mb-4 fade-in" 
                 alt="${safeTitle}"
                 loading="lazy">
            <span class="status-dot ${statusClass}" aria-hidden="true"></span>
        </a>
    </div>
`;


}

// Rendu de la galerie
function renderGallery(items) {
    if (!elements.gallery) return;

    // Utilisation d'un fragment pour améliorer les performances
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        fragment.appendChild(createGalleryItem(item));
    });

    elements.gallery.innerHTML = '';
    elements.gallery.appendChild(fragment);
}

// Logique de filtrage
function getFilteredItems() {
    let items = [...state.allItems]; // Clone pour éviter les mutations

    // Filtre principal : archivés ou non archivés (via la toggle)
    if (state.showArchived) {
        items = items.filter(item => item.archived);
    } else {
        items = items.filter(item => !item.archived);
    }

    // Si on affiche les projets non archivés, on peut appliquer le filtre de catégorie
    if (!state.showArchived && state.currentFilter !== 'all') {
        items = items.filter(item => item.category === state.currentFilter);
    }

    // Application des filtres additionnels
    Object.entries(state.filters).forEach(([key, value]) => {
        if (value !== 'all') {
            items = items.filter(item => item[key] === value);
        }
    });

    return items;
}

// Tri des éléments
function sortItems(items) {
    return items.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return state.currentSort === 'desc' ? dateB - dateA : dateA - dateB;
    });
}

// Mise à jour de la galerie
function updateGallery() {
    const filteredItems = getFilteredItems();
    const sortedItems = sortItems(filteredItems);
    renderGallery(sortedItems);
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Boutons de filtre principal
    elements.buttons?.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // Filtres additionnels
    Object.entries(elements.filterSelects).forEach(([key, select]) => {
        if (select) {
            select.addEventListener('change', (e) => {
                state.filters[key] = e.target.value;
                updateGallery();
            });
        }
    });

    // Bouton de réinitialisation
    elements.resetButton?.addEventListener('click', resetFilters);

    // Tri
    elements.sortSelect?.addEventListener('change', (e) => {
        state.currentSort = e.target.value;
        updateGallery();
    });

    // Toggle archivés
    elements.archivedToggle?.addEventListener('change', (e) => {
        state.showArchived = e.target.checked;
        updateGallery();
    });
}

// Gestionnaires d'événements
function handleCategoryFilter(e) {
    // Mise à jour de l'état visuel
    elements.buttons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    // Mise à jour de l'état (sauf si c'est le filtre "archived" qui est maintenant géré par la toggle)
    const filterValue = e.target.getAttribute('data-filter');
    if (filterValue !== 'archived') {
        state.currentFilter = filterValue;
    }
    updateGallery();
}

function resetFilters() {
    // Réinitialisation de l'état
    state.currentFilter = 'all';
    state.showArchived = false;
    state.filters = {
        size: 'all',
        status: 'all',
        sujet: 'all',
        medium: 'all',
        category: 'all'
    };

    // Réinitialisation des sélecteurs
    Object.values(elements.filterSelects).forEach(select => {
        if (select) select.value = 'all';
    });

    // Réinitialisation de la toggle archivés
    if (elements.archivedToggle) {
        elements.archivedToggle.checked = false;
    }

    // Réinitialisation des boutons
    elements.buttons.forEach(b => b.classList.remove('active'));

    // Mise à jour de l'affichage
    updateGallery();
}

// Export pour utilisation externe si nécessaire
window.GalleryApp = {
    updateGallery,
    resetFilters,
    state: () => ({ ...state }) // Lecture seule de l'état
};





// Gestion du toggle des filtres avec rotation du chevron
const filtersCollapse = document.getElementById('filtersCollapse');
const chevronIcon = document.getElementById('chevron-icon');

filtersCollapse.addEventListener('show.bs.collapse', function () {
    chevronIcon.style.transform = 'rotate(180deg)';
    chevronIcon.style.transition = 'transform 0.3s ease';
});

filtersCollapse.addEventListener('hide.bs.collapse', function () {
    chevronIcon.style.transform = 'rotate(0deg)';
    chevronIcon.style.transition = 'transform 0.3s ease';
});


// Animation du bouton reset au clic
document.getElementById('reset-filters').addEventListener('click', function () {
    const resetIcon = document.getElementById('reset-icon');

    // Animation de rotation
    resetIcon.style.transform = 'rotate(360deg)';
    resetIcon.style.transition = 'transform 0.5s ease';

    // Réinitialiser tous les selects
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });

    // Réinitialiser le toggle
    document.getElementById('archived-toggle').checked = false;

    // Remettre l'icône à sa position initiale après l'animation
    setTimeout(() => {
        resetIcon.style.transform = 'rotate(0deg)';
        resetIcon.style.transition = 'none';
    }, 500);

    console.log('Filtres réinitialisés');
});



