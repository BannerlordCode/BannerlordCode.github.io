---
title: "TakePrisonerAction"
description: "Moves a living Hero into the capturer's prisoner roster and raises the Hero and party-screen prisoner events that the campaign system depends on."
---

# TakePrisonerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TakePrisonerAction`  
**Base:** None (static class)  
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TakePrisonerAction.cs`

## Overview

Moves a real, still-alive `Hero` in the current Campaign from its original party or settlement state into the capturer's prisoner roster, updating captivity state, captivity start time, and related party relationships, and raising the campaign notification that combat, dialogue, party-screen, and quest flows all depend on; it only performs a capture migration already accepted by the owner and does not decide whether the target is eligible to be a prisoner.

## Mental Model

This is a campaign-layer **state migration**, not the rule entry point that decides "whether combat, dialogue, or quests allow a capture". The upstream flow first confirms the target can become a prisoner; this Action then completes the state changes that must happen together.

`Apply(PartyBase, Hero)` is the general entry point for a single Hero. It removes the Hero from the original party's roster, removes its party-leader role if needed, writes `CaptivityStartTime`, sets the Hero state to `Prisoner`, adds the Hero's `CharacterObject` to the capturer party's prisoner roster, clears `StayingInSettlement`, and finally raises `CampaignEvents.HeroPrisonerTaken` through the dispatcher. If the target is `Hero.MainHero`, it also ends the main party's disorganized state, starts the player's captivity, and destroys its ships if the main party is at sea.

`ApplyByTakenFromPartyScreen(FlattenedTroopRoster)` is another owner path. It scans the roster, uses `PartyBase.MainParty` as the capturer, performs the migration above for each Hero inside it, then raises the whole flattened roster's `CampaignEvents.OnPrisonerTakenEvent` after the scan ends. This is the boundary of the party-screen transfer flow, not a convenience overload for arbitrary lists.

Call it only after the upstream has obtained a valid `PartyBase` and `Hero`. Do not use it to decide combat results, move ordinary troops, or simulate a party-screen transfer by setting `Hero.CharacterStates.Prisoner` directly.

## Dependencies

```text
Combat / dialogue / quest owner
  -> TakePrisonerAction.Apply(capturerParty, prisoner)
      -> clear old PartyBase roster and leader
      -> write Hero captivity state and join capturer prisoner roster
      -> CampaignEventDispatcher.OnHeroPrisonerTaken
          -> CampaignEvents.HeroPrisonerTaken

PartyScreenHelper
  -> ApplyByTakenFromPartyScreen(flattenedRoster)
      -> migrate each Hero for main party
      -> CampaignEvents.OnPrisonerTakenEvent
```

**Upstream:** [MapEvent](../../campaign/MapEvent) resolution, [PartyBase](../../campaign/PartyBase), the dialogue flow, and issue-quest owners supply the actual capturer and target.  
**Downstream:** [CampaignEvents](../../campaign/CampaignEvents), [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher), the captivity UI, and campaign Behaviors listening for `HeroPrisonerTaken` or `OnPrisonerTakenEvent`.  
**Related migrations:** [EndCaptivityAction](../EndCaptivityAction), [EnterSettlementAction](../EnterSettlementAction), [Hero](../../campaign/Hero) and [MobileParty](../../campaign/MobileParty).

## Key Entry Points & Call Timing

### `Apply`

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

Call it once the capture owner has accepted some Hero as a prisoner. The source returns no success value and does not validate that the caller picked the right target; the event fires after the roster and Hero state are written, so listeners should read the migrated object.

### `ApplyByTakenFromPartyScreen`

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

Call it only while the party-screen transfer flow still owns a real `FlattenedTroopRoster`. Each Hero's internal migration fires its own Hero event, and `OnPrisonerTakenEvent` fires after the whole scan ends. This entry always uses `PartyBase.MainParty` as the capturer.

## Real Current-Campaign Examples

### Capture a conversation target after the owner has validated it

The vanilla dialogue Behavior uses `Hero.OneToOneConversationHero` and `PartyBase.MainParty` as the real acquisition path. A mod should still do its own eligibility check before calling the immediate migration:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public static void CaptureConversationTarget()
{
    if (Campaign.Current == null)
        return;

    Hero target = Hero.OneToOneConversationHero;
    PartyBase capturer = PartyBase.MainParty;
    if (target == null || capturer == null || !target.IsAlive ||
        target == Hero.MainHero || target.PartyBelongedTo == capturer)
        return;

    TakePrisonerAction.Apply(capturer, target);
}
```

This code constructs no fake party or Hero, yet it should still live inside the campaign dialogue/quest owner that has already checked the encounter, faction, and quest rules; the Action itself performs none of those checks.

### Observe the result in a persistent Behavior

Register the listener from [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) during Campaign startup, and copy the stable id or needed values in the callback:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

private void RegisterEvents()
{
    CampaignEvents.HeroPrisonerTaken.AddNonSerializedListener(this, OnHeroPrisonerTaken);
}

private void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)
{
    if (prisoner != null && capturer != null)
        RecordCapture(prisoner.StringId, capturer.StringId);
}
```

## Risks & Save Boundaries

- **Inputs must be live objects.** The implementation has no null or phase guards and dereferences the Hero and capturer directly. Call it only after `Campaign.Current` has built the object graph; do not call it from module load, the main menu, or the Campaign teardown phase.
- **The Action does not de-duplicate prisoners.** When called repeatedly on a Hero that is already a prisoner, the old-party removal path no longer runs, yet the prisoner roster may still increment again. The capture owner must first prove the migration is not already complete.
- **You cannot skip old-party cleanup.** Only setting `CharacterStates.Prisoner` or directly adding `CharacterObject` to the roster leaves old leader, old roster, `CaptivityStartTime`, and event consumers inconsistent.
- **The main hero has extra side effects.** Capturing `Hero.MainHero` starts the player's captivity; if the main party is at sea, it also destroys all ships. Do not treat the general entry as a harmless state switch.
- **Events are a contract.** Listeners may change UI, quests, and captivity state at the same time. Do not recursively call this Action on the same Hero inside `HeroPrisonerTaken`, and do not raise a fake event after the real call.
- **Party-screen is aggregate semantics.** Only use the flattened-roster entry while the party-screen owner still owns the transfer flow; replaying an old roster afterward may duplicate downstream reactions or act on a Hero that has already changed.
- **Save boundary:** persist your own stable id or quest state in the callback, not the one-shot `PartyBase`/`Hero` references. Re-acquire live objects from the current Campaign after a load, then perform the next migration.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [EndCaptivityAction](../EndCaptivityAction) · [EnterSettlementAction](../EnterSettlementAction) · [DestroyPartyAction](../DestroyPartyAction)
- **Related entities:** [Hero](../../campaign/Hero) · [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [MapEvent](../../campaign/MapEvent)
- **Events & owners:** [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)
