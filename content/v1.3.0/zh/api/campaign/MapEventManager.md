---
title: "MapEventManager"
description: "MapEventManager 的自动生成类参考。"
---
# MapEventManager

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventManager.cs`

## 概述

`MapEventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapEventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBReadOnlyList<MapEvent> MapEvents { get; }` |

## 主要方法

### OnMapEventCreated
`public void OnMapEventCreated(MapEvent mapEvent)`

**用途 / Purpose:** 在 「map event created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
mapEventManager.OnMapEventCreated(mapEvent);
```

### GetMapEvent
`public MapEvent GetMapEvent(int attackerPartyIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「map event」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
var result = mapEventManager.GetMapEvent(0);
```

### GetMapEventsBetweenFactions
`public List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 读取并返回当前对象中 「map events between factions」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
var result = mapEventManager.GetMapEventsBetweenFactions(faction1, faction2);
```

### FinalizePlayerMapEvent
`public void FinalizePlayerMapEvent(MapEvent mapEvent = null)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
mapEventManager.FinalizePlayerMapEvent(null);
```

### StartSiegeMapEvent
`public MapEvent StartSiegeMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 启动「siege map event」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartSiegeMapEvent(attackerParty, defenderParty);
```

### StartSallyOutMapEvent
`public MapEvent StartSallyOutMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 启动「sally out map event」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartSallyOutMapEvent(attackerParty, defenderParty);
```

### StartSiegeOutsideMapEvent
`public MapEvent StartSiegeOutsideMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 启动「siege outside map event」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartSiegeOutsideMapEvent(attackerParty, defenderParty);
```

### StartBlockadeBattleMapEvent
`public MapEvent StartBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 启动「blockade battle map event」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapEventManager 实例
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartBlockadeBattleMapEvent(attackerParty, defenderParty);
```

## 使用示例

```csharp
var manager = MapEventManager.Current;
```

## 参见

- [本区域目录](../)