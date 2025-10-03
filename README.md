# Business Site - Modern Reactive SPA

A modern, responsive single-page application (SPA) business website built with React, featuring 3D visualization with Spline and social media integration.

## Features

- 🚀 **Modern React SPA** - Built with React 19 and Vite for optimal performance
- 🎨 **3D Visualization** - Integration with Spline 3D for interactive 3D content
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔗 **Social Media Integration** - Embedded Twitter and Instagram posts
- ⚡ **Fast & Lightweight** - Optimized build with code splitting
- 🎯 **Multiple Pages** - Home, About, Services, and Contact pages

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **Spline** - 3D design and animation integration
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ClutchForce/bug-free-tree.git
cd bug-free-tree
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navigation.jsx  # Navigation bar
│   └── Navigation.css
├── pages/             # Page components
│   ├── Home.jsx       # Home page with Spline 3D
│   ├── About.jsx      # About page
│   ├── Services.jsx   # Services page with social embeds
│   └── Contact.jsx    # Contact form page
├── App.jsx            # Main app component with routing
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

## Customization

### Spline 3D Integration

To use your own Spline 3D scene:

1. Create or export your scene from [Spline](https://spline.design/)
2. Get the scene URL
3. Update the URL in `src/pages/Home.jsx`:

```jsx
<Spline 
  scene="YOUR_SPLINE_URL_HERE" 
  style={{ width: '100%', height: '100%' }}
/>
```

### Social Media Embeds

The Services page includes examples of Twitter and Instagram embeds. You can customize these by:

1. For Twitter: Update the tweet URL in the blockquote
2. For Instagram: Update the post URL in the blockquote

The scripts will automatically load and render the embeds.

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please visit the Contact page on the website.

