#!/usr/bin/env node

// Simple test to verify Tailwind CSS installation

console.log('🧪 Testing Tailwind CSS installation...');

try {
  // Test if tailwindcss is available
  const { execSync } = require('child_process');
  const version = execSync('npx tailwindcss --version', { encoding: 'utf8' });
  console.log('✅ Tailwind CSS version:', version.trim());
  
  // Test if postcss is available
  const postcssVersion = execSync('npx postcss --version', { encoding: 'utf8' });
  console.log('✅ PostCSS version:', postcssVersion.trim());
  
  console.log('🎉 All dependencies are properly installed!');
  console.log('');
  console.log('🚀 You can now run: npm start');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('');
  console.log('🔧 To fix this, run:');
  console.log('   cd frontend');
  console.log('   rm -rf node_modules package-lock.json');
  console.log('   npm install');
} 