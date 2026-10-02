# Legacy navigation — measurement + patch spec (W4)

Status: **spec only, nothing applied.** No file outside this one was created or modified.
Scope measured: `content/<v>/<lang>/{api,architecture,guide}/**` for v1.3.0, v1.3.15, v1.4.5 × zh, en.
All numbers below come from a command that is pasted next to it. Anything I could not run is in §7.

---

## §1 Findings

### 1.1 Markdown-layer link audit (the existing link gate)

Command (one per row, run from repo root `BannerlordCode.github.io`):

```bash
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/<v>/<lang>/api node tools/audit-links.mjs
```

| root | FILES | TOTAL_LINKS | BROKEN_LINKS | RESOLVE_NEITHER | FILES_WITH_BROKEN | RESOLVE_URL_ONLY |
|---|---|---|---|---|---|---|
| v1.3.0/zh/api | 5285 | 17424 | **0** | 0 | 0 | 67 |
| v1.3.0/en/api | 5285 | 17424 | **0** | 0 | 0 | 67 |
| v1.3.15/zh/api | 5633 | 22963 | **0** | 0 | 0 | 6508 |
| v1.3.15/en/api | 5630 | 19531 | **0** | 0 | 0 | 3231 |
| v1.4.5/zh/api | 9421 | 31647 | **0** | 0 | 0 | 10807 |
| v1.4.5/en/api | 7179 | 17517 | **0** | 0 | 0 | 4251 |

Read: the markdown layer is clean. `RESOLVE_URL_ONLY` is the `../`-style (URL-correct, file-dir-incorrect) link count — the convention AGENTS.md mandates. **The 404s the user sees are not in markdown.**

### 1.2 Data-layer defects — these are the real 404s

> **⚠ CORRECTED 2026-10-02 during the implementation wave. The "dead content" reading below was
> wrong.** Re-verifying immediately before deleting showed the `final/` and `perks/` **content exists**;
> only the three *intermediate* `_index.md` files were missing (and were never committed —
> `git log -- content/v1.4.5/*/api/final/_index.md` is empty). The `navigation.json` entries were
> **correct**; the content was incomplete. Behind them sit **69 pages / 2.08 MB** of real family
> indexes. Deleting the routes would have made all of it unreachable. Fixed by authoring the three
> indexes (§9.3 of `tools/_evidence-legacy-20261002.md`); the gate now reports
> `NAVIGATION_ROUTES_OK dead=0`. Also note: the sub-bucket counts below are **directory counts, not
> page counts** — the real pages are one level down. Read the table as "missing index pages", not
> "missing content".

Command: resolve every `data/navigation.json` / `data/section-tree.json` route key against `content/`
(inline node script; no repo file created).

| defect | count | offending targets |
|---|---|---|
| **Sidebar `<a href>` with no content page behind it** (route key in both data files, no `_index.md`) | **3** | `/v1.4.5/en/api/final/`, `/v1.4.5/zh/api/final/`, `/v1.4.5/zh/api/perks/` — **RESOLVED**, see the correction above |
| `navigation.json` child edges → nonexistent content | 3 | same three |
| `navigation.json` parent edges → missing route | 0 | — |
| `relkey_map.json` edges (38627) → nonexistent content | **0** | — |
| topnav `get_url(...)` dropdown targets checked | 33, missing 0 | — |
| version/lang landing `content/<v>/<lang>/_index.md` missing | 0 | — |

These three routes are emitted as real anchors by the sidebar on every v1.4.5 page
(`nav.routes['/v1.4.5/zh/api/'].children` still lists `final` and `perks`).
**Clicking "final" or "perks" in the sidebar is a guaranteed 404.** The whole `final/*` subtree
(45 sub-buckets zh / 45 en) and `perks/PerkEffects/` were deleted from content and never pruned from the data files.

### 1.3 Staleness of the two data files

```bash
node tools/generate-section-tree.mjs --check
#  -> Section tree is stale or mismatched: data/section-tree.json
#     Expected 464 routes from .../content
#     exit=1
node tools/generate-page-navigation.mjs --check
#  -> Page navigation is stale or mismatched: data/page-navigation.json
#     exit=1
```

Drift detail (imported `buildSectionTree` / `buildPageNavigation` from the tools and diffed against disk):

| file | field | drift |
|---|---|---|
| section-tree.json | routes | 464 on disk / **466** expected |
| section-tree.json | routes present in content, missing from disk | **2** → `/v1.4.6/zh/api/`, `/v1.4.6/zh/api/savesystem/` |
| section-tree.json | routes on disk with no content | 0 |
| section-tree.json | entries with changed `.pages` | 1 |
| section-tree.json | entries with changed `.subsections` / `.title` | 0 / 0 |
| page-navigation.json | leafCount | 38177 on disk / **38193** expected |
| page-navigation.json | leaf pages absent from data | 16 |
| page-navigation.json | entries for nonexistent pages | 0 |
| page-navigation.json | **changed `previous`** | **11** |
| page-navigation.json | **changed `next`** | **11** |

> The 2 section-tree "missing" routes and the 16 page-navigation leaves are the **v1.4.6 tree**, which
> landed in `content/` *during* this audit. See §1.7 — re-measure before acting.

### 1.4 Back-link coverage (prose links, fenced code stripped)

Inline node script: for every leaf route, resolve every markdown link in prose
(same URL-mode resolution as `audit-links.mjs`) and test whether the parent route is among the targets.
Fences are stripped; `audit-links.mjs` does **not** strip fences, so its numbers are not comparable to these.

| defect class | v1.3.0/zh | v1.3.0/en | v1.3.15/zh | v1.3.15/en | v1.4.5/zh | v1.4.5/en |
|---|---|---|---|---|---|---|
| leaves (api+arch+guide) | 5190 | 5190 | 5623 | 5616 | 9364 | 7129 |
| **D1** leaves with NO link back to their own bucket `_index.md` | 25 | 25 | 79 | 82 | 110 | 57 |
| …of which api | 15 | 15 | 68 | 64 | 94 | 53 |
| **D2** leaves WITH a `参见/Dependencies/See-Also` section | 5185 (99.9%) | 5185 | 5467 (97.2%) | 5527 (98.4%) | 9038 (96.5%) | 6905 (96.9%) |
| **D2** leaves WITHOUT any such section | 5 | 5 | 156 | 89 | 326 | 224 |
| **D2** deps-section links ONLY downward (no parent/sibling target) | 20 (0.4%) | 20 | 11 (0.2%) | 12 | 31 (0.3%) | 21 |
| **D5** true dead ends (no up-link AND no sibling link) | 25 (0.48%) | 25 | 79 (1.40%) | 82 (1.46%) | 110 (1.17%) | 57 (0.80%) |
| **D3a** `_index.md` section roots linking no child leaf | 93 | 93 | 23 | 23 | 72 | 47 |
| **D3b** `_index.md` section roots with no link to the version landing | 0 | 0 | **23** | **23** | **72** | **48** |
| **D4** leaf-bearing dirs with no `_index.md` at all | 0 | 0 | 0 | 0 | 0 | 0 |
| **D4** leaves not listed in their bucket `_index.md` body | 0/5190 | 0/5190 | 14/5623 (0.2%) | 19/5616 (0.3%) | **3737/9364 (39.9%)** | **1438/7129 (20.2%)** |
| **D6** api leaves with 0 inlinks from anywhere on the site | 0 | 0 | 2 | 4 | **3269** | **1238** |
| **D6b** api leaves with 0 inlinks from within the same v/lang scope | 0 | 0 | 2 | 4 | 3276 | 1239 |

Worst D4 buckets (leaves listed / leaves present):
`v1.4.5/zh api/campaign 50/1361`, `api/campaign-ext 2826/3666`, `api/core-extra 527/536`,
`v1.4.5/en api/campaign 11/1360`, `api/mission 0/75`, `api/campaign-ext 1631/1641`.

D6 is computed by me over the **whole** `content/` tree (all 38652 routes, both languages, all scopes),
not from `tools/_rank_stub_indegree.mjs` (which is hardcoded to v1.4.5/zh).
D6b is a subset: it counts only inlinks coming from inside the same `v/lang` and only from
`api|architecture|guide` — a page linked only from `native/` or from the other language shows as D6b-only.

### 1.5 Version landing pages

Inline node script reading `content/<v>/<lang>/_index.md` directly.

