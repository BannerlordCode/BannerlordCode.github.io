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