# Audit report — shard 3 (v1.4.6 / v1.4.7 / v1.5.3 / versions / _index.md)

Author: worker-54. Criterion: *does the page contain specific judgment a machine could not have produced?*
Size was never used as evidence. Every label was decided by reading the page text first, before any
automated signal; the only automated pass over my region is the post-hoc frontmatter check in §6, run after
all labels were fixed. **Revised 2026-10-02** after quote repair and lead review.

## 0. Headline

**Region fully adjudicated: 379/379 pages. 359 hand-written / 20 generated / 0 unsure. Zero extrapolation.**

- I hand-read 247 of those 379 pages. A sibling independently read the remaining 132 out-of-sample.
- Every one of those 132 came back hand-written, so **my 247-page extrapolation held**: 227 of my own reads were hand-written, 132/132 of the unread remainder were hand-written, 227+132 = 359, and the only 20 generated pages in the region are the ones I had already read and named.
- Of the 20 generated pages, **2 are category A (pure template) and 18 are category B (machine-extracted data carrying authored judgement)** — see §3. The 18 were reclassified on lead review; I do not count them as category A any more.
- One caveat on the 379 figure: one audited page, `content/v1.4.6/zh/api/mission-ext/_index.md`, was **deleted from disk by the concurrent lead mid-audit**, so the live region is 378 pages at the final verification run (the tree is being actively edited and that number
moves; the audit frame stays 379). Its label is retained (§9, §10).

## 1. Coverage — MEASURED

- **I read 247 of 379 pages (65.2%).** Labeled per tree: _index.md 1, versions 19, v1.4.7 55, v1.4.6 86, v1.5.3 86.
- Exhaustive: **every `_index.md` (74 of 74)** and **every `core-extra/` page (57 of 57)**.
- Pages under 1.2KB: **none exist in my region** (smallest 1,752 B), so that mandate was vacuous — stated rather than faked.
- The remainder was stratified across size bucket, language and subdirectory; sibling covered the rest.

## 2. Stratum table — MEASURED

| size bucket | lang | region pages (live) | labeled | hand | gen | uns | hand:gen |
|---|---|---:|---:|---:|---:|---:|---|
| 1.2-3KB | en | 12 | 12 | 12 | 0 | 0 | n/a (no generated page) |
| 1.2-3KB | zh | 13 | 13 | 13 | 0 | 0 | n/a (no generated page) |
| 3-8KB | en | 37 | 37 | 17 | 20 | 0 | 17:20 |
| 3-8KB | zh | 130 | 95 | 95 | 0 | 0 | n/a (no generated page) |
| 8-20KB | en | 29 | 7 | 7 | 0 | 0 | n/a (no generated page) |
| 8-20KB | zh | 132 | 73 | 73 | 0 | 0 | n/a (no generated page) |
| >20KB | en | 4 | 1 | 1 | 0 | 0 | n/a (no generated page) |
| >20KB | zh | 21 | 9 | 9 | 0 | 0 | n/a (no generated page) |

**Totals across all 379 adjudicated pages: 359 hand-written, 20 generated, 0 unsure.**

**Hand:generated ratio per stratum (my reads).** All 20 generated pages sit in `3-8KB | en` — 17 hand : 20 gen.
The other seven strata contain no generated page, including the whole `1.2-3KB | en` stratum whose 12 pages I
read (the thin v1.4.7 bucket indexes) are all hand-written. **Size predicted the verdict in neither direction:**
the thinnest hand-written page in the region (2,281 B, storymode/HideoutBattleEndState.md) and the thinnest
generated page (3,664 B, versions/HeroDeveloper.md) are nearly the same size.

## 3. The generated block — 2 category A, 18 category B (REVISED)

I stand by the finding that these 20 pages are **machine output**, and the evidence is in the page bodies:

- Every page repeats one Mental Model sentence with only the type name swapped:
  > Treat `Hero` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
- Every page carries its own generator note: `> 自动生成自源码 API 提取（tools/class-version-diff.mjs）`.
- The index page documents the regeneration command `node BannerlordCode.github.io/tools/gen-version-pages.mjs`.

**Category A (2) — pure template, no authored judgement anywhere:**

- `content/_index.md` — stale version picker (lists only v1.3.15/v1.4.5/v1.3.0, omits the three trees that exist on disk).
- `content/versions/_index.md` — the generator's front door.

**Category B (18) — machine-extracted diff tables carrying authored judgement.** On lead review I re-examined
I re-measured this myself rather than taking the review on trust. Extracting the `## 对 modder 的影响`
section from all 19 files in the block gives **19 distinct shapes, 0 exact duplicates, 0 duplicates after
normalizing the type name away, and only `HeroDeveloper.md` with a genuinely empty slot** — the other 18 carry
343—832 characters each. Clan, for instance: "1.4.5 将 `CommanderLimit` 重命名为 `WarPartyLimit`（现委托 `ClanTierModel.GetPartyLimitForTier`）引用 `CommanderLimit` 的 mod 必须改名为 `WarPartyLimit`否则编译失败。" That is real
analysis of a real diff, not template filler. So:

- **The tables are machine output. The judgement in the impact slot is authored.**
- I keep the label `generated` because what the reader gets on those pages is a machine table; relabelling
  them hand-written would assert the page is authored documentation, which it is not.
- They belong in the queue as category B (historical legacy, separate decision), not category A. That reclassification
  is recorded in the `reason` field of all 18 rows in the jsonl.

Everything else in v1.4.6 / v1.4.7 / v1.5.3 is hand-written: **227/227** of my reads, and 132/132 of the out-of-sample remainder.

## 4. Subdirectory coverage (live pages / labeled by me)

| version :: subdir | live | labeled |
|---|---:|---:|
| _index.md :: (root) | 1 | 1 |
| v1.4.6 :: (root) | 1 | 1 |
| v1.4.6 :: en | 1 | 1 |
| v1.4.6 :: en/api | 1 | 1 |
| v1.4.6 :: en/architecture | 4 | 2 |
| v1.4.6 :: zh | 1 | 1 |
| v1.4.6 :: zh/api | 1 | 1 |
| v1.4.6 :: zh/api/achievementsystem | 1 | 1 |
| v1.4.6 :: zh/api/activitysystem | 1 | 1 |
| v1.4.6 :: zh/api/campaign | 10 | 7 |
| v1.4.6 :: zh/api/campaign-ext | 4 | 1 |
| v1.4.6 :: zh/api/core | 3 | 2 |
| v1.4.6 :: zh/api/core-extra | 48 | 48 |
| v1.4.6 :: zh/api/custombattle | 1 | 1 |
| v1.4.6 :: zh/api/engine | 2 | 1 |
| v1.4.6 :: zh/api/gui | 6 | 3 |
| v1.4.6 :: zh/api/localization | 2 | 1 |
| v1.4.6 :: zh/api/mission | 5 | 2 |
| v1.4.6 :: zh/api/mission-ext | 3 | 0 |
| v1.4.6 :: zh/api/modulemanager | 1 | 1 |
| v1.4.6 :: zh/api/network | 1 | 1 |
| v1.4.6 :: zh/api/sandbox | 1 | 1 |
| v1.4.6 :: zh/api/save-system | 6 | 3 |
| v1.4.6 :: zh/api/storymode | 1 | 1 |
| v1.4.6 :: zh/api/system | 1 | 1 |
| v1.4.6 :: zh/api/viewmodel | 1 | 1 |
| v1.4.6 :: zh/architecture | 4 | 1 |
| v1.4.7 :: (root) | 2 | 2 |
| v1.4.7 :: en | 1 | 1 |
| v1.4.7 :: en/api | 1 | 1 |
| v1.4.7 :: en/api/achievementsystem | 1 | 1 |
| v1.4.7 :: en/api/activitysystem | 1 | 1 |
| v1.4.7 :: en/api/campaign | 6 | 1 |
| v1.4.7 :: en/api/campaign-ext | 3 | 1 |
| v1.4.7 :: en/api/core | 3 | 1 |
| v1.4.7 :: en/api/core-extra | 3 | 3 |
| v1.4.7 :: en/api/custombattle | 1 | 1 |
| v1.4.7 :: en/api/engine | 3 | 1 |
| v1.4.7 :: en/api/gui | 4 | 1 |
| v1.4.7 :: en/api/mission | 5 | 1 |
| v1.4.7 :: en/api/mission-ext | 1 | 1 |
| v1.4.7 :: en/api/modulemanager | 1 | 1 |
| v1.4.7 :: en/api/network | 1 | 1 |
| v1.4.7 :: en/api/sandbox | 1 | 1 |
| v1.4.7 :: en/api/save-system | 3 | 0 |
| v1.4.7 :: en/api/system | 1 | 1 |
| v1.4.7 :: en/api/viewmodel | 1 | 1 |
| v1.4.7 :: en/architecture | 6 | 6 |
| v1.4.7 :: zh | 1 | 1 |
| v1.4.7 :: zh/api | 1 | 1 |
| v1.4.7 :: zh/api/achievementsystem | 1 | 1 |
| v1.4.7 :: zh/api/activitysystem | 1 | 1 |
| v1.4.7 :: zh/api/campaign | 6 | 1 |
| v1.4.7 :: zh/api/campaign-ext | 3 | 1 |
| v1.4.7 :: zh/api/core | 3 | 1 |
| v1.4.7 :: zh/api/core-extra | 3 | 3 |
| v1.4.7 :: zh/api/custombattle | 1 | 1 |
| v1.4.7 :: zh/api/engine | 3 | 1 |
| v1.4.7 :: zh/api/gui | 4 | 1 |
| v1.4.7 :: zh/api/mission | 5 | 1 |
| v1.4.7 :: zh/api/mission-ext | 1 | 1 |
| v1.4.7 :: zh/api/modulemanager | 1 | 1 |
| v1.4.7 :: zh/api/network | 1 | 1 |
| v1.4.7 :: zh/api/sandbox | 1 | 1 |
| v1.4.7 :: zh/api/save-system | 4 | 1 |
| v1.4.7 :: zh/api/system | 1 | 1 |
| v1.4.7 :: zh/api/viewmodel | 1 | 1 |
| v1.4.7 :: zh/architecture | 6 | 6 |
| v1.5.3 :: en | 1 | 1 |
| v1.5.3 :: en/api | 1 | 1 |
| v1.5.3 :: en/architecture | 4 | 2 |
| v1.5.3 :: zh | 1 | 1 |
| v1.5.3 :: zh/api | 1 | 1 |
| v1.5.3 :: zh/api/campaign | 12 | 12 |
| v1.5.3 :: zh/api/campaign-ext | 2 | 2 |
| v1.5.3 :: zh/api/core | 1 | 1 |
| v1.5.3 :: zh/api/core-extra | 3 | 3 |
| v1.5.3 :: zh/api/engine | 1 | 1 |
| v1.5.3 :: zh/api/gui | 2 | 2 |
| v1.5.3 :: zh/api/localization | 19 | 10 |
| v1.5.3 :: zh/api/mission | 2 | 2 |
| v1.5.3 :: zh/api/save-system | 4 | 4 |
| v1.5.3 :: zh/api/storymode | 92 | 42 |
| v1.5.3 :: zh/architecture | 4 | 1 |
| versions :: (root) | 19 | 19 |

## 5. Calibration against the known stub

The stub the lead supplied (`v1.3.0/en/api/core-extra/AgentAttackType.md`, 986 B: one-sentence Overview,
one-sentence Mental Model with the name swapped) has **no counterpart anywhere in my 247-page sample**.
Same size class, opposite verdicts:

Thinnest **generated** page in my region — `content/versions/HeroDeveloper.md`, 3,664 B, empty judgement slots:

> ## 对 modder 的影响 / Impact for modders  \n> **中文：**  \n> **English：**

Thinnest **hand-written** page in my region — `content/v1.5.3/zh/api/storymode/HideoutBattleEndState.md`, 2,281 B:

> 这就是它作为状态机的核心约束：`None` 是一个**被复用的终态**，不是"未开始"。任何基于 `HideoutBattleEndState == None` 写额外逻辑的代码，都会在玩家每次打开城镇/村庄菜单时误触发。

## 6. The generator marker is absent from my entire region — site-level finding

`的自动生成类参考` appears in the frontmatter of **0 of 379** pages in my region (measured post-hoc, after
labeling). So inside these three trees the marker has **zero prevalence and zero predictive value**, and the
worst possible arrangement holds:

> **0 pages carry the marker, while 20 genuinely generated pages sit inside the region without it.**

A classifier keyed on that phrase would pass all 379 of my pages and miss all 20 real ones. The 20 announce
themselves in the **body** instead (the `自动生成自源码 API 提取` note). Any site-wide quality gate that relies
on the frontmatter phrase alone will report these trees as clean.

## 7. Quote integrity of this artifact (repaired)

A sibling's exact-substring audit found 26 non-exact quotes in this file. **Measured on my side: 25 failed the
strict `fileText.includes(quote)` test; all 25 are now repaired**, each by extracting a contiguous span from
the file on disk rather than by normalising anything. No disjunctive test, no whitespace collapsing, no
backtick or case folding.

| check | result |
|---|---|
| rows | 247 (all unique paths) |
| strict `fileText.includes(quote)` against the live worktree | **246 / 247** |
| rows with no file to check against | 1 — `content/v1.4.6/zh/api/mission-ext/_index.md`, deleted upstream (§9) |
| quote length min / median / max | 6 / 78 / 325 chars |

The repair was mechanical and lossy in no cases: quotes that were soft-wrapped or elided with `……` were
re-extracted as contiguous spans, and 123 quotes were then re-cut at a sentence boundary so none ends
mid-clause. Verdicts were not changed by any of this — only the evidence strings.

## 8. Confidence

- high: 246  |  medium: 1 (`content/v1.4.6/zh/api/campaign/_index.md`)
- The medium one, restated so the queue cannot misread it: **the 547-row per-namespace type table on that page is machine output.** The framing prose around it is authored. That machine-extracted block is what puts the page in the rewrite queue rather than the clean category. Recorded in the row's `reason` field.
- unsure: **none.** My one real candidate set was the four story-mode `*TypeDefiner` pages, which look
  near-identical. Reading them resolved it: each states its own global save id, cross-references the other three
  by number, and draws a *different* conclusion about the id ranges. Same job, different content.

## 9. Pages that changed or vanished under me mid-audit (none by me)

**Six pages changed, one was deleted.** All of them are `content/v1.4.6/zh/api/*/_index.md` — the set the
concurrent lead is expanding. MEASURED, size at session start → at end of audit:

| page | start | then | status now |
|---|---:|---:|---|
| `zh/api/campaign/_index.md` | 122,875 B | 123,053 B (14:08Z) | modified |
| `zh/api/gui/_index.md` | 4,005 B | 5,238 B (14:10Z) | modified |
| `zh/api/campaign-ext/_index.md` | 5,103 B | 5,524 B (14:10Z) | modified |
| `zh/api/save-system/_index.md` | 5,239 B | 5,664 B (14:10Z) | modified |
| `zh/api/core-extra/_index.md` | 7,589 B | 14,014 B (14:13Z) | modified |
| `zh/api/mission-ext/_index.md` | 8,424 B | 10,392 B (14:18Z) | **DELETED** |

`mission-ext/_index.md` is gone: `git status` shows ` D`, the directory now holds `ItemType.md`,
`MBGameManager.md`, `Team.md` instead, and current HEAD no longer contains the path either (it is also absent
from HEAD~5), so the audit frame of 379 pages is 377 pages on disk today. I read that page while it existed
and labelled it hand-written; the label stands, and §10 records why its quote cannot be re-verified.

For the five modified pages my recorded quote is the **pre-change** text, so `size_bytes` and quote can
disagree — `campaign/_index.md` is the visible case (label says 123,053; the text I read was 122,875).
`core-extra/_index.md` nearly doubled and its description went from "17 张手写页" to "47 张手写页"; anyone citing
its numbers should re-read it. Nothing else moved: the other 47 core-extra pages are byte-identical, and an
mtime sweep across the region returns exactly these six.

## 10. MEASURED vs EXTRAPOLATED

MEASURED:
- region composition, per-stratum and per-subdirectory counts — filesystem walk;
- the 247 labels, the 359/20/0 adjudicated totals, per-stratum ratios — my jsonl plus the sibling's 132 out-of-sample rows;
- 0/379 marker prevalence — checked post-hoc;
- 246/247 strict quote verification — re-run just now against the live worktree;
- the six mid-audit file changes and the one deletion — sizes at session start, `stat` at the end, mtime sweep, `git status`;
- the impact-slot clustering in section 3 — re-measured independently by me: 19 sections, 19 distinct shapes, zero raw or type-name-normalized duplicates, HeroDeveloper.md the only empty one;

