---
title: "MapEventManager"
description: "地图遭遇战调度器：维护全部进行中的 MapEvent 列表，驱动每 tick 更新与移除，提供按攻击方/阵营查询，以及发起围攻、突围、城外围攻、封锁战斗四类地图遭遇战的工厂方法。"
---
# MapEventManager

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapEventManager`
**Source:** `TaleWorlds.CampaignSystem/MapEvents/MapEventManager.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`MapEventManager` 是战役层地图遭遇战（map event）的**注册与调度中心**。它持有一个 `MBList<MapEvent>` 列表（`MapEventManager.cs:28` 的 `_mapEvents` 字段，`[SaveableField(1)]` 持久化），负责三件事：**创建**（`StartSiegeMapEvent` 等工厂方法构造 `MapEvent` 并加入列表）、**调度**（`Tick` 每帧逆序遍历，移除已结算的、更新未结算的）、**查询**（`GetMapEvent` / `GetMapEventsBetweenFactions` 按攻击方或阵营筛选）。

它与 `MapEvent`、`MapEventComponent` 的分工是：`MapEventManager` 管「有哪些遭遇战在跑、谁先被处理」；`MapEvent` 管「这场战斗的状态机（攻守双方、聚落、结算）」；`MapEventComponent` 是任务层（mission）的战斗场景执行器，负责实际的战斗画面与结算流程。mod 作者绝大多数情况下**不需要**直接操作 `MapEventManager`——它由 `Campaign` 内部持有，遭遇战的生命周期由战役系统自动管理。

## 心智模型

**它是「遭遇战的花名册 + 调度台」，不是「战斗本身」。**

- **它管「列表」**：`_mapEvents` 是所有进行中遭遇战的总表。`OnMapEventCreated` 在 `StartXxxMapEvent` 工厂方法里被调用，把新遭遇战加入列表；`Tick` 逆序遍历，把 `IsFinalized` 的移除、把未结算的 `Update`。
- **它管「调度顺序」**：`Tick` 从列表末尾向头部遍历（`for (int i = count - 1; i >= 0; i--)`），这意味着**后创建的遭遇战先被更新**。同时有两个跳过条件：`IsRaid`（掠夺战不在此更新，由 `RaidingMapEvent` 之类的组件自行驱动）和 `MobileParty.MainParty.MapEvent`（玩家主队的遭遇战由玩家交互驱动，不在此自动更新）。
- **它管「查询」**：`GetMapEvent(int attackerPartyIndex)` 按攻击方队伍索引找遭遇战；`GetMapEventsBetweenFactions` 按阵营对找——它检查防守方和攻击方两侧是否有属于指定阵营的派对，两个方向都匹配才返回。
- **它管「开战」**：四个 `StartXxxMapEvent` 工厂方法分别对应四种战斗类型——围攻（`Siege`）、突围（`SallyOut`）、城外围攻（`SiegeOutside`）、封锁战斗（`BlockadeBattle`）。它们都构造 `MapEvent`、调 `Initialize`、再调 `OnMapEventCreated` 注册。

**为什么逆序遍历**：逆序遍历允许在遍历过程中安全地 `RemoveAt`——移除当前元素不会影响尚未遍历的前面元素的索引。这是 C# 中边遍历边删除的标准模式。

**一个常见误用**：直接 `new MapEventManager()`。它由 `Campaign` 持有，自己 new 的实例不在战役系统里，`Tick` 不会被调用，遭遇战列表永远是空的。

## 怎么用

### 怎么拿到

```csharp
MapEventManager mem = Campaign.Current.MapEventManager;
```

### 典型用法

```csharp
// 查询某攻击方队伍的遭遇战
MapEvent ev = Campaign.Current.MapEventManager.GetMapEvent(party.Index);

// 查询两个阵营之间的所有遭遇战
List<MapEvent> wars = Campaign.Current.MapEventManager.GetMapEventsBetweenFactions(factionA, factionB);

// 发起一场围攻
MapEvent siege = Campaign.Current.MapEventManager.StartSiegeMapEvent(attackerParty, defenderParty);

// 发起一场突围
MapEvent sally = Campaign.Current.MapEventManager.StartSallyOutMapEvent(attackerParty, defenderParty);

// 玩家遭遇战结算（战斗结束后调用）
Campaign.Current.MapEventManager.FinalizePlayerMapEvent();
```

### 坑

