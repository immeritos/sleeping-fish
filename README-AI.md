# AI Assistant Documentation - Personal Website

This document provides comprehensive context for AI assistants working on this personal website project.

## 🎯 Project Overview

**Purpose:** A minimalist personal website showcasing projects, photography, blog content, and personal information with a clean, elegant design.

**Design Philosophy:** 
- Ultra-minimal design with focus on content
- No unnecessary UI elements or decorations
- Responsive layout that adapts to window height and different device
- Consistent typography with Times New Roman serif for headings
- Limited font weights - most text uses font-normal, some uses font-medium (NO bold fonts)
- Left-aligned text for better readability

## 🏗 Architecture & Key Systems

### Photography System (`/lib/photography.ts`)
- **Dynamic File Scanning:** Automatically reads `public/photography/` directory
- **Series Detection:** Each subfolder becomes a photo series
- **Cover Image Logic:** Uses cover images from `covers/` directory
- **Static Generation:** Pre-generates all routes at build time
- **Error Handling:** Graceful fallbacks for missing files

### Blog System (Contentlayer2 + MDX)
- **MDX Processing:** Uses Contentlayer2 for content management
- **Dynamic Routing:** `[...slug]` pattern for flexible blog URLs
- **No Author System:** Simplified for personal website (single author)
- **No Tag System:** Removed for minimal design
- **No Search:** Removed for simplicity
- **Typography:** Times New Roman serif for blog titles
- **No Title on List Page:** "All Posts" title removed for minimal design

### Projects System (Contentlayer2 + MDX)
- **MDX Processing:** Same Contentlayer2 system as blog
- **Dynamic Routing:** `[...slug]` pattern matching blog structure
- **Grid Layout:** 2-column layout on desktop, 1-column on mobile
- **Cover Images:** 16:9 aspect ratio hero images
- **Frontmatter Fields:** title, description, date, coverImage, href, tags, draft
- **Static Generation:** Pre-generates all project routes at build time

### Routing Structure
```
/                              # Landing page
/about                         # About page with footer
/blog                          # Blog listing (no title)
/blog/[...slug]                # Individual blog posts
/blog/page/[page]              # Blog pagination
/photography/                  # Main gallery (3x3 grid)
/photography/[...slug]/        # Individual series pages
/projects/                     # Projects grid (2 columns)
/projects/[...slug]/           # Individual project pages
```

### Component Architecture
- **Server Components:** Data fetching and static generation
- **Client Components:** Interactive elements (photo navigation, state, theme toggle)
- **Separation:** Clean split between server/client responsibilities
- **Theme System:** next-themes with dark/light mode support
- **Navigation:** Fixed header with theme toggle and responsive design
- **Layout Components:** Moved to `/components/layouts/` for better organization
- **Footer:** Minimal footer component, only displayed on About page

## 🎨 Design Patterns & Constraints

### Typography System
- **Headings:** Times New Roman serif font for blog titles and important headings
- **Body Text:** System fonts (Inter) for readability
- **Font Weights:** Only `font-normal` (400) and `font-medium` (500) - NO bold fonts
- **Text Alignment:** Left-aligned for better readability (no center alignment)
- **Logo Font:** "Day Moon" uses `font-medium` at 10px size

#### Font Weight Usage Guidelines:
- **`font-normal` (400):** Default for body text, paragraphs, most UI elements
- **`font-medium` (500):** Navigation items, logo, important UI elements
- **NEVER use:** `font-bold`, `font-extrabold`, `font-semibold`, `font-black`

### Layout Principles
- **Fixed Navigation:** `fixed top-0` with `pt-20 pb-16` offset for content
- **Consistent Padding:** All pages use `pt-20 pb-16` for uniform spacing
- **Centered Layouts:** `max-w-2xl` (about), `max-w-3xl` (blog), `max-w-4xl` (home, photography, projects)
- **No Container Class:** Removed to avoid conflicts with max-width
- **No Scroll on Series Pages:** `h-screen flex flex-col` layout
- **Square Photo Containers:** `aspect-square` with responsive sizing
- **Theme Support:** Dark/light mode with CSS variables

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

**Photography System:**
- **`/app/photography/page.tsx`** - Main gallery with 3-column grid, minimal design
- **`/app/photography/[...slug]/page.tsx`** - Server component for static generation
- **`/app/photography/[...slug]/photo-series-client.tsx`** - Client component for interactivity
- **`/lib/photography.ts`** - Core photo system logic and file scanning

**Blog System:**
- **`/app/blog/page.tsx`** - Blog listing page (no title, minimal design)
- **`/app/blog/[...slug]/page.tsx`** - Individual blog post pages
- **`/app/blog/page/[page]/page.tsx`** - Blog pagination pages
- **`/components/layouts/ListLayout.tsx`** - Blog list layout (no search, no tags)
- **`/components/layouts/PostSimple.tsx`** - Simple blog post layout with Times New Roman titles
- **`/contentlayer.config.ts`** - MDX processing configuration (Blog + Project types)

**Projects System:**
- **`/app/projects/page.tsx`** - Projects grid (2 columns, centered layout)
- **`/app/projects/[...slug]/page.tsx`** - Individual project detail pages
- **`/components/ProjectCard.tsx`** - Project card component with 16:9 cover images
- **`/data/projects/*.mdx`** - Project content files
- **`/public/projects/`** - Project cover images

**Navigation & Theme:**
- **`/components/navigation.tsx`** - Fixed navigation with theme toggle
- **`/components/theme-toggle.tsx`** - Dark/light mode toggle with Radix icons
- **`/components/theme-provider.tsx`** - next-themes provider wrapper

