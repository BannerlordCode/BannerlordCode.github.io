# Independent verification — worker-63 link repair (91 orphans)

**Reviewer:** worker-55 · **Date:** 2026-10-03 · **Line:** review line
**Verifying another worker's edit.** Strictly read-only under `content/` — no file was fixed.
**Outputs:** `tools/_verify_repair_91.md` (+ `.jsonl`).

> ## ⛔ I filed a finding against worker-63 that was WRONG, TWICE, and I retract both.
>
> My first report said `zh/api/_index.md` had its **title, description, H1 and every section
> heading rewritten** — a constraint violation. **That was false.** Every one of those lines
> is byte-identical in the current file. The `+93 −68` diffstat is **not a rewrite**.
>
> **worker-63's report — "add the link, change nothing else … +89 links, link lines only" —
> is accurate.** The one thing it undercounts is a *correct* link-form fix (§3).
> I should have decomposed that diffstat before writing an accusation, and I didn't.

---

## 0. Tree state — the freeze has moved

| | value |
|---|---|
| `git rev-parse HEAD` | **`29a6946d35`** (was `bb41caf9ee` at freeze) |
| commits since freeze | **1** — `WIP checkpoint: 343 hand-written pages across two content lines, uncommitted` |
| dirty `content/` files now | **99** (was 330 at freeze) |

**The freeze was overtaken by a commit inside the same window.** The orphan numbers below are
therefore **not** strictly comparable to a `bb41caf9ee` baseline.

---

## 1. Acceptance criterion — direction right, criterion unproven

**MEASURED**, my own run of `node tools/_v146_orphan_check.mjs`:

```
total_pages=39015  orphans=4314
by_tree={"v1.3.0":2,"v1.3.15":27,"v1.4.5":4271,"v1.4.7":1,"v1.5.3":12,"":1}
v1.4.6_orphans=0
```

| | value |
|---|---|
| total orphans now | **4,314** |
| **v1.4.5 orphans now** | **4,271** |
| v1.4.5 orphans at freeze | 4,506 |
| **net** | **235 fewer** — direction correct |

**I cannot verify the literal criterion** ("every page in set (b), baseline 76, gains ≥1
inbound link from a non-orphan page"): the tool emits only totals and a per-tree split, and
the dirty batch has been committed since. **Direction confirmed; criterion unproven.**

---

## 2. Link damage — **THE HEADLINE. Nothing was broken.**

**MEASURED**, my own run of `node tools/audit-links.mjs`:

```
FILES=39015  TOTAL_LINKS=139590
BROKEN_LINKS=201
RESOLVE_NEITHER=8
FILES_WITH_BROKEN=53
```

**worker-63 introduced 0 broken links.** Three independent lines of evidence:

1. **Attribution by file** — intersecting the 53 broken-link files with the 6 edited parents
   gives an **empty intersection**.
2. **Every added href resolved** — 142 added link entries checked with
   `tools/audit-links.mjs`'s exact rule (`t + '.md'`, else `t/_index.md`, trailing slash
   stripped first): **0 unresolved.**
3. **Per-file link deltas positive or neutral** — `+6, +5, +4, +1, +1, +0`.

The 201 broken and 8 resolve-neither are **pre-existing**, from other dirty pages. A
site-wide before/after pair is not reconstructable (the batch was committed between states);
attribution-by-file is the substitute.

---

## 3. Edit minimality — ✅ CORRECT (both of my earlier conclusions retracted)

The attribution test first, as directed:

```
git log -- content/v1.4.5/zh/api/_index.md
  87b3ae219b | ModerRAS | 2026-08-14 | docs: batch push uncommitted markdown (…)

git show --stat 29a6946d35 -- content/v1.4.5/zh/api/_index.md   →  empty
```

So the change is uncommitted working-tree state. Git cannot split one dirty file between two
agents, so authorship is settled by **content**, not commit — via a **set-difference of the
diff**, not the diffstat. That is the test I should have run the first time.

