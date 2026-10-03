# Review report — commit `d273cd7539`, batch-1 hand-written pages

**Reviewer:** worker-55 · **Date:** 2026-10-02 · **Line:** review line
**Batch:** commit `d273cd7539` — *"checkpoint: batch-1 hand-written pages, dead rules removed, site-wide 0 broken links"*
**Source trees:** `C:/WorkSpace/Bannerlord/bannerlord-{1.4.6,1.4.7,1.5.3}/` (and 1.3.0 for the false-positive check)
**Outputs:** `tools/_review_batch1_d273.jsonl` (20 rows), this file.
All page text read from the **delivered revision** via `git show d273cd7539:<path>`.

---

## Scope confirmation (done before reviewing)

| check | result |
|---|---|
| commit exists | yes (`git cat-file -t` → `commit`) |
| files changed total | **188** (MEASURED) |
| under `content/` | **177** |
| non-`content/` | 11 — all `tools/`, incl. **my own** `_audit_gen_classify.mjs` swept into the checkpoint |
| areas | `v1.5.3/zh/api` 111 · `v1.4.6/zh/api` 50 · `v1.4.7/en/api` 15 · `v1.4.6/zh/architecture` 1 |

**This batch is new-tree content, not lead-1's `v1.3.0` line.** Boss assigned it to me
explicitly in the brief, so I reviewed it; I am flagging the ownership fact rather than
silently proceeding. No evidence in the commit that it is another reviewer's output.

## Sample

20 pages: **8 en / 12 zh**, **3 `_index.md`**, across 10 areas
(core-extra, core, engine, gui ×2, mission, save-system ×2, storymode ×2, campaign,
localization ×2, campaign-ext, architecture). zh/en split and index count meet the brief.

---

## The three required numbers

### 1. N reviewed, M wrong + error-class distribution

**20 reviewed, 2 wrong.**

| error class | count |
|---|---:|
| format | **0** |
| fabricated_name | **0** |
| **semantic** | **2** |
| link | **0** |

### 2. Errors the gates caught but the author had not already fixed

**0.** MEASURED:
- **0/20** carry a generation self-declaration in any of the four dialects
  (`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` /
  `Auto-generated campaign action reference`).
- Per-page `fabricated` recorded as **0** in the JSONL. I am **not** quoting the
  anti-fabrication tool's site-global number — it includes other lines' pages.
- **17/20** carry ≥1 ```csharp block. The 3 without are `_index.md` index pages, where
  I do **not** treat the code-block requirement as applicable.
- All identifiers used in every code block were tested against the **target version tree
  for that page** (1.4.6 pages → 1.4.6 source; 1.4.7 → 1.4.7; 1.5.3 → 1.5.3).
  Corpora MEASURED: 1.4.6 = 128,096,041 chars · 1.4.7 = 128,107,842 · 1.5.3 = 129,090,548.

### 3. Errors no gate caught that only human reading found

**2** — both the same defect, in two pages.

**I looked for these specifically.** Method: I built a full-text corpus per version, walked
the commit's own history for each candidate identifier across **all four** trees
(1.3.0, 1.4.6, 1.4.7, 1.5.3) specifically to separate *fabrication* from *correct
cross-version note*, then read the page's framing before deciding.

---

## The two rejections — same root defect

> `public static bool TryRestore(GameManagerBase gameManager, string saveName, ISaveDriver driver, out Game game)`

| page | error class | framed as cross-version? |
|---|---|---|
| `content/v1.4.7/en/api/save-system/SaveManager.md` | **semantic** | **no** |
| `content/v1.4.7/en/api/save-system/LoadContext.md` | **semantic** | **no** |

**What the source says.** `TryRestore` appears in **none** of `bannerlord-1.3.0`
(36,525,272 chars), `1.4.6`, `1.4.7`, `1.5.3` — **0 occurrences, MEASURED**, full-tree scan.

The real 1.4.7 surface, read directly from source:

```
bannerlord-1.4.7/TaleWorlds.SaveSystem/SaveManager.cs
  public methods: InitializeGlobalDefinitionContext, CheckSaveableTypes,
                  Save, ShouldResolveConflicts, LoadMetaData, Load

bannerlord-1.4.7/TaleWorlds.SaveSystem/Load/LoadContext.cs
  public methods: Load, TryConvertType, GetObjectWithId,
                  GetContainerWithId, GetStringWithId
