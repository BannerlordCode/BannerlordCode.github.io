---
title: "BuildingConstructionModel"
description: "The replaceable campaign model contract for daily settlement construction power and reserve boost costs and rewards."
---
# BuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`  
**Base:** `MBGameModel<BuildingConstructionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`

## One-line job

`BuildingConstructionModel` defines the daily construction power of a town or castle and the cost and reward for spending reserve boost, but it does not write `Building.BuildingProgress` or `Town.BoostBuildingProcess`.

## Mental model

Treat this as the provider of the construction formula, not the building queue. `Town.Construction` and `Town.ConstructionExplanation` read it from `Campaign.Current.Models.BuildingConstructionModel`; `BuildingsCampaignBehavior.TickCurrentBuildingForTown` then adds the result to the current `Building` and consumes boost reserve. `BuildingHelper.GetDaysToComplete` also reads it to estimate remaining days.

This puts the type in the Campaign Model layer. It may read prosperity, loyalty, governor, building, and market inputs, but its calculation methods should not trigger Actions, edit rosters, pay gold, or write settlement state back. Replace the model to change rules; use the owning behavior or Action to apply world changes.

## When to use / when not to use

- Subclass and register it during campaign startup when changing daily construction speed, town/castle boost prices, boost rewards, or explanation factors.
- Read the current model from `Campaign.Current.Models` when displaying construction power or estimates; do not bypass the registered model with `new DefaultBuildingConstructionModel()`.
- Do not use this model to choose the building queue; `BuildingScoreCalculationModel` and `BuildingsCampaignBehavior` own that decision.
- Do not edit `BuildingProgress`, `BoostBuildingProcess`, or the building queue inside a calculation method. The daily behavior would apply the result again or at the wrong lifecycle stage.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | Stores and exposes the registered model after campaign startup. |
| [`Town`](../../campaign/Town) / [`Building`](../Building) | Supplies prosperity, loyalty, governor, current project, reserve, and progress; `Town` exposes the calculated values. |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | Adds `Town.Construction` to the current building and consumes reserve daily; it skips construction during sieges or without a project. |
| [`BuildingHelper`](../BuildingHelper) | Uses no-boost construction power and boost costs to estimate completion time. |
| [`DefaultBuildingConstructionModel`](../DefaultBuildingConstructionModel) / [`BuildingEffectModel`](../BuildingEffectModel) | Provide the vanilla formula and related building effects; neither owns the behavior's state write-back. |

## Public contract

| Member | Use, timing, and side effects |
| --- | --- |
| `TownBoostCost` | Cost unit for one reserve boost step in non-castle settlements; consumers use it when consuming `Town.BoostBuildingProcess`. It is a rule constant, not the current reserve balance. |
| `TownBoostBonus` | Base construction reward for one town reserve step. An implementation may modify the total through governor perks. |
| `CastleBoostCost` | Cost unit for castle reserve boost; it must not be confused with `TownBoostCost`. |
| `CastleBoostBonus` | Base construction reward for one castle reserve step. |
| `CalculateDailyConstructionPower(Town, bool)` | Returns an `ExplainedNumber`; `ResultNumber` is daily construction power and `includeDescriptions` only controls explanation factors. |
| `CalculateDailyConstructionPowerWithoutBoost(Town)` | Returns daily construction power with `BoostBuildingProcess` omitted, for completion estimates and other base-capacity comparisons. |
| `GetBoostCost(Town)` | Selects the implementation's town or castle boost cost from the settlement type. |
| `GetBoostAmount(Town)` | Returns the construction amount for one boost step; an implementation may adjust it from the governor and perks. |

## Real access and replacement path

Read the active rule from the initialized campaign model collection:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .FirstOrDefault(settlement => settlement.IsTown && settlement.Town != null)
    ?.Town;

if (Campaign.Current != null && town != null)
{
    BuildingConstructionModel model = Campaign.Current.Models.BuildingConstructionModel;
    ExplainedNumber explanation = model.CalculateDailyConstructionPower(
        town, includeDescriptions: true);
    int basePower = model.CalculateDailyConstructionPowerWithoutBoost(town);
    int boostCost = model.GetBoostCost(town);
}
```

Register a custom model during `CampaignGameStarter` initialization rather than replacing it inside a daily tick:

```csharp
if (gameStarter is CampaignGameStarter campaignStarter)
{
    campaignStarter.AddModel(new MyBuildingConstructionModel());
}
```

## Risks and version boundary

- `CalculateDailyConstructionPower` returns today's construction points, not a new `BuildingProgress`; adding it again applies construction twice.
- `CalculateDailyConstructionPowerWithoutBoost` may be used as a divisor by `BuildingHelper.GetDaysToComplete`. A custom model should not return zero for a productive settlement unless every caller also handles division by zero.
- `BuildingsCampaignBehavior` skips construction during a siege or with an empty queue; the model should not secretly edit the queue to compensate.
- `TownBoostCost` and `CastleBoostCost` participate in both reserve consumption and time estimates. Changing only one side makes the UI estimate disagree with daily progress.
- Access requires an assembled `Campaign.Current.Models`. Do not query settlement models from `OnSubModuleLoad`, before Campaign exists.
- This page uses 1.4.5 source as the semantic authority. Recheck the implementation and call sites for the runtime 1.3.15 build rather than treating the default constants as a cross-version guarantee.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default implementation: DefaultBuildingConstructionModel](../DefaultBuildingConstructionModel)
- [Related: BuildingScoreCalculationModel](../BuildingScoreCalculationModel) · [BuildingEffectModel](../BuildingEffectModel)
- [Consumers: Town](../../campaign/Town) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