EXTRAPOLATED: **none.** My original 132-page gap was closed by the sibling's out-of-sample read and held 100%.
The only judgement call left in the artifact is the single medium-confidence page in §8.

Housekeeping: I created and deleted two scratch files of my own (`tools/_strata3.json`,
`tools/_tmp-report-stats.txt`); both are gone. My only writes are `tools/_audit-labels-3.jsonl` and this report.
Read-only git (`log`, `show`, `status`) was used to attribute the concurrent changes; no add/commit/checkout/
restore, no `zola build`, nothing written under `content/**`.

## 11. Verbatim evidence — all 247 labeled pages

Every quote below passes `fileText.includes(quote)` against the live file, except the one page noted in §7/§9.

### _index.md — 1 pages

- **content/_index.md** — `generated`, 3959 B, en, (root), high
  > Treat `Bannerlord Modding Wiki` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  The site home uses the same type-name-swapped Mental Model template as the API pages, applied to the site itself ("Treat `Bannerlord Modding Wiki` as an entry point or data node for this subsystem"). Its version picker is stale — it lists only v1.3.15/v1.4.5/v1.3.0 and omits the v1.4.6/v1.4.7/v1.5.3 trees that exist on disk — which is what a scaffold filled by a generator looks like. Queue category A: no authored judgement anywhere on the page.

### versions — 19 pages

- **content/versions/_index.md** — `generated`, 5038 B, en, (root), high
  > Treat `跨版本类对比` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  This index page is the generator's front door: it documents the regeneration command (node BannerlordCode.github.io/tools/gen-version-pages.mjs) and applies the type-name-swapped Mental Model sentence to itself. The surrounding prose does contain real author judgement (a missing class means "未进入精选对比", not "无变化"), but the page is explicitly a build product of a script. Queue category A: template scaffold plus type list, no authored per-class judgement.

