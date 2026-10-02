# Audit report — shard 4 (closes the v1.4.6 / v1.4.7 / v1.5.3 / versions region)

Author: worker-59. Owns `tools/_audit-labels-4.jsonl` and this report. Criterion unchanged: *does the page
contain specific judgment a machine could not have produced?* Size was never used as evidence, and the
`的自动生成类参考` marker was never used to decide any verdict.

---

## 1. HEADLINE — the extrapolation HELD

worker-54 read 247 of this region's 379 pages and extrapolated **227 handwritten / 20 generated** to the
remaining 132. My 132 were the out-of-sample test.

**Result: 132 of 132 read are handwritten. 0 generated. 0 unsure. The extrapolation was correct.**

Region-wide, now that every page is human-adjudicated:

| | pages |
|---|---:|
| Handwritten | **359** |
| Generated | **20** |
| Unsure | **0** |
| **Total** | **379** |

**There is no extrapolation left anywhere in this region.** Every number above was measured by reading
every page. The 20 generated pages are `content/_index.md` plus the 19 pages under `content/versions/`;
all 20 were already read and labeled in shard 3, and all 20 were confirmed again in this shard against
the live tree. **Zero of the 132 unread pages are generated pages** — they lie entirely inside
`content/v1.4.6/`, `content/v1.4.7/` and `content/v1.5.3/`.

This is the one place in the whole audit where the extrapolation could have failed, because a
generator could in principle have been run over the v1.4.6/v1.4.7/v1.5.3 type pages as easily as over
`content/versions/`. It was not. worker-54's sample was representative.

---

## 2. Method — full text for all 132, verbatim

**Every one of the 132 pages was read in full. No exceptions, no sampling, no shortcuts.**

- 33 batches of 4 pages, each batch a verbatim byte copy of the file.
- **No frontmatter strip. No code-block elision. No head/tail digest. No line-count or word-count proxy.**
  Where a file exceeded the 50 KB read cap it was continued by explicit `offset`, so every line of every
  page passed through context at least once.
- 1,648,805 bytes / ~1.65 MB of source text, ~456k tokens. Average page 12.5 KB; range 5,825 B
  (`SaveableFieldAttribute`) to 63,932 B (`v1.4.6/zh/api/mission/Agent.md`).
- Verdicts were written down **batch by batch as each batch was read**, not accumulated and written at
  the end. Ordering within the file is the region reading order.

I had initially built a reduced "head + tail + all-headings" digest to fit the working set, and
disclosed it. On instruction I discarded it and re-read from scratch at full text, including the 8 pages
already judged under the reduced method. **The reduction contributed nothing to the final artifact.**

### Subagent note
No subagents were used. Every one of the 132 verdicts is my own reading. I could not delegate, so the
"parallel reading" lever available elsewhere in this audit was not available here; throughput was the
cost of the full-text decision, and it was paid.

---

## 3. The marker question, both directions

This is the only place in the audit where the positive and negative controls sit on the same pages, so
it is the only place the marker can be characterised rather than merely observed.

Marker under test: `的自动生成类参考`. Measured over all **379** pages of the region, with the human
verdict as ground truth.

| direction | count |
|---|---:|
| **(a) marker PRESENT but the body is genuinely hand-written** | **0** |
| **(b) marker ABSENT but the body is genuinely generated** | **20** |

Raw facts: the marker occurs on **0 of 379** pages. All 20 genuinely generated pages lack it. All 359
hand-written pages also lack it.

**Both directions are non-zero-or-zero in the worst way: the marker never fires at all.** Its behaviour
in this region is recall 0/20 = **0%**, and precision is **undefined** (zero pages were ever flagged, so
there is no denominator). Specificity is trivially 100% — 359 of 359 pages correctly not flagged — but
that is vacuous: a test that never fires is never wrong.

Stated plainly: **this marker is worthless on this region. A classifier keyed on it would call all 379
pages clean, including all 20 that are machine-generated.**

### A marker that does discriminate

While adjudicating I measured a different signal on the same 379 pages. The type-name-swapped
Mental Model sentence:

```
Treat `Hero` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.
```

| | pages containing it |
|---|---:|
| generated | **20 / 20** |
| handwritten | **0 / 359** |

