# PROJECT KNOWLEDGE BASE

**Type:** Zola Documentation Site (Bannerlord modding SDK wiki)

## OVERVIEW
Bilingual (中文 / English) documentation site for Mount & Blade II: Bannerlord modding. Built with Zola, deployed via GitHub Actions to GitHub Pages. Covers v1.3.15 (canonical), v1.3.0, and v1.4.5 (source now available).

## STRUCTURE
```
BannerlordCode.github.io/
├── content/                        # Zola content tree
│   ├── _index.md                   # Site home (version picker)
│   ├── v1.3.15/{zh,en}/            # Canonical version docs
│   │   ├── _index.md               # Version landing
│   │   ├── guide/                  # Guides (UI/Mission/Campaign/Save/...)
│   │   ├── architecture/           # ⭐ Hub: sdk-overview, module-system, save-system, version-delta
│   │   ├── api/{core,core-extra,mission,mission-ext,items,campaign,campaign-ext,gui,save-system,viewmodel,localization,engine}/
│   │   ├── native/                 # P/Invoke interface types
│   │   ├── native-1.3.15-src/      # Decompiled TaleWorlds.Native.dll reference
│   │   └── xml-reference/          # XML config + bug analysis
│   ├── v1.3.0/{zh,en}/             # Earlier version docs
│   ├── v1.4.5/{zh,en}/             # v1.4.5 module list + source layout
│   └── versions/                   # 🔀 Cross-version class comparison (1.3.0→1.3.15→1.4.5), source-generated
├── static/                         # Static assets
├── templates/                      # Zola Tera templates
│   ├── base.html
│   ├── index.html
│   ├── page.html
│   ├── section.html
│   ├── partials/
│   │   ├── sidebar.html
│   │   └── topnav.html
│   ├── macros/
│   │   └── sidebar.html
│   └── shortcodes/
│       └── alert.html
├── config.toml                     # Zola site configuration
└── tools/                          # Audit/build helpers
    ├── audit-links.mjs             # Dead-link checker (run from repo root)
    ├── class-version-diff.mjs      # Extract & diff a class's API across 1.3.0/1.3.15/1.4.5 (CLI + exported fns)
    ├── gen-version-pages.mjs       # Regenerate content/versions/*.md from source (run after source updates)
    ├── convert-containers.mjs      # Convert legacy VitePress ::: containers to markdown blockquotes
    └── validate-build.ps1          # Full build + timing + peak-memory measurement
```

## WHERE TO LOOK
| File | Purpose |
|------|---------|
| `config.toml` | Zola site configuration, slugify/search/link-checker settings |
| `templates/partials/sidebar.html` | Version/language sidebar dispatcher |
| `templates/macros/sidebar.html` | Hard-coded v1.3.15 sidebar menus and recursive section trees |
| `content/v1.3.15/zh/architecture/sdk-overview.md` | ⭐ The big-picture module map (start here) |
| `content/v1.3.15/zh/architecture/version-delta.md` | v1.3.0/1.3.15/1.4.5 module comparison |
| `content/versions/_index.md` | 🔀 Cross-version class comparison hub |
| `content/v1.3.15/zh/api/save-system/SaveManager.md` | Style reference for class-reference docs |
| `tools/audit-links.mjs` | Verify 0 broken links |
| `tools/validate-build.ps1` | Full-site build validation with memory evidence |
| `tools/class-version-diff.mjs` | Diff one class's API across versions; powers `content/versions/` |

## SOURCE CODE (sibling folders, read-only reference)
| Folder | Contents |
|--------|----------|
| `bannerlord-1.3.0/` | C# source, 31 modules / 4596 cs / 5306 types (incl. SandBox, StoryMode) |
| `bannerlord-1.3.15/` | C# source, 54 modules / 5196 cs / 5811 types (canonical) |
| `bannerlord-1.4.5/Bannerlord.Source/` | Decompiled 1.4.5: gameplay modules (2361 cs / 2523 types) + bin/ core DLLs |
| `native-1.2.9/` | TaleWorlds.Native.dll decompiled C (.c ~75MB, .h ~2.4MB) + src/ split |
> Re-scan these folders each session — they may have been updated (1.4.5 decompile is ongoing).

## CONVENTIONS
- Markdown files under `content/<version>/<lang>/` become routes.
- Section roots are named `_index.md`; leaf pages are named `<slug>.md`.
- Frontmatter: `title`, `description`.
- Bilingual: every content page exists in both `zh/` and `en/` (parallel structure).
- Class-reference doc format: H1 → metadata (命名空间/模块/类型) → 概述 → 主要属性 table → 主要方法 (csharp signatures) → 使用示例 → 参见 (relative links). See `api/save-system/SaveManager.md`.
- Links: relative paths, no absolute paths. Prefer linking to a section with `./` or `../<section>/` rather than to `_index.md`.
- **Generics in prose**: wrap `<T>`-style refs in backticks (`` `List<Hero>` ``) so the static site generator does not parse them as HTML.
- Sidebar is handled by Zola Tera macros; v1.3.15 menus are hard-coded, others are rendered from section trees.

## COMMANDS
```bash
cd BannerlordCode.github.io
# Install Zola: https://www.getzola.org/documentation/getting-started/installation/

zola serve --interface 127.0.0.1 --port 5173   # Local dev server
zola build                                      # Production build
zola check                                      # Link check (internal warnings, external warnings)

# Verify links (stricter than zola check):
node tools/audit-links.mjs

# Measure full build + peak memory:
powershell -ExecutionPolicy Bypass -File tools\validate-build.ps1

# Regenerate cross-version class comparison (after bannerlord-* source updates):
node tools/gen-version-pages.mjs        # run from repo root (parent of bannerlord-*)
node tools/class-version-diff.mjs ClassName      # print one class's diff
```

## NOTES
- `zola check` is configured to warn on internal links, but `tools/audit-links.mjs` is the stricter dead-link gate. Run `node tools/audit-links.mjs` after edits; `BROKEN_LINKS` must be 0.
- **Cross-version comparison** (`content/versions/`): one page per class, comparing its accessible API (public/protected/internal, excl. private) across 1.3.0/1.3.15/1.4.5, with a hand-curated modder-impact note. Pages are auto-generated from source by `tools/gen-version-pages.mjs` (which imports `tools/class-version-diff.mjs`). Re-run after the sibling `bannerlord-*` source trees update. 1.4.5 source is decompiled, so some modifiers may differ from the original — the pages note this.
- When generating class docs via subagents (agent_team): instruct them to (1) grep signatures for large files, (2) use the `write` tool (not print to message), (3) wrap generics in backticks in prose.
- GitHub Actions deploys the Zola `public/` directory to GitHub Pages on push to `main`.
