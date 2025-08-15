# Personal Website Specification
https://daymoon.it.com/

## 1. Project Overview
A personal portfolio-style website showcasing projects, writings, photography, and an about page.  Built as a static site with modern, minimalist, and consistent design. Deployed via GitHub, automated deployment via GitHub Actions, and monitored with Google Analytics.

## 2. Goals

### 2.1 For Users
- Provide a simple, modern landing page.
- Ensure easy navigation through Projects, Writings, Photography, and About.

### 2.2 For Development
- Maintain visual design consistency and minimalism.
- Keep code simple, well-integrated, and easy to maintain.

## 3. Structure & Content

### 3.1 Navigation
- Left side: Website name (placeholder, later replaceable with a logo).
- Center: Navigation links to:
  - Projects
  - Writings
  - Photography
  - About
- Navigation is persistent across all pages.

### 3.2 Landing Page Layout
1. Section 1: Hero Section (~16:9 ratio)  
   - Contains an image (not full-width).  
   - Image aligned slightly left, with space on the right for text if needed.

2. Section 2: Text Highlight Section (~16:4 ratio)  
   - Consistent typography and spacing.  
   - Short paragraph introducing the site.

3. Section 3: Similar to Section 1  
   - Layout mirrors Section 1 for design balance.

### 3.3 Subpages

#### Projects
- List of projects with:
  - Title
  - Short description
  - External link (opens in new tab)

#### Writings
- List of articles from Markdown files.
- Markdown files are rendered into HTML by JavaScript.

#### Photography
- Images stored in `/images` folder.
- Displayed automatically in a grid/gallery layout.

#### About
- Minimal description (initially placeholder).
- Can be expanded in the future.

## 4. Technical Plan

### 4.1 Initial Tech Stack
- HTML / CSS / JavaScript
- Markdown-to-HTML rendering library (e.g., Showdown.js)
- Folder structure:

### 4.2 Deployment & Monitoring
- Deploy via GitHub Pages.
- Auto-deploy using GitHub Actions.
- Google Analytics for traffic tracking.

## 5. Future Improvements
- Replace placeholder name with a custom logo.
- Add search functionality.
- Add CV section under About.
- JavaScript framework for dynamic UI.
- Potentially migrate to cloud deployment with backend using FastAPI for dynamic features.