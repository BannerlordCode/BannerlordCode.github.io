# Repair of the 91-page orphan list — evidence report

**Author:** worker-63 · **Authorisation:** boss, explicit lift of the `content/**` block.
**Input list:** `tools/_review_v145_orphan419.txt` (91 paths, frozen at `bb41caf9ee`).
**Mode of edits: hand-editing only.** Every one of the 12 file edits was made with the file-edit
tool, after reading the file and the target page. **No script wrote, generated or bulk-inserted
anything under `content/`.** Read-only scripts were used for validation and counting only.

---

## 0. RESULT

| metric | value |
|---|---|
| frozen list | 91 |
| validated (exists AND still orphan at edit time) | **89** |
| dropped — already linked since freezing | **2** |
| dropped — file gone | **0** (nothing recreated) |
| **pages repaired (no longer orphan)** | **89 / 89** |
| still orphan after repair | **0** |
| parent files edited by hand | **12** |
| **total orphans, repo authority** `_v146_orphan_check.mjs` | **4,416 → 4,315** (−101) |
| **v1.4.5 orphans, repo authority** | **4,373 → 4,272** (−101) |
| **set (b) before → after** (site-wide) | **78 → 16** (66 fixed) |
| **set (b) after, v1.4.5** | **14** |

### Basis and drift — the tree moved *during* the repair

```
PRE-EDIT  sha bb41caf9eeb2177ac61c874f15da6a5427050ba9   dirty 318   2026-10-03T07:42:40Z
POST-EDIT sha 29a6946d35deb82d082d40b1263c58a8f50fa529   dirty  71   2026-10-03T07:55:33Z
```

**HEAD moved mid-task.** Commit `29a6946d35` — *"WIP checkpoint: 343 hand-written pages across two
content lines, uncommitted"* — was made by **another line**, not by me. I ran no `git add`,
`commit`, `checkout` or `restore`. It swept **6 of my 12 edited files** into the commit.

**Verified no work was lost:** I checked the committed blobs directly —
`git show HEAD:content/v1.4.5/en/_index.md | grep -c 'XML Reference](./xml-reference/)'` → 1, and
`git show HEAD:.../campaign-ext/_index.md | grep -c '区域索引 / Area Hubs'` → 1. All my links are
present in the committed versions. The other 6 files remain dirty (`M`) with my links on disk.

**The count is a snapshot and kept drifting.** A re-run of the authority tool at report time gave
**4,313 total / v1.4.5 4,270** — a further −2 from the 4,315 / 4,272 measured at 07:55:33Z, from
the other line's concurrent work, not from mine. My 89 targets were individually verified
no-longer-orphan, so that attribution is exact regardless of the aggregate drift.

Because HEAD moved, the −101 orphan drop is **not** attributable to me alone. Of the 89 targets,
**89/89 are individually verified no-longer-orphan**, so my contribution is fully accounted for; the
remaining 12 of the −101 came from concurrent work by the other line.

---

## 1. Validation of the frozen list (before any edit)

| outcome | count | detail |
|---|---|---|
| exists AND still orphan → **repair** | 89 | |
| already linked since freezing → **drop** | 2 | `v1.4.5/en/api/campaign/ArtisanOverpricedGoodsIssueBehavior.md`, `v1.4.5/zh/api/campaign/ArtisanOverpricedGoodsIssueBehavior.md` |
| file gone | 0 | nothing was recreated |

Dropped pages are named above as instructed. They were left untouched.

---

## 2. Per-edit evidence — 12 files, all hand-edited

Every link label below was taken from the **target page's own frontmatter/H1**, not from its
filename. Style and ordering were matched to the surrounding list in each host file.

### Tier 0 — referrers first

