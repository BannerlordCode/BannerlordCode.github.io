---
title: "DefaultBuildingEffectModel"
description: "Auto-generated class reference for DefaultBuildingEffectModel."
---
# DefaultBuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingEffectModel : BuildingEffectModel`
**Base:** `BuildingEffectModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs`

## Overview

`DefaultBuildingEffectModel` answers "what does this building actually do", and almost all of the work is done by the building type itself. `GetBuildingEffect` (`TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs:14`) reads the base amount straight off the building type at the building's current level (`:16`) and only intervenes in three cases. A bound-village-heart effect is multiplied by the summed hearths of every village belonging to the town, because that effect is defined per hearth rather than per building (`:21`, `:25`). A castle granary's food stock additionally takes the Engineering Battlements perk (`:29`). And the Steward Contractors and MasterOfPlanning perks apply to every effect regardless of building type (`:31`, `:32`), with Charm PublicSpeaker added on top for a marketplace or a daily festival building (`:34`–`:36`).

## Mental Model

The per-hearth multiplication is the reason this model exists at all: the building type's base value is a rate that the model has to scale into a total, and only for that one effect. Everything else is a flat pass-through with perk modifiers bolted on, which means the building data files remain the source of truth for effect sizes and an override that changes `GetBuildingEffect` is replacing the *modifier* logic, not the underlying balance. Note the ordering — the hearth multiplication replaces the `ExplainedNumber` rather than adding to it (`:25`), so the perk bonuses applied afterwards at `:31`–`:36` stack on the already-scaled total, and an override that adds a term before the multiplication will get it scaled too. `DefaultSettlementPatrolModel.cs:55` is a representative consumer and shows the expected usage: the returned value is switched on as an integer to pick a patrol party size, so returning a fractional number there is a real behaviour change rather than a cosmetic one.

## Key Methods

### GetBuildingEffect
`public override ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)`

**Purpose:** Reads and returns the building effect value held by this instance.

```csharp
DefaultBuildingEffectModel defaultBuildingEffectModel = ...;
var result = defaultBuildingEffectModel.GetBuildingEffect(building, effect);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BuildingEffectModel>(new DefaultBuildingEffectModel());
}
```

`BuildingEffectModel` is declared as `MBGameModel<BuildingEffectModel>` (`BuildingEffectModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:311`.

## See Also

- [Area Index](../)