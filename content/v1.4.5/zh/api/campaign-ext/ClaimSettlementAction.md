---
title: "ClaimSettlementAction"
description: "战役中记录对某据点的主权主张，并把主张方与原所有者首领之间的个人关系降低（-50，非势力家族再 -20）的官方入口；它不真正改变据点归属。"
---

# ClaimSettlementAction

**Namespace：** `TaleWorlds.CampaignSystem.Actions`  
**Module：** `TaleWorlds.CampaignSystem`  
**Type：** `public static class ClaimSettlementAction`  
**Base：** 无（静态类）  
**源文件：** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ClaimSettlementAction.cs`

## 一句话职责

在战役里为某位英雄对某座据点登记一项“主权主张”，并对该据点当前所有者家族首领施加个人关系惩罚；它只影响关系，并不真正把据点改判给主张方。

## 概述

`ClaimSettlementAction` 是战役层（Campaign）一个很薄的 `*Action` 入口，用来表达“某家族/某英雄主张（claim）某座城镇、城堡或村庄”这一语义。整个类只有一个公开方法 `Apply`，内部逻辑非常简单——它不创建据点、不转移归属、不写存档字段，而是把主张方与据点当前所有者家族首领之间的**个人关系**调低。

游戏本体在 `BackstoryCampaignBehavior.OnNewGameCreated` 里就用了它：开局讲一段历史背景时，让某位领主（如 `lord_4_16`）主张某座城（如 `town_V6`），在写入一条 `SettlementClaimedLogEntry` 历史日志之后，调用 `ClaimSettlementAction.Apply(claimant, settlement)` 让主张方与原城主结怨。

理解这个 Action 最重要的一点：**它只降关系，不换主人**。真正发生所有权转移（把 `Settlement.OwnerClan` 改掉、重算忠诚/叛乱/驻军）是另一套机制的职责，见下方依赖图中的 `ChangeOwnerOfSettlementAction`。

## 心智模型

把它当成**“主张据点 → 与原城主结怨”的关系扳机**，而不是“夺取据点”的动作：

- **所在层**：Campaign 数据层，不是 Mission/场景层。它在战役对象（`Hero`、`Clan`、`Settlement`）上工作，可安全地在行为（Behavior）、任务（Quest）、对话脚本或 `OnNewGameCreated` 里调用；不要在战斗场景的 `Mission` 作用域里调用。
- **它真正改写的战役状态**：`claimant` 与 `claimedSettlement.OwnerClan.Leader` 之间的个人关系值（通过 `ChangeRelationAction` 落库），仅此而已。据点的 `OwnerClan`、忠诚度、驻军、叛乱进度都不变。
- **Apply / ApplyInternal 契约**：公开的 `Apply` 是一个“薄壳”，只负责把参数转交给私有的 `ApplyInternal`，后者再调用私有的 `ImpactRelations`。这种公开壳 + 私有实现的拆分是为了让引擎以后能在 `ApplyInternal` 里追加日志、事件或副作用，而所有调用方（包括你的 mod）无需改动。你只调用 `Apply`，绝不要自己复制它的 −50/−20 逻辑去直接戳 `Hero` 的关系字段。
- **为什么要走 Apply 而不是直接改字段**：关系变化应当经由 `ChangeRelationAction`（本 Action 内部正是委托给它），这样关系模型才会做范围钳制、记录 `ChangeRelationDetail`、向亲属传播并广播关系变化事件。手动给 `Hero` 的关系字段加减整数会绕过所有这些，导致事件、日志、外交判定不一致。
- **它不做什么**：不修改 `Settlement.OwnerClan`，不触发忠诚/叛乱重算，不发布“据点易主”事件。需要真正易主时另有入口（见依赖图）。

## 何时用 / 何时不要用

**适合用 `ClaimSettlementAction.Apply`：**
- 你的任务、行为或事件需要表达“某家族/英雄主张某座城”，并因此与当前所有者结怨（关系下降）。
- 你只想对主张行为做“叙事 + 关系后果”，并不打算立刻夺取该据点。

**不要用，或换正确入口：**
- 想**真正夺取据点**：本 Action 只降关系，不会改归属。需要用所有权转移入口（见 `ChangeOwnerOfSettlementAction`）。
- 切勿直接写 `settlement.OwnerClan = claimant.Clan` 或 `someHero.SetPersonalRelation(...)` 来“模拟”主张/易主：直接写字段会绕过忠诚度、叛乱、驻军、外交与存档重算，极易产生坏档或逻辑错乱。主张关系也请走 `Apply`，而不是手动调 `ChangeRelationAction` 去拼 −50/−20。
- 若只是想调整两位英雄之间的普通关系（与据点无关），直接用 `ChangeRelationAction`，无需套这层“据点主张”语义。

## 依赖图

`ClaimSettlementAction` 自身只持有逻辑，真正读写的对象都在它上下游：

- 上游类型（被读取）：
  - [`Settlement`](../../campaign/Settlement/) — 被主张的据点；Action 读取其 `OwnerClan` 与 `OwnerClan.Leader`。
  - [`Clan`](../../campaign/Clan/) — 据点的当前所有者家族；Action 读取其 `Leader` 与 `IsMapFaction`。
  - [`Hero`](../../campaign/Hero/) — `claimant` 与原所有者 `Leader`；关系变化作用在两者身上。
  - [`Town`](../../campaign/Town/) — 当被主张的是城镇时，其 `Town` 组件提供据点上下文（本 Action 不直接用它，但你通常需要判断据点种类）。
- 下游 / 委托：
  - [`ChangeRelationAction`](../ChangeRelationAction/) — 本 Action 内部唯一真正落地关系变化的引擎；`Apply` 最终调用它来降低关系。
  - [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction/) — 若你同时还要真正转移据点归属，用这个而不是本 Action。
- 运行环境：
  - [`Campaign`](../../campaign/Campaign/) — `Campaign.Current` 提供整个战役世界；本 Action 是 Campaign 层代码，必须在战役初始化完成后调用。
- 父级索引：[战役扩展动作目录](../)

## 风险与边界

1. **空引用（NRE）风险**：`Apply` 内部直接读取 `claimedSettlement.OwnerClan.Leader`。若据点尚未分配所有者（`OwnerClan == null`，例如某些叛乱中/初始化前的据点），或 `OwnerClan.Leader == null`，会抛空引用异常。调用前务必用 `settlement.OwnerClan != null && settlement.OwnerClan.Leader != null` 守卫。引擎源码中 `Settlement.OwnerClan` 也自带 `null` 判断，说明它确实可能为 `null`。
2. **它不转移归属**：不要在调用 `Apply` 后假设据点已归主张方所有。`Apply` 只降关系；真正易主是别的机制。若你的玩法需要“主张成功后夺城”，需另行触发所有权转移。
3. **调用时机**：这是 Campaign 层代码。在战役对象尚未初始化时（例如 `MBSubModuleBase` 启动过早、或 `Mission` 场景作用域内）调用可能命中空对象。只在行为、任务、对话脚本或 `OnNewGameCreated` 等战役已就绪的上下文里调用。
4. **重复调用会叠加惩罚**：每次 `Apply` 都会把完整的 −50（及可能的 −20）再施加一次，内部没有去重。若放在每帧/每 tick 的逻辑里会持续刷低关系直至触底。用标志位或任务状态保证“同一主张只发起一次”。
5. **存档与重算**：关系变化随 `Hero` 状态进入存档，立即生效且不会因后续所有权变化自动回撤。本 Action **不**直接修改忠诚度/叛乱进度——这些由独立的忠诚模型驱动，降关系只是间接的紧张因素之一，不要把它当成“触发叛乱”的开关。
6. **绕过风险**：手动改 `Settlement.OwnerClan` 或 `Hero` 关系字段来模拟主张/易主，会跳过关系模型钳制、亲属传播、事件广播与忠诚/叛乱/外交重算，是典型坏档来源。

## 成员说明

### `public static void Apply(Hero claimant, Settlement claimedSettlement)`

- **用途**：登记“`claimant` 主张 `claimedSettlement`”这一行为，并对据点当前所有者家族首领施加关系惩罚。这是 mod 唯一应当调用的公开入口。
- **副作用**：通过 `ChangeRelationAction` 把 `claimant` 与 `claimedSettlement.OwnerClan.Leader` 的个人关系降低 **−50**；若所有者家族不是地图势力（`!OwnerClan.IsMapFaction`，即非王国所属的独立家族）再额外 **−20**。仅此，不改动归属、忠诚或驻军。
- **何时调用**：在战役行为、任务脚本、对话逻辑或 `OnNewGameCreated` 中，当你需要让某位英雄因主张据点而与原城主结怨时。调用前确保 `claimedSettlement.OwnerClan` 与其 `Leader` 均不为 `null`。

### `private static void ApplyInternal(Hero claimant, Settlement claimedSettlement)`

- **用途**：`Apply` 的私有实现体（薄转发层）。当前仅调用 `ImpactRelations`；其存在是为了让引擎日后在不破坏调用方签名的前提下，向主张流程追加日志、事件或额外副作用。
- **副作用**：无直接副作用，全部委托给 `ImpactRelations`。
- **何时调用**：mod 不应直接调用；永远走公开的 `Apply`。

### `private static void ImpactRelations(Hero claimant, Settlement claimedSettlement)`

- **用途**：真正执行关系惩罚的私有辅助方法。判断 `OwnerClan.Leader != null` 后，调用 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes(claimant, ownerLeader, -50, showQuickNotification: false)`；若 `!OwnerClan.IsMapFaction` 再补一次 `-20`（同样不弹快速通知）。
- **副作用**：以静默方式（不显示快速通知）降低两段关系值；数值落在 `ChangeRelationAction` 的关系模型里。
- **何时调用**：由 `ApplyInternal` 内部调用，mod 不直接调用。

