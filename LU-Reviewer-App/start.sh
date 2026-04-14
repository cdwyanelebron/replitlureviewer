#!/bin/bash
# Start LU Reviewer App on macOS/Linux
# This requires Python 3.6+ to be installed

echo ""
echo "╔════════════════════════════════════════════╗"
echo "║ LU Reviewer App - Local Server             ║"
echo "║ (Completely Offline - No Internet Needed!) ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is not installed"
    echo ""
    echo "Install Python using:"
    echo "  macOS: brew install python3"
    echo "  Ubuntu/Debian: sudo apt-get install python3"
    echo "  Fedora: sudo dnf install python3"
    exit 1
fi

echo "✓ Python 3 found: $(python3 --version)"
echo "✓ Starting local web server..."
echo "✓ Opening browser to http://localhost:8000/"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try to open the browser automatically
if command -v open &> /dev/null; then
    # macOS
    open http://localhost:8000/ 2>/dev/null &
elif command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open http://localhost:8000/ 2>/dev/null &
fi

# Start the server
python3 -m http.server 8000
