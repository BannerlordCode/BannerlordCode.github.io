---
title: "NavigationHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class NavigationHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## Overview

`NavigationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `NavigationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `is position valid for navigation type`.

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `is position valid for navigation type`.

### CanPlayerNavigateToPosition
`public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**Purpose:** Checks whether the current object can `player navigate to position`.

### GetClosestNavMeshFaceCenterPositionForPosition
`public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int excludedFaceIds)`

**Purpose:** Gets the current value of `closest nav mesh face center position for position`.

### GetEmbarkDisembarkDataForTick
`public static EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)`

**Purpose:** Gets the current value of `embark disembark data for tick`.

### GetEmbarkAndDisembarkDataForPlayer
`public static EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)`

**Purpose:** Gets the current value of `embark and disembark data for player`.

### FindPointAroundPosition
`public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)`

**Purpose:** Handles logic related to `find point around position`.

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**Purpose:** Handles logic related to `find reachable point around position`.

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**Purpose:** Handles logic related to `find reachable point around position`.

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)`

**Purpose:** Handles logic related to `find point inside area`.

### IsPointInsideBorders
`public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)`

**Purpose:** Handles logic related to `is point inside borders`.

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)`

**Purpose:** Handles logic related to `find point inside area`.

### GetInteractionDataForMainParty
`public static void GetInteractionDataForMainParty(Settlement settlement, out bool canNavigate, out MobileParty.NavigationType bestNavigationType, out bool isTargetingPort)`

**Purpose:** Gets the current value of `interaction data for main party`.

## Usage Example

```csharp
NavigationHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)