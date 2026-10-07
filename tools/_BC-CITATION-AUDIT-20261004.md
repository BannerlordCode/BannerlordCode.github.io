# B/C citation audit — v1.4.5/en/api, 52-page population

**Scan timestamp:** 2026-10-04T16:58Z
**Command:** `node tools/_verify/bc-scan.mjs $(cat tools/_verify/population-52.txt | tr '\n' ' ')`
**Calibration:** `node tools/_verify/bc-scan.mjs --calibrate` — gates passed 2026-10-04T16:55:13Z
**Status of this file:** READ-ONLY scan. **No `content/` file was modified by this scan.**

---

## ⚠️ CAPABILITY BOUNDARY — read before trusting a zero

> **本扫描器只能检出：引用指向空行 / 越界 / 同名文件歧义。**
> **【不能】检出：引用了真实行但该符号属于另一个文件。召回 0 的那一路未被实现。**

A zero from this tool means **"no blank / out-of-range citation was found"**, NOT "this page is clean".

**Why this line exists:** an earlier build *did* ship a symbol-level path. On this very
population it emitted symbols `example`, `and`, `at`, `is`, `by`, `of`, `chain` — English words
lifted out of prose backticks — each reported as a `B STALE-TYPE`. That path is now
**disabled in the output** (`DISABLE_SYMBOL_PATH = true` in `bc-scan.mjs`), not merely
down-weighted. It is recorded as **未实现**, not as "no findings".

---

## 口径 (scope / denominator)

| | count |
|---|---|
| `v1.4.5/en/api` pages total | 7,136 |
| pages carrying a `X.cs:N` citation | **154** |
| pages carrying a citation **AND** a `## 怎么用` / `## How to use` section — **the scanned population** | **52** |
| pages carrying a citation but **no** 怎么用 section — **NOT scanned, and NOT defects** | **102** |

**52 is not the size of the en tree.** 102 further pages in this bucket carry citations and
were left untouched because they have no 怎么用/How to use section.

The zh tree (217 such pages) was **not scanned and not modified** — read-only, not this line's ground.

---

## Findings — 15 hard errors across 7 pages (all hand-verified)

Every row below was re-checked by reading the cited file at the cited line with `sed -n`.

### en line — **my slice, authored by me**

| # | page:line | citation | cited line is | correct line | evidence |
|---|---|---|---|---|---|
| 1 | `mission/IMBEditor.md:99` | `MBEditor.cs:201` | **blank** | `:202` = `public static void SetUpgradeLevelVisibility(List<string> levels)` | `MBEditor.cs:199-203` |

### en line — **my slice, but the page pre-existed (I did not author it)**

| # | page:line | citation | cited line is | correct line | evidence |
|---|---|---|---|---|---|
| 2 | `mission/IMBAnimation.md:66` | `ActionIndexCache.cs:452` | **blank** | `:450` = `Index = MBAnimation.GetActionCodeWithName(name);` | `ActionIndexCache.cs:450-454` |
| 3 | `mission/IMBAnimation.md:153` | `ActionIndexCache.cs:452` | **blank** | `:450` (same call) | same |

### en line — **NOT my slice; other writers' pages. Listed for the en line only, not actioned.**

| # | page:line | citation | cited line is | correct line | evidence |
|---|---|---|---|---|---|
| 4 | `mission/IMBMapScene.md:15` | `IMBMapScene.cs:5` | **blank** | `:7` = `internal interface IMBMapScene` | `IMBMapScene.cs:3-9` |
| 5 | `mission/IMBMapScene.md:150` | `IMBMapScene.cs:5` | **blank** | `:7` | same |
| 6 | `mission/IMBMapScene.md:67` | `MBMapScene.cs:10` | **blank** | `:9` = `public static bool ApplyRainColorGrade;` | `MBMapScene.cs:8-12` |
| 7 | `mission/IMBMapScene.md:136` | `MBMapScene.cs:10` | **blank** | `:9` | same |
| 8 | `mission/IMBPeer.md:15` | `IMBPeer.cs:5` | **blank** | `:7` = `internal interface IMBPeer` | `IMBPeer.cs:3-9` |
| 9 | `mission/IMBPeer.md:154` | `IMBPeer.cs:5` | **blank** | `:7` | same |
| 10 | `mission/IMBTeam.md:15` | `IMBTeam.cs:5` | **blank** | `:7` = `internal interface IMBTeam` | `IMBTeam.cs:3-9` |
| 11 | `mission/IMBTeam.md:123` | `IMBTeam.cs:5` | **blank** | `:7` | same |
| 12 | `mission/IMBWindowManager.md:15` | `IMBWindowManager.cs:5` | **blank** | `:7` = `internal interface IMBWindowManager` | `IMBWindowManager.cs:3-9` |
| 13 | `mission/IMBWindowManager.md:144` | `IMBWindowManager.cs:5` | **blank** | `:7` | same |
| 14 | `mission/IMBWindowManager.md:54` | `MissionAgentStatusVM.cs:674` | **blank** | `:675` = `public MissionAgentStatusVM(Mission mission, Camera missionCamera, Func<float> getCameraToggleProgress)` | `MissionAgentStatusVM.cs:670-678` |
| 15 | `mission/IMBSkeletonExtensions.md:136` | `IMBAgentVisuals.cs:34` | **blank** | `:33` = `void SetEntity(UIntPtr agentVisualsId, UIntPtr entityPtr);` | `IMBAgentVisuals.cs:30-38` |

