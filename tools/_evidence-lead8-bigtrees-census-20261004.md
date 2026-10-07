# lead-8 evidence — v1.3.0/zh + v1.3.15/zh + en trees, structural census (2026-10-04)

Scope of the measurement: `content/v1.3.0/{zh,en}/api`, `content/v1.3.15/{zh,en}/api`.
No pages in these trees were modified — this file is measurement only.

## 1. Why this census exists

The Boss's site-wide figures ("How to use 0.3%", "Members table 2.1%") were computed by
matching **English heading strings only**, which misses the Chinese trees entirely
(`关键成员` / `主要成员` / `成员说明`, `真实示例` / `使用示例` / `示例`). Those figures are not
coverage numbers and do not apply to the zh trees. Everything below is computed with
`classifyPage` from `tools/lib/handwritten-policy.mjs` plus a bilingual heading vocabulary.

**Rule adopted: a coverage number must be computed with the checked tool's own rules.
Rewriting its criteria approximately yields a plausible number unrelated to the gate.**
This session produced three such errors in a row, all mine or the Boss's:
counting heading presence; matching English headings only; and counting a loose regex
instead of the gate's exact `STUB_PATTERNS` entry.

## 2. Gate status (leaves only; `_index.md` excluded)

| tree | leaves | deep_pass | stub | noise |
|---|---|---|---|---|
| v1.3.0/zh | 5,180 | 175 (3.4%) | 5,000 | 5 |
| v1.3.15/zh | 5,598 | 325 (5.8%) | 5,269 | 4 |
| v1.3.0/en | 5,180 | 26 (0.5%) | 5,149 | 110 |
| v1.3.15/en | 5,595 | 194 (3.5%) | 5,397 | 16 |

Failure reasons — `weak-deps` is the dominant blocker in all four trees, not mental model:

| tree | weak-deps | no-real-example | weak-mental | boilerplate-mental-model |
|---|---|---|---|---|
| v1.3.0/zh | 4,941 | 4,641 | 5,000 | 3,748 |
| v1.3.15/zh | 5,249 | 5,009 | 5,225 | 4,000 |
| v1.3.0/en | 5,090 | 4,781 | 3,926 | 3,867 |
| v1.3.15/en | 5,373 | 5,177 | 4,140 | 4,116 |

Section presence (leaves):

| tree | 概述/Overview | 心智模型 | 关键成员 | ```csharp | 怎么用 |
|---|---|---|---|---|---|
| v1.3.0/zh | 98.9% | 98.9% | **3.4%** | 100% | **0%** |
| v1.3.15/zh | 96.9% | 99.6% | **3.7%** | 100% | **0%** |

These trees are **not empty shells** — the skeleton is present and the heading is present.
The content behind those headings is template filler. That distinction drives everything below.

## 3. Is `weak-mental` real, or a gate artifact?

`stripMdNoise` deletes fenced code blocks before the gate measures prose length, so a page
whose substance lives inside ``` fences could fail on a technicality. Tested and **ruled out**:

| tree | mental-model sections failing gate | real boilerplate | genuinely short (<200 chars raw) | gate artifact |
|---|---|---|---|---|
| v1.3.0/zh | 4,946 | 3,748 | 1,198 | **0** |
| v1.3.15/zh | 5,206 | 4,000 | 1,206 | **0** |

The artifact class is empty, so there is no cheap win here — these pages genuinely need work.
(Hypothesis tested and publicly retracted before it influenced any scheduling.)

## 4. THE NUMBER THAT DECIDES SCHEDULING — three tiers (current team-wide rubric)

**Superseded.** An earlier version of this file used a two-tier split (additive / rewrite).
That was wrong: it collapsed `half-rewrite` into `rewrite`, which made the backlog look far
worse than it is. The rubric is now team-wide and uses **only** the `Overview` and
`Mental Model` sections — no page length, no code-block count, no other signal. Reason:
every classification failure this session came from carrying an extra condition.

Real-ness is judged with the gate's own tests, imported from
`tools/lib/handwritten-policy.mjs`:
- Overview real: `stripMdNoise(body) > 60` chars and not the `是 TaleWorlds.X 下的公开类型` /
  `is a public type in/under TaleWorlds.X` formula.
- Mental Model real: `stripMdNoise(body) > 80` chars and not one of the 6 boilerplate strings.

| tier | rule | leaves | share |
|---|---|---|---|
| additive | both real | 2,995 | 13.9% |
| half-rewrite | exactly one real | **16,473** | **76.4%** |
| rewrite | neither real | 2,085 | 9.7% |
| total | | 21,553 | |

Per tree:

