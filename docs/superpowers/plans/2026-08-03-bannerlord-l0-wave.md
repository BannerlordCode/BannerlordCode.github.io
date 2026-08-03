# Bannerlord 1.4.5 L0 Handwritten Wave Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 1.4.5 `MBGameManager`, `MBObjectManager`, and `TextObject` stubs with source-backed Chinese and English deep pages that count toward the S-tier handwritten coverage gate.

**Architecture:** Keep each existing URL and section placement. Authors read the 1.4.5 authoritative C# source plus external call sites, then replace the entire page body in both languages with the same technical understanding. Inventory, coverage, link, and quality tools are used only for validation and never to write prose.

**Tech Stack:** Zola Markdown, Bannerlord 1.4.5 C# source, Node.js audit tools.

## Global Constraints

- Every page is handwritten and source-backed; no signature-to-prose generator may write product content.
- Every page must include informative frontmatter, metadata, duty, mental model, when/when-not guidance, clickable dependencies, risks, member timing/side effects, real acquisition paths, and reciprocal navigation.
- The 1.4.5 `Bannerlord.Source/bin` tree is semantic authority; version differences must be explicit when relevant.
- Examples must use real APIs and actual lifecycle access paths; no `SomeValue`, `service = ...`, or empty ellipses.
- Preserve existing URLs and do not commit or revert unrelated worktree changes.

## Task 1: Establish Source and Stub Boundaries

**Files:**
- Read: `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs`
- Read: `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectManager.cs`
- Read: `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`
- Read: `content/v1.4.5/zh/architecture/doc-contract.md`
- Read: `content/v1.4.5/en/architecture/doc-contract.md`

- [x] Record the real constructors, public/protected members, lifecycle callers, save boundaries, and failure edges for the assigned type.
- [x] Confirm all links used by the page already resolve to existing pages before handing off.
- [x] QA: `node tools/audit-links.mjs` must remain at `BROKEN_LINKS=0` after the page pair is written.

## Task 2: Handwrite MBGameManager Pair

**Files:**
- Modify: `content/v1.4.5/zh/api/mission-ext/MBGameManager.md`
- Modify: `content/v1.4.5/en/api/mission-ext/MBGameManager.md`
- Read: `MBGameManager.cs`, `GameManagerBase.cs`, `MBSubModuleBase.cs`, module startup call sites, and the existing mission/campaign navigation pages.

**Interfaces:**
- Consumes: `GameManagerBase.Current`, `Module.CurrentModule`, `MBSubModuleBase`, `Mission`, and save/load game-state callers.
- Produces: a bilingual deep page documenting the manager lifecycle, `Current`, `StartNewGame`, load/end synchronization, subclass hooks, and safe mod integration boundaries.

- [x] Replace the full stub body, including frontmatter description, metadata, one-sentence responsibility, lifecycle mental model, when/when-not guidance, dependency table/graph, risk section, member behavior, real SubModule or game-state examples, and Parent/Sibling/Related navigation.
- [x] Explain why a mod should enter through `MBSubModuleBase` or game-state hooks rather than replacing the global manager or calling lifecycle methods during static initialization.
- [x] Provide matching Chinese and English content, not translated signatures without explanation.
- [x] QA: classify both files as `deep_pass` with the handwritten policy and verify every new link with `node tools/audit-links.mjs`.

## Task 3: Handwrite MBObjectManager Pair

**Files:**
- Modify: `content/v1.4.5/zh/api/campaign-ext/MBObjectManager.md`
- Modify: `content/v1.4.5/en/api/campaign-ext/MBObjectManager.md`
- Read: `MBObjectManager.cs`, `MBObjectBase.cs`, `MBObjectManagerExtensions.cs`, object registration/load call sites, and `Campaign`/`MBObjectBase` documentation.

**Interfaces:**
- Consumes: `MBObjectBase`, `MBObjectManager.Instance`, object-type records, handlers, registration, lookup, and save/load initialization.
- Produces: a bilingual deep page explaining registration ownership, lookup identity, initialization timing, object handlers, and the consequences of duplicate or late registration.

- [x] Replace the full stub body with source-backed lifecycle and member explanations, emphasizing that object registration is infrastructure state rather than a general-purpose mutable dictionary.
- [x] Document real lookup and registration paths, including the initialization prerequisite and the correct owner of runtime mutations.
- [x] Document crash/save risks for null `Instance`, duplicate string IDs, type mismatches, late registration, and retaining objects across unload boundaries.
- [x] QA: both pages classify as `deep_pass`, all linked types exist, and the page pair adds the same qualified identity to the 1.4.5 coverage report.

## Task 4: Handwrite TextObject Pair

**Files:**
- Modify: `content/v1.4.5/zh/api/localization/TextObject.md`
- Modify: `content/v1.4.5/en/api/localization/TextObject.md`
- Read: `TextObject.cs`, `LocalizationManager`, localization XML usage, UI/ViewModel callers, and save-system notes.

**Interfaces:**
- Consumes: localized string IDs or raw values, `SetTextVariable`, `LocalizationManager`, and UI/ViewModel display boundaries.
- Produces: a bilingual deep page explaining deferred localization, variable substitution, copying/equality, and serialization/lifetime behavior.

- [x] Replace the stub with a mental model that distinguishes a localization key from rendered text and explains when resolution occurs.
- [x] Cover the public constructors, variable setters/getters, copy/equality/null helpers, and conversion methods with timing and side effects rather than a signature wall.
- [x] Provide real examples from a `ViewModel` or campaign/UI path and explain why `string` concatenation or resolving before the active localization context is wrong.
- [x] QA: both pages classify as `deep_pass`, contain no reject phrases/placeholders, and pass link audit.

## Task 5: Wave Review and Evidence

**Files:**
- Update: `tools/data/r1-coverage-report-v1.4.5-zh.json`
- Update: `tools/data/r1-gap-full-v1.4.5-zh.json`
- Update: `tools/data/r1-coverage-report-v1.4.5-en.json`
- Update: `tools/data/r1-gap-full-v1.4.5-en.json`

- [x] Run `npm test`, `npm run audit:quality`, `npm run audit:body-writers`, `npm run audit:navigation`, `npm run audit:section-tree`, `npm run audit:page-navigation`, and `npm run audit:links`.
- [x] Regenerate 1.4.5 coverage reports serially, then run each report in `--check` mode to avoid shared-inventory races.
- [x] Verify the three qualified identities leave the S-tier miss list and record before/after counts; do not claim R1 completion while other gaps remain.
- [x] QA: preserve the active goal and report any remaining Zola environment failure separately from documentation correctness.
