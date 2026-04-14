#!/usr/bin/env python3
"""
Simple local web server for LU Reviewer App
Requires Python 3.6+

Usage:
    python3 server.py
    
Then open your browser to http://localhost:8000
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from threading import Timer

PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

def start_browser():
    """Open the browser after a short delay."""
    webbrowser.open(f'http://localhost:{PORT}')

def run_server():
    """Start the local web server."""
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), HANDLER) as httpd:
        print(f"╔{'='*50}╗")
        print(f"║ LU Reviewer App - Local Server                 ║")
        print(f"║ Serving at: http://localhost:{PORT:<30}║")
        print(f"║                                                  ║")
        print(f"║ Press Ctrl+C to stop the server                ║")
        print(f"╚{'='*50}╝")
        print()
        
        # Open browser after 1 second
        Timer(1.0, start_browser).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✓ Server stopped.")
            sys.exit(0)

if __name__ == "__main__":
    try:
        run_server()
    except OSError as e:
        if e.errno == 98:
            print(f"❌ Error: Port {PORT} is already in use.")
            print(f"   Either:")
            print(f"   1. Close the program using port {PORT}")
            print(f"   2. Change PORT in this script")
            sys.exit(1)
        else:
            raise