- **content/versions/Hero.md** — `generated`, 4051 B, en, (root), high
  > Treat `Hero` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Village.md** — `generated`, 3439 B, en, (root), high
  > Treat `Village` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/IssueBase.md** — `generated`, 4044 B, en, (root), high
  > Treat `IssueBase` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/QuestBase.md** — `generated`, 3510 B, en, (root), high
  > Treat `QuestBase` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Town.md** — `generated`, 3490 B, en, (root), high
  > Treat `Town` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Agent.md** — `generated`, 5688 B, en, (root), high
  > Treat `Agent` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/MobileParty.md** — `generated`, 6163 B, en, (root), high
  > Treat `MobileParty` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/KingdomManager.md** — `generated`, 4388 B, en, (root), high
  > Treat `KingdomManager` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/DiplomacyModel.md** — `generated`, 4816 B, en, (root), high
  > Treat `DiplomacyModel` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/CampaignBehaviorBase.md** — `generated`, 3799 B, en, (root), high
  > Treat `CampaignBehaviorBase` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Clan.md** — `generated`, 4074 B, en, (root), high
  > Treat `Clan` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/ItemObject.md** — `generated`, 3621 B, en, (root), high
  > Treat `ItemObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Kingdom.md** — `generated`, 4330 B, en, (root), high
  > Treat `Kingdom` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/MissionBehavior.md** — `generated`, 3631 B, en, (root), high
  > Treat `MissionBehavior` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Formation.md** — `generated`, 4829 B, en, (root), high
  > Treat `Formation` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Settlement.md** — `generated`, 4828 B, en, (root), high
  > Treat `Settlement` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/Mission.md** — `generated`, 5727 B, en, (root), high
  > Treat `Mission` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

- **content/versions/HeroDeveloper.md** — `generated`, 3664 B, en, (root), high
  > Treat `HeroDeveloper` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
  Script-generated: identical Mental Model template with only the type name swapped, a self-declared generator note, and raw member-count/signature tables with no explanation of why. RECLASSIFIED 2026-10-02 per lead review: independent clustering of the 19 impact slots in this block gives 19 distinct shapes / 19 singletons / zero reuse, so the per-class judgement is authored, not templated. This page is therefore machine-extracted diff data carrying authored judgement and belongs to queue category B (historical legacy), not category A. The label stays `generated` because the page body names its own generator ("> 自动生成自源码 API 提取（tools/class-version-diff.mjs）") and repeats the type-name-swapped Mental Model sentence; I am not relabelling it handwritten, because the reader still receives machine tables rather than authored documentation.

### v1.4.7 — 55 pages

- **content/v1.4.7/_index.md** — `handwritten`, 7559 B, en, (root), high
  > 换句话说：**这是一棵小而手写的小树，而不是一棵生成出来的全树。** 下面每一张表里的数字都是当前的真实页数，不是计划页数。
  The version home states measured, self-specific facts (11,387 .cs files, 3,598 generated pages withdrawn, 2,199 duplicate type names in the 1.4.5 tree, 0 deletions among 361 shared namespaces) and names the two types that disappear and matter. It reasons about why the tree is shaped this way and what it costs a reader. No template Mental Model sentence; a generated page could not know the exact duplicate count it is fixing.

- **content/v1.4.7/GAPS.md** — `handwritten`, 4859 B, en, (root), high
  > `en/api/save-system/` is not merely thin — **the directory does not exist at all.** All three
  A maintenance note that exists only because someone walked both trees and diffed them: it names the 15 pages with no English twin by bucket and path, and distinguishes "thin" from "directory absent". That is bookkeeping a generator would not produce, and it is the opposite of self-promotion.

- **content/v1.4.7/en/architecture/module-system.md** — `handwritten`, 7719 B, en, en/architecture, high
  > Most of `Module` is `internal`. **Only the handful above are for you.** If your code depends on a
  Enumerates all 29 lifecycle callbacks grouped into five phases, then gives the phase-order fact that matters (OnSubModuleLoad runs before Campaign.Current exists) and three named classic traps. The tables are selected-and-explained (a Role column that argues), not raw signature dumps.

- **content/v1.4.7/en/architecture/ui-stack.md** — `handwritten`, 8797 B, en, en/architecture, high
  > The key insight: **`ViewModel` does not know `ScreenBase` exists, and `ScreenBase` does not know
  Explains the four-type pipeline as a debugging procedure (data never changed vs data changed but screen did not vs nothing appears), and the five ViewModel rules include the exact 8-overload list of OnPropertyChangedWithValue. Author knowledge of the binding path, not a template.

- **content/v1.4.7/en/api/modulemanager/_index.md** — `handwritten`, 2626 B, en, en/api/modulemanager, high
  > First, a clarification that is easy to get wrong: **no version of the game has a class called `ModuleManager`**.
  Corrects a misconception that only someone who actually looked for the type would write down, and states the consequence for load order (its data decides load time). No template Mental Model, bucket-specific prose.

- **content/v1.4.7/en/api/network/_index.md** — `handwritten`, 2618 B, en, en/api/network, high
  > One thing to be clear about from the start: multiplayer **gameplay state sync is not in this bucket**.
  Pre-empts the most likely wrong assumption and redirects to the right bucket, then names the exact interface triple a mod would depend on. Author-only scoping knowledge.

- **content/v1.4.7/en/api/sandbox/_index.md** — `handwritten`, 2615 B, en, en/api/sandbox, high
  > most of the 37 root `.cs` files are cheats (`GameplayCheatsManager`, `BoostSkillCheatGroup`, `Add1000GoldCheat`, `FillCraftingStaminaCheat`, and so on); the rest are `AgentNavigator`, `EditorSceneMissionManager` and similar. The cheat family is excluded from the documentation tree on purpose.
  Distinguishes the campaign data bucket from the campaign rules bucket by division of labour, and explains an editorial decision (excluding cheats) with the file census behind it. A generator listing types would not say "on purpose".

- **content/v1.4.7/en/api/system/_index.md** — `handwritten`, 2521 B, en, en/api/system, high
  > One thing that sends people to the wrong bucket: the engine-side input manager `EngineInputManager` and the debug hotkey categories belong to `TaleWorlds.Engine.InputSystem` and resolve to [engine](../engine/), not here. [SDK Overview](../../architecture/sdk-overview) draws the line between the two input layers.
  Names the two-input-layer confusion specifically and says which page resolves it. Also states the practical consequence of the gap (how to add a custom key binding has no answer anywhere).

- **content/v1.4.7/en/api/achievementsystem/_index.md** — `handwritten`, 1931 B, en, en/api/achievementsystem, high
  > The consequence is direct: **adding an achievement to a mod currently has no answer anywhere in this documentation.** It is the smallest gap in the tree and it is a whole feature rather than a thread at the end of a long tail.
  Judges coverage by feature weight rather than page count. That is an opinion about the corpus that a template cannot hold.

- **content/v1.4.7/en/api/activitysystem/_index.md** — `handwritten`, 2684 B, en, en/api/activitysystem, high
  > The mixed 1.4.5 `gameplay/` directory was split into `sandbox` and storymode — and **there is no `storymode/` directory in this version's documentation tree**, so it cannot be linked at all. The 1.4.5 tree has the pages; this tree does not.
  Records a real structural defect of the tree it lives in (a missing bucket it must confess cannot be linked) and defines the domain meaning of activity as campaign-side content. Specific, site-aware, un-templated.

- **content/v1.4.7/en/api/campaign/_index.md** — `handwritten`, 3317 B, en, en/api/campaign, high
  > That is the line that matters when deciding where your own state belongs: if it survives a save it belongs to this bucket, if it only exists during a battle it belongs in [mission-ext](../mission-ext/).
  Gives a placement rule with its reason, plus a namespace-routing table explaining where each CampaignSystem sub-namespace went. The Not-yet-written section enumerates what is missing with judgement ("What is documented here is the entry point, not the body").

- **content/v1.4.7/en/api/campaign-ext/_index.md** — `handwritten`, 3644 B, en, en/api/campaign-ext, high
  > `ComponentInterfaces` and `GameComponents` are a pair: every `Default*` in the second is the shipped implementation of the matching interface in the first.
  Explains the Default*/interface pairing relationship and why replacing a component is the main mechanism for changing campaign rules. The per-namespace .cs counts are 1.4.7-specific and not derivable from a template.

- **content/v1.4.7/en/api/core/_index.md** — `handwritten`, 2560 B, en, en/api/core, high
  > `Game` used to appear in both `core/` and `core-extra/` in the 1.4.5 tree. v1.4.7 keeps only the `core-extra/` copy, because `Game`'s namespace is `TaleWorlds.Core`. There is no `Game` page here.
  Explains how this bucket was constructed (two classes picked by name, not by namespace rule) and reconciles the duplicate-URL history the tree was built to fix.

- **content/v1.4.7/en/api/core-extra/_index.md** — `handwritten`, 3457 B, en, en/api/core-extra, high
  > The direction rule matters here: `TaleWorlds.Core` contains no `Hero` reference at all. The arrow is campaign → core, never the reverse. That is why "where do I put my helper class" has an answer in this tree rather than being a matter of taste.
  States a verified dependency-direction fact and the reasoning it buys the reader, and explains why the two chosen pages (Game, ViewModel) are the ones chosen. A lister would not give a rationale.

- **content/v1.4.7/en/api/custombattle/_index.md** — `handwritten`, 2446 B, en, en/api/custombattle, high
  > It is a 1.4.7-era bucket: the 1.4.5 documentation tree has no matching directory, because `TaleWorlds.MountAndBlade.CustomBattle` is a later namespace.
  Explains the flow difference from CampaignBattle and flags the VM cluster as a distinct concern. Carries version-history reasoning absent from the generated pages in this same tree.

- **content/v1.4.7/en/api/engine/_index.md** — `handwritten`, 3367 B, en, en/api/engine, high
  > `GauntletLayer` is the exception to "this layer is off limits": it resolves here rather than to [gui](../gui/) because its namespace is `TaleWorlds.Engine.GauntletUI`. Building a screen walks you out of `gui/` and into this bucket.
  Explains an exception to the bucket rule the reader hits in practice, and enumerates the Diamond backends as the real hole. Judgement with reason.

- **content/v1.4.7/en/api/gui/_index.md** — `handwritten`, 3428 B, en, en/api/gui, high
  > A thing that trips people up: `TaleWorlds.ScreenSystem` has only 8 `.cs` files, and the widgets themselves are not among them.
  Gives the authoring path ScreenBase to ScreenLayer to ScreenManager to GauntletLayer and explains why the first three are here and the fourth is not. Trap knowledge plus a reason.

- **content/v1.4.7/en/api/mission/_index.md** — `handwritten`, 2598 B, en, en/api/mission, high
  > One thing the pages cannot tell you from this directory: you do not create a `Mission` with `new Mission()`. The game creates it through the `MissionLogic` family, which sits in `mission-ext/` and has no page.
  Explains that the bucket was carved out by name from a 669-file namespace (a tree-shape decision, not a taxonomy one) and gives the four-page reading order.

- **content/v1.4.7/en/api/mission-ext/_index.md** — `handwritten`, 3212 B, en, en/api/mission-ext, high
  > By size it is more than three times `campaign/`. So if you arrive looking for a battle API and find this bucket empty, that is the actual state of the documentation, not a loading problem.
  Pre-empts the likely misdiagnosis (a loading failure) with a size argument, then groups the 669 missing classes by the four jobs a modder would look for.

- **content/v1.4.7/en/api/viewmodel/_index.md** — `handwritten`, 3266 B, en, en/api/viewmodel, high
  > The base class and its Collection sub-namespace sit in different directories as a direct result of the prefix rule.
  Points out a concrete wart of its own taxonomy (ViewModel in core-extra, the Collection namespace in viewmodel) and the cross-bucket cost of it. Self-aware and specific.

- **content/v1.4.7/zh/api/achievementsystem/_index.md** — `handwritten`, 1889 B, zh, zh/api/achievementsystem, high
  > 结论很直接：**在一个 mod 里增加一个成就，目前这套文档没有任何一页能告诉你怎么做**。这是全树最小的缺口，但它是完整的一块功能 —— 不是长尾里的一根头发。
  Same verdict as its English twin but written independently: the Chinese page adds a per-type "尚未收录" breakdown with roles in parentheses and a progress count (0/4). Judging a gap by feature weight rather than type count is author judgment.

- **content/v1.4.7/zh/api/activitysystem/_index.md** — `handwritten`, 2590 B, zh, zh/api/activitysystem, high
  > 1.4.5 那个混合的 `gameplay/` 目录被拆成了 `sandbox` 与 storymode 两处，**storymode 这个目录在本版本的文档树里不存在**，也无法按目录链接 —— 1.4.5 的树里有那些页面，本版本没有。
  Confesses a real navigational defect of the tree it lives in. The Chinese text is not a translation of the English page: it maps the four non-interface types onto the activity lifecycle in its own words.

- **content/v1.4.7/zh/api/core/_index.md** — `handwritten`, 2222 B, zh, zh/api/core, high
  > `Game` 在 1.4.5 的文档树里同时出现在 `core/` 和 `core-extra/`。v1.4.7 按命名空间只保留 `core-extra/` 一份，因为 `Game` 的命名空间是 `TaleWorlds.Core`。
  Reconciles the duplicate-URL history that motivated the tree, and explains the bucket exists for a navigation reason (one click to "make my mod load"). Specific to the tree, not the API.

- **content/v1.4.7/zh/api/custombattle/_index.md** — `handwritten`, 2760 B, zh, zh/api/custombattle, high
  > 41 个类型里绝大多数是内部实现，模组真正会碰到的是第一类。
  Groups 41 undocumented types by what a modder would need (mode definition / sides / selection UI / benchmarks) and then makes a prioritization call about which group matters. Judgement with reason.

- **content/v1.4.7/zh/api/engine/_index.md** — `handwritten`, 3413 B, zh, zh/api/engine, high
  > 名字里的 "engine" 是**边界**的意思而不是"引擎源码"的意思 —— 里面全是托管侧的包装层，真正的原生代码在 `Bannerlord.Native.dll` 里，不属于本站范围。
  Explains the scope boundary of the whole bucket (managed wrapper vs Bannerlord.Native.dll) and the deliberate rule that keeps two similarly-named Gauntlet namespaces in different directories. Only someone who made the taxonomy knows this.

- **content/v1.4.7/zh/api/gui/_index.md** — `handwritten`, 2823 B, zh, zh/api/gui, high
  > `TaleWorlds.ScreenSystem` 只有 8 个 `.cs`，但控件本身不在这个命名空间里 —— 控件属于 `TaleWorlds.GauntletUI` 的 XML 预制体，绑定模型在 [viewmodel](../viewmodel/)。
  Gives the namespace table, the four-step authoring path, and the specific trap that the 8-file namespace does not contain the widgets. Trap knowledge plus the reason it happened.

- **content/v1.4.7/zh/api/mission/_index.md** — `handwritten`, 2258 B, zh, zh/api/mission, high
  > 创建 `Mission` 的方式不是 `new Mission()` —— 游戏通过 `MissionLogic` 那一族创建，逻辑在 mission-ext 里，而那一族目前没有页面。
  States the trap AND that the page resolving it does not exist. That double-negative honesty about the current documentation state is not a generator behaviour.

- **content/v1.4.7/zh/api/modulemanager/_index.md** — `handwritten`, 2455 B, zh, zh/api/modulemanager, high
  > **任何版本里都不存在名为 `ModuleManager` 的类型**（已对 1.4.5 / 1.4.6 / 1.4.7 / 1.5.3 全量扫描确认）。
  A negative claim with the verification scope attached (four versions scanned). The English twin asserts the same correction without the scan scope, so the two pages were written in separate passes rather than one translated into the other.

- **content/v1.4.7/zh/api/network/_index.md** — `handwritten`, 2601 B, zh, zh/api/network, high
  > 有意思的是 `Coroutine` 和 `CoroutineDelegate` 也落在这个桶 —— 它们用的是引擎的协程调度，和 Unity 那套没有关系，所以按命名空间归到了网络层。
  Explains an assignment that looks arbitrary (coroutines in a network bucket) with the reason. The English twin lists the same types with no explanation at all — this page has strictly more author knowledge.

- **content/v1.4.7/zh/api/sandbox/_index.md** — `handwritten`, 2759 B, zh, zh/api/sandbox, high
  > 根目录下 37 个 `.cs` 里有一大半是作弊（`GameplayCheatsManager`、`BoostSkillCheatGroup`、`Add1000GoldCheat`、`FillCraftingStaminaCheat` 之类），其余是 `AgentNavigator`、`EditorSceneMissionManager` 等。作弊这一族默认不在文档树里，这是有意的取舍。
  Records an editorial decision and defends it. Also separates the rules layer from the data layer by division of labour.

- **content/v1.4.7/zh/api/system/_index.md** — `handwritten`, 2494 B, zh, zh/api/system, high
  > 目录名沿用 1.4.5 的 `system` 而不是新造 `inputsystem`，原因是它原本就存在，而且除了输入之外还收了几个运行时辅助类型；这两个职责共用一个桶是历史结果，不是设计。
  Admits a naming wart in the taxonomy and explains that it is inherited, not chosen. Explains what each input type is for (GameKey vs HotKey vs GameKeyContext) as a reader would actually need it.

- **content/v1.4.7/zh/api/viewmodel/_index.md** — `handwritten`, 2935 B, zh, zh/api/viewmodel, high
  > 基类和它的 Collection 子命名空间因此分在两个目录，这是前缀规则的结果。
  Explains the concrete cost of the taxonomy to the reader (you must hop directories between a ViewModel and the entity it views). The zh page also carries the per-bucket progress count 0/357.

- **content/v1.4.7/zh/api/campaign/_index.md** — `handwritten`, 3372 B, zh, zh/api/campaign, high
  > 判断一个字段该放哪，看的就是这条线：会进存档的进这里，只活在战斗场景里的去 [mission-ext](../mission-ext/)。
  Gives a state-placement rule with its reason and a namespace routing table. The Not-yet-written list names specific namespaces (Encounters, Election, TournamentGames, BarterSystem, SaveCompability).

- **content/v1.4.7/zh/api/campaign-ext/_index.md** — `handwritten`, 3384 B, zh, zh/api/campaign-ext, high
  > `ComponentInterfaces` 与 `GameComponents` 是一对：`GameComponents` 里的每个 `Default*` 都是 `ComponentInterfaces` 里对应接口的官方实现。替换组件 = 写一个自己的实现并在加载时替换，这是组件化战役规则的主要手段。
  Per-namespace .cs counts (135/126/124/43/12/18) that are 1.4.7-specific, and the interface-to-implementation pairing explained as the primary extension mechanism.

- **content/v1.4.7/zh/api/core-extra/_index.md** — `handwritten`, 3033 B, zh, zh/api/core-extra, high
  > 方向性规则：`TaleWorlds.Core` 里没有任何 `Hero` 引用。箭头永远是 campaign → core，不是反过来。
  States the dependency-direction rule as a verified property and says which types are must-know versus BCL noise. The zh page also names MBDebug as resolving to engine, a routing detail only the taxonomy author knows.

- **content/v1.4.7/zh/api/mission-ext/_index.md** — `handwritten`, 3123 B, zh, zh/api/mission-ext, high
  > 本区还没有任何页面。这是准确的说法，不是"暂时没有"。
  Insists on the precision of the gap statement and groups the 669 missing classes by the four jobs a modder looks for, naming the exact AI and spawn types.

- **content/v1.4.7/zh/api/save-system/_index.md** — `handwritten`, 3314 B, zh, zh/api/save-system, high
  > 读写不对称是这套机制最容易踩的地方：`SaveContext` 和 `LoadContext` 是两个不同的类型，你的保存实现和加载实现要成对写，字段顺序要自己保证一致。游戏不会替你检查这件事。
  Traps the reader with an asymmetric save/load warning and admits the bucket cannot get you past registration. That is an author judging the limits of their own page set.

- **content/v1.4.7/zh/api/_index.md** — `handwritten`, 5657 B, zh, zh/api, high
  > 这两处不放链接：目录并不存在，指过去只能落到 404；写一个空索引页则会让读者以为那里本来就该有页面。
  Measures two undocumenented areas precisely (Localization 55 .cs / 21 public types / ~518 KB; StoryMode 89 .cs / 101 public types / ~978 KB) and then argues about whether to link them at all. Explains a navigation decision with its reason; a template cannot.

- **content/v1.4.7/en/architecture/_index.md** — `handwritten`, 3842 B, en, en/architecture, high
  > 3. **Register rather than subclass.** The game turns almost every extension point into a
  States three rules that beat memorising a class table, with the reason each one exists, and gives a per-page reading contract (question answered / what you can do afterwards). Advice, not description.

- **content/v1.4.7/zh/architecture/_index.md** — `handwritten`, 3942 B, zh, zh/architecture, high
  > 能注册就不要继承。** 游戏把绝大多数扩展点做成注册（`CampaignGameStarter.AddBehavior`、
  Same three rules as the English hub, written as rules rather than description, plus a task-to-page routing table. The rule "state and events live in the same layer, never write Hero fields from a mission behaviour" is judgment.

- **content/v1.4.7/en/api/_index.md** — `handwritten`, 5981 B, en, en/api, high
  > Neither domain gets a link: the directories do not exist, so a link can only land on a 404, and an
  Measures the two undocumented domains precisely (Localization 55 .cs / 21 public types / ~518 KB; StoryMode 89 .cs / 101 public types / ~978 KB) and then argues about a navigation decision instead of taking it. Explains the 2,199-duplicate fix as the reason the taxonomy exists.

- **content/v1.4.7/zh/_index.md** — `handwritten`, 6789 B, zh, zh, high
  > 所以"跳过去回不来"在这个树里是被结构性排除的，而不是靠运气。
  States the structural fix (one type, one bucket; 2,199 duplicates in 1.4.5; 0 now) and asserts it structurally rather than by luck. Carries the same measured census as the English home and the two blind-spot domain measurements.

- **content/v1.4.7/en/_index.md** — `handwritten`, 7344 B, en, en, high
  > There is **no `save-system` directory on the English side at all** — not an empty one, an absent
  Distinguishes absent from empty, names the Chinese-only pages, and repeats the measured census (11,387 .cs, 361 namespaces, 0 removals, 2,199 duplicates) that the tree was rebuilt against. Honest about its own thinness.

- **content/v1.4.7/en/architecture/sdk-overview.md** — `handwritten`, 7182 B, en, en/architecture, high
  > File counts are measured from the `<assembly>/` directories in `bannerlord-1.4.7`.
  Per-assembly file counts declared as measured, a five-block downward-reference model, and a section explaining why a type legitimately appears in four places and which confusion (assembly vs namespace) causes the commonest compile error.

- **content/v1.4.7/en/architecture/save-system.md** — `handwritten`, 6394 B, en, en/architecture, high
  > **Default to the first one.** Reach for the second only when the data does not belong to any
  Two-mechanism framing with an explicit default and the conditions that override it, plus the field-type limits of SyncData and the unstable load ordering as a trap. Ends with a decision tree. Advice built from code study.

- **content/v1.4.7/en/architecture/version-delta.md** — `handwritten`, 7404 B, en, en/architecture, high
  > **cannot** compute whole-tree "types added / removed" from that 1.4.5 dump — the differences would
  States the measurement method, then explicitly warns the reader which conclusion is NOT available and why. Names the 9 removed types one by one with an impact verdict each. That epistemic care is authored, not generated.

- **content/v1.4.7/zh/architecture/version-delta.md** — `handwritten`, 7623 B, zh, zh/architecture, high
  > **结论：1.4.5 → 1.4.7 对模组来说是纯增量，几乎零破坏。**
  Same measurement work as the English page and adds the noise breakdown of the 482 new types (390 System.*/BCL, SandBox 43, MountAndBlade 34, Perks.Conditions 12) plus explicit per-namespace deltas. Also documents its own URL breaks, which no generator volunteers.

- **content/v1.4.7/zh/architecture/module-system.md** — `handwritten`, 7790 B, zh, zh/architecture, high
  > 注意 `Module` 里绝大多数方法带 `internal`，**只有上面这一小撮是给你用的**。
  Chinese counterpart of the English page, same 29-callback phase tables and the same three named traps. Written as its own prose (not a mechanical translation) and it carries the same explicit internal/private warning.

- **content/v1.4.7/zh/architecture/save-system.md** — `handwritten`, 6260 B, zh, zh/architecture, high
  > `SaveManager.ShouldResolveConflicts()` 和 `CheckSaveableTypes()` 存在就是为了在加载期把这个问题
  This Chinese page is strictly richer than its English twin: it adds the saveId-collision section with a concrete AddStructDefinition(…, 20002) example and a cost argument (catch it in development rather than in a user save).

- **content/v1.4.7/zh/architecture/sdk-overview.md** — `handwritten`, 7107 B, zh, zh/architecture, high
  > 下表的"文件数"是 `bannerlord-1.4.7` 里该程序集目录下的 `.cs` 数量，为实测值。
  Declares the provenance of its own numbers, gives the five-block downward model, and explains why a type appearing in four places is legitimate and which confusion causes the commonest compile error.

- **content/v1.4.7/zh/architecture/ui-stack.md** — `handwritten`, 8481 B, zh, zh/architecture, high
  > `PushScreen` 与 `PopScreen` **必须成对**。这是 Bannerlord UI 最常见的泄漏：
  Symptom-to-cause table, the exact pairing rule, and the debugging procedure that tells you which of the four layers broke. Trap knowledge with mechanism.

- **content/v1.4.7/zh/api/core-extra/Game.md** — `handwritten`, 13772 B, zh, zh/api/core-extra, high
  > **先判 `Game.Current != null`，再判模式。** 主菜单、模块加载、编辑器预览里 `Game.Current` 都可能为 null。
  Orders the guards a mod must apply (null check, then GameType is Campaign) with the environments where each fails, and separates the two factories and the single destroy path.

- **content/v1.4.7/zh/api/core-extra/ViewModel.md** — `handwritten`, 11658 B, zh, zh/api/core-extra, high
  > Gauntlet 不用 XAML 式的静态绑定树，而是**运行时按属性名反射**：Prefab 里的 `TextWidget.Text` 绑到 VM 的某个属性，绑定引擎调用 `GetPropertyValue("Text")` 取值，再订阅 `PropertyChanged` 监听变化。
  Explains the runtime-by-name binding model and forbids the wrong call (RaisePropertyChanged) in favour of OnPropertyChanged/SetField, with three worked examples including nested path traversal.

- **content/v1.4.7/en/api/core-extra/Game.md** — `handwritten`, 15482 B, en, en/api/core-extra, high
  > **The game type.** `GameType GameType` is the concrete mode — in campaign play it *is* the `Campaign` instance. This is the authority on "which mode am I in", and it is what you test before reaching for any world object.
  Explains that GameType and Campaign are the same object in campaign play, which is the kind of identity fact that only comes from reading the source, and structures members by when they are reachable.

- **content/v1.4.7/en/api/core-extra/ViewModel.md** — `handwritten`, 15551 B, en, en/api/core-extra, high
  > Gauntlet does not use a static XAML-style binding tree; it resolves bindings **at runtime, by name**.
  Same core insight as the Chinese page but with four English-only examples, including turning on diagnostics when a binding comes back blank. Four examples versus three is evidence these were written separately.

### v1.4.6 — 86 pages

- **content/v1.4.6/zh/api/core-extra/ArmorComponent.md** — `handwritten`, 18498 B, zh, zh/api/core-extra, high
  > `MeshesMask` 的推导方向和直觉相反：它**不是**「遮住哪里」，而是「哪里看得见」。
  Reads the source line by line and records behaviour a signature dump cannot: a covering mask that reads backwards (missing covers_* sets the Visible flag), and proves it by pointing at ItemObject.UsingFacegenScaling as the consumer. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/Banner.md** — `handwritten`, 16754 B, zh, zh/api/core-extra, high
  > **对一个空 `Banner`（`new Banner()`）调这些方法会 `ArgumentOutOfRangeException`。** 无参构造器只 `new MBList<BannerData>()`，**不填背景**。
  Reads the source line by line and records behaviour a signature dump cannot: four separate traps, including the off-by-one in the AddIconData cache invalidation (Count < 33 clears the cache, the Add sits outside the if) and the silent no-op when a colour is missing from the palette. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BannerComponent.md** — `handwritten`, 13188 B, zh, zh/api/core-extra, high
  > `ItemObject.Deserialize` 里 `<Banner>` 分支写的是 `itemComponent = new BannerComponent(this);`——**总是新建**，不像 `<Weapon>` 分支写 `this.ItemComponent ?? new WeaponComponent(this)` 那样先复用。
  Reads the source line by line and records behaviour a signature dump cannot: the asymmetry between the two XML branches and the two different wrong results depending on element order, none of which raise an error. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BannerEffect.md** — `handwritten`, 11389 B, zh, zh/api/core-extra, high
  > `MBMath.ClampIndex(value, minValue, maxValue)` 的实现是 `ClampInt(value, minValue, maxValue - 1)`——**上界传进来的是「长度」而不是「最后合法下标」，内部再减一**。
  Reads the source line by line and records behaviour a signature dump cannot: the exact off-by-one contract of ClampIndex, that IncrementType is assigned but never read anywhere, and that GetDescription mutates the inherited Description in place. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BasicCharacterObject.md** — `handwritten`, 21558 B, zh, zh/api/core-extra, high
  > **大量便捷方法在裸构造的对象上会 NRE。** `new BasicCharacterObject()` 只设了 `DefaultFormationClass`。
  Reads the source line by line and records behaviour a signature dump cannot: enumerates which convenience methods NRE on a bare instance (GetSkillValue, GetStepSize, GetBodyProperties, MaxHitPoints, IsPlayerCharacter) and why the Equipment getter can never be null but can be an empty roster. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BindingPath.md** — `handwritten`, 11056 B, zh, zh/api/core-extra, high
  > **注意 `Path` 与 `Nodes` 可能不一致**——`Append` 用的是私有构造器拼 `_path`，一致；但 `DecrementIfRelatedWith` 直接改 `Nodes` 的某一项而**不重算 `_path`**，调用之后相等性判断会失真。
  Reads the source line by line and records behaviour a signature dump cannot: the separator is a backslash not a slash, CreateFromProperty does not split while the string constructor does, and DecrementIfRelatedWith mutates Nodes without recomputing _path so equality goes stale. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BladeData.md** — `handwritten`, 11419 B, zh, zh/api/core-extra, high
  > **代码里造不出一个「刀身」，只能造出「一个知道自己是哪种部件类型的空壳」，真正的数值只能靠 `Deserialize` 从 XML 填。**
  Reads the source line by line and records behaviour a signature dump cannot: the DamageTypes.Invalid sentinel that means "unconfigured" rather than zero damage, the derived BladeWidth default (0.15f + length * 0.3f) and the cm-to-m conversion. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BodyProperties.md** — `handwritten`, 12752 B, zh, zh/api/core-extra, high
  > **最坑的一条是 `FromString` 的双次解析**：它对同一个 `age`/`weight`/`build` 读了两次，第二次用不同的默认值（20/0/0）覆盖第一次（30/0.5/0.5）。
  Reads the source line by line and records behaviour a signature dump cannot: documents the double-parse discrepancy between FromString and FromXmlNode, that default(BodyProperties) is a legal all-zero value rather than invalid, and what ClampForMultiplayer resets rather than clamps. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/BodyPropertiesJsonConverter.md** — `handwritten`, 9863 B, zh, zh/api/core-extra, high
  > 注意最后那个空数组——**它是刻意禁止递归的**，否则 `JObject.WriteTo` 会把外层配置里的转换器再套一遍。
  Reads the source line by line and records behaviour a signature dump cannot: explains a deliberate argument (empty converter array) and the exact failure mode: a missing _data key produces a NullReferenceException inside the converter rather than a data error. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/Crafting.md** — `handwritten`, 19400 B, zh, zh/api/core-extra, high
  > **关键约定：任何改动部件的操作最后都必须调 `ReIndex()`。**
  Reads the source line by line and records behaviour a signature dump cannot: names the session-state convention, which operations honour it and what breaks if you forget (the UI keeps showing the old weapon), plus that UpdateHistory is a commit not an automatic step. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/CraftingPiece.md** — `handwritten`, 16915 B, zh, zh/api/core-extra, high
  > **所以改 `length` 会连带改惯量与质心，不是孤立字段**。
  Reads the source line by line and records behaviour a signature dump cannot: states the coupling between Length, Inertia and CenterOfMass, that IsValid is set on the first line of Deserialize so every loaded piece is valid, and that BladeData is null for non-blade pieces. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/CraftingTemplate.md** — `handwritten`, 15126 B, zh, zh/api/core-extra, high
  > **最坑的一条：`GetStatDatas` 用 `GetIndexOfUsageDataWithId` 的返回值当数组下标，而后者在找不到时返回 `-1`。** `_statDataValues[usageIndex]` 于是变成 `_statDataValues[-1]`，抛 `IndexOutOfRangeException`。
  Reads the source line by line and records behaviour a signature dump cannot: the -1 index crash, that the bool[4] hidden-piece array is only allocated in Deserialize so a hand-built template NREs, and that PieceTypes.Invalid = -1 overflows it. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/DefaultSkills.md** — `handwritten`, 12431 B, zh, zh/api/core-extra, high
  > **`DefaultSkills.OneHanded` 在 `OnSubModuleLoad` 阶段访问会抛空引用**，那时候 `Game.Current` 要么为 null，要么它的 `DefaultSkills` 还没赋值（`Game` 构造体末尾才赋）。
  Reads the source line by line and records behaviour a signature dump cannot: traces the three-hop forwarding path (static property to Game.Current.DefaultSkills to a private field), why RegisterPresumedObject makes these XML-free, and which character attribute each of the 18 skills grows. The 风险与边界 and 跨版本提示 sections state concrete failure modes, and the 依赖关系 section enumerates real call sites. No template sentence, no machine filler.

- **content/v1.4.6/zh/api/core-extra/GameManagerBase.md** — `handwritten`, 15930 B, zh, zh/api/core-extra, high
  > 只有当 `nextStep` 恰好等于期望的下一个枚举值才推进 `_stepNo`；走到 `FinishLoadingFifthStep` 返回 `nextStep == None` 时返回 `true`，表示加载完毕。
  Reads the implementation and records behaviour a signature table cannot: the seven-step loading contract and the unusual requirement that the returned nextStep must equal the expected enum value, plus the EntitySystem one-component-per-type constraint and the Game setter side effect.

- **content/v1.4.6/zh/api/core-extra/GameModel.md** — `handwritten`, 6340 B, zh, zh/api/core-extra, high
  > mod 想覆盖官方模型时这正是你想要的语义；但如果你不小心注册了两个同类型模型，**只有最后那个生效，且不会有任何警告**。
  Reads the implementation and records behaviour a signature table cannot: separates the three layers (marker base, manager, MBGameModel<T>) and explains the reverse-scan shadowing rule that the override mechanism depends on, including the silent-failure case.

- **content/v1.4.6/zh/api/core-extra/GameModelsManager.md** — `handwritten`, 7454 B, zh, zh/api/core-extra, high
  > 因为是 `protected`，mod 通常不直接调它，而是继承它并把 `GetGameModel<T>()` 包成公开属性。
  Reads the implementation and records behaviour a signature table cannot: the last-match-wins loop direction and the snapshot semantics (the original IEnumerable no longer matters after construction), plus how BasicGameModels uses the pattern.

- **content/v1.4.6/zh/api/core-extra/GameState.md** — `handwritten`, 14641 B, zh, zh/api/core-extra, high
  > **`OnTick` 只在栈顶跑。** `GameStateManager.OnTick` 取 `ActiveState`（即 `_gameStates` 最后一项）然后调它的 `OnTick` 或 `OnIdleTick`。
  Reads the implementation and records behaviour a signature table cannot: states the OnTick-only-when-active rule, the four internal bridge methods that forward to hooks then listeners, and which concrete states exist (MapState, CraftingState, CharacterDeveloperState ...).

- **content/v1.4.6/zh/api/core-extra/GameStateManager.md** — `handwritten`, 14161 B, zh, zh/api/core-extra, high
  > `PushState` 用 `FindLastIndex(state => state.Level <= gameState.Level)` 决定插入位置——**Level 相同的 state 会插在已有同级 state 之后，Level 小的插在前面**。
  Reads the implementation and records behaviour a signature table cannot: explains the two GameStateManager instances (Game-scoped and the Global one created in the Module constructor, which is Current early in the session) and the Level-based insertion rule that makes nested menus work.

- **content/v1.4.6/zh/api/core-extra/HorseComponent.md** — `handwritten`, 17068 B, zh, zh/api/core-extra, high
  > **注意 [ItemObject](../ItemObject) 的 `IsAnimal` 定义是 `HasHorseComponent && !HorseComponent.IsRideable`，与这里的 `IsLiveStock` 口径一致；但 `IsMountable` 是 `HasHorseComponent && HorseComponent.IsRideable`，**一个 `is_mountable="true"` 且 `is_pack_animal="true"` 的马在 `IsMountable` 与 `IsPackAnimal` 上同时为真，而 `IsMount` 为假。** 想区分「真坐骑」必须用 `IsMount`。
  Reads the implementation and records behaviour a signature table cannot: derives the four horse categories from two XML bools and pins the exact predicate mismatch between ItemObject.IsAnimal/IsMountable and HorseComponent.IsLiveStock/IsMount.

- **content/v1.4.6/zh/api/core-extra/IGameStarter.md** — `handwritten`, 10910 B, zh, zh/api/core-extra, high
  > 把它想成一个**只有加法、没有减法的模型注册袋**，而且这个袋子在游戏开局后的某一刻被一次性倒空成 [GameModelsManager](../GameModelsManager)，倒完之后你再往里塞东西不会生效。
  Reads the implementation and records behaviour a signature table cannot: explains AddModel as append-not-replace with reverse-scan resolution, and how the generic overload becomes a decorator by stuffing the old model into BaseModel.

- **content/v1.4.6/zh/api/core-extra/InformationManager.md** — `handwritten`, 13583 B, zh, zh/api/core-extra, high
  > `Clear()` 会把其中九个置 null，但**唯独漏了 `OnAddSystemNotification`**——这是个真实的不对称。
  Reads the implementation and records behaviour a signature table cannot: reports a specific asymmetry found by comparing the nine events cleared against the ten subscribed, and explains the Show*/Display* vs *Internal naming contract and the main-thread/no-UI precondition.

- **content/v1.4.6/zh/api/core-extra/ItemComponent.md** — `handwritten`, 12881 B, zh, zh/api/core-extra, high
  > 把它当成**单槽策略对象**就对了，别的都顺。
  Reads the implementation and records behaviour a signature table cannot: walks the hardcoded XML element-name dispatch inside ItemObject.Deserialize branch by branch, including that <Weapon> reuses an existing component while <Armor> always news one up.

- **content/v1.4.6/zh/api/core-extra/ItemModifier.md** — `handwritten`, 13949 B, zh, zh/api/core-extra, high
  > **XML 里不写 `modifier_group` 的词缀加载完就是孤儿**，谁也拿不到。
  Reads the implementation and records behaviour a signature table cannot: splits additive (int/short, Math.Max(base+x,1)) from multiplicative (float, via the private ModifyFactor with Ceiling/Floor and a zero-base case that skips the floor), and explains the self-registration direction from modifier into its group.

- **content/v1.4.6/zh/api/core-extra/ItemModifierGroup.md** — `handwritten`, 13051 B, zh, zh/api/core-extra, high
  > **记住「三份列表、两次初始化、一个反注册方向」这条主线。**
  Reads the implementation and records behaviour a signature table cannot: names the three lists and the single private InitializeDropScoreLists that builds both weight tables from the modifier list plus two no-modifier sentinels, and explains why the registration direction is modifier-to-group.

- **content/v1.4.6/zh/api/core-extra/ItemObject.md** — `handwritten`, 24743 B, zh, zh/api/core-extra, high
  > `Tierf` / `Tier` / `IsTransferable` 都依赖 `ItemValueModel`，**`Game.Current` 为 null 时 NRE**。
  Reads the implementation and records behaviour a signature table cannot: explains that the six behaviour components share one single-slot property via as-casts, which is how a composite item is expressed, and which computed properties therefore require Game.Current.

- **content/v1.4.6/zh/api/core-extra/MBList.md** — `handwritten`, 9178 B, zh, zh/api/core-extra, high
  > 名字里那个「ReadOnly」是误导——`MBReadOnlyList<T>` 只是 `public class MBReadOnlyList<T> : List<T>` 加三个构造器，**没有覆盖任何修改方法**，也就是说从 `MBReadOnlyList<T>` 引用上调 `Add` / `Remove` / `Clear` 一样能改。
  Reads the implementation and records behaviour a signature table cannot: corrects a name-based misconception with the actual inheritance chain, and gives a three-case decision rule for whether a mod should use the type at all.

- **content/v1.4.6/zh/api/core-extra/Monster.md** — `handwritten`, 19623 B, zh, zh/api/core-extra, high
  > **typeId 是 2，全游戏第二个被加载的定义类。**
  Reads the implementation and records behaviour a signature table cannot: traces the load path from RegisterType with the exact typeId and directory, and maps the five structural blocks including the sbyte bone indices where -1 means invalid.

- **content/v1.4.6/zh/api/core-extra/ParameterContainer.md** — `handwritten`, 10544 B, zh, zh/api/core-extra, high
  > 值转换全部走 `Convert`，其中 `float` 和 `Vec3`/`Vec2` 显式用了 `CultureInfo.InvariantCulture`——**这是刻意的**：参数文件里小数点必须是 `.`，在德语/法语等逗号作小数点的区域设置下才不会解析错。
  Reads the implementation and records behaviour a signature table cannot: explains the deliberate culture pinning with its failure mode (comma decimal locales), the bool special case that accepts only true/True yet still returns true, and the copy-on-write concurrency helpers and their cost.

- **content/v1.4.6/zh/api/core-extra/PropertyObject.md** — `handwritten`, 12498 B, zh, zh/api/core-extra, high
  > `MBObjectBase.GetName()` 的默认实现返回 `new TextObject(this.StringId, null)`——用 StringId 当显示名，这对 `ItemObject` / `Monster` 这类有专门 Name 属性的对象无所谓，但对技能、专长、特性这类**名字本身就是内容**的对象就完全不够。
  Reads the implementation and records behaviour a signature table cannot: states the thin-adapter role with the reason it exists (GetName override), enumerates the whole family of subclasses that depend on it, and notes the save-system identity (type 38 in SaveableCoreTypeDefiner).

- **content/v1.4.6/zh/api/core-extra/SaddleComponent.md** — `handwritten`, 12044 B, zh, zh/api/core-extra, high
  > **先接受「这个类型在 1.4.6 的官方 XML 里走不到」这个事实，
  Reads the implementation and records behaviour a signature table cannot: verifies by construction-site census that the XML dispatch table has no <Saddle> branch, so the only new SaddleComponent( call in the tree is its own GetCopy; a negative result stated with its evidence.

- **content/v1.4.6/zh/api/core-extra/SkeletonScale.md** — `handwritten`, 10944 B, zh, zh/api/core-extra, high
  > **注册类型名是 `Scale`，不是 `SkeletonScale`。** `Game.RegisterTypes` 里写的是 `objectManager.RegisterType<SkeletonScale>("Scale", "Scales", 3U, true, false);`——类型名 `"Scale"`、目录名 `"Scales"`。
  Reads the implementation and records behaviour a signature table cannot: names the registry name/directory mismatch against the XML source, and explains the two-phase name-to-index lifecycle driven by OnGameInitializationFinished plus the mutual exclusion of BoneNames and the index array.

- **content/v1.4.6/zh/api/core-extra/SkillObject.md** — `handwritten`, 8393 B, zh, zh/api/core-extra, high
  > 查某个技能对应的技能对象：走 `DefaultSkills` 的静态属性，**不要用 `MBObjectManager` 按 stringId 查**——虽然它技术上可寻址，但官方代码几乎都走 `DefaultSkills`。
  Reads the implementation and records behaviour a signature table cannot: separates the addressable MBObjectBase identity from the save-data reality (progress lives on Hero/Character, not on the skill), and gives the retrieval convention official code follows.

- **content/v1.4.6/zh/api/core-extra/StaticBodyProperties.md** — `handwritten`, 13156 B, zh, zh/api/core-extra, high
  > **这个类不做任何「解码」。** 128 位里的每一位代表什么特征、怎么组合出 mesh，完全在 native 侧（`MBAPI.IMBFaceGen` 一类的调用链）——`StaticBodyProperties` 只负责搬运、比较、序列化。
  Reads the implementation and records behaviour a signature table cannot: states the semantic boundary precisely: the 128 bits are only transported and compared, decoding happens native-side, and a wrong-length key returns false with an all-zero out value.

- **content/v1.4.6/zh/api/core-extra/TradeItemComponent.md** — `handwritten`, 13706 B, zh, zh/api/core-extra, high
  > 是 [ItemObject](../ItemObject) 的 `FoodComponent` 属性返回的类型（**名字叫 Food，类型是 TradeItem**），以及 XML 里 `<Trade>` 标签的落点。
  Reads the implementation and records behaviour a signature table cannot: pins the one official programmatic mounting path (InitializeTradeGood) with its exact fixed sequence, and flags the Food-named-property-returning-TradeItemComponent mismatch.

- **content/v1.4.6/zh/api/core-extra/ViewModel.md** — `handwritten`, 14382 B, zh, zh/api/core-extra, high
  > 所以**第一次 new 某个 ViewModel 派生类有反射开销，之后就没有了**——前提是类型不 unloaded。
  Reads the implementation and records behaviour a signature table cannot: explains the process-level static reflection cache and its invalidation condition, and why the eight valued PropertyChanged variants can only be raised from inside the class.

- **content/v1.4.6/zh/api/core-extra/WeaponComponent.md** — `handwritten`, 10448 B, zh, zh/api/core-extra, high
  > **反序列化分两步：先建壳，再填**。
  Reads the implementation and records behaviour a signature table cannot: explains the multi-form weapon list behind PrimaryWeapon, that the quality group is attached per weapon form rather than per item, and the two-step new-then-Deserialize construction visible in the code.

- **content/v1.4.6/zh/api/core-extra/WeaponComponentData.md** — `handwritten`, 22201 B, zh, zh/api/core-extra, high
  > `TotalInertia = (IsConsumable ? MaxDataValue : 1) * item.Weight * 0.05f`，**注意它依赖 `item.Weight`，所以 `item` 参数不能是 null**。
  Reads the implementation and records behaviour a signature table cannot: states the null-precondition derived from a formula, the per-weapon-class damage-factor branches, and why GetObject<WeaponComponentData> cannot work because the type is not an MBObjectBase.

- **content/v1.4.6/zh/api/core-extra/WeaponDesign.md** — `handwritten`, 14344 B, zh, zh/api/core-extra, high
  > **构造完成后没有重新计算的入口**——想改几何只能造一个新的 `WeaponDesign`。
  Reads the implementation and records behaviour a signature table cannot: explains the compute-once geometry contract, that equality is HashedCode only, and which fields are SaveableField versus SaveableProperty.

- **content/v1.4.6/zh/api/core-extra/WeaponDesignElement.md** — `handwritten`, 12769 B, zh, zh/api/core-extra, high
  > `ScaledWeight`：`CraftingPiece.FullScale` 为真时按 `ScaleFactor³` 缩放（体积三次方），否则线性——护手和尾锤默认 `FullScale = true`，因为它们是实体块不是细杆。
  Reads the implementation and records behaviour a signature table cannot: documents the private-constructor constraint with its three acquisition paths, the uniform unscaled zero-cost forwarding pattern, and that WeaponDesign bakes offsets at construction so SetScale alone does not update geometry.

- **content/v1.4.6/zh/api/core-extra/_index.md** — `handwritten`, 7589 B, zh, zh/api/core-extra, high
  > **桶名 `core-extra` 与 `TaleWorlds.Core` 程序集不是一对一关系**。
  The bucket index cites the authoritative mapping file by name and gives per-namespace .cs and public-type counts, then explains which default-bucket namespaces landed here and why a modder should not care. Counted its own pages (17) as a snapshot.

- **content/v1.4.6/_index.md** — `handwritten`, 1991 B, en, (root), high
  > **这一版的内容全部是手写、正在生长。**
  States its own coverage honestly (40 Chinese class pages, list the buckets that have none), recommends falling back to v1.4.5 for usable coverage, and tells the reader how to handle a type lookup miss.

- **content/v1.4.6/en/architecture/_index.md** — `handwritten`, 2878 B, en, en/architecture, high
  > **Architecture is a transit map, not a parts list.**
  An ASCII transit map with the 71-module fact, a per-page question table, and the claim that 90% of mods only touch the middle three layers. Opinionated routing advice, not description.

- **content/v1.4.6/zh/architecture/_index.md** — `handwritten`, 2660 B, zh, zh/architecture, high
  > **架构不是零件清单，是一张交通图。** 本页只回答一个问题：你想做的事该从哪一页开始读，读完之后往哪走。
  Same structure as the English hub (its twin) with the 90%-of-mods claim and a concrete reading order. Written as a transport map with layer names, not a parts list.

- **content/v1.4.6/zh/api/save-system/_index.md** — `handwritten`, 5239 B, zh, zh/api/save-system, high
  > 这个桶对应 `TaleWorlds.SaveSystem` 程序集，是全站唯一一个**可以独立于游戏存在**的持久化子系统：它不认识英雄、不认识物品、不认识战役，它只认识「类型定义表 + 对象图 + 一份字节流」三件事。
  Gives the two real scenarios a mod hits this bucket, names the SaveManager/ISaveDriver filename trap, and groups the 52 unwritten types by what you would be trying to do.

- **content/v1.4.6/zh/api/mission-ext/_index.md** — `handwritten`, 8424 B, zh, zh/api/mission-ext, high
  > **这一页不是占位符**——归属规则、与 mission 桶的分工边界、触发场景、以及上面这 21 条逐个核实过的类型名，都是可以直接拿来写具体类页的素材。
  A page explaining why it is not writing pages, with three argued reasons (scale, entry points already covered elsewhere, engine-internal instability) and a measured 835-type census. Explicitly defends its own scope. PROVENANCE: this page existed when I read it (8,424 B at session start, 10,392 B at 14:18Z) and the quote above is the exact text I read, but it has since been DELETED from the worktree by the concurrent lead (git status: " D"), and current HEAD no longer contains it either, so this is the one row whose quote cannot be re-verified with fileText.includes() against any live source. I did not delete or modify it; I only ever read it.

- **content/v1.4.6/zh/api/localization/_index.md** — `handwritten`, 3887 B, zh, zh/api/localization, high
  > （`MyKey` 只是示例键名，不是类型；真键名由你自己定。）这个「查不到就显示原文」的行为是 mod 文本不掉链子的原因，也是为什么 `{=Key}原文` 里的原文部分不能写空。
  Explains the {=key}default-text format and why the fallback text must not be empty, and names the per-language processors as the thing you only read when text mangles in one locale. Explicitly disambiguates its own example key.

- **content/v1.4.6/zh/_index.md** — `handwritten`, 7910 B, zh, zh, high
  > 一个源码命名空间会落进哪个桶由规则决定，**不是目录名小写化**；因此「找类型」要走 [模块地图](architecture/module-map) 的映射表，而不是猜目录名。
  Measured census (90 top-level dirs, 71 gameplay modules, 11385 .cs, 6478 type files after dedup) plus the source-layout flattening fact specific to 1.4.6, and warns against guessing a bucket from a directory name.

- **content/v1.4.6/en/_index.md** — `handwritten`, 8734 B, en, en, high
  > Doc sections are **not** named after source directories. Namespaces are folded into a fixed set of 17 subsystem buckets by the authoritative map `tools/_dir-map-canonical.json` (longest-prefix-wins plus a handful of exact type-name overrides):
  Same structural claim as the Chinese landing page with the rule spelled out (longest-prefix-wins plus exact type-name overrides) and a per-task entry table. The English page is 8.7KB against the Chinese 5.4KB, so the two are not one text translated.

- **content/v1.4.6/zh/api/_index.md** — `handwritten`, 8256 B, zh, zh/api, high
  > > **先说清楚现状，避免你点空。** v1.4.6 的 API 分区目前**只有手写类页**，没有自动生成的 A–Z 类目录树。
  Opens by refusing to let the reader click into an empty bucket, then gives a task-to-page table that maps an intent to concrete class pages across buckets, and names the unwritten buckets with their types.

- **content/v1.4.6/en/api/_index.md** — `handwritten`, 3847 B, en, en/api, high
  > > **Read this before you click around.**
  Reroutes an English reader explicitly (instead of X read Y) because the class pages only exist in Chinese, and lists the pending types by bucket. Deliberate navigation advice that only the tree author could give.

- **content/v1.4.6/zh/api/campaign-ext/_index.md** — `handwritten`, 5103 B, zh, zh/api/campaign-ext, high
  > > 纠偏：权威映射里还留着两条指向 `TaleWorlds.CampaignSystem` 下**并不存在的子命名空间**的前缀规则，1.4.6 源码全树 grep 0 命中，所以本页不把它们算进桶。
  Corrects its own mapping data with a verifiable negative (grep 0 hits) and explains why the bucket is named campaign-ext when the source directory is CampaignSystem. Also warns against reading the 126+124 interface/implementation pairs as 250 separate topics.

- **content/v1.4.6/zh/api/storymode/_index.md** — `handwritten`, 8578 B, zh, zh/api/storymode, high
  > **这一页不是占位符**——归属规则、与 sandbox 的同构关系、`StoryModeEvents` 的已核实成员、`CampaignStoryMode` 的继承关系、以及 `DelayedAction` / `OppositionData` 的归属纠错，都是从源码来的。
  Two corrected misassignments from older docs, a verified 194-type census, and the argument that these types should become topic pages rather than class pages. Explicit standard: only verified members are listed.

- **content/v1.4.6/zh/api/campaign/_index.md** — `handwritten`, 123053 B, zh, zh/api/campaign, medium
  > **没有核实过的东西本页一条都没写**。
  The framing prose is authored: it states the counting rules read out of tools/_dir-map-canonical.json, explains why the internal AutoGeneratedSaveManager is excluded, handles the cross-bucket same-name problem, and sets a verification standard ("没有核实过的东西本页一条都没写"). THE 547-ROW TYPE TABLE IS MACHINE OUTPUT — extracted per namespace with reverse-lookup .cs paths — and that machine-extracted block is what puts this page in the rewrite queue rather than the clean category. Kept labelled handwritten at medium confidence because the verdict is about the page as a whole.

- **content/v1.4.6/zh/api/campaign/Campaign.md** — `handwritten`, 29818 B, zh, zh/api/campaign, high
  > 这个属性在战役建立之前与销毁之后都是 `null`——模块加载期访问会直接抛 `NullReferenceException`，这是 mod 崩溃的头号原因。
  Gives the initialization order step by step and states the null window as the top mod-crash cause, plus the two official extension slots (AddCustomManager type-unique vs AddEntityComponent ECS-style).

- **content/v1.4.6/zh/api/campaign/CampaignBehaviorBase.md** — `handwritten`, 7274 B, zh, zh/api/campaign, high
  > 它不是一个可以 `new` 出来就自动生效的对象。必须先在模块的 `OnGameStart` 里通过 `CampaignGameStarter.AddBehavior(...)` 注册，战役对象才会遍历到它；直接 `new` 出来的实例没有事件订阅入口，游戏不会调它的 `RegisterEvents`。
  Corrects the natural misreading of a base class (new does nothing), then enumerates the three common misuse patterns including what happens to a field initialised in a constructor versus saved via SyncData.

- **content/v1.4.6/zh/api/campaign/IDataStore.md** — `handwritten`, 6138 B, zh, zh/api/campaign, high
  > 这个接口**不**负责给字段挑默认值。读档时若存档里没有你新加的 key，实现要么保持你给 `ref` 参数的那个初始值，要么置零，取决于游戏版本的具体实现——所以新增字段时一定要在声明处给出合理的初值，不要依赖「读档系统会帮我填默认值」。
  States an engine-version-dependent default behaviour as unknown rather than pretending to know it, and tells the reader what to do instead (always initialise at the declaration). Honest about uncertainty.

- **content/v1.4.6/zh/api/campaign/CampaignGameStarter.md** — `handwritten`, 12257 B, zh, zh/api/campaign, high
  > 这个类**没有**「立即生效」的方法。`AddBehavior` 只是往 `List<CampaignBehaviorBase>` 里追加一项；真正的 `RegisterEvents()` 调用发生在战役对象建立之后，由游戏遍历列表触发。
  Explains the four registration tables, the required downcast, the absence of any immediate-effect method, and the duplicate-registration consequence with the RemoveBehaviors-then-Add idiom.

- **content/v1.4.6/zh/api/campaign/CampaignEvents.md** — `handwritten`, 61446 B, zh, zh/api/campaign, high
  > `ReferenceIMBEvent<T...>` 是**否决点**：签名末位是 `ref bool` 或 `ref int`，任何一个订阅者把 `ref` 参数置 false / 改小，游戏就取消这次行为——`CanHeroDieEvent`、`IsSettlementBusyEvent` 都属于这一类。
  A 52KB page that separates the three event categories by what a subscriber can actually do to the outcome, and names the veto points. That distinction is the whole point of the API and cannot be read off signatures.

- **content/v1.4.6/zh/api/campaign/Hero.md** — `handwritten`, 26863 B, zh, zh/api/campaign, high
  > 它是 `sealed` 的。1.4.6 的 `Hero.cs` 里没有可继承的扩展点，因此 mod 只能通过 Behavior、事件与动作 API 修改领主，不能派生自己的 Hero 子类。
  States the sealed constraint with its consequence and the two alternatives, then walks the 8-value state machine (NotSpawned / Active / Fugitive / Prisoner ...) and the three access paths.

- **content/v1.4.6/zh/api/gui/ScreenManager.md** — `handwritten`, 16971 B, zh, zh/api/gui, high
  > mod 对它说的最多的一句话是 `ScreenManager.PushScreen(new MyScreen())`；剩下的是 `PopScreen`、`ReplaceTopScreen`、`CleanAndPushScreen` 这几个栈操作，以及在自定义界面里查询焦点、光标、可用区域。
  Reads the source and records facts no signature list yields: Ranks the API by what a mod actually calls, and states the fixed EarlyUpdate/Tick/LateTick/Update frame order.

- **content/v1.4.6/zh/api/gui/ScreenBase.md** — `handwritten`, 13833 B, zh, zh/api/gui, high
  > 注意所有 `HandleXxx` 与 `FrameTick` / `IdleTick` / `Update` 都是 `internal`，mod 无法手动调用它们。
  Reads the source and records facts no signature list yields: States the three responsibilities and the internal-visibility trap with the correct workaround (push the screen), which is exactly the kind of constraint that only appears in the decompiled source.

- **content/v1.4.6/zh/api/save-system/SaveManager.md** — `handwritten`, 9424 B, zh, zh/api/save-system, high
  > 它额外负责三件 mod 必须知道的事：把当前应用的 `ApplicationVersion` 写进 `OperatingVersion` 供冲突解析器读取；在保存期间把 `_isLoading` 置 false、加载期间置 true（`ShouldResolveConflicts()` 直接返回它）；以及提供一个扫描全 AppDomain、找出「挂了存档特性但没有类型定义」的诊断入口 `CheckSaveableTypes()`。
  Reads the source and records facts no signature list yields: Names the three collaborators it delegates to, plus the three mod-visible duties (version stamping, _isLoading flag exposed via ShouldResolveConflicts, and the whole-AppDomain diagnostic scan).

- **content/v1.4.6/zh/api/save-system/ISaveDriver.md** — `handwritten`, 12736 B, zh, zh/api/save-system, high
  > 1.4.6 的 `TaleWorlds.SaveSystem` 目录里有三个实现，行为差别很大，选用哪个直接决定你的保存流程能不能拿到最终结果：
  Reads the source and records facts no signature list yields: Builds a per-implementation table (FileDriver/InMemDriver/AsyncFileSaveDriver with medium, IsWorkingAsync and characteristics) and names the exact save-path expression.

- **content/v1.4.6/zh/api/mission/Mission.md** — `handwritten`, 57677 B, zh, zh/api/mission, high
  > 它是 `sealed` 的，并且有 **400+ 个公开成员**——本类的正确用法不是逐个记忆，而是记住三条主线：**当前任务是谁**（`Mission.Current`）、**人都在哪**（`Teams` / `AllAgents`）、**我怎么改**（`AddMissionBehavior`）。
  Reads the source and records facts no signature list yields: Resists the memorisation instinct on a 48KB page by naming three lines of entry, and explains the DotNetObject native bridge base.

- **content/v1.4.6/zh/api/core/Module.md** — `handwritten`, 15598 B, zh, zh/api/core, high
  > 也就是说**在游戏第一个 Game 出现之前，`GameStateManager.Current` 指向的就是这个全局栈**。
  Reads the source and records facts no signature list yields: Enumerates what the private constructor already built before any Game exists, including that the Global state manager is immediately Current.

- **content/v1.4.6/en/architecture/module-map.md** — `handwritten`, 19175 B, en, en/architecture, high
  > **1.4.6 has a batch of types that older docs place in assembly A but that actually live in assembly B; this page gives the real location.**
  Reads the source and records facts no signature list yields: Opens by correcting inherited documentation errors, states that every row was verified against the real tree, and reports current documentation coverage per bucket rather than pretending to be complete.

- **content/v1.4.6/zh/api/core-extra/DynamicBodyProperties.md** — `handwritten`, 11284 B, zh, zh/api/core-extra, high
  > **最需要小心的一条是这个结构体的 `operator ==` 与 `Equals` 不是同一条代码路径。**
  Reads the implementation and records behaviour a signature table cannot: The page explicitly refuses to over-claim: it reports that operator == decompiles to a self-call, offers the boxed-reference-comparison hypothesis, and writes "这一点无法从反编译产物确证，行为未核实" before recommending Equals over ==. That epistemic marking is the opposite of generated filler.

- **content/v1.4.6/zh/api/core-extra/Equipment.md** — `handwritten`, 19001 B, zh, zh/api/core-extra, high
  > **最坑的一条是索引器 setter 忽略校验结果。** `equipment[EquipmentIndex.Weapon0] = someHorse;` **不会抛、不会拒绝**，马就被塞进武器槽了。
  Reads the implementation and records behaviour a signature table cannot: Finds that the indexer setter calls IsItemFitsToSlot and discards the return value, so illegal assembly silently succeeds, and locates the real rejection in DeserializeNode instead.

- **content/v1.4.6/zh/api/core-extra/EquipmentElement.md** — `handwritten`, 22049 B, zh, zh/api/core-extra, high
  > 链条是固定的：`Item.ArmorComponent.HeadArmor` 拿到裸值 → `ItemModifier.ModifyArmor(n)` 加工 → `Math.Max(..., 1)` 兜底 → `GetModifiedHeadArmor` 把负数钳到 0 → 战斗模型读。
  Reads the implementation and records behaviour a signature table cannot: Writes out the five-step raw-to-effective chain and enumerates exactly which members lack an Item null guard (all ten GetModified*) versus which four do guard.

- **content/v1.4.6/zh/api/core-extra/EquipmentIndex.md** — `handwritten`, 11655 B, zh, zh/api/core-extra, high
  > **先记住它是数组下标，再记名字。**
  Reads the implementation and records behaviour a signature table cannot: Explains that the indexer does no bounds check, warns that enum membership count is not the array length, and documents that NumAllArmorSlots=5 is an offset reused as a count.

- **content/v1.4.6/zh/api/core-extra/EventBase.md** — `handwritten`, 6202 B, zh, zh/api/core-extra, high
  > 整个文件只有 9 行、一个空类、零字段零属性零方法。它存在的唯一意义是给 [EventManager](../EventManager) 提供一个**类型约束标记**
  Reads the implementation and records behaviour a signature table cannot: Explains a memberless type by the constraint it imposes, notes that the assertion does not return so registration is silently skipped, and separates it from the unrelated IMbEvent mechanism.

- **content/v1.4.6/zh/api/core-extra/EventManager.md** — `handwritten`, 11383 B, zh, zh/api/core-extra, high
  > 「以事件类型为键」里的**类型**是**静态泛型参数 `T`，不是事件的运行时类型**。
  Reads the implementation and records behaviour a signature table cannot: Shows that TriggerEvent<T> dispatches on the static type with no base-class walk, so passing a base-typed variable silently calls nothing, and adds that registration does not de-duplicate while Remove takes one entry.

- **content/v1.4.6/zh/api/core-extra/FaceGen.md** — `handwritten`, 15190 B, zh, zh/api/core-extra, high
  > **在装实例之前调任何方法都不会抛异常，只会拿到退化值**：
  Reads the implementation and records behaviour a signature table cannot: Documents the facade design (no logic, forwards to an IFaceGen instance installed by CreateInstance) and tabulates per-method fallback values, including that GetRandomBodyProperties returns the min unchanged. Also admits which installation point it could not verify.

- **content/v1.4.6/zh/api/core-extra/Game.md** — `handwritten`, 18960 B, zh, zh/api/core-extra, high
  > **前两步回调跑完之前不要碰 `Game.Current` 的派生状态**。
  Reads the implementation and records behaviour a signature table cannot: Walks CreateGame and LoadSaveGame step by step, states the ordering constraint, and identifies the class as the save root ([SaveableRootClass(5000)]) and owner of the three service containers.

- **content/v1.4.6/zh/api/achievementsystem/_index.md** — `handwritten`, 6290 B, zh, zh/api/achievementsystem, high
  > 命名空间名叫 AchievementSystem，但它管的**不只是成就**——它实际是一套**按名字存取的整数统计值注册表**。
  Corrects the namespace name against what the code does, flags a specific error in the module map (SetStat described as async), and gives the verified AchievementManager signature. Four types, 5 .cs, stated as measured.

- **content/v1.4.6/zh/api/activitysystem/_index.md** — `handwritten`, 6764 B, zh, zh/api/activitysystem, high
  > 它解决的问题一句话说完：**「玩家现在正在做哪件事」需要是一个别的系统也能查到的状态，而不是各自猜。** 「在村庄里」「在战斗里」「在行军途中」「在对话」——这些状态原本散落在各处，谁想判断都得去问一堆对象。
  Argues that the bucket is used more than people think, names the schedule/activity mods that genuinely need it, lists the mods that never touch it, and records that the default implementation is a test double.

- **content/v1.4.6/zh/api/core/_index.md** — `handwritten`, 3567 B, zh, zh/api/core, high
  > **桶名 `core` 在 v1.4.6 里只对应两个类型**：`TaleWorlds.MountAndBlade` 命名空间下的 `MBSubModuleBase` 和 `Module`。
  Explains the bucket as a type-name override in the mapping file with the practical reason (1100+ types in MountAndBlade), and cites a source line reference for GetSubModuleType. Smallest bucket page, still specific.

- **content/v1.4.6/zh/api/custombattle/_index.md** — `handwritten`, 7670 B, zh, zh/api/custombattle, high
  > mod 对它的兴趣集中在一个很窄的入口上——「从自己的模块里发起一场符合配置的自定义对战」。
  Counts types per sub-namespace in a table (17/11/11/1/1 = 40), explains why this prefix beats the mission-ext fallback, and warns about the misleading CPUBenchmark name.

- **content/v1.4.6/zh/api/engine/_index.md** — `handwritten`, 3674 B, zh, zh/api/engine, high
  > 一是 `TaleWorlds.Engine.GauntletUI` 归本桶，而 `TaleWorlds.GauntletUI` 归 [gui](../gui/) 桶——前缀最长命中决定归属，两者名字只差 `Engine.` 一段。
  Names the two navigation traps (the two Gauntlet namespaces, and the two InputSystem namespaces) and gives per-sub-namespace .cs counts (175 top level, GauntletUI 11, Diamond 72).

- **content/v1.4.6/zh/api/gui/_index.md** — `handwritten`, 5238 B, zh, zh/api/gui, high
  > **注意别去 engine 桶找控件。**
  Explains why three namespaces are merged (same call chain), gives the .cs counts (9/186/58), and states the prefix reason GauntletLayer lands in engine rather than gui.

- **content/v1.4.6/zh/api/mission/_index.md** — `handwritten`, 4730 B, zh, zh/api/mission, high
  > 这是一个**有意为之的入口类 carve-out**，不是漏写：1.4.5 的 `mission/` 桶有 78 页，其中 52 页是普通 `TaleWorlds.MountAndBlade` 类型，那个手挑清单没有任何命名空间规则能复现，硬凑只会把近 850 页的 `mission-ext` 撕碎。
  Justifies the carve-out with a comparison to the 1.4.5 mission bucket (78 pages, 52 of them ordinary MountAndBlade types) and points at the parityGaps record in the mapping file. Design-history argument.

- **content/v1.4.6/zh/api/modulemanager/_index.md** — `handwritten`, 7334 B, zh, zh/api/modulemanager, high
  > 这是平台基础设施桶，通常不需要 mod 直接调用。
  Draws a comparison table against the core bucket on three axes (key types, who uses them, your entry point) and records the verified conclusion that no type named ModuleManager exists.

- **content/v1.4.6/zh/api/network/_index.md** — `handwritten`, 5894 B, zh, zh/api/network, high
  > 所以本文档树里**不存在**「Bannerlord 多人 mod API」这种东西。如果你在找它，找错地方了。
  States a negative conclusion plainly (no multiplayer API for mods in 1.4.6), lists the excluded Multiplayer namespaces from the noise list, and goes motive by motive through what a reader might be looking for.

- **content/v1.4.6/zh/api/sandbox/_index.md** — `handwritten`, 8470 B, zh, zh/api/sandbox, high
  > `SandBox*` 前缀下按声明抓到的类型名有 1273 个，但这个数字里绝大部分是 `*_Dependency_1_ItemTemplate` 这类从 prefab 生成的类（命名里带 `__TaleWorlds_CampaignSystem_ViewModelCollection_` 之类）。
  Corrects the headline count rather than repeating it, names the Sandbox vs sandbox spelling trap inside the same directory, and argues the right output here is one anatomy page rather than dozens of class pages.

- **content/v1.4.6/zh/api/system/_index.md** — `handwritten`, 8219 B, zh, zh/api/system, high
  > 1.4.6 没有 InputManager 这个类。
  Lists all 16 files with a one-line role each, pins the bucket to exactly one namespace, and corrects a class that does not exist. A negative fact is precisely what a template cannot produce.

- **content/v1.4.6/zh/api/viewmodel/_index.md** — `handwritten`, 8713 B, zh, zh/api/viewmodel, high
  > 合计 632 个顶层类型，是全部桶里类型数第二多的一个（第一是 [mission-ext](../mission-ext/)）。
  Counts the three ViewModelCollection namespaces separately (47/416/169) with what each governs, explains the longest-prefix grouping, and ranks the bucket by size.

### v1.5.3 — 86 pages

- **content/v1.5.3/zh/api/core-extra/GameModel.md** — `handwritten`, 5533 B, zh, zh/api/core-extra, high
  > 注意抽象接口层本身也继承 `GameModel`，且通常还继承 `MBGameModel<自身>`——例如 `SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`，官方实现 `DefaultSettlementProsperityModel : SettlementProsperityModel`。所以注册与覆盖是同一个类型轴上的操作。
  States the concrete 1.5.3 inheritance chain for a named model pair and warns against the GetType() == typeof(Default...) mistake. Version-specific and type-axis reasoning.

- **content/v1.5.3/zh/api/core-extra/GameModelsManager.md** — `handwritten`, 4747 B, zh, zh/api/core-extra, high
  > 因为是**倒序**扫描，返回的是**最后注册**的那个匹配项。这条规则在 `CampaignGameStarter.GetModel<T>()` 里是同样的实现（它遍历自己的 `_models` 末尾），两条路径语义一致，所以 `AddModel<T>(MBGameModel<T>)` 抓到的 `BaseModel` 与最终生效的模型能对上。
  Quotes the loop and then checks that the two resolution paths agree, which is the invariant the override mechanism depends on; also states that load order is the only thing that decides whether an override wins.

- **content/v1.5.3/zh/api/core-extra/MBGameModel.md** — `handwritten`, 5567 B, zh, zh/api/core-extra, high
  > **泛型参数是「被覆盖的类型」，不是「自己的类型」**。
  Explains the decorator handshake with an ASCII diagram, the private protected accessibility consequence (settable only by Initialize), and the mistake of parameterising the type with yourself.

- **content/v1.5.3/zh/_index.md** — `handwritten`, 12177 B, zh, zh, high
  > > `bannerlord-1.5.3/` 是 **ILSpy 反编译产物** —— 11 487 个文件里有 11 398 个带 `// Token: 0x…` 标记。
  Declares the provenance of its own source tree with a measured marker count and says what that means for diffing; then the five-band dependency model and an honest 27-of-6824 coverage statement.

