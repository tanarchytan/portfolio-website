const fs = require('fs');
const path = require('path');
const { minify: minifyHTML } = require('html-minifier-terser');
const { minify: minifyJS } = require('terser');
const CleanCSS = require('clean-css');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

console.log('🔨 Building optimized portfolio...\n');

async function build() {
  try {
    // 1. Minify HTML
    console.log('📄 Minifying HTML...');
    const html = fs.readFileSync('index.html', 'utf8');
    const minHTML = await minifyHTML(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true
    });
    fs.writeFileSync(path.join(distDir, 'index.html'), minHTML);
    console.log(`✅ HTML: ${html.length} → ${minHTML.length} bytes (${Math.round((1 - minHTML.length/html.length) * 100)}% smaller)\n`);

    // 2. Minify CSS
    console.log('🎨 Minifying CSS...');
    const css = fs.readFileSync('style.css', 'utf8');
    const minCSS = new CleanCSS({
      level: 2
    }).minify(css);
    fs.writeFileSync(path.join(distDir, 'style.css'), minCSS.styles);
    console.log(`✅ CSS: ${css.length} → ${minCSS.styles.length} bytes (${Math.round((1 - minCSS.styles.length/css.length) * 100)}% smaller)\n`);

    // 3. Minify JavaScript
    console.log('⚙️  Minifying JavaScript...');
    const js = fs.readFileSync('data.js', 'utf8');
    const minJS = await minifyJS(js, {
      compress: {
        dead_code: true,
        drop_console: false,
        drop_debugger: true,
        keep_classnames: false,
        keep_fnames: false
      },
      mangle: true,
      format: {
        comments: false
      }
    });
    
    if (minJS.error) {
      throw minJS.error;
    }
    
    fs.writeFileSync(path.join(distDir, 'data.js'), minJS.code);
    console.log(`✅ JS: ${js.length} → ${minJS.code.length} bytes (${Math.round((1 - minJS.code.length/js.length) * 100)}% smaller)\n`);
    
    console.log('✨ Build complete! Files in ./dist/\n');
    
    // Calculate total savings
    const originalSize = html.length + css.length + js.length;
    const minifiedSize = minHTML.length + minCSS.styles.length + minJS.code.length;
    const savings = Math.round((1 - minifiedSize/originalSize) * 100);
    
    console.log('📊 Total optimization:');
    console.log(`   Original:  ${(originalSize/1024).toFixed(2)} KB`);
    console.log(`   Minified:  ${(minifiedSize/1024).toFixed(2)} KB`);
    console.log(`   Saved:     ${savings}% 🎉\n`);
  } catch (err) {
    console.error('❌ Build error:', err);
    process.exit(1);
  }
}

build();