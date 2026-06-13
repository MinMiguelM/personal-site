# Personal Site Context & Development Guide

## Project Overview
A single-page responsive CV/portfolio website for Miguel Ángel Montañez Gómez with a dark matrix/terminal aesthetic. Built with pure HTML, CSS, and vanilla JavaScript (no dependencies).

**Status**: ✅ Complete and Deployed
**Last Updated**: 2026-06-12

---

## File Structure
```
/personal-site/
├── index.html              # Main webpage (7 sections, 534 lines)
├── styles/main.css         # Styling & responsive design (1,200+ lines)
├── scripts/main.js         # Interactive features & animations (350+ lines)
├── CONTEXT.md              # This file - development guide
├── TASK.md                 # Original requirements
├── Profile.md              # Source data (LinkedIn profile)
└── Profile.pdf             # Source data backup
```

---

## Design System

### Color Palette (CSS Variables in `:root`)
All colors defined in `styles/main.css` under `:root`:

```css
--bg-dark: #0a0e27          /* Main dark background */
--bg-darker: #050609        /* Darker accent background */
--bg-light: #0f1535         /* Light accent background */
--text-primary: #0f0        /* Primary neon green */
--text-accent: #0ff         /* Cyan highlight color */
--text-secondary: #0f09     /* Muted green */
--text-muted: #0f05         /* Very muted green */
--border-color: #0f0        /* Green borders */
--border-accent: #0ff       /* Cyan borders */
--highlight: #f0f           /* Magenta highlight (unused) */
```

### Typography
- **Font Family**: `"Monaco", "Courier New", "Courier", monospace` (monospace only)
- **Base Size**: `1rem` (16px)
- Sizes: `sm` (0.875rem), `base`, `lg` (1.25rem), `xl` (1.5rem), `2xl` (2rem), `3xl` (2.5rem), `4xl` (3rem)

### Spacing System
- `xs`: 0.25rem, `sm`: 0.5rem, `md`: 1rem, `lg`: 1.5rem, `xl`: 2rem, `2xl`: 3rem, `3xl`: 4rem

---

## Content Structure

### 1. Navigation Bar (Sticky)
- **File**: `index.html` lines 16-30
- **Location**: Fixed at top with `z-index: 1000`
- **Links**: About, Experience, Skills, Certifications, Education, Contact
- **Styling**: Dark semi-transparent background with bottom border
- **Responsive**: Stacks vertically on mobile

### 2. Hero Section
- **File**: `index.html` lines 32-67
- **Height**: 100vh minimum
- **Features**: 
  - Typewriter effect on "whoami" command
  - ASCII borders top/bottom
  - Hero social links (LinkedIn, GitHub, GitLab)
  - Professional tagline and description
  - Scanline animation overlay
- **Animations**: `fadeInUp`, `blink`, `scanlines`

### 3. About Section (id: "about")
- **File**: `index.html` lines 69-86
- **Content**: 3 paragraphs about professional background
- **Highlight Box**: Final paragraph with cyan border and accent color

### 4. Experience Section (id: "experience")
- **File**: `index.html` lines 88-170
- **Structure**: 5 experience items (EPAM, Globant, Bizagi, Hydra, Academia)
- **Featured**: EPAM role (border: 2px cyan, gradient background)
  - Shows: Title, Company, Team Lead badge (glowing), Duration
  - Responsibilities: Bulleted list with arrows
  - Leadership badge animates with `glow` keyframe
- **Timeline**: Hover effects, left border highlights on interaction

### 5. Skills Section (id: "skills")
- **File**: `index.html` lines 172-219
- **Structure**: 7 skill categories in responsive grid
- **Categories** (in order):
  1. 🤖 AI & Emerging Technologies (FEATURED - cyan border, gradient)
  2. 👥 Leadership & Architecture (FEATURED - cyan border)
  3. ⚡ Primary Tech Stack (primary styling)
  4. 🔧 Backend & Services
  5. ☁️ Cloud & Infrastructure
  6. 🗄️ Databases
  7. 🛠️ Tools & Practices
  8. 🌍 Languages
- **Tags**: Two types - `featured-tag` (cyan, bold) and `primary-tag` (green, bold)

### 6. Certifications Section (id: "certifications")
- **File**: `index.html` lines 221-265
- **Featured Certifications** (2 items):
  - Claude Certified Architect - Foundations
    - Icon: 🏛️
    - Verify URL: `https://verify.skilljar.com/c/m7ks5x7wnpdw`
  - AWS Certified Cloud Practitioner
    - Icon: ☁️
    - Verify URL: `https://www.credly.com/badges/dc1baec5-e8a4-46f9-867b-67a031f5d80a/linked_in_profile`
- **Supporting Certifications** (3 items):
  - MongoDB for Java Developers
  - Google Cloud Specialization
  - DevOps Administration
