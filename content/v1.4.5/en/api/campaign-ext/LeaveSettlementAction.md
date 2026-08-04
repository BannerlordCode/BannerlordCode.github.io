---
title: "LeaveSettlementAction"
description: "Completes a MobileParty or Hero settlement visit through settlement components, encounters, and Campaign events."
---
# LeaveSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class LeaveSettlementAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/LeaveSettlementAction.cs`  
**Version note:** This page describes the v1.4.5 party and character departure paths.

## One-line responsibility

It removes a party or Hero from a settlement visit while synchronizing attached army parties, the sea anchor, settlement components, location characters, and the `OnSettlementLeft` event.

## Mental model

`LeaveSettlementAction` is not a convenience assignment to `MobileParty.CurrentSettlement = null`. It is the reverse lifecycle boundary of [EnterSettlementAction](../EnterSettlementAction): before departure, it handles attached army parties and the player encounter; after departure, it tells the settlement component and Campaign listeners the same `(party, settlement)` fact.

The two entries operate at different object granularity. `ApplyForParty` handles a whole mobile party: it remembers the old `CurrentSettlement`, recursively processes attached parties in the same settlement when needed, clears the party reference, resets the sea anchor, calls `SettlementComponent.OnPartyLeft`, and dispatches `CampaignEvents.OnSettlementLeftEvent`. `ApplyForCharacterOnly` clears only a Hero's `StayingInSettlement` and removes that Hero from the location and location encounter; it does not make the Hero's MobileParty leave.

## When to use and when not to

- Call the matching entry only when the party or Hero actually has a settlement. The v1.4.5 implementation does not make a null current settlement a complete no-op.
- Use the party entry for map parties, army leaders, and encounter or settlement owners. Use the character-only entry for a companion, notable, or other Hero that is leaving a location while its party remains.
- Do not replace the Action with `mobileParty.CurrentSettlement = null` or `hero.StayingInSettlement = null`; those edits skip component callbacks, sea-anchor state, location removal, and Campaign events.
- When a player encounter is active, let the `PlayerEncounter` or `EncounterManager` owner flow call the Action. Do not repeat it with an old party or settlement reference after the encounter has ended.

## Dependencies and state cascade

```text
Current MobileParty/Hero + current Settlement
  -> LeaveSettlementAction
      -> PlayerEncounter / attached-army handling
      -> SettlementComponent.OnPartyLeft
      -> CampaignEvents.OnSettlementLeftEvent
```

- [MobileParty](../../campaign/MobileParty) owns `CurrentSettlement`, army membership, attached parties, the anchor, and map lifetime; [Settlement](../../campaign/Settlement) receives the departure through its `SettlementComponent`.
- [EnterSettlementAction](../EnterSettlementAction) creates the corresponding entry relation. Both sides should be called by encounter, siege, or Campaign Behavior owners rather than assembled through field writes.
- `CampaignEvents.OnSettlementLeftEvent` is the public event for mods. [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) forwards it; a mod should not call the dispatcher to fake a departure.
- [PlayerEncounter](../../campaign/PlayerEncounter) and [EncounterManager](../../campaign/EncounterManager) can finish a player encounter when the leader leaves; [MapEvent](../../campaign/MapEvent) and [SiegeEvent](../../campaign/SiegeEvent) owners still decide when their battle or siege phase is complete.

## Public entries

### `ApplyForParty`

```csharp
public static void ApplyForParty(MobileParty mobileParty)
```

The method first caches `mobileParty.CurrentSettlement`. If the party is an army leader, it walks the leader's `AttachedParties`: when an attached party is `MobileParty.MainParty` and a `PlayerEncounter` exists, it calls `PlayerEncounter.Finish()`; other attached parties in the same settlement leave recursively. It then clears the leader's `CurrentSettlement`; a party currently at sea also calls `Anchor.ResetPosition()`. Finally it calls `SettlementComponent.OnPartyLeft` for the old settlement and dispatches `OnSettlementLeftEvent`.

Listeners therefore receive a callback that identifies where the party came from, but should not retain the event argument as a new long-lived owner. After the call, the party has entered the departure side of its map and encounter lifecycle.

### `ApplyForCharacterOnly`

```csharp
public static void ApplyForCharacterOnly(Hero hero)
```

This entry clears `hero.StayingInSettlement`, finds the Hero's location through `currentSettlement.LocationComplex`, removes the location character when present, and asks `PlayerEncounter.LocationEncounter` to remove the accompanying character. It does not change `hero.PartyBelongedTo` and does not emit the whole-party `OnSettlementLeftEvent`.

## Real current-Campaign example

`MobileParty.MainParty` is the real registered party in the current Campaign, and `CurrentSettlement` is its current settlement. The non-null check matters because the Action needs the old settlement to notify its component and event listeners.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

if (Campaign.Current != null)
{
    MobileParty party = MobileParty.MainParty;
    if (party != null && party.IsActive && party.CurrentSettlement != null)
    {
        LeaveSettlementAction.ApplyForParty(party);
    }
}
```

If only a registered Hero should leave a location, first require `Hero.MainHero.CurrentSettlement != null` and call `ApplyForCharacterOnly(Hero.MainHero)`; do not use the party entry for a character-level change.

## Save, event, and crash boundaries

- `ApplyForParty` requires a valid old settlement. Calling it after the party has already left, while load objects are incomplete, or after Campaign teardown can reach a missing or stale settlement component.
- Army-leader recursion affects attached parties and can finish the player encounter. Do not mutate the same `AttachedParties` collection from a departure callback or continue using a location encounter after `PlayerEncounter.Finish()`.
- A sea party's `CurrentSettlement` and `Anchor` are related states; clearing only the former leaves an inconsistent map position.
- The character-only path changes the settlement location complex and accompanying character. Do not cache a `LocationCharacter` and remove it again after the mission or encounter has already cleaned it up.
- This Action ends the settlement relationship; it does not finish a MapEvent, siege, or disband owner flow. The owning system must choose the correct phase before calling it.

## Navigation

- **↑ Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [EnterSettlementAction](../EnterSettlementAction) · [DisbandPartyAction](../DisbandPartyAction) · [DestroyPartyAction](../DestroyPartyAction)
- **Related:** [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [Hero](../../campaign/Hero) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [PlayerEncounter](../../campaign/PlayerEncounter) · [EncounterManager](../../campaign/EncounterManager)
