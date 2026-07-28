---
title: "Doc Contract — Handwritten-Only Policy and Acceptance"
description: "Hard rules for BannerlordCode docs: H1–H9 sacred constraints, deep/family page MUST fields, auto-reject boilerplate, banned body generators, R1 scope and tool allowlist"
---
# Doc Contract — Handwritten-Only Policy and Acceptance

> **This page is the highest writing and review constraint for the site.** Violations are failures. Any agent, script, or contributor must read this contract before writing class-doc body prose.
>
> The goal is not "a markdown file exists". The goal is that modders can understand mental models, dependencies, and crash boundaries from this site alone, and copy real examples safely.

Chinese is primary. This English page must carry the **same understanding**, not a regenerated shell. Authoritative detail lives in the [zh doc-contract](../../../zh/architecture/doc-contract).

---

## ↑ Parent Navigation

- [Architecture index](./)
- [SDK overview](../sdk-overview)
- [Version home](../)

## 🔀 Sibling Navigation

| Page | Role |
|------|------|
| [SDK overview](../sdk-overview) | Module map and task entry |
| [Module system](../module-system) | SubModule / Behavior lifecycle |
| [Save system](../save-system) | SaveManager and saveable data |
| [Version delta](../version-delta) | Cross-version notes |

## Gold reference pages (quality floor)

| Gold | Path |
|------|------|
| SaveManager | [../api/save-system/SaveManager](../../api/save-system/SaveManager) |
| Hero | [../api/campaign/Hero](../../api/campaign/Hero) |
| Mission | [../api/mission/Mission](../../api/mission/Mission) |
| SDK overview | [./sdk-overview](../sdk-overview) |

---

## 1. Sacred rules H1–H9 (non-negotiable)

| ID | Rule | On violation |
|----|------|--------------|
| **H1** | **All business class doc bodies must be handwritten** (human, or an agent that read source and call sites). File presence ≠ done. | Fail |
| **H2** | **Forbidden:** generating product-ready overview / mental model / method purpose / examples from signatures alone. | Fail |
| **H3** | Every page needs a real **mental model**: what it is, when to use, when not to, how, deps, what goes wrong. | Fail |
| **H4** | **Dependencies** must be explicit (upstream / downstream / events / Action / Model / Save). Crash and save-corruption prevention depends on this. | Fail |
| **H5** | Navigation is a **bidirectional tree**: Parent / Sibling / Children / related types. No one-way dead ends. | Fail |
| **H6** | **No missing business types** in the target set: each type has a handwritten deep page **or** a handwritten family-cluster entry. | Fail |
| **H7** | Organize by **feature module / task**, not an A–Z wall as the only home. | Fail |
| **H8** | Examples must use real APIs and real acquisition paths. Ban `service = ...`, `SomeValue`, wrong type names, empty `// ...`. | Fail |
| **H9** | Existing mass stubs **do not count**. Wave-based **full-page rewrites**. No two-line patches on shells. | Fail |

### One line

> **No signature-filled pages. No boilerplate overviews. No fake examples.** Body prose comes only from reading source and call sites.

---

## 2. Deep page MUST (one FAIL = incomplete)

### 2.1 Frontmatter and metadata

1. Frontmatter: `title`, `description` (informative)
2. Metadata: Namespace / Module / Type / Base / source file path

### 2.2 Mental model and duty

3. One-line responsibility (readable without the type name)
4. **Mental model** (required): lifecycle, who creates/holds, layer, when to use / when not to (with correct alternatives, e.g. `*Action.Apply` vs raw field writes)

### 2.3 Dependencies (clickable)

5. Dependency graph with relative links that exist: upstream, downstream, Events / Behaviors / Actions / Models / Save points

### 2.4 Crash and save risks

6. Risk section when applicable: bad saves, wrong-phase ticks, post-death Agent refs, unregistered ObjectManager objects, Behavior lifetime, empty Model swaps, UI thread/lifecycle → **usages that can crash or corrupt saves**

### 2.5 Members, examples, navigation

7. Member notes: purpose + side effects + call timing for mod-visible critical members. **No signature wall as the only body.**
8. One or two **real** examples with real acquisition paths (`Campaign.Current`, `Mission.Current`, event subscribe, SubModule hooks, …)
9. Nav block: `↑ Parent`, `↔ Sibling`, related types; relative links; targets must exist
10. EN and ZH same understanding (EN may lag; S-tier should stay in sync)

