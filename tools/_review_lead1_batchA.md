# Review report — lead-1 batch A (core-extra v1.3.0/zh, pages 1–25)

**Reviewer:** worker-55 · **Date:** 2026-10-02 · **Line:** lead-1 (owns `content/v1.3.0`)
**My half:** pages 1–25 of the sorted `git status --porcelain` list. worker-60 owns 26–43; I did not read those.
**Source of truth:** `C:/WorkSpace/Bannerlord/bannerlord-1.3.0/` (MEASURED, read-only).
**Harness:** `tools/_review_batch_check.mjs` did **not** exist when I ran (`ls` → not found).
I ran the checks by hand instead.
**Outputs:** `tools/_review_lead1_batchA.jsonl` (25 rows, written incrementally), this file.

---

## The three required numbers

### 1. N pages reviewed, M wrong + error-class distribution

**25 reviewed, 1 wrong.**

| error class | count |
|---|---:|
| format | **0** |
| **fabricated name** | **1** |
| semantic | **0** |
| link | **0** |

### 2. Errors the gates caught but the author had not already fixed

**0.** No page carried a generation self-declaration in any of the four dialects
(`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` /
`Auto-generated campaign action reference`) — **0/25, MEASURED.** All 25 have ≥1 ```csharp
block (range 3–9, MEASURED). Every `**File:**` path resolves to a real 1.3.0 source file
(25/25) and every `**Namespace:**` matches the source `namespace` (25/25, **0 mismatches**).

> The site-wide FABRICATED count from the anti-fabrication tool is **not quoted here** — it is
> global and includes other lines' pages. Per-page value recorded in the JSONL is **0**.

### 3. Errors NO gate caught that only human reading found

**1** — `DefaultSkills.md`, class `fabricated_name`. Details below.

**I looked for these specifically.** Method, and its limits stated honestly:

- I built a full-text corpus of all 36.5 M chars of `bannerlord-1.3.0` and tested **every**
  `Capitalised` identifier in every ```csharp block (1,215 identifier occurrences across the
  25 pages). **MEASURED.**
- 78 identifiers did not resolve. **74 were the author's own illustrative mod classes**
  (`MyMod`, `MySkillGateLogic`, `CreateGuard`, …) — correctly absent from source, **not** errors.
- The remaining 4 I checked individually, against **all four** source trees
  (1.3.0 / 1.3.15 / 1.4.5 / 1.5.3) to separate "fabricated" from "wrong version".

---

## The one rejection

**`content/v1.3.0/zh/api/core-extra/DefaultSkills.md`** — error class **fabricated_name**

> `public class MySkillGateLogic : MissionBehaviorBase`

**Disproof:** `MissionBehaviorBase` does not exist in **any** of `bannerlord-1.3.0`,
`bannerlord-1.3.15`, `bannerlord-1.4.5`, `bannerlord-1.5.3` — **0 occurrences, MEASURED**
(full-tree `grep`, not a filename match).

**What actually exists in 1.3.0:**

```
bannerlord-1.3.0/TaleWorlds.MountAndBlade/MissionBehavior.cs:11:
    public abstract class MissionBehavior : IMissionBehavior
```

The correct base is `MissionBehavior` (or `IMissionBehavior`), **not** `MissionBehaviorBase`.
A modder who copies this example will not compile. Note this is exactly the class of error
the brief warned about: the name is *plausible* and *identifier-shaped*, so a
name-existence check that only asks "does this token appear somewhere" can pass it.

**Correct form:** `public class MySkillGateLogic : MissionBehavior`.

---

## Two things I nearly got wrong — recorded because they matter

**(a) `AgentFlag.md` / `UnreachableViaNavMesh` — NOT an error.** My corpus check found this
token absent from 1.3.0, which is exactly the signature of a fabricated name. It is not. The
page states, verbatim:

> `UnreachableViaNavMesh = 134217728U    // ← 1.4.6 / 1.4.7 / 1.5.3 新增，1.3.0 与 1.3.15 都没有`

and goes on to explain the appended-ABI reasoning. **The page is right about 1.3.0** — which is
the only claim that matters on a 1.3.0 page. *Minor, not a rejection:* the token is also
present in **1.4.5** (`bannerlord-1.4.5/.../TaleWorlds.Core/AgentFlag.cs:35`), which the page's
"added in 1.4.6+" phrasing omits. Flagging for completeness, not as a defect.

**(b) 7 apparent line-count mismatches were my bug, not the author's.** My splitter reported
`lines claimed N actual N+1` on 7 pages. `wc -l` gives **21** for
`ApplicationVersionType.cs`, and the page claims **21 行 / 403 字节** — the page is correct and
`split('\n').length` counts the trailing newline. **Byte counts: 0 mismatches across 25 pages**,
which is the unforgiving check. I did not report these as errors.

---

## Depth of review — stated plainly

Per page I verified mechanically: source path resolution, byte/line claims, namespace, marker
absent in 4 dialects, code-block count, and every identifier in every code block against the
full 1.3.0 corpus.

**Fully line-level human-read (read the source and the prose, claim by claim): 1 page** —
`ApplicationVersionType.md`. On that page I confirmed against source: 403 bytes / 21 lines;
enum order `Invalid=-1, Alpha, Beta, EarlyAccess, Release, Development` (lines 9–19);
`ApplicationVersionTypeFromString` as a nested `==` chain accepting `a/b/e/v/d`
(`ApplicationVersion.cs:136–149`) with `Debug.FailedAssert("Invalid version type.", …)`;
`GetPrefix` switch mapping Alpha→`"a"` … Development→`"d"` (`:180`); `FromString` using
`array[0][0].ToString()` and `array[0].Substring(1)` (`:77–78`); `Empty` constructed with four
`-1`s (`:299`); and the page's quoted
`if (this.ApplicationVersionType < other.ApplicationVersionType) return true;` —
**verbatim correct** at `ApplicationVersion.cs:95–97`. **Pass.**

**Identifier-level human read across the corpus: all 25.** That is what surfaced the one
rejection. It is **not** equivalent to a full prose audit of each page — I did not
claim-by-claim check member tables or behavioural prose on the other 24 pages. Given the brief
prohibits manufacturing a rejection, I am flagging this limit rather than implying a depth of
review I did not perform.

## Tooling note

This is the **11th** instance of the same regex trap family on this line (a pattern that
quietly means something other than what it reads as). Mine this round:
`` /\*\*File:\*\*\s*`?([^`\n]+?)`?/ `` — making the closing backtick **optional** with a **lazy**
`[^`\n]+?` matched the single character `T` on **all 25 pages**, producing a fake 25/25
"missing source file" result. The fix is to require the closing backtick. Same lesson as the
others: the pattern is a property of the language, not a one-off slip.

---

## Recommendation

Lead-1: **one fix**, `DefaultSkills.md` line 100. `MissionBehaviorBase` → `MissionBehavior`.

Suggested gate, prompted by this rejection: **a type used as a base class in a code example
must be verified to exist as a `class`/`interface` declaration in the target version tree**, not
merely as an identifier anywhere. `grep -w` alone cannot catch this — the identifier is
plausible, the check is what failed, not the string.