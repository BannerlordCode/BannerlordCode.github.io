---
title: "MapEvent"
description: "地图遭遇战：状态机 + 双方名册 + 组件容器，承载野战、劫掠、围城、据点战、封锁与海战，由 MapEventManager 创建与调度。"
---
# MapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class MapEvent : MBObjectBase`
**Source:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`MapEvent` 是战役地图上**一切遭遇战的统一抽象**：野战、劫掠、围城、突围、据点战、封锁、海战都是它。它在 `MapEvent.cs:24` 声明为 `public sealed class MapEvent : MBObjectBase`，全文 2,771 行。

它的设计是三层：**状态机**（`State`：`Begin` → `Wait` → `WaitingRemoval`）控制战斗生命周期；**双方名册**（`AttackerSide` / `DefenderSide`，各持一组 `MapEventParty`）管理参战部队与伤亡；**组件容器**（`Component`，`MapEventComponent` 的派生类）承载不同战斗类型的玩法差异——劫掠的洗劫、围城的攻城阶段、据点战的波次，全在组件里。

## 心智模型

**把 `MapEvent` 想成「状态机 + 双方名册 + 组件容器」的三层结构。**

**第一，状态机只有三档。** `MapEventState` 枚举是 `Begin` / `Wait` / `WaitingRemoval`。`State`（`MapEvent.cs:198`）的 setter 是 private，外部只能读；`IsFinalized`（`MapEvent.cs:475`）就是 `State == WaitingRemoval`。战斗创建后进入 `Wait`，由 `MapEventManager` 每帧驱动内部 `Update`（不在锚点表，不引用行号）推进模拟，终局时 `FinalizeEvent`（`MapEvent.cs:2367`）收尾。

**第二，双方名册是核心数据结构。** `_sides[0]` 是防守方、`_sides[1]` 是进攻方——**注意索引与攻防的对应关系是反的**。`AttackerSide`（`MapEvent.cs:219`）返回 `_sides[1]`，`DefenderSide`（`MapEvent.cs:229`）返回 `_sides[0]`。要按 `BattleSideEnum` 取方用 `GetMapEventSide(BattleSideEnum)`（`MapEvent.cs:238`），它直接做 `(int)side` 索引。每方的参战部队列表是 `PartiesOnSide(BattleSideEnum)`（`MapEvent.cs:244`）。

**第三，组件容器承载玩法差异。** `Component`（`MapEvent.cs:193`）是 `MapEventComponent` 的派生实例：`FieldBattleEventComponent`（野战）、`RaidEventComponent`（劫掠）、`HideoutEventComponent`（据点战）、`SiegeAmbushEventComponent`（围城伏击）、`ForceSuppliesEventComponent`（强征粮草）、`ForceVolunteersEventComponent`（强征志愿兵）。`IsSiegeAmbush`（`MapEvent.cs:459`）就是靠 `Component is SiegeAmbushEventComponent` 判断的。**改战斗玩法去改组件，不要改 `MapEvent` 本身。**

**第四，玩家入口是静态属性。** `PlayerMapEvent`（`MapEvent.cs:161`）返回主力队所在的地图事件（主力队不在战斗中时为 null）；`IsPlayerMapEvent`（`MapEvent.cs:726`）判断「这场战斗玩家在场」；`PlayerSide`（`MapEvent.cs:176`）给玩家方。**mod 要响应「玩家正在打这场仗」，订阅 `CampaignEvents` 的 `MapEventStarted` / `MapEventEnded`，再用 `IsPlayerMapEvent` 过滤。**

**第五，伤亡与结果不要直接改。** 战斗结果由模拟流程写入 `BattleState`（`MapEvent.cs:737`，internal setter），外部读 `HasWinner`（`MapEvent.cs:495`）、`WinningSide`（`MapEvent.cs:762`）、`Winner`（`MapEvent.cs:780`）、`DefeatedSide`（`MapEvent.cs:870`）。要强制胜负用 `SetOverrideWinner`（`MapEvent.cs:1296`）或 `SetDefenderPulledBack`（`MapEvent.cs:1302`）；要手动结束用 `FinalizeEvent`（`MapEvent.cs:2367`）。**直接改 `BattleState` 或名册会绕过结算逻辑，导致状态不一致。**

## 怎么用

### 怎么拿到

```csharp
// 玩家当前所在的地图事件（不在战斗中为 null）
MapEvent current = MapEvent.PlayerMapEvent;

// 判断某场战斗玩家是否在场
if (mapEvent.IsPlayerMapEvent)
{
    BattleSideEnum mySide = MapEvent.PlayerSide;
}
```