| tree | leaves | additive | half-rewrite | rewrite |
|---|---|---|---|---|
| v1.3.0/zh | 5,180 | 175 | 3,805 | 1,200 |
| v1.3.15/zh | 5,598 | 222 | 4,575 | 801 |
| v1.3.0/en | 5,180 | 1,253 | 3,868 | 59 |
| v1.3.15/en | 5,595 | 1,345 | 4,225 | 25 |

Per bucket (mission-ext, the current priority):

| bucket | additive | half-rewrite | rewrite |
|---|---|---|---|
| v1.3.0/en/mission-ext | 317 | 786 | 0 |
| v1.3.15/en/mission-ext | 622 | 1,011 | 0 |
| v1.3.0/zh/mission-ext | 20 | 780 | 303 |
| v1.3.15/zh/mission-ext | 3 | 1,387 | 243 |

Note the en side of mission-ext has **zero** true-rewrite pages — everything there is either
additive or half-rewrite. Any pilot drawn from an "old rewrite list" for that bucket is in
fact a half-rewrite pilot.

## 4b. The three small trees are 100% additive

| tree | leaves | additive | half-rewrite | rewrite |
|---|---|---|---|---|
| v1.4.6/zh | 80 | 80 | 0 | 0 |
| v1.4.7/zh | 23 | 23 | 0 | 0 |
| v1.4.7/en | 23 | 23 | 0 | 0 |
| v1.5.3/zh | 138 | 138 | 0 | 0 |

The measured 40–45 pages/hour is therefore an **uncontaminated additive rate**, and the
939-page `mission-ext en` block currently in flight is likewise 939/939 additive, so the
~21–24 hour estimate for it holds.

## 5. Throughput: one measured rate, for one work type only

Measured on the three small trees (all **additive**): **≈40–45 pages/hour per worker**.

**This rate must not be applied to the 16,473 half-rewrite or 2,085 rewrite pages.** No
rewrite-type and no half-rewrite-type page has been produced yet, so both rates are
**unmeasured**. Two 15-page pilots are staged to measure them, each sampled *evenly across
its pool* rather than cherry-picked:

```
PILOT-15-halfrewrite.pages.txt   drawn evenly from 3,964 half-rewrite pages  <- the 76.4% class
PILOT-15-fullrewrite.pages.txt   drawn evenly from   546 true-rewrite pages
```

Per the Boss: **no total estimate may be quoted until the relevant pilot rate exists.**
The earlier "37,000 pages × 15 min" style extrapolation was invalid precisely because it
multiplied a single rate across mixed work types.

## 6. Source-field resolution (checked before any writing)

```
v1.3.0/zh   5,180 leaves · Source field present 5,179 · direct path hit 5,179 · by type name 0 · UNRESOLVED 1
v1.3.15/zh  5,598 leaves · Source field present 5,499 · direct path hit 5,457 · by type name 42 · UNRESOLVED 99
```
Source trees are flat: `bannerlord-1.3.0` = 4,515 distinct .cs basenames,
`bannerlord-1.3.15` = 5,063. Only v1.4.5 has the extra `Bannerlord.Source/bin/` level.
The 99 unresolved v1.3.15/zh pages must be listed to the worker up front and never
path-guessed.

**"Not found in this tree" is not "does not exist."** v1.3.0's tree is ~40% the size of
v1.5.3's (4,596 vs 11,487 .cs files in the earlier count), so absence carries no
non-existence claim. Any such claim needs a positive `file:line` from some other evidence.

## 7. Tooling built this session

- `tools/_cite-audit.mjs` — proves every `` `File.cs:NNN` `` citation resolves to a real,
  non-blank source line. `deep_pass` does **not** prove this; a page can pass the gate
  carrying invented line numbers. Self-tested: probe→fail, real page→pass, bad path→exit 2,
  no args→exit 2, inference→pass. Not yet circulated team-wide; it produced two false
  failures before it was fixed (cross-version basename collision, then
  `bannerlord-v1.4.6` vs `bannerlord-1.4.6`), and it must survive a zero-false-positive run
  on a new bucket before others rely on it.
- Known blind spot: it only matches the full `` `File.cs:NNN` `` form. Bare continuation
  refs like `（:368）` are invisible, so a low `CITES` count means **not audited**, not verified.

## 8. Artefacts

- `tools/_evidence-lead8-small-trees-20261004.md` — the three small trees
- `C:/WorkSpace/Bannerlord/tools_tmp/lead8_assign/CONTRACT.md` — shared writing contract
- `C:/WorkSpace/Bannerlord/tools_tmp/lead8_assign/*.pages.txt` — per-worker page lists