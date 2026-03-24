# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-24
**Type:** VitePress Documentation Site

## OVERVIEW
Documentation site for Bannerlord modding SDK. Built with VitePress, deployed via GitHub Actions to GitHub Pages.

## STRUCTURE
```
BannerlordCode.github.io/
└── docs/
    ├── index.md          # Home page
    └── .vitepress/
        ├── config.js     # VitePress configuration
        └── dist/         # Built output (gh-pages branch)
```

## WHERE TO LOOK
| File | Purpose |
|------|---------|
| docs/index.md | Home page content |
| docs/.vitepress/config.js | Navigation, sidebar, theme config |

## CONVENTIONS
- Markdown files in docs/ become routes
- Frontmatter for page metadata (title, description)
- Sidebar defined in config.js
- Build output goes to dist/ for deployment

## NOTES
- Multi-version documentation setup may be needed when documenting both v1.3.15 and v1.3.0 SDK versions
- GitHub Actions workflow handles deployment to gh-pages branch
- Run `npm run docs:dev` for local development server

## COMMANDS
```bash
cd BannerlordCode.github.io
npm install
npm run docs:dev    # Local dev server
npm run docs:build  # Production build
```
