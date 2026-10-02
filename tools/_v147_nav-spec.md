# v1.4.7 navigation patch spec

**What this is.** The exact patches needed to wire `content/v1.4.7/**` into the site's navigation so
that **every page is reachable from the root and can walk back up**. This file *specifies*; it does
not apply. `data/**`, `templates/**`, `config.toml`, `content/_index.md` and `content/versions/**`
are Boss-owned.

**The complaint being fixed:** `跳过去回不来 / 404` — you jump in and cannot get back, or you land
on a 404.

**Machine-readable companion:** `tools/_v147_nav-spec.json`. Directory level only, by Lead scope:
1.4.7 has ~437 namespaces and thousands of leaf pages, so leaves are **not** enumerated. They are
derived automatically — see §5.

---

## 0. How the sidebar actually works today (measured, not assumed)

`templates/macros/sidebar.html` is fully data-driven. Lines 6–7 load the two data files:

```jinja
{%- set nav = load_data(path="data/navigation.json") -%}
{%- set tree = load_data(path="data/section-tree.json") -%}
```

There are **zero** hardcoded version strings or bucket names in it (`grep -E 'v1\.[0-9.]+' templates/macros/sidebar.html` → 0 hits).
Anything this spec says about "the sidebar" is really about `data/navigation.json` and
`data/section-tree.json`.

The render path, with the exact lines that matter:

| Line | Code | Consequence |
| --- | --- | --- |
| 21 | `{%- if nav.meta.versions is containing(current_version) -%}` | **The on/off switch.** If the version is not in `meta.versions`, the whole block is skipped. |
| 26 | `{%- set root_key = "/" ~ current_version ~ "/" ~ current_lang ~ "/" -%}` | root key = `/v1.4.7/zh/` |
| 31 | `{%- if root_key and nav.routes[root_key] is defined -%}` | Second gate: `/v1.4.7/zh/` must be a route. |
| 41 | `{%- if node.parent == root_key and node.group == group_key -%}` | Top-level entries = routes whose **parent is `root_key`** and whose `group` matches. |
| 66–70 | `{%- for child_key in node.children -%}` | One level of curated children, taken from `nav.routes[node].children`. |
| 71–77 | `{%- if tree.byRoute[route_key].subsections is defined -%}` | Structural children, taken from the generated section tree. |
| 86–102 | one `{%- for child_key in ... -%}` | **Only one level down is rendered.** Grandchildren are never printed. |
| 113–133 | `{%- else -%}` fallback | Flat "Site Navigation" list of only the versions in `meta.versions`. |
| 120–127 | `{%- for version in nav.meta.versions -%}` | The fallback list is built from `meta.versions`, so an unlisted version is invisible. |

Two measured facts about the data files:

- **`node.order` is dead.** `grep -rn '\.order' templates/` returns 0 hits. Sidebar order comes
  from **JSON key insertion order** (Tera iterates the map). New keys must therefore be inserted in
  the position you want them displayed; the `order` field is documentation only.
- **`node.collapsed` is live** (`sidebar.html:58`, `:82`).

### Current baseline (paste-able)

```
$ node tools/audit-navigation.mjs
CONTENT_SECTIONS=466
TREE_SECTIONS=464
CONTENT_LEAVES=38194
NAV_ROUTES=464
MAX_LANDING_DISTANCE=3
NAVIGATION_ERRORS=3
- missing section route /v1.4.6/zh/api/
- missing section route /v1.4.6/zh/api/savesystem/
- pages mismatch /v1.3.15/zh/api/save-system/: expected 109, got 108
```

`content/v1.4.6/` already exists on disk with 4 `.md` files and is **absent from
`nav.meta.versions`** — that is a live, unrelated instance of the same bug class and should be fixed
in the same pass (see §4.1).

---

## 1. Why "跳过去回不来" happens today — four distinct causes

### 1.1 A directory without `_index.md` silently truncates the breadcrumb

`templates/macros/breadcrumb.html:10` walks `item.ancestors` and calls
`{%- set sec = get_section(path=anc) -%}`. Zola only builds `page.ancestors` from directories that
**contain an `_index.md`**. A bucket directory without an `_index.md` is not an ancestor, so the
breadcrumb stops there — and, worse, the directory still serves leaf pages, so a reader can arrive
at `/v1.4.7/zh/api/gui/ScreenManager/` with no path back up.

