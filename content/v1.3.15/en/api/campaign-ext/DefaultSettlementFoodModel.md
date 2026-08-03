---
title: "DefaultSettlementFoodModel"
description: "Bannerlord's default town food income, garrison consumption, village supply, and storage-limit rules."
---
# DefaultSettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`  
**Base:** [`SettlementFoodModel`](../SettlementFoodModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs` (1.4.5 authority)

## One-line job

`DefaultSettlementFoodModel` combines town prosperity, garrison size, bound-village state, buildings, policies, perks, siege state, and food sold into the market to produce the daily net food change.

## Mental Model

The default implementation keeps two ledgers: `bonuses` are food sources, while `bonuses2` contains prosperity and garrison consumption. Issue effects are merged into the final explained result. Outside a siege, a town receives base supply from surrounding land and bound villages; during a siege that supply branch closes, leaving siege-specific rules and qualifying market sales. `Town.DailyTick` writes the result to `FoodStocks`, so this class is not a food-transfer Action.

The defaults also shape the UI explanation: base storage is `300`, every `40` prosperity consumes one food, every `20` garrison members consumes one food, and a castle receives an additional `150` storage capacity.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`SettlementFoodModel`](../SettlementFoodModel) / [`GameModels`](../GameModels) | Contract and registration/replacement boundary. |
| [`Town`](../../campaign/Town) | Reads `FoodChange` and capacity, then writes stock during its daily tick. |
| `Village` / `BuildingEffectEnum` | Provide bound-village hearth, food production, and stock/consumption effects. |
| `PerkHelper` / `DefaultPolicies.HuntingRights` | Add conditional explained factors for siege, garrison, and policy state. |
| `IssueModel` | Injects `DefaultIssueEffects.SettlementFood`. |

## Default rules

| Member or phase | 1.4.5 behavior |
| --- | --- |
| `FoodStocksUpperLimit` | Returns `300`; `CastleFoodStockUpperLimitBonus` returns `150`. |
| Prosperity and garrison consumption | `town.Prosperity / 40` and `garrisonMembers / 20`; siege-related Steward/Medicine perks can change the explained values. |
| Non-siege supply | Base supply is `15` for a town and `10` for a village path; a normal bound village adds `(hearth + 1) * 6`, followed by food-production building effects. |
| Siege supply | Surrounding-land and bound-village supply are skipped; siege perks apply, while sold categories marked `BonusToFoodStores` can still add stock. |
| Other factors | Hunting Rights adds `2`; building food-consumption, issue, and perk effects are merged through `ExplainedNumber`. |

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null)
{
    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float explainedChange = model
        .CalculateTownFoodStocksChange(town, includeDescriptions: true)
        .ResultNumber;
    int capacity = town.FoodStocksUpperLimit();
}
```

To change the default policy, derive from `DefaultSettlementFoodModel` or `SettlementFoodModel` and register `gameStarter.AddModel(new MySettlementFoodModel())` in `InitializeGameStarter`. Do not change `town.FoodStocks` or call a supply Action from the Model.

## Risks and version boundary

- `includeMarketStocks` reads `Town.SoldItems`, which represents market activity that already happened; a per-frame preview must not treat it as certain daily production.
- The siege branch closes village and land supply. Adding it unconditionally changes siege pressure and feeds into loyalty, prosperity, and militia.
- `Town.DailyTick` updates `RemainingFoodPercentage` when stock reaches zero; preserve bounded, explainable negative results.
- This class computes only. Food state is owned and saved by settlement/tick code; adding persistence fields to the Model increases compatibility risk.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementFoodModel](../SettlementFoodModel)
- [Related: SettlementProsperityModel](../SettlementProsperityModel) · [SettlementGarrisonModel](../SettlementGarrisonModel)
- [Downstream: Town](../../campaign/Town)

