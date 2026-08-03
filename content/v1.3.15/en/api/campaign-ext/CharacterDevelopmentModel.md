---
title: "CharacterDevelopmentModel"
description: "Calculates skill learning, XP thresholds, focus, attributes, and perk progression for HeroDeveloper."
---
# CharacterDevelopmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`  
**Base:** `MBGameModel<CharacterDevelopmentModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCharacterDevelopmentModel.cs`

## One-line job

`CharacterDevelopmentModel` defines progression math: XP requirements, learning limits/rates, skill-level changes, trait levels, and the next focus, attribute, or perk choice. It does not grant XP or mutate a `HeroDeveloper` on its own.

## Mental Model

`HeroDeveloper` owns persistent XP, focus points, attributes, and perk selections. It asks this model for thresholds and rates, then applies the result to the hero and raises the appropriate progression notifications. Battle rewards, quests, and daily systems are upstream XP producers; they should not duplicate the formula. A replacement model must preserve the monotonic relationship between XP and levels and the cap properties used by UI and save code.

```text
XP / focus / attributes / SkillObject
              |
              v
Campaign.Current.Models.CharacterDevelopmentModel
              |
              +--> threshold and learning queries
              |
              v
HeroDeveloper -> persistent Hero progression -> UI / perks / models
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Supplies the active progression model. |
| [`Hero`](../../campaign/Hero) / `HeroDeveloper` | Own persistent XP, focus, attributes, and perks. |
| [`SkillObject`](../../core-extra/SkillObject) / `TraitObject` | Identify the progression track. |
| `ExplainedNumber` | Carries learning limits and rate explanations. |

### Downstream

| Type | Relation |
| --- | --- |
| `HeroDeveloper` | Uses every threshold and learning method while applying progression. |
| `TraitLevelingHelper` | Uses trait XP conversion methods. |
| `DefaultPartyWageModel` / `DefaultDiplomacyModel` | Read skill caps and epic-perk thresholds. |
| [`ViewModel`](../../core-extra/ViewModel) | Displays learning rate and available choices. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetXpRequiredForSkillLevel` | Convert skill level to cumulative XP threshold. | XP application and UI |
| `GetSkillLevelChange` | Convert gained XP into a level delta. | Hero progression |
| `CalculateLearningLimit` | Explain the focus/attribute learning cap. | Skill screen and tick |
| `CalculateLearningRate` | Explain current XP multiplier. | Skill screen and XP grant |
| `GetTraitLevelForTraitXp` | Convert trait XP to level and remainder. | Trait leveling |
| `GetNextSkillToAddFocus` / `GetNextAttributeToUpgrade` | Choose the next eligible development target. | Auto-allocation and UI |

## Real access paths

```csharp
public ExplainedNumber ExplainLearning(Hero hero, SkillObject skill)
{
    HeroDeveloper developer = hero.HeroDeveloper;
    int focus = developer.GetFocus(skill);
    return Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(
        hero.CharacterAttributes, focus, hero.GetSkillValue(skill), skill,
        includeDescriptions: true);
}
```

`HeroDeveloper` uses the same model when calculating XP deltas and caps. Granting XP remains a separate operation:

```csharp
int delta = Campaign.Current.Models.CharacterDevelopmentModel
    .GetSkillLevelChange(hero, skill, earnedXp);
```

The caller may use `delta` to decide UI or reward behavior, but the hero's saved values must be changed through `HeroDeveloper` APIs.

## Risks and debugging order

1. Return monotonic XP thresholds; a lower threshold at a higher skill level can repeatedly level a hero on load.
2. Preserve `MaxSkillPoint`, focus, and attribute caps used by `HeroDeveloper` and ViewModels.
3. Do not mutate XP from a learning-rate preview; previews run more often than reward application.
4. Trait conversion must return both level and remainder consistently.
5. New Perk thresholds are read by other models; keep vanilla properties when decorating.

## Navigation

- [Campaign-ext models family](../models/)
- [Hero](../../campaign/Hero)
- [SkillObject](../../core-extra/SkillObject)
- [ViewModel](../../core-extra/ViewModel)
- [PartyWageModel](../PartyWageModel)
