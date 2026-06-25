---
title: "MapDistanceModel"
description: "Auto-generated class reference for MapDistanceModel."
---
# MapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel>`
**Base:** `MBGameModel<MapDistanceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapDistanceModel.cs`

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

**Purpose:** **Purpose:** Reads and returns the maximum distance between two connected settlements value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetMaximumDistanceBetweenTwoConnectedSettlements(navigationType);
```

### GetLandRatioOfPathBetweenSettlements
`public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**Purpose:** **Purpose:** Reads and returns the land ratio of path between settlements value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetLandRatioOfPathBetweenSettlements(fromSettlement, toSettlement, false, false);
```

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toSettlement, false, customCapability, estimatedLandRatio);
```

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, landRatio);
```

### GetDistance
`public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, 0, distance, landRatio);
```

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability);
```

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability, landRatio);
```

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toPoint, navigationType, landRatio);
```

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Reads and returns the distance value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromSettlement, toPoint, false, navigationType);
```

### GetPortToGateDistanceForSettlement
`public abstract float GetPortToGateDistanceForSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the port to gate distance for settlement value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetPortToGateDistanceForSettlement(settlement);
```

### PathExistBetweenPoints
`public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Executes the PathExistBetweenPoints logic.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.PathExistBetweenPoints(fromPoint, toPoint, navigationType);
```

### RegisterDistanceCache
`public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, INavigationCache cacheToRegister)`

**Purpose:** **Purpose:** Registers distance cache with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
mapDistanceModel.RegisterDistanceCache(navigationCapability, cacheToRegister);
```

### GetNeighborsOfFortification
`public abstract MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**Purpose:** **Purpose:** Reads and returns the neighbors of fortification value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetNeighborsOfFortification(town, navigationCapabilities);
```

### GetTransitionCostAdjustment
`public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**Purpose:** **Purpose:** Reads and returns the transition cost adjustment value held by the this instance.

```csharp
// Obtain an instance of MapDistanceModel from the subsystem API first
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetTransitionCostAdjustment(settlement1, false, settlement2, false, false, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapDistanceModel instance = ...;
```

## See Also

- [Area Index](../)