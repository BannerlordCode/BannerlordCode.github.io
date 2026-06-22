<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventManager

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventManager.cs`

## 概述

`MapEventManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBReadOnlyList<MapEvent> MapEvents { get; }` |

## 主要方法

### OnMapEventCreated
```csharp
public void OnMapEventCreated(MapEvent mapEvent)
```

### GetMapEvent
```csharp
public MapEvent GetMapEvent(int attackerPartyIndex)
```

### GetMapEventsBetweenFactions
```csharp
public List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)
```

### FinalizePlayerMapEvent
```csharp
public void FinalizePlayerMapEvent(MapEvent mapEvent = null)
```

### StartSiegeMapEvent
```csharp
public MapEvent StartSiegeMapEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### StartSallyOutMapEvent
```csharp
public MapEvent StartSallyOutMapEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### StartSiegeOutsideMapEvent
```csharp
public MapEvent StartSiegeOutsideMapEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### StartBlockadeBattleMapEvent
```csharp
public MapEvent StartBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase defenderParty)
```

## 使用示例

```csharp
// MapEventManager (Manager) 的典型用法
MapEventManager.Current;
```

## 参见

- [完整类目录](../catalog)