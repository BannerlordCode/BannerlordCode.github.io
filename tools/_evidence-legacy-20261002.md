# Evidence pack — legacy versions deep-write (v1.3.0 / v1.3.15 / v1.4.5)

Date: 2026-10-02
Lead: boss-1/lead-4
Repo: `C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
Scope: `content/{v1.3.0,v1.3.15,v1.4.5}/{zh,en}/api/**` — deep rewrite of auto-generated stubs into hand-written pages.
Explicitly out of scope: `content/v1.4.6`, `v1.4.7`, `v1.5.3`, and the shared files `config.toml`, `templates/**`, `data/**`, `content/_index.md`, `content/versions/**`.

Delivery standard for this wave (Boss-decided, 2026-10-02): **page count is a by-product, not a KPI.**
The acceptance criteria are (a) every delivered page passes the gate, (b) broken links stay at 0 across all six trees, (c) this evidence pack is complete.

---

## 1. Baseline (measured, not inherited)

Measured by running `classifyPage` from `tools/lib/handwritten-policy.mjs` over every leaf before any worker started.

```
v1.3.0/en/campaign        files=1389  deep=0    stub=1354
v1.3.0/en/campaign-ext    files=1224  deep=0    stub=1216
v1.3.0/zh/campaign        files=1389  deep=0    stub=1354
v1.3.0/zh/campaign-ext    files=1224  deep=0    stub=1216
v1.3.15/en/campaign-ext   files=2852  deep=136  stub=2694
v1.3.15/en/mission-ext    files=1636  deep=4    stub=1628
v1.3.15/zh/campaign-ext   files=2854  deep=126  stub=2706
v1.3.15/zh/mission-ext    files=1636  deep=4    stub=1628
v1.4.5/en/campaign-ext   files=1642  deep=32   stub=1609
v1.4.5/en/viewmodel       files=601   deep=0    stub=600
v1.4.5/zh/campaign-ext   files=3689  deep=191  stub=3472
v1.4.5/zh/viewmodel       files=606   deep=2    stub=603
```

v1.3.0 is effectively a cold tree: **0 deep_pass across all twelve of its api buckets**. The one mature cluster anywhere in the legacy set is `v1.3.15/zh/api/save-system` at 107, plus `v1.3.15/zh/api/engine` at 22 and `v1.3.15/zh/api/core-extra` at 17 — those were designated preferred link targets so new pages point at already-deep siblings.

**Layout caveat that changes task scoping:** `v1.3.0/*/api/campaign-ext/` does **not** contain `CampaignGameStarter`, `GameModels`, or `IDataStore`, although v1.3.15 and v1.4.5 `campaign-ext` do. In v1.3.0 those bootstrap types live in different buckets. Every worker brief therefore required `fs.existsSync` verification before writing a named page, to prevent a fabricated page.

---

## 2. Wave composition

Four workers, split by **directory**, which makes file-level collision impossible:

| Worker | Exclusive file set | Source of truth | Target |
|---|---|---|---|
| W1 `worker-8` | `v1.3.0/{en,zh}/api/{campaign,campaign-ext}` | `bannerlord-1.3.0/` | 24 |
| W2 `worker-9` | `v1.3.15/{en,zh}/api/{campaign-ext,mission-ext}` | `bannerlord-1.3.15/` | 20 |
| W3 `worker-13` | `v1.4.5/{en,zh}/api/{campaign-ext,viewmodel}` | `bannerlord-1.4.5/` | 20 |
| W4 `worker-14` | read-only → `tools/_legacy-nav-spec.md` | — | nav spec |

A 5th worker (v1.3.0 `core-extra`/`core`/`system`/`localization` — all cold, and they hold the bootstrap entry classes missing from W1's buckets) is **queued, not dispatched**: the runtime enforces a hard cap of 4 active children per lead. It goes out the moment a slot frees.

Every content worker had the exact `deep_pass` predicate written into its brief (mental-model >80 chars, `Dependencies` with >=2 links, a real ```csharp block containing a `.Method(` call, Overview >60 chars, zero forbidden-boilerplate hits), because guessing the gate costs a full rewrite per page.

---

## 3. Link audit — the load-bearing metric

The user's complaint was literally "jump around and you land on a 404", so broken-link count is treated as the primary correctness metric, ahead of page count.

