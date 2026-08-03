---
title: "MapEvent"
description: "战役地图上一次遭遇战的状态与结算边界：连接攻守双方、据点、模拟战斗、玩家遭遇菜单与 MapEventStarted/Ended 事件。"
---
# MapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class MapEvent : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## 概述

`MapEvent` 是战役地图上一次遭遇战的**持久状态容器与结算边界**。它把攻击方、守方、参战部队、遭遇类型、战斗模拟状态和结算结果绑在同一个对象上；它不是 Mission 场景里的 `Agent` 集合，也不是围城本身。围城突击、出城、掠袭、野战和海战都可能表现为不同 `BattleTypes` 的 `MapEvent`，之后才可能创建一个任务场景来表现玩家实际操作的那一场战斗。

## 心智模型

把它理解为**“战役层的一张战斗账本”**：

- **创建与持有**：`MapEventManager` 以及 `FieldBattleEventComponent`、`RaidEventComponent`、围城相关组件创建并登记实例；`MobileParty.MapEvent`、据点的 `Party.MapEvent` 和 `MapEvent.PlayerMapEvent` 是常用反向入口。mod 不应绕过 manager 自己 `new MapEvent()`，因为构造和 `Initialize` 是内部生命周期。
- **生命周期**：组件创建并初始化攻守双方 → `CampaignEvents.MapEventStarted` 通知行为 → manager 的战役 tick 调用 `Update`，推进模拟或等待玩家 → 结算结果、战利品、俘虏与部队位置被提交 → `FinalizeEvent()` 标记等待移除并触发 `MapEventEnded` → `MapEventManager` 在后续 tick 从列表移除。
- **分层**：它位于 Campaign 地图层；`MapEventComponent` 提供野战、掠袭、围城等特化规则，`PlayerEncounter` 把玩家遭遇转成菜单/任务入口，真正进场后才由 `Mission` 与 `Agent` 负责场景内战斗。
- **何时用**：在 `MapEventStarted/Ended` 事件中记录或调整战役层后果；读取参战方、攻守侧、遭遇类型、人数和结算状态；判断玩家是否正处于某种地图遭遇。
- **何时不要用**：不要用它查场景中的单个 `Agent`，不要在 `MapEvent` 外部手动调用 `Update`/模拟轮次，也不要用它代替 `SiegeEvent` 管理持续围城。需要结束遭遇时，应让原版遭遇/结算流程调用 `FinalizeEvent()`，不要直接清除部队上的引用。

## 依赖图

### 上游（创建与生命周期）

- [MapEventManager](../MapEventManager/) 保存 `MBList<MapEvent>`，登记新事件、逐 tick 更新并移除 `IsFinalized` 的事件。
- [MapEventComponent](../MapEventComponent/) 为野战、掠袭、围城等遭遇提供具体的模拟上下文和结果钩子。
- [MobileParty](../../campaign/MobileParty/) 与 [PartyBase](../../campaign/PartyBase/) 提供攻守方、地图位置和部队的 `MapEvent` 反向引用。
- [Settlement](../../campaign/Settlement/) 是攻城、掠袭和据点战的关联据点；没有据点的野战其 `MapEventSettlement` 可以为 `null`。

### 下游（观察与表现）

- [CampaignEvents](../CampaignEvents/) 的 `MapEventStarted` / `MapEventEnded` 将开始和结束通知给 [CampaignBehaviorBase](../CampaignBehaviorBase/) 派生行为。
- [PlayerEncounter](../PlayerEncounter/) 把玩家遭遇接到菜单、模拟战或任务入口；不要在这个层级直接操控 `Agent`。
- [Mission](../../mission/Mission/) 与 [Agent](../../mission/Agent/) 只负责进入场景后的实时战斗，不能替代 `MapEvent` 的战役结算。
- [SiegeEvent](../SiegeEvent/) 持续管理围城战略状态；突击/出城只是围城期间产生的 `MapEvent`。

### 存档边界

`MapEvent` 由 `MapEventManager` 收集，攻守侧、遭遇类型、位置和结算状态使用保存系统定义序列化。事件结束后仍缓存 `MapEvent` 或 `MapEventParty` 引用，可能得到等待移除或已清理的对象；需要长期保存的 mod 数据应保存稳定的部队/英雄 id，而不是保存事件实例本身。

## 关键成员

### 识别当前遭遇

- `PlayerMapEvent`：返回 `MobileParty.MainParty?.MapEvent`，玩家没有处于地图遭遇时为 `null`。
- `EventType` 与 `IsFieldBattle`、`IsRaid`、`IsSiegeAssault`、`IsSallyOut`、`IsHideoutBattle`、`IsBlockade`：区分战役规则；优先使用这些语义属性，而不是自行猜测 `MapEventComponent` 的具体类型。
- `MapEventSettlement`、`Position`、`BattleStartTime`：分别表示关联据点（可能为空）、战斗位置和地图战斗开始时刻。

### 读取攻守与结果

- `AttackerSide` / `DefenderSide`：两侧的 `MapEventSide`；侧内的 `Parties` 才是参战的 `MapEventParty` 集合。
- `PlayerSide`、`GetMapEventSide(BattleSideEnum)`、`PartiesOnSide(BattleSideEnum)`：按玩家或枚举侧读取统一的数据入口。
- `InvolvedParties`、`GetNumberOfInvolvedMen()`、`GetLeaderParty(BattleSideEnum)`：用于统计和显示，不会创建新的参战方。
- `BattleState`、`HasWinner`、`WinningSide`、`DefeatedSide`、`IsFinalized`：表示结算进度。`HasWinner` 为真不等于事件已经从 manager 移除；还要区分 `IsFinalized`。

