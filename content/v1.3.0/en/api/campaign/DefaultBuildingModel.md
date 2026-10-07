---
title: "DefaultBuildingModel"
description: "Auto-generated class reference for DefaultBuildingModel."
---
# DefaultBuildingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingModel : BuildingModel`
**Base:** `BuildingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingModel.cs`

## Overview

`DefaultBuildingModel` answers a single yes/no question — may this building type be constructed in this settlement — and the whole class is one long identity comparison against the building types shipped with the game. `CanAddBuildingTypeToTown` (`TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingModel.cs:12`) walks four groups: twelve settlement-prefixed types require a town (`:14`), twelve castle-prefixed types require a castle (`:24`), three daily-processor settlement types require a town (`:28`), and the last line returns true only when the type is one of the castle daily processors *and* the settlement is a castle — with the inverted polarity that makes it a catch-all refusal (`:30`).

## Mental Model

The final expression is the one to read twice, because it is a negative filter disguised as a positive one: `(type != A && type != B && type != C && type != D) || town.IsCastle` means *any* building type the model does not recognise is accepted into a castle but rejected everywhere else (`:30`). A custom building type added by a mod therefore gets into castles by default and nowhere else, with no error — which is a useful fact for modders and a trap for anyone extending the type list. The method is also not the only gate: `BuildingsCampaignBehavior.cs:175` pairs it with a separate check that the town does not already contain that building type and that nothing is in progress, so returning `true` here does not guarantee a build is offered. Note that the town/castle split is a property of the settlement, not of the building's `IsDailyProject` flag, so the same building type cannot be made available to both settlement kinds by editing data alone.

## Key Methods

### CanAddBuildingTypeToTown
`public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`

**Purpose:** Checks whether this instance meets the preconditions for add building type to town.

```csharp
DefaultBuildingModel defaultBuildingModel = ...;
var result = defaultBuildingModel.CanAddBuildingTypeToTown(buildingType, town);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BuildingModel>(new DefaultBuildingModel());
}
```

`BuildingModel` is declared as `MBGameModel<BuildingModel>` (`BuildingModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:349`.

## See Also

- [Area Index](../)