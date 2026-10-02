# Rewrite queue — generated-page candidates

**Owner:** worker-55. **Companion:** `tools/_audit-report-D.md`. **Date:** 2026-10-02.
**Read-only audit.** `content/` untouched by me. Reproduce evidence with:

```
node tools/_audit_gen_classify.mjs              # corpus signals      -> exit 0
node tools/_audit_gen_classify.mjs --control    # refusal verdict     -> exit 2
node tools/_audit_gen_classify.mjs --selftest   # positive control    -> exit 1 if FN>0
node tools/_audit_gen_classify.mjs --negcontrol # negative control    -> exit 1 if over-firing
```

---

# PAGE 1 — READ BEFORE USING ANY NUMBER

## 1. The seven caveats

1. **`classifyPage` is NOT independent evidence.** Jaccard **0.9904** against the marker — it
   is largely re-reading it. **Never cite the two as corroboration.**
2. **`classifyPage=='deep_pass'` is RETIRED** as a handwritten proxy: it fires on only
   **44.23%** of human-certified handwritten pages.
3. **Template-cluster counts are method-sensitive.** 714/5,041 (lead) vs 3,415/14,339 (mine);
   both are valid outputs of valid recipes. **Only "new trees = 0" is robust.**
4. **SET 1 read 30 of 36,519 = 0.08%. Strong about the family, weak about any individual page
   — and this queue is per-page.** Its single biggest structural weakness.
5. **15,507 is an OPEN ITEM.** It appears nowhere in the tree or `git log -S`. I measure
   `classifyPage=='stub'` = 36,747. **Do not silently substitute one for the other.**
6. **The original exception detector caught 2/227 = 0.9% of known-handwritten pages.** Every
   "only N exceptions" claim from it is **VOID**. The "4-page carve-out" is **RETRACTED**.
7. **`TN = 0` (earlier) meant the detector essentially never concluded "clean".** The
   three-state labelling below exists for exactly this reason.
8. **THE MARKER HAS ~ZERO RECALL AND IS LINEAGE-BOUND.** Across the hand-labeled ground truth,
   **140 pages judged generated — marker present on 0 of them** (shard-5: 120 generated,
   0 marker; shard-3: 20 generated, 0 marker). Its true false-positive rate is **unmeasured**
   (the 6 handwritten-with-marker rows are set-construction artifacts, not FPs). Combined with
   the zero-singleton Overview census over its firing population:
   > **The marker identifies ONE generator lineage, not "generatedness". Outside that lineage it
   > is blind — and roughly half of the blind region IS generated.**

## 2. DESIGN PRINCIPLE — why a 7.4% false-positive rate is correct, not sloppy

```
  A page wrongly EXCLUDED from the rewrite queue  -> wasted effort, recoverable, safe
  A page wrongly INCLUDED in the rewrite queue    -> destruction of hand-written work

The detector is therefore tuned to OVER-INCLUDE. A non-zero false-positive rate
on the carve-out is an ACCEPTED COST, not a defect to be optimised away.
```

This is the same asymmetry that governs the marker itself
(**present → rewrite candidate; absent → unclassified, never "safe"**). Without this paragraph
a 7.4% FP rate reads as sloppiness. With it, it reads as a deliberate and correct choice.
Concretely: **FN must be 0; FP may be non-zero.**

## 3. Self-validation of `residual()` — confusion matrix, all four cells

| | truth HANDWRITTEN (new trees) | truth PURE SKELETON (F1/F2) |
|---|---:|---:|
| **says "has real content"** | **TP = 227** | **FP = 2** |
| **says "pure skeleton"** | **FN = 0** | **TN = 25** |

- **Positive control:** `tools/_audit-labels-3.jsonl`, 227 hand-written new-tree pages.
- **Negative control:** 27 marked pages I read in full and judged pure skeleton, including
  lead-5's labelled pair `content/v1.3.0/{en,zh}/api/core-extra/AgentAttackType.md`.
- **Recall 100.0%. Specificity 92.6%.**

### The two false positives, named

Both are **stripper residue, NOT real authored content** — so neither is a Category-B mixed
page; they are generated raw-signature data my stripper did not remove:

| page | what survived | verbatim | diagnosis |
|---|---|---|---|
| `content/v1.3.0/en/api/campaign/CampaignEvents.md` | the 30,602-char generated member table | `\| Name \| Signature \| \|------\|-------\|---\| \| \`OnPlayerBodyPropertiesChangedEvent\` \| \`public static IMbEvent OnPlayerBodyPropertiesChangedEvent { get; }\` \|` | **template residue.** Raw signature table, zero "why" — the exact thing the verdict criterion calls generated. |
| `content/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssue.md` | a bare C# signature line | `` `public override IssueBase.IssueFrequency GetFrequency()` `` | **template residue.** Same root cause: signature rows sit outside code fences and do not begin with `//`, so the code filter misses them. |

**Known remaining stripper gap (unfinished):** lines that are predominantly a C# signature or
a `\|` member-table row are not yet filtered. This inflates the carve-out, which is the safe
direction per §2, but it is a real gap and should be closed before the carve-out is used to
*reduce* work.

## 4. Threshold sensitivity — published, not asserted

Carve-out = `residual() > 0` over all **36,623** marked pages.

| minLen | carve-out | share of marked | v1.3.0 | v1.3.15 | v1.4.5 | v1.4.6 |
|---:|---:|---:|---:|---:|---:|---:|
| **45 (shipped)** | **3,468** | **9.47%** | 1,366 | 1,089 | 1,012 | 1 |
| 60 | 3,311 | 9.04% | 1,308 | 1,032 | 970 | 1 |
| 100 | 2,651 | 7.24% | 1,012 | 832 | 806 | 1 |
| 110 | 2,525 | 6.89% | 956 | 801 | 767 | 1 |
| 120 | 2,410 | 6.58% | 911 | 765 | 733 | 1 |
| 140 | 2,217 | 6.05% | 839 | 716 | 661 | 1 |

**Shipped 45** — the population moves only 9.47% → 6.05% across the sweep, so it is not a
threshold artefact, and 45 is the value at which FN reaches 0. Higher thresholds buy no FP
reduction worth losing recall for.

## 5. ⚠️ THREE STATES — a page is in exactly one

| state | meaning | size | action |
|---|---|---:|---|
| 🟠 **DETECTED AUTHORED** | `residual() > 0`; authored prose found below the skeleton | **3,468** | carve-out / mixed. **Do not blindly rewrite.** Quote required. |
| 🟡 **NO AUTHORED PARAGRAPH FOUND** | detector found nothing above threshold. **This is NOT "reviewed and clean."** It has met only a detector with **TN≈0**, which cannot certify cleanliness. | **33,155** | unclassified. **Not approved for deletion.** |
| ⚫ **NOT COVERED BY THIS METHOD** | outside the marked set entirely | **2,390** | see *Uncovered scope*. **Unclassified.** |

**33,155 pages must never render as "already reviewed and clean."** That false impression is
what nearly destroyed 1,132 hand-written pages earlier in this audit.

---

# TWO-TIER VISUAL GRADING

```
╔════════════════════════════════════════════════════════════════════════╗
║  36,623 pages   CLASSIFIED  (detector applied; most are only          ║
║                              "NO AUTHORED PARAGRAPH FOUND", TN≈0)    ║
╠════════════════════════════════════════════════════════════════════════╣
║  2,012 pages   SAMPLED EXTRAPOLATION  (NOT adjudicated page-by-page;  ║
║                 227 pages / 3.11 MB read; thinnest stratum is MIXED)   ║
╚════════════════════════════════════════════════════════════════════════╝
```

**These two tiers use deliberately different words. The second is not a verdict per page.**

---

# Category A — 骨架类生成页 (skeleton-class generated)

> template prose, no information → **withdraw and rewrite**

| pages | tree | lang | template family |
|---:|---|---|---|
| 6,758 | v1.4.5 | zh | **F1 `generic-zh`** |
| 5,150 | v1.4.5 | en | **F2 `generic-en`** |
| 4,117 | v1.3.15 | en | **F2 `generic-en`** |
| 4,001 | v1.3.15 | zh | **F1 `generic-zh`** |
| 3,873 | v1.3.0 | en | **F2 `generic-en`** |
| 3,873 | v1.3.0 | zh | **F1 `generic-zh`** |

