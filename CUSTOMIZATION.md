# Customization Guide

This guide will help you customize the Business Site to fit your needs.

## Quick Start Customization

### 1. Update Branding

**Navigation Logo** (`src/components/Navigation.jsx`):
```jsx
<Link to="/" className="nav-logo">
  Your Company Name  // Change this
</Link>
```

**Page Title** (`index.html`):
```html
<title>Your Business Name - Description</title>
```

### 2. Customize Spline 3D Scene

The home page includes a Spline 3D integration. To use your own 3D scene:

1. Visit [Spline](https://spline.design/) and create an account
2. Design your 3D scene or use a template
3. Export your scene and get the public URL
4. Update `src/pages/Home.jsx`:

```jsx
<Spline 
  scene="YOUR_SPLINE_SCENE_URL" 
  style={{ width: '100%', height: '100%' }}
/>
```

### 3. Update Social Media Embeds

**Twitter** (`src/pages/Services.jsx`):
- Replace the tweet URL in the blockquote with your own tweet
- The Twitter widget will automatically render it

**Instagram** (`src/pages/Services.jsx`):
- Replace the Instagram post URL with your own post
- The Instagram embed script will handle the rendering

### 4. Customize Content

**Home Page** (`src/pages/Home.jsx`):
- Update hero heading and description
- Modify feature cards
- Change CTA button text

**About Page** (`src/pages/About.jsx`):
- Update company story
- Change statistics (Projects, Clients, Years)
- Modify mission and vision content

**Services Page** (`src/pages/Services.jsx`):
- Add/remove service cards
- Update service descriptions
- Customize service features lists

**Contact Page** (`src/pages/Contact.jsx`):
- Update contact information (email, phone, location)
- Modify form fields if needed
- Connect to your backend API for form submission

### 5. Styling Customization

Each page and component has its own CSS file. Common customizations:

**Colors**:
- Primary: `#646cff` (blue)
- Background: `#242424` (dark gray)
- Text: `#fff` (white) and `#888` (gray)

**Typography**:
- Main heading: 3rem
- Subheading: 2rem
- Body: 1rem

Find these in the respective `.css` files and update as needed.

### 6. Add New Pages

1. Create a new component in `src/pages/` (e.g., `Blog.jsx`)
2. Create corresponding CSS file (`Blog.css`)
3. Add route in `src/App.jsx`:
```jsx
<Route path="/blog" element={<Blog />} />
```
4. Add navigation link in `src/components/Navigation.jsx`

## Advanced Customization

### Form Backend Integration

Update the `handleSubmit` function in `src/pages/Contact.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Send to your API
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  // Handle response...
}
```

### Add More Social Platforms

You can add more social media embeds:
- Facebook: Use Facebook's embed code
- LinkedIn: Use LinkedIn's embed code
- YouTube: Use iframe embed

### Performance Optimization

The Spline library is large. To optimize:
1. Use dynamic imports:
```jsx
const Spline = lazy(() => import('@splinetool/react-spline'))
```

2. Add loading state:
```jsx
<Suspense fallback={<div>Loading 3D scene...</div>}>
  <Spline scene="..." />
</Suspense>
```

## Need Help?

- Check the [React Documentation](https://react.dev)
- Visit [Spline Documentation](https://docs.spline.design)
- See [Vite Documentation](https://vite.dev)
