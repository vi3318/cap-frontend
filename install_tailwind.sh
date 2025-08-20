#!/bin/bash

echo "🎨 Installing Tailwind CSS..."

# Navigate to frontend directory
cd "$(dirname "$0")"

# Remove old dependencies
echo "🧹 Cleaning old dependencies..."
rm -rf node_modules package-lock.json

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install Tailwind CSS specifically
echo "🎨 Installing Tailwind CSS..."
npm install -D tailwindcss@3.3.5 postcss@8.4.31 autoprefixer@10.4.16

# Test installation
echo "✅ Testing installation..."
npx tailwindcss --version

echo "🎉 Tailwind CSS installed successfully!"
echo "🚀 Run 'npm start' to start the development server" 