| landing | existing top-level bucket `_index.md` | linked from landing body | missing |
|---|---|---|---|
| v1.3.0/zh | 5 | 5 | — |
| v1.3.0/en | 5 | 5 | — |
| v1.3.15/zh | 6 | 6 | — |
| v1.3.15/en | 6 | 6 | — |
| v1.4.5/zh | 6 | 6 | — |
| **v1.4.5/en** | 5 | **2** | **`guide`, `native`, `xml-reference`** |

`content/_index.md` (site home) resolves to: `/v1.3.15/`, `/v1.4.5/`, `/v1.3.0/`, `/versions/`,
`/v1.3.15/zh/architecture/version-delta/`. It does **not** link `/v1.4.6/`.

### 1.6 Rendered-site evidence (the last real build in `public/`)

`public/` holds a build from **Aug 22 05:36** — I read the HTML instead of re-deriving template behaviour.

```bash
grep -c 'class="page-navigation"' public/v1.3.0/en/api/core/index.html
```

| built page | breadcrumb | page-navigation (Parent/prev/next/Related) |
|---|---|---|
| `public/v1.3.0/en/api/core/Module/index.html` (leaf) | yes, 6 levels | **yes** — `Parent → /v1.3.0/en/api/core/`, `prev → MBSubModuleBase`, no Related |
| `public/v1.3.15/zh/api/save-system/SaveManager/index.html` (leaf) | yes | **yes** — Parent + prev + next, no Related |
| `public/v1.3.0/en/api/core/index.html` (**bucket `_index`**) | yes | **NO** |
| `public/v1.3.0/en/index.html` (**version landing**) | yes | **NO** |
| `public/v1.4.5/zh/api/campaign-ext/index.html` (bucket) | yes | **NO** |

**This is the "跳过去回不来" defect, proven from the built HTML:** every section page
(`_index.md` — every bucket index, every version landing) renders breadcrumb + child list and
**no Parent, no prev/next, no Related**. `Related` is missing on both sampled leaves too.

Sidebar hrefs on that same leaf page — the complete set:

```
/v1.3.0/en/ /v1.3.0/en/guide/ /v1.3.0/en/architecture/ /v1.3.0/en/api/
/v1.3.0/en/api/{campaign-ext,campaign,core-extra,core,engine,gameplay,gui,localization,mission-ext,mission,system,viewmodel}/
/v1.3.0/en/native/ /v1.3.0/en/xml-reference/ /versions/
```

19 links, **zero class pages**. Simulating `templates/macros/sidebar.html` for each version/lang
confirms the whole sidebar is 19–27 hrefs:

| current_url | unique sidebar hrefs | dead hrefs |
|---|---|---|
| /v1.3.0/{zh,en}/api/ | 19 | 0 |
| /v1.3.15/{zh,en}/api/ | 20 | 0 |
| /v1.4.5/zh/api/ | 27 | **2** (`api/final/`, `api/perks/`) |
| /v1.4.5/en/api/ | 21 | **1** (`api/final/`) |

So **~38 000 of the 38 652 content routes have no sidebar entry at any depth.** The sidebar is
group → version/lang → top section → bucket, and stops. `data/navigation.json` holds deeper routes
(195 sub-bucket routes for v1.3.0) that the macro never renders.

### 1.7 Unregistered version trees in `content/`

**⚠ This changed during the audit — re-read before acting.** At first measurement there was one
unregistered version (`v1.4.6`, 3 leaves). By the final re-measurement (§7) there are **three**,
and `content/` had grown from 38 652 to 61 908 markdown files. Final state:

| version | md files | leaves | `_index.md` | langs | `navigation.json` routes | `section-tree.json` keys | unregistered `_index` routes |
|---|---|---|---|---|---|---|---|
| v1.3.0 | 10 601 | 10 380 | 221 | zh, en | 221 | 221 | 0 |
| v1.3.15 | 11 362 | 11 279 | 83 | zh, en | 83 | 83 | 0 |
| v1.4.5 | 16 668 | 16 513 | 155 | zh, en | 158 | 158 | 0 (3 routes are stale/extra → §1.2) |
| **v1.4.6** | 9 473 | 9 388 | 85 | zh, en (+ a stray `api/en`, `api/zh`) | **0** | **0** | **85** |
| **v1.4.7** | 1 799 | 1 799 | **0** | **zh only** | **0** | **0** | 0 (no `_index.md` exists at all) |
| **v1.5.3** | 11 987 | 11 943 | 44 | zh, en | **0** | **0** | **44** |

`nav.meta.versions` = `["v1.3.15","v1.3.0","v1.4.5"]`. Nothing on the site can reach v1.4.6, v1.4.7 or
v1.5.3 — no sidebar entry, no topnav entry, no link from `content/_index.md`.

Two structural landmines in the new trees that will bite whoever registers them:
- **`v1.4.7` has no `_index.md` anywhere** — no version landing, no bucket index. Registering it as-is
  gives it no page to descend from and no Parent chain. It needs `content/v1.4.7/zh/_index.md` and
  `content/v1.4.7/zh/api/_index.md` authored first.
- **`v1.4.6` nests languages under `api/`** (`content/v1.4.6/api/en/…`, `content/v1.4.6/api/zh/…`) *in
  addition to* `content/v1.4.6/{zh,en}/api/…`. Every nav template derives the language from
  `path_parts | nth(n=2)` (`topnav.html:8`, `macros/sidebar.html:18-24`), so a route shaped
  `/v1.4.6/api/en/...` resolves `current_version = "api"` → falls through to the `v1.3.15` default
  (`topnav.html:6-8`) and shows a completely wrong sidebar. Either delete the stray `content/v1.4.6/api/`
  subtree or flatten it before registering.

### 1.8 Correction to an earlier hypothesis in this audit

The routes-count asymmetry the lead measured (`v1.3.0=220`, `v1.3.15=82`, `v1.4.5=157`) is **not** a
truncated tree. Inline node script, per version:

| version | navigation.json routes | `_index.md` files in content | unregistered `_index.md` routes |
|---|---|---|---|
| v1.3.0 | 221 | 221 | **0** |
| v1.3.15 | 83 | 83 | **0** |
| v1.4.5 | 158 | **155** | 0 (**3 routes are stale/extra** = §1.2) |
| v1.4.6 | 0 | 5 | **5** |

The counts track the depth of each version's *content* tree (v1.3.0 nests 221 sections, v1.3.15 only 83).
Both data files cover 100% of existing sections for the three registered versions. The sidebar is
"incomplete" only in the sense of §1.6 — the macro stops rendering at 2 child levels.

---

## §2 Root cause

**The Parent / Previous / Next / Related block is decided by `templates/macros/page-navigation.html`,
and it is wired into exactly one template: `templates/page.html`.**

`templates/page.html:3,12`
```tera
{% import "macros/page-navigation.html" as page_navigation %}
...
  {{ page_navigation::render(current_url=page.path, lang=lang) }}
```

`templates/section.html` — the template that renders **every `_index.md`** — never imports it:

```tera
{% extends "base.html" %}
{% import "macros/breadcrumb.html" as breadcrumb %}
{% block content %}
<article>
  {{ breadcrumb::render_breadcrumb(current_url=section.path, lang=lang) }}
  {% if section.title %}<h1>{{ section.title }}</h1>{% endif %}
  {{ section.content | safe }}
</article>
<hr>
<ul>
  {% for page in section.pages %}…{% endfor %}
  {% for subsection_path in section.subsections %}…{% endfor %}
</ul>
{% endblock %}
```

There is no `{{ page_navigation::render(...) }}` and no Parent link. Confirmed in built output (§1.6):
`public/v1.3.0/en/index.html` and `public/v1.3.0/en/api/core/index.html` contain no `page-navigation` block.

The only up-path on a section page is the breadcrumb, and **the breadcrumb has no CSS**:

```bash
grep -n "breadcrumb" templates/base.html
# (no output)
```

`base.html` styles `.top-nav`, `.sidebar`, `.layout`, `.main`, `.page-navigation*` — but never
`.breadcrumb`. The breadcrumb therefore renders as an unstyled run of inline text
(`Home → Bannerlord Modding Wiki → … → core index → Module`), visually indistinguishable from
paragraph prose. It *works*; it is just invisible as chrome, which is exactly what a user reports
as "跳过去回不来".

Two more root causes behind the sidebar being "not a tree":

