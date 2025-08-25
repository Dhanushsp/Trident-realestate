# Horizon Hills Real Estate - React Version

This is a React + Tailwind CSS conversion of the original Horizon Hills Real Estate WordPress website. All content, structure, and functionality have been preserved while modernizing the technology stack.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Tailwind CSS** for styling
- **Responsive Design** that works on all devices
- **Interactive Hero Slider** with auto-play and navigation
- **Smooth Animations** and transitions
- **Mobile-First** approach
- **SEO Optimized** structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── HeroSlider.tsx      # Main hero section with slider
│   ├── ServicesSection.tsx # Services showcase section
│   └── Footer.tsx          # Footer with contact info and links
├── App.tsx                 # Main application component
├── index.tsx              # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool (if using Vite)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd horizon-hills-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be created in the `build/` directory.

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1265',    // Main brand color
  secondary: '#3b3866',  // Secondary brand color
  accent: '#dbd0bd',     // Accent color
  light: '#efefe5',      // Light background
  dark: '#1a1265',       // Dark text
}
```

### Fonts

The project uses the custom 'nohemi' font family imported from the original website.

### Images

All images are loaded from the original WordPress site URLs to maintain consistency.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 📄 Content Preservation

This conversion maintains 100% of the original content:

- **Hero Section**: Three-slide slider with original images and text
- **Services Section**: Three service offerings with original icons and descriptions
- **Navigation**: Complete navigation structure
- **Footer**: All contact information and links
- **Branding**: Original logos and color scheme

## 🌟 Key Improvements

1. **Performance**: Faster loading with React's virtual DOM
2. **Maintainability**: Component-based architecture
3. **Responsiveness**: Better mobile experience
4. **Accessibility**: Improved semantic HTML and ARIA labels
5. **SEO**: Better structure for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this conversion, please contact the development team.

## 📜 License

This project is licensed under the MIT License.

---

**Note**: This is a conversion of the original Horizon Hills Real Estate website. All original content, images, and branding remain the property of Horizon Hills Real Estate.
