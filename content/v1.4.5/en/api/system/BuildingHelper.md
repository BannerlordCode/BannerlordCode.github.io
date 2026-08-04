---
title: "BuildingHelper"
description: "Reads and mutates Town building progress, defaults, queues, tiers, and reserve boosts."
---
# BuildingHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class BuildingHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`

## One-sentence responsibility

`BuildingHelper` is the direct bridge used by town development code to inspect a [Building](../../campaign/Building) and mutate a [Town](../../campaign/Town)'s default, queue, completion, and reserve state.

## Mental Model

The class mixes two responsibilities that must be kept separate when calling it:

- **Queries:** `GetProgressOfBuilding`, `GetDaysToComplete`, and `GetTierOfBuilding` inspect a building that belongs to the supplied town.
- **Mutations:** `CheckIfBuildingIsComplete`, `ChangeDefaultBuilding`, `ChangeCurrentBuildingQueue`, and `BoostBuildingProcessWithGold` directly change building or town state.

The source contract is town-owned. A `Building` from another town is not a valid input for the query methods; the implementation asserts and returns `0`. Queue and completion methods also assume the caller is operating on the town's real development flow. This is why stock `BuildingsCampaignBehavior` and town-management view models decide the project first, then call this helper.

## When to use and when not to use

- **Use it:** from a town development flow that already owns the relevant `Town` and its `Building` objects.
- **Use it:** to display the current project percentage or estimated days using the same calculations as the stock town-management UI.
- **Use it:** to apply a user-selected default or queue after the UI has filtered out daily projects.
- **Do not use it:** as a general building factory. It does not create a `Building` or select a valid project for a town.
- **Do not pass a daily project to `ChangeCurrentBuildingQueue`:** the method asserts on daily projects instead of enqueueing them.
- **Do not call `CheckIfBuildingIsComplete` for an arbitrary building:** it dequeues the town queue after completion and expects the caller's building to be the active development item.

## Public entries

### `CheckIfBuildingIsComplete`

```csharp
public static void CheckIfBuildingIsComplete(Building building)
```

When `BuildingProgress` reaches `GetConstructionCost()`, the method levels the building if it is below level 3, clamps level-3 progress to the construction cost, and dequeues `building.Town.BuildingsInProgress`.

### `ChangeDefaultBuilding`

```csharp
public static void ChangeDefaultBuilding(Building newDefault, Town town)
```

Clears `IsCurrentlyDefault` from every building in the town and sets it on `newDefault`. The method does not verify that `newDefault` belongs to the town; passing an external object can leave the town with no default.

### `ChangeCurrentBuildingQueue`

```csharp
public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)
```

Clears the existing `BuildingsInProgress` queue, then enqueues each non-daily building in list order. A daily project triggers a failed assertion and is not enqueued.

### `GetProgressOfBuilding`

```csharp
public static float GetProgressOfBuilding(Building building, Town town)
```

Returns `BuildingProgress / GetConstructionCost()` when the building is present in `town.Buildings`. If it is absent, the implementation asserts and returns `0f`; the result is a ratio, not a percentage.

### `GetDaysToComplete`

```csharp
public static int GetDaysToComplete(Building building, Town town)
```

Uses the town's integer construction power, current reserve boost, castle/town boost cost, and `CalculateDailyConstructionPowerWithoutBoost`. It returns at least `1` for an active calculation, `-1` when integer `town.Construction` is zero, and `0` after the building-membership assertion fails.

### `GetTierOfBuilding`

```csharp
public static int GetTierOfBuilding(BuildingType buildingType, Town town)
```

Finds the town building with the matching [BuildingType](../../campaign/BuildingType) and returns its `CurrentLevel`. A missing type triggers an assertion and returns `0`.

### `BoostBuildingProcessWithGold`

```csharp
public static void BoostBuildingProcessWithGold(int gold, Town town)
```

Adjusts the player gold delta through `GiveGoldAction`, then sets `town.BoostBuildingProcess` to exactly `gold`. The method treats the argument as the target reserve amount, not as an amount to add.

## Real current-Campaign flow

The stock town-management UI reads the current project from a real town and uses the helper for display. A Campaign-side caller can follow the same guarded shape:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

Town town = MobileParty.MainParty.CurrentSettlement?.Town;
if (town?.CurrentBuilding != null)
{
    Building current = town.CurrentBuilding;
    float progress = BuildingHelper.GetProgressOfBuilding(current, town);
    int days = BuildingHelper.GetDaysToComplete(current, town);
    Debug.Print($"{current.Name}: {progress:P0}, days={days}");
}
```

For a deliberate reserve change, the stock model's real boost cost can define the next target rather than a hard-coded castle/town assumption:

```csharp
int nextReserve = town.BoostBuildingProcess
    + Campaign.Current.Models.BuildingConstructionModel.GetBoostCost(town);
BuildingHelper.BoostBuildingProcessWithGold(nextReserve, town);
```

Both calls operate on current Campaign state. Queue/default/completion mutations should remain inside the owning town-management or Campaign behavior transition.

## Dependencies and ownership

- [Town](../../campaign/Town) owns `Buildings`, `BuildingsInProgress`, `Construction`, `BoostBuildingProcess`, and the current default/project relationships.
- [Building](../../campaign/Building) owns progress, level, construction cost, and its parent town.
- [BuildingType](../../campaign/BuildingType) supplies daily-project classification and type identity.
- [DefaultBuildingConstructionModel](../../campaign/DefaultBuildingConstructionModel) supplies boost costs and daily construction power used by the day estimate.
- `BuildingsCampaignBehavior` owns daily project selection, construction ticks, and completion timing; [Town management](../../campaign/Town) UI code owns user-driven queue/default/reserve choices.
- `BoostBuildingProcessWithGold` uses `GiveGoldAction` with `Hero.MainHero`; the helper is therefore tied to the active player Campaign, not an arbitrary hero economy.

## Risks and save boundaries

- `CheckIfBuildingIsComplete` dequeues the town queue without checking that the passed building is the queue head. Call it only from the active construction transition.
- Query methods assert when the building or type is not represented by the town. A returned `0` after an assertion is an error fallback, not a valid progress or tier result.
- `GetProgressOfBuilding` can divide by the building construction cost; use real registered buildings with valid costs.
- `GetDaysToComplete` uses integer truncation and reserve thresholds, so it is an estimate matching the stock UI rather than a general scheduler.
- `ChangeCurrentBuildingQueue` clears the existing queue before validating every item. Filter daily projects before calling it.
- `ChangeDefaultBuilding` can clear every current default if `newDefault` is not one of `town.Buildings`.
- The methods mutate saved town/building state, but `BuildingHelper` has no independent save fields. Persistence belongs to the Campaign objects and behaviors it changes.

## Version note

This page follows v1.4.5 `BuildingHelper.cs`. The seven public methods intentionally combine query and mutation boundaries; the owning construction behavior remains responsible for timing and validation.

## Navigation

- [↑ API system index](../)
- [Related: Building](../../campaign/Building)
- [Related: BuildingType](../../campaign/BuildingType)
- [Related: Town](../../campaign/Town)
- [Related: DefaultBuildingConstructionModel](../../campaign/DefaultBuildingConstructionModel)