That is **20/20 recall and 20/20 precision on this region — no false positives, no false negatives.**
Two caveats before anyone builds on it: (i) it is a marker of *one generator's* template, not a general
detector of generated prose, and it is an English sentence, so it would miss a zh-only generated corpus;
(ii) it is a proxy I measured, not a verdict criterion — every one of my 132 verdicts was decided by
reading the body first.

A second, weaker corroborating signal: the heading `## 对 modder 的影响 / Impact for modders` appears
on **18 of the 20** generated pages (the two exceptions are `content/_index.md` and
`content/versions/_index.md`, the two index pages, which do not carry per-class sections). So it is a
useful heuristic but not a clean one, and I would not build a classifier on it.

---

## 4. Stratum table for the 132 (and how they sit against shard 3)

| lang | size bucket | pages | handwritten | generated |
|---|---|---:|---:|---:|
| zh | 3–8 KB | 37 | 37 | 0 |
| zh | 8–20 KB | 62 | 62 | 0 |
| zh | >20 KB | 10 | 10 | 0 |
| en | 8–20 KB | 20 | 20 | 0 |
| en | >20 KB | 3 | 3 | 0 |
| **total** | | **132** | **132** | **0** |

By version directory: v1.4.6 26, v1.4.7 42, v1.5.3 64.

Language split: 109 zh / 23 en. There is no `en | 1.2-3KB` and no `en | 3-8KB` stratum in my 132 at all;
shard 3's generated pages all sat in `3-8KB | en`, a stratum I never had a page from. That is worth
stating explicitly for anyone reading the combined table: **the generated stratum and my entire shard
were disjoint in both size and language**, which is *why* the extrapolation could not have been
falsified by a size or language prior, and also why it was a real test of the reading rather than of a
confound.

---

## 5. Findings from the reading

Verdict quality is the deliverable, but the reading turned up defects worth carrying forward. All were
found by reading the body; none by any script.

### 5.1 Twin pages (zh/en, same type, same version) contradict each other

These are the most actionable findings, because a modder reading one page is actively misled by the
other. Every pair below is `content/v1.4.7/zh/...` vs `content/v1.4.7/en/...`.

| type | zh says | en says |
|---|---|---|
| `Mission` | `GetClosestEnemyAgent(Agent)`, `IsPositionInsideBoundaries(Vec3)` | "There is no single-argument overload"; boundary queries take `Vec2` |
| `Agent` | `MortalityState` = `Alive`/`Dying`/`Dead` | `Mortal`/`Invulnerable`/`Immortal`, "there is no `Alive` member" |
| `MissionBehavior` | example writes `collisionData.DamageFactor *= 1.5f` | "damage values on it are read-only"; only `AttackerStunPeriod`/`DefenderStunPeriod` are settable |
| `ScreenManager` | `AddGlobalLayer(ScreenLayer, bool)` but `RemoveGlobalLayer(GlobalLayer)`; example passes a bare `GauntletLayer` | "Passing a bare `GauntletLayer` to `AddGlobalLayer` does not compile" |
| `ScreenLayer` | `RefreshGlobalOrder` is `protected virtual`; example calls `EarlyProcessEvents(InputType.Touch)` after handling Enter | `protected internal virtual`; `InputType` has no `Touch` |
| `CampaignBehaviorBase` | `SyncData` is "read when `IsLoading()`, write otherwise"; omitting a read leaves residue that accumulates | one `SyncData` call, direction chosen by the save system; an omitted field is simply never seen |
| `LoadContext` | "Do not construct a `LoadContext` yourself" — then example 2 constructs one | no such self-contradiction |

The `Agent` / `Mission` / `MissionBehavior` ones are the serious ones: each zh page asserts an API shape
that the same-version English page explicitly contradicts, and in the `MissionBehavior` case the zh
example will not compile against the real type. The v1.4.6 zh `Agent` page agrees with the English
(`Mortal`/`Invulnerable`/`Immortal`), which suggests the v1.4.7 zh page is the outlier rather than a
systematic translation policy.

### 5.2 Declared constants that nothing reads

A recurring pattern worth a lint: a `const` is declared, and the method that "should" use it hardcodes
the literal instead.

- `v1.5.3/zh/api/storymode/RebuildPlayerClanQuest.md` — `GoldGoal = 2000`, `ClanTierRenownGoal = 50`,
  `HiredCompanionGoal = 1`, `RenownReward = 25` all declared; the body uses literals `2000 / 50 / 1`.
  Changing the constants changes nothing.