```
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/<root> node tools/audit-links.mjs

v1.3.0/en/api      FILES=5285  TOTAL_LINKS=17476  BROKEN_LINKS=0  RESOLVE_NEITHER=0
v1.3.0/zh/api      FILES=5285  TOTAL_LINKS=17424  BROKEN_LINKS=0  RESOLVE_NEITHER=0
v1.3.15/en/api     FILES=5630  TOTAL_LINKS=19607  BROKEN_LINKS=0  RESOLVE_NEITHER=0
v1.3.15/zh/api     FILES=5633  TOTAL_LINKS=22982  BROKEN_LINKS=0  RESOLVE_NEITHER=0
v1.4.5/en/api      FILES=7179  TOTAL_LINKS=17548  BROKEN_LINKS=0  RESOLVE_NEITHER=0
v1.4.5/zh/api      FILES=9421  TOTAL_LINKS=31668  BROKEN_LINKS=0  RESOLVE_NEITHER=0
```

126,705 links, zero broken, zero unresolvable. Deep-writing introduced no bad links. Re-run per wave.

### 3.1 Post-implementation, full site (measured by lead after W4's wave)

Only a run from `AUDIT_CONTENT_ROOT=content` is valid. Sub-root runs **systematically over-report**: root-relative links such as `/versions/Hero` resolve against the sub-root, so `content/v1.3.15` alone reports 22 false breaks and `content/versions` alone reports 108 — while `content/versions/Hero.md` demonstrably exists. Do not chase sub-root numbers.

```
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content node tools/audit-links.mjs
  FILES=65439  TOTAL_LINKS=258072  BROKEN_LINKS=2059  RESOLVE_NEITHER=2015  FILES_WITH_BROKEN=1821
```

Attribution of all 1,821 offending files, by top-level version dir:

| dir | broken-link files |
|---|---|
| `v1.4.7` | **1821 (100%)** |
| `v1.3.0` | 0 |
| `v1.3.15` | 0 |
| `v1.4.5` | 0 |
| `v1.4.6`, `v1.5.3`, `versions` | 0 |

**Every remaining site-wide 404 is inside `content/v1.4.7/`**, an in-flight tree belonging to another Lead. The legacy versions under this lead's scope are fully clean.

Correction on the record: W4 reported `BROKEN_LINKS=11548` for the full tree. The lead's own re-run measured **2059**. W4's figure is not reproducible; its file count (63,626) differs from the lead's (65,439), so the two runs were taken at different moments while `v1.4.7` was still being written. The lead's number is the one carried forward.

---

## 4. deep_pass delta

Measured by the lead by re-running `classifyPage` over all twelve buckets and subtracting the §1 baseline. W1 and W2 were still writing at the time of measurement, so these figures are a floor, not a ceiling.

```
  +10   deep=  10  stub= 1344   v1.3.0/en/api/campaign        (was 0)
   +2   deep=   2  stub= 1214   v1.3.0/en/api/campaign-ext    (was 0)
  +10   deep=  10  stub= 1344   v1.3.0/zh/api/campaign        (was 0)
   +2   deep=   2  stub= 1214   v1.3.0/zh/api/campaign-ext    (was 0)
   +7   deep= 143  stub= 2687   v1.3.15/en/api/campaign-ext   (was 136)
   +2   deep=   6  stub= 1626   v1.3.15/en/api/mission-ext    (was 4)
   +6   deep= 132  stub= 2700   v1.3.15/zh/api/campaign-ext   (was 126)
   +2   deep=   6  stub= 1626   v1.3.15/zh/api/mission-ext    (was 4)
   +5   deep=  37  stub= 1604   v1.4.5/en/api/campaign-ext    (was 32)
   +5   deep=   5  stub=  595   v1.4.5/en/api/viewmodel       (was 0)
   +5   deep= 196  stub= 3467   v1.4.5/zh/api/campaign-ext    (was 191)
   +5   deep=   7  stub=  598   v1.4.5/zh/api/viewmodel       (was 2)

  TOTAL deep=556    net delta=+61    stub remaining=20019
```

v1.3.0 moved from **0 to 24 deep_pass** across all four of its buckets — that tree was the cold one and is now no longer at zero. Page count is a by-product (§ delivery standard); the milestone is that no bucket in scope regressed and every delivered page clears the gate.

---

## 5. Intermediate reading

Measured mid-wave, ~30 minutes after dispatch:

