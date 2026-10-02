# H0 Live Baseline - 2026-08-02

This is the truthful pre-implementation baseline for the handwritten manual
rebuild. It distinguishes file inventory from qualifying documentation and does
not treat committed report JSON as current evidence.

## Environment

| Item | Value |
|---|---|
| Repository | `C:/WorkSpace/Bannerlord/BannerlordCode.github.io` |
| Branch | `main` |
| HEAD | `a1c5228b6952b279d9253a5251920b4a04201caf` |
| Node.js | `v24.13.0` |
| Zola | `0.22.1` |
| Git | `2.52.0.windows.1` |

Commands:

```powershell
node --version
zola --version
git --version
git rev-parse HEAD
git branch --show-current
```

## Source Inventory And Authority

| Source root | Raw C# files | Effective scanner files | Unique types | Role |
|---|---:|---:|---:|---|
| `../bannerlord-1.3.0` | 4,596 | 4,596 | 5,201 | Earlier, incomplete compatibility source |
| `../bannerlord-1.3.15` | 5,196 | 5,196 | 5,623 | v1.3.15 signature and compatibility source |
| `../bannerlord-1.4.5/Bannerlord.Source` | 8,583 | 8,572 | 7,144 | Complete semantic authority |

The eleven-file v1.4.5 difference is scanner filtering, not a missing source
tree. `Bannerlord.Source` contains `bin`, SandBox, StoryMode, Multiplayer, and
other gameplay modules. Native provenance available in this workspace is
`native-1.2.9` and `native-1.4.5`; there is no sibling `native-1.3.15` tree.

Commands:

```powershell
rg --files ../bannerlord-1.3.0 -g '*.cs'
rg --files ../bannerlord-1.3.15 -g '*.cs'
rg --files ../bannerlord-1.4.5/Bannerlord.Source -g '*.cs'
```

The effective counts and unique types were reproduced by executing
`tools/generate-inventory.mjs` in a Node VM with `writeFileSync` disabled. The
normal CLI was not run because it always writes tracked global report files.

## Live Coverage

The coverage classifiers were executed in memory with report writes disabled.

| Metric | Live value |
|---|---:|
| v1.3.15 Chinese API Markdown files | 5,607 |
| Stub pages | 5,538 |
| Qualifying deep pages | 47 |
| Loose family pages | 11 |
| Family-covered R1 types | 0 |
| Noise pages | 11 |
| Inventory business types | 5,483 |
| R1-extra exclusions | 687 |
| R1 target | 4,796 |
| R1 covered | 47 |
| R1 gap | 4,749 |
| R1 coverage | 0.98% |
| S-tier covered | 43 / 60 |
| S-tier misses | 17 |

Cross-tree classifier snapshot:

| Tree | Deep | Family | Covered / Target | Gap |
|---|---:|---:|---:|---:|
| `v1.3.15/zh` | 47 | 0 | 47 / 4,796 | 4,749 |
| `v1.3.15/en` | 25 | 0 | 25 / 4,796 | 4,771 |
| `v1.4.5/zh` | 5 | 45 | 50 / 6,020 | 5,970 |
| `v1.4.5/en` | 5 | 47 | 52 / 6,020 | 5,968 |

Top stub reasons can overlap:

| Reason | Pages |
|---|---:|
| Boilerplate mental model | 4,148 |
| Incomplete/weak mental model | 1,173 |
| Weak dependencies | 1,173 |
| No real example | 951 |
| `service = ...` placeholder | 325 |
| Formulaic purpose majority | 222 |
| Missing mental-model section | 59 |

### Evidence Drift

| Evidence source | Deep | Family | Covered | Gap | Status |
|---|---:|---:|---:|---:|---|
| `HEAD:tools/data/r1-coverage-report.json` | 74 | 4,722 | 4,796 | 0 | Unsupported by tracked family pages |
| Working `tools/data/r1-coverage-report.json` | 15 | 0 | 15 | 4,781 | Stale relative to current content |
| Live non-writing execution | 47 | 0 | 47 | 4,749 | Current baseline |

The working `handwritten-coverage.json` was produced with the scoped root
`content/v1.3.15/zh/api/campaign-ext`, so it cannot serve as canonical full-API
evidence. Both current reporters use fixed output paths; a scoped run can
overwrite canonical reports.

