# Worker D — adversarial audit report

**Role:** adversarial auditor (worker-55). **Scope:** read-only over `content/**`.
**Deliverables:** `tools/_audit_gen_classify.mjs` (read-only signal extractor), this file.
**Date:** 2026-10-02. All numbers below are labelled **MEASURED** or **EXTRAPOLATED**.
No number in this report is extrapolated unless explicitly marked.

Reproduce everything with:

```
node tools/_audit_gen_classify.mjs            # corpus rates, exits 0
node tools/_audit_gen_classify.mjs --control  # control run, EXITS 2 (see Part 2)
```

---

## Headline

1. **`classifyPage=='stub'` is not independent evidence.** Jaccard 0.9904 against the
   frontmatter marker. It must not be cited as corroboration of the marker.
2. **The `desc_template` signal cannot be validated from any label file that currently
   exists.** Zero labelled pages on *either* side carry it. Exit 2, per the hard rule.
3. **The central gap question is answered.** The 31,478-page gap is overwhelmingly
   **generated pages with per-type variation**, not handwritten pages with a stale
   description. Evidence: 36,519 self-declared pages collapse into **30 distinct Overview
   templates with zero singletons**.
4. **worker-54 is right on everything I checked** — 100% agreement on 22 overlapping pages,
   0 disagreements. But their sample never touched 2 of their 3 assigned trees.

---

## Part 0 — Enumeration self-assert (the `\w` path-filter bug class)

| check | value |
|---|---|
| readdir walk page count | **39,013** (MEASURED) |
| shell `find content -type f -name '*.md'` | **39,013** (MEASURED, independent method) |
| matches lead's stated total | **PASS** |
| dotted directories found | **3**, containing **39** pages |
| disjoint-count self-assert | **PASS** (39 + 38,974 = 39,013) |

The three dotted directories, all of which a `\w`-based path filter would silently drop:

- `content/v1.3.15/en/native-1.3.15-src` — 13 pages
- `content/v1.3.15/zh/native-1.3.15-src` — 13 pages
- `content/v1.4.5/zh/native-1.3.15-src` — 13 pages

**Correction to the briefing.** I was told to expect "a silent 189-page drop". The actual
figure is **39 pages**, not 189 (MEASURED). The briefing overstated it by ~5x. The bug class
is real; the magnitude was not. The walk in `_audit_gen_classify.mjs` is readdir-based and
recurses through dotted directories.

---

## Part 1 — Signal inventory (corpus-wide, all MEASURED)

Reproduces the lead's briefed figures exactly, which validates the walk.

| signal | hits | corpus rate |
|---|---:|---:|
| `stamp:ns_boilerplate_zh` (`先从命名空间`) | 14,628 | 37.50% |
| `stamp:purpose_label` (`**Purpose:**`) | 9,837 | 25.21% |
| `stamp:is_a_public_type` | 93 | 0.24% |
| `stamp:mental_read_props_zh` | 4 | 0.01% |
| `stamp:read_properties_first` | 0 | 0.00% |
| `stamp:a_public_class_in` | 0 | 0.00% |
| `stamp:generated_by_comment` | 0 | 0.00% |
| `stamp:type_label` | 37,735 | 96.72% |
| `links:rel_count_gt_150` | 77 | 0.20% |
| `desc:zh_autogen_fm` | 19,093 | 48.94% |
| `desc:en_autogen_fm` (`/auto-generated/i`) | 17,426 | 44.67% |
| `desc:combined_autogen_fm` | 36,519 | 93.61% |
| `desc:autogen_in_BODY` | 63 | 0.16% |
| `v146:genfp_main_members` | 175 | 0.45% |
| `v146:handwritten_4part` | 842 | 2.16% |
| `policy:classifyPage==deep_pass` | 1,475 | 3.78% |
| `policy:classifyPage==stub` | 36,747 | 94.19% |
| `policy:classifyPage==noise` | 626 | 1.60% |
| `tmpl:mental_treat_entrypoint_en` | 71 | 0.18% |
| `tmpl:mental_entrynode_zh` | 80 | 0.21% |
| `tmpl:overview_family_primary_zh` | 14,632 | 37.51% |
| `tmpl:overview_family_primary_en` | 13,140 | 33.68% |
| `tmpl:overview_family_any` (30 known families) | 33,808 | 86.53% |
| `gen:purpose_this_instance_artifact` | 4,052 | 10.39% |
| `gen:placeholder_instance_ellipsis` | 12,974 | 33.26% |

### The English-marker briefing error, confirmed

The briefed phrase `a public class in` is genuinely **0 occurrences** — but the *string was
wrong*, not the tree. Sampling `en/` frontmatter descriptions recovered the real English
twin of zh `的自动生成类参考`:

> `Auto-generated class reference for <Type>.`

That single string error was hiding **17,426 pages** of coverage. I derived this
independently before lead-5's message #2410 arrived; we agree.

### Size buckets (MEASURED; size is NOT a verdict criterion)

| bucket | pages | share |
|---|---:|---:|
| <1.2KB | 11,213 | 28.74% |
| 1.2–3KB | 18,832 | 48.27% |
| 3–8KB | 6,557 | 16.81% |
| 8–20KB | 2,111 | 5.41% |
| >20KB | 300 | 0.77% |

---

## Part 2 — Control run: **EXIT 2, REFUSING TO ISSUE A VERDICT**

`tools/_audit-labels-3.jsonl` grew during my run: 20 rows → 40 → 124 → 227
(generated=20, handwritten=207, all confidence `high`).

### 2a. `desc_template` — REFUSED, and the reason is worse than "region-limited"

| signal | corpus | GENERATED | HANDWRITTEN |
|---|---:|---:|---:|
| `desc:zh_autogen_fm` | 48.94% | 0/20 = 0.00% | 0/207 = 0.00% |
| `desc:en_autogen_fm` | 44.67% | 0/20 = 0.00% | 0/207 = 0.00% |
| `desc:combined_autogen_fm` | 93.61% | 0/20 = 0.00% | 0/207 = 0.00% |

**Not one labelled page on either side carries the marker.** The 20 GENERATED rows are
`content/versions/**` + `content/_index.md`, which have **no `description:` field at all**.
The 207 HANDWRITTEN rows come from the new trees, where the marker is absent by
construction. So the control set contains **zero coverage** of this signal — not a
vacuous-but-passing 0%, but an empty cell on both sides.

**`desc_template` is UNTESTED — neither valid nor invalid.** The 93.6% self-declaration
rate cannot stand in for a false-positive rate.

> **"36,519 pages (93.6%) SELF-DECLARE as auto-generated" is NOT "36,519 pages ARE
> auto-generated."** A page can carry a stale boilerplate description while its body is
> genuinely hand-written. Treating self-declaration as a verdict is the error class that
> nearly removed 1,132 handwritten pages earlier this session.

