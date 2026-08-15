---
title: "DefaultVolunteerModel"
description: "Bannerlord's default volunteer slot, relation and faction modifiers, prosperity probability, basic troop, and eligibility rules."
---
# DefaultVolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultVolunteerModel : VolunteerModel`  
**Base:** [`VolunteerModel`](../VolunteerModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs` (1.4.5 authority)

## One-line job

`DefaultVolunteerModel` combines relation, faction and war state, difficulty, hero occupation, policies, fief prosperity, riding perks, and culture troop rules into the default volunteer slot limits and daily production behavior.

## Mental model

The implementation has two independent paths. The first decides which seller slots a buyer may see or use. The second decides whether each empty slot produces or upgrades a volunteer today. Individual recruitment adds buyer-seller relation and war modifiers; garrison recruitment uses the settlement owner as the buyer.

There are six volunteer slots, indexed `0..5`. `MaxVolunteerTier` returns `4` and is used by the daily upgrade path to stop a troop at the configured Tier; it is not a slot limit. Every default slot upper bound is ultimately capped at `6`.

## Dependencies

| Type or flow | Relationship |
| --- | --- |
| [`VolunteerModel`](../VolunteerModel) / [`GameModels`](../GameModels) | Defines the contract and supplies the active implementation after campaign startup. |
| [`Hero`](../../campaign/Hero) / [`Settlement`](../../campaign/Settlement) | Supplies relation, faction, location, prosperity, and volunteer-slot inputs. |
| [`RecruitmentCampaignBehavior`](../RecruitmentCampaignBehavior) | Consumes probability and Tier limits, and owns slot write-back, payment, and party roster updates. |
| [`GarrisonRecruitmentCampaignBehavior`](../GarrisonRecruitmentCampaignBehavior) | Consumes the garrison upper bound and adds selected volunteers to the garrison. |

## Default rules

| Member or stage | 1.4.5 default behavior |
| --- | --- |
| `MaxVolunteerTier` | Always `4`. |
| Base slot upper bound | Starts at `1`; a player buyer can add `DifficultyModel.GetPlayerRecruitSlotBonus`; a matching clan and `OneOfTheFamily` can add more. The result is clamped to `0..6`. |
| Individual relation modifiers | Relation `<0` gives `-1`; thresholds `5/10/20/40/60/80/100` step up to `7`; same faction adds `1`; a non-main-hero buyer adds `1`; war usually subtracts `1` or `2`, except a minor-faction hero recruiting from a village seller. |
| Individual perk modifiers | Buyer perks for merchants, same culture, rural or urban notables, and engineering can increase the slot limit; the result is still `Min(6, ...)`. |
| Garrison upper bound | `MaximumIndexGarrisonCanRecruitFromHero` passes `settlement.Owner` to the shared base calculation and does not perform recruitment. |
| Production probability | Starts at `0.7`; low total fief prosperity and village count provide a compensation factor below `46`, then the base is `0.75 * Clamp(num^(index+1), 0, 1)`. `Cantons` adds a `20%` factor; a mounted slot in a town with `CavalryTactics` receives the riding perk factor. |
| Basic troop | A rural notable whose village is bound to a castle receives the culture's `EliteBasicTroop`; all other cases use `BasicTroop`. |
| Recruitment eligibility | `Occupation.Mercenary` or the six occupations in the source's contiguous occupation-enum range return `true`; other occupations return `false`. |

## Member behavior and timing

| Member | Concrete use |
| --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | UI and map recruitment use buyer, seller, relation, and faction relationships to calculate the slot upper bound. When `useValueAsRelation < -100`, it reads actual relation; otherwise it uses the supplied value. |
| `MaximumIndexGarrisonCanRecruitFromHero` | Daily garrison refresh passes the settlement owner into the shared calculation; the returned value is a loop bound and does not pay for or clear a slot. |
| `GetDailyVolunteerProductionProbability` | `RecruitmentCampaignBehavior` compares each slot `i=0..5` with a random float; only then can an empty slot receive the basic troop or an existing troop upgrade. |
| `GetBasicVolunteer` | Selects only a `CharacterObject`: a rural notable at a village bound to a castle gets the elite basic troop, otherwise the culture basic troop. |
| `CanHaveRecruits` | Used by `Hero.CanHaveRecruits` and daily recruitment filtering. It checks occupation only; it does not replace `IsAlive`, location, or slot-content checks. |

## Real consumer path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Notables.Count > 0);
Hero notable = settlement?.Notables.FirstOrDefault(hero =>
    hero.IsAlive && hero.CanHaveRecruits);

if (Campaign.Current != null && notable?.CurrentSettlement != null)
{
    int slotsForPlayer = Campaign.Current.Models.VolunteerModel
        .MaximumIndexHeroCanRecruitFromHero(Hero.MainHero, notable);
    CharacterObject basicTroop = Campaign.Current.Models.VolunteerModel
        .GetBasicVolunteer(notable);
    float chance = Campaign.Current.Models.VolunteerModel
        .GetDailyVolunteerProductionProbability(notable, 0, notable.CurrentSettlement);
}
```

`RecruitmentCampaignBehavior` performs the actual recruitment: it removes the volunteer from `VolunteerTypes`, adds the troop to the party roster, and charges through the recruitment flow. For a garrison, `GarrisonRecruitmentCampaignBehavior` sorts eligible volunteers by wage and adds selected slots to `GarrisonParty`.

## Replacement entry point

```csharp
if (gameStarter is CampaignGameStarter campaignStarter)
{
    campaignStarter.AddModel(new MyVolunteerModel());
}
```

Keep the six-slot array contract, probability `[0, 1]` semantics, and Tier meaning of `MaxVolunteerTier`. Change recruitment cost or roster write-back in the corresponding behavior or `PartyWageModel`, not here.

## Risks and version boundary

- The default probability method directly reads `hero.CurrentSettlement.MapFaction.Fiefs`, so a hero without a valid location can cause a null reference. Check Campaign and settlement lifecycle before calling it.
- `hero.VolunteerTypes[index]` requires an index inside six slots. The current recruitment behavior calls `0..5`; do not introduce a different array-length assumption.
- Individual recruitment's relation and war modifiers change the accessible slot range, not the troop Tier in each slot. Keep those concepts separate.
- `MaxVolunteerTier=4` controls the upgrade stage only. Setting it to `6` does not expand `VolunteerTypes` but can allow higher-Tier troop chains to persist.
- The methods return a `CharacterObject`, probability, or upper bound. They do not invoke `GiveGoldAction`, edit rosters, or broadcast recruitment events; duplicating those operations creates duplicate recruitment and inconsistent save state.
- Policies, perks, occupation values, and prosperity thresholds are default implementation details and should not be promised as identical across versions without checking the target source.

## Navigation

- [Contract: VolunteerModel](../VolunteerModel)
- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Related: Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject)
- [Consumers: RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior)
