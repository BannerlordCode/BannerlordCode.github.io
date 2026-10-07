---
title: "DefaultBuildingScoreCalculationModel"
description: "Auto-generated class reference for DefaultBuildingScoreCalculationModel."
---
# DefaultBuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingScoreCalculationModel : BuildingScoreCalculationModel`
**Base:** `BuildingScoreCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingScoreCalculationModel.cs`

## Overview

`DefaultBuildingScoreCalculationModel` picks which building a settlement constructs next, and despite the name it scores nothing — both members are uniform random draws over a filtered candidate set. `GetNextDailyBuilding` (`TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingScoreCalculationModel.cs:14`) returns a random element from the town's buildings restricted to those whose type `IsDailyProject` (`:16`), i.e. the settlement's day-to-day food, irrigation, militia and festival choices. `GetNextBuilding` (`:20`) draws from a strictly narrower set: not a daily project, not already at level 3, and not already in progress (`:22`).

## Mental Model

The name promises a ranking and the code does not deliver one — there is no score, no weighting, and no consideration of what the town lacks. Both members are `GetRandomElement` over a filtered list, so the practical result is uniform random among legal candidates and nothing else. The level-3 cutoff in `GetNextBuilding` (`:22`) is what ends a town's building progression: a building at maximum level drops out of the pool permanently and is never chosen again, which is how a settlement converges. The two members are also not interchangeable and are read separately: `BuildingsCampaignBehavior.cs:50` calls `GetNextDailyBuilding` and `:62` calls `GetNextBuilding`, so overriding only one leaves the other on uniform random. Neither method null-checks its result, so an override that filters more aggressively than intended — an empty candidate list, which is trivially reachable when every building is at level 3 — returns null and produces a settlement with nothing to build rather than an error.

## Key Methods

### GetNextDailyBuilding
`public override Building GetNextDailyBuilding(Town town)`

**Purpose:** Reads and returns the next daily building value held by this instance.

```csharp
DefaultBuildingScoreCalculationModel defaultBuildingScoreCalculationModel = ...;
var result = defaultBuildingScoreCalculationModel.GetNextDailyBuilding(town);
```

### GetNextBuilding
`public override Building GetNextBuilding(Town town)`

**Purpose:** Reads and returns the next building value held by this instance.

```csharp
DefaultBuildingScoreCalculationModel defaultBuildingScoreCalculationModel = ...;
var result = defaultBuildingScoreCalculationModel.GetNextBuilding(town);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BuildingScoreCalculationModel>(new DefaultBuildingScoreCalculationModel());
}
```

`BuildingScoreCalculationModel` is declared as `MBGameModel<BuildingScoreCalculationModel>` (`BuildingScoreCalculationModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:325`.

## See Also

- [Area Index](../)