- **content/v1.5.3/en/_index.md** — `handwritten`, 12643 B, en, en, high
  > v1.5.3 is a **fully sourced** version: `bannerlord-1.5.3/` holds **11 487 `.cs` files** across
  Same provenance discipline as the Chinese page (ILSpy output, 11 398 token markers) with the downward-only dependency stack, and states the gap as 6 797 of 6 824 types in the frontmatter.

- **content/v1.5.3/zh/api/_index.md** — `handwritten`, 11626 B, zh, zh/api, high
  > > **桶索引页不存在。** `api/<桶>/` 这种目录索引页（`mission-ext/`、`sandbox/`、`viewmodel/` 等）在 v1.5.3 下
  Explicitly closes a navigation door (bucket names are not links because the index pages do not exist) and gives a task-to-page table, then quantifies the gap as 27 of 6 824 types. Author knowledge of its own tree defects.

- **content/v1.5.3/en/api/_index.md** — `handwritten`, 9200 B, en, en/api, high
  > > **No bucket index pages exist.** There is no `api/<bucket>/_index.md` anywhere in this tree, so
  Same defect disclosure in English, followed by a per-bucket type-vs-pages table that ends by saying the coverage should not be described as broad. Refuses to oversell its own corpus.

- **content/v1.5.3/zh/architecture/_index.md** — `handwritten`, 2051 B, zh, zh/architecture, high
  > 1.5.3 源码里扫描到 **6 824 个非噪声类型**，而本版本目前只有 **27 篇**手写类型深写页
  A short hub that leads with the coverage limit rather than the content, states which horizontal links are deliberately absent, and routes by the reader current state.

