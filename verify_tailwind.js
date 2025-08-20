const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Tailwind CSS installation...\n');

try {
  // Check if package.json exists
  const packagePath = path.join(__dirname, 'package.json');
  if (!fs.existsSync(packagePath)) {
    throw new Error('package.json not found');
  }

  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log('📦 Package.json found');

  // Check if Tailwind is in devDependencies
  if (!packageJson.devDependencies || !packageJson.devDependencies.tailwindcss) {
    throw new Error('Tailwind CSS not found in devDependencies');
  }

  const tailwindVersion = packageJson.devDependencies.tailwindcss;
  console.log(`✅ Tailwind CSS version in package.json: ${tailwindVersion}`);

  // Check if node_modules exists
  const nodeModulesPath = path.join(__dirname, 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    throw new Error('node_modules not found. Run "npm install" first');
  }

  console.log('✅ node_modules found');

  // Try to run tailwindcss command
  try {
    const version = execSync('npx tailwindcss --version', { 
      encoding: 'utf8',
      cwd: __dirname 
    });
    console.log(`✅ Tailwind CSS installed: ${version.trim()}`);
  } catch (error) {
    console.log('❌ Tailwind CSS command not found');
    console.log('💡 Try running: npm install');
    process.exit(1);
  }

  // Check if config files exist
  const configFiles = ['tailwind.config.js', 'postcss.config.js'];
  configFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} found`);
    } else {
      console.log(`⚠️  ${file} not found`);
    }
  });

  // Check if CSS file exists
  const cssPath = path.join(__dirname, 'src', 'index.css');
  if (fs.existsSync(cssPath)) {
    console.log('✅ src/index.css found');
  } else {
    console.log('⚠️  src/index.css not found');
  }

  console.log('\n🎉 All checks passed! Tailwind CSS should be working.');
  console.log('🚀 Run "npm start" to start the development server');

} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n🔧 To fix this:');
  console.log('1. cd frontend');
  console.log('2. rm -rf node_modules package-lock.json');
  console.log('3. npm install');
  console.log('4. node verify_tailwind.js');
} 