**Missing input, and from whom:**
- ≥1 hand-labelled **OLD-tree** page (v1.3.0 / v1.3.15 / v1.4.5) that **does** carry the
  auto-generated frontmatter description, labelled **handwritten** — this is the only
  thing that can produce a false positive.
- ≥1 hand-labelled **GENERATED** page carrying the marker.
- **Owner: lead-4.** Until then the tool exits 2 on every run.

### 2b. Signals DECLARED INVALID (>5% hit rate on known-handwritten)

| signal | corpus | GENERATED | HANDWRITTEN | why it fails |
|---|---:|---:|---:|---|
| `policy:classifyPage==noise` | 1.60% | 100% | **55.77%** | definitionally hostile to `_index.md` |
| `policy:classifyPage==deep_pass` | 3.78% | 0% | **44.23%** | misses >half of real handwritten |
| `v146:handwritten_4part` | 2.16% | 0% | **44.23%** | same rule as above, same failure |
| `shape:no_mental_model_heading` | 1.62% | 0% | **48.08%** | present on ~half of real pages |
| `shape:has_code_fence` | 99.03% | 100% | **71.43%** | near-universal, no discrimination |
| `shape:has_csharp_fence` | 98.57% | 95% | **65.14%** | near-universal |

**The headline casualty is `classifyPage=='deep_pass'` at 44.23%.** The house prior's
"deep page" test fires on fewer than half of pages that a human rater independently
certified as hand-written. It must not be used as a handwritten proxy.

Two of these are structural artifacts, not quality judgments: `classifyPage` hard-returns
`noise` for every `_index.md` that is not a "family entry" page, and ~70% of worker-54's
handwritten sample is `_index.md` shells. `has_code_fence` is simply universal.

### 2c. The one clean discriminator

| signal | corpus | GENERATED | HANDWRITTEN | verdict |
|---|---:|---:|---:|---|
| `tmpl:mental_treat_entrypoint_en` | 0.18% | **100%** (20/20) | **0%** (0/207) | discriminator |

The exact sentence *"Treat `X` as an entry point or data node for this subsystem: inspect
its properties first, then decide which methods to call."* appears on every GENERATED page
and no HANDWRITTEN page. It is also the single most specific generator fingerprint found in
this audit: **71 pages, 64 distinct type names swapped into one otherwise-identical
sentence.**

---

## Part 3 — Refutation of worker-54