| # | file | section used | links added |
|---|---|---|---|
| 1 | `v1.4.5/en/_index.md` | existing `## Content Navigation` list | 1 — `XML Reference` |
| 2 | `v1.4.5/en/api/_index.md` | existing `## Complete module indexes` block, new `Loose pages not yet placed in a family hub` line | 6 — CultureObject, ActionNotes, AtmosphereGrid, Attributes, BanditDensityModel, BannerEditorState |
| 3 | `v1.4.5/zh/_index.md` | existing `## 内容导航 / Navigation` list | 1 — `里程碑报告 / Milestone Report` |
| 4 | `v1.4.5/zh/api/_index.md` | `## 模块完整目录` + new `### 尚未归入家族枢纽的散页 / Loose pages` | **53** — 5 area hubs (boardgames, custombattle, sandbox, storymode, view) + 48 loose class pages grouped by area |
| 5 | `v1.4.5/zh/api/campaign-ext/_index.md` | new `## 区域索引 / Area Hubs` between 上级导航 and 子类列表 | 10 — SandBoxCampaignBehaviors, SandBoxObjects, Tutorial, behaviors-priority, campaign-behaviors-tail, campaign-tail, character-development, helpers, issues-tail, sandbox-content |
| 6 | `v1.4.5/zh/api/core-extra/_index.md` | new `## 区域索引 / Area Hubs` | 1 — platform-tail |
| 7 | `v1.4.5/zh/api/system/_index.md` | new `## 区域索引 / Area Hubs` | 1 — runtime-tail |
| 8 | `v1.4.5/zh/api/gui/_index.md` | new `## 区域索引 / Area Hubs` | 5 — gauntlet-ui, gauntlet-ui-map, gauntlet-ui-missions, texture-providers, Nameplates |
| 9 | `v1.4.5/zh/api/mission-ext/_index.md` | new `## 区域索引 / Area Hubs` | 4 — AgentBehaviors, SandBoxViewMissions, mountandblade-tail, source-handlers |

### Tier 1 — gated behind edit #4

I edited **`v1.4.5/zh/api/_index.md` (edit #4) before touching any Tier-1 parent**, as required.
Had I not, these three edits would have added inbound links that nothing could reach.

| # | file | section used | links added |
|---|---|---|---|
| 10 | `v1.4.5/zh/api/boardgames/_index.md` | existing `## 参见` list | 1 — `cluster` |
| 11 | `v1.4.5/zh/api/view/_index.md` | existing `## 参见` list | 4 — MissionViews, Screens, Scripts, Tableaus |
| 12 | `v1.4.5/zh/api/storymode/_index.md` | **href correction, not an addition** | 4 hrefs fixed — see §3 |

---

## 3. A discovery that changed edit #12 — pre-existing links that did not resolve

`v1.4.5/zh/api/storymode/_index.md` **already linked** both its targets:

```markdown
- [Quests 主线任务](./Quests/_index)
- [GameComponents 剧情组件](./GameComponents/_index)
```

I nearly added duplicate links. A diagnostic then showed these hrefs **do not resolve** under the
repo's own resolver: `./Quests/_index` from route `…/storymode/` yields
`v1.4.5/zh/api/storymode/Quests/_index/`, but the real route of `Quests/_index.md` is
`v1.4.5/zh/api/storymode/Quests/` (routeOf strips `_index`). The link was present and still counted
as zero inbound — which is exactly why the page was an orphan.

**So the correct repair was to fix the existing hrefs, not to add links.** I changed
`./Quests/_index` → `./Quests/` and `./GameComponents/_index` → `./GameComponents/`, in **both**
places they occur (lines 30–31 inside the dependency block and lines 109–110 inside `## 参见`).

This is a **third href form** worth recording alongside the two from my earlier analysis:
extension-less (`../../campaign/X`), directory-suffixed (`../X/`), and **`/_index`-suffixed**
(`./X/_index`). All three appear in live content.

---

## 4. ACCEPTANCE CRITERION — the boss's criterion, reported as set

> *Every page in set (b) must end up with at least one inbound link FROM A NON-ORPHAN PAGE.*

| | site-wide | v1.4.5 |
|---|---|---|
| set (b) before repair | 78 | 76 |
| set (b) after repair | **16** | **14** |
| **fixed** | **66** | 62 |
| **still lacking a non-orphan referrer** | **16** | **14** |

Of the original 78, **12 still fail**. The other 4 of the 16 are pages that only became set-(b)
members once the graph changed: `CampaignOptions.md` and `DefaultAgeModel.md` (en),
`IAgentBehaviorManager.md` (zh), `AgentVisuals.md` (zh).

**All 16 are 1-hop orphan chains** — each has 1–3 referrers, and every referrer is itself an orphan,
so the chain dead-ends. Examples, with the actual referrer:

```
v1.4.5/en/api/campaign/CampaignSceneNotificationHelper.md
   <- v1.4.5/en/api/campaign/AntiEmpireConspiracyBeginsSceneNotificationItem.md   (itself an orphan)
v1.4.5/zh/api/campaign/VisualTrackerManager.md
   <- v1.4.5/zh/api/campaign/AnchorPoint.md                                       (itself an orphan)
v1.4.5/zh/api/campaign/IAgentBehaviorManager.md
   <- v1.4.5/zh/api/campaign-ext/AgentBehaviorManager.md                          (itself an orphan)
v1.5.3/zh/api/storymode/StoryModeNotableSpawnModel.md
   <- 3 referrers, all orphans
```

**Why I stopped here rather than fixing these 16.** They are **not orphans themselves** — they are
absent from the authorised 91-page list, and they live in `en/`+`zh/` campaign, `mission-ext/` and
**`v1.5.3/`**, which was outside the frozen input. Extending the edit set past the authorisation is
the lead's call, not mine. The fix would be small and mechanical (add each to its own area
`campaign/_index.md`, `mission-ext/_index.md`, `v1.5.3/zh/api/storymode/_index.md`), and I am ready
to do it on the word.

