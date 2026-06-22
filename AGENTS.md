# PROJECT KNOWLEDGE BASE

**Type:** VitePress Documentation Site (Bannerlord modding SDK wiki)

## OVERVIEW
Bilingual (中文 / English) documentation site for Mount & Blade II: Bannerlord modding. Built with VitePress + Bun, deployed via GitHub Actions to GitHub Pages. Covers v1.3.15 (canonical), v1.3.0, and v1.4.5 (source now available).

## STRUCTURE
```
BannerlordCode.github.io/
├── docs/
│   ├── index.md                    # Site home (version picker)
│   ├── v1.3.15/{zh,en}/            # Canonical version docs
│   │   ├── index.md                # Version landing
│   │   ├── guide/                  # Guides (UI/Mission/Campaign/Save/...)
│   │   ├── architecture/           # ⭐ Hub: sdk-overview, module-system, save-system, version-delta
│   │   ├── api/{core,core-extra,mission,mission-ext,items,campaign,campaign-ext,gui,save-system,viewmodel,localization,engine}/
│   │   ├── native/                 # P/Invoke interface types
│   │   ├── native-1.3.15-src/      # Decompiled TaleWorlds.Native.dll reference
│   │   └── xml-reference/          # XML config + bug analysis
│   ├── v1.3.0/{zh,en}/             # Earlier version (stubs cross-link to v1.3.15)
│   ├── v1.4.5/{zh,en}/             # v1.4.5 module list + source layout
│   ├── versions/                  # 🔀 Cross-version class comparison (1.3.0→1.3.15→1.4.5), source-generated
│   └── .vitepress/config.js        # Nav + tree sidebars (zh/en mirrored, collapsible groups)
└── tools/                          # Audit/build helpers
    ├── audit-links.mjs             # Dead-link checker (run from docs/)
    ├── class-version-diff.mjs      # Extract & diff a class's API across 1.3.0/1.3.15/1.4.5 (CLI + exported fns)
    ├── gen-version-pages.mjs       # Regenerate docs/versions/*.md from source (run after source updates)
    ├── escape-prose-angles.mjs     # Escape '<' in prose so VitePress doesn't parse generics as HTML
    └── fix-v130-links.mjs          # One-shot v1.3.0 relative-link depth fixer
```

## WHERE TO LOOK
| File | Purpose |
|------|---------|
| docs/.vitepress/config.js | Nav, tree sidebars, version/lang switchers, `ignoreDeadLinks:false` |
| docs/v1.3.15/zh/architecture/sdk-overview.md | ⭐ The big-picture module map (start here) |
| docs/v1.3.15/zh/architecture/version-delta.md | v1.3.0/1.3.15/1.4.5 module comparison |
| docs/versions/index.md | 🔀 Cross-version class comparison hub (per-class API deltas) |
| docs/v1.3.15/zh/api/save-system/SaveManager.md | Style reference for class-reference docs |
| tools/audit-links.mjs | Verify 0 broken links |
| tools/class-version-diff.mjs | Diff one class's API across versions; powers docs/versions/ |

## SOURCE CODE (sibling folders, read-only reference)
| Folder | Contents |
|--------|----------|
| bannerlord-1.3.0/ | C# source, 31 modules / 4596 cs / 5306 types (incl. SandBox, StoryMode) |
| bannerlord-1.3.15/ | C# source, 54 modules / 5196 cs / 5811 types (canonical) |
| bannerlord-1.4.5/Bannerlord.Source/ | Decompiled 1.4.5: gameplay modules (2361 cs / 2523 types) + bin/ core DLLs |
| native-1.2.9/ | TaleWorlds.Native.dll decompiled C (.c ~75MB, .h ~2.4MB) + src/ split |
> Re-scan these folders each session — they may have been updated (1.4.5 decompile is ongoing).

## CONVENTIONS
- Markdown files under docs/<version>/<lang>/ become routes.
- Frontmatter: `title`, `description`.
- Bilingual: every content page exists in both zh/ and en/ (parallel structure).
- Class-reference doc format: H1 → metadata (命名空间/模块/类型) → 概述 → 主要属性 table → 主要方法 (csharp signatures) → 使用示例 → 参见 (relative links). See `api/save-system/SaveManager.md`.
- Links: relative paths, **no trailing slashes** on file links, no absolute paths.
- **Generics in prose**: wrap `<T>`-style refs in backticks (`` `List<Hero>` ``) so VitePress doesn't parse them as HTML.
- Sidebar is a collapsible grouped tree per version+lang, defined in config.js.

## COMMANDS
```bash
cd BannerlordCode.github.io
bun install
bun run docs:dev      # Local dev server (http://localhost:5173)
bun run docs:build    # Production build — FAILS on any dead link (ignoreDeadLinks:false)
# Verify links:
cd docs && node ../tools/audit-links.mjs
# Regenerate cross-version class comparison (after bannerlord-* source updates):
cd .. && node tools/gen-version-pages.mjs        # run from repo root (parent of bannerlord-*)
node tools/class-version-diff.mjs ClassName      # print one class's diff
```

## NOTES
- `ignoreDeadLinks` is `false` — the build is the dead-link gate. Run `bun run docs:build` after edits; fix every reported dead link.
- **Cross-version comparison** (`docs/versions/`): one page per class, comparing its accessible API (public/protected/internal, excl. private) across 1.3.0/1.3.15/1.4.5, with a hand-curated modder-impact note. Pages are auto-generated from source by `tools/gen-version-pages.mjs` (which imports `tools/class-version-diff.mjs`). Re-run after the sibling `bannerlord-*` source trees update. 1.4.5 source is decompiled, so some modifiers may differ from the original — the pages note this.
- When generating class docs via subagents (agent_team): instruct them to (1) grep signatures for large files, (2) use the `write` tool (not print to message), (3) wrap generics in backticks in prose.
- GitHub Actions deploys `docs/.vitepress/dist/` to GitHub Pages on push to `main`.