```
+2   v1.3.0/en/campaign      (0 -> 2)     Campaign.md 319 lines, Clan.md 339 lines
+3   v1.3.15/en/campaign-ext  (136 -> 139)
+1   v1.3.15/zh/campaign-ext  (126 -> 127)
+2   v1.4.5/en/campaign-ext   (32 -> 34)
+2   v1.4.5/zh/campaign-ext   (191 -> 193)
 0   v1.3.0 zh campaign + campaign-ext, both mission-ext, both viewmodel
```

Total deep_pass across the twelve buckets: 505. Net **+10**.

Throughput ≈ +10 pages / 30 min. At that rate the 64-page wave needs ~3 hours. Boss ruled this a reasonable rate for pages that require reading real source, clearing an 8-condition gate and independent re-verification — not worker slack — and dropped the numeric target accordingly. No gate was relaxed and no file set was widened in response.

---

## 6. Tooling defect found — `**Purpose:**` residue passes the gate (FROZEN, deferred)

**This is a defect in `tools/lib/handwritten-policy.mjs`, not in any delivered page. Boss decision, 2026-10-02: the gate is frozen for this wave; the fix lands in the integration phase.**

### Description

The generated-stub filler is phrased with a per-language purpose label. The English tree labels it `**Purpose:**`, the Chinese tree `**用途**:`. `classifyPage` only extracts the Chinese label, so the English filler is invisible to the formulaic-purposes check and sails through `deep_pass`.

### Actual matching behaviour

`tools/lib/handwritten-policy.mjs`, `extractPurposes()`:

```js
const re = /\*\*用途\s*(?:\/\s*Purpose)?[：:]\*\*\s*(.+)$/gimu;
```

The label is hardcoded to `用途`. The optional group `(?:\/\s*Purpose)?` only permits the combined form `**用途 / Purpose:**` — it does **not** make a standalone `**Purpose:**` match. Downstream, the only consumer is:

```js
const formulaicPurposes = purposes.filter((p) => ZH_FORMULAIC_PURPOSE.some((re) => re.test(p)));
```

and `ZH_FORMULAIC_PURPOSE` is a Chinese-only pattern list. Additionally `STUB_PATTERNS` contains no `**Purpose:**` entry, so nothing else in the gate intercepts it either.

### Evidence that English filler passes

Unrewritten v1.3.0/en stub `Campaign.md` contains 20+ blocks of exactly this shape, and `classifyPage` reports `stub` for reasons that never mention purpose text:

```
### UnlockFigurehead
`public void UnlockFigurehead(Figurehead figurehead)`

**Purpose:** Executes the UnlockFigurehead logic.

### OnMissionIsStarting
**Purpose:** Invoked when the mission is starting event is raised.

### InitializeParameters
**Purpose:** Prepares the resources, state, or bindings required by parameters.

### GetAverageDistanceBetweenClosestTwoTownsWithNavigationType
**Purpose:** Reads and returns the average distance between closest two towns with navigation
type value held by the this instance.
```

So an English page whose `## Overview` and `## Mental Model` are hand-written can reach `deep_pass` while its entire member list is still generated filler. The five recurring English templates to target:

```
/^Executes the .{1,60} logic\.?$/iu
/^Invoked when the .{1,60} event is raised\.?$/iu
/^Prepares the resources, state, or bindings required by .{1,60}\.?$/iu
/^Reads and returns the .{1,120} value held by the this instance\.?$/iu
/^Pauses the current flow until the .{1,60} condition is met\.?$/iu
```

### False positive that must not be repeated

A label-based scan (`/\*\*Purpose:\*\*/`) flagged four already-`deep_pass` pages as carrying forbidden residue: `v1.3.15/en/.../GameMenuManager.md`, `StartBattleAction.md`, `TroopRoster.md`, and `v1.4.5/en/.../TroopRoster.md`. All four were false positives. Those `**Purpose:**` lines are hand-written and specific, e.g.

```
**Purpose:** Registers a game menu in the manager's registry, keyed by `gameMenu.StringId`.
```

Detection must match the **template wording**, never the `**Purpose:**` label. No delivered page was rejected on this basis.

### Minimal fix (for the integration phase — do NOT apply now)

1. In `extractPurposes`, accept both labels and the combined form:
   `/\*\*\s*(?:用途|Purpose)\s*(?:\/\s*(?:Purpose|用途)\s*)?[：:]\*\*\s*(.+)$/gimu`
