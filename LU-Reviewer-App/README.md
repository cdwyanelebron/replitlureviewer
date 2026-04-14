# LU Reviewer App - Self-Contained Version

This is a complete, standalone version of the LU Reviewer app extracted from the live deployment. **No internet connection required** to run this app once downloaded.

## What's Included

- ✅ Complete frontend application (HTML, CSS, JavaScript)
- ✅ All assets and styles bundled
- ✅ All lesson data and quiz questions
- ✅ Favicon and UI assets
- ✅ **Replit watermark/branding removed**
- ✅ Ready to run locally on any computer

## System Requirements

- **Python 3.6+** (most systems have this pre-installed)
- A modern web browser (Chrome, Firefox, Safari, Edge)
- **No internet connection needed** after downloading this folder

## How to Run

### Option 1: Automatic (Recommended)
Using Python's built-in server (easiest method):

```bash
# Navigate to the app directory
cd /path/to/LU-Reviewer-App

# Run the local server
python3 server.py

# Your browser will open automatically at http://localhost:8000
```

### Option 2: Using Python's http.server
```bash
cd /path/to/LU-Reviewer-App
python3 -m http.server 8000
```
Then open your browser to: **http://localhost:8000**

### Option 3: Using Node.js (if installed)
```bash
cd /path/to/LU-Reviewer-App
npx http-server
```

### Option 4: Using http-server package
```bash
cd /path/to/LU-Reviewer-App
npm install -g http-server
http-server
```

## File Structure

```
LU-Reviewer-App/
├── index.html             # Main application (no Replit code)
├── favicon.svg            # App icon
├── server.py              # Local development server
├── README.md              # This file
└── assets/
    ├── index-ByVxjqtq.js  # Main application code (bundled)
    └── index-D6JaMz96.css # All styles (bundled)
```

## Features

The app includes complete study materials for:

- **GE 1: Understanding the Self** (47 modules)
  - Philosophical, Anthropological, Sociological views
  - Psychological and Physical aspects
  - Midterm and Final comprehensive exams

- **Quiz System**
  - Multiple choice questions
  - Instant feedback
  - Progress tracking

- **Responsive Design**
  - Works on desktop, tablet, and mobile
  - Darkened sidebar navigation
  - Quick lesson access

## Offline Usage

This app is **completely self-contained**:
- ✅ Works without internet
- ✅ All data is embedded in the JavaScript bundle
- ✅ No external dependencies
- ✅ No API calls required
- ✅ No watermarks or branding

## Customization

You can:
1. Edit `index.html` to change the title or metadata
2. Host the entire `LU-Reviewer-App` folder on any web server
3. Create a shortcut to `server.py` for one-click launching
4. Share the entire folder with others - they can run it the same way

## Troubleshooting

### Port Already in Use
If port 8000 is already in use:
```bash
# Try a different port
python3 -m http.server 8080
```
Then visit: **http://localhost:8080**

### Permission Denied Error
Make the script executable:
```bash
chmod +x server.py
./server.py
```

### Browser Won't Open Automatically
Just manually visit: **http://localhost:8000**

### Blank Page or 404 Errors
Ensure you're running the server from the `LU-Reviewer-App` directory:
```bash
cd /path/to/LU-Reviewer-App
python3 server.py
```

## Distribution

To share this app with others:

1. **Zip the entire folder** and send them the `.zip` file
2. They extract it
3. They run `python3 server.py` in the extracted folder
4. App launches in their browser - **completely offline**

## No Internet Watermarks

This version has been **cleaned of all Replit branding and watermarks**:
- ❌ Removed: Replit CDN script
- ❌ Removed: "Made with Replit" badge
- ✅ Kept: All functionality and content

## Notes

- The app stores user progress in browser's local storage (not sent anywhere)
- All quiz data is embedded in the application
- No external analytics or tracking
- Completely private when run locally

---

**Version:** 1.0 (Extracted from live deployment)  
**Last Updated:** April 14, 2026  
**Status:** ✅ Fully functional and tested
