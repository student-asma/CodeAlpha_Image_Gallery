let currentImageIndex = 0;
let visibleImages = [];

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        filterGallery(filter);
    });
});

function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 10);
        } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
        }
    });
}

function openLightbox(button) {
    const img = button.closest('.gallery-item').querySelector('img');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightbox = document.getElementById('lightbox');
    
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    
    // Get all visible images
    visibleImages = Array.from(document.querySelectorAll('.gallery-item'))
        .filter(item => item.style.display !== 'none')
        .map(item => item.querySelector('img').src);
    
    currentImageIndex = visibleImages.indexOf(img.src);
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
    document.getElementById('lightbox-img').src = visibleImages[currentImageIndex];
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
    document.getElementById('lightbox-img').src = visibleImages[currentImageIndex];
}

// Close lightbox on outside click
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Keyboard navigation (BONUS)
document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'Escape') closeLightbox();
    }
});