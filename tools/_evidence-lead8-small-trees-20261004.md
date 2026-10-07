# lead-8 evidence — small trees v1.4.6 / v1.4.7 / v1.5.3 (2026-10-04)

Scope: `content/v1.4.6/zh/api`, `content/v1.4.7/{zh,en}/api`, `content/v1.5.3/zh/api`.
No other subtree was touched.

## 1. Gate baseline, measured with the real classifier

`tools/_check_deep.mjs` = `classifyPage` from `tools/lib/handwritten-policy.mjs`.

| tree | pages (leaves + _index) | deep_pass | failure reasons |
|---|---|---|---|
| v1.4.6/zh/api | 100 (80+20) | 80/80 leaves = 100% | none |
| v1.5.3/zh/api | 141 (138+3) | 138/138 leaves = 100% | none |
| v1.4.7/zh/api | 41 (23+18) | 23/23 leaves = 100% | none |
| v1.4.7/en/api | 40 (23+17) | 23/23 leaves = 100% | none |

`_index.md` is classified `noise` / `family_entry_pass` by design and is excluded above.

**No `weak-deps`, no `no-real-example`, no `weak-mental`, no `boilerplate-mental-model`,
no `formulaic-purposes-majority`, no stub pattern, on any of the 264 leaves.**

## 2. Duplication check (the gate cannot see paraphrased filler)

`classifyPage` flags boilerplate via ~6 fixed strings only, so it will pass reworded
template text. Independent check: group leaves by normalised 120-char prefix of each
section body.

| tree | distinct 心智模型 | distinct 示例 | distinct 成员节 | median 成员节 chars |
|---|---|---|---|---|
| v1.4.6/zh | 80/80 | 80/80 | 80/80 | 3638 |
| v1.5.3/zh | 138/138 | 138/138 | 130/138 | 976 |
| v1.4.7/zh | 23/23 | 23/23 | 23/23 | 3278 |
| v1.4.7/en | 23/23 | 23/23 | 23/23 | 4915 |

The 2 duplicated 成员节 groups in v1.5.3 are **correct documentation, not filler**:
the 8 `*TextProcessor` language types genuinely share an identical abstract member set,
and `AssembleEmpireQuestBehavior` / `WeakenEmpireQuestBehavior` genuinely share an
override set. Left alone deliberately.

## 3. Stub-pattern string counts — the small trees vs the en trees

| tree | pages | `## Usage Example` | `Obtain an instance...` | `instance = ...` | `SomeValue` |
|---|---|---|---|---|---|
| v1.4.6/zh | 100 | 0 | 0 | 0 | 0 |
| v1.5.3/zh | 141 | 0 | 0 | 0 | 0 |
| v1.4.7/zh | 41 | 0 | 0 | 0 | 0 |
| v1.4.7/en | 40 | 0 | 0 | 0 | 0 |
| **v1.3.0/en** | **5285** | **5154** | **1438** | **1761** | 0 |
| **v1.3.15/en** | **5630** | **5397** | **1798** | **2078** | 0 |

3,236 pages carry `Obtain an instance of this type from the relevant subsystem API`,
which is the `generic-subsystem-acquire-en` stub pattern in `handwritten-policy.mjs`.
While that string is present the page **cannot** be `deep_pass`. The en trees are the real
backlog; the small trees were never in the failure distribution quoted from lead-6.

## 4. Real remaining gap in the small trees

The site-wide "How to use 0.3%" was an artefact of matching English heading strings only.
Chinese trees already carry the equivalents: 关键成员 / 主要成员 / 成员说明 (members),
真实示例 / 使用示例 / 示例 (examples), 心智模型 (mental model). `## 怎么用` is the existing
precedent inside v1.5.3 (2 pages). So the genuine gap is:

- `## 怎么用` missing on **80** pages of v1.4.6/zh and **138** pages of v1.5.3/zh = **218**
- v1.4.7 zh/en (23 + 23) already have `## 何时使用 / 何时不要使用` / `## When to Use / When Not To`
  → audit against the three-part spec, not create

Heading policy applied: **zh → `## 怎么用`, en → `## How to use`.** A literal English
heading inside a Chinese tree is a regression; `_check_deep.mjs` matches both languages on
purpose (`心智模型|Mental Model`).

## 5. Source-field resolution — four syntaxes, two path traps

Take the value as actually read; do not assume a format.

- `**Source:** \`Mod/File.cs\`` (with or without version prefix)
- `**源文件：** \`Mod/File.cs\`（声明见第 N 行）` — trailing annotation defeats a naive regex
- `**源码：**` third variant on some trees
- **v1.4.6/zh: 42 of 80 leaves have `**源文件：** null`** → must locate by type name in
  `bannerlord-1.4.6/`. Verified: all 42 findable, so 80/80 resolvable.
- **v1.5.3/zh: 19 leaves store a path relative to the module dir** (`**模块：**` says
  `StoryMode`; real path is under `bannerlord-1.5.3/StoryMode/Quests/`).

