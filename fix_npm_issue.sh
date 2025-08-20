#!/bin/bash

echo "🔧 Fixing npm ENOTEMPTY error..."

# Navigate to frontend directory
cd "$(dirname "$0")"

echo "🧹 Cleaning npm cache..."
npm cache clean --force

echo "🗑️ Removing node_modules with force..."
# Try different methods to remove node_modules
if [ -d "node_modules" ]; then
    echo "Attempting to remove node_modules..."
    
    # Method 1: Normal rm
    rm -rf node_modules 2>/dev/null || {
        echo "Method 1 failed, trying with find..."
        # Method 2: Find and remove files first
        find node_modules -type f -delete 2>/dev/null
        find node_modules -type d -delete 2>/dev/null
    } || {
        echo "Method 2 failed, trying with sudo..."
        # Method 3: With sudo (if available)
        sudo rm -rf node_modules 2>/dev/null || {
            echo "Method 3 failed, trying alternative approach..."
            # Method 4: Move to trash
            mv node_modules node_modules_old 2>/dev/null
        }
    }
fi

echo "🗑️ Removing package-lock.json..."
rm -f package-lock.json

echo "📦 Installing dependencies..."
npm install

echo "✅ Installation complete!"
echo "🧪 Testing Tailwind installation..."
npx tailwindcss --version

echo "🎉 All done! You can now run 'npm start'" 