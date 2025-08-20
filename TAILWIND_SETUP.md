# Tailwind CSS Setup Guide

## 🎨 Installing Tailwind CSS

### Option 1: Automatic Setup (Recommended)
```bash
cd frontend
chmod +x setup_tailwind.sh
./setup_tailwind.sh
```

### Option 2: Manual Setup
```bash
cd frontend

# Clean install
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Verify Tailwind is installed
npx tailwindcss --version
```

## ✅ Verification

After installation, you should see:
```
✅ Tailwind CSS setup complete!
```

## 🚀 Usage

### 1. Start the development server:
```bash
npm start
```

### 2. Use Tailwind classes in your components:
```jsx
// Pure Tailwind
<div className="bg-primary-600 text-white p-4 rounded-lg hover:bg-primary-700">
  Tailwind Button
</div>

// Hybrid approach (Material-UI + Tailwind)
<Button className="!bg-primary-600 hover:!bg-primary-700 !rounded-xl">
  Hybrid Button
</Button>
```

## 🎯 Available Custom Classes

### Buttons
```css
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg;
}
```

### Cards
```css
.card-hover {
  @apply transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl;
}
```

### Backgrounds
```css
.gradient-bg {
  @apply bg-gradient-to-br from-primary-50 to-white;
}

.glass-effect {
  @apply backdrop-blur-sm bg-white/80 border border-white/20;
}
```

## 🎨 Color Palette

### Primary Colors
- `primary-50` to `primary-900`: Blue-gray scale
- `secondary-50` to `secondary-900`: Red scale

### Usage Examples
```jsx
className="bg-primary-600"     // Main primary color
className="text-primary-800"    // Dark text
className="border-primary-200"  // Light border
```

## 🔧 Troubleshooting

### If Tailwind commands not found:
1. Make sure you're in the `frontend` directory
2. Run `npm install` to install dependencies
3. Check `package.json` has correct Tailwind version (`^3.3.5`)

### If styles not applying:
1. Make sure `src/index.css` is imported in `src/index.js`
2. Check that Tailwind directives are in `src/index.css`
3. Restart the development server

## 📁 File Structure

```
frontend/
├── src/
│   ├── index.css          # Tailwind directives
│   └── components/
│       └── TailwindExample.jsx  # Example component
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

## 🎉 Success!

Your app now supports both Material-UI and Tailwind CSS for maximum styling flexibility! 