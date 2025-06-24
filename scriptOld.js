document.addEventListener("DOMContentLoaded", function () {
    const scrollTransformElement = document.querySelector('.my-nav');

    window.addEventListener('scroll', function () {

        const scrollPosition = window.scrollY;

        // const opacityValue = 1 - (scrollPosition / 700);
        const opacityValue = 1 - (scrollPosition / 200);

        scrollTransformElement.style.opacity = opacityValue;
    });
});


// chevron

document.addEventListener("DOMContentLoaded", function () {
    const scrollTransformElement = document.querySelector('.my-chevron-opacity-header');

    window.addEventListener('scroll', function () {

        const scrollPosition = window.scrollY;

        // const opacityValue = 1 - (scrollPosition / 700);
        const opacityValue = 1 - (scrollPosition / 100);

        scrollTransformElement.style.opacity = opacityValue;
    });
});



const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('[data-filter]');
let allItems = [];








// Load JSON and render items
fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        allItems = data;
        renderGallery(data);
    })
    .catch(err => console.error('Error loading gallery:', err));


function escapeAttribute(str) {
  return String(str).replace(/"/g, '&quot;');
}


// Render items in the DOM
function renderGallery(items) {
    gallery.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = `gallery-item ${item.category}`;

        const year = item.date ? item.date.slice(0, 4) : '';
        const safeSize = escapeAttribute(item.size || '');


        div.innerHTML = `
            <div class="position-relative">
                <a href="${item.image}" data-lightbox="gallery" 
                    data-title="<strong>${item.title}</strong> <em>${item.description ? '&#8212; <em>' + item.description + '</em>' : ''}<em><small> &#8212; ${safeSize} &#8212; ${year}<br> ${item.price}</small><strong> ${item.status}</strong>">
                        <img src="${item.image}" class="card mb-4" alt="${item.title}">
                        <span class="status-dot ${item.status === 'disponible' ? 'dot-green' : 'dot-red'}"></span>
                </a>
            </div>
            `;

                   
                    
    
        gallery.appendChild(div);
    });
}

// Filter logic
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        let items;

        if (filter === 'all') {
            // Tous les projets non archivés (toutes catégories)
            items = allItems.filter(item => !item.archived);
        } else if (filter === 'archived') {
            // Tous les projets archivés (toutes catégories)
            items = allItems.filter(item => item.archived);
        } else {
            // Projets non archivés dans la catégorie choisie
            items = allItems.filter(item => item.category === filter && !item.archived);
        }

        // Trier du plus récent au plus ancien
        items.sort((a, b) => new Date(b.date) - new Date(a.date));

        renderGallery(items);
    });
});

const filterSize = document.getElementById('filter-size');
const filterStatus = document.getElementById('filter-status');
const filterSujet = document.getElementById('filter-sujet');
const filterMedium = document.getElementById('filter-medium');
const filterCategory = document.getElementById('filter-category');

let currentFilter = 'all';
let currentSort = 'desc';

// Ajoute états pour filtres supplémentaires
let currentSize = 'all';
let currentStatus = 'all';
let currentSujet = 'all';
let currentMedium = 'all';
let currentCategory = 'all';



function updateGallery() {
    let items;

    // Filtre principal : catégorie / archivés / tout
    if (currentFilter === 'all') {
        items = allItems.filter(item => !item.archived);
    } else if (currentFilter === 'archived') {
        items = allItems.filter(item => item.archived);
    } else {
        items = allItems.filter(item => item.category === currentFilter && !item.archived);
    }

    // Filtre taille
    if (currentSize !== 'all') {
        items = items.filter(item => item.size === currentSize);
    }

    // Filtre disponibilité
    if (currentStatus !== 'all') {
        items = items.filter(item => item.status === currentStatus);
    }

    // Filtre sujet
    if (currentSujet !== 'all') {
        items = items.filter(item => item.sujet === currentSujet);
    }

    // Filtre médium
    if (currentMedium !== 'all') {
        items = items.filter(item => item.medium === currentMedium);
    }

    // Filtre catégorie
    if (currentCategory !== 'all') {
        items = items.filter(item => item.category === currentCategory);
    }

    // Tri
    items.sort((a, b) => {
        if (currentSort === 'desc') return new Date(b.date) - new Date(a.date);
        else return new Date(a.date) - new Date(b.date);
    });

    renderGallery(items);
}

// Événements filtres supplémentaires
filterSize.addEventListener('change', e => {
    currentSize = e.target.value;
    updateGallery();
});
filterStatus.addEventListener('change', e => {
    currentStatus = e.target.value;
    updateGallery();
});
filterSujet.addEventListener('change', e => {
    currentSujet = e.target.value;
    updateGallery();
});
filterMedium.addEventListener('change', e => {
    currentMedium = e.target.value;
    updateGallery();
});
filterCategory.addEventListener('change', e => {
    currentCategory = e.target.value;
    updateGallery();
});

const archivedToggle = document.getElementById('archived-toggle');

archivedToggle.addEventListener('change', () => {
    updateGallery();
});


// Boutons filtres catégorie et archivés
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        updateGallery();
    });
});

// Tri
sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    updateGallery();
});

// Initial
updateGallery();



document.getElementById('reset-filters').addEventListener('click', () => {
  // Reset filter state
  currentFilter = 'all';
  currentSize = 'all';
  currentStatus = 'all';
  currentSujet = 'all';
  currentMedium = 'all';
  currentCategory = 'all';

  // Reset selects
  filterSize.value = 'all';
  filterStatus.value = 'all';
  filterSujet.value = 'all';
  filterMedium.value = 'all';
  filterCategory.value = 'all';

  // Reset active class on buttons
  buttons.forEach(b => b.classList.remove('active'));

  // Re-render gallery
  updateGallery();
});