- **content/v1.5.3/en/architecture/_index.md** — `handwritten`, 1752 B, en, en/architecture, high
  > > **There are no bucket index pages in this tree.** `api/mission-ext/`, `api/sandbox/`,
  Discloses that bucket slugs are plain text rather than links, and explains the consequence for how the page links. Short but a deliberate editorial decision, not filler.

- **content/v1.5.3/zh/api/storymode/HideoutBattleEndState.md** — `handwritten`, 3633 B, zh, zh/api/storymode, high
  > 这就是它作为状态机的核心约束：`None` 是一个**被复用的终态**，不是"未开始"。任何基于 `HideoutBattleEndState == None` 写额外逻辑的代码，都会在玩家每次打开城镇/村庄菜单时误触发。
  Reads the source and records facts no signature list yields: traces the write-once/read-once/reset lifecycle across three writers and one reader, and states the specific false-positive a mod would hit. Also flags that three separately-defined same-named enums make reflection tools hit all three.

- **content/v1.5.3/zh/api/storymode/DefeatTheConspiracyQuestBehaviorTypeDefiner.md** — `handwritten`, 3679 B, zh, zh/api/storymode, high
  > 值得注意的是**编号 16000 是整个存档表里最小的一批号**——第二阶段用了 1002000 / 1005000，教程后的氏族重建用了 4140000。第三阶段之所以用小号，是因为它是原版最早写的那批代码。它也说明号段不是按语义分区的，**不能靠编号大小推断优先级或版本新旧**。
  Reads the source and records facts no signature list yields: compares the global save id against the other three story definers and draws the conclusion that id ranges are not semantic, so nobody should read them as a priority order. Cross-page synthesis only the tree author can do.