### zh line
Not scanned, not modified. 217 pages carry the 怎么用 section; they are not this line's ground.

---

## Zero accounting — and where this tool is simply BLIND

```
population: 52   with findings: 7   zero-finding: 45

归零 且 含跨文件(同名歧义)引用的页数  [SUSPICIOUS zero]: 19
归零 且 无跨文件引用的页数         [EXPECTED zero]  : 26
```

> ### ⚠️ 这 19 页【不是】“可能有问题”，而是【这一类引用形式本工具完全未检查】
>
> **不是**「这些页可能有错」，**而是**「**33 页 / 86 处在本次扫描中未被检查**，而非「被检查且通过」」。
>
> 理由：`AssemblyInfo.cs` 这个 basename 在 v1.4.5 源码树里指向 **82 个文件**。本扫描器**按 basename 匹配，不解析模块前缀**，所以像
> `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10` 这种带前缀的引用，它既不能确认前缀对不对，也没有报错——它只是没看。
>
> **这 86 处 / 33 页已由人独立验过：缺文件 0 处 · 行号越界 0 处。**
> （我本人在本次运行里用 `tools/_verify/assemblyinfo-scope.mjs` 独立复核，得同样数字：
> `86 citations across 33 pages / missing 0 / out-of-range 0`；
> 分布 `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs` 71 处 + `TaleWorlds.Engine/Properties/AssemblyInfo.cs` 15 处。）
>
> **⇒ 结论：页面对，工具看不见。** 未结项是「**工具要不要支持模块前缀**」，不是「那 33 页有没有错」。

**19 与 33 为何不同（两个分母不同，不矛盾）**

| 数字 | 分母 | 含义 |
|---|---|---|
| **19** | 仅 52 页扫描总体 | 我在本次总体里、且只看**basename**时，数到的「引用了同名歧义 basename 的归零页」 |
| **33** | 整个 `content/v1.4.5/en/api`（7,136 页） | 全桶内**带模块前缀**的 `AssemblyInfo.cs` 引用页 |

我先前报的 19 **低估了盲区**，因为我只在自己的 52 页总体内统计，且用的是 basename 而不是前缀。
正确的盲区数字是 **33 页 / 86 处**。

### 其它盲区（同样写明，而不是留给读的人自己猜）

- **A 类（行号漂移）根本不报**——它是 boss 裁定的抽样项，本工具刻意不做。
- **符号级 B 类未实现**，见顶部能力边界框。
- 只有 **v1.4.5** 总体被人工逐条核过；扫描器已能按版本解析 6 棵源码树，但其余版本未扫。

---

## Calibration provenance

| | |
|---|---|
| positive set | the lead-specified `core-extra/HumanBone.md` B-case, ground truth re-verified in-run: `IMBAgent.cs:88` is blank; `"out sbyte"` occurs 0× in `IMBAgent.cs`; `IMBMission.cs:88`/`:91` both declare `out sbyte boneIndex`. worker-27 has since fixed the live page, so recall is measured on `tools/_verify/fixtures/positive-b.md`, which reproduces the same defect shape. |
| positive result | `B=2`, both `IMBAgent.cs:88 … is BLANK`. **Sample size = 2 findings from 1 known defect — NOT enough to call the tool reliable.** |
| negative set | worker-27 hand-verified `mission/IMBAgent.md` + `mission/IMBAgentVisuals.md` (20/20 fixed, 0 residual). |
| negative result | **0 / 313 citations = 0.00% false positives.** Gate ≤5% → PASS. |
| calibration timestamp | 2026-10-04T16:55:13Z |

---

## Known limitations of this run (stated, not buried)

1. **The symbol-level path is 未实现**, not merely quiet — see the capability box.
2. **Sample size 1.** Recall is 1 known defect (seen at 2 citation sites), and all of it comes from
   the single "cited line is blank" rule. That does not license the word "reliable".
3. **Module-prefixed paths are NOT parsed.** `Some/Module/AssemblyInfo.cs:8-10` is matched by
   basename across all copies, so **a wrong module prefix on an ambiguous basename is not caught.**
   This is the 33-page / 86-citation blind spot above; those citations were **never checked**, not checked-and-passed.
4. **Only `v1.4.5` sources were verified by hand.** The scanner now resolves all six version
   trees (an earlier build compared v1.3.0 pages against v1.4.5 sources and produced mass false
   positives), but only the v1.4.5 population was scanned and hand-checked.
5. **A bug of mine found while writing limitation 3:** the verifier that produced the 33/86 figure
   initially skipped any directory named `bin` — which is exactly where
   `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs` lives — and so first
   reported 86/86 as "missing file". Fixed by walking `Bannerlord.Source/bin` and each `Modules.*`
   root separately; the corrected run gives 86/33/0/0. Recorded because the wrong number was printed
   first and would have been a "0 hit ⇒ clean" trap if adopted.