---
title: "MapDistanceModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapDistanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel>`
**Base:** `MBGameModel<MapDistanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs`

## Overview

`MapDistanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MapDistanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegionSwitchCostFromLandToSea` | `public abstract int RegionSwitchCostFromLandToSea { get; }` |
| `RegionSwitchCostFromSeaToLand` | `public abstract int RegionSwitchCostFromSeaToLand { get; }` |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public abstract float MaximumSpawnDistanceForCompanionsAfterDisband { get; }` |

## Key Methods

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)`

**Purpose:** Gets the current value of `maximum distance between two connected settlements`.

### GetLandRatioOfPathBetweenSettlements
`public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**Purpose:** Gets the current value of `land ratio of path between settlements`.

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType)`

**Purpose:** Gets the current value of `distance`.

### GetPortToGateDistanceForSettlement
`public abstract float GetPortToGateDistanceForSettlement(Settlement settlement)`

**Purpose:** Gets the current value of `port to gate distance for settlement`.

### PathExistBetweenPoints
`public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `path exist between points`.

### RegisterDistanceCache
`public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)`

**Purpose:** Handles logic related to `register distance cache`.

### GetClosestEntranceToFace
`public abstract ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Gets the current value of `closest entrance to face`.

### GetNeighborsOfFortification
`public abstract MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Gets the current value of `neighbors of fortification`.

### GetTransitionCostAdjustment
`public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**Purpose:** Gets the current value of `transition cost adjustment`.

## Usage Example

```csharp
var implementation = new CustomMapDistanceModel();
```

## See Also

- [Complete Class Catalog](../catalog)