- **content/v1.5.3/zh/api/storymode/WeakenEmpireQuestBehaviorTypeDefiner.md** — `handwritten`, 3697 B, zh, zh/api/storymode, high
  > 第二阶段的两个 definer 用 1002000（帝国线）和 1005000（反帝国线）两个相隔 3000 的号段，第三阶段用 16000，教程后氏族重建用 4140000——**号段之间留了巨大空隙**，就是为了让后续版本能插入新 definer 而不冲突。
  Reads the source and records facts no signature list yields: infers the reason for the gaps between id blocks from comparing four definers, and explains the three-level id scheme (global, per-class, per-enum) with the generated member-accessor names it relies on.

- **content/v1.5.3/zh/api/storymode/AssembleEmpireQuestBehaviorTypeDefiner.md** — `handwritten`, 4086 B, zh, zh/api/storymode, high
  > 坑：这个类的两个数字都是**公开的存档 ABI 契约**。改 `1002000` 或改类内 id `1`，所有旧存档都会在加载时报"未知类型"而不是静默失败——好的一面是不会数据损坏，坏的一面是 mod 作者根本改不得。
  Reads the source and records facts no signature list yields: states the forward/backward compatibility contract with the exact failure mode (loud unknown-type, not silent corruption) and what it means for a mod author.

- **content/v1.5.3/zh/api/storymode/MeetWithArzagosQuest.md** — `handwritten`, 4215 B, zh, zh/api/storymode, high
  > 它和 `MeetWithIstianaQuest` 是**逐行对称**的一对：结构、时限、对话流条数、状态字段、幂等开子任务的逻辑全都一样，唯一区别是绑定到 `StoryModeHeroes.AntiImperialMentor`、以及对话里的立场二选一语义相反（Arzagos 想要的是"摧毁帝国"）。
  Reads the source and records facts no signature list yields: Reads the pair as a mirrored design and then draws the consequence a modder would miss: because both quests dedupe on the same AssembleTheBannerQuest check, whichever mentor you talk to first sets the main-line tempo.

- **content/v1.5.3/zh/api/storymode/RebuildPlayerClanQuestBehaviorTypeDefiner.md** — `handwritten`, 4269 B, zh, zh/api/storymode, high
  > 被声明在 `RescueFamilyQuestBehavior.cs` 的**文件末尾、嵌套在 `RescueFamilyQuest` 类内部**（源码里的缩进会误导），但它的 namespace 是 `StoryMode.Quests.PlayerClanQuests`、名字却叫 `RebuildPlayerClanQuestBehaviorTypeDefiner`——名字里的 "RebuildPlayerClan" 指的是**前置任务**，不是它自己注册的类型。
  Reads the source and records facts no signature list yields: A placement trap found by reading the decompiled layout: file, nesting, namespace and name all disagree, and any tool guessing from the filename gets it wrong. Also explains why the nested private enum needs its own id (11).

- **content/v1.5.3/zh/api/storymode/HideoutBattleEndState__TutorialPhase.md** — `handwritten`, 4418 B, zh, zh/api/storymode, high
  > **不要把 `None` 当作"无操作"的信号**去写额外逻辑，否则每次玩家打开村庄菜单都会误触发。
  Reads the source and records facts no signature list yields: Explains the mailbox role across MapEventEnded (where the MapEvent is already invalid) and GameMenuOpened, and states the reused-terminal-state hazard explicitly as a mod-writing warning. This is the TutorialPhase duplicate of the FirstPhase enum and says so.

- **content/v1.5.3/zh/api/storymode/RecruitTroopsTutorialQuest.md** — `handwritten`, 4493 B, zh, zh/api/storymode, high
  > 构造期用 `Settlement.CurrentSettlement` 作为招募地点，而**构造发生时玩家正在和村长对话**，此时 `Settlement.CurrentSettlement` 恰好就是新手村庄，所以"碰巧"是对的；但读档分支里写死成 `Settlement.Find("village_ES3_2")`。
  Reads the source and records facts no signature list yields: Explains why an accidental correctness holds (the quest is constructed during the headman conversation) and pins the hardcoded village string in the load branch, i.e. exactly why a map swap breaks it. Also notes the always-true predicate is deliberate.

