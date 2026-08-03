# Bannerlord Handwritten Manual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Bannerlord developer manual as a hand-written, task-first, reciprocal-tree documentation system with machine-checkable coverage and crash-boundary evidence.

**Architecture:** Preserve the Zola content URLs and use generated JSON only for inventory and navigation structure. Restore the shared policy/report helpers and the two missing navigation CLIs, then author pages by dependency wave from runtime hubs to domain types, Actions, Models, UI, modules, and the long tail. Every wave has a read-only audit and a manual scenario check before the next wave is accepted.

**Tech Stack:** Zola, Markdown, Node.js ESM, Node `node:test`, PowerShell, Bannerlord C# source trees.

## Global Constraints

- All business class prose is handwritten and source-backed; signature-to-prose body generation is forbidden.
- A deep page must contain informative frontmatter, metadata, duty, mental model, when/when-not guidance, clickable dependencies, risks, member timing/side effects, real examples, and reciprocal navigation.
- Family pages must explain the contract and provide a handwritten purpose and typical timing for every covered type.
- Task/module organization is the primary discovery path; A-Z catalogs remain secondary.
- Examples use real acquisition paths such as `Campaign.Current`, `Mission.Current`, event subscription, and SubModule hooks.
- Relative links must resolve; `BROKEN_LINKS=0` is a hard gate.
- Generics in prose use backticks, for example `` `List<Hero>` ``.
- `bannerlord-1.4.5/Bannerlord.Source` is the semantic authority; version differences are explicit notes.
- Do not commit, push, or regenerate product prose unless the user explicitly asks.

## Success Criteria

- H0 tools import successfully and package scripts point only to existing files.
- Section and leaf navigation artifacts are deterministic and reciprocal.
- L0-L1 seed pages are complete in Chinese and English and are linked from the roadmap and module indexes.
- Tests and audits provide exit-code evidence; no completion claim is made while R1 gaps remain.

### Task 1: Restore Shared H0 Policy and Report Contracts

**Files:**
- Create: `tools/lib/handwritten-policy.mjs`
- Create: `tools/lib/report-meta.mjs`
- Test: `tools/tests/handwritten-policy.test.mjs`
- Test: `tools/tests/report-cli.test.mjs`

**Interfaces:**
- `classifyPage(filePath, text) -> { status, reasons }` returns `deep_pass`, `family_entry_pass`, `noise`, or `stub`.
- `extractFamilyEntries(relativePath, text) -> Array<{ namespace, typeName, purpose, timing }>` extracts only explicit table/section entries.
- `extractPageIdentity(filePath, text, context) -> { version, language, namespace, typeName } | null` reads declared metadata.
- `makeTypeIdentity(identity) -> string` creates a stable qualified identity.
- `resolveExplicitAlias(name, aliases) -> string` resolves configured inventory aliases.
- `isR1TargetType(namespace, typeName) -> boolean` excludes documented platform/noise types.
- `checkReport(path, expected) -> boolean`, `reportMetadata(options) -> object`, and `resolveOutputPath(root, arg, fallback) -> string` provide deterministic report checks.

- [ ] Step 1: Read all existing policy and report test fixtures and list every assertion the implementations must satisfy.
- [ ] Step 2: Implement classification from explicit page sections and reject formulaic/placeholder content without rewriting Markdown.
- [ ] Step 3: Implement report metadata hashing/path normalization and read-only `--check` comparison.
- [ ] Step 4: Run `node --test tools/tests/handwritten-policy.test.mjs tools/tests/report-cli.test.mjs` and confirm exit 0.
- [ ] QA: Run `npm run audit:coverage -- --version 1.3.15 --lang zh --out tools/data/r1-coverage-report.json --gap-out tools/data/r1-gap-full.json` and confirm the CLI emits counts instead of a module-resolution error.

### Task 2: Restore Reciprocal Navigation Audits

**Files:**
- Create: `tools/audit-navigation.mjs`
- Create: `tools/generate-page-navigation.mjs`
- Modify: `templates/macros/page-navigation.html` only if the restored data contract requires it.
- Test: `tools/tests/navigation.test.mjs`
- Test: `tools/tests/page-navigation.test.mjs`

**Interfaces:**
- `node tools/audit-navigation.mjs --content-root <root> --section-tree <file> --navigation <file>` exits 0 and prints `NAVIGATION_OK` when route counts and reciprocal edges match.
- `node tools/generate-page-navigation.mjs --content-root <root> --out <file> --navigation <file> [--check]` emits leaf parent/previous/next/related data and fails on stale output in check mode.

- [ ] Step 1: Implement deterministic route collection from `_index.md` directories and leaf Markdown files.
- [ ] Step 2: Implement parent/children symmetry and section page-count checks against `section-tree.json`.
- [ ] Step 3: Implement sorted sibling navigation and route/title metadata using `navigation.json` when available.
- [ ] Step 4: Run `node --test tools/tests/navigation.test.mjs tools/tests/page-navigation.test.mjs` and confirm all fixtures pass.
- [ ] QA: Run `npm run audit:navigation`, `npm run audit:page-navigation`, and confirm both exit 0 on the repository artifacts.

### Task 3: Wire the H0/H1 Package Gates