All 264 leaves resolved to an existing file. **Zero genuinely unresolved.**

## 6. Pre-existing defects found (not caused by this phase)

1. `v1.5.3` `RebuildPlayerClanQuestTypeDefiner` — `**源文件：**` points at
   `PlayerClanQuests/RescueFamilyQuestBehavior.cs`, which does not declare that type.
2. `v1.5.3` `ThirdPhase` — declares `StoryMode/ThirdPhase.cs`; real file is
   `StoryMode/StoryModePhases/ThirdPhase.cs`.
3. **U+FFFD: exactly 5 files, 14 replacement chars, all in v1.4.6/zh**
   (`campaign/Hero.md` 4, `core-extra/ArmorComponent.md` 3, `core-extra/EventBase.md` 2,
   `mission-ext/ItemType.md` 3, `mission-ext/Team.md` 2). Raw bytes confirm each U+FFFD is
   one truncated UTF-8 CJK char (e.g. `e4 b8` + `ef bf bd`). Truncated sequences ⇒
   recoverable, but only from a sibling-page citation or a reported context
   reconstruction — never a silent plausible guess.

## 7. Line endings are mixed; measure per file

v1.4.6/zh 4 CRLF / 76 LF · v1.5.3/zh 46 CRLF / 92 LF · v1.4.7/zh 0/23 · v1.4.7/en 0/23.
Per-page `eol=` tag is in each `*.pages.txt` manifest under `tools_tmp/lead8_assign/`.

## 8. Environment gotcha

The shell is **PowerShell**, not bash: `&&`, `for` loops and heredocs fail. Bulk file
analysis was done with `ctx_execute` + javascript. Note the classifier import needs a
dynamic `await import('file:///...')` — a static `import` from the sandbox script fails.

## 9. Artefacts

- `C:/WorkSpace/Bannerlord/tools_tmp/lead8_assign/CONTRACT.md` — shared writing contract
- `…/lead8_assign/*.pages.txt` — exact per-worker page lists with `src=` and `eol=`
## 10. Allocation record — mission-ext queue, 2026-10-04

Re-cut twice for two *different* reasons, which is why no allocation tool was written:
a sizing rule and a bookkeeping rule are different bugs with different fixes.

```
cut 1  3 slices of ~307      landed 7 pages across 3 workers; one exited on reading the brief
      cause: sized as total ÷ parallelism — that computes parallelism, not handover
cut 2  19 units of <=50      REJECTED — overlapped pages worker-44/45 were actively writing
      cause: rebuilt from the full assigned list instead of the unowned remainder
cut 3  7 units of <=50       ACCEPTED — 306 pages, split by version tree so _cite-audit
                                stays single-tree. Verified: sum matches, 0 duplicates,
                                0 overlap with pages under active edit, 0 finished pages leaked
```

Cuts 1 and 2 stay active and owned by worker-44 / worker-45; they hand back at a batch
boundary rather than running to 307. Cut 3 queues behind them.

## 11. Measured rates, and what each number actually measures

| figure | meaning |
|---|---|
| 40-45 pages/hour | ADDITIVE - appending a section where Overview/Mental Model are already real |
| 17.3 pages/hour | REWRITE cold, **including** semantic line-number verification |
| ~22 pages/hour | REWRITE hot, same pass included (pilot last 5 pages: 2m21s/page) |
| 25-30 pages/hour | REWRITE with verification **skipped** - reads well, lies |
| 37-49 pages/hour | not reproducible under any condition measured; do not plan on it |

Evidence the gap is the verification pass, not warm-up: a 15-page pilot ran 3.65 min/page
over pages 1-5 and 3.38 min/page over pages 6-15 - 7% apart, flat - across sources spanning
10 to 504 lines. In that same pilot a first pass produced 8 wrong line numbers out of 15 on
one page; removing verification roughly doubled the rate.

**The 25 pages/hour line is an investigation trigger, not a brake.** Over 25 means "check
whether verification was skipped", not "stop". "Fast because the type is trivial" and
"fast because nothing was checked" are identical on a rate chart and opposite in fact. A
worker at 42 pages/hour was cleared after its anchors were read and found correct.

## 12. Tool limits - state these whenever their numbers are quoted

- `_cite-audit.mjs` proves a cited line **exists and is non-blank**. It does **not** prove it
  is the *right* line. Quoting its pass rate as a quality number overstates what was checked.
- It reports `AMBIGUOUS` (not a verdict) when a bare filename matches several files. Batch
  **by version tree** or it emits spurious NOFILE.
- It only sees the full `` `File.cs:NNN` `` form; bare `(:368)` continuations are invisible.
- `_doc-check.mjs` cannot see a missing `##` section. Grep for the heading instead.
- `classifyPage` returns `deep_pass` for shell content, and for a template Overview
  (0 pages fail the overview test on template text).
