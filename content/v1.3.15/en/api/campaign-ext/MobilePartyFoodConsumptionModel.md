---
title: "MobilePartyFoodConsumptionModel"
description: "The replaceable campaign policy that converts party members, prisoners, perks, and campaign state into daily food consumption and whether a party consumes food."
---
# MobilePartyFoodConsumptionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`  
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## One-line responsibility

It decides whether a `MobileParty` participates in the food system and converts member/prisoner counts and campaign modifiers into daily consumption. It only reports computed results; it does not directly remove food, slaughter livestock, or handle starvation consequences. Daily consumption, AI food buying, and party attributes all read this result, so a custom implementation must keep pure query semantics.

## Mental Model

This is the rule layer for food numbers. `MobileParty.FoodChange` first calls `CalculateDailyBaseFoodConsumptionf` to get the base consumption, then calls `CalculateDailyFoodConsumptionf` to apply perk, terrain, army, siege, and sea conditions. `FoodConsumptionBehavior`, during the daily party tick, first uses `DoesPartyConsumeFood` to decide whether to execute consumption, then reduces `RemainingFoodPercentage` based on `FoodChange`, deducting inventory food, slaughtering livestock, or sharing food from army members as needed.

```text
members / prisoners / perks / terrain / army / siege
                 |
                 v
Campaign.Current.Models.MobilePartyFoodConsumptionModel
        +--------+-------------------------+
        v                                  v
base consumption -> final consumption    participation in food system
        |                                  |
        v                                  v
MobileParty.FoodChange             FoodConsumptionBehavior
                                           |
                                           v
                              consume / slaughter / share / starve
```

Model properties and methods may be read repeatedly by UI, AI food buying, and party attributes, so they must stay side-effect free. In particular, do not modify `ItemRoster` or `RemainingFoodPercentage` directly inside a calculation method; that would duplicate the daily processing of `FoodConsumptionBehavior`. `DoesPartyConsumeFood` is an eligibility check for whether the behavior executes food deduction; it does not mean the `FoodChange` property automatically becomes zero.

## When to use and when not to

- Replace this Model when you want to change the member-to-food-unit conversion, perk adjustments to consumption, or which parties participate in the food system.
- To display a party's daily consumption, read from `Campaign.Current.Models.MobilePartyFoodConsumptionModel` or `MobileParty.FoodChangeExplained`.
- Do not deduct food, slaughter livestock, share inventory, add starvation morale penalties, or dispatch `OnPartyConsumedFood` inside the model; those belong to `FoodConsumptionBehavior`.
- Do not treat `DoesPartyConsumeFood` as a "current inventory is sufficient" check; it only judges whether the party type and lifecycle participate in the food system.

## Dependencies
### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry. |
| [`GameModels`](../GameModels) | Holds the registered food-consumption model during campaign construction. |
| [`MobileParty`](../../campaign/MobileParty) | Supplies members, prisoners, leader, army, siege, terrain, and sea state. |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | Supplies Epic perk thresholds for the default implementation. |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Reads the computed result through `FoodChange`, `BaseFoodChange`, and `FoodChangeExplained`. |
| [`FoodConsumptionBehavior`](../FoodConsumptionBehavior) | Performs the actual daily deduction, slaughter, sharing, and event notification. |
| [`PartiesBuyFoodCampaignBehavior`](../PartiesBuyFoodCampaignBehavior) | Uses `DoesPartyConsumeFood` and `FoodChange` to decide whether and how much to buy. |
| [`PartyFoodBuyingModel`](../PartyFoodBuyingModel) | Supplies the reserve-target days and candidate-item rules; it consumes the food change produced by this model. |
| [`PartyMoraleModel`](../PartyMoraleModel) | Participates in the starvation morale consequences when food stays insufficient. |

### Events, Actions, and save boundaries

The model has no save payload of its own and dispatches no consumption events. `FoodConsumptionBehavior.SyncData` saves its internal item-version check state; the actual inventory changes go through `ItemRoster` and game behaviors, and starvation consequences also trigger morale, skill, and campaign events. The model should only return an `ExplainedNumber` or a boolean.

## Member contract

