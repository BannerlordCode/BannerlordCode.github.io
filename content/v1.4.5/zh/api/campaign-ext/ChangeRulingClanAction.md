---
title: "ChangeRulingClanAction"
description: "把某个王国（Kingdom）的「统治家族」换成另一个家族，并统一触发 RulingClanChanged 事件让装备、决议等下游系统同步的战役 Action。"
---
# ChangeRulingClanAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeRulingClanAction`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeRulingClanAction.cs`

## 概述

`ChangeRulingClanAction` 是 Bannerlord 战役层的一个 Action（事务入口）。它的全部职责浓缩为一句话：**把某个王国当前坐在王座上的家族，换成你指定的另一个家族，并通知世界其它系统这个变化已经发生。**

它体量很小——源码只有两个方法、几行逻辑——但它是“换国王”这件事的**唯一正规入口**。游戏里几乎所有换统治家族的场景走的都是它：王国领袖在战场上阵亡后推举新王、玩家在作弊菜单里把自家家族扶上王座、创建新王国时指定开国家族、旧版本存档升级时修正“两个王国共用一个统治家族”的脏数据等。

直接去写 `kingdom.RulingClan = someClan` 是可行的 C# 赋值，但你绕过了它发出的 `RulingClanChanged` 事件，下游系统（例如君主/旧君主的装备刷新）会和你手动改出来的状态脱节。

## 一句话职责

把一个王国“谁当统治家族（坐王座）”这件事，从旧家族切换到新家族，并让所有监听 `RulingClanChanged` 的系统一起更新——不要自己改字段，要改就走这个 Action。

## 心智模型

把 `ChangeRulingClanAction` 想成**“为王座换一把钥匙”**的原子操作，而不是一个状态对象：

- 它**没有实例**，全部通过静态方法 `Apply(...)` 调用；你也不需要（也不能）`new` 它。
- 它操作的对象是 **`Kingdom`**，不是 `Settlement`。它改变的是“王国由哪个家族统治”，而不是“某座城镇/城堡归谁所有”。一座王国的统治家族改变后，它的各个据点（城镇、城堡、村庄）并不会因此自动易主——据点的归属是 `Settlement.OwnerClan`，需要另外用 `ChangeOwnerOfSettlementAction` 去搬。
- 它做的事非常克制，且分两步走：
  1. 把 `Kingdom.RulingClan` 改成新家族（一次普通属性赋值，属性本身没有级联逻辑）；
  2. 通过 `CampaignEventDispatcher.Instance.OnRulingClanChanged(kingdom, ...)` 广播事件。
- 真正的“连锁反应”几乎都来自第 2 步的事件，而不是第 1 步的赋值。`NPCEquipmentsCampaignBehavior` 就订阅了 `RulingClanChanged`，会据此给新君主和旧君主重新分配君主/平民两套装备。其它 mod 也可以订阅同一事件来挂钩自己的逻辑。
- 正因为“广播事件”才是让世界保持一致的关键，所以**必须调用 `Apply`，绝不能只写 `kingdom.RulingClan = ...`**。直接改字段等于静默地改了世界状态却没人通知，存档再读档后、或依赖该事件的系统运行时会拿到过时/不一致的画面。
- 它**不**替你做这些事（调用方要自己负责）：把新家族加进王国、转移据点所有权、更新王国旗帜（`KingdomManager.AbdicateTheThrone` 里就是先手动换旗帜再调用本 Action）、向王国添加新君选举决议（`KingSelectionKingdomDecision`）。本 Action 只负责“换家族 + 发事件”这一原子动作。

## 何时用 / 何时不要用

**用 `ChangeRulingClanAction.Apply` 的场景：**
- 你想在战役地图上让某个王国的统治家族发生变化：领袖死亡后的继承、玩家通过决议/作弊登基、程序化创建新王国时指定开国家族、旧版本存档迁移时修复脏数据。
- 你希望这次变更被 `RulingClanChanged` 的全体订阅者（含原版装备行为、你自己的 mod）看到并做出反应。