- **Styling**: Featured have 2px cyan border, gradient background, larger padding
- **Verify Links**: Cyan border, hover glow effect, clickable with `target="_blank"`

### 7. Education Section (id: "education")
- **File**: `index.html` lines 267-291
- **Items**: 2 degrees from Pontificia Universidad Javeriana
  - Enterprise Software Architecture Specialist (2019-2020)
  - System Engineering (2013-2018)
- **Styling**: Left border (4px green), hover transform

### 8. Contact/Footer (id: "contact")
- **File**: `index.html` lines 293-320
- **Contact Items**: 3 links
  - LinkedIn: `miguel-a-montanez`
  - GitHub: `MinMiguelM`
  - GitLab: `MinMiguelM`
- **Note**: Personal email removed for privacy
- **Footer**: Terminal cursor animation, copyright notice

---

## Key Interactive Features

### JavaScript Functionality (scripts/main.js)

1. **Smooth Scroll Navigation**
   - Intercepts all anchor clicks
   - Scrolls to target with offset (`80px`)
   - Uses `window.scrollTo()` with `behavior: 'smooth'`

2. **Typewriter Effect**
   - Function: `typewriterEffect()`
   - Affects: `.typewriter` element in hero
   - Speed: 50ms per character
   - Text: "whoami"

3. **Intersection Observer**
   - Observes: All `<section>` and major content items
   - Adds: `.visible` class when in viewport
   - Triggers: Fade and slide animations

4. **Active Navigation Highlighting**
   - Updates nav links based on scroll position
   - Adds `.active` class to current section link
   - Function: `updateActiveNavLink()`

5. **Parallax Effect**
   - Hero content moves at `50%` of scroll speed
   - Opacity decreases as user scrolls down
   - Function: `addParallaxEffect()`

6. **Keyboard Navigation**
   - Tab navigation focuses all interactive elements
   - Focus outline: `2px solid #0ff`
   - Function: `enhanceKeyboardNavigation()`

7. **Accessibility Features**
   - Skip link added to document body
   - Respects `prefers-reduced-motion` system setting
   - Semantic HTML throughout

### Animations & Keyframes

**Hero Animations:**
- `fadeInUp`: 1s ease-out (hero content fade in)
- `scanlines`: 8s linear infinite (moving horizontal lines)
- `blink`: 1s infinite (typewriter cursor)

**Section Animations:**
- `slideIn`: 0.6s ease-out (content slides left to right)
- `glow`: 2s ease-in-out infinite (leadership badge hover)

**Transition Speed:**
- Global: `--transition: all 0.3s ease-in-out`

---

## Responsive Breakpoints

### Desktop (1024px+)
- Full 3-column skills grid
- Side-by-side experience headers
- All animations enabled

### Tablet (768px - 1023px)
- 2-column skills grid
- Adjusted font sizes (h4: 2.5rem, h3: 2rem)
- Stack layout for navigation

### Mobile (480px - 767px)
- 1-column skills grid
- Smaller font sizes (h4: 2rem, h3: 1.5rem)
- Touch-friendly tap targets (44px minimum)
- Simplified experience layout

### Small Mobile (<480px)
- Extra small font sizes
- Adjusted spacing (md: 0.75rem, lg: 1rem)
- Bullet points replace arrows in lists
- Centered layout

---

## Common Modifications

### Change Colors
Edit `:root` variables in `styles/main.css` (top of file):
```css
:root {
  --text-primary: #0f0;      /* Change primary text color */
  --text-accent: #0ff;       /* Change accent color */
  --bg-dark: #0a0e27;        /* Change background */
}
```

### Add or Remove Experience Items
1. **Add**: Duplicate an `<article class="experience-item">` block in `index.html` (lines 103-170)
2. **Remove**: Delete the entire `<article>` block
3. For **primary/featured role**: Add `class="featured"` to the article
4. Update company name in `.company-badge` span
5. Update dates in `.experience-duration` span

### Modify Skills
1. **Add Category**: Duplicate a `<div class="skill-category">` block (lines 181-201)
2. **Add Skill Tag**: Duplicate `<span class="skill-tag">` inside category
3. **Make Featured**: Add `featured-tag` class to span: `class="skill-tag featured-tag"`
4. **Make Primary**: Add `primary-tag` class to span: `class="skill-tag primary-tag"`

### Add Certification
1. Duplicate a `<article class="certification">` block in certifications section
2. For **featured**: Duplicate from `.featured-certs` area
3. Update: Icon emoji, title, issuer, description
4. Add verify link: `<a href="URL" target="_blank" rel="noopener noreferrer" class="cert-verify">🔗 Verify Credential</a>`

### Update Contact Links
Edit in two places:
1. **Hero section** (lines 60-64): Update social links
2. **Contact section** (lines 304-316): Update contact items

