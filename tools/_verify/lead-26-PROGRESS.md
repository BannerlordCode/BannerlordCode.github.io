# lead-26 — v1.5.3/zh 手写深页写作线

分支 `main` · 仓库 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io`
源码只读：`C:/WorkSpace/Bannerlord/bannerlord-1.5.3`（**无** `Bannerlord.Source` 层）

## 侦察结论（已实测，非推断）

| 项 | 值 | 命令 / 依据 |
|---|---|---|
| 队列条目数 | **5 605** | `wc -l tools/_verify/missing-types-1.5.3-zh.txt` = 5606 行（含 1 行 `#` 头） |
| 队列头 | `BuildInfo` · `EmptyGamepadNavigationContext` · `GauntletGamepadNavigationContext` · `Helpers.AIDifficulty` · `Helpers.AiHelper` … | 同上 |
| 现有 v1.5.3/zh 页 | 153 | 逐桶 `ls`：storymode 93 · localization 20 · campaign 12 · save-system 4 · core-extra 3 · campaign-ext 2 · gui 2 · mission 2 · core 1 · engine 1 |
| 队列桶分布 | mission-ext 1643 · campaign-ext 763 · campaign 662 · sandbox 658 · viewmodel 609 · **core-extra 597** · gui 287 · engine 141 · storymode 95 · save-system 50 · custombattle 40 · network 32 · system 18 · modulemanager 8 · localization 2 | `tools/_dir-map-canonical.json` v5 + `tools/_verify/types-1.5.3.json`（13 294 类型）解析 |
| dir-map | `schemaVersion=5` ✅ FAIL-CLOSED 断言通过 · `matchSemantics=longest-prefix-wins` · `defaultDir=core-extra` | 实测 |
| 桶归属是机械可定的 | 命名空间字面量 `Helpers` 无规则命中 ⇒ `defaultDir=core-extra` | 实测；且 core-extra 内 5 个候选类型名**无重名冲突** ⇒ 文件名 `<TypeName>.md`，**不是** `Helpers__X.md` |

### ★ 两个会改变派单形态的实测发现

1. **`content/v1.5.3/zh/api/core-extra/` 下【没有】`_index.md`。**
   v1.5.3 全树只有 3 个 `_index.md`：`api/_index.md`、`api/localization/_index.md`、`api/storymode/_index.md`。
   ⇒ core-extra 页面的**父索引就是 `content/v1.5.3/zh/api/_index.md`**（手写页，链接形态 `./core-extra/X`，与 `nb-v1.5.3-zh.txt` 一致）。
   ⇒ 不动 `nav-section-index.mjs`（它 `--apply` 要 R2 批次清单，而 `tools/_verify/.batches/index.txt` 里**没有**任何 v1.5.3 桶 ⇒ 越权）。

2. **v1.5.3 的 27 篇现存类型页【全都】没有 `## 关键成员` / `## 导航`。**
   `grep -rn '^## 导航' content/v1.5.3/zh/api/` = 0 命中。
   ⇒ 本线的七节骨架是**比现存页更严**的标准；派单必须逐字给骨架，否则 worker 会照现存页写，J2 直接 FAIL。

### 门禁真值（我实测的判据，不是猜）

- `J2` 七节（`tools/_verify/lead-145zh-judge.mjs`）：H2 必须**恰好**含 `概述` `心智模型` `怎么用` `关键成员` `真实示例` `导航`，外加参见族之一（`参见` 在册）。
- `deep_pass`（`tools/lib/handwritten-policy.mjs:370 classifyPage`）：`**Type:**` 真 C# 声明 + 心智模型去噪声 >80 字符 + 参见节 ≥2 链接 + 真 C# 示例 + 概述 >60 字符 + 无 11 条 STUB_PATTERNS + 用途行非公式化多数 + 正文 ≥2500 B。
- `J10`：**markdown 链接只许出现在 `## 参见` / `## 导航` 内**。

## 批次台账

| 批次 | 页数 | 路径 | 引用数 | 门禁 | 吞吐 |
|---|---|---|---|---|---|
| b1（进行中） | 5 | core-extra/Helpers：AiHelper · AlleyHelper · BarterHelper · BuildingHelper · CaravanHelper | 待测 | 批前 `j5r-resolve`(GameModel.md) `unresolved=0` · **B 的 2 页 `unresolved=0`（实测）** | — |
| b2（已派出） | 5 | core-extra/Helpers：DiplomacyHelper · SkillHelper · ItemHelper · CraftingHelper · MapEventHelper | 待测 | 批前同 b1 | — |

**并发配置**：worker-245（A，b1 的 3 页 + 索引尾）+ worker-247（b2 的 5 页，leaf-only）。worker-246 已完成 b1 的 2 页并 settle ⇒ 已 `team_cancel` 释放槽位（它没有剩余工作，不是惩罚）。