**(a) The sidebar macro hard-codes a 2-level fan-out.** `templates/macros/sidebar.html`, inside the
`{%- for route_key in unique_group_routes -%}` loop, computes `curated_children` and `section_children`
and then emits *only those* — it never recurses:

```tera
{%- if has_children -%}
  <details class="group" …>
    <summary>{{ node.label[lang] }}</summary>
    <div class="group-items">
      <a href="{{ route_key | safe }}" …>{% if lang == 'zh' %}目录{% else %}Index{% endif %}</a>
      {%- for child_key in curated_children -%} … {%- endfor -%}
      {%- for child_key in section_children -%} … {%- endfor -%}
    </div>
  </details>
{%- else -%} …
```

`has_children` is computed but only ever used to choose `<details>` vs `<a>`. One level of children,
never deeper. The data is 4–5 levels deep; the render is 2.

**(b) The data files are hand-maintained and were never pruned.** §1.2's three dead routes
(`api/final/`, `api/perks/`) prove nothing regenerates `navigation.json` automatically. `grep` for a
writer:

```bash
grep -rn "writeFileSync" tools/*.mjs | grep -iE "nav|tree|relkey"
# tools/_fix_nav_edges.mjs:21   writeFileSync(NAV, …)   -> data/navigation.json
# tools/_regen_nav.mjs:44       writeFileSync(NAV, …)   -> data/navigation.json
# tools/generate-relkey-map.mjs:59
# tools/generate-section-tree.mjs:157
```

Both `navigation.json` writers are **underscore-prefixed scratch scripts**, not part of the tool
contract (`generate-section-tree.mjs` writes `section-tree.json`; `generate-page-navigation.mjs`
writes `page-navigation.json`). `git log -- data/navigation.json` shows the last real change was
`refactor(templates): switch topnav and sidebar to data-driven navigation` plus hand patches.

**(c) `data/page-navigation.json` (18 MB) is dead weight.** No template loads it:

```bash
grep -rn "load_data" templates/
# templates/macros/breadcrumb.html:2        navigation.json
# templates/macros/page-navigation.html:23  navigation.json
# templates/macros/sidebar.html:6          navigation.json
# templates/macros/sidebar.html:7          section-tree.json
# templates/partials/topnav.html:1         navigation.json
# templates/partials/topnav.html:2         relkey_map.json
```

The rendered prev/next comes from Zola's live `parent_section.pages` at build time
(`page-navigation.html:11-21`), never from the JSON. So "重跑 generate-page-navigation.mjs 会不会
覆盖人工内容" — **no**: it writes exactly one file, `data/page-navigation.json`
(`generate-page-navigation.mjs:19,202`), and touches nothing under `content/**`. It is safe to re-run;
it is also safe *not* to, because nothing reads it.

---

## §3 Patch spec

File-by-file. Each entry: **file → insert location → exact content → what it fixes → risk.**

### A. `data/navigation.json`

Real shape (do not invent): top keys `schema_version` / `meta` / `groups` / `roots` / `routes`;
464 routes; node = `{label:{zh,en}, group, collapsed, order, parent, children:[routeKey…]}`.

**A1 — `meta.versions` (add the new versions).**
At the time of writing, `content/` holds **three** unregistered version trees (§1.7): `v1.4.6`,
`v1.4.7`, `v1.5.3`. Append them in canonical-first order, newest last:
```json
"versions": ["v1.3.15", "v1.3.0", "v1.4.5", "v1.4.6", "v1.4.7", "v1.5.3"]
```
If only some of them are being published, list only those — a version in `meta.versions` with no
routes is the one hard-failure mode (see the risk note below).
Fixes: makes the version appear in the topnav "版本 / Version" and "语言 / Language" dropdown loops,
which both iterate `nav.meta.versions`.
**Risk (high, read first):** `templates/partials/topnav.html` renders the Version dropdown **unguarded**:
```tera
{%- set route_key = "/" ~ version ~ "/" ~ lang_code ~ "/" -%}
…
{{ nav.routes[route_key].label[lang] | default(value=version ~ ' ' ~ lang_code) }}
```
Adding a version to `meta.versions` **without** adding `routes["/v1.4.6/zh/"]` and `routes["/v1.4.6/en/"]`
makes `nav.routes[route_key].label` dereference an undefined value. *Inference (not run):* Tera raises on
key access against undefined, so `zola build` fails for the **whole site**. Sequence A1 **after** A2.

**A2 — `routes`: add the new version chains. Copy the real shape, do not invent keys.**
Key naming rule as it exists: `/<version>/` → `/<version>/<lang>/` → `/<version>/<lang>/<section>/`
→ `/<version>/<lang>/<api>/<bucket>/` → `/<version>/<lang>/<api>/<bucket>/<subbucket>/`.
**Leaf class pages get no route entry** — verified: `nav.routes` has 338 depth-≥5 keys and every one is a
sub-bucket (`/v1.3.0/en/api/campaign/agentorigins/` has `children: []`); there is no route for any
`Campaign.md`-style leaf. Keep it that way; the sidebar never renders leaves anyway.

**Do not hand-author 85 + 44 route entries for v1.4.6 / v1.5.3.** Regenerate the structural part with
B1 + `node tools/_regen_nav.mjs` (which builds `parent`/`children` structurally and preserves
`label`/`group`/`collapsed`/`order` for pre-existing routes, `_regen_nav.mjs:25-32`), then hand-fix
only the fields the regen cannot know:
1. `meta.versions` (A1) and `roots` (A1b) — the regen copies both **verbatim** (`_regen_nav.mjs:38,40`).
2. `group` on every new route — the regen emits `group: ex?.group ?? null` (line 28), and a `group: null`
   node under `/<v>/<lang>/` is **invisible in the sidebar** (`macros/sidebar.html:37` requires
   `node.group == group_key`). Set `group` per depth:
   `<v>/` → `"start"`; `<v>/<lang>/` → `"start"`; `<v>/<lang>/{guide,architecture,api,native,xml-reference,native-1.3.15-src}/`
   → the matching group name (`guide`/`architecture`/`api`/`native`/`xml`); everything deeper → `null`.
3. `label` for the version nodes — the regen falls back to the `_index.md` frontmatter `title`, which for
   v1.4.6/v1.5.3 lands the paths into every dropdown.
4. `order` on the new `/<v>/` nodes (existing: v1.3.0=1, v1.3.15=1, v1.4.5=2 → use 3, 4, 5).

Minimum exact nodes for one version (illustrated on v1.4.6; substitute the real bucket list from
`node tools/generate-section-tree.mjs` output afterwards):

```json
"/v1.4.6/": {
  "label": { "zh": "Bannerlord v1.4.6", "en": "Bannerlord v1.4.6" },
  "group": "start", "collapsed": false, "order": 3,
  "parent": "/",
  "children": ["/v1.4.6/en/", "/v1.4.6/zh/"]
},
"/v1.4.6/en/": {
  "label": { "zh": "Bannerlord v1.4.6 Documentation", "en": "Bannerlord v1.4.6 Documentation" },
  "group": "start", "collapsed": false, "order": 0,
  "parent": "/v1.4.6/",
  "children": ["/v1.4.6/en/api/", "/v1.4.6/en/architecture/"]
},
"/v1.4.6/zh/": {
  "label": { "zh": "Bannerlord v1.4.6 Documentation", "en": "Bannerlord v1.4.6 Documentation" },
  "group": "start", "collapsed": false, "order": 0,
  "parent": "/v1.4.6/",
  "children": ["/v1.4.6/zh/api/", "/v1.4.6/zh/architecture/"]
},
"/v1.4.6/en/api/": {
  "label": { "zh": "API 参考", "en": "API Reference" },
  "group": "api", "collapsed": false, "order": 1,
  "parent": "/v1.4.6/en/",
  "children": ["/v1.4.6/en/api/achievementsystem/", "/v1.4.6/en/api/campaignsystem/"]
},
"/v1.4.6/zh/api/": {
  "label": { "zh": "API 参考", "en": "API Reference" },
  "group": "api", "collapsed": false, "order": 1,
  "parent": "/v1.4.6/zh/",
  "children": ["/v1.4.6/zh/api/achievementsystem/", "/v1.4.6/zh/api/campaignsystem/"]
},
"/v1.4.6/en/architecture/": {
  "label": { "zh": "架构总览", "en": "Architecture" },
  "group": "architecture", "collapsed": false, "order": 1,
  "parent": "/v1.4.6/en/", "children": []
},
"/v1.4.6/zh/architecture/": {
  "label": { "zh": "架构总览", "en": "Architecture" },
  "group": "architecture", "collapsed": false, "order": 1,
  "parent": "/v1.4.6/zh/", "children": []
}
```
Bucket children take the trivial shape the file already uses at
`/v1.3.0/en/api/campaign/agentorigins/`:
`{ "label": {"zh":"<Bucket>","en":"<Bucket>"}, "group": null, "collapsed": false, "order": 0, "parent": "/<parent>", "children": [] }`

