# lead-28 · b11 派单（落盘版）

> **本文件是 b11 的权威 brief**（规范 16：brief 必须落盘，否则事后不可审计）。
> 派单消息只指向本文件，**不内联任何事实**。
>
> **本文件遵守本线规范 §13 的第 15′/16/17/18 条**（见 §0）。
> 本文件里出现的**每个名字都来自已测量的锚表**（`tools/_verify/sig-c1/<Type>.sig.txt`，由只读脚本从源码生成，
> 已逐条验过 J13-bad=0），并**带来源标注**；**锚表外不出现任何类型名 / 方法名 / 成员名**（第 15′ 条前半）。
> **本文件不写任何未经测量的【能力/行为断言】**（第 15′ 条后半）—— 凡涉及「它负责什么」一律写成**导向式指令**
> （「写清它负责**哪几类**职责」），而不是断言（「它负责 X」）。
> `参见` 里出现的是**页面路径**，已由 `J5R unresolved=0` 逐批验证（boss-4 #22602 明确允许且要求保留）。

---

## §0 派单前检查结论（可复跑，本批已执行）

### 0.1 basename 全树唯一性（防第 7 个门禁洞：重名 ⇒ `ambiguous` 静默跳过校验）

命令（工作目录 `C:/WorkSpace/Bannerlord/bannerlord-1.5.3`）：

```bash
for n in MakePregnantAction DisbandPartyAction LeaveSettlementAction SellItemsAction \
         StartBattleAction TeleportHeroAction SellPrisonersAction EnterSettlementAction; do
  printf '%-24s %s\n' "$n" "$(find . -name "$n.cs" | wc -l)"
done
```

结论（实测输出）：

```
MakePregnantAction          uniq=1  ✅
DisbandPartyAction          uniq=1  ✅
LeaveSettlementAction       uniq=1  ✅
SellItemsAction             uniq=1  ✅
StartBattleAction           uniq=1  ✅        （本批未选用，留作后续）
TeleportHeroAction          uniq=1  ✅        （本批未选用）
SellPrisonersAction         uniq=1  ✅        （本批未选用）
EnterSettlementAction       uniq=1  ✅        （本批未选用）
```

⇒ **本批 4 页的源文件 basename 全部全树唯一** ⇒ 判分器的 `ambiguous` 应为 0（R2 时须回贴该读数）。

### 0.2 锚表生成与 J13 正向对照

命令：只读脚本扫描源码，抽出「以可见性修饰符开头且非注释」的声明行，**再逐条回查该行在源码里是否为
空行 / 纯注释 / 纯标点**（J13 口径）。

结论：**本批 4 个文件共 12 条锚点，J13-bad = 0。**

```
MakePregnantAction       src  22 行 · 3 条锚点 · J13bad 0
DisbandPartyAction       src  55 行 · 3 条锚点 · J13bad 0
LeaveSettlementAction    src  59 行 · 3 条锚点 · J13bad 0
SellItemsAction          src 120 行 · 3 条锚点 · J13bad 0
```

---

## §1 硬约束

### 1.0 ★★ 磁盘可判定的后果（规范 17）

> **本轮结束时若下列四个文件不存在，则本轮视为未完成** —— 直接回报「**未完成**」并说明卡点，不要声称完成：

```
content/v1.5.3/zh/api/campaign/MakePregnantAction.md
content/v1.5.3/zh/api/campaign/DisbandPartyAction.md
content/v1.5.3/zh/api/campaign/LeaveSettlementAction.md
content/v1.5.3/zh/api/campaign/SellItemsAction.md
```

**第一个动作必须是 `write`**；不要先做核实、不要先找工具、不要先看别的页。
理由：worker 可以说服自己「先读源码更务实」，但它**无法说服磁盘**。

### 1.1 leaf-only

**只写上面 4 个文件**：不得创建/修改任何 `_index.md`；不得 `git add` / `git commit`；
不得碰 `templates/**`、`data/**`、别的版本树、`tools/**`（只读）。

### 1.2 H0 手写

正文必须由你**打开源码读完再写**。任何脚本不得生成/写入 `content/**`。

### 1.3 行号只能取自本文件的锚表

锚表外行号会被 J13 判废。**找不到表内行号的成员就不要写那一行**（宁可不写，不要给表外行号）。

### 1.4 不做因果断言

不要写「某参数是为了…」「某属性决定了…」。源码没直接说明的因果关系就不要写。

### 1.5 示例 API 约束（规范 14 + D-13）

示例**只允许使用本页锚表里列出的方法**，以及**锚表签名里已出现的对象**。
**表外 API 一律不要用** —— 若你确实需要，必须先以可复现命令核实、并把原始输出贴进回报；
**否则宁可不写那几行示例**。

