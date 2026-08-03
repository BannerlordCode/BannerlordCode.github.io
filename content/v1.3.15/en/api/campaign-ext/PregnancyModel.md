---
title: "PregnancyModel"
description: "The replaceable policy for pregnancy duration, offspring outcomes, and daily conception chance without creating children or changing hero state."
---

# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPregnancyModel.cs`

## One-line responsibility

`PregnancyModel` defines conception chance, pregnancy duration, twins, sex, stillbirth, and labor-mortality rules. It supplies policy values; [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) and Actions perform the pregnancy, birth, event, and death transitions.

## Mental model

The model sits between the daily hero check and a lifecycle transition. `GameModels` resolves it at campaign startup. `PregnancyCampaignBehavior` checks eligible married heroes each day, reads `GetDailyChanceOfPregnancyForHero`, and may then call [MakePregnantAction](../MakePregnantAction). The conception event creates a saved internal record containing mother, father, and due date. At delivery, the behavior reads the other probability properties, creates offspring, publishes birth events, clears pregnancy state, and may call a death Action.

Model methods may be queried by daily ticks, AI, or UI previews more than once, so they must remain pure calculations. Changing `PregnancyDurationInDays` affects `CampaignTime` due dates and log retention; changing mortality, stillbirth, or twins changes population and save state, so it should be installed before a campaign begins rather than swapped during play.

## When to use and when not to

- Replace the model to adjust pregnancy duration, age/child-count chance, twins, or delivery outcomes; register it during campaign startup.
- Read the current chance through `Campaign.Current.Models.PregnancyModel` after confirming the hero, spouse, clan, and campaign are valid.
- Do not set `Hero.IsPregnant`, create a `Hero`, publish birth events, or call `KillCharacterAction` from the model. It is not a lifecycle controller.
- Do not treat these values as integer percentages. The game tests `MBRandom.RandomFloat <= probability`; return bounded `[0, 1]` probabilities and a positive duration.

## Dependencies

#### Upstream

- [Campaign](../../campaign/Campaign) and [GameModels](../GameModels) own the registered model.
- [Hero](../../campaign/Hero) supplies age, spouse, children, clan, and perks.
- `CampaignOptions` acceleration mode is used by the default implementation to select an 18- or 36-day duration.

#### Downstream

- [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) reads daily chance and duration in `DailyTickHero` and saves its pregnancy list.
- [MakePregnantAction](../MakePregnantAction) creates the pregnancy state; delivery uses `HeroCreator.DeliverOffSpring` and campaign birth events.
- [KillCharacterAction](../KillCharacterAction) is used only when the delivery mortality rule and original conditions select it; the model must not call it.
- `ChildbirthLogEntry`, `PregnancyLogEntry`, and `CampaignEvents` consume the duration and birth outcomes.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `PregnancyDurationInDays` | Supplies the due-date duration used by `CampaignTime.DaysFromNow`; the default is 18 or 36 days by acceleration mode. | Returns a period; it does not create a record. |
| `MaternalMortalityProbabilityInLabor` | Tests maternal death after delivery; the default is 0.015. | Does not execute the death Action. |
| `StillbirthProbability` | Tests each fetus before creating an offspring; the default is 0.01. | Does not display a message or publish birth. |
| `DeliveringFemaleOffspringProbability` | Chooses the sex of a surviving offspring; the default is 0.51. | Does not create a `Hero`. |
| `DeliveringTwinsProbability` | Tests once at delivery for one or two offspring; the default is 0.03. | Does not mutate the mother or pregnancy list. |
| `GetDailyChanceOfPregnancyForHero(Hero)` | Computes the daily conception chance after the spouse-location check; the default considers age, child count, clan size, and Virile perk. | Does not set `IsPregnant` or call `MakePregnantAction`. |

## Real query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

Hero hero = Hero.MainHero;
PregnancyModel pregnancy = Campaign.Current.Models.PregnancyModel;
float dailyChance = 0f;

if (hero.IsFemale && hero.Spouse != null && hero.IsAlive && !hero.IsPregnant)
{
    dailyChance = pregnancy.GetDailyChanceOfPregnancyForHero(hero);
}
```

This reads a policy result only. The original `PregnancyCampaignBehavior` also checks spouse location, age, life/death options, and other preconditions before `MakePregnantAction` creates state; a mod must not turn a non-zero query into a direct field assignment.

## Risks and debugging boundaries

1. Calling `MakePregnantAction` from `GetDailyChanceOfPregnancyForHero` can create duplicate records in one daily check. The model may be read more than once, so conception must stay outside it.
2. `PregnancyDurationInDays` affects both due-date processing and log retention. Swapping the duration during play can leave existing saves with due dates that no longer match the active rule.
3. The default model reads `hero.Clan`, `hero.Spouse`, and spouse perks. Callers must preserve those preconditions or a null clan/spouse can crash the calculation.
4. A probability outside `[0, 1]` makes `MBRandom.RandomFloat <= probability` always succeed or fail and changes the population curve. Keep age and difficulty boundaries while customizing it.
5. The behavior's `SyncData` saves the pregnancy list; the model does not own that state. Storing pregnancy records or custom counters in the model loses them when the model is rebuilt or a save is reloaded.

## Navigation

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: MarriageModel](../MarriageModel) · [AgeModel](../AgeModel)
- [Related: Hero](../../campaign/Hero) · [Campaign](../../campaign/Campaign) · [MakePregnantAction](../MakePregnantAction)
