#!/bin/bash

# Tailwind CSS Setup Script for Legal Document Analysis System

echo "🎨 Setting up Tailwind CSS..."

# Remove existing node_modules and package-lock.json for clean install
echo "🧹 Cleaning existing dependencies..."
rm -rf node_modules package-lock.json

# Install all dependencies including Tailwind
echo "📦 Installing all dependencies..."
npm install

# Verify Tailwind installation
echo "✅ Verifying Tailwind CSS installation..."
npx tailwindcss --version

echo "✅ Tailwind CSS setup complete!"
echo ""
echo "🚀 To start the development server:"
echo "   npm start"
echo ""
echo "📝 Tailwind classes are now available throughout your app!"
echo "   Example: className='bg-primary-600 text-white p-4 rounded-lg'" 