**不要用 / 用错替代的场景：**
- **不要**写 `kingdom.RulingClan = myClan` 直接改字段。这跳过了事件广播，下游系统无法同步——这是坏档与状态脱节的常见来源。
- **不要**拿它去改“某座据点归谁”。据点归属走 [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)；本 Action 只动王国的统治家族，不碰任何 `Settlement.OwnerClan`。
- **不要**期望调用它之后据点、旗帜、王国决议会自动接管。这些都需要调用方另行处理或用其它 Action。
- 如果你只是想让一个家族加入/离开王国、或王国之间合并，应使用 [ChangeKingdomAction](../ChangeKingdomAction/)；如果想换的是家族自己的首领，用 [ChangeClanLeaderAction](../ChangeClanLeaderAction/)。

## 依赖图

- 上游：[Kingdom](../../campaign/Kingdom/)（被改写 `RulingClan` 的对象）、[Clan](../../campaign/Clan/)（新旧统治家族）。
- 下游/事件：通过 [CampaignEventDispatcher](../CampaignEventDispatcher/) 广播 `OnRulingClanChanged`，由 [CampaignEvents](../CampaignEvents/) 暴露给订阅者；原版 `NPCEquipmentsCampaignBehavior` 据此刷新君主装备。
- 相关 Action：[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)（据点易主）、[ChangeKingdomAction](../ChangeKingdomAction/)（家族进出王国）、[ChangeClanLeaderAction](../ChangeClanLeaderAction/)（换家族首领）、[DestroyKingdomAction](../DestroyKingdomAction/)（王国覆灭）、[KillCharacterAction](../KillCharacterAction/)（领袖死亡后触发换王）。
- 世界容器：[Campaign](../../campaign/Campaign/)（`Campaign.Current` 持有整个世界与 `Models`）。

## 风险与崩溃边界

- **传入不合法的家族**：`Apply` 本身**不做任何校验**。如果你传进一个不属于该王国 `Clans`、已被消灭（`IsEliminated`）、或正以雇佣兵身份服役（`IsUnderMercenaryService`）的家族，赋值会成功，但世界会出现“王国的统治家族却不是王国成员”的不一致状态，可能导致王国决议、`Kingdom.Leader` 计算、AI 外交判定出现异常，严重时表现为坏档或卡死。原版调用方在调用前都会用 `DiplomacyModel.IsClanEligibleToBecomeRuler(...)` 之类先做资格过滤。
- **事件参数语义随版本变化（最容易踩的坑）**：在 v1.3.0 / v1.3.15 中，`OnRulingClanChanged` 广播的第二个参数是**新**统治家族；但在 v1.4.5 中源码先保存旧家族、再赋值、最后广播**旧**统治家族。如果你写的 mod 订阅了 `RulingClanChanged` 并假设了某一版的参数含义，跨版本时逻辑会反。订阅者必须针对自己的目标版本明确“第二个参数是旧王还是新王”。
- **在 Mission 中调用**：这是战役层 Action，应在大地图（有效 `Campaign.Current`）上、于 `CampaignBehavior`/事件处理器里调用。在战斗 Mission 的 tick 里调用它会触发面向地图世界的事件，可能让装备刷新等行为在 Mission 进行中意外作用于 Agent 化身，造成状态错乱。
- **存档/升级阶段误用**：在加载旧版本存档、批量修正数据的阶段（如 `OnGameLoaded`/`OnGameLoadFinished`）调用是可以的，但你必须确认此时 `CampaignEventDispatcher` 与各项 `Models` 已就绪；在更早的初始化阶段调用可能因依赖未准备好而报错。
- **重复/递归触发**：少数调用链会在换王后又添加 `KingSelectionKingdomDecision` 等决议，决议再次当选又会回到本 Action。逻辑上要防止无限循环或把已经被消灭/移除的家族当作候选。

## 成员说明

### `public static void Apply(Kingdom kingdom, Clan clan)`

唯一的公开入口。把 `kingdom` 的统治家族换成 `clan`，并广播 `RulingClanChanged` 事件。

| 参数 | 类型 | 用途 | 副作用 / 注意 |
|------|------|------|--------------|
| `kingdom` | `Kingdom` | 要换统治家族的王国，不能为 `null`。 | 其 `RulingClan` 会被改写。 |
| `clan` | `Clan` | 将成为新统治家族的家族。 | **不校验**是否王国成员、是否已消灭或雇佣中；调用方需自行保证合法。 |

