# Review report — frozen batch A (25 pages from `tools/_review_batch_frozen.txt`)

**Reviewer:** worker-55 · **Date:** 2026-10-03 · **Line:** review line
**Batch:** 330 dirty `.md` paths under `content/`, frozen at **sha `bb41caf9ee`**
(`git rev-parse HEAD` → `bb41caf9ee`, **verified**).
**My half:** non-index list, odd indices (1st, 3rd, 5th…) = **165 pages**.
I did not enumerate the tree; I sliced the frozen file. I did not read the other half (164).

**Rate basis, as required by the brief:**
> **25 pages sampled from a frozen 330-page batch at sha `bb41caf9ee`.**

---

## Freeze integrity — MEASURED

| check | result |
|---|---|
| frozen file lines | **330** (MEASURED) |
| `_index.md` in frozen list | **1** — **skipped as instructed** |
| non-index | 329 → my half 165 / other half 164 |
| pages modified **after** the freeze (mtime > freeze file mtime) | **2 / 330** |
| …of those, in my half / in my selection | **0** |

The two post-freeze edits are `content/v1.3.0/zh/api/gui/BrushListPanel.md` and
`content/v1.3.0/zh/api/mission-ext/AgentBuildData.md`. Neither is in my 25.

> **Method note — my first drift check was wrong and I discarded it.** I ran
> `git diff --stat -- <path>` and got **25/25 "drifted"**. That is meaningless: these are
> *dirty* (uncommitted) files, so differing from HEAD is the definition of the batch, not
> evidence of movement. The mtime-vs-freeze comparison above is the correct test.

## Sample span — MEASURED

| dimension | covered |
|---|---|
| trees | **v1.3.0 (20) · v1.4.5 (5)** |
| languages | **en (8) · zh (17)** |
| areas | **7 of 7 available** — campaign 5, campaign-ext 5, core-extra 3, gui 3, mission 3, mission-ext 3, viewmodel 3 |
| size | 6,610 B – 27,462 B |
| thinnest included | **2** (`BribeGuardsAction` 6,610 B · `ChangeClanInfluenceAction` 6,849 B) |
| largest included | **3** (`Agent` 23,974 · `Mission` 25,140 · `CampaignGameStarter` 27,462) |

> **The "≥8 different areas" requirement is unsatisfiable as written.** The entire
> 330-page batch contains only **7** distinct API areas (`campaign`, `campaign-ext`,
> `core-extra`, `gui`, `mission`, `mission-ext`, `viewmodel`) — measured on the frozen file,
> not my half. I covered all 7. This is a property of the batch, not of my slicing.

---

## The three required numbers

### 1. N reviewed, M wrong + error-class distribution

**25 reviewed, 1 wrong.**

| error class | count |
|---|---:|
| format | **0** |
| **fabricated_name** | **1** |
| semantic | **0** |
| link | **0** |

### 2. Errors the gates caught but the author had not already fixed

**0.** MEASURED:
- **0/25** carry a generation self-declaration in any of the four dialects
  (`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` /
  `Auto-generated campaign action reference`).
- **25/25** carry ≥1 ```csharp block (range 2–7).
- Per-page `fabricated` recorded as **0** in the JSONL. I am **not** quoting the
  anti-fabrication tool's site-global count — it spans other lines' pages. Labelled number:
  **per-page, 0.**
- Corpora used, MEASURED: `bannerlord-1.3.0` = 36,525,272 chars · `bannerlord-1.4.5` =
  111,891,182 chars. Each page was checked against **its own** version tree.

### 3. Errors no gate caught that only human reading found

**1** — `ActionCodeType.md`.

**I looked for these specifically.** Method: extracted every compound-PascalCase identifier
from every code block, tested each against the target version tree, then **read the
surrounding page text** for every unresolved name before deciding, and opened the source file
to check the cited line.

---

## The rejection

**`content/v1.3.0/zh/api/mission-ext/ActionCodeType.md`** — error class **fabricated_name**

> 官方 [HumanAIComponent](../HumanAIComponent) 的 `IsAttacking()` 形状（`HumanAIComponent.cs:344`）

**The citation.** I opened `bannerlord-1.3.0/TaleWorlds.MountAndBlade/HumanAIComponent.cs`
(1,003 lines) and read the cited location:

```
bannerlord-1.3.0/TaleWorlds.MountAndBlade/HumanAIComponent.cs:341
    public bool IsInImportantCombatAction()
    {
        Agent.ActionCodeType currentActionType = this.Agent.GetCurrentActionType(1);
        return currentActionType == Agent.ActionCodeType.ReadyMelee || ... || DefendShield;
    }