- `v1.5.3/zh/api/storymode/FirstPhase.md` — `NeededBannerPieceCount = 3` declared, but `AllPiecesCollected`
  hardcodes `== 3`.
- `v1.5.3/zh/api/storymode/SecondPhase.md` — `ConspiracyQuestDurationAsDays = 21` declared and used
  nowhere in the source.
- `v1.5.3/zh/api/storymode/StoryModeBannerEffects.md` — `NotImplementedText` declared; `InitializeAll`
  uses the literal instead.
- `v1.5.3/zh/api/storymode/DefeatTheConspiracyQuestBehavior.md` — `TroopLimitPerNewClanParty = 600` is a
  public tuning constant that `InitializeFinalPhase` never references.

### 5.3 Code paths documented as unimplemented or dead

- `v1.5.3/zh/api/storymode/StoryModeBannerEffects.md` — the dragon banner registers with placeholder
  values: two `Not Implemented.` strings, `0f/0f/0f`, and `EffectIncrementType.Invalid`. **In 1.5.3 the
  dragon banner produces no visual effect on the map at all.**
- `v1.5.3/zh/api/localization/SpanishTextProcessor.md` — the `Contractions` table (the `de+el=del`
  forms) is declared but `ProcessToken` never reads it. Dead code awaiting a feature.
- `v1.5.3/zh/api/storymode/StoryModeData.md` — the `_conspiracyTroops` whitelist contains
  `conspiracy_commander_antiempire` but not `conspiracy_commander_empire`. Looks like an upstream
  oversight; the two commanders are not treated symmetrically.

### 5.4 Bugs the pages surface in the game itself

Read from source, not opinionated:

- `DestroyRaidersConspiracyQuest.OnQuestSucceeded` writes `_targetSettlement.Town.Security += 5f`
  unconditionally, while `DetermineTargetSettlement` explicitly admits `IsTown || IsCastle`. A castle
  target ⇒ `NullReferenceException`.
- `DefeatTheConspiracyQuest` progress is `(Reinforced - Current) / (Reinforced - Initial/2) * 100` with
  **no zero-denominator guard**; an exact half-value yields `Infinity`/`NaN`, and the float→int
  conversion can produce `int.MinValue`.
- `RebuildPlayerClanQuest._finishQuest` is the only non-saved field, so saving inside the
  "conditions met → CompleteQuestWithSuccess" window replays the completion.
- `ConspiracyBaseOfOperationsDiscoveredConspiracyQuest._conspiracyStrengthDecreaseAmount` has no
  `[SaveableField]`, so loading during "duel won, not yet settled" silently downgrades 75 → 50.
- `TrainingField.Deserialize` calls `float.Parse` without `CultureInfo.InvariantCulture`, so a
  comma-decimal locale throws `FormatException` on `background_crop_position`.
- `DisruptSupplyLinesConspiracyQuest.GetNextSettlement` can return null into a `Settlement[7]`, after
  which `QuestToSettlement` (the last element) can never match and the caravan walks null targets.

### 5.5 Documentation that argues with itself, correctly

Worth crediting because it is the behaviour we want and it is rare:
`v1.4.6/zh/architecture/version-delta.md` publishes its own member-count table and then warns that
the 1.4.5 column is systematically low because the decompiler spreads partial-class members across
files — "**do not read '1.4.6 has 44 members more than 1.4.5' as new functionality**", because the same
figure is 222 on 1.3.15. And `v1.4.6/zh/api/localization/TextObject.md` asserts `GetDepth` is new in
1.4.6, then corrects itself two paragraphs later: 1.4.5 already has it, so it landed between 1.3.15 and
1.4.5. A generator cannot produce either.

### 5.6 An inversion worth noting

`v1.4.6/zh/api/campaign-ext/MBObjectBase.md` is a **materially different and in places richer article**
than the 1.4.7 zh/en pages for the same type. The 1.4.6 page carries the save slot numbers
(`SaveableProperty(1/2/3)`, the `internal`+`CachedData`+saveable `IsRegistered`), the base `Deserialize`
NRE-ing on an XML node with no `id`, `OnBeforeLoad` calling `TryRegisterObjectWithoutInitialization`,
the copy-constructor copying only `StringId`, and `AutoGeneratedInstanceCollectObjects` silently dropping
references. The 1.4.7 pages have none of that. The newer page is the thinner one.

---

## 6. Defect in my own recording method