**A2b — `roots`.** `roots` is `["/","/v1.3.0/","/v1.3.15/","/v1.4.5/","/versions/"]` and must gain
the new version roots, but note `grep -rn roots templates/` matches **only a comment** in
`breadcrumb.html:17` — no template reads it. Update it for consistency; it changes nothing rendered.


**A3 — `routes`: delete the three dead routes.** Remove the keys
`/v1.4.5/en/api/final/`, `/v1.4.5/zh/api/final/`, `/v1.4.5/zh/api/perks/` **and** their entries from
`children` arrays (`children` of `/v1.4.5/en/api/` and `/v1.4.5/zh/api/`).
Fixes: the three guaranteed-404 sidebar anchors (§1.2).
Risk: none for the site; check external/back links first — see §6 acceptance step 3.

**A4 — `meta.generated` / regeneration policy.**
`meta.generated` is `"2026-07-26T09:19:14.905Z"`. Nothing in the tool contract rewrites this file.
If you want regeneration, `node tools/_regen_nav.mjs` is the only candidate and it is **lossy in one way**:
`_regen_nav.mjs:25-30` preserves `label`, `group`, `collapsed`, `order` for routes that already exist
(`ex?.label || …`, `ex?.group ?? null`, `ex?.collapsed ?? false`, `ex?.order ?? 0`) — so **hand-tuned
labels survive** — but it derives `parent` structurally (`parentRoute(route)`, line 31) and `children`
from the section tree (line 32), and it copies `meta` and `roots` **verbatim** (lines 38, 40), so it
will **not** add `v1.4.6` to `meta.versions`, will **not** add it to `roots`, and will give new routes
`group: null` (invisible in the sidebar). Run it *first*, then apply A1–A3 by hand.
`roots` is dead data — `grep -rn roots templates/` matches only a comment in `breadcrumb.html:17`.

**A5 — new optional field for the tree fix (recommended, generated not hand-written).**
`routes` currently has no depth marker. To let the sidebar recurse without unbounded fan-out, add one
boolean per node rather than a second index:
```json
"/v1.4.5/zh/api/campaign/": { …, "indexable": true }
```
Semantics: `indexable: true` = "this route's children are class pages, render a search/list panel, not
more `<details>`". `tools/generate-section-tree.mjs` already knows this — `byRoute[route].pages > 0`
means the route has leaf children. So this field is derivable, and belongs in the generator, not the JSON.

### B. `data/section-tree.json`

Real shape: top keys `sections` (currently `{}` — dead) / `byRoute` (464 keys);
`byRoute[route] = { title, weight, pages, subsections:[routeKey…] }`.
`byRoute["/"].subsections = ["/v1.3.0/","/v1.3.15/","/v1.4.5/","/versions/"]` — **this is the version
root list**, and the lead is right that a new version must appear here or the version-home drill-down
is missing a ring.

**B1 — regenerate the whole file (preferred, it is a real generator, no hand-tuned fields to lose).**
```bash
node tools/generate-section-tree.mjs          # writes data/section-tree.json
node tools/generate-section-tree.mjs --check  # -> SECTION_TREE_OK routes=NNN
```
This is safe: the only writer is `generate-section-tree.mjs:157`, it is derived purely from the content
tree, and it carries no hand-authored label text beyond each `_index.md`'s frontmatter `title`.
It fixes, in one shot: the 3 dead `final`/`perks` nodes (they stop existing), the 2 missing v1.4.6
routes, and the 1 stale `.pages` count. Expected routes after regeneration: **466** at the time of
audit (§1.3) — re-check, other workers are writing.

**B2 — do not hand-add v1.4.6 to `byRoute`.** B1 covers it, and hand edits get clobbered by the next
`--check`-driven regeneration.
Risk of B1: `weight` is read from each `_index.md` frontmatter; if any author put a `weight` in a
section index for layout reasons, the sidebar's `sort` order changes. Verify with
`SECTION_TREE_OK` + a spot check of the api bucket order before committing.

### C. `templates/partials/topnav.html`

Only hardcoded version in the template set (verified):
```bash
grep -oE 'v1\.[0-9]+(\.[0-9]+)?' templates/partials/topnav.html | sort -u
# v1.3.15
```
It appears exactly once, in the "原生 Native" dropdown:
```tera
{%- if version == 'v1.3.15' -%}
  {%- set src_key = "/" ~ version ~ "/" ~ lang_code ~ "/native-1.3.15-src/" -%}
```