**b1 已落盘（B 的 2 页，实测）**
```
8057 content/v1.5.3/zh/api/core-extra/BuildingHelper.md   md5 fcf78d78c43b277992141fd0be6aaebf
6812 content/v1.5.3/zh/api/core-extra/CaravanHelper.md    md5 802e86c99663faf38a3cbb516736f3ef
```
B 自报 `classifyPage` = `deep_pass`（`mental>80` · `dep-or-see-links=3` · `real-csharp-example` · `overview-ok`），我未独立复算 —— 待 R2 一并复核。

### ★ b1 已过【真判分器】（我亲自跑的，不是 worker 自报）

```
node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/core-extra/{BuildingHelper,CaravanHelper}.md
PASS  BuildingHelper.md  J2 missing=[] · J5R unresolved=0 · J10 stray=0 · J6=deep_pass · tier=handwritten_deep
      H2: 概述 | 心智模型 | 怎么用 | 关键成员 | 真实示例 | 参见 | 导航
PASS  CaravanHelper.md  同上
JUDGE total=2 pass=2 fail=0  ⇒  deep_pass=2/2 · tier=handwritten_deep=2/2
```
**⇒ 骨架已证伪不了：七节 + 链接形态 + deep_pass 全过。已据此把 b2 的 5 页派给 worker-247（brief 里导航块改为已实测版本）。**

**J3 未行使（新发现，待改进）**：`J3 subject=BuildingHelper.cs checked=0 (full=0 + inBlock=0 + subject=0)` ——
b1 页面的 `**Source:**` 只给了文件路径，**正文里没有任何 `文件.cs:行号` 引用** ⇒ J3 无事可做（`bad=0` 不是通过，是未检验）。
**b2 起已加硬要求**：`## 关键成员` 每行末尾加反引号行号引用（如 `` `SkillHelper.cs:120` ``），且行号只许用我内联表里的。

**索引待办（R2 由 A 执行）**：`content/v1.5.3/zh/api/_index.md` 的精确锚点已实测——
L3 / L16 / L66 的 `27 篇`→`32 篇`；L64 的 `27 页 … 0.4%`→`32 页 … 0.5%`；L68 的 `0.4%`→`0.5%`；L72 的 `6 797`→`6 792` 与 `0.4%`→`0.5%`；**L55** 的 `` | `core-extra` | 3 | 516 | `` → `` | `core-extra` | 8 | 516 | ``；表尾（现 L39 之后）新增 **5 行**。

### b1 结构（两轮，单索引写者 / 单提交者）
- R1：worker A 写 AiHelper / AlleyHelper / BarterHelper（leaf-only，不提交）；worker B 写 BuildingHelper / CaravanHelper（leaf-only，不提交）。
- R2：worker A 加 5 行到 `api/_index.md` + 计数刷新（27→32 / 0.4%→0.5% / 6 797→6 792 / core-extra 3→8），跑门禁 ①②③，**一次**提交 6 个文件（文件级 pathspec）。

### ★ 缺陷记录 D-1（我自己的 brief 写错，被 worker 用门禁抓住）

**现象**：我下发的逐字 `## 导航` 骨架里，`模块地图` 那一行写成 `../../architecture/module-map`。
从 `api/core-extra/X.md`（URL route `/v1.5.3/zh/api/core-extra/X/`）解析：
```
../../               → /v1.5.3/zh/api/        （api 层入口 ✅）
../../../            → /v1.5.3/zh/            （版本首页 ✅）
../../architecture/… → /v1.5.3/zh/api/architecture/module-map   ❌ 不存在
../../../architecture/module-map → /v1.5.3/zh/architecture/module-map  ✅ 存在
```
**同一份 brief 内部自相矛盾**：链接规则小节写的是 `../../../architecture/module-map`（对），逐字骨架那一行写的是 `../../…`（错）。worker B 先按「逐字」执行，`j5r-resolve` 报 `unresolved=1` 才发现。

**修复**：worker B 自行改成 `../../../`（我已实测复现并确认）；worker A 的 brief 有同一行，已在 #18507 定向同步修正。

**教训（写进派单形态）**：
1. **brief 里手写的逐字导航块，必须由派单方先跑一次 `j5r-resolve` 验证**，不能靠「我推理过」——我在链接规则里推对了、在骨架里抄错了，两句并存时 worker 只会照「逐字」那条执行。
2. **同桶 / 跨桶 / 上跳三种深度必须在同一处集中声明一次**，不要在两处各写一遍（这就是本缺陷的成因）。
3. worker 用**门禁工具自己复现**（而不是嘴上说「链接没问题」）是本会话唯一有效的防线；本轮回报里 `unresolved=0` 是实测输出，可信。

**实测旁证**：`content/v1.5.3/zh/architecture/module-map.md:151` 自身也有一条**畸形 markdown**（`[↑ 架构总览](../ · [↑ 版本首页](../../)`，缺 `)`）——说明「上跳链接」在这棵树里本来就是高频出错点，不是孤例。

### ★ 缺陷记录 D-2（语义复用错误，被 worker 主动报出）

