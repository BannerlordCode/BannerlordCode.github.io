---
title: "DefaultMapDistanceModel"
description: "Auto-generated class reference for DefaultMapDistanceModel."
---
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

**Purpose:** Registers distance cache with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
defaultMapDistanceModel.RegisterDistanceCache(navigationCapability, cacheToRegister);
```

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Reads and returns the maximum distance between two connected settlements value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetMaximumDistanceBetweenTwoConnectedSettlements(navigationCapabilities);
```

### GetLandRatioOfPathBetweenSettlements
`public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**Purpose:** Reads and returns the land ratio of path between settlements value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetLandRatioOfPathBetweenSettlements(fromSettlement, toSettlement, false, false);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort = false, bool isTargetingPort = false, MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, mobileParty.NavigationType.Default);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability, landRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toSettlement, false, customCapability, estimatedLandRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, landRatio);
```

### GetDistance
`public override bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, 0, distance, landRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toPoint, customCapability, landRatio);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType customCapability)`

**Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toPoint, false, customCapability);
```

### GetPortToGateDistanceForSettlement
`public override float GetPortToGateDistanceForSettlement(Settlement settlement)`

**Purpose:** Reads and returns the port to gate distance for settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetPortToGateDistanceForSettlement(settlement);
```

### PathExistBetweenPoints
`public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**Purpose:** Executes the PathExistBetweenPoints logic.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.PathExistBetweenPoints(fromPoint, toPoint, navigationType);
```

### GetClosestEntranceToFace
`public override ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Reads and returns the closest entrance to face value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetClosestEntranceToFace(face, navigationCapabilities);
```

### GetNeighborsOfFortification
`public override MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** Reads and returns the neighbors of fortification value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetNeighborsOfFortification(town, navigationCapabilities);
```

### GetTransitionCostAdjustment
`public override float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**Purpose:** Reads and returns the transition cost adjustment value held by the this instance.

```csharp
// Obtain an instance of DefaultMapDistanceModel from the subsystem API first
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetTransitionCostAdjustment(settlement1, false, settlement2, false, false, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapDistanceModel>(new MyDefaultMapDistanceModel());
```

## See Also

- [Area Index](../)