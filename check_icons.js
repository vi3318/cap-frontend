const fs = require('fs');
const path = require('path');

console.log('🔍 Checking for icon issues...\n');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.jsx'));

const problematicIcons = ['Privacy', 'Accuracy'];
let issuesFound = false;

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  problematicIcons.forEach(icon => {
    // Check for icon usage in JSX
    const iconUsage = new RegExp(`<${icon}\\s`, 'g');
    const matches = content.match(iconUsage);
    
    if (matches) {
      console.log(`❌ ${file}: Found <${icon} icon usage`);
      issuesFound = true;
    }
    
    // Check for icon imports
    const iconImport = new RegExp(`import.*${icon}.*from.*@mui/icons-material`, 'g');
    const importMatches = content.match(iconImport);
    
    if (importMatches) {
      console.log(`❌ ${file}: Found ${icon} import`);
      issuesFound = true;
    }
  });
});

if (!issuesFound) {
  console.log('✅ No icon issues found!');
  console.log('🎉 All components should compile without errors.');
} else {
  console.log('\n🔧 Fix these issues by replacing problematic icons:');
  console.log('   Privacy → Shield');
  console.log('   Accuracy → Verified');
}

console.log('\n🚀 You can now run: npm start'); 