<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapMarkerManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `map marker` instance or object.

### RemoveMapMarker
`public void RemoveMapMarker(MapMarker mapMarker)`

**Purpose:** Removes `map marker` from the current collection or state.

### RemoveAllMapMarkersByQuestId
`public void RemoveAllMapMarkersByQuestId(string questId)`

**Purpose:** Removes `all map markers by quest id` from the current collection or state.

### GetMapMarkersByQuestId
`public IEnumerable<MapMarker> GetMapMarkersByQuestId(string questId)`

**Purpose:** Gets the current value of `map markers by quest id`.

## Usage Example

```csharp
var manager = MapMarkerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)