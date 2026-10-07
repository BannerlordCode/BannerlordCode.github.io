# Merge Conflict Analysis: 6 Files

**Base:** `7187151b70` — docs: batch push uncommitted markdown (v1.3.15 zh api core-extra+engine, 16 files)
**Ours:** `92df55b699` — docs(gates): pin the measured scope of the two baseline-clearing commits
**Theirs:** `cc39aaf811` — 加快全站渲染，避免 GitHub 构建超过 6 小时上限。

---

## 1. `.github/workflows/docs.yml`

### Conflict summary

| Side | Change vs base |
|------|---------------|
| **Ours** | +9 lines: inserts 5 CI gate steps before "Audit internal links" and adds 4 more after it |
| **Theirs** | +6/−24: removes 5 CI gate steps, adds "Publish relkey map" and "Generate llm.txt" after build |

### Conflict hunk 1 (lines 19–48 of merge-tree)

**Base** has these 5 steps that **theirs deletes**:
```
- Run tool regression tests
- Check canonical inventory evidence
- Check handwritten coverage evidence
- Check R1 coverage evidence
- Audit documentation quality
```

**Ours keeps all 5** and adds (after "Audit internal links"):
```
- Check link resolvability (route-relative, with teeth)  → node tools/_check_links_exist.mjs --selftest
- Check every internal link resolves to a real page      → node tools/_check_links_exist.mjs
- Check section-tree freshness                           → node tools/generate-section-tree.mjs --check
- Check page-navigation freshness                        → node tools/generate-page-navigation.mjs --check
- Audit navigation invariants                            → node tools/audit-navigation.mjs
- Check for orphan pages                                → node tools/_v146_orphan_check.mjs
```

**Theirs** adds (after "Build Zola site"):
```
- Publish relkey map    → cp data/relkey_map.json public/relkey_map.json
- Generate llm.txt      → node tools/gen-llm-txt.mjs
```

### Conflict hunk 2 (lines 55–41 of merge-tree)

The `<<<<<<< .our` / `=======` / `>>>>>>> .their` markers wrap the "Check link resolvability" step. Ours includes it; theirs has nothing in that position.

### Navigation-related items in OURS but ABSENT from THEIRS

| # | Item | Location (OURS) |
|---|------|-----------------|
| 1 | `npm run test:tools` — tool regression tests | step before "Audit internal links" |
| 2 | `node tools/generate-inventory.mjs --check --require-complete` — canonical inventory evidence | step before "Audit internal links" |
| 3 | `node tools/handwritten-coverage.mjs --check --require-complete` — handwritten coverage evidence | step before "Audit internal links" |
| 4 | `node tools/r1-coverage-report.mjs --version 1.3.15 --lang zh --out … --check --require-complete` — R1 coverage evidence | step before "Audit internal links" |
| 5 | `node tools/audit-doc-quality.mjs` — documentation quality audit | step before "Audit internal links" |
| 6 | `node tools/_check_links_exist.mjs --selftest` — link resolvability selftest | step after "Audit internal links" |
| 7 | `node tools/_check_links_exist.mjs` — every internal link resolves | step after "Audit internal links" |
| 8 | `node tools/generate-section-tree.mjs --check` — section-tree freshness | step after "Audit internal links" |
| 9 | `node tools/generate-page-navigation.mjs --check` — page-navigation freshness | step after "Audit internal links" |
| 10 | `node tools/audit-navigation.mjs` — navigation invariants audit | step after "Audit internal links" |
| 11 | `node tools/_v146_orphan_check.mjs` — orphan page check | step after "Audit internal links" |

### Navigation-related items in THEIRS but ABSENT from OURS

| # | Item | Location (THEIRS) |
|---|------|-------------------|
| 1 | `cp data/relkey_map.json public/relkey_map.json` — publish relkey map | step after "Build Zola site" |
| 2 | `node tools/gen-llm-txt.mjs` — generate llm.txt | step after "Build Zola site" |

### Merge recommendation

**Take ours for the CI gate steps, take theirs for the build-output steps.** These are non-overlapping: ours adds quality gates before/after "Audit internal links"; theirs adds artifact-generation after "Build Zola site". The only true overlap is the 5 base steps that theirs deletes — ours should win because those gates are the entire point of the "docs(gates)" commit. Final merged step order:

1. Checkout
2. Install Zola
3. Run tool regression tests *(ours)*
4. Check canonical inventory evidence *(ours)*
5. Check handwritten coverage evidence *(ours)*
6. Check R1 coverage evidence *(ours)*
7. Audit documentation quality *(ours)*
8. Audit internal links *(base)*
9. Check link resolvability — selftest *(ours)*
10. Check every internal link resolves *(ours)*
11. Check section-tree freshness *(ours)*
12. Check page-navigation freshness *(ours)*
13. Audit navigation invariants *(ours)*
14. Check for orphan pages *(ours)*
15. Build Zola site *(base)*
16. Publish relkey map *(theirs)*
17. Generate llm.txt *(theirs)*
18. Upload build artifact *(base)*

---

## 2. `templates/base.html`

### Conflict summary

| Side | Change vs base |
|------|---------------|
| **Ours** | +6 lines: adds `{% import "macros/sidebar.html" as sidebar %}` at top |
| **Theirs** | +79/−143: complete rewrite — new `<html lang="{{ shell_lang }}">`, shell.css link, nav-toggle checkbox, topnav include, sidebar include, shell.js script, copy-markdown button JS |

### Conflict hunk (lines 1–3 and 147–148 of merge-tree)

The entire file body is conflicted. Ours keeps the original structure (inline `<style>`, `{% include "partials/topnav.html" %}`, `<div class="layout">` with sidebar + main). Theirs replaces everything with the new shell architecture.

### Navigation-related items in OURS but ABSENT from THEIRS

| # | Item | Location (OURS) |
|---|------|-----------------|
| 1 | `{% import "macros/sidebar.html" as sidebar %}` — sidebar macro import | line 1 |
| 2 | Inline `<style>` block with all CSS (top-nav, sidebar, breadcrumb, page-navigation, layout) | lines 7–146 |
| 3 | `{% include "partials/topnav.html" %}` — top navigation bar | line 149 |
| 4 | `<div class="layout">` — flex layout wrapper | line 150 |
| 5 | `<aside class="sidebar">` with `sidebar::render_nav(current_url=current_url, lang=lang)` | lines 151–153 |
| 6 | `<main class="main">` with `{% block content %}` | lines 154–156 |
| 7 | Active-link highlighting JS (`.top-nav a, .sidebar a` → `.active` class + `details.open = true`) | lines 158–168 |
| 8 | `.top-nav` CSS (fixed top bar, brand, menu, dropdown) | lines 22–56 |
| 9 | `.sidebar` CSS (fixed left, 260px, border-right, overflow-y) | lines 57–72 |
| 10 | `.layout` CSS (flex, margin-top: nav-height) | line 73 |
| 11 | `.main` CSS (margin-left: sidebar-width, max-width: 900px) | line 100 |
| 12 | `@media (max-width: 768px)` responsive hide-sidebar | lines 103–106 |

### Navigation-related items in THEIRS but ABSENT from OURS

| # | Item | Location (THEIRS) |
|---|------|-------------------|
| 1 | `shell_lang` global variable (derived from URL path) | lines 4–9 |
| 2 | `<html lang="{{ shell_lang }}">` — language-aware html tag | line 11 |
| 3 | `<link rel="stylesheet" href="{{ get_url(path='shell.css', cachebust=true) }}">` | line 16 |
| 4 | `<input id="nav-toggle" class="nav-check" type="checkbox">` — mobile nav toggle | line 19 |
| 5 | `<div class="shell">` wrapper | line 22 |
| 6 | `{% include "partials/sidebar.html" %}` — new sidebar partial | line 23 |
| 7 | `<label for="nav-toggle" class="nav-backdrop">` — mobile backdrop | line 24 |
| 8 | Copy-markdown button JS (decodeMarkdown, stripFrontmatter, clipboard API) | lines 27–83 |
| 9 | `<script src="{{ get_url(path='shell.js', cachebust=true) }}">` | line 85 |

### Merge recommendation

**Take theirs.** The ours version is a minimal 6-line addition (the sidebar import) that is already subsumed by theirs' complete rewrite. Theirs' `{% include "partials/sidebar.html" %}` replaces ours' `{{ sidebar::render_nav(...) }}` call. The inline CSS in ours is migrated to `static/shell.css` in theirs. Taking ours would leave dead CSS and a duplicate sidebar include.

---

## 3. `templates/macros/page-navigation.html`

### Conflict summary

| Side | Change vs base |
|------|---------------|
| **Ours** | +47/−18: adds sibling scanning (previous/next), expands parent resolution to handle both `page` and `section`, adds `related_parent` guard |
| **Theirs** | +11/−29: simplifies to parent + related only, removes sibling scanning entirely (quadratic build cost) |