### 典型用法

```csharp
// 读战斗状态
bool over = mapEvent.HasWinner;                       // MapEvent.cs:495
BattleSideEnum winner = mapEvent.WinningSide;         // MapEvent.cs:762
bool playerSim = mapEvent.IsPlayerSimulation;         // MapEvent.cs:507

// 取某方的参战部队
MBReadOnlyList<MapEventParty> defenders = mapEvent.PartiesOnSide(BattleSideEnum.Defender); // MapEvent.cs:244
MapEventSide attackerSide = mapEvent.GetMapEventSide(BattleSideEnum.Attacker);             // MapEvent.cs:238

// 强制胜负（任务/脚本用）
mapEvent.SetOverrideWinner(BattleSideEnum.Attacker);  // MapEvent.cs:1296
```

### 坑

- **`_sides` 索引与攻防相反**：`_sides[0]` 是 `DefenderSide`、`_sides[1]` 是 `AttackerSide`。永远用 `GetMapEventSide(BattleSideEnum)` 而不是自己索引数组。
- **`BattleState` 的 setter 是 internal**（`MapEvent.cs:737`）。mod 不能直接改战斗结果，用 `SetOverrideWinner` / `SetDefenderPulledBack` / `FinalizeEvent`。
- **`IsPlayerSimulation`（`MapEvent.cs:507`）为 true 时玩家不在场**——战斗是 AI 自动模拟的。此时改战斗结果不会影响玩家体验，但会影响结算。
- **`MapEventSettlement`（`MapEvent.cs:273`）可能为 null**：野战没有关联定居点。访问前判空。
- **`RetreatingSide`（`MapEvent.cs:279`）与 `PursuitRoundNumber`（`MapEvent.cs:295`）**：追击轮次归零时 `EndedByRetreat`（`MapEvent.cs:283`）为 true。追击中的战斗不要当普通战斗处理。
- **`Position`（`MapEvent.cs:329`）是 `CampaignVec2`**，海战时 `IsNavalMapEvent`（`MapEvent.cs:517`）为 true（`!Position.IsOnLand`）。

## 关键成员

取舍判据：2,771 行的类，公开成员也超过 70 个。按「状态机 / 双方名册 / 战斗类型判定 / 结果与结算 / 模拟控制 / 其他」六组写；**纯内部模拟方法（`SimulateSingleTroopHit`、`TickBattleSimulation` 等）与组件派生类的细节从略**——它们不是 mod 直接调用的面。

### 状态机与标识

| 成员 | 用途 |
| --- | --- |
| `State`（`MapEvent.cs:198`） | 战斗状态（`MapEventState`：`Begin`/`Wait`/`WaitingRemoval`）。private setter，外部只读 |
| `IsFinalized`（`MapEvent.cs:475`） | 是否已收尾（`State == WaitingRemoval`） |
| `IsPlayerMapEvent`（`MapEvent.cs:726`） | 玩家主力队是否在这场战斗中 |
| `PlayerMapEvent`（`MapEvent.cs:161`） | 静态属性：玩家当前所在的地图事件，不在战斗时为 null |
| `PlayerSide`（`MapEvent.cs:176`） | 静态属性：玩家所在方（`BattleSideEnum`） |
| `BattleStartTime`（`MapEvent.cs:485`） | 战斗开始时间 |
| `UpdateCount`（`MapEvent.cs:299`） | 已进行的模拟轮数（= `WonRounds.Count`） |
| `IsVisible`（`MapEvent.cs:655`） | 战斗在地图上是否可见 |
| `IsInvulnerable`（`MapEvent.cs:355`） | 是否无敌（任务保护用） |

### 双方名册