**C1 — insert location:** that exact `{%- if version == 'v1.3.15' -%}` line, inside the Native
dropdown's `{%- for lang_code in nav.meta.languages %}` loop.
**Replace** with a data-driven test (no new version list, no new file):
```tera
{%- if nav.routes["/" ~ version ~ "/" ~ lang_code ~ "/native-1.3.15-src/"] is defined -%}
```
Same behaviour (v1.3.15 has that route, others don't), and a future version that gains a
`native-<ver>-src` section lights up with no template edit.
Fixes: the last hardcoded version string in the nav templates.
Risk: none — `nav.routes` lookup on a missing key returns undefined, which the dropdown already handles
three lines later with `{%- if nav.routes[src_key] is defined %}`.

**C2 — hard requirement for A1, do this in the same change.**
`templates/partials/topnav.html:130-136` (Version dropdown) dereferences `nav.routes[route_key].label`
without a guard. Add the guard so a version listed in `meta.versions` can never break the build:
```tera
{%- if nav.routes[route_key] is defined -%}
  <a href="{{ target_url | safe }}" class="…">{{ nav.routes[route_key].label[lang] | default(value=version ~ ' ' ~ lang_code) }}</a>
{%- endif -%}
```
Risk: one dropdown item silently disappears instead of a loud build failure — deliberate trade,
documented in §7.

**C3 — no version language-switcher for a version missing a language.**
The Language dropdown iterates `item.translations` (per-page, Zola-provided) — already correct, no change.

### D. `content/_index.md`

**D1 — version picker table.** Insert location: the table body, immediately after line 24
(`| **v1.3.0**  | 早期版本 / Earlier version | [查看文档 / View Docs](./v1.3.0/) |`).
Insert one row per version being published, newest last:
```markdown
| **v1.4.6**  | 源码可用（进行中）/ Source available (in progress) | [查看文档 / View Docs](./v1.4.6/) |
| **v1.4.7**  | 源码可用（进行中）/ Source available (in progress) | [查看文档 / View Docs](./v1.4.7/) |
| **v1.5.3**  | 源码可用（进行中）/ Source available (in progress) | [查看文档 / View Docs](./v1.5.3/) |
```
**Do not add a row for `v1.4.7` until it has a landing page** — it currently has no `_index.md` anywhere
(§1.7), so `./v1.4.7/` would itself be a broken link.
Risk: each `./<v>/` must resolve to `content/<v>/_index.md`. Verify with the §5 link gate before committing.

**D2 — the "pick a version" prose.** The line the lead quoted is **not** in `content/_index.md`;
`sed -n '1,45p'` shows the only version prose is lines 14-16 ("推荐起点 / Recommended starting point")
and the `###` blocks at lines 33/39/44. So nothing to rewrite there.
If a version list sentence is added later, it must be generated from `nav.meta.versions`, not typed —
three hand-maintained version lists (`meta.versions`, the table above, the `###` blocks) is exactly how
v1.4.6 got orphaned.

**D3 — cross-version compare sentence (optional, one line).** Lines 29/31 hardcode
"1.3.0/1.3.15/1.4.5". If v1.4.6 ships, that line goes stale. Either drop the version enumeration
("across all documented versions") or add `/v1.4.6/`. Low risk, cosmetic.

### E. `templates/section.html` — the actual "回不来" fix

Not in the lead's A-F list but it is the highest-impact change; §1.6 proves sections get no nav.

**E1 — insert location:** `templates/section.html`, line 2 (next to the breadcrumb import).
Add:
```tera
{% import "macros/page-navigation.html" as page_navigation %}
```
**E2 — insert location:** after the child `<ul>` closes, before `{% endblock %}`.
Add:
```tera
{{ page_navigation::render(current_url=section.path, lang=lang) }}
```
Fixes: every bucket `_index.md` and every version landing gains Parent / prev / next.
Risk (must be stated, not hidden): `page_navigation.html:4-8` derives `parent_path` as
`page.ancestors | last`. For a **section** page, `item.ancestors` is the *strict* ancestor list, so
`parent_path` becomes the **grandparent** of the section, not its parent section — a bucket index would
label `/v1.3.0/en/api/` as its "Parent" and skip `/v1.3.0/en/`. Verified for pages: on
`public/v1.3.0/en/api/core/Module/index.html` the breadcrumb shows ancestors
`/ , /v1.3.0/, /v1.3.0/en/, /v1.3.0/en/api/, /v1.3.0/en/api/core/` — i.e. for a **leaf** the last
ancestor is the direct parent section. *Inference, unverified for section pages* (would need a build):
for a section the list is one shorter, so the macro needs a `section`-aware branch. Cheapest correct
form inside the macro, not the template:
```tera
{%- set_global parent_path = "" -%}
{%- for ancestor in page.ancestors -%}{%- set_global parent_path = ancestor -%}{%- endfor -%}
{%- if page is undefined and section.ancestors | length > 0 -%}
  {%- set_global parent_path = section.ancestors | last -%}
{%- endif -%}
```
Do not ship E2 without that macro change. Flagged again in §7.

**E3 — insert location:** `templates/base.html`, inside the existing `<style>` block, immediately
before `.page-navigation {`. Add the missing breadcrumb styling (there is none today):
```css
    .breadcrumb { font-size: 0.85rem; color: var(--muted); margin-bottom: 0.75rem; }
    .breadcrumb a { color: var(--muted); }
    .breadcrumb a:hover { color: var(--accent); }
    .breadcrumb .current { color: var(--text); font-weight: 600; }
```
Fixes: makes the only up-path on section pages look like chrome instead of body text.
Risk: none — additive CSS, no selectors touched.

### F. `templates/macros/sidebar.html` — the "not a tree" fix

**F1 — make the child loop recursive.** Insert location: after the two `for child_key in …` loops
inside the `<details class="group">` branch (the `{%- for child_key in section_children -%}` loop,
after its `{%- endfor -%}`), before the closing `</div>`.
Replace the flat emission with a recursive macro call. Sketch (must be validated against Tera's
recursion limit before shipping — see §7):
```tera
{%- macro render_children(route_key, depth) -%}
  … for each child of route_key, emit <a>; recurse while depth < 3 and child is a section …
{%- endmacro render_children -%}
```
Fixes: the sidebar would finally reach sub-buckets (`api/campaign/agentorigins/`, …) instead of
stopping at bucket level (§1.6: 19-27 hrefs, 0 class pages).
Risk (real): the sidebar renders on **every** page. A 5-level fan-out over 464 routes is a template
cost on all 38 652 pages. Cap `depth` and, better, gate the recursion on the A5 `indexable` flag so
buckets that contain only class pages render one collapsed "类 / Classes" row instead of 3000 `<details>`.
**Cheaper alternative if the cost is a concern:** leave the sidebar alone and let Zola's own
`section.pages` list (already in `section.html`) be the drill-down. The user complaint is then solved by
E1-E3 alone.

**F2 — prune dead routes defensively.** Insert location: right after `{%- set tree = load_data(path="data/section-tree.json") -%}`.
Not required if A3 + B1 land, but it makes the sidebar 404-proof against future drift:
```tera
{# routes are curated data; never emit an anchor to a route with no content page #}
```
There is no content-existence predicate available in Tera for `load_data` (no `load_data` existence
check) — so the real fix is the A3/B1 pruning, not a template guard. Recording this so nobody
re-attempts the template-side guard.

### G. `tools/generate-page-navigation.mjs` — bug + deprecation note

**G1 — latent ReferenceError, do not "fix" it blindly.** Line 145:
```js
title: section?.title || routeLabel(navigation, leaf.parentRoute, language),
```
`language` is not a parameter of `buildPageNavigation(contentRoot, navigation)` and is not in scope —
it is a free identifier. It is unreachable today only because `section?.title` is always truthy
(`sections` is populated for every `_index.md` at line 118-124 and for every synthesized parent at
line 130-136, both with a guaranteed non-empty title). Any future change that lets a section title be
null turns this into a hard crash. Fix by passing the language in, not by deleting the call:
```js
export function buildPageNavigation(contentRoot, navigation = { routes: {} }, language = 'en') {
…
        title: section?.title || routeLabel(navigation, leaf.parentRoute, language),
```
and update the two call sites (`renderPageNavigation`, `main`).
Risk: none; the argument is only used on an already-falsy path.

**G2 — it writes 18 MB of data no template reads (§2c).** Do **not** delete the tool: it is the
freshness gate for `page-navigation.json` and CI's `--check` uses it. Do **not** wire it into the
templates either — the comment at `page-navigation.html:1-3` explains the runtime path is
deliberate ("avoids parsing a multi-megabyte map for every rendered page"). Correct action: leave as is,
and make sure `Related` (§H) reads the *live* tree, not this JSON.

### H. `templates/macros/page-navigation.html` — missing "Related" everywhere

**H1 — `Related` renders only when the parent route has curated children.**
```tera
{%- set related_parent = navigation.routes[parent_section.path] -%}
…
{%- if related_parent is defined and related_parent.children is defined and related_parent.children | length > 0 %}
```
For `core/` and `save-system/` (the two leaves I sampled in §1.6) `nav.routes[parent].children` is empty,
so Related is dropped — confirmed in the built HTML. Fix at the data level, not the template: those
parent routes need `children` entries for the sibling buckets/sub-buckets, or switch the loop to
`section-tree.json` (which *does* know subsections for every route, per B1). Prefer
`tree.byRoute[parent_section.path].subsections` — one extra `load_data`, already cached by Zola per page.
Risk: medium — Related would start listing sub-buckets on class pages, changing the visual weight of
the footer. Gate on `has_children`.

### §3 priority order (dependency-respecting)

1. **B1** (`generate-section-tree.mjs`) — removes 3 dead nodes, safe, no template change.
2. **A3** — drop the 3 dead `navigation.json` routes (or the B1 regen makes this moot only for
   section-tree; `navigation.json` still needs A3).
3. **E3** (+ E1/E2 with the macro fix) — makes the up-path visible on every page. Biggest user-visible win.
4. **C1 + C2** — removes the last hardcoded version and the unguarded deref.
5. **A2 + A1 + D1** — v1.4.6 registration (A1 strictly after A2).
6. **G1** — the free-identifier crash.
7. **F1 / H1** — the deep-tree and Related work; highest cost, do last.

---

## §4 Cross-bucket duplicate type names (v1.4.5)

This is the "同名页在两个桶各一份 → 路径前缀匹配把你送到另一个同名页" root cause.

Source: `tools/_dir-map-145.json` (`generatedFrom: "content/v1.4.5/zh/api"`, 208 573 bytes, rows are
`"TypeName→bucketA|bucketB|…"` strings).

### 4.1 Headline number, stated correctly

`duplicatedTypeNames` has **2199 rows**. **One of them is `_index`**, whose bucket list is all 18 buckets
— that row is the bucket-index file, not a duplicated type. So:

> **v1.4.5/zh api: 2,198 type names live in more than one bucket.**
> (2,199 rows − 1 `_index` false positive.)

Do not quote 2,199 as a type count. Same source: `namespaces` has **513** entries, **171** with
`split: true`.

Buckets-per-name distribution (2,198 real names): `{"2 buckets": 2185, "3 buckets": 11, "4 buckets": 1, "6 buckets": 1}`.

### 4.2 Bucket-pair distribution (top 20 of 38 distinct pairs)

| bucket A \| bucket B | # type names |
|---|---|
| campaign \| campaign-ext | **1313** |
| campaign-ext \| viewmodel | 397 |
| campaign-ext \| gui | 265 |
| mission-ext \| viewmodel | 156 |
| campaign-ext \| system | 44 |
| campaign-ext \| core-extra | 11 |
| campaign \| core-extra | 6 |
| campaign-ext \| mission-ext | 6 |
| engine \| gui | 5 |
| campaign \| save-system | 2 |
| core-extra \| save-system | 2 |
| campaign-ext \| save-system | 2 |
| gui \| mission-ext | 2 |
| core \| core-extra | 2 |
| core-extra \| viewmodel | 2 |
| core-extra \| mission-ext | 2 |
| campaign \| localization | 1 |
| campaign \| mission | 1 |
| campaign \| system | 1 |
| core-extra \| localization | 1 |

`campaign | campaign-ext` alone is 60% of all duplicates: **every** type in
`TaleWorlds.CampaignSystem*` exists twice.

### 4.3 Namespace cross-bucket split (171 namespaces)

`split-ns` #buckets distribution: `{"2": 165, "3": 4, "4": 1, "5": 1}`.
Pages per involved bucket across all 171 split namespaces:

| bucket | split-ns pages |
|---|---|
| campaign-ext | 133 |
| viewmodel | 80 |
| campaign | 47 |
| mission-ext | 38 |
| gui | 15 |
| gameplay | 12 |
| mission | 8 |
| system | 8 |
| core-extra | 5 |
| core | 3 |
| engine | 1 |
| localization | 1 |

Top 15 split namespaces by total pages (`canonical` = the `_dir-map-145.json` rule: the dir where that
exact namespace has the most pages; tie → alphabetically smallest):

| namespace | total | canonical | distribution |
|---|---|---|---|
| TaleWorlds.MountAndBlade | 828 | mission-ext (770) | mission-ext:770, **mission:52**, campaign-ext:2, core:2, core-extra:2 |
| TaleWorlds.CampaignSystem.Issues | 317 | campaign (159) | campaign:159, campaign-ext:158 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | 313 | campaign-ext (159) | campaign-ext:159, campaign:154 |
| TaleWorlds.Core | 272 | core-extra (271) | core-extra:271, core:1 |
| TaleWorlds.CampaignSystem.GameComponents | 245 | campaign-ext (125) | campaign-ext:125, campaign:120 |
| TaleWorlds.CampaignSystem | 221 | campaign-ext (116) | campaign-ext:116, campaign:105 |
| TaleWorlds.CampaignSystem.ComponentInterfaces | 219 | campaign-ext (119) | campaign-ext:119, campaign:100 |
| TaleWorlds.CampaignSystem.Conversation.Tags | 194 | campaign (97) | campaign:97, campaign-ext:97 |
| TaleWorlds.MountAndBlade.Diamond | 123 | mission-ext (117) | mission-ext:117, mission:3, campaign-ext:2, campaign:1 |
| TaleWorlds.GauntletUI | 121 | gui (63) | gui:63, campaign-ext:58 |
| TaleWorlds.CampaignSystem.LogEntries | 111 | campaign-ext (56) | campaign-ext:56, campaign:55 |
| TaleWorlds.TwoDimension | 104 | gui (57) | gui:57, campaign-ext:47 |
| TaleWorlds.CampaignSystem.ViewModelCollection | 67 | viewmodel (34) | viewmodel:34, campaign-ext:33 |
| TaleWorlds.CampaignSystem.GameState | 64 | campaign (32) | campaign:32, campaign-ext:32 |
| TaleWorlds.GauntletUI.BaseTypes | 62 | gui (33) | gui:33, campaign-ext:29 |

### 4.4 Class A vs class B (the lead's adjudication frame)

| class | definition | count | example |
|---|---|---|---|
| **A — real conflict** | a namespace split across exactly 2 buckets, both sides substantial (≥25% of the namespace) | most of the 165 two-bucket splits; `TaleWorlds.CampaignSystem.Issues` (159/158), `CampaignBehaviors` (159/154), `GauntletUI` (63/58), `ViewModelCollection` (34/33) | `ScreenBase` in `campaign-ext` **and** `gui`; `ScreenLayer` likewise; `MBObjectBase` in `campaign-ext` **and** `core` |
| **B — long-tail spill** | a namespace split across 3+ buckets, or one side a small minority (<5% of the namespace) | the 6 namespaces with 3+ buckets, plus tails like `TaleWorlds.Core` core-extra:271 vs core:1 | `TaleWorlds.MountAndBlade` 770/52/2/2/2; `TaleWorlds.DotNet` campaign-ext:30, system:17, engine:1; `TaleWorlds.ObjectSystem` campaign-ext:16, system:4, core:1; `TaleWorlds.InputSystem` campaign-ext:19, core-extra:1, system:1; `TaleWorlds.MountAndBlade.Diamond` mission-ext:117, mission:3, campaign-ext:2, campaign:1; `TaleWorlds.MountAndBlade.SteamWorkshop` mission-ext:5, campaign-ext:1, mission:1 |

**Verdict per the lead's ruling (record as the decision, inlink gating still pending §6.4):**
- **A** → keep one canonical bucket; the other side becomes a **redirect explainer page** that must
  contain a link to the canonical. Do not hard-delete: external inlinks may exist.
- **B** → merge into the main bucket, leave no page behind.
- Direct deletion is permitted **only for pages with measured inlinks = 0**.

#### 4.4a Inlink census (the deletion gate) — MEASURED

Whole-`content/` inbound index over **61 908 markdown files** (URL-mode resolution, prose links only,
fences stripped), then tallied per duplicate page instance.

| | value |
|---|---|
| duplicate page instances (name × bucket) on disk | **4413** |
| inlink histogram | `0 → 1771`, `1-2 → 2131`, `3-10 → 416`, `11-100 → 91`, `>100 → 4` |
| **0 inlinks → deletion-eligible per the lead's ruling** | **1771 (40.1%)** |
| 1-2 inlinks | 2131 |
| inlinks the duplicated set receives overall | ≈ 9 300 |

Per bucket-pair (pages / total inlinks / zero-inlink pages):

| pair | pages | inlinks | zero-inlink |
|---|---|---|---|
| campaign \| campaign-ext | 2614 | 6873 | 937 |
| campaign-ext \| viewmodel | 788 | 828 | 380 |
| campaign-ext \| gui | 522 | 565 | 255 |
| mission-ext \| viewmodel | 308 | 312 | 153 |
| campaign-ext \| system | 88 | 216 | 14 |
| core \| core-extra | 4 | 80 | 0 |
| campaign-ext \| core | 2 | 47 | 0 |
| engine \| gui | 10 | 37 | 0 |
| mission \| mission-ext | 2 | 28 | 0 |
| campaign \| campaign-ext \| core-extra | 12 | 21 | 5 |
| campaign-ext \| core-extra | 10 | 17 | 2 |
| campaign-ext \| mission-ext | 4 | 15 | 1 |
| core-extra \| viewmodel | 4 | 8 | 2 |
| campaign-ext \| engine | 2 | 5 | 1 |

Sample of zero-inlink instances (all `@campaign`, i.e. the losing side of `campaign|campaign-ext`):
`AcceptCallToWarAgreementDecisionOutcome`, `AcceptCallToWarOfferMapNotification`, `AccessMethod`,
`ActionNotes`, `AdditionType`, `AlleyLeaderDiedMapNotification`, `AlleyMemberAvailabilityDetail`, …

**A3 deletion gate (the three dead routes) — all clear:**

| route | inlinks from `content/` | page still exists |
|---|---|---|
| `/v1.4.5/en/api/final/` | **0** | no |
| `/v1.4.5/zh/api/final/` | **0** | no |
| `/v1.4.5/zh/api/perks/` | **0** | no |

Zero internal inlinks and zero content — A3 may delete the routes outright. (External inlinks cannot
be measured from the repo; the pages are already gone from `content/`, so any external link is already
a 404 today and removing the data entry changes nothing but the sidebar.)

#### 4.4b Content diff, 20 sampled duplicate pairs — MEASURED

`content/v1.4.5/zh/api`, frontmatter stripped, sha1 per copy, line-level Jaccard similarity.
Sample stratified across the top four bucket pairs.

| verdict | count | threshold |
|---|---|---|
| IDENTICAL | **0** | sha1 equal |
| PARTIAL | **16** | Jaccard ≥ 0.60 |
| DIFFERENT | **4** | Jaccard < 0.60 |

| type | pair | jaccard | verdict |
|---|---|---|---|
| AcceptCallToWarAgreementDecision | campaign\|campaign-ext | 0.95 | PARTIAL |
| CampaignOptions | campaign\|campaign-ext | 0.04 | **DIFFERENT** |
| CurrentConversationIsFirst | campaign\|campaign-ext | 0.79 | PARTIAL |
| DefaultSiegeAftermathModel | campaign\|campaign-ext | 0.92 | PARTIAL |
| GangLeaderNeedsRecruitsIssueBehavior | campaign\|campaign-ext | 0.70 | PARTIAL |
| InventoryState | campaign\|campaign-ext | 0.88 | PARTIAL |
| LordWantsRivalCapturedIssueBehavior | campaign\|campaign-ext | 0.85 | PARTIAL |
| PartyGroupAgentOrigin | campaign\|campaign-ext | 0.04 | **DIFFERENT** |
| RandomOwnerExtensions | campaign\|campaign-ext | 0.96 | PARTIAL |
| TheConquestOfSettlementIssueBehavior | campaign\|campaign-ext | 0.84 | PARTIAL |
| IssueQuestFlags | campaign\|campaign-ext\|viewmodel | 0.00 | **DIFFERENT** (3 copies) |
| ClanRoleAssignedThroughClanScreenEvent | campaign-ext\|viewmodel | 0.91 | PARTIAL |
| EncyclopediaViewModel | campaign-ext\|viewmodel | 0.91 | PARTIAL |
| KingdomTruceItemVM | campaign-ext\|viewmodel | 0.92 | PARTIAL |
| QuestNotificationItemVM | campaign-ext\|viewmodel | 0.92 | PARTIAL |
| AlignmentAxis | campaign-ext\|gui | 0.89 | PARTIAL |
| GridDirection | campaign-ext\|gui | 0.89 | PARTIAL |
| SimpleRectangle | campaign-ext\|gui | 0.87 | PARTIAL |
| ItemScoreComparer | campaign-ext\|mission-ext\|viewmodel | 0.00 | **DIFFERENT** (3 copies) |
| MissionMainAgentControllerEquipDropVM | mission-ext\|viewmodel | 0.97 | PARTIAL |

Conclusions that change the plan:
- **No two copies are byte-identical** (0/20). Merging is therefore never a pure "delete one file"
  operation — the two sides have diverged, usually by the two authors writing different subsets of the
  class. The lead's "B class → merge into the main bucket, leave no page" is safe **only for the 0-inlink
  instances**; for the rest the canonical page must first absorb the non-canonical side's content.
- 4/20 are **substantively different** — the reader really can land on a page that documents a
  different API surface. That is the concrete mechanism behind "跳过去回不来 / 跳过去是另一个东西".
- Per the lead's ruling, class A pages with inlinks > 0 become **redirect explainers** (keep a page,
  link to canonical); class B pages with inlinks = 0 (1771 instances, 40.1%) may be deleted outright;
  class B pages with inlinks > 0 need the merge-then-delete sequence described above.