- **副作用**：①设置 `kingdom.RulingClan = clan`；②通过 `CampaignEventDispatcher.Instance.OnRulingClanChanged(kingdom, ...)` 通知所有订阅者（新/旧君主装备刷新等）。
- **何时调用**：任何需要在战役地图上更换王国统治家族的地方——领袖死亡继承、作弊登基、创建新王国指定开国家族、旧版本存档迁移修正脏数据。务必只从战役层（有效 `Campaign.Current`）调用。

```csharp
// 真实调用（与 CampaignCheats 同源）：让玩家家族登上当前阵营王座
Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && playerKingdom.RulingClan != Clan.PlayerClan)
    ChangeRulingClanAction.Apply(playerKingdom, Clan.PlayerClan);
```

### `private static void ApplyInternal(Kingdom kingdom, Clan clan)`

真正的实现，但**对 mod 不可见**（私有静态）。`Apply` 只是直接转发给它。它内部先取得旧统治家族（v1.4.5 会保存进局部变量 `rulingClan` 并作为事件第二参广播；v1.3.15/1.3.0 则直接广播传入的 `clan`），再赋值，再发事件。mod 不应也无法调用它；在此说明是为了让你理解 `Apply` 与事件广播之间的边界。

```csharp
// ApplyInternal 是私有实现；Apply 直接转发给它，mod 只能走公开入口：
//   ChangeRulingClanAction.Apply(kingdom, clan);
// 内部等价：保存旧统治家族 → kingdom.RulingClan = clan → 广播 OnRulingClanChanged
```

## 最小真实示例

### 示例 1：在 CampaignBehavior 中给玩家王国推选最强且合法的家族当新统治家族

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

// 在某个 CampaignBehaviorBase 的方法里（大地图、Campaign.Current 有效时）
Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && playerKingdom.RulingClan != Clan.PlayerClan)
{
    Clan newRuler = (from c in playerKingdom.Clans
                     where c != playerKingdom.RulingClan
                        && !c.IsUnderMercenaryService
                        && !c.IsEliminated
                        && Campaign.Current.Models.DiplomacyModel.IsClanEligibleToBecomeRuler(c)
                     orderby c.CurrentTotalStrength descending
                     select c).FirstOrDefault();
    if (newRuler != null)
    {
        ChangeRulingClanAction.Apply(playerKingdom, newRuler);
    }
}
```

> 这段模式直接对应原版 `ClanVariablesCampaignBehavior` 与 `KillCharacterAction` 中的真实调用：先按资格与实力筛选候选家族，确认非空后再 `Apply`。

### 示例 2：作弊/调试时让玩家家族直接登上当前阵营的王座

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Kingdom kingdom = Hero.MainHero.MapFaction as Kingdom;
if (kingdom != null)
{
    ChangeRulingClanAction.Apply(kingdom, Clan.PlayerClan);
}
```

> 与 `CampaignCheats` 中“让玩家家族成为统治家族”的作弊实现同构；`MapFaction as Kingdom` 把主角当前阵营安全地转成王国类型。

## 跨版本提示

- v1.3.0 / v1.3.15：`ApplyInternal` 广播 `OnRulingClanChanged(kingdom, clan)`，第二参是**新**统治家族。
- v1.4.5：`ApplyInternal` 先保存旧家族 `rulingClan = kingdom.RulingClan`，赋值后再广播 `OnRulingClanChanged(kingdom, rulingClan)`，第二参是**旧**统治家族。订阅 `RulingClanChanged` 的 mod 必须按目标版本区分参数语义。
- 三个版本公开签名均为 `public static void Apply(Kingdom kingdom, Clan clan)`，调用方式不变。

## 导航

- ↑ 父级：[campaign-ext 动作索引](../)
- ↔ 同级：[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) · [ChangeKingdomAction](../ChangeKingdomAction/) · [ChangeClanLeaderAction](../ChangeClanLeaderAction/) · [DestroyKingdomAction](../DestroyKingdomAction/) · [KillCharacterAction](../KillCharacterAction/) · [GiveGoldAction](../GiveGoldAction/)
- 相关类：[Kingdom](../../campaign/Kingdom/) · [Clan](../../campaign/Clan/) · [Settlement](../../campaign/Settlement/) · [Campaign](../../campaign/Campaign/) · [CampaignEvents](../CampaignEvents/) · [CampaignEventDispatcher](../CampaignEventDispatcher/)
