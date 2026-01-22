# Reveal.js Presentation Guide

## Overview
This project is a slideshow presentation built with Reveal.js, Next.js 16, TypeScript, and Bun.

## Getting Started

### Prerequisites
- Bun installed on your system

### Installation
```bash
bun install
```

### Running the Presentation
```bash
bun dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
bun build
bun start
```

## Navigation

### Keyboard Controls
- **→ / ←** - Navigate between slides (horizontal)
- **↑ / ↓** - Navigate vertical slides
- **Space** - Next slide
- **Shift + Space** - Previous slide
- **Home** - First slide
- **End** - Last slide
- **ESC** - Overview mode (press ESC again to exit)
- **F** - Fullscreen mode
- **S** - Speaker notes (if enabled)
- **B** or **.** - Pause/blackout screen

### Touch Controls
- **Swipe left/right** - Navigate horizontal slides
- **Swipe up/down** - Navigate vertical slides
- **Pinch** - Overview mode

### Mouse Controls
- Click navigation arrows (bottom-right corner)
- Click on the progress bar (bottom of screen)

## Creating Slides

### Basic Slide Structure
Edit [`src/app/page.tsx`](src/app/page.tsx) to add or modify slides:

```tsx
<RevealPresentation>
  <section>
    <h1>Slide Title</h1>
    <p>Slide content</p>
  </section>
</RevealPresentation>
```

### Vertical Slides
Create vertical slide stacks by nesting `<section>` elements:

```tsx
<section>
  <section>Main Slide</section>
  <section>Nested Slide 1</section>
  <section>Nested Slide 2</section>
</section>
```

### Fragments (Step-by-Step Reveal)
Add `className="fragment"` to elements:

```tsx
<section>
  <p className="fragment">Appears first</p>
  <p className="fragment">Then this</p>
  <p className="fragment">Finally this</p>
</section>
```

### Custom Transitions
Apply per-slide transitions:

```tsx
<section data-transition="zoom">
  <h2>This slide zooms in</h2>
</section>
```

Available transitions:
- `none`
- `fade`
- `slide`
- `convex`
- `concave`
- `zoom`

### Background Colors
```tsx
<section data-background-color="#4d7e65">
  <h2>Colored background</h2>
</section>
```

### Background Gradients
```tsx
<section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
  <h2>Gradient background</h2>
</section>
```

### Background Images
```tsx
<section data-background-image="/path/to/image.jpg">
  <h2>Image background</h2>
</section>
```

## Configuration

### Reveal.js Options
Modify the configuration in [`src/components/RevealPresentation.tsx`](src/components/RevealPresentation.tsx):

```typescript
revealInstanceRef.current = new Reveal(deckRef.current, {
  // Your custom options
  transition: 'slide',
  controls: true,
  progress: true,
  // ... more options
});
```

### Available Configuration Options
- `transition` - Global transition style
- `transitionSpeed` - default/fast/slow
- `controls` - Show navigation arrows
- `progress` - Show progress bar
- `slideNumber` - Show slide numbers
- `center` - Vertically center slides
- `touch` - Enable touch navigation
- `loop` - Loop the presentation
- `hash` - Enable URL hash navigation
- `keyboard` - Enable keyboard shortcuts
- `overview` - Enable overview mode
- `width/height` - Presentation size
- `margin` - Space around slide content
- `minScale/maxScale` - Zoom limits

## Themes

### Changing the Theme
Edit the import in [`src/components/RevealPresentation.tsx`](src/components/RevealPresentation.tsx):

```typescript
import "reveal.js/dist/theme/black.css";  // Current theme
```

### Available Built-in Themes
- `black.css` - Black background (default)
- `white.css` - White background
- `league.css` - Gray background
- `beige.css` - Beige background
- `sky.css` - Blue background
- `night.css` - Dark blue background
- `serif.css` - Serif font theme
- `simple.css` - Minimal theme
- `solarized.css` - Solarized colors
- `moon.css` - Purple theme
- `dracula.css` - Dracula theme
- `blood.css` - Red theme

