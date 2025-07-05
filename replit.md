# Replit.md - Karan Singh Tomar Portfolio Website

## Overview

This is a premium, dark-themed animated portfolio website for Karan Singh Tomar, a Software Developer specializing in AI agents, scalable web apps, and system-level services. The website is built using vanilla HTML, CSS, and JavaScript with Tailwind CSS for styling and various external libraries for animations and functionality.

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: Built with vanilla HTML, CSS, and JavaScript
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component-Based Structure**: Modular sections for hero, about, services, portfolio, and contact
- **Animation Framework**: AOS (Animate On Scroll) library for smooth scroll-triggered animations
- **Static Hosting**: Designed for static file hosting with no backend requirements

### Technology Stack
- **HTML5**: Semantic markup with proper meta tags for SEO
- **CSS3**: Custom properties for theming with CSS variables
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **AOS**: Animation library for scroll-triggered effects
- **EmailJS**: Client-side email service for contact form
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family for typography

## Key Components

### 1. Navigation System
- **Mobile-responsive navigation** with hamburger menu
- **Theme toggle** functionality (dark/light mode)
- **Smooth scrolling** between sections
- **Active link highlighting** based on scroll position

### 2. Hero Section
- **Animated introduction text** with typewriter effects
- **Gradient backgrounds** using CSS custom properties
- **Call-to-action buttons** with hover animations
- **Scroll indicators** for user guidance

### 3. About Section
- **Editable content** using contenteditable attributes
- **Skill bars** with animated progress indicators
- **Personal branding** with professional summary
- **Experience highlights** with 3+ years focus

### 4. Services Section
- **Card-based layout** for service offerings:
  - Agentic AI Systems
  - Web Services & APIs
  - Full-stack Web Applications
- **Editable pricing information** in HTML
- **Scroll-triggered animations** for card reveals
- **Hover effects** for enhanced interactivity

### 5. Portfolio Gallery
- **Categorized projects** (Web Applications, Agentic AI Projects)
- **Filterable grid layout** with JavaScript-powered filtering
- **Image optimization** for web performance
- **Modal/lightbox functionality** for project details

### 6. Contact System
- **EmailJS integration** for client-side email handling
- **Form validation** with real-time feedback
- **Success/error messaging** for user experience
- **Social media links** for alternative contact methods

## Data Flow

### Client-Side Interactions
1. **User loads page** → HTML/CSS/JS assets loaded from CDN/local files
2. **Scroll events** → AOS animations triggered based on viewport
3. **Form submission** → EmailJS processes contact form without backend
4. **Theme toggle** → CSS variables updated and preference stored in localStorage
5. **Portfolio filtering** → JavaScript filters DOM elements based on category

### External Service Integration
- **EmailJS**: Handles contact form submissions
- **CDN Resources**: Tailwind CSS, AOS, Font Awesome, Google Fonts
- **No database**: All content is static and embedded in HTML

## External Dependencies

### CDN-Based Libraries
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **AOS**: `https://unpkg.com/aos@2.3.1/dist/aos.css`
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- **Google Fonts**: Inter font family
- **EmailJS**: `https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`

### Development Dependencies
- **http-server**: Local development server for testing
- **Node.js**: Runtime for development tools

## Deployment Strategy

### Static Hosting Options
- **GitHub Pages**: Direct deployment from repository
- **Netlify**: Continuous deployment with form handling
- **Vercel**: Static site hosting with global CDN
- **Traditional Web Hosting**: Simple FTP upload

### Build Process
- **No build step required**: Pure HTML/CSS/JS
- **Asset optimization**: Manual minification if needed
- **SEO optimization**: Meta tags and semantic HTML already implemented

### Performance Considerations
- **CDN utilization**: External libraries loaded from CDNs
- **Image optimization**: Recommended for portfolio images
- **Lazy loading**: Can be implemented for portfolio gallery
- **Caching strategies**: Static assets benefit from browser caching

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 05, 2025. Initial setup