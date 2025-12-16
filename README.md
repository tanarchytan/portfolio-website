# Security Architect Portfolio

Terminal-themed portfolio website for David Gillot - Security Architect, Purple Team specialist focused on IT/OT security.

## Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── style.css           # Terminal theme styling
├── data.js             # ALL CONTENT (certifications, experience, projects, skills, contact)
├── build.js            # Build script (minification)
├── package.json        # Build dependencies
└── dist/               # Production files (auto-generated)
```

## Content Management

**All portfolio content is managed in `data.js`**

The `data.js` file contains all text content including:
- ASCII art variations
- Personal information (whoami)
- Certifications
- Career timeline
- Project highlights
- Skills
- Contact information

To update portfolio content, edit `data.js` only - no need to touch HTML.

## Development

### Install Dependencies
```bash
npm install
```

### Build for Production
```bash
npm run build
```

Minifies HTML, CSS, and JavaScript to the `dist/` folder.

### Local Development
```bash
npm run dev
```

Builds and serves on `http://localhost:8788`

### Audit Dependencies
```bash
npm run audit
```

## Deployment

Deployed to **Cloudflare Pages** via GitHub integration.

**Build Settings:**
- Framework: None (vanilla JavaScript)
- Build command: `npm run build`
- Build output directory: `dist`

## Features

- Terminal-themed UI with interactive file system navigation
- Particle.js background animations
- Typing animations for commands
- Rotating ASCII art titles
- Fully responsive design
- Optimized production build (~28 KB total)

## Technologies

- Vanilla HTML/CSS/JavaScript
- [Particles.js](https://vincentgarreau.com/particles.js/) for background effects
- Build tools: html-minifier-terser, terser, clean-css

## License

MIT License - David Gillot © 2025
