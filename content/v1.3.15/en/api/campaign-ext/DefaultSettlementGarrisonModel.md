---
title: "DefaultSettlementGarrisonModel"
description: "Bannerlord's default garrison change, reinforcement, party allocation, and wall-repair rules."
---
# DefaultSettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`  
**Base:** [`SettlementGarrisonModel`](../SettlementGarrisonModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs` (1.4.5 authority)

## One-line job

`DefaultSettlementGarrisonModel` uses rebellion, issues, garrison strength, wage limits, prosperity, food potential, party capacity, and wall state to calculate default garrison decisions.

## Mental Model

The default model feeds three consumers. Daily reinforcement is applied by `GarrisonRecruitmentCampaignBehavior`; party take/leave values guide AI decisions; wall repair is consumed by `Town`, which writes each wall section gradually. The Model owns none of the roster, wage, or wall state, so changing it never executes a transfer by itself.

Base garrison growth is conditional: a rebel-owned town or castle that is not part of a kingdom gets `2`, then settlement-garrison issue effects are added. The default auto-recruitment limit is one troop per day.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`SettlementGarrisonModel`](../SettlementGarrisonModel) / [`GameModels`](../GameModels) | Contract and default registration boundary. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | Supply settlement kind, garrison strength, food, prosperity, and wall state. |
| [`MobileParty`](../../campaign/MobileParty) | Supply capacity, members, leader, army, and wage-limit context. |
| `GarrisonRecruitmentCampaignBehavior` | Applies recruitment, base change, and roster writes during the daily campaign phase. |
| `Town.RepairWallsOfSettlementDaily` / `BuildingEffectEnum.WallRepairSpeed` | Consume and apply the wall-repair cap and building effect. |

## Default rules

| Member | 1.4.5 behavior |
| --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | Always returns `1`. |
| `CalculateBaseGarrisonChange` | Adds `2` for a rebel town/castle outside a kingdom, then merges `SettlementGarrison` issue effects. |
| `FindNumberOfTroopsToTakeFromGarrison` | Uses current and ideal garrison strength to the `1.5` power, party capacity, and leader identity; leaves at least `50` regulars in a town or `25` in a castle. |
| `FindNumberOfTroopsToLeaveToGarrison` | Combines clan economy, prosperity, food potential, garrison deficit, wounded troops, and army state; returns a bounded share of available regulars. |
| `GetMaximumDailyRepairAmount` | Returns zero during a siege or when walls are full; otherwise starts at `max section HP * section count * 0.04` and adds town wall-repair building effects. |

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
if (settlement?.Town != null)
{
    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    ExplainedNumber change = model.CalculateBaseGarrisonChange(
        settlement, includeDescriptions: true);
    float repairAmount = model.GetMaximumDailyRepairAmount(settlement);
    int recruitmentLimit = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
}
```

Register a custom strategy with `gameStarter.AddModel(new MySettlementGarrisonModel())` in startup. The actual roster transfer remains the responsibility of behaviors and roster APIs.

## Risks and version boundary

- The take/leave formulas read `LeaderHero`, `PartySizeLimit`, `Army`, and `GarrisonParty`; tests must use an initialized campaign context rather than a fake temporary party.
- The regular-troop floor prevents the default model from emptying a settlement in one decision. Removing it changes long-term defense and save state.
- `Town` consumes repair amount section by section. Treating the result as a ratio repairs walls repeatedly or too quickly.
- This Model has no save fields. Persisting AI decisions in it introduces unnecessary lifecycle and save-compatibility risk.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementGarrisonModel](../SettlementGarrisonModel)
- [Related: SettlementFoodModel](../SettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel)
- [Downstream: Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty)