Reported as a defect, not a silent fix, because the lead identified it and it is gate material for the
rest of the audit.

**The defect.** My quote verification was written as a *disjunctive* test:

```js
if (t.includes(quote) || t.includes(quote.replace(/\*\*/g,''))) ok
```

The second branch is a normalised test. It can never fail for any quote whose words exist on the page,
so it silently laundered reconstruction into a pass. I reported "0 failures" from it. That claim was not
earned.

**The failure it let through.** `content/v1.5.3/zh/api/storymode/StoryModeTroopSupplierProbabilityModel.md`.
I had taken a genuine mid-sentence fragment — `教学分支只看本次新增，教学后分支看全部` — and wrapped it
in `**...**`. The source has no bold there; the bold belongs to `**顺序为什么重要**` at the start of the
line. The words were real and the `handwritten` verdict is unaffected, but the artifact was not verbatim.

**Why this class of failure is worse than an invented quote.** A fabricated quote fails loudly on
inspection. A *reconstructed* one passes a glance — the reader finds the substance, concludes it checks
out, and stops looking — while quietly corroding trust in every other quote in the file. The normalised
branch is precisely what converts "loud failure" into "silent pass".

**The structural fix.** Quotes are now extracted **from disk**, never composed: the writer splits the
page into lines, scores each line by how many of the quote's token-runs it contains, and stores that
exact line. Verbatim by construction rather than by transcription.

**Final verification, exact substring only** — `fileText.includes(quote)`, no whitespace collapsing, no
backtick stripping, no case folding:

> **checked 132 · failures 0**

Control run on the sibling file (§7) shows the difference is real, not an artefact of a permissive test.

---

## 7. Integrity notes — things I found about state I do not own

### 7.1 Quote-fidelity check across all three label files

Exact-substring test, run again at report time. The check, stated precisely so it can be repeated:

```js
const rows = fs.readFileSync(f,'utf8').trim().split('\n').map(JSON.parse);
const bad  = rows.filter(o => !fs.existsSync(o.path) || !fs.readFileSync(o.path,'utf8').includes(o.quote));
```

No whitespace collapsing, no backtick stripping, no case folding, no ellipsis handling.

| file | rows | exact-OK | not exact | page missing |
|---|---:|---:|---:|---:|
| `tools/_audit-labels-4.jsonl` (mine) | 132 | **132** | **0** | 0 |
| `tools/_audit-labels-5.jsonl` | 227 | **227** | **0** | 0 |
| `tools/_audit-labels-3.jsonl` | 247 | 221 | **26** | 1 |

**Scope note, so this is not misread.** The 26 are in `_audit-labels-3.jsonl`, worker-54's *original*
shard-3 file. They are **not** in `_audit-labels-5.jsonl`, the current sibling file, which is clean at
227/227 — I re-verified that specifically rather than assuming it, and I make no claim against it.

Of the 26 in `_audit-labels-3.jsonl`, one is a page that no longer exists
(`content/v1.4.6/zh/api/mission-ext/_index.md`, file-missing, no quote to check). The other 25 have real
substance but are stored as **elided or reconstructed** rather than contiguous — they are typically
multi-sentence spans carrying `**bold**` emphasis and sometimes `……`, e.g. verbatim from the file:

```
content/v1.4.6/zh/api/core-extra/TradeItemComponent.md
  "它是 [ItemObject](../ItemObject) 的 `FoodComponent` 属性返回的类型（**名字叫 Food，类型是 TradeItem**）"

content/v1.4.7/zh/api/sandbox/_index.md
  "根目录下 37 个 `.cs` 里有一大半是作弊（`GameplayCheatsManager`、`BoostSkillCheatGroup`、……）……作弊这一族默认不在文档树里，这是有意的取舍。"

content/v1.5.3/zh/api/storymode/RebuildPlayerClanQuestBehaviorTypeDefiner.md
  "它被声明在 `RescueFamilyQuestBehavior.cs` 的**文件末尾、嵌套在 `RescueFamilyQuest` 类内部**（源码里的缩进会误导）……名字里的 \"RebuildPlayerClan\" 指的是**前置任务**"
```

About half are explained purely by markdown soft line-wrapping (the words are genuine, the string is
split). The rest are not explained by that, and — checked against `git show HEAD` — **not** by a
concurrent edit either: for all of them the quote matches neither the current worktree nor HEAD.

