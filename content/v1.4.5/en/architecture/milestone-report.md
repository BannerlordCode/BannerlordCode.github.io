---
title: "Milestone Report M0–M2 (Handwritten Docs Rebuild · Cycle 1)"
description: "Deliverables and acceptance evidence package for Cycle 1 of the BannerlordCode handwritten developer manual rebuild: M0 contract & generator retirement, M1 architecture/nav/crash-boundary, M2 seed deep pages. Covers waves H0–H4."
---

# Milestone Report M0–M2 (Cycle 1)

> Scope: BannerlordCode.github.io (Zola static site) v1.4.5 handwritten developer manual rebuild.
> This cycle delivers: an un-bypassable contract + quality gate, the navigation skeleton, and 5 seed deep pages that pass the `deep_pass` coverage gate — the canonical pattern for every later wave.
> This is **cycle 1 of a multi-cycle loop**. Remaining waves H5–H10 (M3–M5) are future cycles.

## 1. Milestone overview

| Milestone | Goal | Status | Key deliverables |
|-----------|------|--------|------------------|
| **M0** | Contract + retire generators + inventory & coverage tooling | ✅ done | `doc-contract.md` (zh/en), `RETIRED_BODY_GENERATORS.md`, coverage gate, type inventory |
| **M1** | Nav tree + module mental maps + roadmap + crash boundary | ✅ done | `architecture/_index`, `roadmap`, `crash-boundary` (zh/en), core/campaign/mission module `_index` |
| **M2** | Seed deep pages (L0–L1 real handwritten pattern) | ✅ done | 5 `deep_pass` seed pages (zh+en, 10 files) |
| **M3** | High-frequency type bulk handwriting (module waves) | ⏳ future | — |
| **M4** | Family/module hub pages completion | ⏳ future | — |
| **M5** | Full acceptance + publish | ⏳ future | — |

## 2. Wave progress (H0–H10)

| Wave | Content | Status |
|------|---------|--------|
| H0 | Retire signature→prose generators, cut product path | ✅ done (hard-fail guard in 10 CLIs) |
| H1 | Port & freeze doc contract (H1–H9) to v1.4.5 | ✅ done |
| H2 | Discovery/inventory: type list + coverage baseline & gap | ✅ done (7,144 types, 0 missing pages) |
| H3 | Coverage gate `handwritten-coverage.mjs` | ✅ done (strong `deep_pass` criteria) |
| H4 | Seed L0–L1 deep pages (5/5 `deep_pass`) | ✅ done |
| H5 | High-frequency API type bulk handwriting | ⏳ future |
| H6 | Behavior/model family pages | ⏳ future |
| H7 | Module hubs & cross-module dependency graphs | 🟡 partial (3 module `_index` built; rest pending) |
| H8 | Real usage & acquisition-path completion | ⏳ future |
| H9 | Bidirectional nav tree + link audit | 🟡 partial (0 broken links on 24 authored files; full-site audit pending) |
| H10 | Pre-publish full acceptance | ⏳ future |

## 3. Acceptance evidence package

### 3.1 Coverage gate result (`tools/data/handwritten-coverage.json`)
Scan root: `content/v1.4.5/zh/api` (7,123 md files)

| Status | Count |
|--------|-------|
| `deep_pass` | **5** |
| `family_entry_pass` | 13 |
| `stub` | 7,091 |
| `noise` | 14 |
| `missing` | 0 |

`deep_pass` strong criteria (all required): real mental model (>80 chars, non-boilerplate), `依赖/参见` (dependency/see-also) section with ≥2 links, a real `csharp` example, non-boilerplate overview.

### 3.2 Seed deep pages (5/5 `deep_pass`, zh+en)

| Page | Path (zh) | Layer |
|------|-----------|-------|
| `MBSubModuleBase` | `content/v1.4.5/zh/api/core/MBSubModuleBase.md` | lifecycle root |
| `Game` | `content/v1.4.5/zh/api/core/Game.md` | runtime root container |
| `MBObjectBase` | `content/v1.4.5/zh/api/core/MBObjectBase.md` | object base class |
| `Campaign` | `content/v1.4.5/zh/api/campaign/Campaign.md` | campaign layer |
| `Mission` | `content/v1.4.5/zh/api/mission/Mission.md` | battle layer |

