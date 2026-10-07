---
title: "DefaultBuildingConstructionModel"
description: "Auto-generated class reference for DefaultBuildingConstructionModel."
---
# DefaultBuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**Base:** `BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`

## Overview

`DefaultBuildingConstructionModel` computes how much construction progress a settlement makes each day. The base term is simply prosperity at 1% (`TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs:102`). On top of that a paid boost contributes a fraction of its full value, scaled linearly by how far the boost's progress has advanced — `min(1, BoostBuildingProcess / BoostCost)` (`:107`) — where a town boost is worth 50 per day for 500 gold and a castle boost 20 per day for 250 (`:23`, `:33`, `:43`, `:53`). A governor who actually resides in the town unlocks the rest: the town project skill bonus, the Steward Forced Labor perk, a prison-labour bonus capped at 30% and scaled by prisoner count (`:129`), and construction perks chosen by settlement type — MilitaryPlanner for castles, Carpenters for towns (`:135`–`:138`). `GetBoostAmount` inflates the base bonus with the governor's Relocation and SpringOfGold perks (`:77`–`:84`).

## Mental Model

Two entry points, and they deliberately disagree. `CalculateDailyConstructionPower` includes the boost (`:61`) while `CalculateDailyConstructionPowerWithoutBoost` passes `omitBoost: true` and does not (`:69`) — so the second is the honest base rate and the first is what the player actually earns. Both route through the same private accumulator, which is why every perk and skill is added into an `ExplainedNumber` and the caller receives the breakdown alongside the value; an override replacing the accumulator with a bare float silently loses the construction screen's itemised display. `BuildingsCampaignBehavior.cs:119` grabs the model once per settlement tick. The residency check at `:122`–`:126` is the trap worth knowing about: it compares the governor's *current* settlement to this town, so appointing a governor to a town they do not live in gives no bonus at all, and moving the governor away immediately removes it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public override int TownBoostCost { get; }` |
| `TownBoostBonus` | `public override int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public override int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public override int CastleBoostBonus { get; }` |

## Key Methods

### CalculateDailyConstructionPower
`public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of daily construction power.

```csharp
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.CalculateDailyConstructionPower(town, false);
```

### CalculateDailyConstructionPowerWithoutBoost
`public override int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**Purpose:** Calculates the current value or result of daily construction power without boost.

```csharp
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.CalculateDailyConstructionPowerWithoutBoost(town);
```

### GetBoostAmount
`public override int GetBoostAmount(Town town)`

**Purpose:** Reads and returns the boost amount value held by this instance.

```csharp
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.GetBoostAmount(town);
```

### GetBoostCost
`public override int GetBoostCost(Town town)`

**Purpose:** Reads and returns the boost cost value held by this instance.

```csharp
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.GetBoostCost(town);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BuildingConstructionModel>(new DefaultBuildingConstructionModel());
}
```

`BuildingConstructionModel` is declared as `MBGameModel<BuildingConstructionModel>` (`BuildingConstructionModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:310`.

## See Also

- [Area Index](../)