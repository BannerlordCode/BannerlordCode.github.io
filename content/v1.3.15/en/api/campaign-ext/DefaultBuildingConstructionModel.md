---
title: "DefaultBuildingConstructionModel"
description: "Bannerlord's default construction power, reserve boost, prosperity, building, loyalty, and governor-perk rules."
---
# DefaultBuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`  
**Base:** [`BuildingConstructionModel`](../BuildingConstructionModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs` (1.4.5 authority)

## One-line job

`DefaultBuildingConstructionModel` combines prosperity, reserve boost, governor skills and perks, market production, the current building's effects, loyalty, and culture into default daily construction power, while providing town and castle boost costs and rewards.

## Mental model

The default baseline is `town.Prosperity * 0.01`. The implementation then adds reserve boost from `Town.BoostBuildingProcess`, governor skill and perk effects, market-sold production materials, project-specific perks, building effects, loyalty, and the Battanian construction feat, finally limiting the result to a non-negative value.

The result is still only today's construction amount. `Town.Construction` reads it, and `BuildingsCampaignBehavior` writes it to the current building and consumes reserve. The model does not complete buildings or remove queue entries.

## Dependencies

| Type or flow | Relationship |
| --- | --- |
| [`BuildingConstructionModel`](../BuildingConstructionModel) / [`GameModels`](../GameModels) | Defines the contract and supplies the active implementation after campaign startup. |
| [`Town`](../../campaign/Town) / [`Building`](../Building) | Supplies prosperity, loyalty, governor, current project, and reserve inputs. |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | Consumes `Town.Construction` daily, advances the building, and consumes reserve. |
| [`BuildingHelper`](../BuildingHelper) | Uses no-boost power and costs to estimate completion time. |

## Default constants and formula

| Member or stage | 1.4.5 default behavior |
| --- | --- |
| `TownBoostCost` / `TownBoostBonus` | `500` and `50` for towns. |
| `CastleBoostCost` / `CastleBoostBonus` | `250` and `20` for castles. |
| Base construction power | `Prosperity * 0.01`, recorded with the prosperity explanation factor. |
| Reserve boost | `BoostBuildingProcess / corresponding cost`, capped at `1`, multiplied by `GetBoostAmount`; a town governor with `Clockwork` can increase the boost reward. |
| Governor and prisoners | The governor must actually be assigned to the settlement; Town Project Building Bonus, `ForcedLabor`, engineering perks, and other helpers affect the result. Forced Labor also adds a capped factor from prisoner count. |
| Market production | Each `BonusToProduction` item in `SoldItems` contributes `0.25`. |
| Current project | Military projects can receive `Confidence`; the marketplace project can receive `SelfMadeMan`; the building's `ConstructionPerDay` effect is also added. |
| Loyalty and culture | Loyalty `>=75` maps to up to a `20%` factor; `25 < loyalty <= 50` applies a penalty; `<=25` limits the result to `0`; loyalty above `25` plus the Battanian construction feat adds a culture factor. |
| Final step | `LimitMin(0)`, so final construction power cannot be negative. |

## Public members and timing

| Member | Use and boundary |
| --- | --- |
| `CalculateDailyConstructionPower` | Creates an `ExplainedNumber` and runs the internal formula; `includeDescriptions` is used by `Town.ConstructionExplanation` and UI factor display. |
| `CalculateDailyConstructionPowerWithoutBoost` | Runs the same formula while explicitly omitting reserve boost, for `BuildingHelper.GetDaysToComplete` and base-capacity estimates. |
| `GetBoostCost` | Selects `250` or `500` from `town.IsCastle`; it does not read or consume current reserve. |
| `GetBoostAmount` | Starts with `50` for towns or `20` for castles and adds secondary rewards from governor `Relocation` and `SpringOfGold`; it returns one reserve step's reward. |

## Real consumer path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .FirstOrDefault(settlement => settlement.IsFortification && settlement.Town != null)
    ?.Town;

if (Campaign.Current != null && town != null)
{
    float construction = town.Construction;
    ExplainedNumber explanation = town.ConstructionExplanation;
    int days = town.CurrentBuilding == null
        ? -1
        : Helpers.BuildingHelper.GetDaysToComplete(town.CurrentBuilding, town);
}
```

During the daily campaign flow, `BuildingsCampaignBehavior` adds `town.Construction` to `Building.BuildingProgress`, consumes the town or castle boost cost from `BoostBuildingProcess`, and then checks completion. Reading the result and applying the write-back must remain separate.

## Replacement entry point

```csharp
if (gameStarter is CampaignGameStarter campaignStarter)
{
    campaignStarter.AddModel(new MyBuildingConstructionModel());
}
```

The snippet shows the registration shape, not a complete balance rule. A real replacement must decide whether to preserve vanilla loyalty, building-effect, and `LimitMin(0)` boundaries.

## Risks and version boundary

- `GetBoostAmount` is the reward for one reserve step, not the total value of the current `BoostBuildingProcess`; adding it once without accounting for reserve steps changes the unit.
- The no-boost and boosted methods must use compatible units or `BuildingHelper.GetDaysToComplete` will disagree with actual ticks and may divide by zero.
- `town.Governor`, `OwnerClan`, `Settlement.Party.PrisonRoster`, and the current building are initialized campaign state; do not call the full vanilla formula on detached test objects.
- The very-low-loyalty `LimitMax(0)` is an important boundary preventing construction at extreme loyalty loss. Removing it changes long-term settlement state before rebellion.
- The model result does not replace the siege check or completion check in `BuildingsCampaignBehavior`. Do not dequeue buildings or edit reserve from the model.

## Navigation

- [Contract: BuildingConstructionModel](../BuildingConstructionModel)
- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Related: BuildingHelper](../BuildingHelper) · [BuildingScoreCalculationModel](../BuildingScoreCalculationModel)
- [Consumers: Town](../../campaign/Town) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
