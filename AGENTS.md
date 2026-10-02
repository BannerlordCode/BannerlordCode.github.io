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
| `tools/generate-page-navigation.mjs` | Build leaf-page Parent/Previous/Next/Related route data |
| `tools/validate-build.ps1` | Full-site build validation with memory evidence |
| `tools/class-version-diff.mjs` | Diff one class's API across versions; powers `content/versions/` |

## TEAM LIFECYCLE — close workers when they finish

- **A worker that has delivered and been verified is closed immediately.** Do not leave a
  finished worker holding a slot.
- **If every worker under a Lead is idle, close the whole Lead team.**
- **A single idle Lead with no remaining work is normal** — that is not a reason to keep
  anything alive, and not a reason to invent work.
- Before closing, the Lead must have independently verified the delivery (artifacts on
  disk, gates re-run). Closing is not a substitute for verification.
- Nothing should still be "running" merely because it was started.

## 🔴 HARD PREMISE — documentation is HAND-WRITTEN, never code-generated

This is a **premise of the project, not a guideline**. It outranks any task brief, any
schedule pressure, and any "it is only scaffolding" reasoning.

- **Every documentation page under `content/` must be written by a human (or an agent
  reading the C# source and writing prose), one page at a time.**
- **No script may emit a documentation page.** A generator emitting a `.md` under
  `content/` is a defect, not a shortcut — regardless of whether the output is accurate,
  whether it is labelled "auto-generated", or whether the brief authorised it.
- **Authorising generation in a brief does not make it acceptable.** If you are handed a
  brief that permits generated pages, refuse it and escalate.

### Acceptance MUST check this premise explicitly

Every acceptance report must state, per tree and per language, how many pages are
hand-written versus generated, with the detection method. A report that lists only
`deep_pass` counts, broken-link counts or coverage numbers has **not** checked the premise.

Current detection fingerprints (a page matching any of these is generated until proven
otherwise):

| Fingerprint | Meaning |
|---|---|
| `<!-- v*-skeleton -->` | emitted by a skeleton generator |
| `自动生成` / `Auto-generated stub` / `Auto-generated placeholder` | self-declared generated |
| `是 TaleWorlds.X 下的公开类型` | templated Overview sentence |
| `is a public type (in\|under) TaleWorlds` | templated Overview sentence |
| `阅读时先通过属性了解状态` / `Read properties first to understand state` | templated Mental Model |

A page that trips a fingerprint **and** has no real per-member prose is generated content
and must be withdrawn, not "improved".

### Enforcement

- **Concealed generation is a serious failure.** Presenting generated output as
  documentation, or letting a generated page overwrite a hand-written one, is grounds for
  immediate withdrawal of that output and a written incident in the evidence pack.
- **A generator may never overwrite a hand-written page.** Generated output must not enter
  `content/` at all; if scaffolding is needed for tooling, keep it outside `content/`.
- Signatures and metadata copied from source are fine — **prose that explains anything is
  not**. The line: transcribing a declaration is transcription; writing why, when, and how
  to use it is authorship. Only the second kind is documentation.

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
- Links: relative paths, no absolute paths. The link gate (`AUDIT_MODE=url node tools/audit-links.mjs`) treats **each page route as its own directory**, so relative links must step up before stepping across:
  - **Sibling leaf page in the same `api/<subdir>/`**: write `[X](../X)` — **NOT** `./X` (`./X` resolves to a child of the current page and breaks).
  - **Parent section index**: write `[…](../)` — **NOT** `./`.
  - **Cross top-level `api` subdir**: write `[X](../../<subdir>/<X>)`.
  - No trailing slash after the target name. Never link to `_index.md` directly.
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
- The only allowed agent workflow for class docs is to read source and signatures, then handwrite source-backed product prose. Agents/subagents must not generate class docs, inject signatures into page bodies, or use a write tool/generator to fill `content/**`; signatures are evidence only, never body prose.
- GitHub Actions deploys the Zola `public/` directory to GitHub Pages on push to `main`.

## H0 HANDWRITTEN-ONLY POLICY
- Product prose under `content/**` is handwritten and source-backed; do not use signature-to-prose, stub, placeholder, or bulk body-rewrite tools as a product path.
- Read `tools/RETIRED_BODY_GENERATORS.md` and the applicable versioned contract before authoring documentation: `content/v1.3.15/en/architecture/doc-contract.md` or `content/v1.3.15/zh/architecture/doc-contract.md`, and likewise the matching `content/v1.4.5/en/architecture/doc-contract.md` or `content/v1.4.5/zh/architecture/doc-contract.md` for v1.4.5 work.
- Retired writers must fail closed unless `BANNERLORD_ALLOW_RETIRED_BODY_GEN=1` is explicitly set for local archaeology. That override is forbidden in product builds, CI, and commits touching `content/**`.
- Use inventory, coverage, link, quality, navigation, and cross-version tools only for reports or structural data; they must not invent page prose.