### 会改变流程的入口

- `BeginWait()`：玩家遭遇菜单选择等待/继续时使用，交回战役 tick 推进；不是通用的“跳过战斗”方法。
- `SetOverrideWinner(BattleSideEnum)`：原版菜单在明确允许作弊/特殊结算时设置胜方；mod 直接调用会跳过正常伤亡、战利品和关系后果，必须有明确的结算策略。
- `FinalizeEvent()`：提交并结束地图事件。它会影响部队位置、战利品、事件通知和 manager 清理，不能在外部把 `MobileParty.MapEvent` 直接设为 `null`。
- `SimulateBattleSetup(...)` / `SimulateBattleRound(...)`：为模拟战斗使用的内部状态入口；应让 `PlayerEncounter`/原版模拟流程驱动，而不是在每日 tick 里重复调用。

## 风险段

- **事件生命周期悬挂**：`MapEventEnded` 之后继续读 `MapEventSide`、`MapEventParty` 或把它存到自定义长期字段，会引用等待移除的战斗账本。只保存稳定的 `PartyBase`/`Hero` id，并在事件结束时释放临时引用。
- **错层操作**：在 Campaign tick 中修改 `Agent`，或在 Mission 结束后仍用 `MapEvent` 推断场景内 Agent 状态，会把两个生命周期混在一起。场景逻辑放进 `MissionBehavior`，地图结算逻辑订阅 `CampaignEvents`。
- **重复结算**：手动调用 `FinalizeEvent()`、`SetOverrideWinner()` 或模拟轮次可能与 `MapEventManager.Tick`、`PlayerEncounter` 同时运行，造成重复战利品、错误伤亡或 `MapEventEnded` 被多次触达。先确认当前状态和调用方，再让原版唯一流程完成结算。
- **围城状态破坏**：`IsSiegeAssault`/`IsSallyOut` 只描述这一次战斗，不代表围城已结束。围城战略状态仍由 [SiegeEvent](../SiegeEvent/) 持有；不要因一场突击结束就清除 `Settlement.SiegeEvent`。
- **空引用**：野战没有关联据点时 `MapEventSettlement` 为 `null`；玩家未进入遭遇时 `PlayerMapEvent` 为 `null`；结束后 `IsFinalized` 可能已经为真。所有读取都应先判定这些边界。

## 真实示例

### 示例 1：从玩家入口读取双方和遭遇类型

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent == null || mapEvent.IsFinalized)
{
    return;
}

MapEventSide playerSide = mapEvent.GetMapEventSide(mapEvent.PlayerSide);
PartyBase opponentLeader = mapEvent.GetLeaderParty(
    mapEvent.PlayerSide == BattleSideEnum.Attacker
        ? BattleSideEnum.Defender
        : BattleSideEnum.Attacker);

InformationManager.DisplayMessage(new InformationMessage(
    $"{mapEvent.EventType}: {mapEvent.GetNumberOfInvolvedMen()} men, " +
    $"player side {playerSide.MissionSide}, opponent {opponentLeader?.Name}"));
```

### 示例 2：在战役行为中观察开始/结束，而不是轮询并手动驱动

```csharp
public override void RegisterEvents()
{
    CampaignEvents.MapEventStarted.AddNonSerializedListener(
        this, OnMapEventStarted);
    CampaignEvents.MapEventEnded.AddNonSerializedListener(
        this, OnMapEventEnded);
}

private void OnMapEventStarted(
    MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)
{
    if (mapEvent.IsRaid && mapEvent.MapEventSettlement != null)
    {
        // 记录稳定的据点 id，不保存 mapEvent 实例作为长期状态。
        string settlementId = mapEvent.MapEventSettlement.StringId;
    }
}

private void OnMapEventEnded(MapEvent mapEvent)
{
    bool endedWithWinner = mapEvent.HasWinner;
    // 在通知期间读取结果，随后释放对 mapEvent 的临时引用。
}
```

## 跨版本提示

- v1.3.0 与 v1.3.15 都把 `MapEvent` 放在 `TaleWorlds.CampaignSystem.MapEvents`，但海上遭遇相关 `BattleTypes` 和若干组件依赖随版本增加；不要在 1.3.0 代码中假定 1.4.5 的海战分支存在。
- v1.4.5 的 `MapEventManager` 明确把 finalized 事件延迟到后续 tick 移除；mod 不应依赖“调用 `FinalizeEvent` 后列表立即没有对象”的实现细节。
- 结算入口和 `CampaignEvents.MapEventStarted/Ended` 的语义比具体内部字段稳定；跨版本 mod 应优先依赖这些公开事件和语义属性。

## 参见 / 导航

- ↑ 父级：[campaign-ext 模块索引](../) · [API 总索引](../../)
- ↔ 同级：[MapEventManager](../MapEventManager/) · [MapEventComponent](../MapEventComponent/) · [CampaignEvents](../CampaignEvents/) · [PlayerEncounter](../PlayerEncounter/)
- 相关层：[MobileParty](../../campaign/MobileParty/) · [PartyBase](../../campaign/PartyBase/) · [Settlement](../../campaign/Settlement/) · [Mission](../../mission/Mission/) · [Agent](../../mission/Agent/) · [SiegeEvent](../SiegeEvent/)
