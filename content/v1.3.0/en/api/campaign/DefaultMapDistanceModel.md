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

## How to use

`DefaultMapDistanceModel` is the shipped answer, not the extension point. The abstract `MapDistanceModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MapDistanceModel` is declared `MBGameModel<MapDistanceModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs:10`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MapDistanceModel>(new DefaultMapDistanceModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:234`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMapDistanceModel : MapDistanceModel
{
    // Thirteen of the sixteen members on the base are abstract, so delegating is the
    // whole job. The parameter is the nested enum MobileParty.NavigationType, not a
    // top-level type.
    private readonly DefaultMapDistanceModel _stock = new DefaultMapDistanceModel();

    public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)
    {
        return _stock.GetMaximumDistanceBetweenTwoConnectedSettlements(navigationType);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MapDistanceModel>(new MyMapDistanceModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMapDistanceModel>(new DefaultMapDistanceModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMapDistanceModel` is an `MBGameModel<MapDistanceModel>`, not an `MBGameModel<DefaultMapDistanceModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:672`, `GetGameModel<MapDistanceModel>()`), so nothing would ever look up a type you invented.

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

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMapDistanceModel` for it at `SandBoxManager.cs:234`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMapDistanceModel : MapDistanceModel, so it is already an MBGameModel<MapDistanceModel>
        gameStarter.AddModel<MapDistanceModel>(new MyMapDistanceModel());
    }
}
```

## See Also

- [Area Index](../)