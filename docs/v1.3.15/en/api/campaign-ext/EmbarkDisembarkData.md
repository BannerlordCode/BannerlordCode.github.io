<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmbarkDisembarkData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmbarkDisembarkData

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EmbarkDisembarkData` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### IsPositionValidForNavigationType

```csharp
public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)
```

### IsPositionValidForNavigationType

```csharp
public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)
```

### CanPlayerNavigateToPosition

```csharp
public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)
```

### GetClosestNavMeshFaceCenterPositionForPosition

```csharp
public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int excludedFaceIds)
```

### GetEmbarkDisembarkDataForTick

```csharp
public static NavigationHelper.EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)
```

### GetEmbarkAndDisembarkDataForPlayer

```csharp
public static NavigationHelper.EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)
```

### FindPointAroundPosition

```csharp
public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)
```

### FindReachablePointAroundPosition

```csharp
public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)
```

### FindReachablePointAroundPosition

```csharp
public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)
```

### FindPointInsideArea

```csharp
public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)
```

### IsPointInsideBorders

```csharp
public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)
```

### FindPointInsideArea

```csharp
public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)