| file | numstat | `--ignore-cr-at-eol` | verdict |
|---|---|---|---|
| `zh/api/_index.md` | +93 −68 | **+25 −0** | ✅ pure addition |
| `zh/api/gui/_index.md` | +8 −0 | +8 −0 | ✅ pure addition |
| `zh/api/mission-ext/_index.md` | +7 −0 | +7 −0 | ✅ pure addition |
| `zh/api/view/_index.md` | +1 −0 | +1 −0 | ✅ pure addition |
| `zh/api/boardgames/_index.md` | +1 −0 | +1 −0 | ✅ pure addition |
| `zh/api/storymode/_index.md` | +4 −4 | +4 −4 | ⚠️ link-form fix (below) |

**Git's own line-ending-aware diff is the decisive measurement, and it is worth quoting
because it is git disagreeing with git:**

```
git diff --numstat -- <file>                     ->  93    68
git diff --numstat --ignore-cr-at-eol -- <file>   ->  25     0
```

`--ignore-cr-at-eol` collapses the file to **+25 −0**. The 68 apparent deletions are line
endings, not content. **worker-63's content change to this file is +25 lines, 0 deletions.**

> **Correction to a number we both got wrong.** lead-5 and I independently computed **+13**
> (15 truly-added minus 2 `---`) by *set-difference*. That method **undercounts when lines
> repeat** — a line that already exists elsewhere in the file and is re-added still counts as
> new. Git's line-based diff says **+25**. Two independent implementations reaching the same
> wrong number is a nice confirmation of the *method's agreement*, not of the *figure*.
> **+25 is correct.**

Composition of the +25: **15 are link lines**, **1 is the new heading
`### 尚未归入家族枢纽的散页 / Loose pages`**, **1 is its one-line intro**, and the remainder are
the grouped loose-page lists under `campaign` / `campaign-ext` / `system` / `viewmodel` /
`mission-ext`, plus the area-hub line.

**No prose reworded. No frontmatter touched. Nothing reordered. No content deleted.**

### Insertions vs form-fixes vs deletions

| category | count |
|---|---:|
| **pure link insertions** | **+42 link lines across 6 parents** (`_index` 25 + gui 8 + mission-ext 7 + view 1 + boardgames 1) |
| **link-form fixes** — broken `./X/_index` → `./X/` | **4 lines / 2 distinct links** |
| **deletions of real content** | **0** in worker-63's 6 parents |

### The `storymode` change is *more* than the dispatch asked for, in a good direction

```diff
-- [Quests 主线任务](./Quests/_index)                    +  [Quests 主线任务](./Quests/)
-- [GameComponents 剧情组件](./GameComponents/_index)    +  [GameComponents 剧情组件](./GameComponents/)
```

`./Quests/_index` was a **non-resolving** href form; `./Quests/` is correct. This also removed
the reported 30–31 / 109–110 duplication in the same edit. **worker-63's "+89 links"
undercounts what it changed** — it omits these 4 form-fixes — but does not overstate it in
the direction that mattered. **No constraint violation.**

---

## 4. 🔴 NEW FINDING — line-ending conversion. **This one is real, and it is not worker-63's fault to be blamed for without evidence.**

`content/v1.4.5/zh/api/_index.md` was **converted LF → CRLF**:

| | CRLF | bare LF | bytes |
|---|---:|---:|---:|
| worktree (`fs.readFileSync`) | **93** | **0** | 8,475 |
| HEAD blob (`git cat-file`) | **0** | **68** | 5,267 |

The other four worker-63 parents show **0 CRLF on both sides** — no churn.

**Config, so the cause is visible:**

- `git config core.autocrlf` → **`false`**
- **no `.gitattributes`** in the repo
- `git check-attr text eol` → **`text: unspecified`, `eol: unspecified`**

With `autocrlf=false` and no `.gitattributes`, **git is applying no normalisation** — the CRLF
was **written into the file by whatever wrote it**. That points at an **edit-tool accident**
rather than intent.

### Scope — ISOLATED, not a repo-wide pattern. ✅

MEASURED byte-level across **every** modified `.md` in the tree:

| | files |
|---|---:|
| modified `.md` scanned | **103** |
| **worktree CRLF / HEAD LF** (new conversion) | **2** |
| both CRLF (committed that way) | 1 |
| both LF | 100 |

The two: `content/v1.4.5/zh/api/_index.md` and `content/v1.4.5/zh/api/campaign-ext/MapEventSide.md`.