| 成员 | 用途 |
| --- | --- |
| `AttackerSide`（`MapEvent.cs:219`） | 进攻方（`_sides[1]`） |
| `DefenderSide`（`MapEvent.cs:229`） | 防守方（`_sides[0]`） |
| `GetMapEventSide(BattleSideEnum)`（`MapEvent.cs:238`） | 按方枚举取 `MapEventSide`，**这是唯一正确的取方方式** |
| `PartiesOnSide(BattleSideEnum)`（`MapEvent.cs:244`） | 某方的参战部队列表（`MBReadOnlyList<MapEventParty>`） |
| `InvolvedParties`（`MapEvent.cs:251`） | 双方所有参战 `PartyBase` 的枚举 |
| `GetLeaderParty(BattleSideEnum)`（`MapEvent.cs:1667`） | 某方的领袖部队 |
| `GetOtherSide(BattleSideEnum)`（`MapEvent.cs:1649`） | 取对立方的枚举 |
| `HasTroopsOnBothSides()`（`MapEvent.cs:1659`） | 双方是否都还有兵 |
| `GetNumberOfInvolvedMen()` / `GetNumberOfInvolvedMen(BattleSideEnum)`（`MapEvent.cs:1637` / `MapEvent.cs:1643`） | 参战总人数 / 某方人数 |
| `CanPartyJoinBattle(PartyBase, BattleSideEnum)`（`MapEvent.cs:1711`） | 某部队能否加入某方 |
| `GetStrengthsRelativeToParty(BattleSideEnum, out float, out float)`（`MapEvent.cs:1717`） | 取某方与对方的相对实力 |
| `StrengthOfSide`（`MapEvent.cs:2687`） | 双方实力数组（`float[2]`，索引同 `_sides`） |

### 战斗类型判定

`EventType`（`MapEvent.cs:333`）返回 `MapEvent.BattleTypes` 枚举（定义在 `MapEvent.cs:2712`）。以下谓词都是对它的封装：

| 成员 | 用途 |
| --- | --- |
| `IsFieldBattle`（`MapEvent.cs:359`） | 是否野战 |
| `IsRaid`（`MapEvent.cs:369`） | 是否劫掠 |
| `IsSiegeAssault`（`MapEvent.cs:399`） | 是否围城攻城 |
| `IsHideoutBattle`（`MapEvent.cs:409`） | 是否据点战 |
| `IsSallyOut`（`MapEvent.cs:419`） | 是否突围 |
| `IsSiegeOutside`（`MapEvent.cs:429`） | 是否围城外围战 |
| `IsBlockade`（`MapEvent.cs:439`） | 是否封锁 |
| `IsBlockadeSallyOut`（`MapEvent.cs:449`） | 是否封锁突围 |
| `IsSiegeAmbush`（`MapEvent.cs:459`） | 是否围城伏击（靠组件类型判断） |
| `IsForcingVolunteers`（`MapEvent.cs:379`） | 是否强征志愿兵 |
| `IsForcingSupplies`（`MapEvent.cs:389`） | 是否强征粮草 |
| `IsNavalMapEvent`（`MapEvent.cs:517`） | 是否海战（`!Position.IsOnLand`） |

### 结果与结算

| 成员 | 用途 |
| --- | --- |
| `BattleState`（`MapEvent.cs:737`） | 战斗结果（`BattleState`：`None`/`AttackerVictory`/`DefenderVictory`/`DefenderPullBack`）。internal setter |
| `HasWinner`（`MapEvent.cs:495`） | 是否已分出胜负 |
| `WinningSide`（`MapEvent.cs:762`） | 胜利方枚举，未分胜负时为 `None` |
| `Winner`（`MapEvent.cs:780`） | 胜利方的 `MapEventSide`，未分胜负时为 null |
| `DefeatedSide`（`MapEvent.cs:870`） | 败方枚举 |
| `WonRounds`（`MapEvent.cs:513`） | 已赢轮次列表（`MBList<BattleSideEnum>`） |
| `RetreatingSide`（`MapEvent.cs:279`） | 正在撤退的一方，无撤退时为 `None` |
| `PursuitRoundNumber`（`MapEvent.cs:295`） | 追击轮次计数 |
| `EndedByRetreat`（`MapEvent.cs:283`） | 是否以撤退结束（撤退方非 None 且追击轮次为 0） |
| `DiplomaticallyFinished`（`MapEvent.cs:2654`） | 是否因外交原因（如停战）结束 |
| `FinalizeEvent()`（`MapEvent.cs:2367`） | 手动结束战斗并走结算 |
| `DoSurrender(BattleSideEnum)`（`MapEvent.cs:2547`） | 某方投降 |
| `SetOverrideWinner(BattleSideEnum)`（`MapEvent.cs:1296`） | 强制设定胜利方（任务/脚本用） |
| `SetDefenderPulledBack()`（`MapEvent.cs:1302`） | 设定防守方撤退 |
| `ResetBattleState()`（`MapEvent.cs:1528`） | 重置战斗状态（重新模拟用） |
| `EndByRunAway()`（`MapEvent.cs:1590`） | 以逃跑结束 |
| `GetPlayerBattleContributionRate()`（`MapEvent.cs:1746`） | 玩家在此战中的贡献比例 |