Secondary families, all confidence **A** (full table in `tools/_audit_gen_classify.mjs`):
F3/F4 `rule-model` 1,369 · F5/F6 `gauntlet-widget` 1,910 · F7/F8 `data-carrier` **1,085** (552 zh + 533 en) ·
F9/F10 `view-layer` 806 · F11/F12 `manager` 841 · F13/F14 `handler` 423 ·
**F99 `unmatched` 1,867** *(held — family not pinned)* · **F15 `campaign-action-zh` 93** and
**F16 `autogenerated-en` 10** *(self-declare generated under wording the two briefed strings
miss — invisible until the union regex was applied)*.

**Tier B — review before scheduling.** The 20 largest marked pages (~1.6 MB):
`CampaignEvents`, `Agent`, `CampaignEventDispatcher`, `CampaignEventReceiver`, `Scene`,
`Mission`, `WeakGameEntity`. All Category A structurally, large enough that a bad pass costs
the most.

---

# 🟠 Category — DETECTED AUTHORED (3,468). Do NOT blindly rewrite.

`residual() > 0`. **Do not execute a whole-body rewrite on these.**
Per tree: v1.3.0 **1,366** · v1.3.15 **1,089** · v1.4.5 **1,012** · v1.4.6 **1**.
By family: F1_zh 1,333 · F2_en 1,059 · F99 494 · F3_zh 136 · F4_en 113 · F7_zh 71 ·
F8_en 63 · F12_en 48 · F11_zh 48 · F5_zh 33 · F6_en 19 · F10_en 14 · F9_zh 14 ·
F13_zh 12 · F14_en 11.

### Named carve-out entries, with verbatim evidence

**`content/v1.4.6/zh/api/campaign/_index.md`** — mixed framing + extracted table.

> `## 一个必须说清楚的同名坑：` · `## 尚未撰写的清单（545 个）` · `## 已撰写的类页（9 张）`
> `campaign` 与 `campaign-ext` 的分工、以及 `AutoGeneratedSaveManager` 的跨桶同名问题也在这里说明。

**Authored section on a marked page — 4 pages** (`GameMenuManager`, `KingdomDecision` ×
v1.3.15 / v1.4.5), all carrying `## 依赖图`:

> `- [GameMenu](../GameMenu/) — 菜单数据模型，由本管理器注册与查找`
> `- [GameMenuOption](../GameMenuOption/) — 菜单选项，由本管理器求值与刷新`

**The two false positives** are listed on page 1 §3 and are *not* findings — they are stripper
residue that lands here safely.

> **Stale evidence:** `content/v1.4.6/zh/api/core-extra/GameModel.md` **changed under me** —
> another line is actively writing to `content/v1.4.6/zh/api/**`. Any quote from that page must
> be re-verified against current text before use.

---

# Category B — 索引层/混合页 · 另案决策 (19 + 1) — **NOT in the rewrite queue**

> machine-extracted **DATA** + **authored** impact prose → **separate decision**
> **KEPT as a degraded index layer. Not deleted. Not "reviewed and clean".**

`content/versions/<Class>.md` (19) and `content/_index.md`. **Do NOT delete. Do NOT file under
Category A.**

**Reproducible evidence:** extract the `**中文：**` impact slot, abstract type names and
backticked spans → **19 pages → 19 distinct shapes → 19 singletons → zero reuse.**
Independently reproduced by worker-55 and by lead-5.

> `Clan.md` — 1.4.5 将 `CommanderLimit` 重命名为 `WarPartyLimit`（现委托
> `ClanTierModel.GetPartyLimitForTier`）。引用 `CommanderLimit` 的 mod 必须改名为 … 否则编译失败。

> `DiplomacyModel.md` — 1.4.5 新增 `WarDeclarationScorePenaltyAgainstTradePartners`；移除
> `WarDeclarationScorePenaltyAgainstAllies` … 宣战评分重平衡——以贸易伙伴关系为核心。