> ★ 本批 `SellItemsAction` 的入口签名含一个**构造起来很麻烦的类型**。**不要尝试构造它、不要访问它的任何成员**
> —— 把示例写成**接收该类型为参数的方法**，这样清单外 API 归零、你也无需核实任何东西。
> （本线 b9 曾有一个 worker 因为「必须核实清单外 API」而陷入核实循环、两页零落盘；本 brief 已从根上消除该需求。）

### 1.6 锚表优先

**若骨架散文与锚表在数量/成员上冲突，一律以锚表为准，并在回报里指出冲突。**

---

## §2 七节骨架（逐字，只替换 `<>`）

```markdown
---
title: "<TypeName>"
description: "<30–80 字手写摘要>"
---

# <TypeName>

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `<逐字抄本页锚表的类声明行>`
**Source:** `TaleWorlds.CampaignSystem/Actions/<TypeName>.cs`

## 概述

<≥200 字。写清它在游戏里扮演什么角色、边界在哪里。
★ 写成「描述」而非「断言」：不要写「它负责 X」，写「它涉及哪几类状态变更」。>

## 心智模型

<≥300 字。写清本页锚表里**实际存在**的入口各自对应什么场景、以及它们与内部实现的关系
（按源码读到的实际写）。**不要做因果断言。**>

## 怎么用

### 怎么拿到它

<静态类，直接 `XxxAction.方法名(…)` 调用；不需要实例。>

### 典型用法

<3–5 条真实场景。>

### 最容易踩的坑

<3–5 条，每条都必须能由本页锚表支撑。>

## 关键成员

- **<成员名>**（`<File>.cs:<N>`）— <用途、何时被调用、注意什么>
（每个成员一行，行号只能用本页锚表里的；含 private 的内部实现 —— **写清各公开入口与它的关系（按源码读到的实际写）**。）

## 真实示例

```csharp
// ≥8 行真实可编译 C#。★ 只允许用本页锚表里的方法 + 锚表签名里已出现的对象。
```

## 参见

<见 §3–§6 每页给出的页面路径白名单，≥3 条>

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
```

---

## §3 页 1 · `MakePregnantAction`

**文件**：`content/v1.5.3/zh/api/campaign/MakePregnantAction.md`
**Source**（锚表已含）：`TaleWorlds.CampaignSystem/Actions/MakePregnantAction.cs`（22 行）

**锚表**（来源：`tools/_verify/sig-c1/MakePregnantAction.sig.txt`，只读脚本生成，J13-bad=0，共 3 条）：

```
   6  public static class MakePregnantAction
   9  private static void ApplyInternal(Hero mother)
  16  public static void Apply(Hero mother)
```

- `**Type:**` 逐字写锚表第 6 行。
- 本页**只有 1 个公开入口**（锚表第 16 行）与 1 个内部实现（第 9 行）
  —— **诚实写它就是这个形态，不要编造更多入口**（boss-4 #21534：诚实短是正确的深度，不要为凑 J8 灌水）。
- **参见**（只能从这 4 条页面路径里选 ≥3 条）：
  `../Campaign` · `../../core-extra/HeroHelper` · `../../core-extra/CharacterHelper` · `../CampaignEventDispatcher`

---

## §4 页 2 · `DisbandPartyAction`

**文件**：`content/v1.5.3/zh/api/campaign/DisbandPartyAction.md`
**Source**（锚表已含）：`TaleWorlds.CampaignSystem/Actions/DisbandPartyAction.cs`（55 行）

**锚表**（来源：`tools/_verify/sig-c1/DisbandPartyAction.sig.txt`，只读脚本生成，J13-bad=0，共 3 条）：

```
   9  public static class DisbandPartyAction
  12  public static void StartDisband(MobileParty disbandParty)
  46  public static void CancelDisband(MobileParty disbandParty)
```

- `**Type:**` 逐字写锚表第 9 行。
- 本页有 **2 个公开入口**（第 12 / 46 行）且**没有 private 内部实现**（锚表里没有）
  —— **诚实写它就是这个形态，不要编造一个内部实现**。
- **参见**（只能从这 4 条页面路径里选 ≥3 条）：
  `../Campaign` · `../../core-extra/MobilePartyHelper` · `../../core-extra/PartyBaseHelper` · `../CampaignEventDispatcher`

---

## §5 页 3 · `LeaveSettlementAction`

**文件**：`content/v1.5.3/zh/api/campaign/LeaveSettlementAction.md`
**Source**（锚表已含）：`TaleWorlds.CampaignSystem/Actions/LeaveSettlementAction.cs`（59 行）

**锚表**（来源：`tools/_verify/sig-c1/LeaveSettlementAction.sig.txt`，只读脚本生成，J13-bad=0，共 3 条）：

