<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventManager

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventManager.cs`

## Overview

`MapEventManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBReadOnlyList<MapEvent> MapEvents { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of MapEventManager (Manager)
MapEventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)