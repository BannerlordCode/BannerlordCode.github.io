<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapMarkerManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapMarkerManager

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarkerManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/MapMarkerManager.cs`

## Overview

`MapMarkerManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapMarkers` | `public MBReadOnlyList<MapMarker> MapMarkers { get; }` |

## Key Methods

### CreateMapMarker
```csharp
public MapMarker CreateMapMarker(Banner banner, TextObject name, Vec3 position, bool isVisibleOnMap, string questId)
```

### RemoveMapMarker
```csharp
public void RemoveMapMarker(MapMarker mapMarker)
```

### RemoveAllMapMarkersByQuestId
```csharp
public void RemoveAllMapMarkersByQuestId(string questId)
```

### GetMapMarkersByQuestId
```csharp
public IEnumerable<MapMarker> GetMapMarkersByQuestId(string questId)
```

## Usage Example

```csharp
// Typical usage of MapMarkerManager (Manager)
MapMarkerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)