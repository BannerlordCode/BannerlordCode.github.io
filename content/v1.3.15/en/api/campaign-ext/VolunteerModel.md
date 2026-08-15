---
title: "VolunteerModel"
description: "The replaceable campaign model for volunteer slot limits, daily production probability, basic troops, and recruitment eligibility."
---
# VolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`  
**Base:** `MBGameModel<VolunteerModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`

## One-line job

`VolunteerModel` decides how many volunteer slots a hero can expose, the daily chance for an empty slot to produce a volunteer, the basic troop to use, and whether the hero is eligible; it does not edit `Hero.VolunteerTypes`, gold, or party rosters.

## Mental model

Treat `Hero.VolunteerTypes` as a six-slot candidate queue owned by the hero, and `VolunteerModel` as the rule referee for that queue. `RecruitmentCampaignBehavior` calls the eligibility, basic-troop, and probability methods during daily processing, then writes a `CharacterObject` into an empty slot or upgrades an existing slot. When a player recruits, the behavior clears the slot and adds the troop to the party. `GarrisonRecruitmentCampaignBehavior` uses the other upper-bound method to move the same volunteers into a settlement garrison.

`MaxVolunteerTier` is the troop Tier allowed for volunteer upgrades, not the number of slots. The current source fixes the volunteer array and recruitment loops at six slots, so a custom implementation must not treat this property as an array length.

## When to use / when not to use

- Replace the model when changing how relation, war, prosperity, policy, or perks affect volunteer slots or production probability.
- Change recruitment payment, slot clearing, or roster insertion in the owning behavior or Action flow, not in a model calculation.
- Change the troop-tree upgrade ceiling through `MaxVolunteerTier`; do not use it to resize `Hero.VolunteerTypes`.
- Do not cache heroes, settlements, or random results in this model. It is a runtime rule object without its own save synchronization boundary.

## Dependencies

| Type or flow | Relationship |
| --- | --- |
| [`Hero`](../../campaign/Hero) | Owns six `VolunteerTypes` slots; `Hero.CanHaveRecruits` forwards directly to this model. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | Supplies the seller's location, faction, town prosperity, and trade-bound town inputs. |
| [`CharacterObject`](../../campaign/CharacterObject) | The culture basic troop returned by `GetBasicVolunteer` and the object stored in a slot. |
| [`RecruitmentCampaignBehavior`](../RecruitmentCampaignBehavior) | Main consumer for daily production, upgrades, map recruitment, and individual recruitment; it owns slot clearing, payment, and party updates. |
| [`GarrisonRecruitmentCampaignBehavior`](../GarrisonRecruitmentCampaignBehavior) | Reads the garrison upper bound, selects populated slots, and adds volunteers to the garrison. |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | Provides the registered model instance at runtime. |

## Public contract

| Member | Use, timing, and side effects |
| --- | --- |
| `MaxVolunteerTier` | Used by daily recruitment logic to decide whether an existing volunteer may upgrade; it does not write to the hero. |
| `MaximumIndexHeroCanRecruitFromHero` | Returns the slot upper bound available to an individual party; consumers use `index < result`. `useValueAsRelation` can override relation lookup. |
| `MaximumIndexGarrisonCanRecruitFromHero` | Returns the slot upper bound for a settlement garrison recruiting from a hero; it does not move troops. |
| `GetDailyVolunteerProductionProbability` | Returns the probability for a specific slot during a daily tick; the consumer usually compares it with `MBRandom.RandomFloat`. |
| `GetBasicVolunteer` | Returns the seller's culture basic troop; it does not put the troop into a slot. |
| `CanHaveRecruits` | Returns whether the hero participates in volunteer production/recruitment; `Hero.CanHaveRecruits` forwards to it. |

## Real access path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Notables.Count > 0);
Hero notable = settlement?.Notables.FirstOrDefault(hero => hero.IsAlive);

if (Campaign.Current != null && notable?.CurrentSettlement != null)
{
    VolunteerModel model = Campaign.Current.Models.VolunteerModel;
    int availableSlots = model.MaximumIndexHeroCanRecruitFromHero(
        Hero.MainHero, notable);
    CharacterObject baseTroop = model.GetBasicVolunteer(notable);
    float firstSlotProbability = model.GetDailyVolunteerProductionProbability(
        notable, 0, notable.CurrentSettlement);
}
```

Register a custom implementation through `CampaignGameStarter.AddModel` during campaign startup. Let `RecruitmentCampaignBehavior` continue to own payment, `VolunteerTypes[index] = null`, and `AddElementToMemberRoster` state changes.

## Risks and version boundary

- `Hero.VolunteerTypes` currently has length six. Returning a slot upper bound above six can make consumers index out of range; a negative value changes loop and eligibility semantics.
- The probability method returns a probability, not a troop or count. Do not interpret `0.7` as guaranteed production or add a second random roll inside the model.
- `MaxVolunteerTier` and six slots are separate dimensions. Reading Tier 4 as four slots truncates the volunteer queue.
- `GetBasicVolunteer` and the probability method assume a valid Campaign/settlement lifecycle; do not call the vanilla implementation unconditionally during load, after hero death, or while a hero is away from a settlement.
- The model does not pay recruitment costs, clear slots, or update rosters. Putting those operations in a calculation creates duplicate recruitment and inconsistent save state.
- This page explains the 1.4.5 call sites. Policies, perks, and occupation rules should be rechecked against the target runtime version.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default implementation: DefaultVolunteerModel](../DefaultVolunteerModel)
- [Related: Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject)
- [Consumers: RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior)
