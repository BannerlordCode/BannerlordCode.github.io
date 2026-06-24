<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventManager

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventManager.cs`

## Overview

`MapEventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapEventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMapEventCreated
`public void OnMapEventCreated(MapEvent mapEvent)`

**Purpose:** Called when the `map event created` event is raised.

### GetMapEvent
`public MapEvent GetMapEvent(int attackerPartyIndex)`

**Purpose:** Gets the current value of `map event`.

### GetMapEventsBetweenFactions
`public List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)`

**Purpose:** Gets the current value of `map events between factions`.

### FinalizePlayerMapEvent
`public void FinalizePlayerMapEvent(MapEvent mapEvent = null)`

**Purpose:** Handles logic related to `finalize player map event`.

### StartSiegeMapEvent
`public MapEvent StartSiegeMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Handles logic related to `start siege map event`.

### StartSallyOutMapEvent
`public MapEvent StartSallyOutMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Handles logic related to `start sally out map event`.

### StartSiegeOutsideMapEvent
`public MapEvent StartSiegeOutsideMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Handles logic related to `start siege outside map event`.

### StartBlockadeBattleMapEvent
`public MapEvent StartBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Handles logic related to `start blockade battle map event`.

## Usage Example

```csharp
var manager = MapEventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)