`tools/generate-page-navigation.mjs:120–127` explicitly tolerates this
("*A directory without an _index.md is still a valid structural parent*"), which is why the audit
passes while the user still cannot get back. **This is the #1 cause.** It is also why owning every
`_index.md` in the tree (worker-16's job) is a navigation requirement, not a cosmetic one.

### 1.2 The version is not in `meta.versions` → no sidebar and a wrong language

`sidebar.html:21` skips the whole tree; `topnav.html:6–8` then does
`{%- set current_version = "v1.3.15" -%}`, so every dropdown computes `current_relkey` against the
wrong version and cross-version deep links degrade to the version home.

### 1.3 The sidebar only renders two levels

`sidebar.html:86–102` iterates children exactly once. In 1.4.5, `zh/api/campaign/` holds
**3,666** leaf pages and `zh/api/campaign-ext/` holds **2,311**; `zh/api/gameplay/` sits at depth 3
under `/v1.4.7/zh/` and is therefore **at** the rendered limit. Anything a fourth level down
(`/v1.4.7/zh/api/campaign-ext/actions/`) never appears in the sidebar at all.

### 1.4 The same type lived at two URLs

`tools/_dir-map-canonical.json` measures it: **2,199** type names duplicated across buckets in the
1.4.5 tree, **171 of 513** namespaces split across buckets. `ScreenBase` existed at both
`campaign-ext/ScreenBase` and `gui/ScreenBase`. A sidebar entry therefore looks like it goes
"somewhere unrelated", and the reader's mental model of where they are breaks. See §6.

---

## 1.5 NORMALIZATION RULE — bucket resolution is 4 ordered steps, and step 3 is load-bearing

The bucket a type lands in is **not** a namespace-prefix lookup. It is the artifact's four steps, in
order, with no substitutions:

| Step | Operation | Source field | Failure mode |
| --- | --- | --- | --- |
| **1** | Hard skip. If the namespace is under any `excludeNamespaces` prefix (37 entries) **or** any of its dot-segments equals an `excludeSuffixes` entry (`CodeGenerator`, `AutoGenerated`), emit **no page** and count it separately. | `excludeNamespaces`, `excludeSuffixes` | over-inclusion: `AutoGenerated*` directories leak into a bucket |
| **2** | Longest-prefix-wins over `rules[]`. **Not** first-match. | `rules[]` (37) | first-match sends `TaleWorlds.MountAndBlade.CustomBattle` to `mission-ext` |
| **3** | **Override by EXACT, case-sensitive simple type name.** If `typeName` is a key of `entryPointDirs`, that value wins — even if step 2 chose a different bucket. | `entryPointDirs` (7 entries) | **skipping this empties `mission/` and `core/`** |
| **4** | `defaultDir` = `core-extra`, and record the namespace in `unmapped` so the gap is measurable. | `defaultDir` | silent pollution: the fallout is thousands of third-party types |

### 1.5.1 Step 3 must run **after** step 2, must be exact-case, and must not be skipped

This is a normalization rule rather than a note because the failure is **invisible in the rule
text**. Nothing in `entryPointDirs` says "this runs after the prefix match". If you lowercase it, if
you substring-match it, if you apply it first, or if you skip it, `mission/` and `core/` come out
with **zero types**, the directories never appear, and the only symptom is that `api/mission/` and
`api/core/` 404.

`entryPointDirs` is a flat map of exactly **7** entries, all single-word camelCase:

| Type | Bucket | What step 2 would have said |
| --- | --- | --- |
| `Mission`, `MissionState`, `MissionBehavior`, `Agent`, `Formation` | `mission` | `mission-ext` |
| `MBSubModuleBase`, `Module` | `core` | `mission-ext` |

All seven are `TaleWorlds.MountAndBlade`. Matching is **exact and case-sensitive** — a lowercased or
substring match would also capture `MissionBehaviorDefinition` and `AgentState` into `mission/`.
Every earlier pin was deleted as a no-op (`Hero`, `Campaign`, `Game`, `ScreenManager`, `SaveManager`,
`ViewModel`, `TextObject`, `MBDebug`, `GameModels`, `GauntletLayer` already land where the pin wanted
them), so `mission/` holds 5 pages and `core/` holds 2.

**Assertion to run after any regeneration:** every declared bucket must be non-empty. Assert it; do
not eyeball the rule text.

**There is no `ModuleManager` page.** The artifact's `_noModuleManager` records a full-tree scan of
1.4.5 / 1.4.6 / 1.4.7 / 1.5.3: **zero** declarations of a type named `ModuleManager`, and no
`ModuleManager.md` in 1.4.5. `modulemanager/` holds 8 unrelated types of the
`TaleWorlds.ModuleManager` namespace. **Do not spec a `ModuleManager` route anywhere.**

### 1.5.2 Verified residue: what step 4 actually swallows

After step 1, 24 namespaces / 675 types still fall through to `core-extra`. That is 55% of the bucket.
The bulk is not modding API and is reported here rather than silently merged into
`core-extra/Game`/`core-extra/AssemblyLoader` neighbourhoods:

| Namespace | Types | Nature |
| --- | --- | --- |
| `Messages.*` (8 namespaces) | 331 | Diamond lobby protobuf contracts |
| `NetworkMessages.*` | 214 | Diamond lobby protobuf contracts |
| `StbSharp` | 64 | vendored image codec |
| `psai.Editor`, `psai.net` | 37 | PSAI editor/runtime |
| `JetBrains.Annotations` | 29 | `[NotNull]` attributes |
| `Microsoft.Win32`, `Microsoft.Reflection`, `Microsoft.Runtime.Hosting`, `Microsoft.CodeAnalysis` | 85 | interop shims |
| `Windows.Foundation.Diagnostics` | 8 | WinRT shim |
| `Newtonsoft.Json.Bson` and 7 siblings | ~170 | vendored JSON |
| `MBHelpers` | 1 | `Helpers` is excluded but `MBHelpers` is not |
| `Jose.*` | 9 | jose-jwt |
| `TaleWorlds.PlatformService.*`, `TaleWorlds.PlayerServices.Avatar`, `TaleWorlds.ServiceDiscovery.Client`, `TaleWorlds.Avatar.PlayerServices` | 40 | platform/online services |

Per the artifact's own `_excludeNote` — *"Report deviations from this list instead of silently
diverging"* — this is reported, not worked around. Extending `excludeNamespaces` is the Boss's call.

### 1.5.3 Two 1.4.7 source typos are excluded, not mapped

`bannerlord-1.4.7` contains misspelled namespaces: `Sandbox`, `Sandbox.View.GameStates`,
`Sandobx.GauntletUI.Missions`, `Storymode.Missions`. The artifact lists them in
`sourceTypoNamespaces` and rules **EXCLUDE** — mapping them to `sandbox`/`storymode` would invent a
namespace rule the source does not support. They are listed so the affected types are accounted for
rather than silently dropped. **Do not add rules to work around a typo in the game's own source.**

---

## 2. `data/navigation.json` — the exact patch

### 2.1 Route-entry naming rules (copy the existing key shape)

Verified against the real file (464 routes). Keys are **URL routes with a trailing slash**, never
paths and never `_index.md`:

```
/                                              site root
/vX/                                           version landing
/vX/{lang}/                                    language landing          (lang ∈ meta.languages)
/vX/{lang}/api/                                API hub
/vX/{lang}/api/<slug>/                         bucket
/vX/{lang}/architecture/                       architecture hub
/versions/                                     cross-version hub
```

**Do leaf pages get their own route entry?** **No.** Verified: the deepest keys in the current file
are depth-5 (`/v1.4.5/zh/api/campaign-ext/actions/`), and `nav.routes['/v1.4.5/zh/api/campaign/Hero/']`
is `false`. All 464 existing routes are section routes (breadcrumbs); leaves are resolved by the
sidebar through `section-tree.json` and by `page-navigation.json` at runtime. 1.4.7 follows the
same rule.

Exact entry shape (copy verbatim, only the values change):

```json
"/v1.4.7/zh/api/campaign/": {
  "label": { "zh": "Campaign 战役系统", "en": "Campaign" },
  "group": "api",
  "collapsed": true,
  "order": 4,
  "parent": "/v1.4.7/zh/api/",
  "children": []
}
```

Field contract, each one checked against the templates:

| Field | Required | Read by |
| --- | --- | --- |
| `label.zh` / `label.en` | yes | `sidebar.html:59,83,89,99,106,118,124`; `topnav.html:141`; `breadcrumb.html:41,52,55` |
| `group` | yes | `sidebar.html:41` (`node.group == group_key`). Must be a key of `j.groups`. |
| `collapsed` | yes | `sidebar.html:82` |
| `order` | yes (dead) | nothing — keep it for humans, order comes from key position |
| `parent` | yes, or `null` for `/` | `sidebar.html:41`; `breadcrumb.html:44–47` fallback; `audit-navigation.mjs:checkNavigationGraph` |
| `children` | yes (array, may be empty) | `sidebar.html:66`; `macros/page-navigation.html:47` |

### 2.2 `meta.versions` — written out as the explicit on/off switch

```diff
  "meta": {
    "description": "Tree-structured navigation schema for the Bannerlord Modding Wiki.",
    "versions": [
      "v1.3.15",
      "v1.3.0",
      "v1.4.5",
+     "v1.4.7",
      "v1.4.6"
    ],
    "languages": ["zh", "en"],
    "generated": "2026-08-24T00:00:00.000Z"
  },
```

`v1.4.6` is added in the same pass — it exists in `content/` but is missing from the list, which is
why `audit-navigation.mjs` reports `missing section route /v1.4.6/zh/api/`.

**This single array is the switch.** `sidebar.html:21`, `:120`, `topnav.html:6`, `:36`, `:53`, `:70`,
`:87`, `:113`, `:130` all read it. With it, `/v1.4.7/zh/` gets the full sidebar, all six topnav
dropdowns gain a 1.4.7 entry, and the language switcher resolves. Without it, `/v1.4.7/zh/**` renders
the flat fallback list (which does not contain 1.4.7) — i.e. **no navigation at all**, which is the
literal "跳过去回不来" report.

### 2.3 The route entries to add

Insertion position matters (§0: `node.order` is dead). Insert `/v1.4.7/` **after** `/v1.4.5/` in the
`routes` object so it renders after the existing versions.

```json
"/v1.4.7/": {
  "label": { "zh": "Bannerlord v1.4.7", "en": "Bannerlord v1.4.7" },
  "group": "start", "collapsed": false, "order": 3,
  "parent": "/",
  "children": ["/v1.4.7/zh/", "/v1.4.7/en/"]
},
"/v1.4.7/zh/": {
  "label": { "zh": "Bannerlord v1.4.7", "en": "Bannerlord v1.4.7" },
  "group": "start", "collapsed": false, "order": 0,
  "parent": "/v1.4.7/",
  "children": ["/v1.4.7/zh/api/", "/v1.4.7/zh/architecture/"]
},
"/v1.4.7/en/": {
  "label": { "zh": "Bannerlord v1.4.7", "en": "Bannerlord v1.4.7" },
  "group": "start", "collapsed": false, "order": 0,
  "parent": "/v1.4.7/",
  "children": ["/v1.4.7/en/api/", "/v1.4.7/en/architecture/"]
},
"/v1.4.7/zh/api/": {
  "label": { "zh": "API 参考", "en": "API Reference" },
  "group": "api", "collapsed": false, "order": 1,
  "parent": "/v1.4.7/zh/",
  "children": [ /* the 20 bucket routes, alphabetical, see §2.4 */ ]
},
"/v1.4.7/zh/architecture/": {
  "label": { "zh": "v1.4.7 架构总览", "en": "v1.4.7 Architecture" },
  "group": "architecture", "collapsed": false, "order": 0,
  "parent": "/v1.4.7/zh/",
  "children": []
},
"/v1.4.7/en/api/": { "label": { "zh": "API 参考", "en": "API Reference" },
  "group": "api", "collapsed": false, "order": 1, "parent": "/v1.4.7/en/", "children": [ /* same 20, en */ ] },
"/v1.4.7/en/architecture/": { "label": { "zh": "v1.4.7 架构总览", "en": "v1.4.7 Architecture" },
  "group": "architecture", "collapsed": false, "order": 0, "parent": "/v1.4.7/en/", "children": [] }
```

Then append to the existing `/` entry (1.4.5 parity — `"/".children` is
`["/v1.3.0/","/v1.3.15/","/v1.4.5/","/versions/"]`):

```diff
-     "children": ["/v1.3.0/", "/v1.3.15/", "/v1.4.5/", "/versions/"]
+     "children": ["/v1.3.0/", "/v1.3.15/", "/v1.4.5/", "/v1.4.7/", "/v1.4.6/", "/versions/"]
```

### 2.4 The 19 bucket routes

Bucket names come from `tools/_dir-map-canonical.json` (authoritative), cross-checked against
`tools/_v147_treespec.json`. `order` values mirror the 1.4.5 `zh` assignment so the reading order
stays familiar. **There is no `gameplay/` and no `navigationsystem/` bucket — do not create or link
them.** Page counts are from `tools/_v147_inventory.json` (1,799 pages, 6,023 types).

```json
"/v1.4.7/{lang}/api/core/":          { "label": { "zh": "Core 核心", "en": "Core" },                  "order": 0 },
"/v1.4.7/{lang}/api/core-extra/":   { "label": { "zh": "Core-Extra 核心扩展", "en": "Core-Extra" },     "order": 1 },
"/v1.4.7/{lang}/api/campaign/":     { "label": { "zh": "Campaign 战役系统", "en": "Campaign" },         "order": 4 },
"/v1.4.7/{lang}/api/campaign-ext/": { "label": { "zh": "Campaign-Ext 战役扩展", "en": "Campaign-Ext" }, "order": 5 },
"/v1.4.7/{lang}/api/gui/":          { "label": { "zh": "GUI 界面", "en": "GUI" },                      "order": 6 },
"/v1.4.7/{lang}/api/save-system/":  { "label": { "zh": "Save System 存档系统", "en": "Save System" },  "order": 7 },
"/v1.4.7/{lang}/api/viewmodel/":    { "label": { "zh": "ViewModel 数据视图模型", "en": "ViewModel" }, "order": 8 },
"/v1.4.7/{lang}/api/localization/": { "label": { "zh": "Localization 本地化", "en": "Localization" },   "order": 9 },
"/v1.4.7/{lang}/api/engine/":       { "label": { "zh": "Engine 引擎", "en": "Engine" },                "order": 10 },
"/v1.4.7/{lang}/api/system/":       { "label": { "zh": "System 系统层", "en": "System" },              "order": 12 },
"/v1.4.7/{lang}/api/custombattle/": { "label": { "zh": "CustomBattle 自定义战斗", "en": "CustomBattle" }, "order": 13 },
"/v1.4.7/{lang}/api/modulemanager/":{ "label": { "zh": "ModuleManager 模块清单", "en": "ModuleManager" }, "order": 14 },
"/v1.4.7/{lang}/api/network/":      { "label": { "zh": "Network 网络通道", "en": "Network" },           "order": 15 },
"/v1.4.7/{lang}/api/sandbox/":      { "label": { "zh": "SandBox 沙盒模块", "en": "SandBox" },           "order": 16 },
"/v1.4.7/{lang}/api/storymode/":    { "label": { "zh": "StoryMode 主线模块", "en": "StoryMode" },       "order": 17 },
"/v1.4.7/{lang}/api/activitysystem/":   { "label": { "zh": "ActivitySystem 活动系统", "en": "ActivitySystem" },   "order": 18 },
"/v1.4.7/{lang}/api/achievementsystem/":{ "label": { "zh": "AchievementSystem 成就系统", "en": "AchievementSystem" }, "order": 19 },
"/v1.4.7/{lang}/api/mission/":      { "label": { "zh": "Mission 任务系统", "en": "Mission" },           "order": 2,   "pages": 5   },
"/v1.4.7/{lang}/api/mission-ext/":  { "label": { "zh": "Mission-Ext 战斗扩展", "en": "Mission-Ext" },    "order": 3,   "pages": 1669},
"/v1.4.7/{lang}/api/custombattle/": { "label": { "zh": "CustomBattle 自定义战斗", "en": "CustomBattle" }, "order": 13,  "pages": 40  },
"/v1.4.7/{lang}/api/modulemanager/":{ "label": { "zh": "ModuleManager 模块清单", "en": "ModuleManager" }, "order": 14,  "pages": 8   },
"/v1.4.7/{lang}/api/network/":      { "label": { "zh": "Network 网络通道", "en": "Network" },           "order": 15,  "pages": 41  },
"/v1.4.7/{lang}/api/sandbox/":      { "label": { "zh": "SandBox 沙盒模块", "en": "SandBox" },           "order": 16,  "pages": 554 },
"/v1.4.7/{lang}/api/storymode/":    { "label": { "zh": "StoryMode 主线模块", "en": "StoryMode" },       "order": 17,  "pages": 168 },
"/v1.4.7/{lang}/api/activitysystem/":   { "label": { "zh": "ActivitySystem 活动系统", "en": "ActivitySystem" },   "order": 18, "pages": 6 },
"/v1.4.7/{lang}/api/achievementsystem/":{ "label": { "zh": "AchievementSystem 成就系统", "en": "AchievementSystem" }, "order": 19, "pages": 4 }
```

Every one of these is `"group": "api", "collapsed": true, "parent": "/v1.4.7/{lang}/api/",
"children": []`. There is **no** `boardgames` route: the bucket projects zero types and no
`TaleWorlds.BoardGames` namespace exists. There is **no** `ModuleManager` route inside
`modulemanager/` — that type does not exist in any version.

### 2.5 `groups` — no change needed

`groups` already has `start`, `guide`, `architecture`, `api`, `native`, `xml`, `cross-version`.
v1.4.7 mounts under the existing `start`, `architecture` and `api` groups. There is no `guide/`,
`native/` or `xml-reference/` content for v1.4.7 in scope, so those groups simply render empty for
this version — which `sidebar.html:53` (`{%- if unique_group_routes | length > 0 -%}`) already
handles by not emitting the group at all.

### 2.6 What breaks if 2.2 / 2.3 / 2.4 are omitted

| Omitted | Symptom |
| --- | --- |
| `meta.versions` entry | Sidebar renders the flat fallback (`sidebar.html:113–133`) and does **not** contain v1.4.7. `topnav.html:7` forces `current_version = "v1.3.15"`, so the API/Architecture dropdowns highlight the wrong version and cross-version links resolve to 1.3.15. |
| `/v1.4.7/{lang}/` route | `sidebar.html:31` fails `nav.routes[root_key] is defined` → same fallback. |
| `/v1.4.7/{lang}/api/` route | The `api` group is empty for this version; nothing links to the API hub. |
| Bucket routes | The bucket `_index.md` pages render but appear nowhere in the sidebar; the only way in is a link from another page. If the only inbound link is a relative markdown link and that page moves, the bucket is orphaned. |
| `"/"` children update | `/v1.4.7/` is not a child of `/`; `audit-navigation.mjs` reports `navigation parent does not reference child`. The breadcrumb still works via `page.ancestors`, but the site-root page and the sidebar disagree about what exists. |

---

## 3. `data/section-tree.json` — regenerate, do not hand-edit

```bash
node tools/generate-section-tree.mjs            # walks content/, writes data/section-tree.json
node tools/generate-section-tree.mjs --check    # CI invariant
```

The generator (`tools/generate-section-tree.mjs`) walks `content/`, so it picks up every v1.4.7
directory **automatically**. There is no version list to extend. What changes:

```json
"/v1.4.7/": {
  "title": "…from content/v1.4.7/_index.md frontmatter…",
  "weight": null,
  "pages": 0,
  "subsections": ["/v1.4.7/en/", "/v1.4.7/zh/"]
},
"/v1.4.7/zh/api/": {
  "title": "…",
  "weight": null,
  "pages": 0,
  "subsections": ["/v1.4.7/zh/api/achievementsystem/", "… 20 buckets …"]
},
"/v1.4.7/zh/api/core/": {
  "title": "…",
  "weight": null,
  "pages": 518,
  "subsections": []
}
```

Two things to know about this file:

- **`subsections` is what puts buckets in the sidebar.** `sidebar.html:71–77` reads
  `tree.byRoute[route_key].subsections` for the second, structural level. Without a matching
  `byRoute` entry, buckets exist as pages but are not navigable from the sidebar.
- **`pages` is the direct leaf count only.** `generate-section-tree.mjs` increments it for every
  non-`_index.md` file in that exact directory (`section.pages++`), so it is 0 for pure hubs and it
  is what `sidebar.html:79` (`tree.byRoute[route_key].pages > 0`) uses to decide whether to nest.

**Omitted ⇒** the sidebar renders v1.4.7 only if `navigation.json` already lists every bucket as a
curated child; anything relying on the structural tree disappears, and `audit-navigation.mjs`
`checkSectionTree` fails with `missing section route /v1.4.7/...` for every new directory.

### 3.1 `data/page-navigation.json` — regenerate only, **never hand-edit**

```bash
node tools/generate-page-navigation.mjs          # writes data/page-navigation.json (18 MB)
node tools/generate-page-navigation.mjs --check  # CI invariant, prints PAGE_NAVIGATION_OK leaves=N
```

This is the **prev/next + parent** index for every leaf page. It is produced from the content tree,
not authored. It needs no v1.4.7 patch — regenerating after the content lands is sufficient.

**What it guarantees, and what it does not.** `buildPageNavigation` gives each leaf:

- `parent` — the route of its own directory (guaranteed present even for a directory with no
  `_index.md`, which is why it can silently mask §1.1),
- `previous` / `next` — **only the immediately adjacent leaves in the same directory**, ordered by
  frontmatter `weight` then title then route.

There is **no** cross-directory sibling link and **no** multi-level "up" chain in this file. That is
the runtime renderer's job, and it is done in `templates/macros/page-navigation.html:29–30`
(one parent hop) and `:5–8` (the breadcrumb, which is the only multi-level up path — see §1.1).

*(Side note, harmless today: `buildPageNavigation` references an undeclared `language` identifier
at `routeLabel(navigation, leaf.parentRoute, language)`. It is unreachable because the loop above
always populates `sections` for every leaf's parent route, but it will throw if that invariant is
ever broken.)*

---

## 4. The other shared files

### 4.1 `content/_index.md` — version picker row

Two places, both required:

**(a) The `## 选择版本 / Select Version` table (line 20–24).** Insert one row, keeping newest first:

```diff
 | 版本 Version | 描述 Description | 文档 Documentation |
 |-------------|-----------------|-------------------|
 | **v1.3.15** | 最新稳定版 / Latest stable | [查看文档 / View Docs](./v1.3.15/) |
+| **v1.4.7**  | 命名空间全覆盖 / Full namespace coverage | [查看文档 / View Docs](./v1.4.7/) |
+| **v1.4.6**  | 增量版本 / Incremental | [查看文档 / View Docs](./v1.4.6/) |
 | **v1.4.5**  | 源码可用 / Source available | [查看文档 / View Docs](./v1.4.5/) |
 | **v1.3.0**  | 早期版本 / Earlier version | [查看文档 / View Docs](./v1.3.0/) |
```

**(b) The `<!-- BEGIN SECTION INDEX -->` block (line 87–96).** Add both, otherwise the home page
does not link the new version at all:

```diff
 - [Bannerlord v1.4.5](./v1.4.5/)
+- [Bannerlord v1.4.7](./v1.4.7/)
+- [Bannerlord v1.4.6](./v1.4.6/)
 - [跨版本类对比 / Cross-Version Class Comparison](./versions/)
```

**Omitted ⇒** `/v1.4.7/` is reachable only by typing the URL or by guessing; the sidebar is the only
other entry point. A version nobody can find is functionally a 404.

### 4.2 `content/versions/**` — per-class delta pages

Scope note: the 20 curated pages (`Agent.md`, `Hero.md`, `Mission.md`, `CampaignBehaviorBase.md`, …)
cover 1.3.0 / 1.3.15 / 1.4.5 only. Their headers and the `_index.md` intro both hardcode those
three versions.

Minimum for v1.4.7 to be coherent:

1. `content/versions/_index.md` — extend the intro sentence and the table header from a fixed
   `1.3.0 | 1.3.15 | 1.4.5` to include a `1.4.7` column, and add the per-class member counts.
2. Each `content/versions/<Type>.md` — add the `1.4.7` row/column. The counts come from
   `tools/class-version-diff.mjs`.

**Not in scope for worker-16.** This is a 21-page mechanical regeneration. Flagged so it is a
deliberate decision, not a silent gap: until it is done, the cross-version hub will show three
versions while the sidebar shows four.

### 4.3 `templates/partials/topnav.html` — the only hardcoded version

Line 7 is the single hardcoded version in the template layer:

```jinja
{%- if not (nav.meta.versions is containing(current_version)) -%}
  {%- set current_version = "v1.3.15" -%}
{%- endif -%}
```

It is a **fallback for unknown paths**, not a menu. Once `"v1.4.7"` is in `meta.versions`, all six
dropdowns (`指南 Guide` :36, `API` :53, `架构 Architecture` :70, `原生 Native` :87,
`XML Reference` :113, `版本 Version` :130) enumerate it automatically, because they all loop
`{%- for version in nav.meta.versions %}` and gate on
`{%- if nav.routes[route_key] is defined %}`.

The one **optional** change, if the Boss wants the fallback to be principled instead of pointing at
an arbitrary version — swap the fallback for the newest known version by keeping `meta.versions`
sorted newest-first and taking index 0. Not required; do it or don't, it changes nothing for 1.4.7.

**Omitted ⇒** nothing breaks for v1.4.7. Listed here only because it is the *only* file in
`templates/**` that mentions a version, so it is the obvious place to look when auditing.

### 4.4 `templates/macros/sidebar.html` — **no change required**

Fully data-driven (§0). `grep -E 'v1\.[0-9.]+' templates/macros/sidebar.html` → 0 hits;
`grep -E 'api/[a-z-]+' templates/macros/sidebar.html` → 0 hits. Every bucket name and every version
comes from `data/*.json`. Adding v1.4.7 is a data change only.

### 4.5 `templates/partials/sidebar.html` — **no change required**

Six lines. Line 2 resolves `current_url`, line 3 resolves `lang`, line 5 calls
`sidebar::render_nav(current_url=current_url, lang=lang)`. All version knowledge is inside the macro.

### 4.6 `config.toml` — **no change required**

`grep -n 'v1\.' config.toml` → 0 hits. Zola has no per-version configuration concept here; the site is
one content tree with language subtrees. **No patch. Do not spend a merge on it.**

---

## 5. Leaf list derivation rule (directory-level scope)

1.4.7 has ~437 namespaces. The nav spec stops at directories. The full leaf list is derived
mechanically, never hand-listed:

| Artefact | Derived by | Rule |
| --- | --- | --- |
| `data/section-tree.json` → `byRoute[<bucket>].pages` | `node tools/generate-section-tree.mjs` | one increment per non-`_index.md` file in that directory |
| leaf prev/next | `node tools/generate-page-navigation.mjs` | `weight` asc, then `title` localeCompare, then `route` |
| cross-version equivalent page | `node tools/generate-relkey-map.mjs` | see §5.1 |

### 5.1 ⚠ `tools/generate-relkey-map.mjs` has a hardcoded version list — a 6th file to patch

```js
// tools/generate-relkey-map.mjs:22
const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5'];
```

This is the **only** generator with a hardcoded version list. It produces `data/relkey_map.json`
(3.4 MB), which `topnav.html:133–137` uses to offer "the equivalent page in another version" when
switching versions.

```diff
-const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5'];
+const VERSIONS = ['v1.4.7', 'v1.4.6', 'v1.3.15', 'v1.3.0', 'v1.4.5'];
```

Then `node tools/generate-relkey-map.mjs`.

**Omitted ⇒** switching version from a v1.4.7 page always lands on the v1.4.7 home page instead of
the same class in the target version. That reads as "the site threw away where I was" — the second
half of `跳过去回不来`.

---

## 6. THE BIDIRECTIONAL REACHABILITY TABLE (acceptance criterion)

The user's complaint is one-way navigation. Acceptance is: **for every page, the path to the root and
back down exists, and every hop is a real relative link that resolves.**

### 6.1 Hard invariants

| # | Invariant | Enforced by |
| --- | --- | --- |
| I1 | **One type = exactly one path.** A type never gets two `.md` files in two buckets. | `tools/_dir-map-canonical.json` `collisionRule`: same-dir collisions use `<NamespaceLeaf>__<TypeName>.md`. |
| I2 | **Every directory under `content/v1.4.7/**` contains an `_index.md`.** | worker-16 owns all of them. Without it the breadcrumb truncates (§1.1). |
| I3 | **Every route in `navigation.json` corresponds to a file on disk.** | `tools/audit-navigation.mjs` → `navigation route is not a content section`. |
| I4 | **`parent` ⇄ `children` are reciprocal.** | `audit-navigation.mjs` → `navigation parent does not reference child` / `navigation child has wrong parent`. |
| I5 | **Landing distance ≤ 3.** No route may sit more than 3 levels below `/v1.4.7/{lang}/`. | `audit-navigation.mjs` `checkLandingDistance(expected, errors, 3)`. |
| I6 | **zh and en trees are structurally identical.** Same dirs, same `_index.md` set. | worker-16; 1.4.5 violates this today (`zh/api/gameplay` 18 pages, `en/api/gameplay` 0). |

`boardgames/`, `boardgames` at §2.4, projects **0** types on 1.4.7. An `_index.md` with no leaves is
legal (1.4.5 has seven such shells) but its nav route must still exist so the index is reachable.

### 6.2 `mission/` and `core/` next to their large siblings is the DESIGNED layout

**Flagging this so QA does not "fix" it back into a 404.** Under I1, `mission/` (**5 pages**:
`Mission`, `MissionState`, `MissionBehavior`, `Agent`, `Formation`) and `core/` (**2 pages**:
`MBSubModuleBase`, `Module`) sit directly beside `mission-ext/` (**1,669 pages**) and
`core-extra/` (**1,099 pages**). This is **not** a duplicate-route bug: those seven types were *moved
out* of the bulk buckets by the `entryPointDirs` override (resolution **step 3**, see §1.5.1), so
each still has exactly one path. They exist as small buckets so the entry points keep the 1.4.5 URLs
(`/api/mission/Mission/`, `/api/core/Module/`) that cross-version matching depends on.

**Required page shape.** `mission/_index.md` and `core/_index.md` must open by saying the bucket holds
**only mod-entry classes**, and must link **bidirectionally** to the bulk sibling:

- `mission/_index.md` → "…the full `TaleWorlds.MountAndBlade` surface is in
  [Mission-Ext](../mission-ext/)." …and `mission-ext/_index.md` → "…the five entry classes a mod
  author touches first are in [Mission](../mission/)."
- `core/_index.md` → "…everything else in `TaleWorlds.Core` / `TaleWorlds.Library` /
  `TaleWorlds.DotNet` is in [Core-Extra](../core-extra/)." …and the reverse link from
  `core-extra/_index.md`.

### 6.3 `TaleWorlds.Engine.GauntletUI` vs `TaleWorlds.GauntletUI` — also not a bug

Two similarly-named namespaces land in **different** buckets on purpose:

| Namespace | Bucket | Why |
| --- | --- | --- |
| `TaleWorlds.GauntletUI` (no `Engine` segment) | `gui` | 63 pages in 1.4.5 `gui/`. |
| `TaleWorlds.Engine.GauntletUI` | `engine` | 1.3.15 and 1.4.5 both keep the whole namespace in `engine/`. |

There is deliberately **no** `TaleWorlds.Engine.GauntletUI → gui` rule. The single type that would
otherwise be stranded, `GauntletLayer`, is pinned by `entryPointDirs.engine = ["gauntletlayer"]`.
Verified against source: `GauntletLayer` is declared in `TaleWorlds.Engine.GauntletUI`, and **no
`GauntletLayer.md` exists in any 1.4.5 `gui/` or `campaign-ext/` directory** — 1.4.5 `engine/` is
where it already lives.

### 6.4 The ladder — exact relative links

All hops below are written in the repo's markdown link style (`AUDIT_MODE=url` clean-URL semantics).
`..` climbs from the page's own folder; a trailing `/` or no suffix both resolve.

**A. Leaf → bucket → API hub → version home → site root → sibling version**

| From | Hop | Link written on the page | Resolves to |
| --- | --- | --- | --- |
| `zh/api/gui/ScreenManager.md` | 1 up | `../` | `/v1.4.7/zh/api/gui/` |
| `zh/api/gui/_index.md` | 1 up | `../` | `/v1.4.7/zh/api/` |
| `zh/api/_index.md` | 1 up | `../` | `/v1.4.7/zh/` |
| `zh/_index.md` | 1 up | `../../` | `/` |
| `zh/_index.md` | across | `../../v1.4.5/` | `/v1.4.5/` (language home, then `en` via the switcher) |
| `zh/api/gui/_index.md` | across | `../../en/api/gui/` | `/v1.4.7/en/api/gui/` |
| `zh/api/gui/ScreenManager.md` | across | `../../en/api/gui/ScreenManager` | `/v1.4.7/en/api/gui/ScreenManager/` |
| any page | across | `../../../versions/` | `/versions/` |
| `zh/api/gui/ScreenManager.md` | sibling | `ScreenBase` | `/v1.4.7/zh/api/gui/ScreenBase/` |
| `zh/api/gui/ScreenManager.md` | sibling | `../campaign-ext/MBObjectBase` | `/v1.4.7/zh/api/campaign-ext/MBObjectBase/` |
| `zh/api/gui/_index.md` | sibling bucket | `../campaign/` | `/v1.4.7/zh/api/campaign/` |
| `zh/api/_index.md` | sibling bucket | `campaign/` … `viewmodel/` | each of the 20 buckets |
| `zh/_index.md` | sibling section | `architecture/` | `/v1.4.7/zh/architecture/` |
| `zh/_index.md` | down | `api/` | `/v1.4.7/zh/api/` |

**B. Sibling-to-sibling movement is guaranteed in two independent ways**

1. *In page* — each bucket `_index.md` lists **every one of its leaf pages**, so a reader can always
   step sideways inside a bucket with one click.
2. *At runtime* — `templates/macros/page-navigation.html:29–30` renders a **Parent** link on every
   leaf (its own directory) and `:33–42` renders **← prev / next →** for the adjacent leaves in that
   directory, ordered by `weight`, then title, then route. `:45–53` additionally renders a
   **相关入口 / Related** row from `nav.routes[parent].children`.

**C. Breadcrumb (the only multi-level up path)**

`templates/macros/breadcrumb.html` renders `site root → …every ancestor section… → current title`,
driven by Zola `page.ancestors`. **This only works if I2 holds.** Every directory in
`content/v1.4.7/{zh,en}/**` therefore needs its own `_index.md` — that is the single highest-leverage
requirement in this whole spec.

### 6.5 Known parity gaps — reported, not papered over

These four rows are **imported from `tools/_dir-map-canonical.json` → `parityGaps[]`**, mirrored into
`tools/_v147_treespec.json` → `parityGaps`, and narrated in `tools/_v147_treespec.md` §7. Cite by
`id`.

| `id` | 1.4.5 URL that breaks | Pages | Decision |
| --- | --- | ---: | --- |
| `no-gameplay-bucket` | `1.4.5/gameplay/` → *(none)* | 19 | accept the 19-URL break; do not invent a bucket to make numbers line up |
| `mission-bulk-to-mission-ext` | `1.4.5/mission/` (52 of 78) → `mission-ext/` | 52 | accept; `mission/` stays a small intentional entry-class carve-out with bidirectional links to `../mission-ext/` |
| `game-to-core-extra` | `1.4.5/core/Game.md` → `core-extra/Game.md` | 1 | accept the 1-URL move; namespace consistency beats copying a legacy duplicate |
| `missionstate-to-mission` | `1.4.5 mission-ext/MissionState.md` (+ `campaign-ext/` duplicate) → `mission/MissionState.md` | 1 | accept the 1-URL break for modder-facing grouping |

Additional structural gaps:

| Gap | Detail |
| --- | --- |
| `navigationsystem/` | Cancelled → `core-extra` (step 4). The 1.4.5 tree has no `navigationsystem` dir, so this **is** the parity. |
| `screensystem/` | Reversed → `gui`. |
| `boardgames/` | 0 types on 1.4.7 — no `TaleWorlds.BoardGames` namespace. Not created. |
| `view/`, `perks/`, `final/` | 1.4.5-only shells. Their leaves resolve into `sandbox`, `storymode`, `viewmodel`, `mission-ext`. |
| en tree asymmetry | 1.4.5 `en/api/gameplay/` does not exist at all while `zh/api/gameplay/` has 18 pages. v1.4.7 must not repeat this (I6). |

---

## 7. Apply order (each step is independently verifiable)

```bash
# 1. data/navigation.json  — meta.versions + routes (hand patch, per §2)
# 2. data/section-tree.json — regenerate
node tools/generate-section-tree.mjs && node tools/generate-section-tree.mjs --check

# 3. data/page-navigation.json — regenerate (never hand-edit)
node tools/generate-page-navigation.mjs && node tools/generate-page-navigation.mjs --check

# 4. tools/generate-relkey-map.mjs — add v1.4.7 to VERSIONS (§5.1), then regenerate
node tools/generate-relkey-map.mjs

# 5. content/_index.md — version table + SECTION INDEX block (§4.1)

# 6. invariants
node tools/audit-navigation.mjs     # expect NAVIGATION_OK, NAVIGATION_ERRORS=0
node tools/audit-links.mjs          # expect BROKEN_LINKS=0
```

**`audit-navigation.mjs` must go from the current 3 errors to 0.** Two of the three
(`/v1.4.6/zh/api/`, `/v1.4.6/zh/api/savesystem/`) are pre-existing and unrelated to v1.4.7; fix them
in the same pass or the gate stays red and nobody will notice a new failure. The third
(`/v1.3.15/zh/api/save-system/: expected 109, got 108`) means one stale `.md` file under
`content/v1.3.15/zh/api/save-system/` that the inventory no longer accounts for — find and delete it.

---

## 8. Files that must NOT be hand-edited

| File | Why |
| --- | --- |
| `data/section-tree.json` | 100% generated by `tools/generate-section-tree.mjs`. |
| `data/page-navigation.json` | 100% generated by `tools/generate-page-navigation.mjs`. |
| `data/relkey_map.json` | 100% generated by `tools/generate-relkey-map.mjs`. |
| `config.toml` | No version references. No patch exists. |
| `templates/macros/sidebar.html` | No version references. No patch exists. |
| `templates/partials/sidebar.html` | Six lines, version-agnostic. No patch exists. |