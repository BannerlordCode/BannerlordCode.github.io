---
title: "MapEventManager"
description: "Auto-generated class reference for MapEventManager."
---
# MapEventManager

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventManager.cs`

## Overview

`MapEventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapEventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBReadOnlyList<MapEvent> MapEvents { get; }` |

## Key Methods

### OnMapEventCreated
`public void OnMapEventCreated(MapEvent mapEvent)`

**Purpose:** Invoked when the `map event created` event is raised.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
mapEventManager.OnMapEventCreated(mapEvent);
```

### GetMapEvent
`public MapEvent GetMapEvent(int attackerPartyIndex)`

**Purpose:** Reads and returns the `map event` value held by the current object.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
var result = mapEventManager.GetMapEvent(0);
```

### GetMapEventsBetweenFactions
`public List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)`

**Purpose:** Reads and returns the `map events between factions` value held by the current object.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
var result = mapEventManager.GetMapEventsBetweenFactions(faction1, faction2);
```

### FinalizePlayerMapEvent
`public void FinalizePlayerMapEvent(MapEvent mapEvent = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
mapEventManager.FinalizePlayerMapEvent(null);
```

### StartSiegeMapEvent
`public MapEvent StartSiegeMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Starts the `siege map event` flow or state machine.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartSiegeMapEvent(attackerParty, defenderParty);
```

### StartSallyOutMapEvent
`public MapEvent StartSallyOutMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Starts the `sally out map event` flow or state machine.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartSallyOutMapEvent(attackerParty, defenderParty);
```

### StartSiegeOutsideMapEvent
`public MapEvent StartSiegeOutsideMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Starts the `siege outside map event` flow or state machine.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartSiegeOutsideMapEvent(attackerParty, defenderParty);
```

### StartBlockadeBattleMapEvent
`public MapEvent StartBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Starts the `blockade battle map event` flow or state machine.

```csharp
// Obtain an instance of MapEventManager from the subsystem API first
MapEventManager mapEventManager = ...;
var result = mapEventManager.StartBlockadeBattleMapEvent(attackerParty, defenderParty);
```

## Usage Example

```csharp
var manager = MapEventManager.Current;
```

## See Also

- [Area Index](../)