**This changes no verdict.** A non-verbatim quote is an evidence-fidelity problem, not a classification
problem; every `handwritten` / `generated` call rests on the reading, not on the quote string. What it
does mean is that **the three label files do not share one quote standard**, so "the quotes verify" is
only a meaningful claim file-by-file, not corpus-wide.

I have not touched `_audit-labels-3.jsonl` or `_audit-labels-5.jsonl`; neither is mine.

### 7.2 `content/` was being modified concurrently while I read

`git status` shows **45 modified files under `content/`**, all in `v1.4.6/zh/api/**`. These are
pre-existing worktree modifications by another agent doing rewrite work. **I made zero writes under
`content/`** — my only writes were `tools/_audit-labels-4.jsonl` and this report.

Four of my 132 pages are inside that modified set:

- `content/v1.4.6/zh/api/core/MBSubModuleBase.md`
- `content/v1.4.6/zh/api/localization/TextObject.md`
- `content/v1.4.6/zh/api/save-system/SaveablePropertyAttribute.md`
- `content/v1.4.6/zh/api/save-system/SaveableTypeDefiner.md`

I read and labeled the **current worktree** versions, and all 132 of my quotes match the worktree exactly,
so my file is self-consistent with what is on disk right now. But this has two consequences I should
not paper over:

1. My §5.1 observation about `SaveablePropertyAttribute` claiming a completed 1.4.5 cross-version check
   while its twin `SaveableFieldAttribute` admits it could not check 1.4.5 may simply be a
   mid-rewrite state of two sibling pages, not a stable inconsistency. I am flagging it rather than
   reporting it as a settled defect.
2. More generally: **any audit of this tree is auditing a moving target.** A verdict recorded at time T
   is only valid against the bytes at time T. Worth pinning the tree before the next pass.

---

## 8. What this does and does not establish

**Establishes.**

- The v1.4.6 / v1.4.7 / v1.5.3 / versions region is **379/379 human-adjudicated. Zero extrapolation.**
- worker-54's 227:20 extrapolation **held** on the 132 pages it never read. Region: **359 handwritten /
  20 generated / 0 unsure.**
- The audited marker `的自动生成类参考` has **0% recall and undefined precision** on this region, with
  both directions measured: 0 false positives (vacuous), 20 false negatives.
- 20 of 20 generated pages carry a single type-name-swapped sentence that no handwritten page carries —
  a clean separator on this corpus, with the caveats in §3.

**Does not establish.**

- That the corpus is clean. It is not: 20 machine-generated pages ship to readers, all of them
  `content/versions/` plus the site home, all of them already known from shard 3.
- That any page is *factually* correct. My verdict was authored-vs-generated, not
  correct-vs-incorrect. §5.1 and §5.4 are the two places where I found substantive problems, and they are
  in hand-written pages.
- Anything about the older trees in the other shards. The extrapolation that held here was over *size
  and language strata inside one author's own output*; it says nothing about whether worker-55's
  sibling extrapolation over the v1.3.x/v1.4.5 trees held, because those trees have a different author
  and a different generator history. **If that extrapolation is being used to skip pages, this result is
  not a licence to skip them.** The only trustworthy number for those trees is a full read.
- Generalisation of the §3 template-sentence marker beyond this corpus. One generator, one language.

---

## 9. Reproduction

`tools/_audit-labels-4.jsonl` — 132 rows, schema identical to `tools/_audit-labels-3.jsonl`
(`path, label, size_bytes, lang, subdir, quote, reason, confidence`). Rows are in region reading order.

Combine with shard 3 for the region:

```
node -e "const fs=require('fs');const a=['tools/_audit-labels-3.jsonl','tools/_audit-labels-4.jsonl']
  .flatMap(f=>fs.readFileSync(f,'utf8').trim().split('\n').map(JSON.parse));
  console.log(a.length, a.reduce((m,o)=>(m[o.label]=(m[o.label]||0)+1,m),{}));"
# 379 { handwritten: 359, generated: 20 }
```

Verify quotes as exact substrings (this is the check that matters — see §6):

```
node -e "const fs=require('fs');const r=fs.readFileSync('tools/_audit-labels-4.jsonl','utf8')
  .trim().split('\n').map(JSON.parse);
  const bad=r.filter(o=>!fs.readFileSync(o.path,'utf8').includes(o.quote));
  console.log('checked',r.length,'failures',bad.length);"
# checked 132 failures 0
```