**Pages:**
- **`/app/page.tsx`** - Landing page with consistent spacing (`pt-20 pb-16`)
- **`/app/about/page.tsx`** - About page with portrait, social icons, bio, and footer
- **`/app/layout.tsx`** - Root layout with metadataBase configuration

**Shared Components:**
- **`/components/Footer.tsx`** - Minimal footer ("© 2025 Daymoon. All rights reserved.")
- **`/components/blog/SectionContainer.tsx`** - Blog container with consistent padding

### Styling Approach
- **Tailwind CSS:** Utility-first styling with custom configuration
- **shadcn/ui:** Pre-built components for consistency
- **Radix UI:** Component primitives and icons (preferred over Lucide) 
- **Custom Utilities:** `scrollbar-hide` for clean scrollbars
- **Responsive Design:** Viewport-based sizing (`vh`, `vw`)
- **Theme System:** CSS variables for dark/light mode
- **Typography:** Times New Roman for headings, system fonts for body

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

### Font Weight Issues
- **Problem:** Accidental use of bold fonts (`font-bold`, `font-extrabold`)
- **Solution:** Always use `font-normal` or `font-medium` only

### Text Alignment
- **Problem:** Center-aligned text is hard to read
- **Solution:** Use left-aligned text for better readability

## 📋 Development Guidelines

### When Making Changes
1. **Maintain Minimal Design:** Avoid adding unnecessary elements
2. **Preserve Responsive Behavior:** Test on different screen sizes
3. **Keep Consistent Spacing:** Use established gap and padding values
4. **Follow Typography Rules:** No bold fonts, use Times New Roman for headings
5. **Left-align Text:** Avoid center alignment for better readability
6. **Update Both READMEs:** Keep documentation in sync

### Code Patterns
- **Server Components:** For data fetching and static generation
- **Client Components:** Only for interactive state management
- **Error Boundaries:** Always include fallbacks for file operations
- **TypeScript:** Use proper interfaces for all data structures

### File Organization
- **Photos:** Organized in `public/photography/[series-name]/` with covers in `covers/`
- **Blog Content:** MDX files in `data/blog/`
- **Project Content:** MDX files in `data/projects/`
- **Project Images:** Cover images in `public/projects/`
- **Components:** Reusable UI in `components/`, page-specific in `app/`
- **Utilities:** Shared logic in `lib/`
- **Types:** Define interfaces for all data structures
- **Layouts:** Blog layouts in `components/layouts/` directory

## 🎯 User Preferences & Constraints

### Design Requirements
- **No scroll on photo series pages** - Must fit in viewport
- **Square photo containers** - Always maintain 1:1 aspect ratio
- **Fixed element sizes** - Arrows and thumbnails never change size
- **Minimal spacing** - Tight, clean layout
- **No radius** - Sharp, clean edges
- **No descriptions** - Focus purely on visual content
- **Limited font weights** - Only font-normal and font-medium allowed (NO bold fonts)
- **Left-aligned text** - Better readability than center alignment
- **Times New Roman headings** - Serif font for blog titles and important headings

### Technical Constraints
- **Next.js 14:** Use app directory and server components
- **Static Generation:** Pre-generate all photo and blog routes
- **Performance:** Optimize images and loading
- **Responsive:** Work on all screen sizes
- **Accessibility:** Proper ARIA labels and keyboard navigation
- **Theme Support:** Dark/light mode with next-themes
- **Content Management:** Contentlayer2 for MDX processing
- **Typography:** Times New Roman for headings, system fonts for body

## 🔄 Recent Changes & Context

### Latest Major Updates
- **Projects Section** - Full Contentlayer integration with MDX, 2-column grid layout
- **About Page Redesign** - Portrait image, social icons (GitHub, LinkedIn, Email), minimal footer
- **Routing Consistency** - Photography changed from `[seriesId]` to `[...slug]` pattern
- **Layout Refactor** - Moved `/layouts/` to `/components/layouts/` for better organization
- **Spacing Standardization** - All pages use `pt-20 pb-16` with consistent max-widths
- **Footer Component** - Minimal footer only on About page
- **Vercel Deployment Fixes** - ESLint downgrade (v9→v8), TypeScript config updates
- **Metadata Configuration** - Added metadataBase (daymoon.it.com) for social sharing
- **Blog List Update** - Removed "All Posts" title for minimal design

### Build & Deployment
- **Site URL:** https://daymoon.it.com
- **Build Status:** ✅ All 20 pages generate successfully
- **ESLint:** v8.57.0 (compatible with Next.js 14)
- **TypeScript:** moduleResolution set to "node" for better compatibility
- **No Warnings:** metadataBase properly configured

### Current State
- Photography system with `[...slug]` routing (6 series)
- Blog system with MDX processing (3 posts)
- Projects system with MDX processing (2 projects)
- Dark/light theme toggle working
- Typography system with Times New Roman headings
- Navigation with theme toggle and consistent styling
- About page with portrait, social links, and footer
- All pages with consistent spacing and centering
- Production-ready build with no warnings

### Key Dependencies
- **next-themes** - Theme management
- **contentlayer2** - MDX processing for blog and projects
- **@radix-ui/react-icons** - Icon system (GitHub, LinkedIn, Email, Theme, Chevrons)
- **lucide-react** - Additional icons
- **pliny** - Contentlayer utilities and MDX rendering
- **next** - v14.2.33

This documentation should provide comprehensive context for any AI assistant working on this project.
