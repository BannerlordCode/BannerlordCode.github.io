---
title: "PregnancyModel"
description: "Calculates daily pregnancy chance and exposes the duration used by the pregnancy behavior."
---
# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`  
**Base:** `MBGameModel<PregnancyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPregnancyModel.cs`

## One-line job

`PregnancyModel` supplies the daily chance and duration policy for hero pregnancy. `PregnancyCampaignBehavior` owns proximity checks, random rolls, pregnancy records, childbirth, and save data.

## Mental Model

The model is queried once the behavior has established that spouses are nearby and eligible. The behavior then compares a random roll with `GetDailyChanceOfPregnancyForHero` and stores a `Pregnancy` with `PregnancyDurationInDays`. A model replacement changes probability or duration, not the pregnancy list or childbirth state.

```text
Hero + spouse + proximity/eligibility
          -> PregnancyModel chance/duration
          -> PregnancyCampaignBehavior random roll
          -> Pregnancy record -> childbirth events and save
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the model registry and campaign time. |
| [`Hero`](../../campaign/Hero) | Supplies age, spouse, alive/prisoner, and clan context. |
| `PregnancyCampaignBehavior` | Owns rolls, pregnancy records, and persistence. |
| [`CampaignEvents`](../CampaignEvents) | Delivers childbirth and hero lifecycle events. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetDailyChanceOfPregnancyForHero` | Return a bounded daily probability. | Behavior daily tick |
| `PregnancyDurationInDays` | Return gestation duration used for the record. | Pregnancy creation and log retention |

## Real access path

```csharp
public float ReadPregnancyChance(Hero hero)
{
    if (Campaign.Current == null || hero == null)
    {
        return 0f;
    }
    return Campaign.Current.Models.PregnancyModel
        .GetDailyChanceOfPregnancyForHero(hero);
}
```

The behavior performs the random comparison and creates the saved record. Do not create a second pregnancy from a UI or conversation callback.

## Risks and debugging order

1. Return a probability in the expected range; values above one make every daily roll succeed.
2. Keep duration positive and compatible with `CampaignTime.DaysFromNow`.
3. Eligibility and proximity belong to the behavior; do not bypass them inside a replacement model.
4. Pregnancy records are save data owned by the behavior, not by the model.
5. Childbirth emits events and creates heroes; never invoke those Actions from the chance method.

## Navigation

- [Campaign-ext models family](../models/)
- [Hero](../../campaign/Hero)
- [CampaignEvents](../CampaignEvents)
- [MarriageModel](../MarriageModel)
- [Save system guide](../../../guide/save-system-guide)
