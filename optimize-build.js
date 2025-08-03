#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Optimizing build for production...');

// Add build optimization steps
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add performance optimization scripts if they don't exist
if (!packageJson.scripts['build:analyze']) {
  packageJson.scripts['build:analyze'] = 'npm run build && npx serve -s build';
}

if (!packageJson.scripts['build:optimized']) {
  packageJson.scripts['build:optimized'] = 'GENERATE_SOURCEMAP=false npm run build';
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('✅ Build optimization scripts added to package.json');
console.log('📊 Run "npm run build:analyze" to analyze bundle size');
console.log('🎯 Run "npm run build:optimized" for production build without sourcemaps');