# Sleeping Fish

A minimalist personal website featuring blog, photography, and project portfolios.

🌐 **Live Site:** [https://www.sleepingfish.blog/](https://www.sleepingfish.blog/)

## Design Philosophy

Sleeping Fish embraces a clean, minimalist aesthetic with a focus on content and readability:

- **Extreme Minimalism** - Clean layouts with ample white space
- **Typography-First** - Serif fonts (Times New Roman) for headings, system fonts for body text
- **Subtle Interactions** - Low-key hover effects and smooth transitions
- **Dark Mode Native** - Full support for light/dark themes using Radix Colors
- **Mobile-First** - Responsive design optimized for all screen sizes

## Core Features

### 📝 Blog System
- MDX-powered blog posts with full markdown support
- Pagination (5 posts per page)
- Reading time estimation
- Syntax highlighting for code blocks
- Math equation support (KaTeX)

### 📸 Photography
- Automatic photo series generation from folder structure
- Full-screen photo viewer with navigation
- Thumbnail gallery with smooth scrolling
- Square-format photo grid layout

### 💼 Projects
- Project portfolio with cover images
- MDX content support for detailed descriptions
- Tag system for categorization
- 2-column responsive grid layout

### 🎨 Design System
- **Colors:** Radix Colors (Sky, Slate, Amber)
- **Font Weights:** Only normal (400) and medium (500) - no bold
- **Alignment:** Consistent left-alignment throughout
- **Spacing:** Carefully crafted vertical rhythm

## Tech Stack

### Core Framework
- **Next.js 14** - App Router with TypeScript
- **React 18** - Server and client components
- **Contentlayer2** - Type-safe MDX content management

### Styling & UI
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Radix Colors** - Professional color system
- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations

### Content & Typography
- **MDX** - Enhanced markdown with React components
- **Prism.js** - Syntax highlighting
- **KaTeX** - Mathematical notation
- **Google Fonts** - Inter, Outfit, Fraunces

### Developer Tools
- **TypeScript** - Type safety
- **ESLint & Prettier** - Code formatting
- **Husky** - Git hooks

## Project Structure

```
personal-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── photography/       # Photography galleries
│   ├── projects/          # Project portfolio
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── blog/              # Blog-specific components
│   ├── layouts/           # Layout components
│   └── ui/                # UI primitives
├── content/               # MDX content files
│   ├── blog/              # Blog posts
│   └── projects/          # Project descriptions
├── public/                # Static assets
│   ├── photography/       # Photo series folders
│   └── projects/          # Project images
├── lib/                   # Utility functions
└── data/                  # Site metadata
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/immeritos/sleeping-fish.git
cd personal-website

# Install dependencies
npm install

# Generate content layer
npm run contentlayer

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

```