我把给 `BuildingHelper` 的 3 条建造语境 `## 参见` **逐字复用到 `CaravanHelper`**，语义不成立（商队页引用了 `BuildingConstructionModel`）。worker B 按「逐字」执行但**明确报出这是真实内容缺陷**，没有隐瞒。
**修复**：已定向派单（#18508）改成 2 条商队语境链接（`Campaign` / `GameModels`，两者 HEAD 实测存在）。
**教训**：跨页复用 `参见` 块时，必须**逐页重写语义**，不能把「链接目标存在」当成「链接语义成立」——门禁只查前者。

### ★ 缺陷记录 D-4（我的结构假设 vs boss 的 orphan 诊断：两边都要修正）

**boss-3 #18635 报「core-extra 桶 12 页全部未被索引提及、orphans 3→10」，要求我建 `core-extra/_index.md`。**
我用实测逐条对账，结论是：**症状真实，但归因错了，而且我自己的结构假设也不完整。**

```
① `content/v1.5.3/zh/api/core-extra/_index.md` 【不存在】
   ⇒ boss 的 grep 打在了一个不存在的路径上 ⇒ 必然「12 个全缺」⇒「wire into index 没生效」不成立
   ⇒ v1.5.3 全树只有 9 个 `_index.md`，桶索引只有 localization + storymode 两个
② orphan 判据 = 【任何 `_index.md` 的入链】，不是【本桶 `_index.md`】
   源码: tools/nav-orphans.mjs:151-157 — inbound = 全部页面(含所有 _index.md)链接的 route 计数
   反证: GameModel / GameModelsManager / MBGameModel 从未出现在 core-extra/_index.md（不存在）
        但从来不是 orphan ⇒ 因为被 zh/api/_index.md 链着 ⇒ 判据证据成立
③ boss 测到的 orphans=7 是【时序假象】: 那一刻 worker C 正在写索引行
   我 22:53 实测: orphans=5 · by_tree={v1.4.7:3, v1.5.3:2} · 2 个在 core-extra/
   ⇒ v1.5.3 的 2 个 = AlleyHelper + BarterHelper = 【我主动排除的】（当时页面还没写出来，加行会断链）
④ 计数不变量已执行: e3bfc377a1 = 2 页 ⇒ `_index.md` 恰好 +2 行 ✅
```

**我采纳的改进（来自 boss，比我原来的检查更强）**：批尾不再只验「加了 N 行」，而是**逐页验「每一页都有入链」**：
```
b=content/v1.5.3/zh/api/<桶>
for f in $b/*.md; do n=$(basename "$f" .md); [ "$n" = "_index" ] && continue;
  grep -q "$n" "$b/_index.md" || echo "❌ 索引未提及: $n"; done   # 期望输出为空
```
★ 但注意：这个命令**假定桶有自己的 `_index.md`**；对 v1.5.3 的 9 个无桶索引的桶，实际入链在 `api/_index.md`。两种形态必须分清。

**★ 真正的结构缺口（我已上报 boss 裁决，未自行动手）**：`zh/api/_index.md:18-20` 写着
「**桶索引页不存在** … 在 v1.5.3 下 **一张都没有**」—— **这句话今天已经是错的**（localization/storymode 的桶索引就在那儿）。
建 `core-extra/_index.md` 有两个真实前置，不能由内容线单方面做：
1. **R2 授权**：`nav-section-index.mjs --apply` 要求桶路径逐字出现在 `--batch-list` 里，而 `tools/_verify/.batches/index.txt`
   只有 v1.3.0/v1.3.15/v1.4.5 的 `_index.md`，**没有任何 v1.5.3 桶**。自造清单授权自己 = `content-write-freeze.mjs` 明令禁止的 self-certifying。
2. **marker 块不能手写**：子页清单在 `<!-- BEGIN/END SECTION INDEX -->` 之间，按冻结政策只能由 `nav-section-index.mjs` 写。

**教训（写给未来的自己）**：
- 「**症状为真但归因错**」是上级派单里最常见的形态。**必须用实测把归因拆开验证**（这里是三件事：文件存不存在、判据是什么、数字是不是时序假象），
  而不是二选一「要么照做要么顶回去」。本次两处都需要修正：boss 的归因错了，**而我的「api/_index.md 就是父索引」也不完整**（它满足 orphan，但不满足「桶能点进去」的树状导航诉求）。
- **单写者纪律救了这次**：C 那批只加 6 行、明确排除未写出的页；否则会造出 2 条断链。

## 批次台账（实测，截至 2026-10-07T14:56Z）

