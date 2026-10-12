# lead-28 · b10 派单（落盘版，规范第 16 条）

> **本文件是 brief 的权威文本**（规范第 16 条：每条 brief 必须落盘到 `tools/_verify/`，否则事后不可审计）。
> 本文件里出现的**所有名字都来自已测量的锚表**（`tools/_verify/sig-c1/<Type>.sig.txt`，由只读脚本从源码生成，
> 已逐条验过 J13-bad=0）。**锚表外不出现任何类型名 / 方法名 / 成员名**（规范第 15 条）。
> `参见` 里出现的是**页面路径**，已由 `J5R unresolved=0` 逐批验证（boss-4 #22602 明确允许且要求保留）。

---

## 0. 硬约束（违反即判废）

0. ★★ **磁盘可判定的后果（规范第 17 条）**：**本轮结束时若下列两个文件不存在，则本轮视为未完成** ——
   直接回报「**未完成**」并说明卡点，不要声称完成。
   ```
   content/v1.5.3/zh/api/campaign/GatherArmyAction.md
   content/v1.5.3/zh/api/campaign/RepairShipAction.md
   ```
   **为什么写这一条**：worker 可以说服自己「先读源码更务实」，但它**无法说服磁盘**。
   把约束从「意图」变成「磁盘可判定的后果」是唯一不会被重新谈判的形式。
   ⇒ 因此：**第一个动作必须是 `write`**；不要先做核实、不要先找工具、不要先看别的页。

1. **只写下面列出的两个文件**（leaf-only）：不得创建/修改任何 `_index.md`；不得 `git add` / `git commit`；
   不得碰 `templates/**`、`data/**`、别的版本树、`tools/**`（只读）。
2. **H0 手写**：正文必须由你**打开源码读完再写**。任何脚本不得生成/写入 `content/**`。
3. **行号只能取自本文件的锚表**；锚表外行号会被 J13 判废。**找不到表内行号的成员就不要写那一行。**
4. **不做因果断言**：不要写「某参数是为了…」「某属性决定了…」。源码没直接说明的因果关系就不要写。
5. **示例 API 约束**：示例**只允许使用本页锚表里列出的方法**，以及**锚表签名里已出现的对象**
   （例如锚表签名里接收的实体参数）。**表外 API 一律不要用** —— 若你确实需要表外 API，
   必须先用可复现命令核实、并把原始输出贴进回报；**否则宁可不写那几行示例**。
6. **若骨架散文与锚表在数量/成员上冲突，一律以锚表为准，并在回报里指出冲突。**

---

## 1. 七节骨架（逐字，只替换 `<>`）

```markdown
---
title: "<TypeName>"
description: "<30–80 字手写摘要：这个静态 Action 类让你在战役里安全地<做什么>，而不是直接改字段>"
---

# <TypeName>

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `<逐字抄本页锚表的类声明行>`
**Source:** `TaleWorlds.CampaignSystem/Actions/<TypeName>.cs`

## 概述

<≥200 字：这个 Action 类在游戏里负责什么世界状态变更、为什么必须走它而不是直接改字段。>

## 心智模型

<≥300 字：说明「多个语义化入口 → 单一内部实现」这个结构（按锚表实际有的入口数写），
以及为什么 mod 应该用语义化入口。**不要做因果断言。**>

## 怎么用

### 怎么拿到它

<静态类，直接 `XxxAction.Apply...(…)` 调用；不需要实例。>

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

<见下面每页给出的白名单，≥3 条>

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
```

---

## 2. 页 1 · `GatherArmyAction`

**文件**：`content/v1.5.3/zh/api/campaign/GatherArmyAction.md`
**Source**（锚表已含）：`TaleWorlds.CampaignSystem/Actions/GatherArmyAction.cs`（24 行）

**锚表**（来源：`tools/_verify/sig-c1/GatherArmyAction.sig.txt`，只读脚本从源码生成，J13-bad=0，共 3 条）：

