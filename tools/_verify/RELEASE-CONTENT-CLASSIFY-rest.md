# RELEASE-CONTENT-CLASSIFY-rest.md

**worker-72** | 2026-10-07 | read-only classification of modified `content/` files (excluding `content/v1.3.0/en/`)

## Scope

- Snapshot: `tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt`
- Total modified under `content/`: 3,395
- Excluded (`content/v1.3.0/en/`): 2,389
- **Classified here: 1,006 files across 71 buckets**
- Net diff: **+58,554 / −9,141 lines**

## Change-type taxonomy

| Code | Type | Signature |
|------|------|-----------|
| **A** | Section-index link block appended to bucket `_index.md` | Pure addition, 200–1,400 lines, alphabetical class-link list under `<!-- BEGIN SECTION INDEX -->` |
| **B** | Full rewrite: auto-generated → hand-written | Large deletions (100–1,200) + additions; frontmatter `description` rewritten; Overview/Mental Model/Key Properties tables replaced with prose |
| **C** | Section addition to already hand-written pages | Pure addition (20–120 lines); appends `## 怎么用` / `### 怎么拿到它` / `### 典型用法` / `### 最容易踩的坑` |
| **D** | Annotation / unverifiable-warning addition | Tiny (+2–4 lines); inserts `<!-- xml-id-unverifiable: vX.Y.Z -->` + blockquote before code examples |
| **E** | Frontmatter / heading / link-label fix | Tiny (±1–4 lines); title/description corrections, heading renames, bilingual→English link text |
| **F** | Version landing-page rewrite | Medium (+68/−42); full content replacement of `content/vX.Y.Z/_index.md` |
| **G** | Bullet-list enrichment | Tiny (+1–3 lines); adds `怎么拿到它` / `典型用法` / `最容易踩的坑` bullets to existing lists |

## Per-bucket classification

### Type A — Section-index link block appended to `_index.md` (pure addition)

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.4.5/en/api/campaign | 1 (_index) | +1433/−0 | `<!-- BEGIN SECTION INDEX -->` block |
| v1.4.5/zh/api/campaign | 1 (_index) | +1317/−0 | Same pattern, zh |
| v1.4.5/zh/api/campaign-ext | 1 (_index) | +851/−0 | |
| v1.4.5/zh/api/mission-ext | 1 (_index) | +679/−0 | |
| v1.4.5/zh/api/viewmodel | 1 (_index) | +599/−0 | |
| v1.4.5/zh/api/gui | 1 (_index) | +277/−0 | |
| v1.4.6/zh/api/gui | 5 | +272/−0 | Same pattern across 5 files |

### Type B — Full rewrite: auto-generated → hand-written

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.4.5/en/api/mission-ext | 45 | +5097/−4431 | Largest rewrite bucket; LobbyClient, LineFormation, MissionScreen, GameNetwork, RangedSiegeWeapon, MPLobbyVM, etc. |
| v1.4.5/zh/api/save-system | 44 | +4506/−1833 | DefinitionContext, ContainerSaveData, EnumDefinition, etc. |
| v1.4.5/zh/api/localization | 21 | +1693/−229 | NumeralExpression, FunctionCall, etc. |
| v1.4.5/zh/api/gameplay | 12 | +1229/−183 | SandBoxEditorMissionTester, MapAudioManager, etc. |
| v1.4.5/zh/api/mission | 30 | +2994/−363 | Mix of rewrites and section additions |
| v1.4.5/zh/api/campaign-ext | 41 | +1887/−454 | Mix |
| v1.4.5/en/api/mission | 27 | +3846/−193 | Mix |
| v1.4.5/en/api/campaign | 35 | +2034/−152 | Mix |
| v1.4.5/en/api/campaign-ext | 27 | +193/−113 | Mostly section additions + some rewrites |
| v1.4.5/en/api/viewmodel | 1 | +92/−83 | KingdomGiftFiefPopupVM |
| v1.3.15/en/api/mission-ext | 52 | +4091/−152 | CrosshairWidget, CharacterTableauWidget, BattleEndLogic + many section additions |

