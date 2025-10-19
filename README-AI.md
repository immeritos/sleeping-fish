# AI Assistant Documentation - Personal Website

This document provides comprehensive context for AI assistants working on this personal photography website project.

## 🎯 Project Overview

**Purpose:** A minimalist personal website showcasing photography with a dynamic, file-system-based photo management system.

**Design Philosophy:** 
- Ultra-minimal design with focus on content
- No unnecessary UI elements or decorations
- Square photo containers with consistent spacing
- Fixed navigation with no scroll effects
- Responsive layout that adapts to window height

## 🏗 Architecture & Key Systems

### Photography System (`/lib/photography.ts`)
- **Dynamic File Scanning:** Automatically reads `public/photography/` directory
- **Series Detection:** Each subfolder becomes a photo series
- **Cover Image Logic:** Uses first image in each series as cover
- **Static Generation:** Pre-generates all routes at build time
- **Error Handling:** Graceful fallbacks for missing files

### Routing Structure
```
/photography/                    # Main gallery (3x3 grid)
/photography/[seriesId]/         # Individual series pages
```

### Component Architecture
- **Server Components:** Data fetching and static generation
- **Client Components:** Interactive elements (photo navigation, state)
- **Separation:** Clean split between server/client responsibilities

## 🎨 Design Patterns & Constraints

### Layout Principles
- **Fixed Navigation:** `fixed top-0` with `pt-20` offset for content
- **No Scroll on Series Pages:** `h-screen flex flex-col` layout
- **Square Photo Containers:** `aspect-square` with responsive sizing
- **Consistent Spacing:** `gap-8` between elements, `pt-20` for navigation offset

### Photo Series Page Layout
```tsx
<div className="h-screen flex flex-col pt-20">
  <div className="flex-1 flex items-center justify-center px-4">
    {/* Photo + Arrows - Centered */}
  </div>
  <div className="flex gap-1 overflow-x-auto pb-8 pt-4 justify-center px-4 flex-shrink-0 max-h-[20vh] scrollbar-hide">
    {/* Thumbnails - Fixed at bottom */}
  </div>
</div>
```

### Responsive Behavior
- **Photo Container:** `max-h-[60vh] max-w-[60vh]` scales with viewport
- **Fixed Elements:** Arrows (`w-24 h-24`), thumbnails (`w-16 h-16`) never change
- **Scrollbar Hidden:** Custom `scrollbar-hide` utility for clean appearance

## 🔧 Technical Implementation Details

### Key Files & Their Roles

**`/app/photography/page.tsx`**
- Main gallery with 3-column grid
- Uses `getAllPhotoSeries()` for dynamic data
- Minimal design: no titles, descriptions, or radius

**`/app/photography/[seriesId]/page.tsx`**
- Server component for static generation
- Uses `generateStaticParams()` with `getAllPhotoSeriesIds()`
- Renders `PhotoSeriesClient` with series data

**`/app/photography/[seriesId]/photo-series-client.tsx`**
- Client component for interactivity
- State management for current photo index
- Navigation arrows and thumbnail gallery
- Responsive photo container sizing

**`/lib/photography.ts`**
- Core photo system logic
- File system scanning functions
- Error handling and fallbacks
- TypeScript interfaces for type safety

### Styling Approach
- **Tailwind CSS:** Utility-first styling
- **shadcn/ui:** Pre-built components for consistency
- **Custom Utilities:** `scrollbar-hide` for clean scrollbars
- **Responsive Design:** Viewport-based sizing (`vh`, `vw`)

## 🚨 Common Issues & Solutions

### Photo Container Centering
- **Problem:** Container not centered due to conflicting width constraints
- **Solution:** Use `justify-center` on flex container, remove `max-w-6xl`

### Vertical Photo Overflow
- **Problem:** Tall photos exceeding container bounds
- **Solution:** `overflow-hidden` on container, `object-contain` on images

### Scroll Bar Visibility
- **Problem:** Unwanted scroll bars on small screens
- **Solution:** Custom `scrollbar-hide` utility in Tailwind config

### Navigation Spacing
- **Problem:** Inconsistent spacing between pages
- **Solution:** Always use `pt-20` for navigation offset

## 📋 Development Guidelines

### When Making Changes
1. **Maintain Minimal Design:** Avoid adding unnecessary elements
2. **Preserve Responsive Behavior:** Test on different screen sizes
3. **Keep Consistent Spacing:** Use established gap and padding values
4. **Update Both READMEs:** Keep documentation in sync

### Code Patterns
- **Server Components:** For data fetching and static generation
- **Client Components:** Only for interactive state management
- **Error Boundaries:** Always include fallbacks for file operations
- **TypeScript:** Use proper interfaces for all data structures

### File Organization
- **Photos:** Organized in `public/photography/[series-name]/`
- **Components:** Reusable UI in `components/`, page-specific in `app/`
- **Utilities:** Shared logic in `lib/`
- **Types:** Define interfaces for all data structures

## 🎯 User Preferences & Constraints

### Design Requirements
- **No scroll on photo series pages** - Must fit in viewport
- **Square photo containers** - Always maintain 1:1 aspect ratio
- **Fixed element sizes** - Arrows and thumbnails never change size
- **Minimal spacing** - Tight, clean layout
- **No radius** - Sharp, clean edges
- **No descriptions** - Focus purely on visual content

### Technical Constraints
- **Next.js 14:** Use app directory and server components
- **Static Generation:** Pre-generate all photo routes
- **Performance:** Optimize images and loading
- **Responsive:** Work on all screen sizes
- **Accessibility:** Proper ARIA labels and keyboard navigation

## 🔄 Recent Changes & Context

### Latest Updates
- **Fixed photo container centering** - Removed conflicting width constraints
- **Added responsive sizing** - Container scales with window height
- **Hidden scroll bars** - Clean appearance on small screens
- **Consistent navigation spacing** - Matched across all pages

### Current State
- Photography system fully functional
- Dynamic photo series detection working
- Responsive layout implemented
- Minimal design achieved
- All user requirements met

This documentation should provide comprehensive context for any AI assistant working on this project.