### 4.5 Effect on the nav spec

- `navigation.json` gives each duplicate route a **distinct key** and a **distinct parent**:
  `/v1.4.5/zh/api/campaign/ScreenBase/` vs `/v1.4.5/zh/api/campaign-ext/ScreenBase/`, both children of
  their own bucket. The sidebar emits both anchors; they are indistinguishable to a reader
  (both labelled `ScreenBase`).
- `templates/macros/sidebar.html:11-17` picks the active node by **longest matching route-key prefix**,
  so with duplicate type names the two pages are never confused *by the sidebar* — but the
  `Related` loop and any future name-based lookup will be.
- **Do not merge duplicate routes in `navigation.json`.** Path identity is what keeps the two apart;
  collapsing them into one route key is what would create the "sent to the wrong same-named page" bug.
  The fix is content-side (§4.4 verdict) plus an explicit cross-link, not a data-side merge.
- The A5 `indexable` flag matters most here: a bucket whose children are 3000 class pages should render
  as one collapsed row, not 3000 `<details>`.

### 4.6 The en tree — MEASURED, and **not symmetric**

I re-ran the same rule (identical leaf **filename** present in more than one bucket dir, `_index.md`
excluded) against `content/v1.4.5/en/api`, independently of `_dir-map-145.json`.

