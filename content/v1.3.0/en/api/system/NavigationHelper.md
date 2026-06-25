---
title: "NavigationHelper"
description: "Auto-generated class reference for NavigationHelper."
---
# NavigationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class NavigationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## Overview

`NavigationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `NavigationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)`

**Purpose:** Determines whether the current object is in the `position valid for navigation type` state or condition.

```csharp
// Static call; no instance required
NavigationHelper.IsPositionValidForNavigationType(vec2, navigationType);
```

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)`

**Purpose:** Determines whether the current object is in the `position valid for navigation type` state or condition.

```csharp
// Static call; no instance required
NavigationHelper.IsPositionValidForNavigationType(face, navigationType);
```

### CanPlayerNavigateToPosition
`public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType, out float distance)`

**Purpose:** Checks whether the current object meets the preconditions for `player navigate to position`.

```csharp
// Static call; no instance required
NavigationHelper.CanPlayerNavigateToPosition(vec2, navigationType, distance);
```

### GetClosestNavMeshFaceCenterPositionForPosition
`public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int excludedFaceIds)`

**Purpose:** Reads and returns the `closest nav mesh face center position for position` value held by the current object.

```csharp
// Static call; no instance required
NavigationHelper.GetClosestNavMeshFaceCenterPositionForPosition(vec2, 0);
```

### GetEmbarkDisembarkDataForTick
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)`

**Purpose:** Reads and returns the `embark disembark data for tick` value held by the current object.

```csharp
// Static call; no instance required
NavigationHelper.GetEmbarkDisembarkDataForTick(position, direction);
```

### GetEmbarkAndDisembarkDataForPlayer
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)`

**Purpose:** Reads and returns the `embark and disembark data for player` value held by the current object.

```csharp
// Static call; no instance required
NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(position, direction, moveTargetPointOfTheParty, false);
```

### FindPointAroundPosition
`public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)`

**Purpose:** Looks up the matching `point around position` in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindPointAroundPosition(centerPosition, navigationCapability, 0, 0, false, false);
```

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**Purpose:** Looks up the matching `reachable point around position` in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindReachablePointAroundPosition(center, 0, 0, 0, false);
```

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**Purpose:** Looks up the matching `reachable point around position` in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindReachablePointAroundPosition(center, navigationCapability, 0, 0, false);
```

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)`

**Purpose:** Looks up the matching `point inside area` in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindPointInsideArea(minBorder, maxBorder, navigationCapability);
```

### IsPointInsideBorders
`public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)`

**Purpose:** Determines whether the current object is in the `point inside borders` state or condition.

```csharp
// Static call; no instance required
NavigationHelper.IsPointInsideBorders(point, minBorders, maxBorders);
```

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)`

**Purpose:** Looks up the matching `point inside area` in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindPointInsideArea(minBorders, maxBorders, center, navigationCapability, 0, 0, false);
```

## Usage Example

```csharp
NavigationHelper.Initialize();
```

## See Also

- [Area Index](../)