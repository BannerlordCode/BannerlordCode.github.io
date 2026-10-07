# 文档独立审查报告 — 2026-10-04 第 8 轮（按裁定把尺降级为候选排序器）

执行者：lead-9
**红线：`content/` 零改动。`ActionIndexCache.md` 未碰（仍是 133/50）。**

---

## 0. 裁定执行结果

boss #4488 裁定「(a) 的变体：留仓降级为【候选排序器】，不许产出任何结论；不要投入修锚点规则」。

```
$ git status --short tools/ | grep cite
?? tools/_cite-explore.mjs        ← 新名，探索性质
   tools/_cite-verify.mjs          ← 已删除（ls: No such file or directory）
```

**未投入修锚点规则。** 一个字都没改 `pickAnchor` 的判据。

---

## 1. 四条规格逐条对照

### ① 探索性质 + 行首免责
```
$ node tools/_cite-explore.mjs --tree bannerlord-1.4.5 <dir>
本工具只排序候选，不判定缺陷；任何结论必须人工确认。
实测假红率 ~83%（2026-10-04，人工抽验 6 条：5 假 1 真）。详见文件头。
信号含义：line_hits（…）  line_offset（…）  symbol_not_seen（…）  …
```
文件名改为 `_cite-explore.mjs`。**每次运行都先打这两行**，下一个人不可能看不见。

### ② 删除全部判定性输出与颜色标注
旧 → 新信号名对照：

| 旧（判定性） | 新（中性描述） | attention |
|---|---|---:|
| `EXACT` | `line_hits` | 0 |
| `DRIFT` | `line_offset` | 2 |
| `SYMBOL_ABSENT` | `symbol_not_seen` | 1 |
| `FILE_MISSING` | `file_not_in_tree` | 3 |
| `LINE_OUT_OF_RANGE` | `line_out_of_range` | 3 |
| `AMBIGUOUS` | `ambiguous_path` | 0 |
| `NO_ANCHOR` / `WEAK_ANCHOR` | `low_signal` | 0 |

**`🔴` 标记已全部删除。** 「EXACT」「DRIFT」「VERDICT」「缺陷」「编造」等词一个都不再出现在输出里 ——
这一条做成了**自检断言**，不靠自觉：

```
ok  输出不含任何判定性词汇或红色标记
```
断言用的禁用词表：`EXACT, DRIFT, SYMBOL_ABSENT, FILE_MISSING, VERDICT, HARD_FINDINGS, 缺陷, 编造, 🔴`

**attention 只表示「建议先看的程度」，不是严重性** —— 排序依据写在输出里：`按信号强度排序（非严重性）`。

### ③ 自检：断言从「它判得对」改成「它能稳定产出候选且不崩」

旧自检 16 条全部在断言「它判得对」：
```
ok  精确命中 EXACT          ← 断言它判对
ok  行号漂移被认出 DRIFT     ← 断言它判对
ok  符号不存在被认出          ← 断言它判对
```
**这正是第 7 轮栽的那一刀** —— 它们 16/16 全绿，真实数据假红率 83%。

新自检 6 条，**没有一条断言对错**：

```
ok  八种输入形态都不崩                       crash=0
ok  每种形态都产出了记录                     8/8
ok  同一输入两次运行信号完全一致              line_offset|Unique|2
ok  所有信号都在信号表内
ok  输出不含任何判定性词汇或红色标记
ok  候选数与注意力权重自洽                    ranked=4
```
并且工具自己在结尾把这件事说出来：
```
注意：本自检【不断言本工具判得对】。它只证明「不崩、确定、词汇中性、信号自洽」。
实测假红率 ~83%（2026-10-04，人工抽验 6 条：5 假 1 真）。结论必须人工确认。
```

### ④ 文件头写明实测假红率，不藏
文件第 3–7 行：
```
// # 🔴 实测假红率 ~83% —— 这个数不要藏
// 2026-10-04 在 28 个 IMB* 页 + ActionIndexCache.md 上跑出约 30 条高信号告警，
// 人工抽验 6 条：**5 条假、1 条真**。
// 假阳性长这样：anchor=cs（从路径 span 切出来的）、anchor=z（页面签名里的参数名）、
// anchor=bannerlord（文件名里的单词）—— 全是散文，不是被引的那个东西。
```

---

## 2. 真实数据上的行为

```
$ node tools/_cite-explore.mjs --tree bannerlord-1.4.5 content/v1.4.5/en/api/mission
引用=1319  line_hits=557  line_offset=139  symbol_not_seen=191
          file_not_in_tree=0  line_out_of_range=0  ambiguous_path=28  low_signal=404
需人工看一眼的候选=330  本工具判不了的=989
EXIT=0
```

**与第 7 轮同一个输入的差别**：旧版报「约 30 条 🔴 硬结论，exit 1」；
新版报「330 条候选，exit 0，且明说假红率 83%」。

**330/1319 ≈ 25% 的候选命中率** —— 正好印证它只能当排序器：
按 83% 假红推，330 条里真问题**上界**约 56 条，但仍必须逐条人工确认才能算数。
（这个上界也是估计，不是结论。）

---

## 3. `ActionIndexCache.md` —— 按裁定**没动**，报给 owner

```
$ git diff --numstat -- content/v1.4.5/zh/api/mission/ActionIndexCache.md
133	50      （与第 6 轮观测一致 ⇒ 我未触碰）
```

待 owner 处理（本报告 §第 7 轮已给证据）：
```
ActionIndexCache.md:40  「act_idle_unarmed_1，定义在 ActionIndexCache.cs:431」
  真身 :241（字段声明）；:431 上是 act_cutscene_npc_argue_player_1（形态相同的另一个静态字段）
  该页已聚三处同族偏移（Create(string) 漂 6、private 构造漂 3、本条漂 190）
  ⇒ 逐条改是错的，整页重校
```

---

## 4. 489/657 那批 —— 按裁定改走已验证的路

**本轮不用这个工具去关闭它。** 采用的路径（worker-34 已跑通两片）：
```
worker 在自己切片里逐条 `sed -n '<行>p' <源码文件>`，按页报数
```
新工具只在两种情况下值得修：已验证的路跑不动了，或要跨全树批量做。**现在都不是。**

---

## 5. 汇总

| 项 | 结果 |
|---|---|
| 文件改名探索性质 | ✅ `_cite-verify.mjs` → `_cite-explore.mjs` |
| 判定性词汇与红色标记 | ✅ 全删，并做成自检断言 |
| 自检改为「不崩/确定/中性/自洽」 | ✅ 16 条判对 → 6 条不判对 |
| 假红率写进文件头 | ✅ ~83%，附假阳性形态 |
| 投入修锚点规则 | ✅ **未投入，一行没改** |
| 有候选时的退出码 | 0（不是门禁） |
| `content/` 改动 | **0**，`ActionIndexCache.md` 未碰 |
| 489/657 未核 | 仍未关闭，改走 worker-34 的已验证路径 |

## 仍然挂着的项
```
6 个空壳段（表格行数 0）· IMBDelegate 2 条跨桶死链 + 3 处行号漂移
ActionIndexCache.md 整页重校（已报 owner）· 489/657 未核
3 个已提交 marker 缺陷（等写作线停手）· 6 个空壳段（已跨 3 轮）
```

## NOT VERIFIED
- 本轮**没有**对 330 条候选做人工核对 —— 按裁定它们只是候选
- 该工具在 v1.3.15 树上的表现**未测**
- 工具的**假绿率依然未知**（`line_hits` 是否也大量误报，从未验证过）
- 写作线仍在活跃写入，以上全部是**时点快照**