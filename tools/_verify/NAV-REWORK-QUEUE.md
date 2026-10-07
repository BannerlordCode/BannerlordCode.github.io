# NAV-REWORK-QUEUE — Dropped Nav Items

Audit of the navigation rework, diff `92df55b69904a402bca09aa573d8df6ac88a089e..cc39aaf81195b9fa61f2c9dcaa90bc49200c126a`
over the 5 nav-bearing templates (`templates/base.html`, `templates/macros/page-navigation.html`,
`templates/macros/sidebar.html`, `templates/partials/topnav.html`, `templates/section.html`).
Raw diff: `tools/_verify/.nav-rework-diff.txt`.

The rework replaced the desktop top nav with a mobile-only bar, moved version/language
switching into the sidebar foot, and removed the prev/next sibling scan for build
performance. **15 nav items/behaviors were dropped**; only 2 of them have a like-for-like
replacement. Everything below is a queue entry: decide per item whether to restore,
replace, or accept the loss.

## Dropped nav items

| # | Label | Lived where (file / macro or template) | User-facing consequence |
|---|-------|----------------------------------------|--------------------------|
| 1 | 首页 / Home (menu link) | `templates/partials/topnav.html` — `.menu` first `<a>`, label from `nav.routes['/'].label[lang]` | The explicit Home text link is gone from the top bar. Home is still reachable via the brand link (old brand and new `mobile-brand` both point at `get_url(path='@/_index.md')`), so impact is low — but the menu-level affordance is gone. |
| 2 | 指南 / Guide (dropdown) | `templates/partials/topnav.html` — `.dropdown` "指南 Guide", one link per version×lang to `/{version}/{lang}/guide/` | No one-click jump from any page to the Guide section of any version/language. Users must open the sidebar, locate the Guide group, and expand it. |
| 3 | API (dropdown) | `templates/partials/topnav.html` — `.dropdown` "API", links to `/{version}/{lang}/api/` | Same loss for the API Reference section — previously the most-used cross-version jump. |
| 4 | 架构 / Architecture (dropdown) | `templates/partials/topnav.html` — `.dropdown` "架构 Architecture", links to `/{version}/{lang}/architecture/` | Same loss for the Architecture section. |
| 5 | 原生 / Native (dropdown) | `templates/partials/topnav.html` — `.dropdown` "原生 Native", links to `/{version}/{lang}/native/` | Same loss for the Native docs section. |
| 6 | {version} 原生 / {version} Native Source (sub-links) | `templates/partials/topnav.html` — inside the Native dropdown, links to `/{version}/{lang}/native-1.3.15-src/` (only v1.3.15 and v1.4.5 have this child) | The dedicated Native Source tree is no longer linked from the top bar. It still exists in the sidebar tree (it is a child of the version root in `navigation.json`), so it is reachable but noticeably less discoverable. |
| 7 | XML Reference (dropdown) | `templates/partials/topnav.html` — `.dropdown` "XML Reference", links to `/{version}/{lang}/xml-reference/` | Same loss for the XML Reference section. |
| 8 | 版本 / Version (dropdown) | `templates/partials/topnav.html` — `.dropdown` "版本 Version", links to version roots `/{version}/{lang}/` **with `relkey_map.json` translation following** (`alt_map[current_relkey]` → `target_rel[version][lang_code]`) | The quick "same page, another version" switcher is gone from the top bar. The new sidebar-foot version switcher (`switch_href` macro) only navigates to version/language roots (with a language fallback) and does **not** consult `relkey_map.json`, so same-page cross-version switching is lost, not just moved. |
| 9 | 语言 / Language (dropdown) | `templates/partials/topnav.html` — `.dropdown` "语言 Language", per-page links from `item.translations` | Per-page "view this exact page in the other language" links are gone. The sidebar-foot language switcher works at version-root granularity (and defaults to `v1.3.15` when not inside a version), so it cannot land on the current page's translation. |
| 10 | Brand logo image | `templates/partials/topnav.html` — `.brand` `<img src="{{ config.extra.logo }}">` | The logo no longer renders in the top bar. (The sidebar header in `templates/partials/sidebar.html` does render the logo, so it still appears on the page — just not in the bar.) Low impact. |
| 11 | ← {previous sibling title} (rel=prev) | `templates/macros/page-navigation.html` — `render` macro, `.page-navigation-siblings` div; sibling scan over `parent_section.pages` / `parent_section.subsections` | Leaf pages no longer offer "previous page" linear navigation through siblings (e.g., stepping through API classes in document order). Users must use the sidebar tree. Dropped deliberately: the new file header states the sibling scan is quadratic on the large API sections and pushed a full build past GitHub's 6-hour limit. |
| 12 | {next sibling title} → (rel=next) | `templates/macros/page-navigation.html` — same `.page-navigation-siblings` div | Same loss for forward linear navigation. |
| 13 | 已是第一项 / First item, 已是最后一项 / Last item (disabled placeholders) | `templates/macros/page-navigation.html` — same `.page-navigation-siblings` div | Minor: the end-of-list affordance disappears together with the block. |
| 14 | 父级 / Parent (on section pages) | `templates/section.html` — line 24 called `page_navigation::render(current_url=section.path, lang=lang)`; the new `section.html` has **no such call** | Section index pages (e.g., `/v1.3.0/en/api/`) no longer render the parent link at the bottom. Only leaf pages (`templates/page.html` line 31) keep parent + related. The macro's section-path fallback (`section.ancestors | last`) was also removed from `page-navigation.html`, so restoring this means restoring the section branch of the macro too. |
| 15 | 相关入口 / Related (on section pages) | `templates/section.html` — same dropped call; rendered children of the parent route from `data/navigation.json` | Section pages lose the "Related" entry links at the bottom. |

