---
title: "MapMarkerManager"
description: "Auto-generated class reference for MapMarkerManager."
---
# MapMarkerManager

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarkerManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/MapMarkerManager.cs`

## Overview

`MapMarkerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapMarkerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapMarkers` | `public MBReadOnlyList<MapMarker> MapMarkers { get; }` |

## Key Methods

### CreateMapMarker
`public MapMarker CreateMapMarker(Banner banner, TextObject name, Vec3 position, bool isVisibleOnMap, string questId)`

**Purpose:** **Purpose:** Constructs a new map marker entity and returns it to the caller.

```csharp
// Obtain an instance of MapMarkerManager from the subsystem API first
MapMarkerManager mapMarkerManager = ...;
var result = mapMarkerManager.CreateMapMarker(banner, name, position, false, "example");
```

### RemoveMapMarker
`public void RemoveMapMarker(MapMarker mapMarker)`

**Purpose:** **Purpose:** Removes map marker from the current collection or state.

```csharp
// Obtain an instance of MapMarkerManager from the subsystem API first
MapMarkerManager mapMarkerManager = ...;
mapMarkerManager.RemoveMapMarker(mapMarker);
```

### RemoveAllMapMarkersByQuestId
`public void RemoveAllMapMarkersByQuestId(string questId)`

**Purpose:** **Purpose:** Removes all map markers by quest id from the current collection or state.

```csharp
// Obtain an instance of MapMarkerManager from the subsystem API first
MapMarkerManager mapMarkerManager = ...;
mapMarkerManager.RemoveAllMapMarkersByQuestId("example");
```

### GetMapMarkersByQuestId
`public IEnumerable<MapMarker> GetMapMarkersByQuestId(string questId)`

**Purpose:** **Purpose:** Reads and returns the map markers by quest id value held by the this instance.

```csharp
// Obtain an instance of MapMarkerManager from the subsystem API first
MapMarkerManager mapMarkerManager = ...;
var result = mapMarkerManager.GetMapMarkersByQuestId("example");
```

## Usage Example

```csharp
var manager = MapMarkerManager.Current;
```

## See Also

- [Area Index](../)