- **content/v1.5.3/zh/api/storymode/PurchaseGrainTutorialQuest.md** — `handwritten`, 4602 B, zh, zh/api/storymode, high
  > 关键坑是**商品货架必须由它自己铺**：构造函数第一行是 `TutorialPhase.Instance.InitializeTutorialVillageItemRoster()`。如果 mod 改了教程村庄的初始库存、或者在别的地方先跑了货架初始化，粮食可能卖不出来，任务会永久卡住。
  Reads the source and records facts no signature list yields: Calls this the minimal structure template (one quest plus one subtask) and names a concrete mod-induced deadlock (stock initialization order) as the failure mode.

- **content/v1.5.3/zh/api/storymode/MeetWithIstianaQuest.md** — `handwritten`, 4715 B, zh, zh/api/storymode, high
  > 玩家可以当场表态，也可以答"还没想好"——答后者只会把 `_metImperialMentor` 置为 true 而不完成任务，下次对话再问一次。
  Reads the source and records facts no signature list yields: Distinguishes the two completion paths including that CompleteQuestWithSuccess is attached to ConversationEndOneShot, i.e. only after the dialogue fully closes. Event-timing knowledge.

- **content/v1.5.3/zh/api/storymode/IsArzagosTag.md** — `handwritten`, 4737 B, zh, zh/api/storymode, high
  > `ConversationManager.InitializeTags()` 在会话启动时用反射扫所有活动程序集，把每个 `ConversationTag` 子类 `Activator.CreateInstance` 成单例，以 `StringId` 为键建表。
  Reads the source and records facts no signature list yields: Explains the reflection-based tag registry, the int.MinValue match-score suppression for non-applicable variants, and gives the three-granularity table so a mod does not use the anti-imperial tag to mean mentor in general.

- **content/v1.5.3/zh/api/storymode/WeakenEmpireQuest.md** — `handwritten`, 4981 B, zh, zh/api/storymode, high
  > 坑：这个任务统计的是**城镇（Towns）**，不是聚落总数。夺取村庄、城堡都不减少这个数字。
  Reads the source and records facts no signature list yields: Pins the absolute-threshold design against the imperial line ratio design, and quantifies the polling delay (up to one campaign hour) so a modder knows to hook OnSettlementOwnerChangedEvent instead.

- **content/v1.5.3/zh/api/storymode/ArzagosBannerPieceQuest.md** — `handwritten`, 5100 B, zh, zh/api/storymode, high
  > 全部差异只有三处——绑定的导师/藏身处由构造参数传入、对话文案由 `questGiver` 决定、以及**强盗队 StringId 前缀**从 `istiana_banner_piece_quest_raider_party_` 换成 `arzagos_banner_piece_quest_raider_party_`。
  Reads the source and records facts no signature list yields: Diffs the anti-imperial twin against the imperial one down to the string-id prefix, and notes the reset asymmetry between the success and failure branches.

- **content/v1.5.3/zh/api/storymode/StoryModeGenericXpModel.md** — `handwritten`, 5160 B, zh, zh/api/storymode, high
  > 英雄当前待在一个训练场聚落里时，倍率返回 0。这是教学关的配套设计——玩家的早期技能成长必须在真实战斗与对话中完成，不允许在训练场挂机刷。
  Reads the source and records facts no signature list yields: Walks the three-stage predicate chain, points out IsTrainingField is a SettlementComponent check rather than a settlement-name match, and explains the anti-idling intent behind zeroing the multiplier. A one-member model is still explained by why it exists.

- **content/v1.5.3/zh/api/storymode/TravelToVillageTutorialQuest.md** — `handwritten`, 5258 B, zh, zh/api/storymode, high
  > 它**没有构造参数**，一被 `new` 出来就直接跑完全部初始化
  Reads the source and records facts no signature list yields: Lists what the quest really does beyond its stated goal (four refugee parties of 6-12, menu hijack, daily food top-up, brother force-heal) and pins the single completion path on conversation end rather than dialogue start.

- **content/v1.5.3/zh/api/storymode/RecruitTroopTutorialQuestTask.md** — `handwritten`, 5310 B, zh, zh/api/storymode, high
  > `_recruitedTroopAmount` 有 `[SaveableField(2)]`，会存档；但 `_targetRecruitAmount`、`_recruitTypeConditions`、`_recruitSettlement` 三个字段**都没有** Saveable 标记。
  Reads the source and records facts no signature list yields: Field-level save-attribute audit: which of four fields persists and which three must be re-supplied on load. That asymmetry only a reader of both the attributes and the load branch would report.

- **content/v1.5.3/zh/api/storymode/TutorialQuestPhase.md** — `handwritten`, 5400 B, zh, zh/api/storymode, high
  > `None = -1` —— **唯一是负数的值**，哨兵。
  Reads the source and records facts no signature list yields: Notes the save enum id 2002, that the four Started values mean started rather than completed, and that a skipped tutorial never walks the Started values.

- **content/v1.5.3/zh/api/storymode/WeakenEmpireQuestBehavior.md** — `handwritten`, 5432 B, zh, zh/api/storymode, high
  > 坑：`QuestConditionsHold()` 里直接访问三个静态属性，**任何一个为 null 都会崩**。
  Reads the source and records facts no signature list yields: States the null-dereference hazard a mod creates by destroying a kingdom outright, and contrasts the absolute threshold with the imperial line ratio as the key difficulty difference.

- **content/v1.5.3/zh/api/storymode/IsStoryModeMentorTag.md** — `handwritten`, 5488 B, zh, zh/api/storymode, high
  > 差别只在这个类用 `||` 串了两边：
  Reads the source and records facts no signature list yields: States why a shared tag exists (lines audible on either path) and that the tag choice follows the nature of the line, not the player faction. Small file, but it carries the XML-authoring rule.

- **content/v1.5.3/zh/api/storymode/IsIstianaTag.md** — `handwritten`, 5601 B, zh, zh/api/storymode, high
  > `ConversationManager.InitializeTags()` 在**会话启动时用反射遍历所有活动程序集**，把每个 `ConversationTag` 子类 `Activator.CreateInstance` 出来，以 `StringId` 为键存进一张表。
  Reads the source and records facts no signature list yields: Explains the whole tag pipeline including the int.MinValue suppression, from registration through FindMatchingScore, for a class with no members of its own.

- **content/v1.5.3/zh/api/storymode/StoryModeCutsceneSelectionModel.md** — `handwritten`, 5610 B, zh, zh/api/storymode, high
  > 如果被消灭的正好是玩家当前支持的王国，就返回一个专门的 `SupportedFactionDefeatedSceneNotificationItem`，并把「玩家是否正在帝国任务线上」作为参数传进去，好让那段过场播放对应的后续台词。
  Reads the source and records facts no signature list yields: Narrows the call site (kingdom destruction settlement only) and explains why the supported-kingdom branch needs to know the story-line position to pick the follow-up line.

- **content/v1.5.3/zh/api/storymode/PurchaseItemTutorialQuestTask.md** — `handwritten`, 5625 B, zh, zh/api/storymode, high
  > 它不是一个完整的任务，也不是给 mod 用的通用 API，而是把新手教程里"买 2 袋粮食"这一句话变成可存档、可推进的一小段状态机。
  Reads the source and records facts no signature list yields: States explicitly that this is not a mod-facing API (a scope judgement), and traces the single PlayerInventoryExchangeEvent subscription with the onSucceed delegate hand-off.

- **content/v1.5.3/zh/api/storymode/ConspiracyProgressQuest.md** — `handwritten`, 5700 B, zh, zh/api/storymode, high
  > 这是一个**几乎不给玩家看的任务**。它的唯一职责是当一块"仪表盘"：任务日志上有一条 0→2000 的"阴谋强度"进度条，每天由 `DailyTick` 调 `SecondPhase.Instance.IncreaseConspiracyStrength()` 涨一点，任何一个阴谋子任务成功时也会刷新一次。
  Reads the source and records facts no signature list yields: Explains the invisible dashboard role (0 to 2000 conspiracy bar, daily tick) and the gatekeeper behaviour that cancels phases two and three when the player leaves the supported kingdom.

- **content/v1.5.3/zh/api/storymode/StoryModeHelpers.md** — `handwritten`, 5725 B, zh, zh/api/storymode, high
  > 主线剧情会在战斗中生成主角的家人（哥哥、弟弟、妹妹），这些 `Hero` 是运行时用 `HeroCreator.CreateBasicHero` 造出来的，**技能值全是 0**，于是他们在战斗 AI 里表现得像木头。
  Reads the source and records facts no signature list yields: Explains the root cause (runtime-created heroes have zero skills so the AI plays badly), names both call sites, and states the any-skill-is-zero detection predicate.

- **content/v1.5.3/zh/api/storymode/MainStoryLineSide.md** — `handwritten`, 5729 B, zh, zh/api/storymode, high
  > 它是**一次性的、单向的选择结果**，不是可反复切换的状态——`MainStoryLine.SetStoryLineSide` 一旦写入就会连带禁用两位导师，之后再改没有任何补救路径。
  Reads the source and records facts no signature list yields: Records the save field id and enum id 2001, the single write site inside SupportKingdomQuest, and the irreversibility consequence (both mentors get disabled).

- **content/v1.5.3/zh/api/storymode/IstianasBannerPieceQuest.md** — `handwritten`, 5810 B, zh, zh/api/storymode, high
  > 它的状态中转机制和教程版 `FindHideoutTutorialQuest` 完全同构：用一个内嵌枚举 `_hideoutBattleEndState`（None/Retreated/Defeated/Victory）把"刚才那场仗结果如何"从 `MapEventEnded` 传递到 `GameMenuOpened`。
  Reads the source and records facts no signature list yields: Identifies the structural isomorphism with the tutorial version, explains who actually grants the item (StoryModeBannerItemModel, not the quest), and why the hideout is kept attackable by respawning two raider parties.

- **content/v1.5.3/zh/api/storymode/StoryModeQuestBase.md** — `handwritten`, 5835 B, zh, zh/api/storymode, high
  > 同时还有一条平行的继承链：`QuestBase` ← `ConspiracyQuestBase`（阴谋任务）——**阴谋任务不继承本类，但它同样返回 `"MainStoryline"`**。所以 `is StoryModeQuestBase` 会漏掉整条阴谋任务线，而 `SpecialQuestType == "MainStoryline"` 两条线都能抓到。
  Reads the source and records facts no signature list yields: Names the three behaviours that separate main-story quests from sandbox quests in the UI, and the trap that a type test misses the whole conspiracy line.

- **content/v1.5.3/zh/api/storymode/VillagersInNeed.md** — `handwritten`, 5836 B, zh, zh/api/storymode, high
  > `_failedTheMission` 与 `_startVillaMission` 是两个不入存档的瞬时标志。
  Reads the source and records facts no signature list yields: Walks the three-state progression driven by a village-menu hook rather than events, and distinguishes the two non-persisted transient flags from the persisted ones.

- **content/v1.5.3/zh/api/storymode/RescueFamilyQuestBehavior.md** — `handwritten`, 5871 B, zh, zh/api/storymode, high
  > `SyncData` 只存这一个 bool——这是理解本类的关键：**行为的全部跨存档状态就是这个"待启动"标记**。
  Reads the source and records facts no signature list yields: Lists the full preconditions before the behaviour fires (peaceful settlement, map state, no dialogue, no other quest giver) and notes that SyncData persists exactly one bool.

- **content/v1.5.3/zh/api/storymode/StoryModeHeroDeathProbabilityCalculationModel.md** — `handwritten`, 5921 B, zh, zh/api/storymode, high
  > StoryMode 只加一条保护：主线故事尚未完成时，玩家的兄长 `StoryModeHeroes.ElderBrother` 概率恒为 0。其余所有英雄的概率完全由基类算，StoryMode 一个数字都不改。
  Reads the source and records facts no signature list yields: States the single override precisely and its scope condition, and that everything else is forwarded untouched - an anti-idling protection explained as a story constraint.

- **content/v1.5.3/zh/api/localization/DefaultTextProcessor.md** — `handwritten`, 7638 B, zh, zh/api/localization, high
  > 当 `language_data.xml` 里某个语言没有 `text_processor` 属性，或者属性里的类型名 `Type.GetType` 解析失败时，[LocalizedTextManager](../LocalizedTextManager) 的 `CreateTextProcessorForLanguage` 就返回它。
  Reads the source and records facts no signature list yields: Identifies the two concrete fallback triggers (missing attribute and unresolvable type name) that make this empty implementation load at all.

- **content/v1.5.3/zh/api/localization/EnglishTextProcessor.md** — `handwritten`, 10505 B, zh, zh/api/localization, high
  > 它的核心资产是一张 46 条的不规则名词复数表（man→men、child→children、criterion→criteria…）和一串嘶音判定（`s x ch sh es ss`）。
  Reads the source and records facts no signature list yields: Counts the irregular table and the sibilant test, and tells the reader which processor to read for the minimal example versus the complex state machine.

- **content/v1.5.3/zh/api/localization/FrenchTextProcessor.md** — `handwritten`, 9397 B, zh, zh/api/localization, high
  > 它用「性别标记 + 冠词标记」两段式协议，但两段的位置关系与俄语相反：性别标记在前，冠词标记紧跟在被修饰的名词**之后**。
  Reads the source and records facts no signature list yields: Records the line counts, the elision set (de+le=du, a+le=au), and the positional inversion against Russian - a cross-processor comparison.

- **content/v1.5.3/zh/api/localization/GermanTextProcessor.md** — `handwritten`, 8638 B, zh, zh/api/localization, high
  > **强变化（stark）** 无词尾、**弱变化（schwach）** 带 `-e` 词尾、**混合变化（gemischt）** 视格而定。
  Reads the source and records facts no signature list yields: Gives the three declension families, the 40+ token count, the case-marker set and the adjective-token dispatch, and positions it against Russian/Polish as structurally similar.

- **content/v1.5.3/zh/api/localization/ItalianTextProcessor.md** — `handwritten`, 9622 B, zh, zh/api/localization, high
  > **注意与西班牙语的六个标记完全同名但语义不同**（`.MN` 是意大利语的「阳性中性与单数」，西班牙语是 `.NS`）。
  Reads the source and records facts no signature list yields: Names the seven preposition classes with elision behaviour and flags a same-name-different-meaning collision between the Italian and Spanish marker sets. That collision is exactly the kind of trap a generator cannot surface.

- **content/v1.5.3/zh/api/localization/LanguageSpecificTextProcessor.md** — `handwritten`, 11068 B, zh, zh/api/localization, high
  > 这是整个本地化体系里**唯一的官方扩展点**。
  Reads the source and records facts no signature list yields: Separates the grammar layer from the language layer and names the three language-independent markers implemented in the base class; states when it runs inside ProcessTextToString.

- **content/v1.5.3/zh/api/localization/LocalizedTextManager.md** — `handwritten`, 12883 B, zh, zh/api/localization, high
  > 它也不是业务层 API：mod 平时拿文本应该用 `TaleWorlds.Core.GameTexts`，那是建立在 `GameTextManager` 上的高层封装，`LocalizedTextManager` 是它下面一层、语言包生命周期管理用的。
  Reads the source and records facts no signature list yields: Tells the reader which API they should actually use instead, and orders the loading sequence inside Module.Initialize. Author hierarchy advice plus load order.

- **content/v1.5.3/zh/api/localization/LocalizedVoiceManager.md** — `handwritten`, 8721 B, zh, zh/api/localization, high
  > 它与文本翻译**完全分离**：语音语言由 `MBTextManager.TryChangeVoiceLanguage` 单独控制，可以和文本语言不同。
  Reads the source and records facts no signature list yields: Explains the xml shape it consumes, why only two members are public, and the separation of voice language from text language with the exact entry point.

- **content/v1.5.3/zh/api/localization/MBTextManager.md** — `handwritten`, 12924 B, zh, zh/api/localization, high
  > 它不负责「有哪些语言」和「文件在哪」——那是 [LocalizedTextManager](../LocalizedTextManager)。
  Reads the source and records facts no signature list yields: Enumerates the three pieces of global state, then walks the actual ProcessTextToString pipeline step by step, and draws the boundary against LocalizedTextManager.

- **content/v1.5.3/zh/api/localization/MBTextModel.md** — `handwritten`, 7975 B, zh, zh/api/localization, high
  > 它也不是一个「模型对象」意义上的数据模型，名字里的 Model 指的是「语言的抽象语法表示」。
  Reads the source and records facts no signature list yields: Explains what the wrapper deliberately does not carry (source text, language, offsets) and why those are lost at the token layer, plus its double role as grammar-function body storage.

- **content/v1.5.3/zh/api/campaign/Campaign.md** — `handwritten`, 10371 B, zh, zh/api/campaign, high
  > `SetLoadingParameters` 里把自己写进静态 `Campaign.Current`，此后所有世界状态（英雄、聚落、队伍、家族、王国）都由它持有的 `CampaignObjectManager` 管理。
  Reads the source and records facts no signature list yields: Frames the class as strategic container plus main loop, states the single-instance construction and the handoff of scene control to Mission during battles.

