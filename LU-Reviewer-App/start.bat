@echo off
REM Start LU Reviewer App on Windows
REM This requires Python 3.6+ to be installed

echo.
echo ╔════════════════════════════════════════════╗
echo ║ LU Reviewer App - Local Server             ║
echo ║ (Completely Offline - No Internet Needed!) ║
echo ╚════════════════════════════════════════════╝
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Error: Python is not installed or not in PATH
    echo.
    echo Please install Python from: https://www.python.org/downloads/
    echo During installation, check "Add Python to PATH"
    echo.
    pause
    exit /b 1
)

echo ✓ Starting local web server...
echo ✓ Opening browser to http://localhost:8000/
echo.
echo Press Ctrl+C to stop the server
echo.

python -m http.server 8000
