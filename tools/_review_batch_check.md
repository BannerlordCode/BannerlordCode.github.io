# `_review_batch_check.mjs` — review harness

Per-page mechanical checks for a batch of content pages. **Read-only**: it opens no file for
writing, runs no git write command (`log`/`show` only, for historical revisions), and creates
nothing.

> **A clean run is NOT an endorsement.** See [Known blind spots](#known-blind-spots) — most
> importantly the harness does not check return types, so a page containing a real compile error
> can pass all three checks. `content/v1.5.3/zh/api/core-extra/Vec2.md` is the confirmed example:
> it assigns the result of `RotateCCW`, which returns `void` (`Vec2.cs:230`), and the harness
> reports it clean. Do not write "harness says clean" in a review conclusion. Write
> "the three mechanical checks found nothing; they do not cover X".

## Usage

```bash
# a batch file, one path per line
node tools/_review_batch_check.mjs --batch paths.txt

# paths on the command line
node tools/_review_batch_check.mjs content/v1.4.6/zh/api/core-extra/ItemObject.md content/v1.5.3/zh/api/campaign/Campaign.md

# a revision that no longer exists in the worktree (git object read, no checkout)
node tools/_review_batch_check.mjs --git-show 361b5fdf6e:docs/v1.3.0/zh/api/mission/MissionBehavior.md

# prove the harness fails on known-bad pages — takes no arguments
node tools/_review_batch_check.mjs --selftest
```

| flag | effect |
|---|---|
| `--batch <file>` | read paths from a file, one per line |
| `--git-show <sha>:<path>` | check a historical revision instead of the worktree copy (repeatable) |
| `--selftest` | run the built-in proof; no other arguments needed |
| `--json` | machine-readable output |
| `--strict-crossversion` | treat `cross_version_reference_suspected` as a failure |
| `--skip-lane-wide` | skip the lane-wide (context) scan; prints `DID NOT RUN` for it, never a silent 0 |
| `--marker-allow <path>` | exempt one page from the marker check (see blind spots) |
| `--repo <root>` | point at a different repository root |

### Exit codes — four distinct outcomes

| code | meaning |
|---:|---|
| `0` | all three checks ran, every page passed |
| `1` | all three checks ran, at least one page failed |
| `2` | **a check could not run** — fail closed. This is *not* a pass |
| `64` | usage / argument error (no paths, unreadable `--git-show`, batch path that does not exist) |

Code 2 and 64 are deliberately distinct: "we could not measure" and "you called it wrong" are
different problems, and a caller must not have to guess which happened.

## The three checks

### 1. `deep_pass` — structure and substance

Verbatim output of `classifyPage(path, text)` from `tools/lib/handwritten-policy.mjs`. The policy
is **not re-implemented here**. Note that `classifyPage` returns `{status, reasons}` where status is
one of `deep_pass | stub | noise | family_entry_pass`; `deep_pass` is exactly `status === 'deep_pass'`
and this tool reports the raw status and reason list unchanged.

`_index.md` pages are reported as `noise` / `family_entry_pass` by the policy. That is **not** a
defect in the page: the deep-pass contract is written for class pages. Such rows are tagged
`[index page: deep_pass is not applicable]` and should not be counted as findings about content.

### 2. Fabrication — absence from the page's own version source tree

Per page, this uses `checkPage()` from `tools/lib/anti-fabrication.mjs` against the corpus of the
lane the page lives in (`content/v1.4.6/…` → `../bannerlord-1.4.6`). Reader-owned example
identifiers are skipped by the lib, and the count of skipped identifiers is reported.

**Every hit is an absence, and absence alone never means "fabricated".** Two categories:

| category | when | effect |
|---|---|---|
| `identifier_absent_in_<tree>` … `category=fabricated` | identifier absent from the lane's source tree **and** no version-difference framing found anywhere on the page | failure |
| `identifier_absent_in_<tree>` … `category=cross_version_reference_suspected` | absent, **and** the page frames version differences | **not** a failure; listed for a human |

Framing is tiered and printed, so a reviewer sees how strong the signal is:

- `framing=block` — another version number, or version-difference wording, sits next to the fence
  (strong signal).
- `framing=page-level-only` — some other version is named somewhere on the page but not next to
  this block (weaker signal; printed as such).

Two numbers are always reported and never conflated:

- `fabricated(batch)` — **only this batch's own pages**. This is the number that judges the batch.
- `fabricated(site-global)` — lane-wide context over every page in each lane the batch touches.
  Printed under its own heading and labelled "NOT this batch". Use `--skip-lane-wide` for speed; it
  prints `DID NOT RUN`, never a zero.

### 3. Generation marker — self-declaration in frontmatter only

Three dialects, four literal patterns:

| dialect id | pattern |
|---|---|
| `class-ref/zh` | `的自动生成类参考` |
| `class-ref/en` | `Auto-generated class reference` |
| `campaign-action/zh` | `的自动生成战役动作参考` |
| `campaign-action/en` | `Auto-generated campaign action reference` |

The match is restricted to the **frontmatter block** — the page self-declaring that it is a
machine-generated reference — and never to the body.

Why frontmatter-only is the right rule here, measured rather than assumed: across 39,013 pages the
dialects appear in frontmatter ~18.8k / ~17.2k / 92 / 120 times and in the **body** of a page whose
frontmatter lacks the marker, **0 times**. The four `noise-policy.md` pages, whose entire subject is
`AutoGenerated` types, carry no marker in their frontmatter and are correctly not hits.

A page that *mentions* a dialect in the body but does not declare it is listed separately under
`NOTE pages that mention a marker dialect in the BODY` and is not counted as a hit.

## Fail-closed and instrument-liveness behaviour

- Every check prints its own line: `<check>: measured N pages`, or `<check>: DID NOT RUN`.
- **Preflight assertions** run before anything is reported, and any failure exits 2:
  - both policy modules import and export what is expected;
  - the frontmatter extractor passes a positive self-test **and** does not match an unanchored
    `---` (this would silently invent a frontmatter block);
  - **each of the four marker patterns must match at least one page site-wide.** A pattern matching
    nothing means the instrument is broken, and the tool refuses to report 0;
  - each lane's source corpus exists, is non-empty, and passes the lib's **positive control**
    (`AddBehavior`, `SyncData`, `IsLoading`, `OnGameStart`, `PushScreen`, `PopScreen` must all be
    found). A dead control means misses would be meaningless, so the tool refuses to report;
  - a batch path that does not exist, or a `--git-show` revision that cannot be read, aborts the
    whole run rather than measuring a partial batch.
- No existence check in this tool relies on `(a|b|)*` or an unanchored alternation that can match
  empty. Frontmatter uses `/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/`, anchored at both ends, and is
  self-tested against a negative case.

## `--selftest`

Takes no arguments. It injects its own known-good and known-bad pages, prints which pages it used and
what it expected of each, and exits `0` only if every assertion holds. Current run: **15/15
assertions pass**.

| kind | page | expected |
|---|---|---|
| good | `content/v1.4.6/zh/api/core-extra/ItemObject.md` | passes all three |
| good | `content/v1.5.3/zh/api/campaign/Campaign.md` | passes all three |
| good | `content/v1.4.7/en/api/campaign/Campaign.md` | passes all three |
| bad | `content/v1.3.0/en/api/core-extra/AgentAttackType.md` | `stub` + `class-ref/en` marker |
| bad | `361b5fdf6e:docs/v1.3.0/zh/api/mission/MissionBehavior.md` | `CustomMissionBehavior` → `category=fabricated` |
| bad | `e8356e504c:content/v1.4.5/zh/api/core-extra/GameModelsManager.md` | `CustomGameModelsManager` → `category=fabricated` |

The two bad git revisions are the positive control recovered from history, because
`content/_withdrawn/` does not exist in this tree:

```bash
git show 361b5fdf6e:docs/v1.3.0/zh/api/mission/MissionBehavior.md          # CustomMissionBehavior
git show e8356e504c:content/v1.4.5/zh/api/core-extra/GameModelsManager.md   # CustomGameModelsManager
```

Discrimination was verified rather than assumed: the **same page at two revisions** behaves
differently — the current `content/v1.4.6/…/GameModelsManager.md` passes (`fab=0`) while revision
`e8356e504c` of the same page fails (`fab=1`). A verifier that cannot fail is indistinguishable
from one that is not wired; that A/B pair is the evidence this one is wired.

## Known blind spots

1. **Return types are not checked — the biggest gap.** The fabrication check only asks whether an
   identifier *exists* in the source tree, never whether a call's return type matches the
   documented use. Confirmed false negative: `Vec2.md` assigns the result of `RotateCCW`, which
   returns `void` (`Vec2.cs:230`), and the harness reports the page clean. A page can therefore be
   "clean" and still hand a reader a compile error. This is the known accepted gap; the
   return-type check is the proposed fix and was not built here.

2. **Cross-version references are reported, not decided.** Absence from a version tree is not proof
   of fabrication. Two confirmed false positives that motivated the two-category design:
   - `ItemModifier.md` cites `IsBeneficial`, which has 0 occurrences in all 4,572 files of the 1.3.0
     tree, while the page explicitly frames it as a 1.4.6+ addition. The page is correct.
   - a view-model page's block 13 shows a 4-arg constructor absent from 1.3.0, inside a block
     explicitly labelled a cross-version difference. The page is correct.
   Meanwhile a page with a base class `MissionBehaviorBase` absent from **all four** trees is a real
   fabrication. Only a human can separate these, which is why the second category is not a failure.
   MEASURED: 54 pages site-wide currently carry an absent identifier *and* mention another version;
   the ones inspected classified as `framing=page-level-only`, i.e. the weak tier. If a lead wants
   them to fail anyway, use `--strict-crossversion`.

3. **Framing detection is a heuristic, in both directions.** A page with a version-comparison
   section far from the code block will be downgraded to the weak `page-level-only` tier even when
   the block itself is plainly a current-version example, and a page that discusses another version
   anywhere will not produce `framing=block` even if the citation is legitimate. The tier is printed
   precisely so the reviewer can discount it.

4. **Two code paths for the fabrication policy.** `checkPage()` takes a file path, so it cannot be
   used on a git-only revision. For `--git-show` rows the same policy is applied to in-memory text
   from the lib's exported primitives (`csharpBlocks`, `readerOwnedIdentifiers`,
   `identifiersInBlock`, `isExampleName`), in the order `checkPage` documents. It is the same policy
   in the same sequence, but it *is* a second code path and must be kept in step if the lib changes.

