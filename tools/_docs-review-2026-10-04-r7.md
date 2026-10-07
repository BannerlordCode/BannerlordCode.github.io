# 文档独立审查报告 — 2026-10-04 第 7 轮（造尺，尺没造好，如实报）

执行者：lead-9
**红线：`content/` 零改动。本轮只新增一个 `tools/` 脚本。**

---

## 0. 一句话结论

**我造了 `tools/_cite-verify.mjs`，它的自检 16/16 全绿，但在真实数据上假红率约 83%，
所以它的输出【不能作为证据】。我用它捞到 1 条真缺陷，已人工确认。**

这不是又一次「工具坏了」的重复 —— 这是这条纪律的**第 8 次生效**，也是它第一次作用在**我自己的新工具**上。

---

## 1. 造尺的出发点

第 3 轮我用一次性脚本批量核 657 条引用，报了 101 条「缺陷」，**全部不成立**。
那三个 bug 我当时定性为工具的，现在写进了新工具的设计约束：

| 第 3 轮 bug | 新工具的对策 |
|---|---|
| A 按文件名索引（`AssemblyInfo.cs` 有 82 份同名） | `resolveFile()` 用**路径片段**消歧；同名多份且片段不足 ⇒ 报 `AMBIGUOUS`，**不猜** |
| B 锚点取得太远，抓到不相干的符号 | `pickAnchor()` 只从**引用自己所在/紧邻的 span** 取，并取 `Type.Member` 的**最后一段** |
| C 混淆声明行与赋值行 | 新增**引用点类型**（decl/assign/call）**只报告、不参与判定** |
| —— | 新增 `--self-check`：16 条已知答案的 fixture，**不通过就 exit 3 拒绝出任何结论** |

```
$ node tools/_cite-verify.mjs --self-check
  self-check: 16 passed, 0 failed
  ruler agrees with known answers.        EXIT=0
```

---

## 2. 但它在真实数据上不成立

跑 28 个 IMB* 页 + `ActionIndexCache.md`（en + zh），报出约 30 条 🔴 `SYMBOL_ABSENT`（硬结论 = 编造指控）。

**我按纪律抽验，结果如下：**

| # | 抽样 | 工具结论 | 人工核对 | 真伪 |
|---|---|---|---|---|
| 1 | `IMBSoundEvent.md:19` → `MBSoundEvent.cs:26-31` | SYMBOL_ABSENT | 真身 26-31 **正是** `PlaySound` 整个方法 | ❌ 假 |
| 2 | `IMBScreen.md:106` → `MBAPI.cs:38` | SYMBOL_ABSENT | 页面写 `MBAPI.IMBScreen` 字段，正确 | ❌ 假 |
| 3 | `IMBSkeletonExtensions.md:113` → `AssemblyInfo.cs:7` | SYMBOL_ABSENT | v1.3.15 的 AssemblyInfo 结构不同 | ❌ 假 |
| 4 | `IMBTeam.md:17` → `MBTeam.cs:41,46` | SYMBOL_ABSENT | 真身正是 `IsEnemyOf` / `SetIsEnemyOf` | ❌ 假 |
| 5 | `IMBWindowManager.md:64` → `MBWindowManager.cs:27` | SYMBOL_ABSENT | 真身 :27 **正是** `ScreenToWorld` 声明 | ❌ 假 |
| 6 | `ActionIndexCache.md:40` → `ActionIndexCache.cs:431` | SYMBOL_ABSENT | **页面确实错了** | ✅ **真** |

**假红率 5/6 ≈ 83%。**

工具报的锚点长这样，一眼就知道是散文而不是被引的东西：
```
anchor=cs          ← 从 `.../AssemblyInfo.cs` 这个路径 span 里切出来的
anchor=z           ← 页面签名里的参数名 float z
anchor=bannerlord  ← 文件名里的单词
anchor=act_       ← 从 `act_idle_unarmed_1` 切出来的前缀（这次反而撞对了）
```

### 2.1 假绿的镜像
`SYMBOL_ABSENT` 是**拒绝类**结论（编造指控）。
一个 83% 假红的拒绝类工具比没有工具更坏 —— 它会让人去「修」本来正确的页面。
**按 boss 的通则：拒绝路径要窄。这把尺不合格。**

---

## 3. 唯一一条真发现（人工确认）