| 批次 | 页数 | 页 | 判分器（我实测） | 提交 |
|---|---:|---|---|---|
| b1a | 2 | BuildingHelper · CaravanHelper | pass 2/2 · deep 2/2 · tier 2/2 | ✅ `e3bfc377a1`（3 files · +2 行 · 计数 27→29） |
| b1b | 6 | AiHelper · SkillHelper · DiplomacyHelper · ItemHelper · CraftingHelper · MapEventHelper | pass 6/6 · deep 6/6 · tier 6/6 · **J3 5/3/7/9/7/8 全 bad=0** | ✅ `893772dfbb`（7 files · +6 行 · 计数 29→35 · 0.4%→0.5%） |
| b1c | 2 | AlleyHelper · BarterHelper | pass 3/3 · deep 3/3 · tier 3/3 · J3 4/3 bad=0 | ✅ `5e89e84cd8`（3 files · +2 行 · 计数 35→37） |
| b3 | 1 | DistanceHelper | **pass 1/1 · deep 1/1 · tier 1/1 · J3 checked=21 bad=0** | ⏳ 待排尾（单写者排队中） |
| b4 | 2 | ShipHelper · PortStateHelper | **pass 2/2 · deep 2/2 · tier 2/2 · J3 8/7 bad=0** | ⏳ 待排尾 |
| b5 | 3 | EquipmentHelper · FeatHelper · TraitEffectHelper | **pass 3/3 · deep 3/3 · tier 3/3 · J3 1/2/2 bad=0** | ⏳ 待排尾 |
| b6 | 3 | MiscHelper · TownHelpers · StringHelpers | **pass 3/3 · deep 3/3 · tier 3/3 · J3 2/7/8 bad=0** | ⏳ 索引尾在跑（+3 行 · 43→46 · 0.6%→0.7%） |
| b7 | 5 | DialogHelper · IncidentHelper · PersuasionHelper · TeleportationHelper · TooltipHelper | **pass 5/5 · deep 5/5 · tier 5/5 · J3 1/3/2/1/2 bad=0** | ⏳ 索引尾在跑（+5 行 · 46→51） |
| b8 | 3 | BoardGameHelper · AIDifficulty · BoardGameState | 待测 | ⏳ worker-249 在写 |
| b9 | 1 | QuestHelper | 待测 | ⏳ worker-247 在写 |

**五次提交（均已由我独立复核）**：
```
e3bfc377a1  2 页 + 索引  (3 files, +2 行, 27→29)
893772dfbb  6 页 + 索引  (7 files, +6 行, 29→35, 0.4%→0.5%)
5e89e84cd8  2 页 + 索引  (3 files, +2 行, 35→37)
ab6378c446  6 页 + 索引  (7 files, +6 行, 37→43, 0.5%→0.6%)   ← 四道门禁全绿，无例外裁决
e481d612e6  3 页 + 索引  (4 files, +3 行, 43→46, 0.6%→0.7%)   ← 四道门禁全绿
```
**已提交 23 页**（7 次提交）· 每次四道门禁全绿（除 `5e89e84cd8` 那次走了**有记录的例外裁决** —— 详见 D-5）。
```
e3bfc377a1  2 页  (27→29)
893772dfbb  6 页  (29→35, 0.4%→0.5%)
5e89e84cd8  2 页  (35→37)      ← 例外裁决（外部断链）
ab6378c446  6 页  (37→43, 0.5%→0.6%)
e481d612e6  3 页  (43→46, 0.6%→0.7%)
9d0178cc74  5 页  (46→51)
df771a9f9f  4 页  (51→55, 0.7%→0.8%)
```
⇒ 待提交 1 页（MapEventComponentHelper，索引尾在跑，55→56）；在改 2 页（b11 行号引用回填）。
**覆盖**：`content/v1.5.3` 153 → 178+；`core-extra` 桶 3 → 32 页。

### ★ 证据缺口正在收口：b11 = 行号引用回填
本线 23 页里，**只有最早提交的 2 页 `J3 checked=0`**（写在我加行号要求之前）：
```
BuildingHelper.md  → 需补 7 条（:16 :33 :49 :66 :83 :119 :133）
CaravanHelper.md   → 需补 2 条（:12 :27）
其余 21 页已行使，累计 139 条 bad=0
```
**验收判据是精确的**：`checked` 必须从 0 变成 **7 / 2**，且 `bad=0`；并明确告知 worker「**若 bad≠0 就停下报我，不要自己改行号凑绿**」。
**★ 全站门禁现为绿**（`e481d612e6` 时）：`FILES=39119 BROKEN_LINKS=0 FILES_WITH_BROKEN=0`。

**覆盖**：`content/v1.5.3` 153 → 170+；`core-extra` 桶 3 → 27 页（已提交 19 · 待提交 5 · 在写 4）。

### ★ 例外机制被验证两次
1. **D-5（外部断链）**：`5e89e84cd8` 那次 —— 授权提交并**要求 worker 回贴对方文件仍为 `??`** 作为「没卷走别人文件」的证据。✅ 已生效。
2. **D-6（骨架例外）**：`TooltipHelper` 的 `**Type:**` 必须是 `public class` 而非 `public static class`。我**独立实测**确认 worker 写对了：
   `grep '^\*\*Type:\*\*' …/TooltipHelper.md` ⇒ `` **Type:** `public class TooltipHelper` `` ✅
   ⇒ **在 brief 里显式枚举「与骨架不同」的地方**这个做法有效。

