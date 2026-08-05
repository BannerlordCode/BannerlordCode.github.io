---
title: "PerkHelper: role-aware perk contribution calculations"
description: "PerkHelper applies v1.4.5 perk roles and bonuses to ExplainedNumber calculations for parties, characters, captains, governors, and towns, with one explicit reset path."
---
# PerkHelper

**Namespace:** `Helpers`
<br>**Module:** `TaleWorlds.CampaignSystem`
<br>**Type:** `public static class PerkHelper`
<br>**Base:** `System.Object`
<br>**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`

## One-sentence responsibility

`PerkHelper` translates active `PerkObject` role and bonus data into `ExplainedNumber` contributions for campaign models and UI, while also exposing perk availability queries and a narrow skill reset operation.

## Mental Model

Most methods are calculation adapters. A model supplies a party, character, captain, governor, town, or hero and an `ExplainedNumber`; `PerkHelper` checks the relevant role and active perk value, then adds either a flat value or a factor using the perk name as the explanation. Primary and secondary roles are selected explicitly, and naval consumers can request a `0.5f` multiplier. `ClearPerksForSkill` is the exception: it changes hero perk state and permanent attributes, updates the main-party roster version, and clamps hit points.

## When to use and when not to use

- Use the contribution methods from a model calculation that already owns an `ExplainedNumber` and knows whether it is evaluating a primary or secondary role.
- Use `GetCaptainPerksForTroopUsages`, `GetGovernorPerksForHero`, `GetPerkValueForTown`, or `AvailablePerkCountOfHero` for current campaign/UI decisions, not as a saved snapshot.
- Use `ClearPerksForSkill` only in an intentional respec or reset flow. It removes the active perk effects represented in the source and is not a read-only cache invalidation method.
- Do not add the same perk contribution twice by calling both role paths without matching the model's primary/secondary contract.
- Do not serialize `ExplainedNumber` or the returned perk lists as persistent state; recalculate them from registered `PerkObject`, `Hero`, `MobileParty`, `CharacterObject`, and `Town` state.

## Dependencies and call chain

```text
PerkObject + Hero/Party/Town state
              |
              v
         PerkHelper
              |
              v
Campaign model -> ExplainedNumber -> tooltip or model result
```

- [`Hero`](../../campaign/Hero), [`MobileParty`](../../campaign/MobileParty), [`CharacterObject`](../../campaign/CharacterObject), and [`Town`](../../campaign/Town) own the perk values and role context.
- [`SkillHelper`](../SkillHelper) supplies the engineering effect description used by `GetGovernorEngineeringSkillEffectForHero`.
- [`ExplainedNumber`](../../campaign/ExplainedNumber) is the calculation accumulator; [`Clan`](../../campaign/Clan) and settlement models consume the result rather than the helper owning it.

## Public members by contract

| Group | Members | Source-confirmed behavior |
|---|---|---|
| Reset and availability | `ClearPerksForSkill`, `AvailablePerkCountOfHero` | Clears every perk for a skill, removes the source-listed permanent crafting/athletics effects, updates the main-party roster version, clamps hit points, or counts currently eligible unselected perks while excluding alternatives. |
| Party and captain | `GetCaptainPerksForTroopUsages`, `AddPerkBonusForParty`, `AddPerkBonusFromCaptain` | Matches troop-usage masks or captain role and adds the selected primary/secondary bonus to an `ExplainedNumber`; party contributions can apply the naval multiplier. |
| Personal and clan leader | `AddPerkBonusForCharacter`, `AddEpicPerkBonusForCharacter` | Checks personal or clan-leader role and active perk value. Epic bonuses scale with `skillValue - skillRequired` only when `skillValue > skillRequired`. |
| Governor and town | `AddPerkBonusForTown`, `GetPerkValueForTown`, `GetGovernorPerksForHero`, `GetGovernorEngineeringSkillEffectForHero` | Requires the governor to be present at the matching settlement for governor effects; clan-leader and governor roles can satisfy `GetPerkValueForTown`. |
| Player convenience | `PlayerHasAnyItemDonationPerk` | Checks the main party for `GivingHands`, then secondary-role `PaidInPromise`; it reports a current perk condition and does not grant a perk. |

## Real example: use the helper inside a model calculation

This follows the same ownership pattern as `DefaultMapVisibilityModel`: the model owns the accumulator, and the helper adds a current perk contribution to it:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;

public static ExplainedNumber CalculateVisibilityBonus()
{
    ExplainedNumber result = new ExplainedNumber(0f, includeDescriptions: true);
    PerkHelper.AddPerkBonusForParty(
        DefaultPerks.Scouting.NightRunner,
        MobileParty.MainParty,
        isPrimaryBonus: false,
        ref result);
    return result;
}
```

The result is a calculation output, not a write to the party. A naval caller may pass `shouldApplyNavalMultiplier: true`; the source multiplies the selected bonus by `0.5f` before adding it.

## Role and threshold boundaries

`AddPerkBonusForCharacter` handles personal and clan-leader roles. The clan-leader branch reads `character.HeroObject.Clan.Leader` rather than assuming the character itself is the leader. `AddPerkBonusForTown` requires a governor's `CurrentSettlement` to equal the town settlement, so a governor who is assigned but currently elsewhere does not contribute.

`AvailablePerkCountOfHero` requires the hero's skill value to be at least each perk's required skill value, rejects already active perks, rejects an active alternative, and avoids counting the same alternative twice. `GetGovernorEngineeringSkillEffectForHero` returns an empty name plus a localized `No effect` text when the hero is null or has no engineering skill.

## Risks and save boundaries

- `ClearPerksForSkill` mutates hero development data and the main-party roster version. Run it from an explicit respec operation, not from a tooltip or model calculation.
- `ClearPerksForSkill` knows a fixed set of permanent crafting and athletics effects in this source. New permanent perk effects in another build may require a source review before reuse.
- A `ref ExplainedNumber` can be updated by multiple model layers. Apply the helper once at the layer that owns the corresponding role, or the UI/model result will double count.
- Methods dereference live campaign objects such as `Hero.MainHero`, `MobileParty.MainParty`, `Town.Governor`, and `PerkObject.All`; guard campaign startup, teardown, and load boundaries.
- The helper does not define a save schema. Save stable hero or campaign state through its owning object/behavior and recompute perk results after load.

## Version note

This page follows v1.4.5 `PerkHelper.cs`, including `NavalMultiplier = 0.5f`, the strict epic threshold, engineering no-effect text, and the permanent-effect cases handled by `ClearPerksForSkill`.

## Navigation

- [↑ API system index](../)
- [↔ PersuasionHelper](../PersuasionHelper)
- [↔ SettlementHelper](../SettlementHelper)
- [Related: Hero](../../campaign/Hero)
- [Related: MobileParty](../../campaign/MobileParty)
- [Related: CharacterObject](../../campaign/CharacterObject)
- [Related: Town](../../campaign/Town)
- [中文页面](../../../../zh/api/system/PerkHelper)
