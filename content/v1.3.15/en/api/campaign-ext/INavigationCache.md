---
title: "INavigationCache"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INavigationCache`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# INavigationCache

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface INavigationCache`
**Area:** campaign-ext

## Overview

`INavigationCache` lives in `TaleWorlds.CampaignSystem.ComponentInterfaces`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ComponentInterfaces` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
INavigationCache implementation = GetNavigationCacheImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