5. **Corpus assembly is duplicated IO.** `runGate({sourceRoot})` accepts a `sourceRoot` but the lib
   reads a module-level `SOURCE_ROOT`, so that parameter is inert; and `sourceCorpus()` is bound to
   a single lane. This tool therefore concatenates `.cs` files itself (skipping dotfiles) and caches
   per lane. Pure IO — no policy — but it duplicates the lib's walk and can drift from it.

6. **A page whose frontmatter legitimately quotes the marker would be a false positive.** None exists
   today (measured: 0 body-only, and no `noise-policy` page carries the marker in frontmatter). If one
   is ever created, exempt it with `--marker-allow <path>` rather than weakening the pattern.

7. **Index and hub pages cannot reach `deep_pass`.** See check 1. A batch of `_index.md` pages will
   report near-100% findings that say nothing about content quality.

8. **Site-wide numbers move while you read them.** The tree is being actively rewritten by other
   lines. Observed during development: pages vanished mid-scan, and the marker hit counts changed
   between runs on the same day (e.g. `class-ref/zh` 19,044 → 18,862). Quote the number from the run
   you are citing, not from this document.

## Cost

- site-wide marker probe: ~23 s (reads a 4 KB window per page, not whole documents).
- per-lane corpus build: a few seconds to ~15 s depending on lane.
- lane-wide scan: proportional to lane size — v1.3.0 is ~10.6k pages and dominates. Use
  `--skip-lane-wide` for fast iteration; it announces itself as `DID NOT RUN`.

## Output shape

Per page: path, origin (`worktree` or `git:<sha>`), deep status + reason count, fabrication count,
cross-version count, marker dialect hit, byte size, heading count, code-block count. Then a summary:
pass / needs-human-review / fail, a per-check failure tally, and the **reject list** — the failing
pages with the full detail, which is the list to send back to the owning lead.

## What was MEASURED vs INFERRED in this document

- MEASURED: all selftest assertion results; the exit-code table (each observed); the A/B revision
  discrimination; the 0-body-only marker property; the 54 cross-version candidate pages; the
  frontmatter counts and timings quoted.
- INFERRED / heuristic: the framing tiers and their thresholds; the claim that the duplicated corpus
  walk matches the lib's; that `deep_pass` is not intended for index pages (read from the policy's
  own branches, not from a specification).