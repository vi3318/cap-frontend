#!/bin/bash

echo "🎨 Installing Animation Dependencies for Research Document Analysis System"
echo "================================================================"

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the frontend directory."
    exit 1
fi

echo "📦 Installing animation and interaction libraries..."

# Install animation dependencies
npm install react-intersection-observer@^9.5.3 \
           react-spring@^9.7.3 \
           lottie-react@^2.4.0 \
           react-parallax-tilt@^1.7.178

echo ""
echo "✅ Animation dependencies installed successfully!"
echo ""
echo "📋 Installed packages:"
echo "  - react-intersection-observer: For scroll-based animations"
echo "  - react-spring: For smooth spring animations"
echo "  - lottie-react: For Lottie animations"
echo "  - react-parallax-tilt: For 3D tilt effects"
echo ""
echo "🚀 You can now start the development server with: npm start"
echo "🌟 Your homepage now includes:"
echo "   ✨ Smooth hover effects"
echo "   🎭 Glitch-style title animation"
echo "   📜 Scroll-based parallax effects"
echo "   🎯 3D tilt interactions"
echo "   ⚡ Spring-powered animations"
echo "   🔄 Intersection observer animations"
echo ""
echo "🎉 Ready to impress with world-class animations!"