### Type C — Section addition to hand-written pages (pure addition)

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.4.5/zh/api/campaign | 134 | +6799/−2 | PartyMoraleModel, KingdomDecisionProposalBehavior, etc. |
| v1.5.3/zh/api/storymode | 92 | +4564/−1 | WeakenEmpireQuestBehavior + 91 others |
| v1.3.0/zh/api/core-extra | 41 | +1172/−0 | AsyncRunner, AgentControllerType, AssemblyLoader, etc. |
| v1.3.0/zh/api/mission-ext | 20 | +876/−0 | |
| v1.4.5/zh/api/core-extra | 27 | +629/−1 | |
| v1.4.6/zh/api/campaign | 9 | +469/−2 | IDataStore, CampaignBehaviorBase, etc. |
| v1.5.3/zh/api/campaign | 12 | +442/−0 | |
| v1.4.6/zh/api/mission | 4 | +288/−0 | |
| v1.4.6/zh/api/save-system | 5 | +260/−0 | |
| v1.5.3/zh/api/save-system | 4 | +165/−2 | |
| v1.4.6/zh/api/campaign-ext | 3 | +164/−0 | |
| v1.4.6/zh/api/mission-ext | 3 | +143/−2 | |
| v1.4.5/en/api/core-extra | 9 | +143/−8 | |
| v1.5.3/zh/api/localization | 19 | +582/−0 | MBTextModel, LanguageSpecificTextProcessor, etc. |
| v1.5.3/zh/api/mission | 2 | +84/−0 | |
| v1.5.3/zh/api/gui | 2 | +89/−0 | |
| v1.3.15/en/api/campaign-ext | 8 | +181/−13 | |
| v1.3.15/zh/api/campaign-ext | 7 | +164/−10 | |
| v1.3.15/en/api/core-extra | 5 | +80/−4 | |
| v1.3.15/zh/api/mission-ext | 4 | +195/−5 | |
| v1.5.3/zh/api/core-extra | 3 | +116/−0 | |
| v1.5.3/zh/api/campaign-ext | 2 | +73/−0 | |
| v1.4.6/zh/api/core | 2 | +102/−0 | |
| v1.4.6/zh/api/localization | 1 | +54/−0 | |
| v1.4.6/zh/api/engine | 1 | +47/−0 | |
| v1.5.3/zh/api/engine | 1 | +46/−0 | |
| v1.5.3/zh/api/core | 1 | +51/−0 | |
| v1.3.15/zh/api/core-extra | 5 | +44/−0 | |
| v1.4.5/zh/api/core | 2 | +4/−0 | |
| v1.4.5/en/api/core | 3 | +5/−1 | |
| v1.3.15/en/api/campaign | 4 | +7/−1 | |
| v1.3.15/zh/api/campaign | 3 | +6/−0 | |
| v1.3.15/zh/api/system | 1 | +4/−0 | |
| v1.3.15/en/api/system | 1 | +4/−0 | |
| v1.3.15/zh/api/save-system | 1 | +2/−0 | |
| v1.3.15/zh/api/localization | 1 | +2/−0 | |
| v1.3.15/zh/api/core | 1 | +2/−0 | |
| v1.3.15/en/api/localization | 1 | +2/−0 | |
| v1.3.15/en/api/core | 1 | +2/−0 | |

### Type D — Annotation / unverifiable-warning addition

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.3.15/zh/architecture | 1 | +2/−0 | crash-boundaries.md |
| v1.3.15/en/architecture | 1 | +2/−0 | |
| v1.3.15/en/api/campaign | 2 | +4/−0 | PartyBase, MobileParty, Town |
| v1.4.7/en/api/campaign | 1 | +2/−0 | IFaction |

### Type E — Frontmatter / heading / link-label fix

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.4.5/en/api/final | 1 | +4/−4 | Heading rename + bilingual→English link text |
| v1.4.6/en/architecture | 1 | +1/−1 | Frontmatter title fix |

### Type F — Version landing-page rewrite

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.4.5/zh/_index.md | 1 | +68/−42 | Full rewrite from v1.3.15-era text to v1.4.5 |

### Type G — Bullet-list enrichment (v1.4.7)

| Bucket | Files | +/− | Notes |
|--------|-------|-----|-------|
| v1.4.7/zh/api/core-extra | 1 | +2/−0 | ViewModel.md — adds 怎么拿到它/典型用法 bullets |
| v1.4.7/zh/api/mission | 1 | +3/−0 | MissionBehavior.md |
| v1.4.7/zh/api/campaign-ext | 1 | +1/−0 | |
| v1.4.7/zh/api/campaign | 1 | +2/−0 | |
| v1.4.7/en/api/campaign-ext | 1 | +2/−0 | |