### Conflict hunk 1 (lines 1–3 of merge-tree)

Ours keeps the full comment block explaining parent resolution. Theirs replaces with a shorter comment about quadratic scanning.

### Conflict hunk 2 (lines 50–51 of merge-tree)

Ours adds `related_parent` from `navigation.routes[parent_section.path]`. Theirs adds the same but with a `route_key` fallback (`"/" ~ parent_section.path`).

### Conflict hunk 3 (lines 57–77 of merge-tree)

Ours keeps the `page-navigation-siblings` div with previous/next links. Theirs removes it entirely.

### Conflict hunk 4 (lines 77–8 of merge-tree)

Ours: `{% if related_parent is defined and related_parent.children is defined and ... %}`
Theirs: `{% if related_parent and related_parent.children is defined and ... %}`

### Navigation-related items in OURS but ABSENT from THEIRS

| # | Item | Location (OURS) |
|---|------|-----------------|
| 1 | `previous_sibling` / `next_sibling` scanning logic | lines 22–42 |
| 2 | `page-navigation-siblings` div with `← prev` / `next →` links | lines 66–76 |
| 3 | `page-navigation-disabled` span for first/last item | lines 69, 74 |
| 4 | `rel="prev"` / `rel="next"` semantic attributes | lines 67, 72 |
| 5 | Full parent resolution comment block (leaf/section/site-root cases) | lines 1–10 |
| 6 | `resolved_parent` variable (handles both `page.ancestors` and `section.ancestors`) | lines 13–18 |

### Navigation-related items in THEIRS but ABSENT from OURS