---

## 3. Family cluster page MUST

1. Family mental model and why the family exists  
2. Shared contract and crash surface  
3. **Every type (or public entry)** gets a human purpose line + typical timing  
4. Most dangerous subset links to deep pages  
5. Back-links to module index and roadmap  

**Ban** cluster pages that are only `public static void Apply(...)` signature lists.

---

## 4. Auto-reject list

| Pattern | Why |
|---------|-----|
| `阅读时先通过属性了解状态` | Boilerplate (also reject EN equivalents like "understand state via properties first") |
| Overview only: "`X` is a public type under TaleWorlds…" / `是 TaleWorlds 公开类型` | Zero information |
| Examples with `SomeValue` | Fake data |
| Examples with `service = ...` / `service=...` | Fake acquisition |
| Examples that are only `// ...` | Empty |
| Wrong type names (e.g. `IIScene`) | Did not read source |
| Signature list only, no "when to call" | Signature wall |
| No deps, no risks, no acquisition path | Shell |
| Links to missing pages | Nav fail |
| Two-line patch on a stub shell | Violates H9 |

---

## 5. R1 scope and noise

- **Authority:** usage semantics from full `bannerlord-1.4.5`; core API notes vs `1.3.15`.
- **Must cover:** ~4.5k Core business public types; ~6.1k with SandBox+Native for SP.
- **Noise** (AutoGenerated, third-party, platform providers): inventory + short policy page, no fake long prose, no silent drop.
- **Versions:** one main handbook + notes/S-tier diffs. **No** triple empty shell forests.
- **Language:** ZH first, EN same understanding.
- **Before M0:** no mass long-tail writing. No lower-wave flood while hubs are empty.

---

## 6. Tools: banned vs allowed

### 6.1 Banned product paths (body generation)

Do **not** use these (or equivalents) to produce shippable class-doc body:

- `generate-class-docs` / `generate-class-docs.mjs`
- `gen-class-ref.mjs` body output
- `batch-gen-stubs` / `batch-gen-stubs.mjs`
- `enhance-stubs` / `enhance-stubs.mjs`
- `regenerate-method-purposes` / `regenerate-method-purposes.mjs`
- `doc-fragments` body fill / `doc-fragments.mjs` body path
- `populate-curated-content` / `populate-curated-content.mjs`
- `bulk-fix-mental-models` / `bulk-fix-mental-models.mjs`
- `curate-class-docs` body-generation path
- `improve-stub-quality` / `improve-stub-quality.mjs`
- Any new "signature → overview/example/mental-model" generator

If a script still lives in the repo, it is **not** a product path for class handbook prose.

### 6.2 Allowed (read-only / gates / nav)

- inventory / `generate-inventory`
- `audit-links` (`BROKEN_LINKS=0`)
- `audit-doc-quality` (boilerplate / empty example = blocker)
- handwritten-coverage
- section-tree / navigation generation (structure only)
- dependency edge extract (graph/list only, no prose into `content/`)
- `class-version-diff` / `gen-version-pages` (cross-version API compare pages)
- `gen-llm-txt`

```bash
zola build
node tools/audit-links.mjs
node tools/audit-doc-quality.mjs
```

---

## 7. Link and formatting rules

- Relative links only. Prefer section dirs.
- Generics in prose: backticks, e.g. `` `List<Hero>` ``.
- Full-page rewrite of stubs; keep URLs when possible.
- See-also: module index + one upstream hub + one downstream/related.
- Terms: Campaign, Mission, Behavior, Action, Model.

---

## 8. Reviewer flow

1. Check deep MUST (§2) or family MUST (§3)  
2. Scan auto-reject (§4)  
3. Any FAIL → return to Author; never mark done  
4. No "auto polish" that swaps one boilerplate line for another  

---

## 9. Success line

> Modders find the right module and type by task, understand mental model and deps, copy real examples, know crash/save risks; the tree is fully back-navigable; no empty business public types; no signature-filled fake docs under random audit.

**Markdown file + §4 hit = incomplete.**  
**Banned tool body output = incomplete.**  
**"Coverage done" without evidence = incomplete.**