| Member | Purpose and timing | Default behavior and side-effect boundary |
| --- | --- | --- |
| `NumberOfMenOnMapToEatOneFood` | Denominator that converts the number of men on the map into one unit of daily food consumption. | Default `20`; returns only a constant, does not modify the party. |
| `CalculateDailyBaseFoodConsumptionf(MobileParty, bool)` | Builds base consumption from all members plus half the prisoner count. | Default `-(NumberOfAllMembers + NumberOfPrisoners / 2) / 20`, calculated for at least `1` person; returns an explained value. The trailing `f` is the real API name from source. |
| `CalculateDailyFoodConsumptionf(MobileParty, ExplainedNumber)` | Applies perk, army, siege, terrain, and sea adjustments on top of the base consumption. | The default final result cannot exceed `-0.01f`; it does not deduct food. |
| `DoesPartyConsumeFood(MobileParty)` | Tells whether the party should be processed for daily food by `FoodConsumptionBehavior`. | The default requires the party to be active and excludes garrisons, caravans, bandits, militia, patrols, and villagers. |

Default adjustments include: bandit members with `Promises`, `Spartan`, non-sea `WarriorsDiet`, quartermaster `PriceOfLoyalty`, forest/steppe `Foragers`, besieged garrison `StrongLegs`, army `StiffUpperLip`, and siege `SoundReserves`/`MasterOfPlanning`. These should be obtained by delegating to the target version's default model; do not copy a possibly stale set of perk values into a mod.

## Real access path

The sequence below matches the source path of `MobileParty.FoodChange` and `FoodChangeExplained`:

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

    // Two equivalent ways to get it: the model property accessor, or generic GetModel<T>
    MobilePartyFoodConsumptionModel model =
        Campaign.Current.Models.MobilePartyFoodConsumptionModel;
    // MobilePartyFoodConsumptionModel model =
    //     Campaign.Current.Models.GetModel<MobilePartyFoodConsumptionModel>();
    ExplainedNumber baseConsumption =
        model.CalculateDailyBaseFoodConsumptionf(party, includeDescription: true);
    return model.CalculateDailyFoodConsumptionf(party, baseConsumption);
}
```

To check whether the behavior will execute the deduction, read additionally:

```csharp
bool consumesFood = Campaign.Current.Models.MobilePartyFoodConsumptionModel
    .DoesPartyConsumeFood(party);
```

These calls read policy only. The real daily processing is triggered by `FoodConsumptionBehavior.DailyTickParty`; it also handles random inventory food consumption, livestock-to-meat conversion, army sharing, starvation morale penalties, and the `OnPartyConsumedFood` event.

## Customization boundary

If you only change the consumption multiplier, keep the vanilla base members, perk adjustments, and the `-0.01f` cap, then add a bounded factor. If you change `DoesPartyConsumeFood`, you must also review the food-buying behavior, the daily-consumption behavior, and the special caravan/garrison/villager logic, otherwise a party might stop being charged food while the AI still treats it as needing resupply, or vice versa. Do not expect `AddModel` inside a running behavior to rebuild the already-assembled `GameModels`.

## Risks and debugging order

1. **Treating a calculation as deduction:** `FoodChange` may be read many times by UI, AI, and behaviors; mutating inventory inside the model deducts twice.
2. **Ignoring the return sign:** the default consumption is negative, and `FoodConsumptionBehavior` uses it to compute the shortfall; returning a positive value makes a party appear to gain food from nothing.
3. **Skipping the minimum-consumption bound:** letting the final value reach `0` or a positive value breaks the starvation/resupply decisions; preserve the minimum negative constraint of the target version.
4. **Misunderstanding the eligibility check:** `DoesPartyConsumeFood` does not check current inventory, nor is it responsible for judging whether the party is currently starving.
5. **Inconsistent army sharing:** when food is short, the behavior shares from the army leader or attached parties; the model should not replicate that inventory transfer itself.
6. **Calling during initialization:** `Campaign.Current`, the map scene, and the current navigation face may not be ready yet; do not query the default model from the title screen or during static initialization.

## Version and navigation

The public interface is identical across v1.3.0, v1.3.15, and v1.4.5: the four public entry points (`NumberOfMenOnMapToEatOneFood`, `CalculateDailyBaseFoodConsumptionf`, `CalculateDailyFoodConsumptionf`, `DoesPartyConsumeFood`) keep their signatures, and the default base denominator is `20` men per food unit. The only difference is the set of perk, sea, and siege conditions in the default implementation; the target version's source is authoritative. When replacing across versions, prefer delegating to the current version's default implementation rather than copying the old formula into the new one.

- [Parent: Campaign extension API](../)
- [Party model family](../models/)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [↔ PartyMoraleModel](../PartyMoraleModel)
- [MobileParty](../../campaign/MobileParty)
- [FoodConsumptionBehavior](../FoodConsumptionBehavior)
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