## Tips & Tricks

### 1. Overview Mode
Press **ESC** to see all slides at once. Click any slide to jump to it.

### 2. Speaker View
Access speaker notes by pressing **S** (requires additional setup with speaker notes plugin).

### 3. PDF Export
Add `?print-pdf` to the URL and use your browser's print function to save as PDF.
Example: `http://localhost:3000/?print-pdf`

### 4. Direct Linking
Use URL hashes to link directly to specific slides:
- `http://localhost:3000/#/2` - Jump to slide 3 (0-indexed)
- `http://localhost:3000/#/2/3` - Jump to slide 3, vertical slide 4

### 5. Code Highlighting
For syntax highlighting, add the highlight.js plugin:

```bash
bun add highlight.js
```

Then import in your component:
```typescript
import 'highlight.js/styles/monokai.css';
```

### 6. Markdown Support
To use Markdown in slides, add the markdown plugin from Reveal.js.

### 7. Math Equations
For LaTeX math rendering, add the math plugin (MathJax or KaTeX).

## Project Structure

```
hackday_01_2026/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main presentation content
│   │   ├── layout.tsx            # App layout
│   │   └── globals.css           # Global styles
│   └── components/
│       └── RevealPresentation.tsx # Reveal.js wrapper component
├── public/                        # Static assets
├── plans/
│   └── reveal-js-integration-plan.md
├── package.json
├── tsconfig.json
└── PRESENTATION_GUIDE.md         # This file
```

## Customization

### Adding Custom Styles
1. Edit [`src/app/globals.css`](src/app/globals.css) for global styles
2. Use inline styles on individual slides
3. Create CSS modules for component-specific styles

### Adding Plugins
Install Reveal.js plugins via npm/bun and import them in [`RevealPresentation.tsx`](src/components/RevealPresentation.tsx).

Popular plugins:
- RevealNotes - Speaker notes
- RevealMarkdown - Markdown support
- RevealHighlight - Code syntax highlighting
- RevealMath - Math equation rendering
- RevealZoom - Zoom into elements

## Troubleshooting

### Slides not appearing
- Check browser console for errors
- Ensure Reveal.js CSS is properly imported
- Verify that the component is client-side (`"use client"` directive)

### Navigation not working
- Check if JavaScript is enabled
- Verify keyboard shortcuts aren't being intercepted
- Try using mouse/touch navigation

### Styling issues
- Check for CSS conflicts in globals.css
- Verify Reveal.js theme is imported correctly
- Inspect element to check applied styles

### TypeScript errors
- Run `bun run lint` to check for errors
- Ensure all imports have proper types
- Check `@types/reveal.js` is installed

## Performance Tips

1. **Optimize images** - Use WebP format and appropriate sizes
2. **Lazy load heavy content** - Use fragments or vertical slides
3. **Minimize animations** - Too many transitions can slow performance
4. **Test on target devices** - Ensure smooth performance on presentation hardware

## Deployment

### Vercel
```bash
bun run build
# Deploy to Vercel via CLI or GitHub integration
```

### Static Export
For static HTML export, configure Next.js for static export in [`next.config.ts`](next.config.ts):

```typescript
const nextConfig = {
  output: 'export',
};
```

Then build:
```bash
bun run build
```

## Resources

- [Reveal.js Official Documentation](https://revealjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Bun Documentation](https://bun.sh/docs)

## License

This project uses:
- Reveal.js (MIT License)
- Next.js (MIT License)
- React (MIT License)

## Support

For issues or questions:
1. Check the Reveal.js documentation
2. Review the implementation in [`src/components/RevealPresentation.tsx`](src/components/RevealPresentation.tsx)
3. Check browser console for errors
4. Verify all dependencies are installed: `bun install`

Happy presenting! 🎉