```
content/v1.4.5/zh/api/mission/ActionIndexCache.md:40
  页面：「`ActionIndexCache.act_idle_unarmed_1`，定义在 `ActionIndexCache.cs:431`」

$ grep -n "\bact_idle_unarmed_1\b" ActionIndexCache.cs
241:	public static readonly ActionIndexCache act_idle_unarmed_1;
611:		act_idle_unarmed_1 = Create("act_idle_unarmed_1");

$ sed -n '431p' ActionIndexCache.cs
	public static readonly ActionIndexCache act_cutscene_npc_argue_player_1;
```

**性质：行号漂移，符号存在。按 boss #3319 判据 = `drift+`（|241−431| = 190，远超 ±8 窗口）。**

**为什么这条危险** —— `:431` 上是一个**形态完全相同的另一个静态字段**：
`public static readonly ActionIndexCache act_cutscene_npc_argue_player_1;`
读者跳过去不会看到「行不存在」，会看到一个**看起来完全合理但错误的成员**。

**正确的是什么**：`ActionIndexCache.cs:431` → **`ActionIndexCache.cs:241`**
（若要指静态构造里的赋值则是 `:611`，但页面说的是「定义在」，即字段声明 ⇒ `:241`）。

> 与 boss 此前在这同一页发现的 `Create(string)` 漂 6 行、`private 构造` 漂 3 行同族。
> **这一页的行号系统性偏移，值得整页重校，而不是逐条改。**

---

## 4. 我改了什么

```
新增  tools/_cite-verify.mjs      （唯一改动；content/ 零触碰）
```

**它当前的状态：自检绿、真实数据不可用。**
我没有修它的假红问题就交出来 —— 那样等于把一把已知不准的尺递出去。
**正确的处置二选一，请你定：**
```
(a) 标记为 UNVALIDATED 留在仓库里，只当探索工具，不产出结论
(b) 修好锚点规则再上线：锚点必须【在文档里与引用构成同一句话的主语】，
    且拿不到就只报 WEAK，不报 SYMBOL_ABSENT
```
**我倾向 (b)，但 (b) 的难点恰恰是「主语」不是正则能稳定判定的东西** ——
第 3 轮和这轮各失败一次，都是因为「附近那个标识符是不是被引的东西」这件事
需要读句子，而正则不读句子。**可能值得的是：把硬结论（编造指控）完全交给人工，
工具只负责把候选按「可疑度」排好序。**

---

## 5. 第 8 次自我证伪（本会话最贵的一次）

```
前七次：尺子不是我写的（别人的工具、旧的门禁）
这一次：尺子是我刚写的，而且它的自检 16/16 全绿
```
**如果我照着 30 条 🔴 直接上报，会让三条线去「修」本来正确的页面，
并把它们已经做对的工作推翻。**
自检全绿让我相信了它 —— 这正是 boss 那条纪律说的「工具比假设更危险」的**完整形态**：
假设错了我会怀疑，**自己刚写的工具输出看起来合理我也会照报**。

---

## 6. 汇总

| 项 | 结果 |
|---|---|
| `tools/_cite-verify.mjs` 落地 | ✅ 自检 16/16 |
| **该工具在真实数据上可用** | ❌ **假红率 ~83%，不可作证据** |
| 抽样核对硬结论 | 6 条：5 假 1 真 |
| **确认的真缺陷** | 1 条：`ActionIndexCache.md:40`，drift −190（`:431`→`:241`） |
| 489/657 那批未核引用 | **仍未关闭** —— 工具不可用，不能拿它的 EXACT/DRIFT 当已核 |
| `content/` 改动 | 0 |

## 仍然挂着的项（一条都没少）
```
6 个空壳段（表格行数 0）· IMBDelegate 2 条跨桶死链 + 3 处行号漂移
ActionIndexCache.md（本轮 +1 条，但整页行号建议重校）
657 条引用里 489 条未核 · tools/nav-section-index.mjs 的 3 个已提交 marker 缺陷
```
**注**：写作线仍在活跃写入（本轮开始时 513 个改动文件，5 分钟内有 8 个被写），
所以以上都是**时点快照**，等停手后要重跑。

## NOT VERIFIED
- 除第 3 节那 1 条外，其余约 29 条 `SYMBOL_ABSENT` **未逐条核对**（工具不可信，不能批量采信）
- 工具的 EXACT / DRIFT 分布**未采信** —— 我不知道它的假绿率是多少，可能同样很高
- v1.3.15 那批引用**未跑**（我只跑了 v1.4.5 树）