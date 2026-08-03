---
title: "MobilePartyFoodConsumptionModel"
description: "The replaceable campaign policy that turns party members, prisoners, perks, and state into daily food consumption."
---
# MobilePartyFoodConsumptionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`  
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## One-line job

It decides whether a `MobileParty` participates in the food system and converts members, prisoners, perks, and campaign state into daily consumption. It reports policy; it does not remove food, slaughter livestock, or apply starvation consequences itself.

## Mental Model

This is the food-number policy layer. `MobileParty.FoodChange` first calls `CalculateDailyBaseFoodConsumptionf`, then calls `CalculateDailyFoodConsumptionf` to apply perk, terrain, army, siege, and sea conditions. `FoodConsumptionBehavior` checks `DoesPartyConsumeFood` during the daily party tick, subtracts the resulting consumption from `RemainingFoodPercentage`, and then handles inventory food, livestock slaughter, army sharing, and starvation consequences.

```text
members / prisoners / perks / terrain / army / siege
                         |
                         v
Campaign.Current.Models.MobilePartyFoodConsumptionModel
          +--------------+-------------------------+
          v                                        v
base consumption -> final consumption       participation check
          |                                        |
          v                                        v
MobileParty.FoodChange                       FoodConsumptionBehavior
                                                     |
                                                     v
                                   consume / slaughter / share / starve
```

The model may be read by party properties, UI, AI, and food-buying code, so its methods must be side-effect free. Do not edit `ItemRoster` or `RemainingFoodPercentage` inside a calculation. `DoesPartyConsumeFood` determines whether the behavior processes the party; it does not automatically make the `FoodChange` property zero.

## When to use and when not to

- Replace this model to change the member-to-food conversion, perk adjustments, or which party types participate in daily consumption.
- Read `Campaign.Current.Models.MobilePartyFoodConsumptionModel` or `MobileParty.FoodChangeExplained` to display daily consumption.
- Do not remove food, slaughter livestock, share inventory, add starvation morale penalties, or dispatch `OnPartyConsumedFood` from this model. Those belong to `FoodConsumptionBehavior`.
- Do not treat `DoesPartyConsumeFood` as an inventory-sufficiency test; it only describes participation and party-type eligibility.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the active campaign and `Models` registry. |
| [`GameModels`](../GameModels) | Holds the registered food-consumption model during campaign construction. |
| [`MobileParty`](../../campaign/MobileParty) | Supplies members, prisoners, leader, army, siege, terrain, and sea state. |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | Supplies Epic perk thresholds used by the default implementation. |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Exposes `FoodChange`, `BaseFoodChange`, and `FoodChangeExplained`. |
| [`FoodConsumptionBehavior`](../FoodConsumptionBehavior) | Performs daily inventory consumption, slaughter, sharing, and event dispatch. |
| [`PartiesBuyFoodCampaignBehavior`](../PartiesBuyFoodCampaignBehavior) | Uses participation and `FoodChange` to decide whether and how much to buy. |
| [`PartyFoodBuyingModel`](../PartyFoodBuyingModel) | Supplies reserve targets and item candidates based on the consumption result. |
| [`PartyMoraleModel`](../PartyMoraleModel) | Supplies starvation morale consequences when food remains insufficient. |

### Events, Actions, and save boundaries

The model has no save payload and dispatches no consumption event. `FoodConsumptionBehavior.SyncData` stores its internal item-version check; inventory changes, starvation consequences, and campaign notifications happen in the behavior and its downstream systems. The model should return only `ExplainedNumber` or a boolean.

## Member contract

| Member | Purpose and timing | Default behavior and side-effect boundary |
| --- | --- | --- |
| `NumberOfMenOnMapToEatOneFood` | Denominator for converting map population into one unit of daily food. | `20`; reads only a constant. |
| `CalculateDailyBaseFoodConsumptionf(MobileParty, bool)` | Builds base consumption from all members plus half the prisoner count. | Defaults to `-(NumberOfAllMembers + NumberOfPrisoners / 2) / 20`, with at least one person; returns an explained value. The trailing `f` is the real API name. |
| `CalculateDailyFoodConsumptionf(MobileParty, ExplainedNumber)` | Applies perk, army, siege, terrain, and sea adjustments to the base value. | The default result is capped at a maximum of `-0.01f`; it does not consume inventory. |
| `DoesPartyConsumeFood(MobileParty)` | Tells the daily behavior whether this party participates in food processing. | The default requires an active party and excludes garrisons, caravans, bandits, militia, patrols, and villagers. |

Default adjustments include bandit members with `Promises`, `Spartan`, non-sea `WarriorsDiet`, quartermaster `PriceOfLoyalty`, forest/steppe `Foragers`, besieged garrison `StrongLegs`, army `StiffUpperLip`, and siege `SoundReserves`/`MasterOfPlanning`. Delegate to the target version's default model instead of copying perk values into a mod.

## Real access path

This sequence mirrors `MobileParty.FoodChange` and `FoodChangeExplained`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ExplainDailyFoodChange(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    MobilePartyFoodConsumptionModel model =
        Campaign.Current.Models.MobilePartyFoodConsumptionModel;
    ExplainedNumber baseConsumption =
        model.CalculateDailyBaseFoodConsumptionf(party, includeDescription: true);
    return model.CalculateDailyFoodConsumptionf(party, baseConsumption);
}
```

To check whether the behavior should process the party:

```csharp
bool consumesFood = Campaign.Current.Models.MobilePartyFoodConsumptionModel
    .DoesPartyConsumeFood(party);
```

These calls read policy only. `FoodConsumptionBehavior.DailyTickParty` performs the actual inventory removal, livestock-to-meat conversion, army sharing, starvation morale handling, and `OnPartyConsumedFood` dispatch.

## Customization boundary

For a consumption multiplier, preserve the vanilla base calculation, perk adjustments, and the `-0.01f` maximum before adding a bounded factor. If you change `DoesPartyConsumeFood`, review daily consumption, food buying, and the special caravan/garrison/villager paths together. Register the replacement during campaign startup; adding a model from a running behavior does not rebuild the existing `GameModels` container.

## Risks and debugging order

1. **Calculation mistaken for consumption:** `FoodChange` can be read by UI, AI, and behaviors; mutating inventory in the model removes food twice.
2. **Wrong sign:** the default result is negative and the behavior uses it to calculate shortage; a positive result makes a party appear to create food.
3. **Missing lower bound:** allowing zero or positive final consumption breaks starvation and replenishment decisions; preserve the target version's minimum negative value.
4. **Eligibility misunderstood:** `DoesPartyConsumeFood` does not inspect inventory and does not decide whether the party is currently starving.
5. **Army sharing duplicated:** the behavior shares food from an army leader or attached party when needed; the model must not implement that inventory transfer again.
6. **Early lifecycle:** campaign, map scene, and navigation data may not exist during title or module initialization; delay model queries until campaign setup.

## Version and navigation

The four public members and the default `20` people-per-food denominator are stable in v1.3.15 and v1.4.5. Default perk, sea, and siege conditions should be read from the target version's model. Delegate to the installed vanilla implementation when preserving cross-version behavior matters.

- [Parent: Campaign extension API](../)
- [Party model family](../models/)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [↔ PartyMoraleModel](../PartyMoraleModel)
- [MobileParty](../../campaign/MobileParty)
- [FoodConsumptionBehavior](../FoodConsumptionBehavior)
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