Each page has: real mental model, dependency/risk list, purpose-grouped member notes (not a signature wall), real `csharp` example, bidirectional nav (parent/sibling/child/related). en versions under `en/`.

### 3.3 Type inventory (`tools/data/type-inventory.json`)
- v1.4.5 public types total: **7,144** (zh and en)
- Types with a corresponding page: **7,144** (hasDoc=true)
- **Missing pages: 0**

Conclusion: the gap is not missing pages — it is **7,091 stubs that must be hand-deepened** (stub→handwritten conversion).

### 3.4 Generator retirement (`tools/RETIRED_BODY_GENERATORS.md`)
- Policy: product docs under `content/**` are handwritten only; automation must not invent or bulk-rewrite page prose.
- Emergency override `BANNERLORD_ALLOW_RETIRED_BODY_GEN=1` is **forbidden for product builds / CI / any commit touching `content/**`**.
- Hard-fail guard (top of each retired CLI): exits `process.exit(1)` unless the env var equals `1`. Wired into 10 CLIs; the other 12 named scripts do not exist on disk (product path already cut).
- Retired scripts listed: `generate-class-docs.mjs`, `gen-class-ref.mjs`, `batch-gen-stubs.mjs`, `enhance-stubs.mjs`, `regenerate-method-purposes.mjs`, `normalize-method-purposes.mjs`, `doc-fragments.mjs` (body path), `populate-curated-content.mjs`, `bulk-fix-mental-models.mjs`, etc.

### 3.5 Link audit (T7)
- Scope: 24 handwritten files authored this cycle (architecture pages + module `_index` + 5 seed pages, zh+en).
- Internal links checked: **335**
- **Broken links: 0**

Fix note: `Campaign.md` (zh/en) originally linked `../../save-system/SaveManager` with wrong depth; corrected to `../save-system/SaveManager` (SaveManager actually lives under `api/save-system/`).

### 3.6 Crash boundary (`content/v1.4.5/{zh,en}/architecture/crash-boundary.md`)
Documents 8 crash/save failure modes with correct patterns: world-state mutation must go through `*Action.Apply`, SubModule load-phase constraints, Agent lifecycle, MBObjectManager registration, SaveId/SaveableField consistency, etc. This page is the source of truth for the "Risks" section of every type page in waves H4/H8.

### 3.7 Bidirectional navigation skeleton
- Architecture layering: Foundation (`api/core`, `api/engine`) → Campaign (`api/campaign`) → Mission (`api/mission`) → UI (`api/viewmodel`, `api/gui`) → Save (`api/save-system`).
- Module `_index`: core / campaign / mission mental maps built (hub entry tables + dependency graphs + reading order).
- Seed pages each carry a `## Navigation` section: parent / siblings / child types / related — satisfying the H5 bidirectional tree requirement.

## 4. Known risks & next cycles

1. **Scale**: 7,091 stubs to hand-deepen; one cycle cannot finish — must proceed by module waves (H5–H8).
2. **Full-site link audit**: this cycle audited only the 24 authored files. The site's 36k+ pages carry historical broken links; a full `audit-links.mjs` (scans all `content/`) is costly and should be batched per module in H9.
3. **en seed consistency**: en pages written in sync with zh, but the coverage gate currently runs only on `zh/api`; H3 should extend it to bilingual dual-run.
4. **Module hub completion**: beyond core/campaign/mission, the `engine`/`viewmodel`/`gui`/`save-system` module `_index` pages are not yet built (H7).

## 5. How to re-run acceptance

```bash
# Coverage gate (zh/api)
node tools/handwritten-coverage.mjs --root content/v1.4.5/zh/api

# Type inventory build
node tools/generate-inventory.mjs

# Full-site link audit (scans all content/ by default)
node tools/audit-links.mjs
```

Evidence file locations:
- Coverage: `tools/data/handwritten-coverage.json`
- Type inventory: `tools/data/type-inventory.json`
- Generator retirement policy: `tools/RETIRED_BODY_GENERATORS.md`
- Contract & roadmap: `content/v1.4.5/{zh,en}/architecture/`