### 模拟控制

| 成员 | 用途 |
| --- | --- |
| `BeginWait()`（`MapEvent.cs:1135`） | 进入等待状态（暂停模拟） |
| `SimulateBattleSetup(FlattenedTroopRoster[])`（`MapEvent.cs:1308`） | 用指定名册设置模拟（读档/续战用） |
| `SimulateBattleRound(int, int)`（`MapEvent.cs:1345`） | 手动推进 N 轮模拟（防守方/进攻方各 N  tick） |
| `RecalculateStrengthOfSides()`（`MapEvent.cs:1602`） | 重算双方实力 |
| `IsPlayerSimulation`（`MapEvent.cs:507`） | 是否 AI 自动模拟（玩家不在场） |
| `SimulationContext`（`MapEvent.cs:309`） | 实力计算上下文（`PowerCalculationContext` 枚举，定义在 `MapEvent.cs:2739`） |
| `TroopUpgradeTracker`（`MapEvent.cs:157`） | 兵种升级追踪器 |

### 位置与组件

| 成员 | 用途 |
| --- | --- |
| `Position`（`MapEvent.cs:329`） | 战斗位置（`CampaignVec2`） |
| `MapEventSettlement`（`MapEvent.cs:273`） | 关联定居点（野战时为 null） |
| `EventTerrainType`（`MapEvent.cs:343`） | 战斗地形类型 |
| `Component`（`MapEvent.cs:193`） | 战斗组件（`MapEventComponent` 派生类），玩法差异的承载者 |
| `MapEventVisual`（`MapEvent.cs:2674`） | 地图可视化对象 |
| `WasEverInLootingPhase`（`MapEvent.cs:528`） | 是否经历过洗劫阶段 |
| `IsPlayerSergeant()`（`MapEvent.cs:1574`） | 玩家是否在此战中担任军士 |
| `ToString()`（`MapEvent.cs:901`） | 返回 `"Battle: 攻方 x 守方"` 格式的描述 |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Core;

public static class MapEventHelper
{
    // 玩家正在打的这场仗是否已经结束
    public static bool IsPlayerBattleOver()
    {
        MapEvent current = MapEvent.PlayerMapEvent;
        return current == null || current.HasWinner || current.IsFinalized;
    }

    // 玩家当前战斗的敌方参战部队
    public static MBReadOnlyList<MapEventParty> GetPlayerEnemies()
    {
        MapEvent current = MapEvent.PlayerMapEvent;
        if (current == null || !current.IsPlayerMapEvent)
        {
            return null;
        }
        BattleSideEnum enemySide = MapEvent.PlayerSide == BattleSideEnum.Attacker
            ? BattleSideEnum.Defender
            : BattleSideEnum.Attacker;
        return current.PartiesOnSide(enemySide);
    }

    // 强制玩家当前战斗胜利（任务/脚本用）
    public static void ForcePlayerBattleWin()
    {
        MapEvent current = MapEvent.PlayerMapEvent;
        if (current != null && current.IsPlayerMapEvent && !current.HasWinner)
        {
            current.SetOverrideWinner(MapEvent.PlayerSide);
        }
    }

    // 判断某场战斗是否是玩家参与的围城
    public static bool IsPlayerSiege(MapEvent mapEvent)
    {
        return mapEvent != null && mapEvent.IsPlayerMapEvent && mapEvent.IsSiegeAssault;
    }
}
```

## 参见

- [`../CampaignEvents`](../CampaignEvents) —— 全局事件总线：`MapEventStarted`、`MapEventEnded`、`SiegeCompletedEvent` 等战斗事件在这里发布。
- [`../Kingdom`](../Kingdom) —— 王国势力：`Kingdom.CreateArmy` 组建军队投入地图战斗，`Kingdom.OnWarPartyAdded` 维护参战缓存。
- [`../CampaignEventDispatcher`](../CampaignEventDispatcher) —— 事件执行器：`OnMapEventStarted` / `OnMapEventEnded` 等战斗事件的扇出入口。
- [`../MobileParty`](../MobileParty) —— 部队：参战单位，`MobileParty.MapEvent` 指向它所在的地图事件。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../Kingdom`](../Kingdom) · [`../CampaignEventDispatcher`](../CampaignEventDispatcher) · [`../MobileParty`](../MobileParty)
- 父索引：[`../_index`](../_index)
