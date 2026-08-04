---
title: "TransferPrisonerAction"
description: "Transfers one CharacterObject prisoner between registered PartyBase owners while preserving the main hero's captivity state."
---
# TransferPrisonerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TransferPrisonerAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TransferPrisonerAction.cs`  
**Version note:** This page follows the v1.4.5 PartyBase roster and PlayerCaptivity implementation.

## One-line responsibility

It transfers a real `CharacterObject` from a source `PartyBase.PrisonRoster` to a target party, or, for the main hero, updates only `PlayerCaptivity.CaptorParty` instead of treating hero captivity as an ordinary count field.

## Mental model

This is a **captivity-ownership Action**, not a general roster-copy helper. For an ordinary prisoner, it decrements the source `PrisonRoster` and calls the target `PartyBase.AddPrisoner`; PartyBase's prisoner callbacks and the Hero's `PartyBelongedToAsPrisoner` relationship stay on the system path.

The main hero is an intentional exception. When `prisonerTroop.HeroObject == Hero.MainHero`, the Action assigns `PlayerCaptivity.CaptorParty` to the target party and returns. It does not remove the main hero from the source roster and does not add a normal prisoner count to the target. That branch works with [PlayerCaptivity](../../campaign/PlayerCaptivity) and must not be inferred from the ordinary Hero-prisoner path.

## When to use and when not to

- Use `Apply` after an owner flow has selected source and target parties and verified that the `CharacterObject` is actually a prisoner in the source roster.
- [SellPrisonersAction](../SellPrisonersAction), disband settlement merging, prisoner barter, and quest flows use this Action for the concrete transfer; their eligibility decisions remain in the caller.
- Do not directly call `source.PrisonRoster.AddToCounts(prisonerTroop, -1)` and add to another roster as a replacement. That skips the main-hero captivity branch and PartyBase/Hero relationship callbacks.
- Do not treat `Hero.MainHero` as an ordinary movable prisoner. A main-hero transfer requires the PlayerCaptivity owner flow to agree that the captor is changing.

## Dependencies and state cascade

```text
Capture/trade/disband owner
  -> CharacterObject prisoner + source PartyBase + target PartyBase
      -> TransferPrisonerAction.Apply
          -> ordinary Hero: source PrisonRoster -1 -> target AddPrisoner(+1)
          -> MainHero: PlayerCaptivity.CaptorParty = target
```

- [PartyBase](../../campaign/PartyBase) supplies source/target prison rosters, `AddPrisoner`, settlement parties, and mobile-party owners; [MobileParty](../../campaign/MobileParty) is one real source of those PartyBase instances.
- [CharacterObject](../../campaign/CharacterObject)'s `HeroObject` determines whether the prisoner is the main hero. A normal troop prisoner has no Hero identity.
- [PlayerCaptivity](../../campaign/PlayerCaptivity) stores the main hero's captor relation. [TakePrisonerAction](../TakePrisonerAction) establishes captivity, while [SellPrisonersAction](../SellPrisonersAction) and [DisbandPartyAction](../DisbandPartyAction) can invoke this transfer from an owner flow.
- The roster data participates in the save object graph represented by [TroopRoster](../../campaign/TroopRoster); a temporary roster copy is not the authoritative owner.

## Public entry

### `Apply`

```csharp
public static void Apply(
    CharacterObject prisonerTroop,
    PartyBase prisonerOwnerParty,
    PartyBase newParty)
```

`Apply` returns `void` and does not report whether gameplay permits the transfer. The ordinary path expects the source roster to contain the `CharacterObject`, decrements its count, and calls `newParty.AddPrisoner(prisonerTroop, 1)` rather than assembling a roster element in caller code. The main-hero check happens before any roster edit and only updates `PlayerCaptivity.CaptorParty`.

Source and target may be mobile-party or settlement-party owners, but they must be real, currently registered `PartyBase` instances. The `CharacterObject` must also be a registered object. The Action does not create missing objects, repair a missing source count, or check quest, war, or settlement eligibility.

## Real current-Campaign example

This example selects a non-main-hero prisoner from the real player-party roster and an active receiving party from the current Campaign. `PrisonerHeroes` comes from an authoritative `PartyBase` roster; no fake party or `CharacterObject` is created.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

if (Campaign.Current != null)
{
    PartyBase source = MobileParty.MainParty.Party;
    MobileParty recipient = MobileParty.All.FirstOrDefault(party =>
        party != MobileParty.MainParty && party.IsActive);
    CharacterObject prisoner = source.PrisonerHeroes.FirstOrDefault(
        character => character.HeroObject != Hero.MainHero);

    if (recipient != null && prisoner != null &&
        source.PrisonRoster.GetTroopRoster().Any(entry =>
            entry.Character == prisoner && entry.Number > 0))
    {
        TransferPrisonerAction.Apply(prisoner, source, recipient.Party);
    }
}
```

If the prisoner is `Hero.MainHero`, do not apply the ordinary roster assumption. Let the PlayerCaptivity owner flow validate the new captor and expect this Action to change only `CaptorParty`.

## Save and crash boundaries

- Passing a party removed by [DestroyPartyAction](../DestroyPartyAction), a party still being rebuilt during load, or a temporary roster copy disconnects source/target ownership from the Campaign collection.
- The ordinary branch does not fully validate source counts, target capacity, or gameplay eligibility. The caller must verify the prisoner in the same Campaign state to avoid a negative count or duplicate transfer.
- The main-hero branch does not move either roster. If a mod sees `CaptorParty` change and then edits rosters manually, the hero's captivity and count state can contradict each other.
- Events, quests, and disband flows may continue reading the hero's prison owner after transfer. Do not write a transferred object back into custom save state as if it still belonged to the source party.
- After loading, resolve source and target again from stable party identity and read the current `PrisonRoster`; do not persist transient `PartyBase` or `CharacterObject` references.

## Navigation

- **↑ Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [TakePrisonerAction](../TakePrisonerAction) · [SellPrisonersAction](../SellPrisonersAction) · [DisbandPartyAction](../DisbandPartyAction)
- **Related:** [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [CharacterObject](../../campaign/CharacterObject) · [Hero](../../campaign/Hero) · [PlayerCaptivity](../../campaign/PlayerCaptivity) · [TroopRoster](../../campaign/TroopRoster) · [CampaignEvents](../../campaign/CampaignEvents)
