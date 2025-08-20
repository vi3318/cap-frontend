#!/bin/bash

echo "🔧 Fixing React Spring Dependencies for Research Document Analysis System"
echo "================================================================"

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the frontend directory."
    exit 1
fi

echo "📦 Removing conflicting React Spring packages..."

# Remove react-spring completely and reinstall with specific version
npm uninstall react-spring @react-spring/web @react-spring/three @react-spring/native

echo "📥 Installing React Spring Core only (avoiding 3D/Native conflicts)..."

# Install only the core web version
npm install @react-spring/web@^9.7.3

echo ""
echo "✅ Dependencies fixed successfully!"
echo ""
echo "📋 What was fixed:"
echo "  - Removed conflicting @react-spring/three (React 19 dependency)"
echo "  - Removed conflicting @react-spring/native (React Native dependency)"  
echo "  - Kept only @react-spring/web for web animations"
echo ""
echo "🚀 You can now start the development server with: npm start"
echo ""
echo "⚠️  Note: The warnings were caused by react-spring pulling in React 19"
echo "   dependencies for 3D/Native features we don't need for web animations."