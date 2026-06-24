<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapDistanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel`
**Base:** `MapDistanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs`

## Overview

`DefaultMapDistanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapDistanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegionSwitchCostFromLandToSea` | `public override int RegionSwitchCostFromLandToSea { get; }` |
| `RegionSwitchCostFromSeaToLand` | `public override int RegionSwitchCostFromSeaToLand { get; }` |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public override float MaximumSpawnDistanceForCompanionsAfterDisband { get; }` |

## Key Methods

### RegisterDistanceCache
`public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)`

**Purpose:** Handles logic related to `register distance cache`.

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Gets the current value of `maximum distance between two connected settlements`.

### GetLandRatioOfPathBetweenSettlements
`public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**Purpose:** Gets the current value of `land ratio of path between settlements`.

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort = false, bool isTargetingPort = false, MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public override bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** Gets the current value of `distance`.

### GetDistance
`public override float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType customCapability)`

**Purpose:** Gets the current value of `distance`.

### GetPortToGateDistanceForSettlement
`public override float GetPortToGateDistanceForSettlement(Settlement settlement)`

**Purpose:** Gets the current value of `port to gate distance for settlement`.

### PathExistBetweenPoints
`public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `path exist between points`.

### GetClosestEntranceToFace
`public override ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Gets the current value of `closest entrance to face`.

### GetNeighborsOfFortification
`public override MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Gets the current value of `neighbors of fortification`.

### GetTransitionCostAdjustment
`public override float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**Purpose:** Gets the current value of `transition cost adjustment`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapDistanceModel>(new MyDefaultMapDistanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)