```

- The page's **body quote is exact** — line 344 is the six-code OR chain the page reproduces.
- The **method name is wrong**. The method is `IsInImportantCombatAction`, not `IsAttacking`.
- `IsAttacking` occurs **0 times** in `bannerlord-1.3.0` and **0 times** in `bannerlord-1.4.5`
  — **MEASURED**, full-tree scan.

**Framed as a cross-version note? NO.** The page presents it as an existing member of
`HumanAIComponent` in this version, with no version qualifier. The cross-version defence
does not apply.

**Why this matters more than a typo:** the page shows the signature in a ```csharp block as
though it were the official method. A reader who trusts the line citation will call a method
that does not exist — and the citation makes it *more* credible, not less.

---

## False-positive rule — applied, and where it changed the outcome

The brief names four known-correct absences. I checked each framing before deciding:

| identifier | absent from target? | framing | outcome |
|---|---|---|---|
| `UnreachableViaNavMesh` (AgentFlag.md) | yes, 1.3.0 | **explicit**: `← 1.4.6 / 1.4.7 / 1.5.3 新增，1.3.0 与 1.3.15 都没有`; confirmed present in 1.4.5 | **not rejected** |
| `HasValue` (AdvanceVisualOrder.md) | yes, 1.3.0 | page-local accessor inside its own example | **not rejected** |
| `GlobalLayer`, `IsBeneficial` | — | not present in my 25 this round | n/a |

**Every other unresolved identifier was confirmed to be declared *inside the page's own code
block*** — I opened the blocks rather than assuming. Examples, verbatim from the delivered pages:

- `ActionStage.md` → `public bool IsInBlockableWindow(Agent attacker, Agent mainAgent)`
- `AutoScrollParameters.md` → `private static void RevealRow(ScrollablePanel panel, Widget row)`
- `CampaignGameStarter.md` → `public class SlowAgingModel : MBGameModel<AgeModel>`

Absence from engine source is therefore **not** evidence of fabrication for any of those. Only
`IsAttacking` is presented as an existing engine member.

---

## MEASURED vs INFERRED

**MEASURED:** every count above; freeze integrity (2/330, neither in my half); sample span;
corpus sizes; 0/25 markers; 25/25 code blocks; `IsAttacking` absent from two trees;
`UnreachableViaNavMesh` present in 1.4.5; the quoted source line and the page's exact body match.

**INFERRED:** that a page-local helper declared inside an example is *acceptable*. It is a
judgement, not a rule I was given — but the alternative (requiring every identifier in a code
block to exist in the engine) would reject correct teaching examples, so I did not apply it.
This is the single choice most open to reviewer challenge.

**Not done:** claim-by-claim prose audit of member tables and behavioural narrative on the 24
passing pages. Depth was *identifier-level across all 25* plus *line-level source reading for
the rejection and for three page-local-helper confirmations*. I am not claiming more.

## Suggested gates

1. **Symbol-name check against the cited file, not the whole tree.** `IsAttacking` is absent
   everywhere, so a tree-wide check *would* have caught it — but the cheap version of this
   gate (does the token occur anywhere) is what `grep -w` does, and it passes plausible names.
   The version that generalises: *when a page cites `File.cs:NNN`, verify the symbol at that
   line is the symbol the page names.* That check is O(1) and would have caught this exactly.
2. **A "declared-in-this-block" exemption** for identifiers introduced inside the example's
   own code block, so a correct example is not flagged for being example-local. Without this,
   a naive identifier gate produces noise on every teaching page.
3. **Frozen-batch review should use mtime-vs-freeze**, not `git diff`. My first attempt
   reported 25/25 drifted on a batch where 0/25 had moved.