R1 currently matches by simple type name. Forty-two duplicate-name groups cover
110 inventory entries, so a page for one namespace can falsely credit an
unrelated type with the same name.

## Quality And Links

Commands:

```powershell
node tools/audit-doc-quality.mjs
node tools/audit-links.mjs
```

Observed:

- `audit-doc-quality`: exit 1, 4 blockers and 279 warnings across 36,185 files.
  All four blockers are on `v1.3.15/zh/api/engine/GauntletLayer.md`; the current
  detector treats two real constructor/acquisition examples as placeholder
  titles/method examples.
- Passing a single Markdown file to `audit-doc-quality` reports `Scanned 0
  files` and exits 0. The metadata parser recognizes English `**Type:**` but not
  Chinese equivalents, and its `###` parser can mistake semantic subsections for
  methods. It also misses thousands of explicit generated pages and 655
  `service = ...` placeholders in v1.3.15 API pages.
- `audit-links`: reports `BROKEN_LINKS=317` across 20 files but exits 0. This is
  not an enforceable CI gate yet.

## Navigation

| Metric | Value |
|---|---:|
| Curated `navigation.json` routes | 159 |
| Filesystem section `_index.md` files | 301 |
| `section-tree.json` routes | 117 |
| Section routes missing from generated tree | 184 |
| Markdown files | 36,185 |
| Leaf pages | 35,884 |
| Missing parent edges in curated nav | 0 |
| Parent/child asymmetries in curated nav | 0 |
| Maximum parent steps to language/version landing | 3 |

The curated nav advertises Chinese architecture routes that have no matching
files. Large section templates also render thousands of flat links, duplicate
some sidebar targets, and do not provide contextual leaf sibling navigation.

## Milestone Status

### M0

Not complete. The English contract exists but its Chinese v1.3.15 counterpart
does not. Generator guards are uncommitted user work. Report CLIs clobber fixed
outputs, coverage/link failures are not all nonzero exits, and CI omits quality,
coverage, and navigation freshness gates.

Nine dirty generator guards smoke-tested with exit 1, but the writer inventory
is incomplete. At minimum `fix-entry-examples.mjs`,
`fix-placeholder-examples.mjs`, `fix-zh-execute-placeholder.mjs`, and the
signature-derived `gen-actions-index.mjs` remain unguarded. The committed sample
gate checks only seven names, treats missing scripts as success, and accepts a
`RETIRED` comment without proving runtime behavior.

### M2

Not complete. L0-L2 is 45/49 qualifying deep pages:

- L0: 13/17
- L1: 12/12
- L2: 20/20

Remaining L0 failures are `MBSubModuleBase`, `Game`, `SaveableTypeDefiner`, and
`ViewModel`. No complete documentation-only scenario record exists.

### M5

Not complete. R1 gap is 4,749, stub count is 5,538, broken links are 317,
quality blockers are 4, and no fresh final A-G evidence package exists.

## Protected Pre-Task Worktree Paths

The following paths existed before implementation and must not be reverted:

```text
 M content/v1.3.15/zh/api/campaign-ext/CampaignEventReceiver.md
 M content/v1.3.15/zh/api/campaign-ext/CampaignEvents.md
 M tools/batch-gen-stubs.mjs
 M tools/data/handwritten-coverage.json
 M tools/data/r1-coverage-report.json
 M tools/data/r1-gap-full.json
 M tools/data/type-inventory.json
 M tools/doc-fragments.mjs
 M tools/enhance-stubs.mjs
 M tools/gen-catalog-stubs.mjs
 M tools/gen-class-ref.mjs
 M tools/generate-class-docs.mjs
 M tools/improve-stub-quality.mjs
 M tools/normalize-generated-examples.mjs
 M tools/normalize-method-purposes.mjs
 M tools/regenerate-method-purposes.mjs
?? .build-fix-zola-current.log
?? _audit_l1/
?? tools/_audit_tmp/
?? tools/_diag.mjs
```

For audit-level provenance, `git status --short --untracked-files=all` was also
captured before this file was added; the collapsed directory entries above own
the pre-existing untracked files beneath them.

## H0 Entry Decision

Freeze H3+ content authoring. First make classification shared, reports
non-clobbering, generator retirement complete, failures enforceable, CI honest,
and navigation derivation fresh. Then complete H1 and the four remaining L0
pages before broad family authoring.