## 最小真实示例

### 示例 1：在行为/任务中让玩家家族主张一座不属于自己的城镇

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

// 在某个 CampaignBehavior 的事件回调或任务逻辑里
Settlement town = Settlement.Find("town_V6");
Hero claimant = Hero.MainHero;
if (town != null
    && town.OwnerClan != null
    && town.OwnerClan.Leader != null
    && town.OwnerClan != claimant.Clan)
{
    // 登记主权主张，并把主张方与原城主的关系降低
    ClaimSettlementAction.Apply(claimant, town);
}
```

### 示例 2：复刻引擎自身的开局背景用法（OnNewGameCreated）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

// 在 BackstoryCampaignBehavior.OnNewGameCreated 中，游戏用一段历史背景让某领主主张某城
Settlement settlement = Game.Current.ObjectManager.GetObject<Settlement>("town_V6");
Hero claimant = Game.Current.ObjectManager.GetObject<CharacterObject>("lord_4_16").HeroObject;
if (settlement != null && settlement.OwnerClan != null)
{
    // 先写入历史日志，再施加关系惩罚（与引擎一致）
    ClaimSettlementAction.Apply(claimant, settlement);
}
```

## 跨版本提示

- 本页以 `bannerlord-1.4.5` 源码为权威参考；公开入口 `Apply(Hero claimant, Settlement claimedSettlement)` 与“主张即降关系”的语义在 v1.3.15 同样适用，签名一致。
- 跨版本 mod 不要依赖 `ApplyInternal` / `ImpactRelations` 等私有成员，它们的实现可能在补丁间变化；只依赖公开的 `Apply`。

## 导航

- ↑ 父级：[战役扩展动作目录](../)
- ↔ 同级：[ChangeClanInfluenceAction](../ChangeClanInfluenceAction/) · [ChangeGovernorAction](../ChangeGovernorAction/) · [ChangeVillageStateAction](../ChangeVillageStateAction/)
- 相关类：[Settlement](../../campaign/Settlement/) · [Clan](../../campaign/Clan/) · [Hero](../../campaign/Hero/) · [Town](../../campaign/Town/) · [ChangeRelationAction](../ChangeRelationAction/) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)