- **`Tick` 跳过玩家主队的遭遇战**：`MobileParty.MainParty.MapEvent` 不由 `MapEventManager.Tick` 更新，它由玩家交互驱动。如果 mod 依赖 `Tick` 来推进玩家遭遇战状态，会发现它不动。
- **`FinalizePlayerMapEvent` 抛异常**：如果 `MobileParty.MainParty.MapEvent` 为 null，它会抛 `MBNotFoundException`。调用前需确保玩家确实有一场进行中的遭遇战。
- **`GetMapEventsBetweenFactions` 是双向匹配**：它检查「防守方有 faction1 且攻击方有 faction2」**或**「防守方有 faction2 且攻击方有 faction1」，两个方向都返回同一批遭遇战。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `MapEvents` | `public MBReadOnlyList<MapEvent> MapEvents` | 只读遭遇战列表，供外部查询当前所有进行中的遭遇战 | `MapEventManager.cs:35` |
| `OnAfterLoad` | `internal void OnAfterLoad()` | 存档加载后回调：遍历所有遭遇战调 `mapEvent.OnAfterLoad()` 恢复状态 | `MapEventManager.cs:50` |
| `OnMapEventCreated` | `public void OnMapEventCreated(MapEvent mapEvent)` | 把新遭遇战加入 `_mapEvents` 列表；由 `StartXxxMapEvent` 工厂方法调用 | `MapEventManager.cs:59` |
| `Tick` | `internal void Tick()` | 每帧调度：逆序遍历，移除已结算的，更新未结算的（跳过掠夺战和玩家主队遭遇战） | `MapEventManager.cs:65` |
| `GetMapEvent` | `public MapEvent GetMapEvent(int attackerPartyIndex)` | 按攻击方队伍索引查找遭遇战，返回第一个匹配的 | `MapEventManager.cs:81` |
| `GetMapEventsBetweenFactions` | `public List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)` | 查找两个阵营之间的所有遭遇战（双向匹配攻守两侧） | `MapEventManager.cs:87` |
| `FinalizePlayerMapEvent` | `public void FinalizePlayerMapEvent(MapEvent mapEvent = null)` | 结算玩家遭遇战：调 `MapEvent.FinalizeEvent()` 并结束玩家遭遇 | `MapEventManager.cs:144` |
| `StartSiegeMapEvent` | `public MapEvent StartSiegeMapEvent(PartyBase attackerParty, PartyBase defenderParty)` | 发起围攻遭遇战：构造 `MapEvent`（`BattleTypes.Siege`）并注册 | `MapEventManager.cs:155` |
| `StartSallyOutMapEvent` | `public MapEvent StartSallyOutMapEvent(PartyBase attackerParty, PartyBase defenderParty)` | 发起突围遭遇战：构造 `MapEvent`（`BattleTypes.SallyOut`）并注册 | `MapEventManager.cs:164` |
| `StartSiegeOutsideMapEvent` | `public MapEvent StartSiegeOutsideMapEvent(PartyBase attackerParty, PartyBase defenderParty)` | 发起城外围攻遭遇战：构造 `MapEvent`（`BattleTypes.SiegeOutside`）并注册 | `MapEventManager.cs:173` |
| `StartBlockadeBattleMapEvent` | `public MapEvent StartBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase defenderParty)` | 发起封锁战斗遭遇战：构造 `MapEvent`（`BattleTypes.BlockadeBattle`）并注册 | `MapEventManager.cs:182` |

## 真实示例

```csharp
// 示例：mod 想在每帧检查是否有正在进行的围攻
foreach (MapEvent ev in Campaign.Current.MapEventManager.MapEvents)
{
    if (ev.BattleType == MapEvent.BattleTypes.Siege)
    {
        // 处理围攻逻辑
    }
}

// 示例：mod 想在两个阵营开战时得到通知
List<MapEvent> wars = Campaign.Current.MapEventManager.GetMapEventsBetweenFactions(
    Hero.MainHero.MapFaction, enemyFaction);
if (wars.Count > 0)
{
    // 已有遭遇战在进行
}

// 示例：mod 想发起一场围攻并获取 MapEvent 引用
MapEvent siege = Campaign.Current.MapEventManager.StartSiegeMapEvent(
    attackerParty, defenderParty);
// 后续可通过 siege 引用监控战斗状态
```

## 参见

- [`../MapEvent`](../MapEvent) — 单场地图遭遇战的状态机，`MapEventManager` 调度的对象
- [`../EncounterManager`](../EncounterManager) — 遭遇管理器，处理部队相遇时的遭遇战创建与交互
- [`../MobileParty`](../MobileParty) — 移动部队，遭遇战的参与方

## 导航

- 上级：[`../_index`](../_index)
- 同级：[`../MapEvent`](../MapEvent) · [`../EncounterManager`](../EncounterManager) · [`../MobileParty`](../MobileParty)