> **One qualification the lead's summary did not carry.** `MapEventSide.md` is **not** only a
> line-ending artifact — it has a large *real* content change underneath:
> `--ignore-cr-at-eol` gives **+169 −420**. Its raw `+241 −492` overstates it, but the
> conversion is **not** the whole story. `_index.md` **is** conversion-only (+25 −0).
> I am reporting worker-63's 6 parents, and `MapEventSide.md` is **not** one of them — it
> belongs to another line. I have not attributed it and do not.

**Why it matters even where content is unchanged:** on `_index.md` every future `git diff`
shows the whole file as rewritten, which destroys reviewability and will mask real edits.
With no `.gitattributes`, **nothing stops the next tool from doing it again.**

**Reported, not fixed** — I am read-only under `content/`.

---

## 5. Style / label accuracy — 8/8 PASS

Each added label read against its **target page's own `description`**:

| # | label | href → target | verdict |
|---|---|---|---|
| 1 | `MBSubModuleBase` | `./core/MBSubModuleBase/` → `core/MBSubModuleBase.md` | **PASS** — "模块（Module）的入口基类…mod 通过派生它接入整个游戏生命周期" |
| 2 | `Game` | `./core-extra/Game/` | **PASS** — "承载游戏模式、对象注册表、状态机、模型、事件…" |
| 3 | `CampaignGameStarter` | `./campaign-ext/CampaignGameStarter/` | **PASS** — "战役初始化阶段…注册 CampaignBehaviorBase 与 GameModel" |
| 4 | `CampaignEvents` | `./campaign-ext/CampaignEvents/` | **PASS** — "中央发布/订阅事件总线…英雄死亡、据点易主、开战…" |
| 5 | `Actions 家族` | `./campaign-ext/actions/` → `_index.md` | **PASS** — "Actions 的世界状态迁移、事件边界和典型时机" |
| 6 | `Mission` | `./mission/Mission/` | **PASS** — "战场推演与战斗模拟的运行时容器：承载 Agents / Teams / MissionBehaviors" |
| 7 | `ViewModel` | `./core-extra/ViewModel/` | **PASS** — "v1.4.5 UI 绑定基类：解释属性通知、命令、刷新和 OnFinalize" |
| 8 | `AIState` | `./campaign-ext/AIState` | **PASS** — "沙盒棋盘 AI 的六态线程状态机：NeedsToRun → ReadyToRun → Running → Done…" |

Placement matches the existing `## 开始路径` / `## 运行时层次` / `## 模块完整目录` structure
with em-dash descriptions. **No mislabelled entry.** Reads as hand-placed.

---

## 6. Duplicates — the reported fix is CONFIRMED

`storymode/_index.md`, both regions read in the current file:

```
line 30: - [Quests 主线任务](./Quests/)
line 31: - [GameComponents 剧情组件](./GameComponents/)
...
line 109: - [Quests 主线任务](./Quests/)
line 110: - [GameComponents 剧情组件](./GameComponents/)
```

Both corrected. The repetition is **structural** — a link block repeated by design in a
related-footer — not an accidental duplicate.

**No new duplicates introduced.** Repeats among added lines are only: 2× `---`
(frontmatter delimiters, alignment artifact) and the intentional `Quests` / `GameComponents`
pair. **Zero accidental duplicate link entries.**

---

## 7. My own errors this round — FOUR, and the pattern is the finding

| # | my error | false result it produced | direction |
|---|---|---|---|
| 1 | resolver appended `.md` after a trailing slash | **40 "unresolved links"** | accusing |
| 2 | same bug, second attempt | (same 40) | accusing |
| 3 | **read `+93 −68` diffstat as content change** | **"prose/frontmatter/H1 rewritten — constraint violation"** | accusing |
| 4 | **used `grep -c $'\r$'` to measure EOL** | claimed the file was **LF-only**, then contradicted myself minutes later | (inverted) |

**Every false accusation pointed the alarming direction.** Error 3 is the serious one: I filed
a constraint violation against a colleague on the strength of a number I never decomposed, when
the dispatch had already told me the innocent explanation was plausible. Error 4 is its twin —
**the same file measured 0 CRLF and 93 CRLF in two consecutive commands**, which is what forced
me to re-measure with node and discover the lead was right and I was wrong.

### The transferable point