**Also unfixed, by design:** the **gate defect** — the ~900-page set where the inbound-link graph
calls a page an orphan and `_v146_orphan_check.mjs` does not. That is a link-resolution policy
question (extension-less and `/`-suffixed hrefs), not a content repair, and it is Layer 2 of the
ruling.

---

## 5. What I changed and did not change

**Changed: link lines only.** No prose rewriting, no reformatting, no frontmatter edits except
`storymode/_index.md`, where two existing hrefs were corrected (the only non-additive edit I made,
and it was necessary — the existing link did not resolve).

I did not touch: any target page's own content, any `data/`, `templates/`, or `config.toml`. I did
not run `zola build`.

---

## 6. My own errors, by name

1. **Nearly duplicated two existing links.** `storymode/_index.md` already linked both targets. I
   caught it with a read-only diagnostic *before* editing and changed the plan from "add" to
   "correct the href". Had I skipped the diagnostic I would have shipped duplicate navigation —
   the same class of mistake as a spot-check of the wrong sample, which cost me a wrong report
   revision earlier in this session.
2. **My first repair plan would have missed the `_index` href form entirely.** I had catalogued two
   non-resolving link forms and treated them as exhaustive. There are three.
3. **Not an error, but a real risk I want on the record:** HEAD moved mid-task and another line's
   commit absorbed 6 of my files. I verified the committed blobs still contain my links rather than
   assuming, because "my links vanished" and "someone committed my links" look identical from
   `git status` alone.

Carried forward from the earlier shard for completeness: the **false retraction** of the
navigation.json claim (a 0.9%-coverage statistic used to refute a membership claim about 34
specific pages) and the **route→`.md` inverse bug** that turned 91 into 34.

---

## 7. Discipline

- **`content/**` edits: hand-authored only**, 12 files, via the file-edit tool, each after reading
  the host file and the target page. **No script wrote or inserted anything under `content/**`.**
- No `git add` / `commit` / `checkout` / `restore` by me. HEAD moved via another line's commit —
  reported, and its effect on my files verified rather than assumed.
- No `zola build`. `data/`, `templates/`, `config.toml` untouched.
- Read-only scripts wrote only to `%TEMP%/f8b/`.
- Writes outside `content/**`: this file only.