| # | Item | Location (THEIRS) |
|---|------|-------------------|
| 1 | `route_key` fallback: `"/" ~ parent_section.path` when `parent_section.path` not in routes | lines 13–15 |
| 2 | `related_parent = false` initialization (vs ours' `is defined` guard) | line 17 |

### Merge recommendation

**Take theirs for the sibling removal, take ours for the `is defined` guard.** The sibling scanning is the quadratic build cost that theirs was created to eliminate — taking ours would reintroduce the 6-hour build timeout. However, theirs' `related_parent = false` initialization is slightly less robust than ours' `is defined` pattern (if `related_parent` is not set, ours' guard prevents an undefined-variable error). Final: take theirs' structure but change `{% if related_parent and ... %}` to `{% if related_parent is defined and related_parent and ... %}`.

---

## 4. `templates/macros/sidebar.html`

### Conflict summary

| Side | Change vs base |
|------|---------------|
| **Ours** | +68/−44: adds `render_branch` recursive macro with `MAX_DEPTH=4`, `emitted_routes` deduplication, "目录/Index" link per group |
| **Theirs** | +233/−117: adds `switch_href`, `item_label`, `link0`/`link1`/`link2` macros, `sidebar-scroll`/`sidebar-foot` wrappers, version/language switchers, LLM link |

### Conflict hunk 1 (lines 1–3 of merge-tree)

Ours keeps the original comment block. Theirs replaces with a new comment about version/language switchers.

### Conflict hunk 2 (lines 70–71 of merge-tree)

Ours adds `render_nav` opening + `nav`/`tree` load. Theirs adds `switch_href`, `item_label`, `link2` macros.

### Conflict hunk 3 (lines 146–284 of merge-tree)

Ours: `render_branch` macro body + `render_nav` with `mapped_url` matching + group rendering with `render_branch` calls.
Theirs: `link1`, `link0` macros + `render_nav` with `page_url` normalization + `shell_lang`/`current_lang`/`in_version` logic + `sidebar-scroll` + group rendering with `link0` calls.

### Conflict hunk 4 (lines 284–71 of merge-tree)

Ours: group `<details>` with `group_active` check + `render_branch` calls.
Theirs: group `<details>` with `group_active` check + `link0` calls + `sidebar-foot` with version/language switchers + LLM link.

### Navigation-related items in OURS but ABSENT from THEIRS

| # | Item | Location (OURS) |
|---|------|-----------------|
| 1 | `render_branch` macro (recursive tree renderer) | lines 8–58 |
| 2 | `MAX_DEPTH = 4` global | line 7 |
| 3 | `emitted_routes` deduplication global | line 7 |
| 4 | "目录/Index" link inside each group | line 30 |
| 5 | `curated_children` / `section_children` split logic | lines 15–26 |
| 6 | `has_children` flag | line 27 |
| 7 | `node.collapsed` check for `<details open>` | line 29 |
| 8 | `mapped_url is starting_with(route_key)` check for auto-expand | line 29 |
| 9 | `unique_group_routes` deduplication per group | lines 96–101 |
| 10 | `group_active` via `mapped_url == route_key` | lines 104–106 |
| 11 | `not group.collapsed` check for group `<details open>` | line 108 |
| 12 | Site Navigation fallback group ("站点导航/Site Navigation") | lines 131–148 |
| 13 | Version×language matrix in fallback (all versions × all languages) | lines 137–143 |
| 14 | `render_branch` called from `render_nav` for each group route | line 114 |

### Navigation-related items in THEIRS but ABSENT from OURS

| # | Item | Location (THEIRS) |
|---|------|-------------------|
| 1 | `switch_href` macro (version/language switcher href resolution) | lines 4–14 |
| 2 | `item_label` macro (label from nav.routes or tree.byRoute, with " / " split) | lines 16–30 |
| 3 | `link2` macro (depth-2 tree renderer) | lines 32–58 |
| 4 | `link1` macro (depth-1 tree renderer) | lines 60–86 |
| 5 | `link0` macro (depth-0 tree renderer) | lines 88–114 |
| 6 | `sidebar-scroll` wrapper div | line 143 |
| 7 | `sidebar-foot` wrapper div | line 284 |
| 8 | Version switcher `<details class="switcher">` | lines 291–301 |
| 9 | Language switcher `<details class="switcher">` | lines 302–312 |
| 10 | LLM link (`/llm.txt`) | line 313 |
| 11 | `shell_lang` global (from URL path) | lines 127–130 |
| 12 | `current_lang` global | lines 131–134 |
| 13 | `in_version` flag | lines 135–138 |
| 14 | `page_url` normalization (ensure trailing slash) | lines 121–126 |
| 15 | `data-switch-version` / `data-switch-lang` attributes on version links | lines 263, 295 |
| 16 | `aria-current="true"` on current version/language | lines 296, 308 |
| 17 | `active` class on leaf links | lines 36, 64, 92 |
| 18 | `open` attribute on `<details class="branch">` when `current_url is starting_with(key)` | lines 35, 63, 91 |
| 19 | Non-version page fallback: version list (one per version, not version×lang) | lines 261–265 |
| 20 | `switch_href` fallback to first available language | lines 8–12 |

### Merge recommendation

**Take theirs.** Theirs is a strict superset: it replaces ours' `render_branch` with the `link0`/`link1`/`link2` chain (same recursive depth, better label handling via `item_label`), and adds the version/language switchers that are the entire point of the docs-shell project. Ours' `emitted_routes` deduplication is handled by theirs' `kids0`/`kids1`/`kids2` `is containing` checks. Ours' "目录/Index" link is replaced by theirs' `<summary><a href="{{ key }}">` pattern. Ours' site-navigation fallback (version×language matrix) is replaced by theirs' cleaner version-only list. Taking ours would lose the switchers and reintroduce the quadratic `render_branch`.

---

## 5. `templates/partials/topnav.html`

### Conflict summary

| Side | Change vs base |
|------|---------------|
| **Ours** | +161/−160: complete rewrite — adds `relkey_map.json` loading, `current_relkey` computation, version/language-aware dropdown menus with `alt_map` cross-version link resolution |
| **Theirs** | +7/−160: complete rewrite — replaces entire top-nav with a minimal `<header class="mobile-bar">` containing only a hamburger toggle and brand link |

### Conflict hunk (lines 1–3 and 159–160 of merge-tree)

The entire file body is conflicted. Ours has the full navigation bar; theirs has the mobile bar.

### Navigation-related items in OURS but ABSENT from THEIRS

| # | Item | Location (OURS) |
|---|------|-----------------|
| 1 | `nav = load_data(path="data/navigation.json")` | line 1 |
| 2 | `alt_map = load_data(path="data/relkey_map.json")` | line 2 |
| 3 | `current_url` computation from `page.path` / `section.path` | line 3 |
| 4 | `current_version` extraction from URL path parts | lines 4–7 |
| 5 | `current_lang` extraction from URL path parts | lines 8–11 |
| 6 | `version_lang_prefix` computation | line 12 |
| 7 | `current_relkey` computation (strip prefix, trim) | lines 13–17 |
| 8 | `item = page | default(value=section)` | line 18 |
| 9 | `<nav class="top-nav">` | line 20 |
| 10 | Brand link with logo (`config.extra.logo`) | lines 21–26 |
| 11 | `<div class="menu" role="menubar">` | line 27 |
| 12 | Home link (`nav.routes['/'].label`) | lines 28–31 |
| 13 | **指南 Guide** dropdown | lines 33–47 |
| 14 | **API** dropdown | lines 49–63 |
| 15 | **架构 Architecture** dropdown | lines 65–79 |
| 16 | **原生 Native** dropdown (with Native Source sub-item) | lines 81–103 |
| 17 | **XML Reference** dropdown | lines 105–119 |
| 18 | **版本 Version** dropdown (with `alt_map` cross-version resolution) | lines 121–141 |
| 19 | **语言 Language** dropdown (from `item.translations`) | lines 143–151 |
| 20 | `active` class on current page link | throughout |
| 21 | `details.dropdown` / `summary` / `dropdown-menu` structure | throughout |
| 22 | `get_url(path='@/' ~ version ~ '/' ~ lang_code ~ '/…')` permalinks | throughout |
| 23 | `alt_map[current_relkey][version][lang_code]` cross-version link resolution | lines 127–131 |

### Navigation-related items in THEIRS but ABSENT from OURS

| # | Item | Location (THEIRS) |
|---|------|-------------------|
| 1 | `<header class="mobile-bar">` | line 1 |
| 2 | `<label for="nav-toggle" class="nav-toggle">` — hamburger button | lines 2–6 |
| 3 | `<span class="nav-toggle-bars">` — hamburger icon | line 3 |
| 4 | `<span class="sr-only">` — screen-reader label | line 4 |
| 5 | `<a class="mobile-brand">` — brand link | line 7 |

### Merge recommendation

**Take theirs.** The ours top-nav is the old architecture that theirs' docs-shell project explicitly removes (see `specs/docs-shell/requirements.md` requirement 1.2: "The 文档站 shall 不再在顶栏为指南、API、架构、原生、XML 各提供一份「版本 × 语言」下拉"). Theirs' mobile-bar is the replacement. Taking ours would reintroduce the top-nav that the entire docs-shell redesign eliminates.

---

## 6. `templates/section.html`

### Conflict summary

| Side | Change vs base |
|------|---------------|
| **Ours** | +2 lines: adds `{% import "macros/page-navigation.html" as page_navigation %}` and `{{ page_navigation::render(current_url=section.path, lang=lang) }}` |
| **Theirs** | +41/−23: adds `crumb_lang` global, `is_zh` flag, `md_body` load, copy-markdown button, `page-header-actions` div |

### Conflict hunk (lines 1–3 and 23–24 of merge-tree)

Ours adds the page-navigation import and render call at the end. Theirs adds the copy-markdown button and `crumb_lang` logic.

### Navigation-related items in OURS but ABSENT from THEIRS

| # | Item | Location (OURS) |
|---|------|-----------------|
| 1 | `{% import "macros/page-navigation.html" as page_navigation %}` | line 2 |
| 2 | `{{ page_navigation::render(current_url=section.path, lang=lang) }}` | line 27 |

### Navigation-related items in THEIRS but ABSENT from OURS

| # | Item | Location (THEIRS) |
|---|------|-------------------|
| 1 | `crumb_lang` global (from URL path) | lines 7–11 |
| 2 | `is_zh` flag | line 12 |
| 3 | `md_body = load_data(path="@/" ~ section.relative_path)` | line 13 |
| 4 | `<div class="page-header-actions">` wrapper | line 14 |
| 5 | Copy-markdown button (`copy-md-btn`) with base64-encoded markdown | lines 15–22 |
| 6 | `data-md-source`, `data-default-text`, `data-copied-text`, `data-failed-text`, `data-copied-text` attributes | lines 16–20 |

### Merge recommendation

**Take both.** These are non-overlapping additions: ours adds the page-navigation render at the bottom of the section; theirs adds the copy-markdown button in the page header. The only potential conflict is that both modify the `<article>` block. Final merged structure:

```html
{% extends "base.html" %}
{% import "macros/breadcrumb.html" as breadcrumb %}
{% import "macros/page-navigation.html" as page_navigation %}

{% block title %}{{ section.title | default(value=config.title) }}{% endblock %}
{% block description %}{{ section.description | default(value=config.description) }}{% endblock %}

{% block content %}
<article>
  {% set path_parts = section.path | split(pat="/") %}
  {% set url_lang = path_parts | nth(n=2) | default(value="") %}
  {% set_global crumb_lang = lang %}
  {% if url_lang == "zh" or url_lang == "en" %}
    {% set_global crumb_lang = url_lang %}
  {% endif %}
  {{ breadcrumb::render_breadcrumb(current_url=section.path, lang=crumb_lang) }}
  {% set is_zh = url_lang == "zh" %}
  {% set md_body = load_data(path="@/" ~ section.relative_path) %}
  <div class="page-header-actions">
    {% if section.title %}<h1>{{ section.title }}</h1>{% endif %}
    <button type="button" class="copy-md-btn" ...>...</button>
  </div>
  {{ section.content | safe }}
</article>
<hr>
<ul>
  {% for page in section.pages %}
    <li><a href="{{ page.permalink }}">{{ page.title }}</a></li>
  {% endfor %}
  {% for subsection_path in section.subsections %}
    {% set subsection = get_section(path=subsection_path) %}
    <li><a href="{{ subsection.permalink }}">{{ subsection.title | default(value=subsection.components | last) }}</a></li>
  {% endfor %}
</ul>
{{ page_navigation::render(current_url=section.path, lang=lang) }}
{% endblock %}
```

---

## Summary: All navigation-related items in OURS but ABSENT from THEIRS

### `.github/workflows/docs.yml` (11 items)
1. `npm run test:tools`
2. `node tools/generate-inventory.mjs --check --require-complete`
3. `node tools/handwritten-coverage.mjs --check --require-complete`
4. `node tools/r1-coverage-report.mjs --version 1.3.15 --lang zh --out … --check --require-complete`
5. `node tools/audit-doc-quality.mjs`
6. `node tools/_check_links_exist.mjs --selftest`
7. `node tools/_check_links_exist.mjs`
8. `node tools/generate-section-tree.mjs --check`
9. `node tools/generate-page-navigation.mjs --check`
10. `node tools/audit-navigation.mjs`
11. `node tools/_v146_orphan_check.mjs`

### `templates/base.html` (12 items)
1. `{% import "macros/sidebar.html" as sidebar %}`
2. Inline `<style>` block (all CSS)
3. `{% include "partials/topnav.html" %}`
4. `<div class="layout">`
5. `<aside class="sidebar">` with `sidebar::render_nav(...)`
6. `<main class="main">` with `{% block content %}`
7. Active-link highlighting JS
8. `.top-nav` CSS
9. `.sidebar` CSS
10. `.layout` CSS
11. `.main` CSS
12. `@media (max-width: 768px)` responsive

### `templates/macros/page-navigation.html` (6 items)
1. `previous_sibling` / `next_sibling` scanning logic
2. `page-navigation-siblings` div
3. `page-navigation-disabled` span
4. `rel="prev"` / `rel="next"` attributes
5. Full parent resolution comment block
6. `resolved_parent` variable

### `templates/macros/sidebar.html` (14 items)
1. `render_branch` macro
2. `MAX_DEPTH = 4` global
3. `emitted_routes` deduplication global
4. "目录/Index" link per group
5. `curated_children` / `section_children` split
6. `has_children` flag
7. `node.collapsed` check
8. `mapped_url is starting_with(route_key)` auto-expand
9. `unique_group_routes` deduplication
10. `group_active` via `mapped_url == route_key`
11. `not group.collapsed` check
12. Site Navigation fallback group
13. Version×language matrix in fallback
14. `render_branch` called from `render_nav`

### `templates/partials/topnav.html` (23 items)
1. `nav = load_data(path="data/navigation.json")`
2. `alt_map = load_data(path="data/relkey_map.json")`
3. `current_url` computation
4. `current_version` extraction
5. `current_lang` extraction
6. `version_lang_prefix` computation
7. `current_relkey` computation
8. `item = page | default(value=section)`
9. `<nav class="top-nav">`
10. Brand link with logo
11. `<div class="menu" role="menubar">`
12. Home link
13. 指南 Guide dropdown
14. API dropdown
15. 架构 Architecture dropdown
16. 原生 Native dropdown (with Native Source)
17. XML Reference dropdown
18. 版本 Version dropdown (with alt_map)
19. 语言 Language dropdown
20. `active` class on current page
21. `details.dropdown` / `summary` / `dropdown-menu` structure
22. `get_url(path='@/…')` permalinks
23. `alt_map[current_relkey][version][lang_code]` cross-version resolution

### `templates/section.html` (2 items)
1. `{% import "macros/page-navigation.html" as page_navigation %}`
2. `{{ page_navigation::render(current_url=section.path, lang=lang) }}`

**Total: 68 navigation-related items in OURS but ABSENT from THEIRS.**
