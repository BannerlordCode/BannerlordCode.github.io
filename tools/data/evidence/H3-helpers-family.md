# H3 Helpers Family Wave - 2026-08-03

This wave replaces the uncovered `Helpers` namespace catalog with bilingual
handwritten family manuals. The prose was written from the v1.4.5 source under
`../bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers`
and checked against the v1.3.15 public routes. It does not alter the existing
individual leaf bodies.

## Deliverables

| Language | Page | Classified entries |
|---|---|---:|
| Chinese | `content/v1.3.15/zh/api/campaign-ext/helpers/_index.md` | 43 |
| English | `content/v1.3.15/en/api/campaign-ext/helpers/_index.md` | 43 |

The family pages document the static-helper mental model, Campaign/Game/UI
dependencies, Action/Model/Behavior boundaries, crash/save risks, real
`MobileParty.MainParty` and current-settlement acquisition paths, and a
purpose/timing row for every public `Helpers` inventory type.

## Verification

Commands run from `BannerlordCode.github.io`:

```text
node --input-type=module -e "classifyPage + extractFamilyEntries"
  zh: family_entry_pass, entries=43
  en: family_entry_pass, entries=43

node --test tools/tests/*.test.mjs
  tests 25, pass 25, fail 0

node tools/generate-section-tree.mjs
  Sections: 323

node tools/generate-section-tree.mjs --check
  SECTION_TREE_OK routes=323

node tools/generate-page-navigation.mjs --check
  PAGE_NAVIGATION_OK leaves=35890

node tools/audit-navigation.mjs
  CONTENT_SECTIONS=323, TREE_SECTIONS=323, MAX_LANDING_DISTANCE=3
  NAVIGATION_OK

node tools/audit-links.mjs
  FILES=36215, BROKEN_LINKS=0, FILES_WITH_BROKEN=0

node tools/audit-doc-quality.mjs
  Blockers: 0, Warnings: 303

node tools/r1-coverage-report.mjs --version 1.3.15 --lang zh \
  --out tools/_audit_tmp/r1-helpers-repeat.json \
  --gap-out tools/_audit_tmp/gaps-helpers-repeat.json
  r1Target=4796, coveredDeep=64, coveredFamily=229,
  covered=293, gap=4503, coverageRate=6.11%, sTier=62/62
```

The previous fresh report had `coveredFamily=148` and `gap=4584`; the current
repeat is stable at `coveredFamily=229` and `gap=4503`. The discrepancy is
preserved as an audit note rather than treated as final coverage proof until a
single-threaded canonical evidence refresh is intentionally performed.

## Remaining gates

This wave does not complete H3-H10 or final A-G acceptance. The live R1 gap is
still 4,503 types. `zola build` was run with 120-second and 300-second bounds
but did not finish; build success remains unverified. No commit was created.
