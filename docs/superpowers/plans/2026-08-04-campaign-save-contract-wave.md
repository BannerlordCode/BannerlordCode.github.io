# Campaign Behavior Save Contract Wave Implementation Plan

> **For agentic workers:** This documentation wave is source-backed and bilingual. Do not use body generators. Preserve the dirty shared worktree and do not commit unless the user explicitly requests it.

**Goal:** Replace the v1.4.5 save-contract stubs for `CampaignBehaviorDataStore` and `SaveableTypeDefiner`, and add a handwritten bilingual family entry covering `SaveableFieldAttribute`, `SaveablePropertyAttribute`, and `SaveableRootClassAttribute`.

**Architecture:** Keep existing URLs and alphabetical catalogs. Rewrite the two high-value class pages as independent deep pages. Add a task-oriented Saveable metadata family section to both `api/save-system/_index.md` pages; each attribute receives a qualified purpose and timing entry plus a link to its existing identity page. The family section explains the boundary between `CampaignBehaviorBase.SyncData(IDataStore)` and SaveSystem metadata, so family coverage is counted without pretending the untouched leaf stubs are deep pages.

**Tech Stack:** Markdown, Zola routes, Bannerlord 1.4.5 decompiled C# source, Node.js handwritten-policy and R1 coverage audits.

## Global Constraints

- All product prose is manually written from authoritative `bannerlord-1.4.5/Bannerlord.Source` source and call sites.
- Do not run or use `generate-class-docs`, `gen-class-ref`, `batch-gen-stubs`, `enhance-stubs`, `doc-fragments` body paths, or any signature-to-prose writer.
- Preserve existing URLs and the alphabetical child catalogs.
- Every independent page has informative frontmatter, metadata, responsibility, mental model, usage boundaries, dependency links, risk boundaries, real C# acquisition/use examples, and Parent/Sibling/Related navigation.
- The Saveable family entry has a family mental model, shared contract/dependency boundary, shared risk boundary, and handwritten purpose plus timing for all three attributes.
- Use v1.4.5 as authority. Do not present v1.3.15-only APIs as v1.4.5 APIs.
- Do not change navigation data or unrelated dirty files unless a gate proves this wave requires it.
- Do not commit, reset, stash, clean, or overwrite the shared worktree.

---

### Task 1: Rewrite the CampaignBehaviorDataStore deep pages

**Files:**
- Modify: `content/v1.4.5/zh/api/campaign/CampaignBehaviorDataStore.md`
- Modify: `content/v1.4.5/en/api/campaign/CampaignBehaviorDataStore.md`

**Source contract:** Use `CampaignBehaviorDataStore.cs`, `CampaignBehaviorManager.cs`, `CampaignBehaviorBase.cs`, `IDataStore.cs`, `Campaign.cs`, `SaveHandler.cs`, and `TournamentCampaignBehavior.cs` from `bannerlord-1.4.5/Bannerlord.Source`.

**Required content:** Explain the internal per-behavior staging store, `StringId` keying, `BehaviorSaveData` save/load modes, `SaveBehaviorData`, `LoadBehaviorData`, duplicate IDs, fallback name matching, and the clear-after-load boundary. Show a real `CampaignBehaviorBase` with `RegisterEvents` and `SyncData` backed by `CampaignEvents.OnBeforeSaveEvent`/behavior manager flow. Explicitly distinguish this internal bridge from a public mod acquisition API and from Saveable attributes.

**QA:** Both pages contain real `CampaignBehaviorBase`, `CampaignEvents`, `IDataStore`, and `SyncData` paths; at least two dependency links resolve; the example has no placeholder; the risk section covers duplicate `StringId`, key/type drift, load-time side effects, and stale transient objects; the handwritten coverage classifier marks both pages `deep_pass`.

### Task 2: Rewrite the SaveableTypeDefiner deep pages

**Files:**
- Modify: `content/v1.4.5/zh/api/save-system/SaveableTypeDefiner.md`
- Modify: `content/v1.4.5/en/api/save-system/SaveableTypeDefiner.md`

**Source contract:** Use `SaveableTypeDefiner.cs`, `DefinitionContext.cs`, `SaveManager.cs`, `TypeDefinition.cs`, `SaveableLocalizationTypeDefiner.cs`, `SaveableObjectSystemTypeDefiner.cs`, `Game.cs`, `SaveableRootClassAttribute.cs`, `SaveableFieldAttribute.cs`, and `SaveablePropertyAttribute.cs` from `bannerlord-1.4.5/Bannerlord.Source`.

**Required content:** Explain the definition-registration lifecycle, constructor base ID, protected Define* hooks, type/container registration helpers, duplicate-definition risk, and how `SaveManager.InitializeGlobalDefinitionContext` discovers definitions. Use real definer examples (`SaveableLocalizationTypeDefiner`, `SaveableObjectSystemTypeDefiner`) and the `Game` root-class example. Clarify that a definer registers type identity/containers while attributes identify members and local IDs.

**QA:** Both pages contain real `SaveableTypeDefiner`, `SaveManager`, `DefinitionContext`, and a concrete definer path; at least two dependency links resolve; the example is real C#; the risk section covers base-ID collisions, duplicate definitions, unsupported object graphs, and changing persisted IDs; the classifier marks both pages `deep_pass`.

### Task 3: Add the handwritten Saveable attribute family entry

**Files:**
- Modify: `content/v1.4.5/zh/api/save-system/_index.md`
- Modify: `content/v1.4.5/en/api/save-system/_index.md`

**Required content:** Add a task-first section before the alphabetical catalog. Include a family mental model and contract explaining the three attributes, a table with qualified namespace, purpose, and typical timing for each type, links to each existing attribute page, links to `SaveableTypeDefiner`, `SaveManager`, `CampaignBehaviorBase`, and `IDataStore`, and a risk boundary covering stable local IDs, reflection/definition collection, field-vs-property semantics, and why these attributes do not replace behavior `SyncData`.

**QA:** `extractFamilyEntries` recognizes all three qualified `TaleWorlds.SaveSystem` types with handwritten purpose and timing; both family pages classify `family_entry_pass`; the existing alphabetical links remain intact; all new links resolve and both languages express the same contract.

### Task 4: Review and evidence

**Files:**
- Create/update: `.superpowers/sdd/2026-08-04-campaign-save-contract-wave/progress.md`
- Refresh only explicit report outputs under `tools/data/` when running the canonical report commands.

**QA commands:**

```text
npm test
npm run audit:body-writers
npm run audit:quality
npm run audit:links
npm run audit:navigation
npm run audit:section-tree
npm run audit:page-navigation
node tools/handwritten-coverage.mjs --root content/v1.4.5/zh/api/campaign --out .tmp/coverage-save-wave-zh.json
node tools/handwritten-coverage.mjs --root content/v1.4.5/en/api/campaign --out .tmp/coverage-save-wave-en.json
node tools/r1-coverage-report.mjs --version 1.4.5 --lang zh --out .tmp/r1-save-wave-zh.json --gap-out .tmp/r1-save-wave-gap-zh.json
node tools/r1-coverage-report.mjs --version 1.4.5 --lang en --out .tmp/r1-save-wave-en.json --gap-out .tmp/r1-save-wave-gap-en.json
zola build
```

**Success criteria:** The changed pages have no quality blockers, no body-writer violations, and no broken links. The two deep pages and family entries are counted by the explicit reports. Structural gates remain green. `zola build` is reported exactly as observed; a RamDisk canonical-path failure is a build failure, not inferred success. R1/H10 remains incomplete while any R1 gap, curated navigation gap, or required scenario evidence remains.