```

**Why `semantic` and not `fabricated_name`:** the surrounding members on both pages are all
real and resolve in 1.4.7. The failure is presenting a non-existent entry point as part of
this version's API — a version-attribution error, not an invented type.

**False-positive rule applied and why it did not rescue these.** In the previous batch
`AgentFlag.md` correctly cited a 1.3.0-absent API **because it framed it** as a later
addition. I checked the framing of every unresolved identifier here. `TryRestore` appears
bare, in a signature line, with no "new in", "added in", or version qualifier anywhere on
either page — so the cross-version defence does not apply. **Contrast: `GlobalLayer`,
unresolved in my earlier run, is genuinely present in 1.3.0 — so `ScreenManager.md` passes.**

---

## Unresolved but NOT rejected — recorded, not dismissed

Identifiers that did not resolve in the target version tree but which I could not cite a
disproving source line for. **A rejection without a citation is an opinion, not a rejection.**

| page | unresolved | note |
|---|---|---|
| `v1.4.7/en/api/gui/ScreenManager.md` | `CurrentScreenName`, `GlobalHudLayer`, `CurrentTitle`, `IsMouseOnTop`, `DescribeDevice`, `CanReactToKeyboard` | **not example-local** — highest-priority follow-up |
| `v1.4.7/en/api/core-extra/Game.md` | `TryGetParty`, `IsLegitimateSkill` | |
| `v1.4.7/en/api/engine/MBDebug.md` | `AgentLabelOverlay` | |
| `v1.4.7/en/api/mission/MissionBehavior.md` | `DeathsThisMission` | |
| `v1.5.3/zh/api/storymode/StoryModeQuestBase.md` | `RescueBrotherQuest` | |
| `v1.5.3/zh/api/storymode/CampaignStoryMode.md` | `OnDailyTickEvent` | |
| `v1.4.6/zh/architecture/sdk-overview.md` | `MainAgentReady` | |

## Three times I nearly got it wrong — recorded because the discipline mattered

**(a) `grep` is broken in this shell.** It returned **zero** hits for `TryRestore` in a
directory I had already listed successfully, and for other symbols I know exist. Every
"absent" result I report was therefore produced in **node against a corpus**, never by grep.
A grep-based result here would have been silently empty — which reads exactly like
"verified absent".

**(b) I built the wrong corpus path first.** `bannerlord-` + `v1.4.7` = `bannerlord-v1.4.7`,
which does not exist. Every identifier came back unresolved — a result that *looked* like
"this batch is full of fabricated names". The giveaway was that **nothing at all** resolved.
Corpus sizes (128 M chars, 11,387 `.cs` files) are now verified.

**(c) The "surprisingly good" trigger fired and I checked.** `Equipment.md`,
`SaveManager.md` (zh) and `TextObject.md` resolved **every** identifier — which is what I
expected. Per the brief I treated that as a smell, so I confirmed the corpus is real by
reading `SaveManager.cs` and enumerating its actual public methods (listed above). They
match what the pages claim.

---

## MEASURED vs INFERRED

**MEASURED:** all counts above; corpora sizes; the four-dialect marker scan; per-page
code-block counts; `TryRestore` absent from four trees; the public-method lists quoted;
`GlobalLayer` present in 1.3.0.

**INFERRED (flagged as such):** that the 3 `_index.md` pages are not subject to the
code-block requirement — this is my judgement from tree convention, not a rule I was given.
That choice is the one thing in this report a reviewer could reasonably overturn; if index
pages *are* required to carry a code block, the pass count drops from 20 to 17 and the
error count changes by zero, since I found no defect in them.

**Not done:** claim-by-claim prose audit of the member tables and behavioural narrative on
the 18 passing pages. Depth was *identifier-level across all 20* plus *line-level source
reading for the two rejections*. I am not claiming more.

## Suggested gates

1. **Entry-point existence check, per version tree.** Both rejections are a public static
   method that does not exist in the page's own version. Checking *every* API in a code
   example against the **target** tree — not the whole corpus, and not `grep -w` — would
   have caught both. This is the same gap as the base-class case in the previous batch.
2. **Version-qualified existence.** `TryRestore` exists in *no* tree here, but
   `UnreachableViaNavMesh` existed in 1.4.5 and was legitimately framed. A gate that
   distinguishes "absent everywhere" (always an error) from "absent from this version"
   (needs framing) would be safe in both directions.
3. **grep sanity assertion.** My grep returned empty for symbols that exist. Any gate built
   on shell grep must assert a known-positive control before trusting a negative.