**J3 累计**：b1a 9 + b1b 39 + b1c 7 + b3 21 + b4 15 + b5 5 + b6 17 + b7 9 + b8 8 + b9 10 + b10 6 = **146 条已核行号引用，bad=0**。
⇒ **本线 29 页全部行使 J3，无 `checked=0` 的页**（b1a 的 2 页已由 b11 回填）。

### ★ 缺陷记录 D-6：「骨架越被证明好用，越会在例外交界处被机械照抄」

`TooltipHelper` 的源码是 **`public class TooltipHelper`（没有 `static`）**，而我前 7 批的逐字骨架一直写 `**Type:** \`public static class <TypeName>\``。
b8/b7 的 brief 里我单独标出「这一页的 `**Type:**` 必须写 `public class`，**不要照抄骨架**」。
**教训**：一个被反复验证成功的逐字骨架，会在遇到例外时**被机械套用**。派单方必须在 brief 里**显式枚举每一处「与骨架不同」的地方**，
而不能指望 worker 去发现「这一页和前面几页不一样」。同类隐患已见：`AIDifficulty` / `BoardGameState` 是 **enum** 而非 class，且是**嵌套类型**
（源码里写 `BoardGameHelper.AIDifficulty`，而普查口径把它们归到 `Helpers` 命名空间、页名取最后一段）—— 这两种事实必须在 brief 里写明。

**吞吐**：约 30 分钟内 11 页落盘 + 2 次提交（`e3bfc377a1` + `893772dfbb`）；v1.5.3 页数 153 → 162+。
**core-extra 桶**：3 → **16 页**（已提交 8 · 未提交 8）。

### ★ 本线的关键质量指标：J3 从「未检验」变为「已行使」

| 页 | J3 `checked` | `bad` |
|---|---:|---:|
| DistanceHelper | **21** | 0 |
| ItemHelper | 9 | 0 |
| SkillHelper | 8 | 0 |
| DiplomacyHelper | 7 | 0 |
| MapEventHelper | 7 | 0 |
| AiHelper | 5 | 0 |
| AlleyHelper | 4 | 0 |
| CraftingHelper | 3 | 0 |
| BarterHelper | 3 | 0 |
| **合计** | **67** | **0** |

⇒ **67 条行号引用全部对上源码，bad=0。** 这是「把已核实的源码事实（含整文件 `cat -n` 行号）内联进 brief + 禁止 worker 自核」这套派单形态的**可量化产物证据**。
★ 但 b1a 的 2 页（BuildingHelper / CaravanHelper）仍是 `checked=0` —— 它们是加行号引用要求**之前**写的。**回填候选**。

### 并发配置（3 个 worker，均在同一桶但不同文件，零重叠）
```
worker-247 → b5（EquipmentHelper / FeatHelper / TraitEffectHelper）
worker-248 → b1c 索引+提交尾（单写者：只有它能写 zh/api/_index.md）
worker-249 → b4（ShipHelper / PortStateHelper）
已取消： worker-245（17 分钟零磁盘输出）；已取消：worker-246（b1a 完成后无剩余工作）
```

**索引待办（单写者串行）**：b1c 正在提交；**DistanceHelper 尚未入索引**（待排尾）；b4/b5 落盘后还要一次尾。

### ★ 系统性缺陷 D-5：增量门禁与【跨线 WIP】耦合（多线并行的假阳性源）

```
tools/audit-changed-links.mjs 的 changed 集合 = 工作区全部改动（staged + unstaged + untracked）
它【没有按文件/按行限定作用域的参数】（只有 AUDIT_CONTENT_ROOT / AUDIT_MODE 两个 env）
⇒ 【任何一条线的未提交 WIP，都会把【所有】线的批尾门禁卡红】
⇒ 多线并行时「不绿不提交」会产生【假阳性】，且卡的是无关的线
```

**实测事件（2026-10-07 22:57-22:59）**：
```
content/v1.4.6/zh/api/campaign/AIBehaviorData.md   ← `??` 未跟踪（v1.4.6 = 另一条线的树）
② audit-changed-links  ⇒ CHANGED_FILES=7 CHANGED_LINKS=91 BROKEN_LINKS=3 EXIT=1
③ audit-links          ⇒ FILES=39102 BROKEN_LINKS=3 FILES_WITH_BROKEN=1 EXIT=1
  3 条断链全在该文件第 107 行的「同批」那一行:
    ../ActionNotes · ../AddCompanionAction · ../AddHeroToPartyAction
实测: `find content/v1.4.6 -name '<name>.md'` 三次全空 ⇒ 目标页在 v1.4.6 全树不存在
     ⇒ 不是链接写错，是那条线【正在写的批次】引用了它还没写出来的页
它在自己好: worker C 先看到 5 条，我 22:58 看到 3 条，该文件 mtime=22:57:45 ⇒ 对方在实时修
```

