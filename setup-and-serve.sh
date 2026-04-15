#!/bin/bash
echo "🚀 Setting up LU Reviewer for local access..."

# Create a unified folder with HTML + assets
mkdir -p lu-reviewer-complete
cd lu-reviewer-complete

# Copy HTML
cp ../LU-Reviewer-WORKING.html ./index.html

# Copy assets
cp -r ../assets ./

echo "✓ Created /workspaces/replitlureviewer/lu-reviewer-complete/"
echo "✓ Contents:"
ls -lh

echo ""
echo "📁 Files ready to access:"
echo "   - index.html (main file - open this)"
echo "   - assets/ folder (CSS and JS files)"
echo ""
echo "🌐 To test locally:"
echo "   1. Open: file:///workspaces/replitlureviewer/lu-reviewer-complete/index.html"
echo "   2. Or copy the contents to a web server"