## Representative diff samples

| File | Type | +/− | What changed |
|------|------|-----|--------------|
| `v1.4.5/en/api/campaign/_index.md` | A | +1433/−0 | Appended `<!-- BEGIN SECTION INDEX -->` with 1,400+ alphabetical class links |
| `v1.4.5/en/api/mission-ext/LobbyClient.md` | B | +266/−1139 | Full rewrite: auto-gen boilerplate → hand-written Overview + Mental Model |
| `v1.4.5/zh/api/campaign/_index.md` | A | +1317/−0 | Appended alphabetical link list |
| `v1.4.5/en/api/mission-ext/LineFormation.md` | B | +257/−617 | Full rewrite |
| `v1.3.0/zh/api/campaign-ext/AccessObject.md` | C | +41/−0 | Appended `## 怎么用` section with 怎么拿到它/典型用法/最容易踩的坑 |
| `v1.4.5/en/api/mission-ext/MissionScreen.md` | B | +317/−467 | Full rewrite |
| `v1.5.3/zh/api/storymode/WeakenEmpireQuestBehavior.md` | C | +38/−0 | Appended `## 怎么用` section |
| `v1.4.5/zh/api/viewmodel/_index.md` | A | +599/−0 | Appended alphabetical link list |
| `v1.4.6/zh/api/core-extra/ViewModel.md` | C | +69/−0 | Appended `## 怎么用` section |
| `v1.3.15/en/api/mission-ext/CrosshairWidget.md` | B | +101/−3 | Rewrote Overview + Mental Model sections |
| `v1.4.5/zh/api/save-system/DefinitionContext.md` | B | +134/−38 | Full rewrite (frontmatter + all sections) |
| `v1.4.5/en/api/mission-ext/GameNetwork.md` | B | +131/−552 | Full rewrite |
| `v1.3.15/zh/architecture/crash-boundaries.md` | D | +2/−0 | Added `xml-id-unverifiable` warning |
| `v1.4.5/en/api/final/_index.md` | E | +4/−4 | Heading rename + link-label fix |
| `v1.4.6/en/architecture/_index.md` | E | +1/−1 | Frontmatter title fix |
| `v1.4.5/zh/api/campaign/PartyMoraleModel.md` | C | +81/−0 | Appended `## 怎么用` section |
| `v1.3.0/zh/api/core-extra/AsyncRunner.md` | C | +52/−0 | Appended `## 怎么用` section |
| `v1.4.5/zh/api/localization/NumeralExpression.md` | B | +100/−10 | Full rewrite |
| `v1.4.6/zh/api/campaign/IDataStore.md` | C | +74/−0 | Appended `## 怎么用` section |
| `v1.4.5/zh/api/gui/_index.md` | A | +277/−0 | Appended alphabetical link list |
| `v1.4.5/zh/_index.md` | F | +68/−42 | Version landing-page rewrite |
| `v1.4.7/zh/api/mission/MissionBehavior.md` | G | +3/−0 | Added 怎么拿到它/典型用法 bullets |
| `v1.3.15/en/api/campaign/PartyBase.md` | D | +2/−0 | Added `xml-id-unverifiable` warning |
| `v1.4.5/en/api/viewmodel/KingdomGiftFiefPopupVM.md` | B | +92/−83 | Full rewrite (namespace fix + content) |

## Summary

| Type | Description | Est. files | Est. +/− |
|------|-------------|------------|----------|
| A | Section-index link block on `_index.md` | ~12 | ~6,200/−0 |
| B | Full rewrite auto-gen → hand-written | ~250 | ~28,000/−9,000 |
| C | Section addition to hand-written pages | ~700 | ~24,000/−100 |
| D | Annotation / unverifiable-warning | ~5 | +10/−0 |
| E | Frontmatter / heading fix | 2 | +5/−5 |
| F | Version landing-page rewrite | 1 | +68/−42 |
| G | Bullet-list enrichment | 5 | +10/−0 |

**Dominant pattern:** The release is primarily a **documentation quality upgrade** — converting auto-generated class-reference stubs into hand-written pages with mental models, usage examples, and pitfall warnings (Type B), and appending "how to use" sections to pages that already had hand-written content (Type C). A secondary pattern is the addition of alphabetical section indexes to bucket `_index.md` files (Type A) for better navigation. The remaining changes are minor fixes (D–G).