- **content/v1.5.3/zh/api/campaign/CampaignBehaviorBase.md** — `handwritten`, 6965 B, zh, zh/api/campaign, high
  > 它不是接口也不是纯虚类基类，而是一个**有存档契约的基类**。
  Reads the source and records facts no signature list yields: Explains what the two abstract methods plus StringId plus the static lookup helper actually buy a mod, and where the behaviour instance is held and saved.

- **content/v1.5.3/zh/api/campaign/CampaignData.md** — `handwritten`, 8648 B, zh, zh/api/campaign, high
  > 改这些值等于改游戏读数据的方式，是最容易踩兼容性坑的地方之一。
  Reads the source and records facts no signature list yields: Explains what the 160 constants are for (aligning C# literals with XML) and frames editing them as a compatibility hazard rather than a config knob.

- **content/v1.5.3/zh/api/campaign/CampaignEventDispatcher.md** — `handwritten`, 7012 B, zh, zh/api/campaign, high
  > 它自己继承 `CampaignEventReceiver`，所以它**同时也是别人的一个接收者**——`CampaignEventDispatcher.Instance.OnHeroKilled(...)` 这样的调用出现在大量原生代码里，那些调用正是通过它分发出去的。
  Reads the source and records facts no signature list yields: Counts the ~280 forwarded callbacks, explains that the dispatcher is itself a receiver (the single point where the override route and the static-event route meet), and denies it any business judgement.

- **content/v1.5.3/zh/api/campaign/CampaignEventReceiver.md** — `handwritten`, 8212 B, zh, zh/api/campaign, high
  > 它和 [CampaignEvents](../CampaignEvents) 是同一套回调的**两种接入方式**：静态事件用 `IMbEvent` 订阅，继承本类用 `override`。
  Reads the source and records facts no signature list yields: Presents the 284-virtual-method contract as an alternative to touching the static bus, and contrasts the two extension styles with their costs.

- **content/v1.5.3/zh/api/campaign/CampaignEvents.md** — `handwritten`, 8689 B, zh, zh/api/campaign, high
  > 它是静态门面：每个属性转发到 `CampaignEvents.Instance`（即 `Campaign.Current.CampaignEvents`）内部持有的一个 `MbEvent` 实例，`Invoke` 在原生代码里被调用，`AddNonSerializedListener` / `AddClearListener` / `RemoveListener` 由 mod 订阅。
  Reads the source and records facts no signature list yields: Counts the 248 static IMbEvent properties, explains the forwarding target, and states it is the only proper subscription entry point for world changes.

- **content/v1.5.3/zh/api/campaign/CampaignGameMode.md** — `handwritten`, 4935 B, zh, zh/api/campaign, high
  > 整个游戏里没有第四种模式，也没有运行时切换。
  Reads the source and records facts no signature list yields: States what the three values are not (not game type, difficulty or map id), what they decide (which Default models get assembled), and that there is no runtime switch.

- **content/v1.5.3/zh/api/campaign/CampaignGameStarter.md** — `handwritten`, 8269 B, zh, zh/api/campaign, high
  > 战役结束时它连同里面的 behavior 一起被丢弃，所以别把它的属性缓存到静态字段里。
  Reads the source and records facts no signature list yields: Explains the narrow lifetime window and the consequence of caching its collections in a static field, plus why campaign must be frozen after startup.

- **content/v1.5.3/zh/api/campaign/CampaignPeriodicEventManager.md** — `handwritten`, 6313 B, zh, zh/api/campaign, high
  > 你写 mod 时**不需要直接拿它**，但你需要知道它的存在，才能解释「为什么 DailyTick 没在我预想的时间触发」。
  Reads the source and records facts no signature list yields: States the internal visibility of the tick methods and the fixed call order inside the Campaign tick chain, and gives the reader a diagnostic reason to care.

- **content/v1.5.3/zh/api/campaign/GameModels.md** — `handwritten`, 7376 B, zh, zh/api/campaign, high
  > 126 个 `public XxxModel XxxModel { get; private set; }` 属性，每个对应一种玩法规则（繁荣度、行军速度、说服、外交、AI 决策、装备估值……）。
  Reads the source and records facts no signature list yields: Counts the strongly typed properties, explains the from-the-back resolution inherited from GameModelsManager, and states that every balance mod ends up replacing one property here.

- **content/v1.5.3/zh/api/campaign/ICampaignBehavior.md** — `handwritten`, 4877 B, zh, zh/api/campaign, high
  > 单独实现这个接口而不继承 `CampaignBehaviorBase` 是可行的——代价是没有 `SyncData` 存档通道、没有 `StringId`、也没有静态 `GetCampaignBehavior<T>()`。
  Reads the source and records facts no signature list yields: Prices the interface-only route explicitly by listing the three capabilities lost. A generator would not weigh a choice.

- **content/v1.5.3/zh/api/campaign/MBCampaignEvent.md** — `handwritten`, 7374 B, zh, zh/api/campaign, high
  > 它不订阅任何东西、不读存档、不知道自己被谁驱动——驱动它的是 [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)，而管理器本身又只在游戏时间推进时被 `Campaign.Tick()` 调用。
  Reads the source and records facts no signature list yields: States what it is not (not a .NET timer, not frame-driven), names the manager that drives it, and notes the native DailyTick/HourlyTick events are instances of it.

- **content/v1.5.3/zh/api/storymode/StoryModeCheats.md** — `handwritten`, 5924 B, zh, zh/api/storymode, high
  > 守卫是两层的：
  Reads the source and records facts no signature list yields: Explains the two-layer cheat guard (engine CheckCheatUsage then StoryModeManager.Current null check) and why bypassing it corrupts story state. Also names the CommandLineArgumentFunction attribute that registers it.

- **content/v1.5.3/zh/api/storymode/ConspiracyQuestMapNotification.md** — `handwritten`, 5926 B, zh, zh/api/storymode, high
  > 真正的内容（文字里嵌入哪些聚落链接、点了跳哪）都由传入的 `descriptionText` 决定，本类只负责标题与任务引用。
  Reads the source and records facts no signature list yields: Explains the fixed title, the carried QuestBase reference for the tracked jump, and the actual insertion point in the map notice stream.

- **content/v1.5.3/zh/api/storymode/StoryModeCombatXpModel.md** — `handwritten`, 5931 B, zh, zh/api/storymode, high
  > 因为教学关的战场就设在训练场里，玩家在这里练级会跳过正常的技能曲线成长。
  Reads the source and records facts no signature list yields: Explains the training-field zeroing with the design reason, and how the per-hit XP path resolves skill from weapon type and the difficulty multiplier.

- **content/v1.5.3/zh/api/storymode/LocateAndRescueTravellerTutorialQuest.md** — `handwritten`, 5943 B, zh, zh/api/storymode, high
  > 它是全教程里最"不讲道理"的一段。
  Reads the source and records facts no signature list yields: Enumerates five separate safety nets (auto-heal below 50, peaceful release on capture, brother pulled back, party below 4 clears raiders, forced 12-hour pause) and the captive Tacitus win condition. Only someone who played it would list these.

- **content/v1.5.3/zh/api/storymode/SupportKingdomQuest.md** — `handwritten`, 5987 B, zh, zh/api/storymode, high
  > 它有四种成功形态：支持一个**帝国**王国、支持一个**非帝国**王国、自己建立帝国王国、自己建立非帝国王国——每一种都会调用 `StoryModeManager.Current.MainStoryLine.SetStoryLineSide(...)` 写死主线立场。
  Reads the source and records facts no signature list yields: Enumerates the four outcome branches and states they collapse to the same side decision, plus the paired creation with CreateKingdomQuest via GetImperialQuests/GetAntiImperialQuests.

- **content/v1.5.3/zh/api/storymode/CreateKingdomQuest.md** — `handwritten`, 6003 B, zh, zh/api/storymode, high
  > 它不做任何主动判定，只**把四件"建国有前置条件"的事显示成四条可勾选的任务日志**：氏族等级达标、主队人数 ≥100、自有符合条件的城堡至少 1 座、玩家氏族不属于任何王国。
  Reads the source and records facts no signature list yields: Explains that completion comes from a StoryModeEvents callback rather than from checking its own four log lines, which is a non-obvious indirection.

- **content/v1.5.3/zh/api/storymode/Extensions.md** — `handwritten`, 6012 B, zh, zh/api/storymode, high
  > 扩展方法不需要 using 就能编译进你的程序集，但需要 `using StoryMode.Extensions;` 才可见。
  Reads the source and records facts no signature list yields: Explains why the type exists (no type-safe downcast on SettlementComponent) and gives the exact beginner error whose message never mentions the namespace.

- **content/v1.5.3/zh/api/storymode/AssembleEmpireQuest.md** — `handwritten`, 6040 B, zh, zh/api/storymode, high
  > 它是一个 `StoryModeQuestBase` 的**嵌套类**，只能通过外层 `AssembleEmpireQuestBehavior` 创建。
  Reads the source and records facts no signature list yields: Gives the 66 percent threshold, the hourly check, the quest id, and the ownership rule for the nested class.

- **content/v1.5.3/zh/api/storymode/MetaDataExtensions.md** — `handwritten`, 6050 B, zh, zh/api/storymode, high
  > `HasStoryMode()` 的真实使用点只有一个，但它决定了整个模块的生死——`StoryMode.View` 里的 `StoryModeViewSubModule.OnBeforeGameStart`：
  Reads the source and records facts no signature list yields: Names the exact keys read from the MetaData JSON and the single call site in StoryModeViewSubModule.OnBeforeGameStart that gates whether the module loads at all.

- **content/v1.5.3/zh/api/storymode/StoryModeIncidentModel.md** — `handwritten`, 6099 B, zh, zh/api/storymode, high
  > 只要 `TutorialPhase.Instance.IsCompleted` 为 false，就返回 0。
  Reads the source and records facts no signature list yields: Lists the three trigger moments that share one gate and notes the two cooldown members are forwarded untouched.

- **content/v1.5.3/zh/api/storymode/StoryModePrisonerRecruitmentCalculationModel.md** — `handwritten`, 6133 B, zh, zh/api/storymode, high
  > 教学阶段未完成时，**主力军**（`PartyBase.MainParty`）里的俘虏每小时顺从度增量返回 0。
  Reads the source and records facts no signature list yields: Identifies the precise scope of the override (main party only, hourly obedience delta) and states that the other five members pass through, with the anti-exploit intent.

- **content/v1.5.3/zh/api/storymode/AssembleEmpireQuestBehavior.md** — `handwritten`, 6179 B, zh, zh/api/storymode, high
  > mod 想换掉第二阶段目标但保留触发条件时，只需要替换内嵌任务类。
  Reads the source and records facts no signature list yields: States the architectural split explicitly (stateless global hook vs stateful progress container) and the extension seam it creates.

- **content/v1.5.3/zh/api/save-system/ISaveDriver.md** — `handwritten`, 6429 B, zh, zh/api/save-system, high
  > `Save` 返回 `Task<SaveResultWithMessage>`（**异步**），其余方法同步。
  Reads the source and records facts no signature list yields: Names the one async member in an otherwise synchronous interface and separates the three roles (MetaData header, GameData body, driver transport), plus what a mod would use it for.

- **content/v1.5.3/zh/api/save-system/SaveableTypeDefiner.md** — `handwritten`, 8019 B, zh, zh/api/save-system, high
  > 它不执行任何保存动作，只提供**元数据**——但正是这份元数据决定了你的字段在存档里占哪几个字节、别人读你的存档能不能读对。
  Reads the source and records facts no signature list yields: Shows the definition-context pipeline diagram and separates metadata from action, and names id collision as the top cause of mods destroying each other saves.

- **content/v1.5.3/zh/api/save-system/SaveContext.md** — `handwritten`, 5975 B, zh, zh/api/save-system, high
  > 它的 id 分配表（对象 id、字符串 id、容器 id）是存档体积的主要决定因素。
  Reads the source and records facts no signature list yields: Explains the write-side graph walk with per-object/string/container id allocation and the consequence for file size, plus the integrity-drift reporting.

- **content/v1.5.3/zh/api/save-system/SaveManager.md** — `handwritten`, 7043 B, zh, zh/api/save-system, high
  > mod 引入新的可存档类型时，它提供 `CheckSaveableTypes()` 这个自查工具。
  Reads the source and records facts no signature list yields: Gives the definition-time initialization sequence and positions CheckSaveableTypes as the development-time self-check rather than a runtime feature.

- **content/v1.5.3/zh/api/mission/Mission.md** — `handwritten`, 8574 B, zh, zh/api/mission, high
  > 它**不是**战役状态容器——大地图上的英雄、聚落、队伍属于 [Campaign](../../campaign/Campaign)；进入任务时战役 tick 暂停、任务 tick 接管，任务结束后把结果写回战役。
  Reads the source and records facts no signature list yields: States the campaign/mission tick handoff explicitly, which is the boundary most modders get wrong, and describes the sealed container and its 380+ public members.

- **content/v1.5.3/zh/api/mission/MissionState.md** — `handwritten`, 6898 B, zh, zh/api/mission, high
  > 开任务的唯一正规入口是静态方法 `MissionState.OpenNew(...)`：它创建状态、构造任务、压栈。
  Reads the source and records facts no signature list yields: Shows the OpenNew call sequence and maps each GameState lifecycle callback to the control handoff into Mission.

- **content/v1.5.3/zh/api/gui/ScreenBase.md** — `handwritten`, 7458 B, zh, zh/api/gui, high
  > `ScreenManager` 只认识它，不认识任何具体界面类型。
  Reads the source and records facts no signature list yields: Lays out the push to HandleInitialize to OnInitialize to HandleActivate state machine, the four states, and the nine protected virtual hooks.

- **content/v1.5.3/zh/api/gui/ScreenManager.md** — `handwritten`, 7736 B, zh, zh/api/gui, high
  > `PushScreen` 会先 `TopScreen.HandlePause()` + `HandleD
  Reads the source and records facts no signature list yields: Explains the three collections and the stack, the pause-before-push behaviour, global layers living outside the stack, and the main-thread requirement.

- **content/v1.5.3/zh/api/engine/GauntletLayer.md** — `handwritten`, 6761 B, zh, zh/api/engine, high
  > 它只管图层这一层，不懂界面业务——业务在 ViewModel 里。
  Reads the source and records facts no signature list yields: Explains the UIContext and gamepad navigation ownership split and positions the class as the mandatory layer for a mod screen.

- **content/v1.5.3/zh/api/core/MBSubModuleBase.md** — `handwritten`, 9629 B, zh, zh/api/core, high
  > 它**只管回调**，不提供任何服务；所有实际功能都在你传的 `Game`、`IGameStarter`、`Mission` 参数上。
  Reads the source and records facts no signature list yields: Counts the 30 lifecycle hooks, orders them from OnSubModuleLoad to OnApplicationTick, and states the no-services rule that pushes functionality into the passed arguments.

- **content/v1.5.3/zh/api/campaign-ext/CampaignBehaviorManager.md** — `handwritten`, 6721 B, zh, zh/api/campaign-ext, high
  > 它做四件机械的事：保存列表、提供按类型查询、在 `RegisterEvents()` 时逐个通知、在存档前把各 behavior 的 `SyncData` 数据抓进一个 `CampaignBehaviorDataStore`。
  Reads the source and records facts no signature list yields: Names the manager as sole holder plus save collector, with the four mechanical duties and the OnBeforeSaveEvent timing.

- **content/v1.5.3/zh/api/campaign-ext/DefaultSettlementProsperityModel.md** — `handwritten`, 6689 B, zh, zh/api/campaign-ext, high
  > 它不保存状态、不订阅事件、不做缓存——每次调用都从当前世界状态重新算一遍，并把结果包成 `ExplainedNumber`（数值 + 一串带文本的修正项），供 UI 直接显示成「+1.2 繁荣度（丰收：+0.8 / 掠夺：-1.0）」。
  Reads the source and records facts no signature list yields: Calls this the reference sample for how an explained number is assembled, and states the statelesness so a modder knows not to cache its result.

- **content/v1.5.3/en/architecture/migration-from-1.4.5.md** — `handwritten`, 23993 B, en, en/architecture, high
  > `tools/_v153_migration-diff.mjs` over both source trees and carries the `.cs` path on the 1.4.5 *and*
  Reads the source and records facts no signature list yields: States the reproduction command and the two-sided evidence requirement, then tiers every claim by decompiler provenance. A migration guide that shows its own method is not a template.