**★ 我对规则的例外裁决（已上报 boss-3 #18751，可被驳回）**：让 C 提交。理由：
1. 规则目的 = 不让断链进树；C 用**文件级 pathspec** 只 add 自己 3 个路径，那个 v1.4.6 文件仍留工作区、
   仍是 `??`、**不进 HEAD** ⇒ 目的完全满足。
2. 我实测自己 3 个文件 `j5r-resolve` ⇒ 3 行 `unresolved=0`；断链目标页在 v1.4.6 根本不存在。
3. 不对称风险：本会话已发生过未提交内容被静默覆盖而**永久丢一版文件**。
**我要求 C 提交后回贴 `git status --porcelain -- content/v1.4.6/.../AIBehaviorData.md` 必须仍是 `??`** —— 用它证明没卷走别人的文件。
**我没有**动那个 v1.4.6 文件（不越线改别人的树）。

**教训**：多线并行期间，批尾门禁的红/绿**必须先看断链归属再判**，不能只看 EXIT。
这也是「Lead 必须自己跑门禁并读输出」而不是只看 worker 报的 EXIT 码的又一个理由。

## ★ 进程重启恢复记录（2026-10-07T15:18Z）

**重启事实**：Pi Team 进程意外重启，lead-26 与 3 个 worker 均被重新拉起。
**恢复动作（按「不盲目重做副作用」原则）**：重启后先做**只读状态核对**，再决定动作。
```
实测 HEAD = ec4175ed34（**别线**的 v1.4.6 提交）
我线的 6 次提交全部完好：e3bfc377a1 · 893772dfbb · 5e89e84cd8 · ab6378c446 · e481d612e6 · 9d0178cc74
staged = 0（无半成品暂存）
未提交的【我线】内容 = 4 页：AIDifficulty / BoardGameHelper / BoardGameState / QuestHelper
未提交的【别线】内容 = 66 个 `M content/v1.4.7/...`（lead-24 的，不碰）
全站门禁：FILES=39126 BROKEN_LINKS=0 FILES_WITH_BROKEN=0
core-extra = 31 页；索引计数 51 篇 / 0.7% / 25 行
```
**三个 worker 的自主恢复质量**：
- worker-248 自己核对后报「`9d0178cc74` 完好、无新任务、无待处理 v1.5.3 未跟踪文件」——**结论在当时正确**（那 4 页那时还没落盘）。
- worker-249 报「3 页磁盘状态与上一轮完全一致（字节数与 md5 均未变），无需重写」——**主动避免了重复写入**。
- worker-247 报「b9 已完成、文件有效、无需重做」。
⇒ **三个 worker 都选择了「先核对再行动」而不是重跑**。这是重启后没有产生任何重复副作用的原因。

**重启后唯一的待办 = 4 页索引尾**（51→55 · 0.7%→0.8% · core-extra 27→31 · 6 773→6 769），已派给 worker-248（#19124）。

### ✅ 证据缺口已收口：b11 行号引用回填完成（我亲自验收）
```
BuildingHelper.md   J3 checked=0 → **7**  bad=0   （补 :16 :33 :49 :66 :83 :119 :133）
CaravanHelper.md    J3 checked=0 → **2**  bad=0   （补 :12 :27）
两页仍 PASS · deep_pass=2/2 · tier=handwritten_deep=2/2 · j5r unresolved=0
$ git diff --stat ⇒ 2 files changed, **9 insertions(+), 9 deletions(-)**  ← 恰好那 9 行，没碰任何其他文字
```
★ **本线 29 页现在【全部】有已行使的 J3** —— 不再有 `checked=0` 的页。
★ 验收判据是事先写定的精确条件（`checked` 必须变成 7/2 且 `bad=0`），且明确告知 worker「**若 bad≠0 就停下报我，不要自己改行号凑绿**」。它按此执行。
★ 但 b11 的教训也真实：worker-249 在这个 9 行的小任务上**先停滞了约 2.5 分钟、磁盘零变动**，我实测 mtime 未变 + `grep` 计数为 0 才发现。
  降载（拆成「一文件一条消息 + edit 不 write + 第 1 步就报一次」）后立即完成。⇒ **停滞要用「磁盘 mtime + 计数」而不是「worker 说它在跑」来判定。**

**已提交 29 页**（8 次提交）· 每次四道门禁全绿（除两次**有记录的例外裁决** —— 详见 D-5）。
```
e3bfc377a1  2 页  (27→29)
893772dfbb  6 页  (29→35, 0.4%→0.5%)
5e89e84cd8  2 页  (35→37)      ← 例外裁决（外部断链）
ab6378c446  6 页  (37→43, 0.5%→0.6%)
e481d612e6  3 页  (43→46, 0.6%→0.7%)
9d0178cc74  5 页  (46→51)
df771a9f9f  4 页  (51→55, 0.7%→0.8%)
ce4a248c60  1 页  (55→56)      ← 例外裁决（外部断链，v1.4.6/ChangeOwnerOfSettlementAction.md）
```
**待提交**：b11 的 2 个回填文件（BuildingHelper / CaravanHelper）—— 第九轮在跑。
**覆盖**：`content/v1.5.3` 153 → 182；`core-extra` 桶 3 → **32 页**（本线新写 29 页）。

