# World Class Engineers Website

A professional static website for Joe Skeen's "World Class Engineers" business, showcasing Azure cloud expertise and enterprise-grade backend development services for local businesses.

## Project Overview

This website positions World Class Engineers as a specialized backend development shop with a focus on cloud-native solutions, performance engineering, system integration, and Angular development. The site leverages Joe's impressive background as a Director at Health Catalyst and his Azure certification to establish credibility with local business clients.

## Features

- Responsive design using Tailwind CSS
- Modern, professional aesthetic highlighting enterprise expertise
- Focused service offerings that align with Joe's experience
- Interactive elements like FAQ accordions
- Contact form with client-side validation
- Case studies highlighting previous successes
- Technology showcase

## Technical Details

- Built with semantic HTML5
- Styled with Tailwind CSS via CDN (for easy development)
- Interactive elements powered by vanilla JavaScript
- No external dependencies or frameworks (except Font Awesome for icons)
- Optimized for performance and SEO

## Services Highlighted

1. **Cloud-Native Backend Development** - Azure-powered solutions
2. **Application Performance Engineering** - Optimization & scaling
3. **Integration & Automation** - Including payment systems
4. **Angular Enterprise Development** - Component libraries & testing

## File Structure

```
world-class-engineers/
├── index.html              # Homepage
├── services.html           # Services page
├── about.html              # About page
├── case-studies.html       # Case studies page
├── contact.html            # Contact page
├── js/
│   └── main.js             # Main JavaScript file
├── img/                    # Image directory
│   ├── hero-image.svg
│   ├── joe-skeen.jpg
│   ├── logo-azure.svg
│   ├── logo-typescript.svg
│   ├── logo-nodejs.svg
│   ├── logo-angular.svg
│   ├── logo-rest-api.svg
│   ├── logo-powershell.svg
│   └── ...                 # Other image files
└── README.md               # This file
```

## Tailwind CSS Implementation

This project uses Tailwind CSS via CDN for streamlined development:

1. **Development Mode**: Using Tailwind CSS via CDN for rapid development
2. **Production Optimization**: For production deployment, consider:
   - Installing Tailwind via npm
   - Using PostCSS to process Tailwind
   - Purging unused styles for minimal file size

### Setup & Local Development

1. Clone or download this repository
2. Open any HTML file in your browser to view the site
3. Edit the HTML files directly to make changes (Tailwind utility classes)
4. Refresh the browser to see changes

## Deployment

For optimal performance in production:

1. Install Tailwind CSS and dependencies:
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Create configuration files:
   ```
   npx tailwindcss init -p
   ```

3. Configure content paths in `tailwind.config.js`:
   ```js
   module.exports = {
     content: ["./**/*.{html,js}"],
     theme: {
       extend: {
         // Your custom theme extensions
       },
     },
     plugins: [],
   }
   ```

4. Build optimized CSS:
   ```
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
   ```

5. Update HTML files to use the optimized CSS instead of the CDN

## Credits

- Font Awesome for icons (via CDN)
- Tailwind CSS for utility-first styling
- Placeholder images (to be replaced with real photos)

---

© 2025 World Class Engineers. All rights reserved. 