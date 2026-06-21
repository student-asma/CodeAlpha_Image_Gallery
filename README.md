# CodeAlpha_Image_Gallery
# 🖼️ Image Gallery

An interactive and responsive image gallery with advanced features like lightbox view, 
category filtering, smooth animations, and keyboard navigation. Perfect for showcasing 
photos in a modern, user-friendly interface.

## ✨ Features

- ✅ **Lightbox View** - Click images to view in fullscreen modal
- ✅ **Category Filters** - Filter images by category (All, Nature, City, Tech)
- ✅ **Smooth Animations** - Hover effects, fade-ins, and transitions
- ✅ **Navigation Controls** - Previous/Next buttons inside lightbox
- ✅ **Keyboard Navigation**
  - Arrow Right: Next image
  - Arrow Left: Previous image
  - Escape: Close lightbox
- ✅ **Responsive Grid** - Auto-adjusts to screen size (Mobile, Tablet, Desktop)
- ✅ **Quick Preview** - Hover overlay with "View" button
- ✅ **Beautiful UI** - Modern design with gradient colors

## 🛠️ Technologies Used

- **HTML5** - Semantic markup & grid structure
- **CSS3** - CSS Grid, Flexbox, animations, transitions
- **JavaScript (Vanilla)** - Image filtering & lightbox functionality

## 📂 Project Structure
image-gallery/
├── index.html      # HTML structure
├── style.css       # Styling & animations
├── script.js       # Gallery logic & filters
├── images/         # Folder for images
│   ├── img1.jpg
│   ├── img2.jpg
│   └── ...
└── README.md       # This file
## 🚀 Getting Started

### Installation
1. Clone this repository:
```bash
git clone https://github.com/yourusername/CodeAlpha_ImageGallery.git
cd CodeAlpha_ImageGallery
```

2. Open in your browser:
```bash
# Simply double-click index.html
```

### Adding Your Images
1. Replace image URLs in `index.html` OR
2. Add local images to the `images/` folder
3. Update the `src` attributes in HTML

```html
<img src="images/your-image.jpg" alt="Description">
```

### Usage
- **View Image**: Click "View" button on hover
- **Filter Images**: Click category buttons (All, Nature, City, Tech)
- **Navigate**: Use arrow buttons or keyboard
- **Close**: Click outside image or press Escape

## 🎨 Filter Categories

The gallery includes 4 pre-configured categories:
- **All** - Show all images
- **Nature** - Landscapes, nature photos
- **City** - Urban, street photography
- **Tech** - Technology, gadgets

To add more categories:
1. Add new button in HTML with `data-filter="category-name"`
2. Add `data-category="category-name"` to images
3. Update JavaScript filter logic if needed

## 💡 Learning Points

- CSS Grid layout for responsive design
- Event handling & DOM manipulation
- Array filtering and iteration
- Modal/Lightbox implementation
- Keyboard event handling
- CSS transitions and animations

## 🎯 Future Enhancements

- [ ] Lazy loading for better performance
- [ ] Image zoom on hover inside lightbox
- [ ] Auto-play slideshow
- [ ] Download image option
- [ ] Image uploader to add dynamic images
- [ ] Search functionality
- [ ] Rate/favorite images

## 📱 Browser Support

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## 📊 Performance

- **Lazy Loading**: Not yet implemented
- **Image Compression**: Recommended for production
- **Load Time**: ~2-3 seconds with sample images

## 📸 Screenshot
[Add screenshots of gallery and lightbox here]
## 🤝 Contributing

Found a bug or have an improvement? Feel free to fork and submit a pull request!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- CodeAlpha Internship Program
- Unsplash for free images
- Inspiration from modern gallery designs

---

**Explore Beautiful Photos! 📸**
