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

// Render items in the DOM
function renderGallery(items) {
  gallery.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = `gallery-item ${item.category}`;
    div.innerHTML = `
       <a href="${item.image}" data-lightbox="gallery" data-title="<strong>${item.title}</strong><br>${item.description || ''}">
        <img src="${item.image}" alt="${item.title}">
      </a>
      <p class="caption">${item.title}</p>
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
    if (filter === 'all') {
      renderGallery(allItems);
    } else {
      const filtered = allItems.filter(item => item.category === filter);
      renderGallery(filtered);
    }
  });
});