> **A verifier's tool defect reliably reads as a finding about someone ELSE's work — which is
> precisely why it survives scrutiny.** Nobody re-derives an accusation, and nobody should
> have to. Four of mine did, and **three were caught only because a second, independent
> measurement of the same fact already existed.**

That last clause is the real lesson, and it is about the *process*, not my care:

| my false alarm | caught by |
|---|---|
| 40 phantom broken links | I re-derived against `audit-links.mjs`'s own resolver before reporting |
| "headings/prose/frontmatter rewritten" | lead-5 had already decomposed the same diffstat by hand |
| CRLF denied (`grep -c $'\r$'` → "0 CRLF") | lead-5 had already measured it byte-level; my two commands also contradicted each other |
| `+13` content lines | lead-5 had already run `--ignore-cr-at-eol` |

**Checking harder is not what saved me.** In three of four cases I would have shipped the false
finding had the second measurement not existed. The saving grace was a **cross-check already
performed by someone else** — which means the mitigation is *structural*: require a second
route before publishing any accusation, and **publish the second route's name** so the next
person can re-run it.

**Two independent implementations agreeing is not confirmation.** lead-5 and I independently
computed **+13** — and were both wrong, because we used the same flawed method (set-difference,
which undercounts repeated lines). Independence of *implementation* is not independence of
*method*. Prefer a different **kind** of measurement: I derived a set-difference in node, the
lead ran `git diff --ignore-cr-at-eol`. Different kind, correct answer.

**Rules I would propose for this line:**
1. A finding about *another worker's intent or minimality* must never rest on a summary number
   (diffstat, count, rate) that has not been decomposed against the actual question.
   "Was prose removed?" is a **line-content** question, and `--ignore-cr-at-eol` answers it.
2. **Never trust one measurement of a fact that matters.** When two commands disagree — mine
   did, 0 CRLF then 93 CRLF — the answer is "my tool is wrong", not "pick the one I prefer".
3. Before writing a sentence naming another worker's fault, ask what the **innocent**
   explanation is and whether I have actually *excluded* it. I never did.
4. Prefer a **different kind** of second measurement over a second implementation of the same.

---

## 8. What I could NOT verify

| item | why |
|---|---|
| **set-(b) acceptance criterion** (baseline 76) | `_v146_orphan_check.mjs` emits only totals + per-tree split; set membership unrecoverable; batch since committed |
| **site-wide broken-link before/after** | the 330-file batch was committed between states; no clean "before" tree |
| **the other 6 of the claimed 12 parents** | 6 more `_index.md` are inside commit `29a6946d35`, not dirty. **Not diffed, not cleared** |
| **whether the CRLF conversion came from worker-63's tooling** | I can show it happened and that git did not cause it (`autocrlf=false`, no `.gitattributes`); I cannot see which tool wrote the file |

---

## Summary for the boss

1. **Repair direction correct.** v1.4.5 orphans **4,506 → 4,271** (235 fewer).
2. **Repair damage: none.** **BROKEN_LINKS=201, RESOLVE_NEITHER=8 — all pre-existing; 0 from
   the 6 files touched.** 142 added hrefs, **0 unresolved.** *Headline: did not go up.*
3. **Minimality: correct. My "rewrite" finding is RETRACTED — twice.** **+25 −0**
   (`--ignore-cr-at-eol`): 15 link lines, 1 heading, 1 intro, the rest grouped lists.
   **0 deletions. No prose or frontmatter rewritten.** The only non-addition is a **correct**
   `./X/_index` → `./X/` form fix that also cleared both duplicate regions.
   **worker-63's report was accurate.**
4. **🔴 NEW: LF→CRLF conversion in 2 of 103 modified `.md`** (`zh/api/_index.md` — conversion
   only; `campaign-ext/MapEventSide.md`, not worker-63's, also has real content change).
   `core.autocrlf=false`, **no `.gitattributes`** → git is not the cause; an edit tool wrote
   CRLF. **Isolated, not a repo-wide pattern.** Makes those files' future diffs unreadable.
5. **Labels 8/8 accurate.** No mislabelled entry.
6. **Duplicates: reported fix confirmed in both places; none introduced.**
7. **Acceptance criterion unproven** — tool cannot express set (b). *Direction confirmed,
   criterion unverified.*
8. **I filed three false alarms, all accusing worker-63 of breaking things.** See §7.