```
  10  public static class LeaveSettlementAction
  13  public static void ApplyForParty(MobileParty mobileParty)
  40  public static void ApplyForCharacterOnly(Hero hero)
```

- `**Type:**` 逐字写锚表第 10 行。
- 本页有 **2 个公开入口**（第 13 / 40 行）且**没有 private 内部实现**（锚表里没有）
  —— **诚实写它就是这个形态**。
- 两个入口的差别**只能从它们的参数描述**（参数差异直接照锚表写；**不要从名字推断用途**）。
- **参见**（只能从这 4 条页面路径里选 ≥3 条）：
  `../Campaign` · `../EnterSettlementAction`（★ 注意：该页**尚未落盘**，**不要链它**）
  ⇒ 改用：`../CampaignEventDispatcher` · `../../core-extra/SettlementHelper` · `../../core-extra/MobilePartyHelper`

---

## §6 页 4 · `SellItemsAction`

**文件**：`content/v1.5.3/zh/api/campaign/SellItemsAction.md`
**Source**（锚表已含）：`TaleWorlds.CampaignSystem/Actions/SellItemsAction.cs`（120 行）

**锚表**（来源：`tools/_verify/sig-c1/SellItemsAction.sig.txt`，只读脚本生成，J13-bad=0，共 3 条）：

```
   9  public static class SellItemsAction
  12  private static void ApplyInternal(PartyBase sellerParty, PartyBase buyerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)
 114  public static void Apply(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement subject, int number, Settlement currentSettlement = null)
```

- `**Type:**` 逐字写锚表第 9 行。
- 本页**只有 1 个公开入口**（第 114 行）与 1 个内部实现（第 12 行）
  —— **诚实写它就是这个形态**。
- ★ 公开入口比内部实现**多一个带默认值的参数**（第 114 行末尾），且内部实现里那个对应参数**没有默认值**
  —— 写进心智模型。
- ★★ **示例写法（关键，避免核实循环）**：入口签名里有一个**构造麻烦的类型**。
  **把示例写成接收该类型为参数的方法**，于是**不构造、不访问它的任何成员**：

  ```csharp
  public static void SellOneToMainHero(PartyBase receiver, PartyBase payer, ItemRosterElement subject)
  {
      SellItemsAction.Apply(receiver, payer, subject, 1);
  }
  ```

  你可以在此之上加 1–2 个调用示例（仍只用锚表内的方法与锚表签名里已出现的对象）。
  **不要**尝试构造那个类型、**不要**查它的成员。
- **参见**（只能从这 4 条页面路径里选 ≥3 条）：
  `../Campaign` · `../../core-extra/ItemHelper` · `../../core-extra/BarterHelper` · `../../core-extra/PartyBaseHelper`

---

## §7 机器禁令（命中即 FAIL）

- 七节 H2 必须**恰好**是：`概述` / `心智模型` / `怎么用` / `关键成员` / `真实示例` / `参见` / `导航`
- markdown 链接**只允许**出现在 `## 参见` 与 `## 导航`；正文叙述里用反引号
- 正文（frontmatter 之后）> **2500 字节** · U+FFFD = 0 · ```` ```csharp ```` 代码块有效行 ≥ 3
- 禁止出现：`是 TaleWorlds.X 下的公开类型` · `阅读时先通过属性了解状态` · `型扩展点来理解` ·
  `SomeValue` · `null; // 替换` · `service = ...`
- 「关键成员」用途行禁止写成 `处理 X 相关逻辑。` / `获取 X 的当前值。` / `设置 X 的值。`

---

## §8 判据（单页必须全绿；`J5R` 是批次级）

```
J3 bad=0 且 checked >= 关键成员行数 · ambiguous=0 · J13=0 · 裸引用 M+K=0
J1=0 · J2 missing=[] · J6=deep_pass · J8>2500B · J9≥3
J10=0 · J11=0 · J12=0 · tier=handwritten_deep
```

四页写完跑（同批跑时 `J5R` 应为 0）：

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs \
  content/v1.5.3/zh/api/campaign/MakePregnantAction.md \
  content/v1.5.3/zh/api/campaign/DisbandPartyAction.md \
  content/v1.5.3/zh/api/campaign/LeaveSettlementAction.md \
  content/v1.5.3/zh/api/campaign/SellItemsAction.md
```

---

## §9 回报格式（一条消息，必须含全部 6 项）

① 四页路径 + 字节数
② 每页关键成员行数 / 带行号行数
③ 判分器**原始输出**（**连 `ambiguous=` 一起贴**）
④ 未确认事项
⑤ **示例里用到的每条 API 是否在本页锚表内**（表外的必须附核实命令与原始输出）
⑥ **四个目标文件的 `stat -c '%s %y'` 输出**（证明它们真的落盘了 —— 规范 17 的磁盘可判定后果）
