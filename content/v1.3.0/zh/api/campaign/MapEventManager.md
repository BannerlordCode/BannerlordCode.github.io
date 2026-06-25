---
title: "MapEventManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `map event created` 事件触发时调用此方法。

### GetMapEvent
`public MapEvent GetMapEvent(int attackerPartyIndex)`

**用途 / Purpose:** 获取 `map event` 的当前值。

### GetMapEventsBetweenFactions
`public List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 获取 `map events between factions` 的当前值。

### FinalizePlayerMapEvent
`public void FinalizePlayerMapEvent(MapEvent mapEvent = null)`

**用途 / Purpose:** 处理 `finalize player map event` 相关逻辑。

### StartSiegeMapEvent
`public MapEvent StartSiegeMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 处理 `start siege map event` 相关逻辑。

### StartSallyOutMapEvent
`public MapEvent StartSallyOutMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 处理 `start sally out map event` 相关逻辑。

### StartSiegeOutsideMapEvent
`public MapEvent StartSiegeOutsideMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 处理 `start siege outside map event` 相关逻辑。

### StartBlockadeBattleMapEvent
`public MapEvent StartBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 处理 `start blockade battle map event` 相关逻辑。

## 使用示例

```csharp
var manager = MapEventManager.Current;
```

## 参见

- [完整类目录](../catalog)