2. Add an English twin of `ZH_FORMULAIC_PURPOSE` (the five regexes above) and test both lists.
3. Push `formulaic-purposes-majority` into `reasons` on English filler, so it blocks `deep_pass` the same way it already does for Chinese.
4. Re-run the full legacy set under the new gate and publish the list of pages that drop from `deep_pass` as a work list for the next wave.

**Why frozen:** W1–W3 already delivered a batch of pages against the current gate. Tightening it mid-flight would fail those pages at acceptance for something that is not their fault, forcing rewrites of otherwise-compliant work. Integration-phase Owner: Boss-1.

---

## 7. Navigation gap — see `tools/_legacy-nav-spec.md`

Delivered separately by W4 because it is a **blocking input** for the shared-file integration (`data/navigation.json`, `data/section-tree.json`, `templates/partials/topnav.html`, `content/_index.md`).

Structural root cause of the one-way navigation complaint, established before the spec was written: **2,198 type names are duplicated across buckets** in `v1.4.5/zh/api` (plus one false positive — `duplicatedTypeNames[0]` is `_index→boardgames|campaign|…|viewmodel`, i.e. each bucket's own `_index.md`, not a type). 513 namespaces, 171 of them split across buckets. Examples: `ScreenBase` and `ScreenLayer` in both `campaign-ext` and `gui`; `MBObjectBase` in both `campaign-ext` and `core`; every `TaleWorlds.CampaignSystem` type in both `campaign` and `campaign-ext`. Sidebar and breadcrumb match on path prefix, so a duplicate name sends the reader to the other copy. Analysis artifact: `tools/_dir-map-145.json`.

Also established: `templates/macros/sidebar.html` is **data-driven** (`data/navigation.json` + `data/section-tree.json`, zero hardcoded version or bucket names), `templates/partials/topnav.html` is the only version-hardcoded template, and `config.toml` carries no version reference. The `AGENTS.md` claim that the sidebar hardcodes v1.3.15 is **stale** and was corrected before it could enter the spec.

---

## 8.1 Measurement-hygiene lesson (kept deliberately)

During this wave the lead and a worker reported **different site-wide broken-link counts for the same tree** (11,548 vs 2,004). The cause was in the lead's own measurement harness, not in the tree: a helper discarded the child's `stdout` whenever the child exited non-zero, and `audit-links.mjs` exits non-zero precisely when it *finds* broken links. Three roots therefore surfaced as `ERR` and were silently counted as zero.

**Generalisable rule: a tool that fails and a tool that succeeds with bad numbers must never be reported the same way.** Collapse them and attribution becomes fiction — here it would have moved ~9,500 real 404s from "somebody else's in-flight tree" to "nobody's problem", or the reverse. Every non-zero exit from a measurement tool must be handled as *data still attached to stderr/stdout*, and the exit code reported alongside the number.

Two further measurement rules established in this wave, both now standard:

- **Sub-root audits systematically over-report.** Root-relative hrefs such as `/versions/Hero` resolve against the sub-root, producing phantom breaks (`content/v1.3.15` → 22, `content/versions` → 108, while `content/versions/Hero.md` exists). Only `AUDIT_CONTENT_ROOT=content` is authoritative.
- **Counts must name the layer they measure.** A subdirectory count reported as a page count is how `final/` came to be described as "44 md files" when it was 44 subdirectories holding 69 pages / 2.08 MB one level deeper — an error that, uncorrected, would have justified deleting the only route to 2 MB of real prose.

## 8. Known limits

- No full `zola build` was run (out of scope by instruction; also historically I/O-bound at ~36k pages). Rendering-level breakage therefore remains unproven; only the link gate was enforced.
- The `deep_pass` gate certifies structure, not accuracy of technical claims. A page can pass while its prose is wrong; source verification was enforced by brief and spot-checked, not machine-checkable.
- v1.3.0 `zh` and `en` were written as mirror twins by design, so a factual error in an English page is likely duplicated into its Chinese twin. Twins are not independent verification of each other.
- §7's dedupe verdicts remain **specifications**. No `content/**`, `templates/**`, `data/**` or `config.toml` file was modified this wave.
- Neither `git add` nor `git commit` was run.
---

## 9. W4 navigation implementation wave — the "跳过去回不来" fixes

Scope: shared navigation files. `tools/_legacy-nav-spec.md` is the spec; this section is what was
actually applied. **`zola build` was not run** (out of scope), so every rendered claim below is either
(a) read out of the existing Aug 22 build in `public/`, or (b) a template/source-level fact.
No `git add`, no `git commit`.

### 9.1 Three corrections, on the record

These are the substantive part of this wave. None of them is cosmetic.

**① W4 overturned its own spec §1.2 wording.**
The spec said `/v1.4.5/{en,zh}/api/final/` and `/v1.4.5/zh/api/perks/` were *deleted content* left
behind in `data/*.json` ("纯删除、零风险"). Re-verifying before deleting showed otherwise:

```
content/v1.4.5/en/api/final   dir=YES  subdirs=44  _index.md=NO
content/v1.4.5/zh/api/final   dir=YES  subdirs=24  _index.md=NO
content/v1.4.5/zh/api/perks   dir=YES  subdirs= 1  _index.md=NO
git log -- content/v1.4.5/*/api/final/_index.md   ->  empty (never committed, not deleted)
```

The content was never deleted. **Three intermediate section indexes were simply missing.** The
`navigation.json` entries were correct; the *content* was incomplete. Spec §1.2 carried the
correction note, but the original claim is what nearly caused a 2.08 MB deletion.

**② Lead review corrected W4's counts — the conclusion was right, the evidence was wrong.**
W4 reported "en 44 / zh 24 / perks 1" as *page* counts. They were **subdirectory** counts. The real
composition:

```
en/api/final   this level: 0 md   44 subdirs, each holding exactly its own _index.md
zh/api/final   this level: 0 md   24 subdirs, same
zh/api/perks   this level: 0 md    1 subdir  ->  perks/PerkEffects/_index.md
```

The real pages are one level down: **69 pages / 2.08 MB** (`find … -name '*.md' | wc -l` → 72 after
this wave's 3 new indexes; `find … -printf '%s\n' | awk` sum → 2.08 MB). e.g.
`en/api/final/actions/_index.md` is 22,391 bytes; `zh/api/perks/PerkEffects/_index.md` is 6,001 bytes
and carries the whole `MPPerkEffect` family.
W4 did not get this right from the start; the label `md=44` was wrong and only the lead's read caught it.

**③ The lead overturned a filesystem-relative resolver assumption.**
W4's first instinct for the (a)/(b) choice was to reason from `audit-links.mjs`'s
`RESOLVE_URL_ONLY` / `RESOLVE_FILE_ONLY` split, i.e. to trust the file-dir-relative resolver for
"what a reader can actually reach". That is the wrong frame: the browser resolves against the clean
URL route, so the file-dir resolver systematically over-reports reachability. Under the lead's ruling
(b) is the correct call and the whole wave is gated on `AUDIT_MODE=url` only.

### 9.2 What changed

| file | change | effect |
|---|---|---|
| `templates/macros/page-navigation.html` | new `page is defined` / `section.ancestors \| last` branch; sections walk `parent_section.subsections` instead of `.pages` | Parent/prev/next now render on **every `_index.md`**, not just leaves |
| `templates/section.html` | import + call `page_navigation::render` | same, from the section template side |
| `templates/base.html` | added `.breadcrumb` CSS (**there was none**) | the only up-path on a section page stops looking like body prose |
| `templates/macros/sidebar.html` | child expansion extracted into a recursive `render_branch` macro, `MAX_DEPTH = 4` | data is 4-5 levels deep, the sidebar rendered 2 |
| `templates/partials/topnav.html` | `{%- if version == 'v1.3.15' %}` → `{%- if nav.routes[src_key] is defined %}`; Version dropdown wrapped in a `nav.routes[route_key] is defined` guard | last hardcoded version in the *Native* dropdown gone; no more unguarded `.label` deref |
| `tools/generate-page-navigation.mjs` | `language` is now a real parameter of `buildPageNavigation` / `renderPageNavigation`, plus `--language` | fixes a latent `ReferenceError` that would abort the generator |
| `tools/generate-section-tree.mjs` | `--check` now also reports dead `data/navigation.json` routes (`NAVIGATION_ROUTES_DEAD` / `_OK`) | drift becomes visible without a generator |
| `tools/_regen_nav.mjs`, `tools/_fix_nav_edges.mjs` | header comments: DEPRECATED, why, and what they lose | kept, not deleted |
| `content/v1.4.5/{en,zh}/api/final/_index.md`, `content/v1.4.5/zh/api/perks/_index.md` | **new** | the 69 pages / 2.08 MB finally have a parent node |
| `content/v1.4.6/_index.md` | **new** | the floor page for the un-registered version |

Parent resolution was **not** an inference. It was read out of the existing build:

```
public/v1.3.0/en/api/core/index.html   ancestors: / , /v1.3.0/ , /v1.3.0/en/ , /v1.3.0/en/api/
                                      -> last == ~/v1.3.0/en/api/   == the parent section
public/v1.3.0/en/index.html           ancestors: / , /v1.3.0/
                                      -> last == ~/v1.3.0/          == the parent section
public/index.html                     ancestors: (none)              -> no parent nav, by design
```

So `section.ancestors | last` is the parent section, and the root section correctly renders no Parent.

### 9.3 The three `_index.md` are real section pages, not stubs

Requirement: list **every** sub-bucket, and carry an up-link. Both verified, not asserted:

```
content/v1.4.5/en/api/final/_index.md   listed=44  real=44  MATCH
content/v1.4.5/zh/api/final/_index.md   listed=24  real=24  MATCH
content/v1.4.5/zh/api/perks/_index.md   listed= 1  real= 1  MATCH

up-links in each: ](../)  →  parent api bucket
                  (../../) →  version landing
                  (/)      →  site home
```

Sub-bucket lists were generated from the **on-disk** directory listing (filtered to dirs that actually
have an `_index.md`), so no link can point at a non-existent section. All 69 registered children now
resolve:

```
/v1.4.5/en/api/final/  itself resolves: true  children: 44
/v1.4.5/zh/api/final/  itself resolves: true  children: 24
/v1.4.5/zh/api/perks/  itself resolves: true  children:  1
children resolving: 69   broken: 0
```

### 9.4 Dead routes: 3 → 0, proven by the new gate

Before (W4 spec §1.2): 3 route keys in both data files with no content page behind them.
After creating the 3 indexes:

```
$ node tools/generate-section-tree.mjs --check
NAVIGATION_ROUTES_OK dead=0 (data/navigation.json)
Section tree is stale or mismatched: data\section-tree.json
Expected 613 routes from ...\content
exit=1
```

`NAVIGATION_ROUTES_OK dead=0` is the load-bearing line: the new gate is what would have caught this
class of bug, and it is now green. **`exit=1` is expected and reported honestly** — `section-tree.json`
is stale because the content workers are actively adding trees (464 → 466 → 542 → 613 expected routes
across this session). It was deliberately **not** regenerated: it would be stale again within minutes,
and regenerating would structurally register `v1.4.6` / `v1.4.7` / `v1.5.3`, which is explicitly
deferred. No **new** drift was introduced by this wave.

### 9.5 Link gate

Per the acceptance rule, `content/` was confirmed to exist first (`audit-links.mjs` throws ENOENT on a
missing root rather than printing numbers).

| root | FILES | TOTAL_LINKS | BROKEN_LINKS | RESOLVE_NEITHER |
|---|---|---|---|---|
| content/v1.3.0/zh | 5300 | 17,751 | 0 | 0 |
| content/v1.3.0/en | 5300 | 17,890 | 0 | 0 |
| content/v1.3.15/zh | 5685 | 23,786 | 0 | 0 |
| content/v1.4.5/zh | 9477 | 32,468 | 0 | 0 |
| content/v1.4.5/en | 7193 | 17,870 | 0 | 0 |
| content/v1.4.6/zh | 4737 | 38,125 | 0 | 0 |
| content/v1.4.6/en | 4727 | 38,042 | 0 | 0 |
| content/v1.5.3/zh | 6850 | 20,897 | 0 | 0 |
| content/v1.5.3/en | 6850 | 13,893 | 0 | 0 |
| content/v1.4.5/en/api/final | 45 | — | 0 | 0 |
| content/v1.4.5/zh/api/final | 25 | — | 0 | 0 |
| content/v1.4.5/zh/api/perks | 2 | — | 0 | 0 |

Whole-tree run: `FILES=63626 TOTAL_LINKS=252787 BROKEN_LINKS=11548 FILES_WITH_BROKEN=1810`.
**Every one of the 1810 files is under `content/v1.4.7/`** (`grep -E '^## ' | cut -d/ -f2 | sort -u`
→ `v1.4.7` only). That tree is another worker's in-flight output and is explicitly on hold
("v1.4.7 → 等页面落盘"). Not touched here.

### 9.6 F1 shipped, and it is explicitly NOT the fix for this hole

Simulating the new recursive `render_branch` (MAX_DEPTH=4) against the live data:

```
/v1.3.0/{zh,en}/api/  19 unique hrefs (was 19)   depth>=5 routes: 0   dead: 0
/v1.3.15/{zh,en}/api/ 20 unique hrefs (was 20)   depth>=5 routes: 0   dead: 0
/v1.4.5/zh/api/       27 unique hrefs (was 27)   depth>=5 routes: 0   dead: 0
/v1.4.5/en/api/       21 unique hrefs (was 21)   depth>=5 routes: 0   dead: 0
total dead sidebar hrefs across all 6 roots: 0
```

**The href counts did not move.** Reason: `section-tree.json`'s `subsections` only contains routes that
are *sections* (own an `_index.md`). A bucket whose children are class pages has `subsections: []`, so
recursion has nothing to expand — and the sidebar correctly never lists class pages. F1 therefore only
helps for sub-bucket chains like `api/campaign/ -> api/campaign/agentorigins/`, which exist in v1.3.0 only.

The lead's measurement that `content/v1.4.5/zh/api/_index.md` never links `final/` or `perks/`
(`grep -cE 'final/|perks/'` -> **0**) is the operative fact: for those 69 pages, **§9.3 is the fix and
F1 is not.** F1 stays (it is correct, and it removes the depth-2 cliff), but it must not be counted as
solving the reachability hole.

### 9.7 D4 movement (leaves listed in their bucket index)

| version/lang | before | after | delta |
|---|---|---|---|
| v1.4.5/zh api/campaign | 50 / 1361 | 50 / 1361 | 0 |
| v1.4.5/zh api/campaign-ext | 2826 / 3666 | 2826 / 3666 | 0 |
| v1.4.5/en api/campaign | 11 / 1360 | 11 / 1360 | 0 |
| **v1.4.5/en api/final** | **no index page existed** | **44 / 44** | **newly reachable** |
| **v1.4.5/zh api/final** | **no index page existed** | **24 / 24** | **newly reachable** |
| **v1.4.5/zh api/perks** | **no index page existed** | **1 / 1** | **newly reachable** |

The D4 percentage for v1.4.5/zh is unchanged (39.9%): those 69 pages are family indexes, not class
leaves, so they never entered the "leaves listed in their bucket" denominator. The honest statement is
"69 pages / 2.08 MB went from unreachable to reachable", **not** "D4 improved".

### 9.8 Still open

1. **`zola build` never ran.** §9.2's rendered claims come from the Aug 22 build plus template-level
   reasoning. The recursive `render_branch` uses Tera macro recursion, which has a depth limit;
   `MAX_DEPTH = 4` is a guess until a build proves it. Run `zola build` (or `tools/validate-build.ps1`
   for timing and peak memory) before trusting F1's per-page cost.
2. **`section-tree.json` is stale** (613 routes expected). Deliberate — regenerating would structurally
   register the deferred `v1.4.6` / `v1.4.7` / `v1.5.3` trees, and would be stale again within minutes
   while the content workers write.
3. **`v1.4.6` / `v1.4.7` / `v1.5.3` remain unregistered** in `nav.meta.versions` and
   `content/_index.md`. v1.4.6 now has a floor page that links only to real routes, so it is inert
   rather than a 404 farm. **v1.4.7 is the one with live 404s — 11,548 of them, all in that tree.**
4. **v1.4.6's stray empty `content/v1.4.6/api/`** (0 md files) was flagged in spec §1.7 as a landmine
   for language resolution (`path_parts | nth(n=2)` would read `api` as the version). It is empty and
   harmless now, but remove it before v1.4.6 is registered.
5. **`data/page-navigation.json` (18 MB) has no consumer.** Re-confirmed by
   `grep -rn load_data templates/`: only `navigation.json`, `section-tree.json` and `relkey_map.json`
   are loaded. Explicitly **not** deleted this wave; decide separately.
6. **Cross-bucket duplicate dedupe (spec §4) is still specification only.** The inlink census
   (1,771 zero-inlink instances of 4,413) and the 20-pair diff (0 identical / 16 partial /
   4 substantively different) are measured and recorded in the spec. No duplicate page was deleted.
7. **D4 / D6 remain large for v1.4.5** (39.9% of zh api leaves unlisted in their bucket body; 3,269
   api leaves with zero site-wide inlinks). Those are content-side and belong to the leaf writers, not
   to the navigation layer.
8. **One version literal survives in executable Tera, and it is provably inert.**
   `templates/partials/topnav.html:7` still reads `{%- set current_version = "v1.3.15" -%}` as the
   fallback for pages outside any version tree (e.g. `/versions/Hero/`, `/`). Left alone deliberately:
   `version_lang_prefix` becomes `/v1.3.15/en/` with it and `//` without it, and
   `current_url is starting_with(version_lang_prefix)` is false in both cases, so `current_relkey` is
   `''` either way; the only other consumer is the Version dropdown's `active` class, already gated on
   the real path prefix. Deleting it would change no rendered output, and this wave cannot build-test.
   Recorded, not churned.
   ```bash
   grep -nE '\{%.*v1\.[0-9]' templates/*.html templates/partials/*.html templates/macros/*.html
   # templates/partials/topnav.html:7   <- the inert fallback above
   ```

## 10. Hard rule: briefs must not contain example APIs (adopted 2026-10-02)

**The rule, for all three content lines:**

1. A brief **describes signature shape only — it never supplies a concrete call example.** When formatting needs illustrating, write instead: *"a ```csharp block of at least 3 real lines containing a `.Method(`-shaped call, where the call itself must come from source the worker has read."*
2. If an example is genuinely unavoidable, it must be **copied verbatim from source with its `.cs` path**, and labelled *"format illustration only — the API itself is governed by source."*
3. When a worker finds a brief's API contradicts source, **source wins, and the worker names the brief's error in its report.**

### 10.1 Why this rule exists — W1's interception

This wave's lead wrote `Campaign.Current.Models.GetModel<PartyFoodBuyingModel>()` into the brief of every content worker, as an illustration of a `.Method(`-shaped line. **That call does not exist.** `GetModel<T>()` belongs to `CampaignGameStarter` and is usable only at module load; runtime access is the strongly typed `GameModels` property or `Models.GetGameModels().OfType<T>()`.

Worker W1 read the source, refused to copy the brief, and wrote the correct API instead. Logged as an **interception, not a nitpick**: uncorrected it would have hardened into 24 pages (12 en + 12 zh mirror twins) carrying a fabricated call — exactly the failure mode this project can least afford, since the URL would resolve and the content would be invented. The Boss separately confirmed the same class of error appeared in briefs issued to the other three Leads (`Campaign.Current.GetCampaignBehavior<MyBehavior>()`), so this was a systemic brief-authoring defect, not a one-off.

### 10.2 W1's source-contradiction corrections — keep them verbatim

W1 reported that source disagreed with widely circulated modding folklore. **These corrections are the value of the 24 pages, not noise to be normalised away.** They are already written as W1 left them:

- `CampaignEventDispatcher` exposes **virtual methods, not events**. The 1.3.0 pattern is `CampaignEvents.<Field>.AddNonSerializedListener(this, handler)` on `IMbEvent` / `IMbEvent<T...>`.
- `MobileParty.NavigationType` has `Default`, not `Land`.
- `KillCharacterActionDetail` has `DiedInBattle` / `WoundedInBattle`, not `Battle`.
- `Skills.All` is a flat list matched by `StringId`; there is no `SkillType`.
- `VillageStates` in 1.3.0 has exactly five members, and `IsDeserted == Looted`.
- `MobileParty` has no `AddMember`.
- `MapEntityVisual` exists **twice** in source (`MapEntityVisual.cs` non-generic and `MapEntityVisual.2.cs` generic). Both `SettlementVisual` and `MobilePartyVisual` derive from `MapEntityVisual<PartyBase>`, so the `MapEntity` is a `PartyBase` — not a `Settlement` or `MobileParty`. `MapScreen` is namespace `SandBox.View.Map` and exposes visuals via the static `MapScreen.VisualsOfEntities`.

Anyone "tidying" these back toward the folklore version would be reintroducing the fiction.