## Dropped behaviors (not items, but nav-affecting)

| # | Behavior | Lived where | User-facing consequence |
|---|----------|-------------|--------------------------|
| 16 | Group default-open from `navigation.json` `collapsed` flag | `templates/macros/sidebar.html` — old: `<details class="group" {% if group_active or not group.collapsed %}open{% endif %}>`; new: `<details class="group"{% if group_active %} open{% endif %}>` | Groups marked `collapsed: false` in `navigation.json` (start, guide, architecture, api, cross-version) no longer render open by default. Only the group containing the current page opens; every other group starts collapsed and must be clicked. This partially reverses the sidebar's default-expanded design. |
| 17 | "Each URL emitted once" invariant (`emitted_routes`) | `templates/macros/sidebar.html` — old `render_nav` kept a global `emitted_routes` list so a route appearing under multiple parents rendered only at the first; new `link0`/`link1`/`link2` dedup only within each parent's kid list | The same route can now appear multiple times in the sidebar under different branches (duplicate entries), and the documented once-only guarantee in the old file header is gone. |

## Replacements that already exist (do not re-queue)

- **Version / language switching** → sidebar-foot switchers (`switch_href` macro in `macros/sidebar.html`, rendered by `render_nav`). Root-granularity only; no `relkey_map.json` following (see #8, #9).
- **Mobile navigation** → hamburger toggle + backdrop (`nav-toggle` checkbox in `base.html`, `mobile-bar` in `partials/topnav.html`).
- **Sidebar brand + search box** → `templates/partials/sidebar.html` `sidebar-head` (addition in this rework).
- **LLM directory link** → sidebar-foot `llm-link` (addition).
- **Active-state highlighting** → moved from inline script in `base.html` to `shell.js` (behavior preserved, location changed).

## Suggested queue order

1. #14 + #15 (section-page parent/related) — restores a whole page class; needs the section branch back in `page-navigation.html`.
2. #11 + #12 (prev/next siblings) — only if a non-quadratic implementation exists (e.g., precomputed prev/next in `navigation.json` at build time); otherwise accept.
3. #8 + #9 (translation-following switchers) — extend `switch_href` with `relkey_map.json` and per-page relkeys.
4. #2–#7 (top-nav section dropdowns) — decide whether the sidebar tree covers the discoverability loss; if not, restore a desktop bar or a sidebar quick-links block.
5. #16, #17 — one-line template fixes if the old behavior is wanted.