| | zh api | en api |
|---|---|---|
| leaf files scanned | 7121 | 7071 |
| names present in >1 bucket | 2198 | **45** |
| **real cross-bucket duplicate type names** | **2198** | **45** |
| distinct bucket pairs | 38 | 31 |

Top pairs (en): `campaign|campaign-ext → 9`, `mission-ext|viewmodel → 7`, `campaign|core-extra → 6`,
`engine|gui → 5`, `campaign-ext|core-extra → 4`, `campaign|save-system → 2`, `core-extra|save-system → 2`,
`core|core-extra → 2`, `gui|mission-ext → 2`, `campaign|localization → 1`.

**zh has 2198 duplicated type names; en has 45 — a 49× asymmetry.** The zh tree carries essentially all
of the duplication. (Caveat on method: the zh run excludes `_index.md` files from the scan entirely,
which is why it reports 2198 while `_dir-map-145.json` reports 2199 rows — its extra row is the `_index`
bucket-index artifact. Same number, different bookkeeping.)

Consequence for the plan: **the dedup campaign is a zh-only job.** Do not spend effort on the en tree,
and do not assume a zh-side merge implies the en side needs one. The 45 en duplicates are small enough
to handle in one pass (or to leave — en already has `<100` pages in the tail).
Namespace split counts for en were not parsed: my frontmatter `namespace:` regex matched
`(unknown)` for 100% of pages, so the `_dir-map-145.json` ns table has **no en counterpart** and
building one needs the real frontmatter key, which differs from what I guessed. Listed in §7.

---

## §5 Acceptance criteria