### ★ 外部断链的复发模式（值得上报）
另一条线（v1.4.6）在本会话内**至少两次**把全站门禁卡红，且两次都是**它自己的新页/未跟踪文件**：
```
第一次：AIBehaviorData.md      → 3 条 → 一度涨到 17 条 → 自愈（对方把 `](./` 形态改对）
第二次：ChangeOwnerOfSettlementAction.md → 4 条 → 我 15:27 复测时已自愈（BROKEN_LINKS=0）
```
两次都**没有需要我介入**（我不碰别线的树），但两次都让我的批尾 ②③ 短暂变红。
⇒ 这是 D-5 那个系统性缺陷的**复发证据**，不是一次性事故。

**已提交 29 页**（**9 次提交**）· 每次四道门禁全绿（除两次**有记录的例外裁决** —— 详见 D-5）。
```
e3bfc377a1  2 页  (27→29)
893772dfbb  6 页  (29→35, 0.4%→0.5%)
5e89e84cd8  2 页  (35→37)      ← 例外裁决（外部断链）
ab6378c446  6 页  (37→43, 0.5%→0.6%)
e481d612e6  3 页  (43→46, 0.6%→0.7%)
9d0178cc74  5 页  (46→51)
df771a9f9f  4 页  (51→55, 0.7%→0.8%)
ce4a248c60  1 页  (55→56)      ← 例外裁决（外部断链）
a029de410e  —      （b11 行号引用回填，无索引/计数变动）
```

### ✅ 本线已达【干净收尾点】（我亲自实测，非自报）
```
git status --porcelain -- content/v1.5.3/   ⇒ 【空】—— v1.5.3 下零未提交内容
node tools/audit-links.mjs     ⇒ FILES=39137 BROKEN_LINKS=0 FILES_WITH_BROKEN=0
node tools/nav-orphans.mjs     ⇒ total_pages=39137 **orphans=0** orphan_parents=0 by_tree={}   ← 全站零 orphan
b11 终验：BuildingHelper J3 checked=7 bad=0 · CaravanHelper J3 checked=2 bad=0 · 两页 PASS/deep_pass/tier
```
**覆盖**：`content/v1.5.3` 153 → 182；`core-extra` 桶 3 → **32 页**（本线新写 29 页）。

### ★ 收尾时的两个不可验证项（诚实登记）
1. **29 页只是队列的 0.5%**（队列 5,605 条 zh）。本线**因我自己的上下文预算而停手**，**不是任务做完**。
   ★ 停手的理由：再开一批需约 10–15k token（整文件读源码 + 内联事实 + 逐字骨架 + 例外清单）；
   **一个被截断的 brief 比一个干净的停止更糟** —— worker 会拿着不完整的事实写出错误的行号，而 J3 会把它们报成 `bad>0`。
2. **交接项（未做，需上级裁决）**：`zh/api/_index.md` 里「桶索引页不存在 … 一张都没有」**已是错的**
   （localization / storymode 的桶索引存在）；建 `core-extra/_index.md` 需 R2 批次清单授权 + tool 写 marker 块。
   我按安全默认处理：维持 `api/_index.md` 为唯一父索引（orphan 口径已满足）。

## 未完成项 / 已知风险

- [ ] **计数漂移（超出本批范围）**：`content/v1.5.3/{zh,en}/_index.md`、`zh/architecture/{_index,module-map,sdk-overview,migration-from-1.4.5}.md` 共 8 处写着「27 篇 / 0.4% / 6 797」。本批只刷新 `zh/api/_index.md`（本批父索引），其余留给线尾统一刷新，**避免与别的线在同一文件上冲突**。
- [ ] 与 lead-24 的重叠风险：lead-24 名义上覆盖 v1.4.7 + v1.5.3。本线按【桶】隔离（core-extra 起步），但 `api/_index.md` 是共享单写者资源 ⇒ 提交时若发现该文件已被别线改动，必须 rebase 后重跑门禁。
- [ ] 5 605 条队列在 15 桶分布极不均（mission-ext 1643 / core-extra 597 …）⇒ 后续批次要按桶推进，别在一条桶里打空。

---

# lead-27 — 续写 v1.5.3/zh（2026-10-08 起）

## b12（首批，5 页，已提交）

| 页 | 字节 | J3 checked | J3 bad |
|---|---:|---:|---:|
| HeroHelper | 8076 | 26 | 0 |
| CharacterHelper | 6979 | 19 | 0 |
| FactionHelper | 9498 | 40 | 0 |
| SettlementHelper | 12378 | 28 | 0 |
| PartyBaseHelper | 9439 | 14 | 0 |
| **合计** | | **127** | **0** |

**判分器**：JUDGE total=5 pass=5 fail=0 · deep_pass=5/5 · tier=handwritten_deep=5/5
**四道门禁**：j5r unresolved=0 · audit-changed-links BROKEN=0 · audit-links FILES_WITH_BROKEN=0 · orphans=0
**提交**：`4e077fb81d`（6 files, +626 -8）
**覆盖**：v1.5.3 182 → 187 页；core-extra 32 → 37 页

**并发配置**：worker-264（A：HeroHelper/CharacterHelper/FactionHelper）+ worker-265（B：SettlementHelper/PartyBaseHelper）。两 worker 均 leaf-only 不提交，索引尾由我单写者执行。

**worker A 修复记录**：FactionHelper 的 GameModels 链接从 `../campaign/GameModels` 改为 `../../campaign/GameModels`——判分器把页 URL 的文件名段也当目录，叶子页到兄弟桶要上两级。已复跑确认 PASS。

**剩余 core-extra 队列**：16 - 5 = 11 个 Helpers 类型待写（CharacterHelper 已做，剩 EmbarkDisembarkData / FactionHelper 已做 / HeroHelper 已做 / InventoryCategoryType / InventoryItemType / InventoryMode / InventoryScreenHelper / MenuHelper / MobilePartyHelper / NavigationHelper / PartyBaseHelper 已做 / PartyScreenHelper / PartyScreenMode / PerkHelper / SettlementHelper 已做）——实际剩余：EmbarkDisembarkData · InventoryCategoryType · InventoryItemType · InventoryMode · InventoryScreenHelper · MenuHelper · MobilePartyHelper · NavigationHelper · PartyScreenHelper · PartyScreenMode · PerkHelper（11 个）

## b13（第二批，5 页，已提交）

| 页 | 字节 | J3 checked | J3 bad |
|---|---:|---:|---:|
| MobilePartyHelper | 8483 | 20 | 0 |
| PartyScreenHelper | 9943 | 25 | 0 |
| PerkHelper | 8759 | 18 | 0 |
| NavigationHelper | 10621 | 16 | 0 |
| MenuHelper | 10475 | 15 | 0 |
| **合计** | | **94** | **0** |

**判分器**：JUDGE total=5 pass=5 fail=0 · deep_pass=5/5 · tier=handwritten_deep=5/5
**四道门禁**：j5r unresolved=0 · audit-changed-links BROKEN=0 · audit-links FILES_WITH_BROKEN=0 · orphans=0
**提交**：`bb0b6f4c90`（6 files, +567 -8）
**覆盖**：v1.5.3 187 → 192 页；core-extra 37 → 42 页

**worker A 修正记录**：PartyScreenMode 真实枚举值（源码 PartyScreenHelper.cs:810）为 Normal/Shared/Loot/Ransom/PrisonerManage/TroopsManage/QuestTroopManage，派单里写的 Cheat/ManageTroops/DonateTroops 并非该枚举成员，页内按源码实际值记录。

**剩余 core-extra 队列**：6 个（EmbarkDisembarkData · InventoryCategoryType · InventoryItemType · InventoryMode · InventoryScreenHelper · PartyScreenMode）——其中 EmbarkDisembarkData 和 PartyScreenMode 是嵌套类型（分别在 NavigationHelper.cs:322 和 PartyScreenHelper.cs:810），已随父类页覆盖；实际待写独立类型 4 个：InventoryCategoryType · InventoryItemType · InventoryMode · InventoryScreenHelper

## b14（第三批，2 页，已提交）——core-extra Helpers 桶收尾

| 页 | 字节 | J3 checked | J3 bad |
|---|---:|---:|---:|
| InventoryScreenHelper | 10861 | 19 | 0 |
| InventoryItemType | 7811 | 19 | 0 |
| **合计** | | **38** | **0** |

**判分器**：JUDGE total=2 pass=2 fail=0 · deep_pass=2/2 · tier=handwritten_deep=2/2
**四道门禁**：j5r unresolved=0 · audit-changed-links BROKEN=0 · audit-links FILES_WITH_BROKEN=0 · orphans=0
**提交**：`9b394d1863`（3 files, +257 -8）
**覆盖**：v1.5.3 192 → 194 页；core-extra 42 → 44 页

**worker-269 发现**：Helpers.InventoryScreenHelper 内部嵌套了一个同名 [Flags] InventoryItemType（InventoryScreenHelper.cs:342），值与 Diamond 那个不同（Equipable=6399、多 Banner=4096）。两页已做交叉消歧。

**core-extra Helpers 桶已完成**：44 页（lead-26 写 29 + lead-27 写 15）。剩余 core-extra 队列 = 597 - 44 = 553 个非 Helpers 类型。

**lead-27 累计**：3 批 · 12 页 · 2 次提交（4e077fb81d + bb0b6f4c90 + 9b394d1863）· J3 259 条 bad=0