---

## Performance Considerations

### Optimization Done
- ✅ No external dependencies (pure HTML/CSS/JS)
- ✅ Minimal CSS selectors (efficient rendering)
- ✅ Lazy-load ready (IntersectionObserver API)
- ✅ CSS variables used (avoid redundancy)
- ✅ Semantic HTML (faster parsing)
- ✅ Reduced motion respected (accessibility)

### Further Optimization
- Consider minifying CSS/JS for production
- Add critical CSS inline in `<head>`
- Use `rel="preconnect"` for external links
- Add Service Worker for offline capability

---

## Browser Compatibility

**Tested On:**
- Chrome/Edge 120+
- Safari 16+
- Firefox 120+

**Key Features Supported:**
- CSS Grid & Flexbox ✅
- CSS Custom Properties (Variables) ✅
- Intersection Observer API ✅
- Smooth Scroll ✅
- `target="_blank"` with `rel="noopener noreferrer"` ✅

**Not Supported (Graceful Fallbacks):**
- IE 11 and below (no support for modern features)

---

## Deployment Checklist

Before deploying to production:

- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test on tablet (iPad, Android tablet)
- [ ] Verify all links open correctly (social, certifications, internal anchors)
- [ ] Check color contrast (WCAG AA minimum 4.5:1 ratio)
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Verify responsive design at all breakpoints (375px, 768px, 1024px, 1440px+)
- [ ] Performance test (Lighthouse score >90)
- [ ] Check console for JavaScript errors
- [ ] Verify smooth scroll works in all browsers
- [ ] Test animations on low-motion devices
- [ ] Check print preview for readability

---

## Maintenance Notes

### Content Updates
- **Profile Information**: Update in HTML directly (no database)
- **Work Experience**: Add/remove `<article>` blocks in experience section
- **Skills**: Edit `<span class="skill-tag">` entries
- **Certifications**: Update URLs and descriptions in featured/supporting sections

### Styling Updates
- **Colors**: Modify CSS variables in `:root`
- **Animations**: Edit `@keyframes` definitions in `styles/main.css`
- **Responsive Breakpoints**: Adjust `@media (max-width: XXXpx)` queries

### Feature Additions
- **New Sections**: Copy existing section structure, add to nav links
- **New Animations**: Define `@keyframes` in CSS, trigger with JavaScript classes
- **New Interactions**: Add event listeners in `scripts/main.js`

---

## Future Enhancement Ideas

1. **Dark/Light Mode Toggle**: Add theme switcher with localStorage persistence
2. **PDF Export**: Add print-to-PDF functionality for CV download
3. **Project Portfolio**: Add dedicated projects showcase section
4. **Blog/Articles**: Add technical blog section with filtering
5. **Contact Form**: Add form with email notifications (requires backend)
6. **Search**: Add search functionality for skills/experience
7. **i18n**: Add multiple language support (Spanish/English)
8. **Analytics**: Add tracking (Google Analytics, Plausible)
9. **Comments**: Add Disqus or similar for blog posts
10. **API Integration**: Connect to LinkedIn API for live profile data

---

## Contact & Social Links
- **LinkedIn**: https://www.linkedin.com/in/miguel-a-montanez/
- **GitHub**: https://github.com/MinMiguelM
- **GitLab**: https://gitlab.com/MinMiguelM

---

## Quick Reference: CSS Classes

### Layout
- `.section-container`: Max-width wrapper (1200px)
- `.section-header`: Section title with border-bottom
- `.section-content`: Content area inside section

### Typography
- `.terminal-prompt`: Green "$" symbol for terminal effect
- `.command`: Terminal command text (typewriter animated)
- `.typewriter`: Hero "whoami" text with cursor animation

### Components
- `.navbar`: Sticky navigation bar
- `.social-link`: Social media link with hover effects
- `.skill-tag`: Individual skill badge
- `.skill-tag.featured-tag`: Highlighted featured skill
- `.experience-item`: Work experience card
- `.experience-item.featured`: Primary featured work (EPAM)
- `.certification`: Certification card
- `.certification.featured-cert`: Highlighted certification
- `.cert-verify`: Verification link with cyan styling

### States
- `.visible`: Added by Intersection Observer
- `.active`: Added to active navigation link

### Utilities
- `.hidden`: Display none
- `.no-scroll`: Overflow hidden (prevent scrolling)

---

## Support & Questions

For questions about modifications or features, refer to:
1. This CONTEXT.md file
2. Source code comments in HTML, CSS, and JavaScript
3. Original TASK.md for requirements
4. CSS variables in `:root` for theming

---

**Version**: 1.0
**Created**: 2026-06-12
**Last Modified**: 2026-06-12
**Maintained By**: Future Developer