```
   8  public static class GatherArmyAction
  11  private static void ApplyInternal(MobileParty leaderParty, IMapPoint gatheringPoint, float playerInvolvement = 0f)
  18  public static void Apply(MobileParty leaderParty, IMapPoint gatheringPoint)
```

- `**Type:**` 逐字写锚表第 8 行（即 `public static class GatherArmyAction`）。
- 本页**只有 1 个公开入口**（锚表第 18 行）与 1 个内部实现（第 11 行）——**诚实写它就是这个形态，
  不要编造更多入口**（boss-4 #21534 标准：诚实短是正确的深度，不要为凑 J8 灌水）。
- 注意内部实现比公开入口**多一个带默认值的参数**（第 11 行）——写进心智模型。
- **参见**（只能从这 4 条页面路径里选 ≥3 条）：
  `../Campaign` · `../CampaignEventDispatcher` · `../../core-extra/MobilePartyHelper` · `../../core-extra/FactionHelper`

---

## 3. 页 2 · `RepairShipAction`

**文件**：`content/v1.5.3/zh/api/campaign/RepairShipAction.md`
**Source**（锚表已含）：`TaleWorlds.CampaignSystem/Actions/RepairShipAction.cs`（48 行）

**锚表**（来源：`tools/_verify/sig-c1/RepairShipAction.sig.txt`，只读脚本从源码生成，J13-bad=0，共 5 条）：

```
  10  public static class RepairShipAction
  13  private static void ApplyInternal(Ship ship, float newHitpoints, Settlement repairPort = null)
  21  public static void Apply(Ship ship, Settlement repairPort)
  33  public static void ApplyForFree(Ship ship)
  39  public static void ApplyForBanditShip(Ship ship)
```

- `**Type:**` 逐字写锚表第 10 行（即 `public static class RepairShipAction`）。
- 本页有 **3 个公开入口**（第 21 / 33 / 39 行）与 1 个内部实现（第 13 行）。
  三个入口的差别**只能从它们的参数与名字描述**（参数差异直接照锚表写；**不要从名字推断用途**）
  —— 请按源码读到的实际差别写，**不要推断「为什么」要这样设计**。
- **参见**（只能从这 4 条页面路径里选 ≥3 条）：
  `../Campaign` · `../../core-extra/ShipHelper` · `../../core-extra/PortStateHelper` · `../../core-extra/MobilePartyHelper`

---

## 4. 机器禁令（命中即 FAIL）

- 七节 H2 必须**恰好**是：`概述` / `心智模型` / `怎么用` / `关键成员` / `真实示例` / `参见` / `导航`
- markdown 链接**只允许**出现在 `## 参见` 与 `## 导航`；正文叙述里用反引号
- 正文（frontmatter 之后）> **2500 字节** · U+FFFD = 0 · ```` ```csharp ```` 代码块有效行 ≥ 3
- 禁止出现：`是 TaleWorlds.X 下的公开类型` · `阅读时先通过属性了解状态` · `型扩展点来理解` ·
  `SomeValue` · `null; // 替换` · `service = ...`
- 「关键成员」用途行禁止写成 `处理 X 相关逻辑。` / `获取 X 的当前值。` / `设置 X 的值。`

---

## 5. 判据（单页必须全绿；`J5R` 是批次级）

```
J3 bad=0 且 checked >= 关键成员行数 · ambiguous=0 · J13=0 · 裸引用 M+K=0
J1=0 · J2 missing=[] · J6=deep_pass · J8>2500B · J9≥3
J10=0 · J11=0 · J12=0 · tier=handwritten_deep
```

两页写完跑（`J5R` 同批跑时应为 0）：

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/campaign/GatherArmyAction.md content/v1.5.3/zh/api/campaign/RepairShipAction.md
```

**回报必须含**：①两页路径+字节数 ②每页关键成员行数 / 带行号行数 ③判分器**原始输出**（连 `ambiguous=` 一起贴）
④未确认事项 ⑤**示例里用到的每条 API 是否在本页锚表内**（表外的必须附核实命令与原始输出）
⑥**两个目标文件的 `stat -c '%s %y'` 输出**（证明它们真的落盘了）。