> `MissionBehavior.md` — 稳定。1.3.15 相比 1.3.0 新增 1 个成员；1.4.5 与 1.3.15 一致。

**`HeroDeveloper.md` is the sole Category A member of this block** — empty slots, literally
`**中文：** **English：**`.

---

# ⚫ Uncovered scope — NOT cleared

| population | pages | state |
|---|---:|---|
| old-tree pages, no marker | **2,012** (worker-55) / **2,022** (sibling) | ⚫ **SAMPLED EXTRAPOLATION** — see below |
| — of those, generated but union-missed (F15/F16) | 103 | in Category A |
| new trees v1.4.6 / v1.4.7 / v1.5.3 | 359 | ⚫ marker fires on **0/359**; 132 out-of-sample + 30 read → **0 generated found** |
| `content/versions/**` | 19 | Category B |
| `content/_index.md` | 1 | Category B |

**The ±10 is recorded unaveraged.** 2,012 vs 2,022 differ because the marker-regex breadth
differs between us. A figure that moves by 10 between two independent measurements is itself
evidence that **the number depends on the marker definition**. A third figure, **2,115**, was
mine and was **wrong** — it mixed a narrow marker against a broad one (38,634 − 36,519).

### Resolved: shard-5, 227 rows on the 2,012

`tools/_audit-labels-5.jsonl` holds **227 rows — 120 generated / 107 handwritten / 0 unsure
= 52.9% / 47.1%**, from a stratified **11.2%** sample. I have **not** independently verified
the stratification weighting; the ratio is the sibling's. Per caveat 8, ~half of the blind
region is generated and no automated signal here will touch it.

#### ACTION ITEMS — not ratios

| ✅ confirmed needs **REWRITE** | 🛡️ confirmed needs **PROTECTION** |
|---|---|
| **120 pages** — generated lineage (marker-present or not) | **107 pages** — hand-written. **Do not touch.** |
| plus any future shard results | plus **the entire 2,012**, not just the 107 — see the language-bias correction below |

#### ⚠️ Language-bias correction — the do-not-delete guard is 2,012 wide, not 1,061

My earlier "1,061 hand-written deep pages" was a **language-biased LOWER BOUND**, not a count:

| | EN | ZH |
|---|---:|---:|
| unmarked pages | 741 | 1,271 |
| my DEEP rule fires | **116 (15.7%)** | **945 (74.4%)** |

The rule is **4.7x more likely to fire on a Chinese page** and can barely see English.
Under-detection means hand-written English deep pages are **not** entering the do-not-delete
set — the exact pages most likely to be swept.

> **Operational rule: DO NOT DELETE anything in the 2,012 until a bilingual rule replaces the
> Chinese-keyed one.** The 1,061 figure must never be used as a whitelist.

**Circularity checked and refuted:** the DEEP rule fires on **0** pages belonging to any of the
14 generated families (all 1,061 hits are `F99_unmatched`), and the F7/F8 `data-carrier` family
has **0** members in the unmarked set. It is not counting a template family. The identical
`1,062` appearing in both places was a **transcription error of mine** — I copied the DEEP
count into the F7/F8 row; the true F7/F8 total is **1,085**.

### ⚠️ Unsure-complement warning

`sure + unsure` is **not** a valid identity. A ratio computed while `unsure` rows exist is a
**different quantity** from the ratio after they resolve, and **`unsure` must never be silently
folded into the complement of another class.** lead-5 made this error and it briefly reversed a
direction in front of Boss. shard-5 reports `unsure = 0`; if a future shard reports non-zero,
**re-state the ratio — do not silently recompute it.**

---

# THE RULE

> **Category A** → *rewrite candidate*, evidence-backed (FN = 0/227).
> **🟡 yellow** → ***NO AUTHORED PARAGRAPH FOUND — NOT VERIFIED CLEAN.***
> **⚫ black** → ***NOT COVERED BY THIS METHOD AT ALL.***

Absence of a signal is not absence of hand-written content. A process that infers "fine" from
silence will eventually delete one of the pages the marker does not cover.