**Region (post scope-change #2395):** `content/v1.4.6/**`, `v1.4.7/**`, `v1.5.3/**`.
I re-read all 30 pages myself, blind, before comparing.

| metric | value |
|---|---|
| my sample | **30 pages**, all judged **handwritten** |
| overlap with worker-54's labels | **22 pages** |
| **raw agreement** | **22/22 = 100.0%** |
| **disagreements** | **0** |

### 3a. No disagreements to report

I could not refute a single worker-54 verdict. I went looking for the error in the dangerous
direction (a false `generated` label, which is what nearly deleted 1,132 pages) by
independently reading `content/versions/Hero.md` and `IssueBase.md`, which 54 labelled
`generated`. **54 is right**, and for the right reason: the Mental Model is the
type-name-swapped template verbatim, and the page self-declares
`自动生成自源码 API 提取`.

### 3b. Anchoring risk — flagged, not asserted

`versions/*.md` pages *do* carry an "对 modder 的影响 / Impact for modders" paragraph with
page-specific content (e.g. `IssueBase.md`: "1.4.5 移除了 `GetAlternativeSolutionSkill(Hero)`。
若你的 mod 重写该方法…需迁移到新接口"). That paragraph is genuinely specific. The verdict is
still `generated`, because the surrounding structure dominates — but if 54 anchored on the
`自动生成` stamp alone without weighing that paragraph, the reasoning was thinner than the
conclusion. **The conclusion is correct; the stated reason should have mentioned the
template swap, which it did.** No action needed.

### 3c. The real finding: coverage, not accuracy

worker-54's 207 handwritten rows are **entirely inside the new trees**, and the trees are
unevenly covered:

| tree | pages on disk | labelled by 54 at first run | labelled now |
|---|---:|---:|---:|
| v1.4.6 | 112 | **0** | 59 |
| v1.4.7 | 97 | 38 | 55 |
| v1.5.3 | 150 | **0** | 73 |

At first run worker-54 had sampled **one of their three assigned trees**. Combined with the
fact that the new trees carry the auto-generated marker on **0/359 pages**, this means
**the new trees are structurally incapable of testing any frontmatter-marker signal**, and
their early handwritten sample was ~94% `_index.md` navigation shells rather than the deep
class pages the old trees are full of.

### 3d. What the new trees actually contain

**30/30 of my new-tree sample is handwritten.** Not one generated page. The evidence is
concrete and author-only in every case:

- `v1.4.6/zh/api/core/_index.md` — cites `tools/_dir-map-canonical.json` and
  `bannerlord-1.4.6/TaleWorlds.MountAndBlade/Module.cs:1185` by file and line.
- `v1.4.6/zh/api/save-system/SaveableFieldAttribute.md` — names a real private field:
  "`Game._nextUniqueTroopSeed` 就是 `[SaveableField(11)] private int`".
- `v1.4.7/en/api/modulemanager/_index.md` — *"**no version of the game has a class called
  `ModuleManager`**. The directory is named after the namespace."*
- `v1.4.7/zh/api/campaign/IFaction.md` — explains that `[SaveableInterface(22001)]` means
  save/load resolves by interface ID, so changing implementing types breaks old saves.
- `v1.5.3/zh/api/storymode/IsArzagosTag.md` — traces `int.MinValue` scoring exclusion in
  the conversation-tag system, plus a three-way mentor-tag comparison and a `**坑**` section.
- `v1.4.7/en/architecture/save-system.md` — *"**Default to the first one.** Reach for the
  second only when…"* and *"Renaming a literal means losing the data."*

Machine-produced prose does not cite `Module.cs:1185`.

---

## Part 4 — THE CENTRAL QUESTION: what is the 31,478-page gap?

> frontmatter marker claims 36,519 pages are auto-generated; the template-cluster signal
> confirms only 5,041. GAP = 31,478. Are those (a) handwritten pages with a stale
> boilerplate description, or (b) genuinely generated pages with per-type variation?

**Answer: overwhelmingly (b).** MEASURED, by a method independent of both signals in play.

Erase each self-declared page's **own type name** from its Overview, then count distinct
resulting strings:

| metric | value |
|---|---:|
| self-declared pages | **36,519** |
| with an Overview to abstract | 36,395 |
| **distinct Overview templates** | **30** |
| **singleton templates** (used by exactly 1 page) | **0** |
| coverage of top-5 families | **30,599 = 83.79%** |

The two dominant families alone:

- **14,632 (40.07%)** zh — *"`X` 位于 `NS`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表…"*
- **13,140 (36.0%)** en — *"…exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members."*

**Zero singletons is the load-bearing fact.** 36,519 pages, 30 opening sentences, no page
inventing its own. That is not "handwritten pages with a stale description line" — a stale
*description* is plausible, but a stale *Overview sentence too* is not.

I confirmed this by reading the "neither-template" remainder directly. `AgeModel.md` and
`AllianceModel.md` matched neither of my two hardcoded regexes, so they were the obvious
candidates for (a). They are not:

> `AgeModel` is a rule model that usually defines how a subsystem should compute things.
> Modders most often customize behavior by replacing or subclassing it.
>
> Treat `AgeModel` as a Model-style extension point: first identify who creates it, who owns
> it, and who calls it…

That is a **third and fourth template family** ("rule model", "Gauntlet UI widget", "data
carrier", "view-layer object", "manager", "handler"…). My first regex pass was simply too
narrow; the pages were never handwritten. Corroborating machine artifact on every `Purpose:`
line of those pages:

> `**Purpose:**` Reads and returns the call to war cost value held by **the this instance**.

"The this instance" is ungrammatical in a way a human does not write. It is built by
concatenating a return-type description with a fixed noun phrase. It appears on **4,052**
pages corpus-wide.

**Why the cluster signal only found 5,041:** whole-body normalization requires the *member
tables* to be identical too. They differ per type, so whole-body identity is much stricter
than template identity at the section level. 5,041 is a floor, not an estimate.

### The cluster count is NOT stable — report both numbers

I implemented the cluster signal independently. Mine is **more aggressive** (collapses all
digits, strips heading markers, collapses whitespace):

| implementation | clusters ≥3 | pages inside |
|---|---:|---:|
| lead-5 | 714 | 5,041 |
| **worker D** | **3,415** | **14,339** |

These are **method-sensitive**, not a contradiction, and I am not picking the nicer one. The
lead's stated advantage — a zero base rate in the new trees — **holds in both**: by tree my
run gives `v1.3.0 4,508 · v1.3.15 4,746 · v1.4.5 5,085 · v1.4.6 0 · v1.4.7 0 · v1.5.3 0`.
**Only the zero is safe to quote.** Any specific cluster or page count must be published
with its normalization recipe attached.

---

## Part 5 — `classifyPage` is not independent evidence

The briefing asked whether the 36,747 stub pages are suspicious because they are close to
36,519. They are close because they are **nearly the same set**:

| metric | value |
|---|---:|
| `classifyPage=='stub'` | **36,747** |
| frontmatter marker | **36,519** |
| both | **36,456** (99.21% of stub pages) |
| stub but no marker | 291 |
| marker but not stub | 63 |
| **Jaccard** | **0.9904** |

**`classifyPage` is largely re-reading the marker. It must not be cited as corroboration of
it.** The two agreeing tells you one thing, not two.

**Unresolved discrepancy, flagged not papered over:** the briefing states `classifyPage`
"once labelled **15,507** pages as 'stub'". I measure **36,747**, and 36,747 is stable
across every run in this session. I searched the working tree and `git log -S` and found
**15,507 nowhere**. It is most likely a stale figure from a smaller earlier corpus, but I
could not confirm that, so I am not asserting it. Someone who remembers where 15,507 came
from should check it before it is repeated.

---

## Part 6 — Resolving my own 35 vs 71 discrepancy

I reported 35, then 71, from two runs of the same idea. Held unreconciled, per the lead's
instruction, until I could explain it. **Cause found.**

- The 35 came from `/Treat\s+\S+(\s+as an entry point...)/`
- The 71 came from `/^Treat\s+`[^`]+`\s+as an entry point.../`

`\S+` cannot match a token containing a space. `content/v1.3.0/en/architecture/save-system.md`
swaps in **`Save System`** — a name with a space. Same for `Campaign Basics`, `Common Issues`,
and similar guide/index pages where the generator substituted a *page title*, not a type
name.

**Derivation:** 35 = pages whose substituted name is a single token (real type names).
71 = all pages carrying the sentence, including those whose substituted name contains a
space. Difference = 36 pages. The 35-set is a **strict subset** of the 71-set
(only-nobacktick = 0, only-backtick = 36).

**Number: 71 (MEASURED).** Cross-checked three ways:
1. shipped classifier: **71**
2. `grep -rl "as an entry point or data node for this subsystem" content --include=*.md`: **71**
3. per-tree grep census: `_index 1 · v1.3.0 11 · v1.3.15 38 · v1.4.5 2 · versions 19` = **71**

The tool now uses the backticked form, which is the more precise of the two.

---

## Part 7 — Two bugs I introduced and caught

Recorded because both would have produced confident false numbers.

**1. `tmpl:overview_family_any` reported a bogus 53.59% false-positive rate.** My
`overviewFamily()` returned `'other'` for any non-empty Overview, silently turning a
template-matching signal into a *"has an Overview"* detector — which then fired on most
handwritten pages and would have been reported as INVALID. Fixed by pinning the 30
enumerated families; corpus rate dropped 95.73% → 86.53% and the phantom INVALID vanished.
This is exactly the "number points the way I expected, so I must be broken" case — it
pointed the *unhelpful* way and was still wrong.

**2. The exit-2 gate never fired.** `verdicts` stores keys `gr`/`hr`; the filter read
`v.gen`/`v.hw`, so the "zero coverage" condition was always `undefined === 0` → false. The
tool reported a confident verdict table with no refusal for several minutes. Fixed; exit 2
now fires reliably.

I also briefly reported a dotted-directory drop of 39,032 pages — larger than the 39,013-page
corpus. That was double-counting from recursing into version directories; the census now
enforces disjointness and self-asserts.

---

## Part 8 — What I did NOT verify

Stated so nothing here is over-read:

- I did **not** verify the 30 Overview templates each belong to a distinct generator run.
  Template count proves templating, not provenance.
- I did **not** human-read a sample of the 291 `stub but no marker` pages. That is the
  residual population where "stale marker on a handwritten page" could still hide, and it
  is the highest-value next check in this audit.
- I did **not** confirm where **15,507** came from.
- My 30-page sample is **not** random — it is weighted toward index and architecture pages
  because those are what worker-54 sampled. It cannot detect generated pages that only exist
  among old-tree deep class pages.
- I read the 30 new-tree pages but did not diff them against source; "handwritten" here means
  "contains judgment a machine could not have produced", per the agreed criterion.

---

## Recommended next actions, in priority order

1. **lead-4: supply ≥1 old-tree page carrying the auto-generated description and labelled
   handwritten.** Nothing can validate or kill `desc_template` without it. This is the only
   blocking input.
2. **Human-read the 291 `stub but no marker` pages.** They are the entire remaining
   candidate population for "handwritten page wearing a generated description" — the exact
   error class that nearly deleted 1,132 pages. 291 is small enough to finish.
3. **Publish the cluster normalization recipe** with any cluster count. 714/5,041 and
   3,415/14,339 are both real outputs of valid recipes; only the new-trees-zero is robust.
4. **Do not cite `classifyPage` and the frontmatter marker as two pieces of evidence.**
   Jaccard 0.9904. Pick one, and prefer the template/Overview-family evidence, which is
   independent of both.
5. **Retire `classifyPage=='deep_pass'` as a handwritten proxy** — 44.23% false negative on
   pages a human rater certified as hand-written.
---

# ADDENDUM A — Boss-authorized blind control sets (added after lead-5 #2579)

Both sets constructed blind: **read the body and judge, then look at the marker.**

## A0. Heading-filter validation (Boss's integration gate)

Boss asked me to state explicitly that my heading-level filters were validated
against `###`. They were not, at first, and it cost me a number.

**The bug class is the same as the `\b` trap — a regex that matches more than you meant.**
`/^#{2}\s*(.+)$/` matches the first two `#` of a `### Method` heading, so method
headings were counted as page sections. Correct form is `/^##(?!#)\s*(.+)$/`.

Consequence, stated plainly because it matters:

| heading filter | marked pages reporting a non-skeleton section | distinct such headings |
|---|---:|---:|
| `^#{2}` (WRONG — matches `###`) | **20,662** | 12,742 |
| `^##(?!#)` (correct) | **128** | **2** |

I retracted 20,662 down to **128 marked pages (0.35%)** with only **2** distinct
non-skeleton headings. The 20,662 figure was manufactured by my own regex and must
never be quoted.

**Third occurrence of this trap class in this audit** (`\b` backspace; `instance = ...;`
missing the zh variant; `^#{2}` matching `###`). Every heading-level and
character-class filter in this report has been validated against its near-miss case.

## SET 1 — 30 marked pages: does the marker track the body?

Construction: frontmatter self-declares auto-generated. **Sample biased toward the
largest pages**, because that is where authored content would most plausibly survive a
generator — the 20 largest marked pages total **~1.6 MB**.

| probe | result |
|---|---|
| non-skeleton level-2 headings, 20 largest marked pages | **0** |
| pages containing trap / pitfall / caution language (坑/陷阱/注意/风险/trap/caveat/gotcha) | **0 / 20** |
| largest marked page audited | `v1.3.0/en/api/campaign/CampaignEvents.md`, **128,755 B**, 6 headings, all skeleton |
| Overview templates across all marked pages | **30**, **0 singletons** |
| Usage Example is a literal `= ...;` placeholder, F1_zh family | **93.8%** |
| Usage Example is a literal `= ...;` placeholder, F2_en family | **93.5%** |

Representative `Purpose:` lines from a 128 KB page — all from one small verb-template
set keyed on the return type, all carrying the ungrammatical *"the this instance"*:

> `**Purpose:**` Invoked when the make peace event is raised.
> `**Purpose:**` Removes listeners from the current collection or state.
> `**Purpose:**` Returns a human-readable string representation of the this instance.
> `**Purpose:**` 重新计算并更新 agent stats 的最新表示。

### Verdict SET 1: **the marker is a VALID discriminator in this direction**

**Hand-written bodies found: 0 of 30.** Far below Boss's ">half hand-written" tripwire,
so **93.6% may be used as a queue basis in the positive direction.**

One borderline case, recorded rather than hidden: `v1.3.0/en/api/campaign-ext/DefaultMapVisibilityModel.md`
has a Usage Example that is *not* the `= ...;` placeholder —
`Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());`
It is a usable example, but it is still derivable from the type's role as a
`ReplaceModel` target. I do not count it as authored.

### Carve-out, quantified

The honest test for "an author filled in the skeleton" is **sections added beyond the
generated skeleton**, not "the example looks plausible" — because a plausible example
is often mechanically derivable from the signature (`CampaignBattleResult.GetResult(winnerSide, false);`
is just the method plus its parameters).

| carve-out candidate | count | disposition |
|---|---:|---|
| marked pages with a non-skeleton level-2 heading | **128** (0.35%) | — |
| …carrying heading `Methods` | **124** | **NOT a carve-out.** 0/124 co-occur with `Key Methods`; it is a generator heading *variant* |
| …carrying heading `依赖图` | **4** | **carve-out candidate.** `GameMenuManager` / `KingdomDivision`, v1.3.15 + v1.4.5 |

**Exact carve-out population: 4 pages (0.011% of the marked set).** Not 20,662, and not
the 5,331 pages whose Usage Example merely lacks `= ...;` — that population is
*family-derived examples*, not authored prose.

## SET 2 — 10 unmarked old-tree pages: does the marker MISS real pages?

**Yes. This is the more important result of the two.**

Population: the **2,115** old-tree pages carrying no marker (38,634 − 36,519, exactly
matching the lead's figure). Sample of 10 read blind: 4 `_index.md` + 6 class pages,
size-spread.

### Finding 2a — a false negative of the *marker* (generated pages it misses)

`content/v1.3.0/zh/api/campaign-ext/AdoptHeroAction.md` reads:

```yaml
description: "AdoptHeroAction 的自动生成战役动作参考。"
```

It **does** self-declare as auto-generated — but with `的自动生成战役动作参考`, which
matches neither `的自动生成类参考` nor `/auto-generated/i`. Scale:

| self-declaration phrase missed by the briefed regex | pages |
|---|---:|
| `的自动生成战役动作参考` ("auto-generated campaign-action reference") | **93** |
| other / English variants | **10** |
| **total unmarked pages that self-declare generated** | **103** |

So the true generated population is **≥36,622**, not 36,519. This is the same failure as
the `a public class in` incident: **a briefing string that was never grepped
site-wide.** Per Boss's new gate — every string constant in a brief must be grepped
before use — I grepped all of them; this one was wrong.

### Finding 2b — the marker also misses genuinely HAND-WRITTEN pages

Of the 2,115 unmarked old-tree pages, **1,062 (50.2%)** carry authored deep-page sections
that the generator never emits — `风险`, `成员契约`, `真实读取路径`, `自定义规则的边界`,
`何时使用 / 何时不要使用`, `版本与导航`, `一句话职责`:

| tree | deep authored pages missed by the marker |
|---|---:|
| v1.3.0 | 22 |
| v1.3.15 | 398 |
| v1.4.5 | 642 |
| **total** | **1,062** |

Two I read in full, quoted:

- `v1.4.5/zh/api/campaign-ext/PartyNavigationModel.md` — sections `一句话职责`,
  `成员契约`, `真实读取路径`, `自定义规则的边界`, `风险与调试顺序`, `版本与导航`;
  and a `**默认实现:**` line pointing at `DefaultPartyNavigationModel.cs`. Body text:
  *"地图 AI 和玩家目标检查都可能调用它，因此返回的地形规则必须和真实地图能力保持一致。"*
- `v1.3.15/zh/api/save-system/FieldDefinition.md` — sections `何时使用 / 何时不要使用`,
  `依赖图`, `风险`, `成员说明`, `示例`; explains that `GetValue(target)` prefers an
  injected `GetFieldValueDelegate` and falls back to `FieldInfo.GetValue(target)`.

### Verdict SET 2: **the marker has a false-negative mode**

Both directions are now established:

- **True positive direction:** marked ⇒ body is machine-written. **0 of 30 exceptions.**
- **False negative direction:** unmarked ⇒ *unclassified*. **1,062 of 2,115 unmarked
  old-tree pages are hand-written deep pages that the marker does not cover**, and
  **103 unmarked pages are generated** under a phrase the brief missed.

**Operational consequence, stated as a rule:** the marker may be used to *select
candidates for rewrite*, but it must **never** be used to select candidates for
**deletion, exclusion, or "already fine"**. Absence of the marker means *unclassified*,
not *hand-written* and not *safe*.

---

# ADDENDUM B — union correction, worker-54 completion, and the out-of-sample test

Responds to lead-5 #2643.

## B1. Self-declaration is a UNION — and I reproduce the corrected figure

I re-measured the union myself rather than adopting the number:

| population | lead-5 | worker D | agree? |
|---|---:|---:|---|
| briefed two strings (`的自动生成类参考`, `/auto-generated/i`) | 36,519 | **36,519** | yes |
| **UNION: any `自动生成` / `auto-generated` in frontmatter** | 36,622 | **36,623** | yes (1 page) |
| self-declare but MISS the briefed strings | 227 | **104** | see below |
| pages with no frontmatter at all | 2 | **2** | yes |

The union totals agree. The **104 vs 227** difference is *attribution*, not disagreement:
lead-5 compared against a narrower **English** string than I did, so more pages counted as
"missed" on the en side. My split of the extras:

| variant phrase | pages |
|---|---:|
| `的自动生成战役动作参考` ("auto-generated campaign-action reference") | **93** |
| English variants not matching `/auto-generated/i` (e.g. unhyphenated) | **11** |
| **total extras** | **104** |

**Corrections accepted.** (a) 36,519 was a lower bound; **36,623** is the figure.
(b) The earlier "the new trees carry zero markers" was true only for the two briefed
strings. **Exactly one new-tree page self-declares: `content/v1.4.6/zh/api/campaign/_index.md`.**
Any per-tree zero is unproven until the union regex is applied.

## B2. worker-54 is complete — and its result reframes the marker

worker-54 finished: 379 pages, **227 handwritten / 20 generated / 0 unsure**, reading 247
(65.2%) directly and being exhaustive on all 74 `_index.md` and all 57 `core-extra/`.

**The number that settles the marker question, from worker-54:**

> `的自动生成类参考` appears in **0 of 379** pages in the new trees, checked post-hoc.

**I independently confirm this**: the marker fires on **0/359** new-tree pages
(union variant: 1/359). A classifier keyed on that phrase would call all 379 clean **and
miss all 20 real generated ones**.

So the marker is **high-precision / near-zero-recall**:
- fires on marked pages → body is machine-written (my SET 1: 0/30 exceptions). **Precise.**
- absent in the new trees → 20 generated pages invisible. **Blind.**

**It must not define queue coverage.** The queue is now built on the union.

## B3. Out-of-sample test on worker-54's 132 untouched pages — the last hole

worker-54 extrapolated from 247/379 and asked for the complement to be tested. **All 132
untouched pages are class pages** — worker-54 was exhaustive on `_index.md`, so the
extrapolation gap was entirely class pages. I spent SET 1 budget here.

| probe | result |
|---|---|
| out-of-sample population | **132** |
| pages containing a literal `= ...;` usage placeholder | **0 / 132 = 0.0%** |
| pages carrying ≥1 section the generator provably never emits | **124 / 132 = 93.9%** |
| pages I read in full | 6 — all hand-written |

**The 0.0% placeholder rate is the decisive number.** The generator emits an ellipsis
placeholder on **93.5–93.8%** of marked pages. Not one of the 132 carries it.

**Verdict: worker-54's extrapolation holds. 0 of 132 out-of-sample pages are generated.**

Author-only evidence from the 6 I read — no greppable member names, per lead-2's rule:

- `v1.4.7/zh/api/campaign/CampaignEvents.md` — *"1.4.7 **没有** `AddListener` /
  `RemoveListener`——从旧文档抄来的 `+=` 写法直接编译失败。"* A version-specific
  negative constraint; the generator states no such thing.
- `v1.5.3/zh/api/storymode/TalkToTheHeadmanTutorialQuest.md` — *"**故意把 questGiver
  传 `null` 给基类**……因为发布者就是村长自己"*. Rationale for a surprising design
  choice. Not derivable from a signature.
- `v1.5.3/zh/api/storymode/StoryModePartyWageModel.md` — *"名为
  `tutorial_placeholder_volunteer` 的教程占位志愿兵，其招募成本固定为 `50`（源码里是个
  `private const int StoryModeTutorialTroopCost = 50`）"* — a magic constant plus the
  source identifier that holds it.
- `v1.4.6/zh/api/mission/MissionBehavior.md` — *"`BehaviorPriority`（后者是 1.4.6 新增的
  抽象成员）"* + *"它**不能**自己注册到任务上"* — cross-version delta and a negative
  constraint.
- `v1.4.7/en/api/save-system/LoadContext.md` — *"there is no partial-success state to
  work with"*, and a cost/benefit judgement on `loadAsLateInitialize`.
- `v1.4.7/en/api/core/MBSubModuleBase.md`, `v1.4.7/en/api/gui/ScreenLayer.md`,
  `v1.4.7/zh/api/core/Module.md`, `v1.5.3/zh/api/localization/*` — same shape.

**The 8 pages with no authored section are all `architecture/` prose** (module-map,
sdk-overview, version-delta, migration) — read earlier, hand-written, e.g. v1.5.3's
`bannerlord-1.5.3/` **ILSpy-provenance note** ("11 487 个文件里有 11 398 个带
`// Token: 0x…` 标记"). A machine does not volunteer that its source is decompiled.

## B4. Size was not a predictor (worker-54's result, carried here)

worker-54's stratified result: all 20 generated pages sit in a **single stratum
(3–8KB | en)**, and the **entire 1.2–3KB stratum is handwritten**. Size neither predicts
nor is part of the verdict criterion. Corroborates the agreed rule: **size is not a
criterion.**

## B5. The inverse mixed-page case belongs in the carve-out

worker-54 surfaced `content/v1.4.6/zh/api/campaign/_index.md` as authored framing wrapped
around a machine-extracted 547-row type table. **Confirmed, and it is simultaneously one
of my 104 union extras** — independent convergence on the same page by two methods.

It is 123,053 bytes, 7 level-2 headings including `## 尚未撰写的清单（545 个）` and
`## 一个必须说清楚的同名坑：`. The framing is authored; the list is extracted. Mixed pages
of this shape now sit in the carve-out section of the queue alongside the 4 `依赖图` pages.

---

# ADDENDUM C — Boss's suppression objection. **The 4-page carve-out was an artifact.**

## C0. Answering Boss verbatim

> *"would a page with genuinely authored prose but no `依赖图` heading be misclassified as
> pure skeleton?"*

# **YES. Under the rule I had been using, almost every such page was.**

My carve-out rule was: *a page has real content if it carries a level-2 heading outside the
generated skeleton set.* Measured against worker-54's 227 known-handwritten pages:

| rule | handwritten caught as "has real content" |
|---|---:|
| heading-presence (the one I reported) | **2 / 227 = 0.9%** |
| residual-prose (**new**) | **227 / 227 = 100%** |

**225 of 227 genuinely hand-written pages would have been silently swallowed** by my own
detector. Boss is right that "exceptions are very few" and "the exception detector is broken
in the suppressing direction" are indistinguishable from where I sat — and it was the
second. My "128 pages / 4 carve-out" figure was a **measurement of my regex, not of the
corpus.** It is retracted.

**Do not use the 4-page carve-out. It is void.**

## C1. Confusion matrix over worker-54's 247 labels

Ground truth: `tools/_audit-labels-3.jsonl`, 227 handwritten / 20 generated / 0 unsure.

### OLD rule (heading presence)

| | truth handwritten | truth generated |
|---|---:|---:|
| says "has real content" | **2** (TP) | **0** (FP) |
| says "pure skeleton" | **225** (FN) ← **suppressing** | 20 (TN) |

### NEW rule — `residual()`: prose paragraphs that survive template stripping

**Rule, stated exactly (no heading presence, no member names, no greppable tokens):**

1. drop the frontmatter;
2. drop the `概述`/`Overview` and `心智模型`/`Mental Model` **sections** — the generator is
   *proven* to template both, so anything inside them is not evidence;
3. drop code fences, table rows, headings, `**Key:** value` metadata lines, `**Purpose:**`
   lines, `**用途**` lines, and bare link lines;
4. split what remains on blank lines into paragraphs;
5. count a paragraph as authored if it is **≥110 characters AND contains ≥2 sentence
   terminators** (`.。!?！？`);
6. page ⇒ "has real content" if the summed length of such paragraphs is > 0.

Only steps 1–6. No section names are consulted, so a hand-written page with entirely
skeleton-shaped headings still registers.

| minLen | TP (hw) | FN (hw) | FP (gen) | TN (gen) | recall | precision |
|---:|---:|---:|---:|---:|---:|---:|
| 140 | 226 | 1 | 20 | 0 | 99.6% | 91.9% |
| **110** | **227** | **0** | **20** | **0** | **100%** | **91.9%** |
| 90 | 227 | 0 | 20 | 0 | 100% | 91.9% |
| 50 | 227 | 0 | 20 | 0 | 100% | 91.9% |

**Shipped threshold: 110.** At 140 it suppressed one real page
(`content/v1.4.7/zh/api/core/_index.md`, 1,453 B — short paragraphs). Stable from 110 down.

> **The number Boss asked for — "detector says pure skeleton × truth handwritten" — is 0/227.**
> The detector is no longer suppressing.

### The 20 false alarms are all one family, and they change a verdict

Every FP is `content/versions/**` or `content/_index.md` (family **F17 `versions-crossdiff`**).
There are no other generated rows in the file, so TN=0 by construction — the negative
control is F17 alone.

Abstracting the `**中文：**` impact paragraph (strip backticks and version numbers) over the
18 `versions/<Class>.md` pages: **18 distinct shapes, 18 singletons, zero reuse.**

Verbatim, two of them:

> `**V 新增 X；移除 X、X。宣战评分重平衡——以贸易伙伴关系为核心，替代旧的盟友/敌人关系权重。**`

> `**V 将 X 重命名为 X（现委托 X）。引用 X 的 mod 必须改名为 X，否则编译失败。语义从"指挥官上限"变为"战争队伍上限"。**`

These are **per-type migration warnings, not template output.** Under the agreed criterion —
*"does this contain specific judgment a machine could not have produced?"* — a rename that
**breaks compilation if you miss it** is exactly that.

**This partially disputes worker-54's `generated` verdict for `content/versions/**`.**
My position: 17 of the 18 are **skeleton + real per-type content** → they belong in the
**carve-out**, not the rewrite queue. `versions/HeroDeveloper.md` is genuinely pure skeleton
— it has literally empty slots, `**中文：** **English：**`, which is the tell.

I am not overturning worker-54's call unilaterally; I am recording that the evidence points
the other way for 17 pages, with the quotes above, so whoever owns that decision has both.

## C2. The 1,062 — derivation, calibration, and the direction it may be used in

**It is a RULE-DERIVED HYPOTHESIS, not 1,062 judged pages.** Derivation:

- **Structural rule** (applied to all 2,115 unmarked old-tree pages): the page carries a
  level-2 heading matching `风险 | 风险与边界 | 风险与陷阱 | 边界 | 成员契约 | 真实读取路径 |
  自定义规则的边界 | 风险与调试顺序 | 何时使用 / 何时不要使用 | 版本与导航 |
  One-line responsibility | 一句话职责`.
  **1,062 pages match** (v1.3.0 22 · v1.3.15 398 · v1.4.5 642).
- **Basis for the rule:** those section names are ones I observed on pages I read in full and
  which the generator provably never emits (the 36,623 marked pages use a closed skeleton set).
- **Calibration:** of the 10 pages SET 2 sampled, I read **3 in full**. The rule agreed
  **3/3** — including the negative case `v1.3.0/zh/api/campaign-ext/AdoptHeroAction.md`,
  which the rule correctly calls *not*-deep (it is a generated action page). The other 7
  were only structurally triaged and **do not constitute calibration**.
- **Coverage note:** the rule fires on **1,062 of 1,653 unmarked class pages (64%)** and on
  **0 of 462 unmarked `_index.md`**. It is calibrated on class pages only.

**False-positive risk, stated honestly.** The rule is heading-based — exactly the
heading-presence pattern Boss rejected for the *carve-out* detector. It is weaker evidence
than `residual()`. A page could carry a `## 风险` heading and still be thin. I therefore
**have not run `residual()` against these 1,062**, and I am not claiming they are all deep.
What is solid is the weaker claim: **they are not clean**, and they must not be swept.

### The one direction 1,062 may be used

> **It is a "do not delete" guard. It is NEVER a "safe to clear" verdict.**

- Rule says deep-authored → **DO NOT TOUCH.** Cost of a false positive here: we stall work
  on 1,062 pages. Recoverable.
- Rule says deep-authored → and we treat it as *permission to rewrite anyway* → we risk
  destroying real hand-written pages. **This is the 1,132-page near-miss.**

The asymmetry is deliberate and matches the one already applied to the marker.

## C3. OPEN ITEM — the 15,507 discrepancy is NOT resolved

**Status: OPEN. No cause asserted.**

- I measure `classifyPage=='stub'` = **36,747**, stable across every run this session.
- **15,507 appears nowhere** in the working tree and nowhere in `git log -S`.
- It was previously handed to the lead as authoritative. **It should not be used until
  someone who remembers its origin checks it.**
- I do **not** assert it was a stale earlier-corpus figure. That is a guess.

Note that `tools/lib/handwritten-policy.mjs` has since been modified by another line
(a `hasRealCsharpExample` regex change), so any `classifyPage` number must be read as
**measured against a moving policy file**, not against the committed version.

## C4. Corrected totals

| quantity | value | status |
|---|---:|---|
| marked by briefed strings | 36,519 | MEASURED |
| **self-declaring, UNION of all variants** | **36,623** | MEASURED (lead-5: 36,622) |
| extras missed by briefed strings | 104 (93 zh `的自动生成战役动作参考` + 11 en) | MEASURED |
| marked pages with a real authored section | **NOT 4 — detector was void** | **RETRACTED, re-measure pending** |
| unmarked old-tree hand-written (rule-derived) | **1,062 hypothesis** | rule-derived, 3/3 calibration |
| out-of-sample generated pages in new trees | **0 / 132** | MEASURED |
| `classifyPage=='stub'` | 36,747 | MEASURED, see OPEN ITEM |

**The marked-page carve-out must be re-measured with `residual()` before any rewrite touches
those pages.** That re-measurement is the immediate next action and has not been done.

---

# ADDENDUM D — release gate: all four cells, and the seventh trap-class catch

## D1. The `/g`-flag and `rest.slice(0,n)` bugs — detector was never valid until now

Two independent defects made `residual()` nonsense. Both were caught by **interrogating an
implausible number**, not by reading code.

1. **`String.match()` with a `/g` flag returns an array with no `.index`.** The section-strip
   regexes carried `/g`, so `m.index` was `undefined`, `body.slice(undefined)` returned the
   *whole* body, and the Overview/Mental-Model stripping **silently never ran**. Symptom:
   carve-out of **82.99%** of marked pages.
2. **`body.slice(0,m.index) + rest.slice(0,n)` KEPT the section body** where removal needed
   `rest.slice(n)`. Symptom: the template Overview text survived; **27 of 29** known-pure pages
   wrongly flagged (**93%**).

> **The standing rule this produced: an implausible number, interrogated, is a working
> detector.** 82.99% and 93% were both "wrong in the direction I wanted", which is exactly
> when they must be distrusted. SET 1's 0/30 is what made the contradiction visible.

### Seventh instance of the same family, recurring inside its own fix

While patching I wrote `\bcsharp\b` through a shell pipeline and **the backslash-b became two
literal backspace characters in the source** — the original trap, reappearing *inside the fix
for it*. Boss's framing is right and I am adopting it: **the trap is not a mistake made once,
it is a property of the language that returns every time the pattern is retyped.** The durable
remedy is a shared, tested regex-construction helper, not inline literals — I did not build one,
and that is a known remaining weakness.

## D2. Confusion matrix — ALL FOUR CELLS NOW POPULATED

Two independent control groups.

| | truth **HANDWRITTEN** (new trees) | truth **PURE SKELETON** (F1/F2) |
|---|---:|---:|
| **says "has real content"** | **TP = 227** | **FP = 2** |
| **says "pure skeleton"** | **FN = 0** | **TN = 25** |

- Positive control: `tools/_audit-labels-3.jsonl`, 227 hand-written new-tree pages.
- Negative control: **27** marked pages I personally read in full and judged pure skeleton,
  including lead-5's labelled pair `v1.3.0/en|zh/api/core-extra/AgentAttackType.md`.
- **Recall 100.0% (FN = 0/227). Specificity 92.6% (TN = 25/27).**
- The 2 false positives are generated-code remnants that survived fence stripping:
  `v1.3.0/en/api/campaign/CampaignEvents.md` and
  `v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssue.md`.

**The asymmetry is the reason 7.4% FP is acceptable and 0% FN is not.** A false positive
puts a skeleton page into the carve-out — it is preserved and merely reviewed. A false
negative puts a hand-written page into the rewrite queue — it is destroyed. The tolerance is
deliberately lopsided in favour of over-inclusion.

Both gates are runnable: `--selftest` (exits 1 if FN > 0) and `--negcontrol` (exits 1 if any
known-pure page is flagged). **The `--selftest` gate correctly failed (exit 1) while the `/g`
bug was live** — direct evidence the gate works.

## D3. At-scale result and threshold sensitivity

Carve-out = `residual() > 0` over all **36,623** marked pages.

| minLen | carve-out | share of marked | v1.3.0 | v1.3.15 | v1.4.5 | v1.4.6 |
|---:|---:|---:|---:|---:|---:|---:|
| **45 (shipped)** | **3,468** | **9.47%** | 1,366 | 1,089 | 1,012 | 1 |
| 60 | 3,311 | 9.04% | 1,308 | 1,032 | 970 | 1 |
| 100 | 2,651 | 7.24% | 1,012 | 832 | 806 | 1 |
| 110 | 2,525 | 6.89% | 956 | 801 | 767 | 1 |
| 120 | 2,410 | 6.58% | 911 | 765 | 733 | 1 |
| 140 | 2,217 | 6.05% | 839 | 716 | 661 | 1 |

**Shipped 45.** The population moves only 9.47% → 6.05% across the whole sweep, so it is not
a threshold artifact; 45 is chosen because it is the value at which FN reaches 0. Higher
thresholds buy nothing but recall loss.

By template family at 45: F1_zh 1,333 · F2_en 1,059 · F99_unmatched 494 · F3_zh_model 136 ·
F4_en_model 113 · F7_zh 71 · F8_en 63 · F12_en 48 · F11_zh 48 · F5_zh 33 · F6_en 19 ·
F10_en 14 · F9_zh 14 · F13_zh 12 · F14_en 11.

**State 2 — "no authored paragraph found": 33,155 pages. These are NOT verified clean.**

## D4. Two uncovered-scope figures, recorded unaveraged

| source | unmarked old-tree pages |
|---|---:|
| worker-55 (union regex `/自动生成\|auto-?generated/i` on frontmatter) | **2,012** |
| sibling (different marker-regex breadth) | **2,022** |

**Recorded unaveraged, per Boss.** The ±10 is not noise: a number that moves by 10 between two
independent measurements is itself evidence that **the figure depends on the marker
definition**. My own 2,115 was a third, *wrong* figure — it came from 38,634 − 36,519, mixing
a narrow marker against a broad one. Three numbers exist and the spread is the finding.

---

# ADDENDUM E — design principle, the two TN misses, and a pattern now well-evidenced

## E1. The asymmetry is now written into the queue as a design principle

```
  A page wrongly EXCLUDED from the rewrite queue  -> wasted effort, recoverable, safe
  A page wrongly INCLUDED in the rewrite queue    -> destruction of hand-written work

The detector is therefore tuned to OVER-INCLUDE. A non-zero false-positive rate
on the carve-out is an ACCEPTED COST, not a defect to be optimised away.
```

Operational form: **FN must be 0; FP may be non-zero.** Same asymmetry that governs the
marker (present -> rewrite candidate; absent -> unclassified, never "safe").

## E2. The two TN misses, named, with diagnosis

| page | what survived | verbatim | diagnosis |
|---|---|---|---|
| `content/v1.3.0/en/api/campaign/CampaignEvents.md` | generated member table, 30,602 chars | `\| Name \| Signature \|` / `\| \`OnPlayerBodyPropertiesChangedEvent\` \| \`public static IMbEvent OnPlayerBodyPropertiesChangedEvent { get; }\` \|` | **template residue, NOT authored** — a raw signature table with zero "why", i.e. the definition of generated |
| `content/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssue.md` | one bare C# signature line | `` `public override IssueBase.IssueFrequency GetFrequency()` `` | **template residue, NOT authored** |

Neither is a Category-B mixed page. Root cause: signature and member-table rows sit **outside**
code fences and do not begin with `//`, so the code filter does not remove them, and they carry
`.`/`;` which my terminator rule counts.

**This is a real, unfinished stripper gap** — and it inflates the carve-out, which is the safe
direction per E1. It should still be closed before the carve-out is used to *reduce* work rather
than to *protect* it.

## E3. The pattern, now well-evidenced rather than anecdotal

The `\*` alternative in the code filter suppressed authored blocks opening with `**bold**` —
that is the **under-inclusion / destroys** direction, the dangerous one, and the second such
bug on this line. It surfaced only because `--selftest` failed (FN = 20 at that moment).

> **Inflating bugs announce themselves; suppressing bugs hide inside a reassuring number. Both
> are found only when something asserts an expectation — a gate, or a number that looks wrong.**

Nine instances on this audit line now, six of them variants of the same family (a regex that
quietly means something other than what it reads as): `\b` as backspace; `^#{2}` matching
`###`; the zh placeholder variant `X x = ...;`; the heading-presence detector suppressing at
0.9% recall; the dead exit-2 gate; `String.match()` with `/g` losing `.index`; `rest.slice(0,n)`
keeping instead of removing; `\bcsharp\b` re-typed into literal backspaces inside its own fix;
and `\*` eating `**bold**`.

**Standing recommendation, not yet built:** a shared, tested regex-construction helper rather
than inline literals. The trap is not a mistake made once — it is a property of the language
that returns every time the pattern is retyped.

---

# ADDENDUM F — the 1,062 collision, the zero-recall finding, and a language bias

## F1. Circularity: **REFUTED**. The collision was a bookkeeping error.

Boss's hypothesis — that my heading rule is silently re-deriving the F7/F8 `data-carrier`
family and calling it "hand-written" — is **wrong**, and I checked rather than argued.

Cross-tabulating the DEEP rule against template family over all **2,012** unmarked old-tree
pages:

| | count |
|---|---:|
| DEEP-rule hits | **1,061** |
| …of those, on pages in any of the 14 **generated** families (F1–F14) | **0** |
| F7/F8 `data-carrier` pages present in the unmarked set at all | **0** |

Every single DEEP hit sits on `F99_unmatched` — i.e. on pages matching **no** generated
family. The rule is not counting a template family. **It is not circular.**

**But the number collision is real, and the cause is mine.** The queue's row

```
F7/F8 `data-carrier`  1,062
```

was a **transcription error**: I copied the DEEP count (1,062) into the F7/F8 family row.
The true F7/F8 total across the marked set is **552 zh + 533 en = 1,085**. Two unrelated
numbers shared a value because of a copy in my own table. Corrected in the queue.

**Worth stating because it nearly went the other way too:** had the cross-tab come back
"DEEP fires on 1,061 F7/F8 pages", I would have declared the whole authored-depth claim void
on a plausible-looking but false inference. The check is cheap; running it was the right call.

## F2. The language bias IS real and it is severe — and it inverts the safe direction

The sibling's point stands, with a correction to the premise. The unmarked old-tree set is
**741 EN / 1,271 ZH (36.8% EN)**, not "roughly half English".

| | EN | ZH |
|---|---:|---:|
| unmarked pages | 741 | 1,271 |
| DEEP rule fires | **116 (15.7%)** | **945 (74.4%)** |

The rule is **4.7x more likely to fire on a Chinese page**. Its heading list is predominantly
Chinese with only two English entries.

**This matters because the bias runs the dangerous way.** Under-detection means
hand-written English deep pages are *not* entering the do-not-delete set — exactly the pages
most likely to be swept. Therefore:

> **The 1,061 figure is a LANGUAGE-BIASED LOWER BOUND. It must not be used as a whitelist.
> Operational correction: the do-not-delete guard covers the whole 2,012, not the 1,061.**

The 3-page calibration still holds (the rule agreed 3/3, and both of the pages I read in full
were Chinese), which is precisely why it failed to reveal the bias. Calibration on 3 pages from
one language cannot detect a one-language rule.

## F3. Zero recall on the ground truth — the marker's real failure mode

lead-5 audited every label shard against the marker:

| shard | class | n | marker present |
|---|---|---:|---:|
| shard-5 (old tree) | generated | 120 | **0 (0.0%)** |
| shard-5 | handwritten | 107 | 5 (4.7%) |
| shard-3 (new trees) | generated | 20 | **0** |
| shard-3 | handwritten | 227 | 1 |

> **140 pages judged generated — marker present on 0 of them.**

I do **not** quote a marker false-positive rate: those 6 handwritten-with-marker rows are
**set-construction artifacts** (a page that carries a marker but landed in a nominally
marker-free set), and the same artifact produces the 2,012 vs 2,022 gap. The marker's true FP
rate is **unmeasured**.

Combined with the zero-singleton Overview census over the marker's firing population, the only
consistent reading is:

> **The self-declaration marker identifies ONE generator lineage, not "generatedness".
> Outside that lineage it is blind — and roughly half of the blind region IS generated.**

This upgrades the uncovered section from "unclassified" to
**"~half of it is generated, and no automated signal in this audit will ever touch it."**

## F4. Shard-5 result, and the action framing

`tools/_audit-labels-5.jsonl` now holds **227 rows: 120 generated / 107 handwritten /
0 unsure = 52.9% / 47.1%** over a stratified **11.2%** sample of the 2,012. I have not
indepently verified the weighting of that stratification; treat the ratio as the sibling's.

**Action items, not ratios** (ratios are for readers; these are for the content line):

| confirmed needs REWRITE | confirmed needs PROTECTION |
|---|---|
| 120 pages — generated lineage, marker-present or not | 107 pages — hand-written, **do not touch** |
| plus the 2,012-wide do-not-delete guard, which is **wider than** the 107 | plus all 2,012 until the language bias in F2 is fixed |

### ⚠️ Unsure-complement warning

`sure + unsure` is **not** a valid identity. A ratio computed while `unsure` rows exist is a
**different quantity** from the same ratio after they are resolved, and **`unsure` must never
be silently folded into the complement of another class.** lead-5 made exactly this error and
it briefly reversed a direction in front of Boss. shard-5 currently reports `unsure = 0`; if a
future shard reports non-zero, **the ratio must be re-stated, not recomputed silently.**