**Files:**
- Modify: `package.json`
- Modify: `tools/tests/report-cli.test.mjs` only if the script list needs an explicit test command assertion.
- Modify: `README.md` to document the exact gate commands and expected outputs.

- [ ] Step 1: Add `test` as an alias for `test:tools` and keep the existing audit commands pointing at real files.
- [ ] Step 2: Add a README section describing H0 inventory/quality/link/navigation checks without suggesting coverage is complete.
- [ ] Step 3: Run `npm test` and `npm run test:tools`; both must exit 0.
- [ ] QA: Confirm `git diff --check` emits no whitespace errors and `git status --short` lists only intended files.

### Task 4: Regenerate Structural Artifacts

**Files:**
- Modify: `data/section-tree.json`
- Modify: `data/page-navigation.json`
- Modify: `data/navigation.json` only for manually reviewed route/group corrections.

- [ ] Step 1: Run `node tools/generate-section-tree.mjs` against `content` and write the canonical output.
- [ ] Step 2: Run `node tools/generate-page-navigation.mjs` against `content` and write the canonical output.
- [ ] Step 3: Run all three navigation audits in check mode.
- [ ] QA: Run `node tools/audit-links.mjs` and confirm `BROKEN_LINKS=0`; manually inspect three leaf routes for parent, sibling, and related links.

### Task 5: Author the L0-L1 Runtime Hub Seed Set

**Files:**
- Create or replace, in both `content/v1.3.15/zh/api/` and `content/v1.3.15/en/api/`: `core/MBSubModuleBase.md`, `core-extra/Game.md`, `campaign/Campaign.md`, `campaign-ext/CampaignEvents.md`, `campaign-ext/CampaignEventReceiver.md`, `campaign-ext/CampaignBehaviorBase.md`, `campaign-ext/CampaignGameStarter.md`, `campaign-ext/GameModels.md`, `campaign-ext/IDataStore.md`, `campaign-ext/MBObjectBase.md`, `campaign-ext/MBObjectManager.md`, `mission/Mission.md`, `mission/MissionBehavior.md`, `mission-ext/MissionLogic.md`, `mission/Agent.md`, `mission/Formation.md`, `mission/Team.md`, `core-extra/ViewModel.md`, `save-system/SaveManager.md`, `save-system/SaveableFieldAttribute.md`, `save-system/SaveablePropertyAttribute.md`.
- Modify: corresponding `_index.md` files to make task paths and hub relationships visible.

- [ ] Step 1: For each page, locate the authoritative declaration and at least one real call site in `bannerlord-1.4.5/Bannerlord.Source` or the corresponding core source.
- [ ] Step 2: Write the Chinese page with duty, lifecycle, when/when-not guidance, dependencies, risks, member timing, real API acquisition, and reciprocal navigation.
- [ ] Step 3: Write the English page as a semantic translation of the Chinese page, not a generated shell.
- [ ] Step 4: Link each page from its module index, the developer roadmap, and at least one related hub.
- [ ] QA: Run `node tools/audit-doc-quality.mjs content/v1.3.15/zh/api`, `node tools/audit-doc-quality.mjs content/v1.3.15/en/api`, and the coverage reports; S-tier pages must classify as `deep_pass`.

### Task 6: Execute Later Dependency Waves

**Files:**
- Modify/create pages under `content/v1.3.15/{zh,en}/api/{campaign,campaign-ext,mission,mission-ext,viewmodel,gui,core-extra,save-system}` by wave.
- Modify/create architecture and guide pages that explain the same workflows.
- Modify: `tools/data/r1-coverage-report.json`, `tools/data/r1-gap-full.json` as generated evidence only.

- [ ] Step 1: H3 author Hero, MobileParty, Settlement, Clan, Kingdom, MapEvent, TroopRoster, ItemRoster, ItemObject, Equipment, and their bilingual navigation.
- [ ] Step 2: H4 author the Actions family contract and every Action entry, with independent deep pages for high-risk Actions.
- [ ] Step 3: H5 author the Models map and priority Model deep pages, including replacement and null-return risks.
- [ ] Step 4: H6-H8 author quests/issues/menus/conversations, UI/ViewModel patterns, and runnable SandBox/Native examples.
- [ ] Step 5: H9 clear remaining business gaps by namespace, maintaining noise inventories and bilingual parity.
- [ ] QA: After every wave run quality, coverage, links, navigation, page-navigation, and the scenario review; do not mark a type covered from a stub.

### Task 7: Final Evidence Gate

**Files:**
- Create: `tools/data/final-evidence/` reports and scenario notes only after all waves pass.
- Modify: `README.md` with the current evidence package links.

- [ ] Step 1: Run `zola build` and archive the exit code/output tail.
- [ ] Step 2: Run the full tool test suite and all audits, preserving complete tail output.
- [ ] Step 3: Randomly inspect 50 completed class pages and 20 family entries for rejection patterns.
- [ ] Step 4: Ask a fresh review perspective to answer all five manual scenarios from docs only and record cited paths.
- [ ] QA: Announce R1 completion only if the coverage gap is zero, links are zero-broken, S-tier is complete, quality blockers are zero, and the build succeeds.