A reviewer runs these after applying §3. Numbers in the "expected" column are what I measured pre-fix.

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
```

1. **No dead route in the data files.** Expected: 0.
```bash
node tools/generate-section-tree.mjs --check     # -> SECTION_TREE_OK routes=NNN
```
and, for `navigation.json`, a route-existence sweep (the inline script from §1.2): every
`routes` key and every `children` entry must resolve to a `content/` file.
Expect 0 dead (was 3).

2. **Markdown link gate stays at 0.** Expected, per root:
```bash
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.0/en/api  node tools/audit-links.mjs  # BROKEN_LINKS=0 RESOLVE_NEITHER=0
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs  # BROKEN_LINKS=0 RESOLVE_NEITHER=0
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api  node tools/audit-links.mjs  # BROKEN_LINKS=0 RESOLVE_NEITHER=0
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.5/en/api  node tools/audit-links.mjs  # BROKEN_LINKS=0 RESOLVE_NEITHER=0
```
> ⚠ `audit-links.mjs` does `walk(root)` with no existence check and **crashes with ENOENT** on a
> missing directory instead of printing numbers. Confirm the target exists (`test -d`) before each run.

3. **No page is a dead end.** Back-link coverage script: for every leaf route under
   `content/<v>/<lang>/{api,architecture,guide}`, resolve every prose markdown link and assert the
   parent route is a target. Expected after fix: `leaves_without_parent_backlink == 0`.
   Pre-fix baseline: 25 / 25 / 79 / 82 / 110 / 57 (§1.4 D1).
   After the §3 template fixes, the assertion that actually matters is on **rendered** output:
   every `public/**/index.html` must contain exactly one of
   `class="breadcrumb"` + `class="page-navigation"`. Pre-fix: **0 of the section pages** have
   `page-navigation` (§1.6).

4. **Sidebar reaches the bucket's sub-buckets (only if F1 lands).** Simulate the sidebar macro for
   `/<v>/<lang>/api/` and assert the emitted href set includes every `_index.md` route under
   `api/<bucket>/`. Pre-fix: 19 / 20 / 21 / 27 hrefs, sub-buckets 0.

5. **Per-dup-page inlink census before any §4 deletion.** For every one of the 2 198 duplicate names,
   count inlinks to *each* copy (whole-site resolution, prose links only). Only inlink == 0 pages may
   be deleted; everything else gets a redirect explainer page per §4.4. This census is also the
   gate on A3's three deletions.

6. **No hardcoded version in templates.**
```bash
grep -oE 'v1\.[0-9]+(\.[0-9]+)?' templates/*.html templates/partials/*.html templates/macros/*.html | sort -u
```
Expected after C1: no output. Pre-fix: `templates/partials/topnav.html:v1.3.15`.

7. **One build, then the section-page spot check.** `zola build` is deliberately **not** run by W4; a
   reviewer must run it once because E1/E2 changes what a section renders. Then:
```bash
grep -c 'class="page-navigation"' public/v1.3.0/en/index.html          # was 0, expect >=1
grep -c 'class="page-navigation"' public/v1.3.0/en/api/core/index.html # was 0, expect >=1
grep -c 'class="breadcrumb"'         public/v1.3.0/en/api/core/index.html # was 1, expect 1
```

---

## §6 Known limits / not verified without a full `zola build`

1. **`zola build` was not run** (task constraint). Everything about *rendered* output is read from the
   existing `public/` build, dated **Aug 22 05:36**, which predates the v1.4.6 tree and the concurrent
   leaf rewrites. Template changes E1/E2/C1/C2/F1/H1 are **unrendered**.
2. **E2's ancestor semantics for section pages is an inference.** I proved the leaf case from built
   HTML (`page.ancestors | last` == the direct parent section). I did **not** prove what `page.ancestors`
   resolves to when `page` is undefined and the template is a *section* template. E2 must not ship
   without the macro guard in E2, or buckets will label their grandparent as "Parent".
3. **C2's Tera failure mode is an inference.** I read the unguarded `nav.routes[route_key].label[lang]`
   dereference at `topnav.html:135`; I did not run a build to confirm it aborts the build rather than
   emitting an empty string. Either way, A1-before-A2 ordering is required.
4. **§4.4 inlink census and §4.4b content diff: DONE** (see §4.4a / §4.4b). The 1 771 zero-inlink
   instances are measured, not estimated. Remaining §4 gap: the en namespace-split table (§4.6) needs
   the real frontmatter namespace key, which I failed to guess.
5. **§4.6 en tree: DONE** — and the answer is that zh/en are **not** symmetric (2198 vs 45).
6. **Cross-bucket duplicate content diff not run.** Whether the two copies of `ScreenBase` are byte-equal
   is unknown; the A/B verdict does not depend on it (both branches keep a page), but "merge into the
   main bucket" for class B does depend on it. **→ RESOLVED, see §4.4b: 0/20 identical, 16 partial,
   4 substantively different.**
7. **F1's Tera recursion depth and per-page cost are unknown.** The sidebar renders on 38 652 pages;
   a recursive macro needs a depth cap and a measurement of build time. `tools/validate-build.ps1`
   exists for the latter and was not run.
8. **Fenced-code links.** My §1.4 numbers strip ``` fences; `audit-links.mjs` does not. The two are
   therefore not directly comparable, and a link audit that "passes" may still be counting links that
   only exist inside code samples.
9. **`tools/_rank_stub_indegree.mjs` was read but not used** for the numbers — it is hardcoded to
   v1.4.5/zh. All D6 figures come from my own whole-`content/` inlink index.
10. **Concurrency.** Other workers were writing `content/**` throughout. The drift in §1.3/§1.7 is
    partly a moving target; the final re-measurement is in §7.

---

## §7 Final re-measurement (run at the very end of the audit, after other workers' writes landed)

`content/` grew from **38 652 → 61 908** markdown files during the audit. Numbers that moved are marked ⚠.

### 7.1 Link gate, re-run

```bash
for v in v1.3.0 v1.3.15 v1.4.5; do for l in zh en; do d=content/$v/$l/api
  [ -d "$d" ] || { echo "SKIP (dir missing) $d"; continue; }
  printf "%-28s " "$d"
  AUDIT_MODE=url AUDIT_CONTENT_ROOT=$d node tools/audit-links.mjs 2>&1 \
    | grep -E '^(FILES|TOTAL_LINKS|BROKEN_LINKS|RESOLVE_NEITHER|FILES_WITH_BROKEN)=' | tr '\n' ' '; echo
done; done
```

| root | FILES | TOTAL_LINKS | BROKEN_LINKS | RESOLVE_NEITHER | FILES_WITH_BROKEN | Δ vs §1.1 |
|---|---|---|---|---|---|---|
| content/v1.3.0/zh/api | 5285 | 17424 | 0 | 0 | 0 | — |
| content/v1.3.0/en/api | 5285 | **17552** | 0 | 0 | 0 | links +128 |
| content/v1.3.15/zh/api | 5633 | **23079** | 0 | 0 | 0 | links +116 |
| content/v1.3.15/en/api | 5630 | **19668** | 0 | 0 | 0 | links +137 |
| **content/v1.4.5/zh/api** | 9421 | 31714 | **2** | **2** | **1** | ⚠ was 0 |
| **content/v1.4.5/en/api** | 7179 | 17594 | **2** | **2** | **1** | ⚠ was 0 |

The two new breaks (both languages, same file, same target):

```
## viewmodel/CampaignOptionsManager.md  (1)
   -> ../ModuleHelper
```

`../ModuleHelper` from `api/viewmodel/` resolves to `/v1.4.5/<lang>/api/ModuleHelper/`, which does not
exist. `ModuleHelper.md` actually lives in `api/campaign-ext/` in **all six** version/lang trees:

```bash
for v in v1.3.0 v1.3.15 v1.4.5; do for l in zh en; do printf "%-14s " "$v/$l"; find content/$v/$l -name ModuleHelper.md; done; done
# -> content/v1.4.5/zh/api/campaign-ext/ModuleHelper.md   (and one per tree, all under campaign-ext/)
```

Correct link from `api/viewmodel/CampaignOptionsManager.md` is
`[ModuleHelper](../campaign-ext/ModuleHelper)`. Owner: the v1.4.5 leaf writer, not the nav spec —
logged here because it is the only markdown-layer break on the site and it will fail the §5 gate.

### 7.2 Generator gates, re-run

```bash
node tools/generate-section-tree.mjs --check
node tools/generate-page-navigation.mjs --check
```

| | first measurement | final |
|---|---|---|
| `generate-section-tree.mjs --check` | stale, "Expected 464 routes" | stale, **"Expected 542 routes"** ⚠ |
| `generate-page-navigation.mjs --check` | stale | stale |

The expected route count went 464 → 466 → **542** during the audit. Every one of the three new version
trees is in that delta.

### 7.3 Dead routes, re-run — unchanged

```
FINAL: navigation.json  dead routes = 3  /v1.4.5/en/api/final/  /v1.4.5/zh/api/final/  /v1.4.5/zh/api/perks/
FINAL: section-tree.json dead keys  = 3  (same three)
```

Inlink gate on those three (§4.4a): **0 inlinks from `content/` each, page already gone from disk.**
A3 deletion is clear.

### 7.4 Version registration, re-run

`content/` version dirs now: `v1.3.0 v1.3.15 v1.4.5 v1.4.6 v1.4.7 v1.5.3`.
`nav.meta.versions` = `["v1.3.15","v1.3.0","v1.4.5"]` — unchanged, so **three** version trees
(23 259 markdown files: 9 473 + 1 799 + 11 987) are built by Zola and reachable from nowhere.
Full table in §1.7.

### 7.5 Duplicate-type census, re-run

Unchanged from §4: `tools/_dir-map-145.json` is a static artifact
(`generatedFrom: "content/v1.4.5/zh/api"`, 2199 rows = 2 198 real duplicate names + 1 `_index` row).
My independent filename-based rescan of `content/v1.4.5/zh/api` reproduced **2198** exactly.
`content/v1.4.5/en/api` → **45**. zh/en are not symmetric; the dedup campaign is zh-only.

### 7.6 What this means for the integration order

1. Do **not** run `node tools/generate-section-tree.mjs` or `node tools/_regen_nav.mjs` blind while
   the content workers are still writing — the expected route count moved by 78 during this audit.
   Freeze the content trees first, then regenerate once.
2. The **2 new broken links** in `v1.4.5/{zh,en}/api/viewmodel/CampaignOptionsManager.md` must be fixed
   before any gate can go green; they are content-side, one-line fixes.
3. Everything in §1.1–§1.6 that is *not* marked ⚠ still stands as measured. The v1.3.0 / v1.3.15 trees
   were not touched by the concurrent workers and their numbers are exact.
4. The v1.4.6 `api/en` + `api/zh` mis-nesting (§1.7) must be resolved **before** A2 registers v1.4.6,
   or the new version's sidebar/topnav will resolve the wrong language and the wrong version.

