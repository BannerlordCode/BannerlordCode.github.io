---
title: "TakePrisonerAction"
description: "Moves a live Hero into a capturer party's prisoner roster and publishes the campaign prisoner events that other systems depend on."
---
# TakePrisonerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TakePrisonerAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TakePrisonerAction.cs`

## One-line responsibility

Transfers a `Hero` from its current party or location into a capturer party's prisoner roster, updates captivity state, and dispatches the matching campaign notifications.

## Mental model

This is the Campaign-layer **state transition**, not the decision that a battle, conversation, or quest is allowed to capture someone. The owner flow first decides that the target is a valid prisoner; this Action then performs the coupled changes that must happen together.

`Apply(PartyBase, Hero)` is the general Hero route. It removes the Hero from the old party roster, removes the party leader role when necessary, sets `CaptivityStartTime`, changes the Hero state to `Prisoner`, adds the Hero's `CharacterObject` to the capturer's prisoner roster, clears `StayingInSettlement`, and sends `CampaignEvents.HeroPrisonerTaken` through the dispatcher. If the prisoner is `Hero.MainHero`, it also starts player captivity, clears disorganization, and destroys the main party's ships when it is at sea.

`ApplyByTakenFromPartyScreen(FlattenedTroopRoster)` is a different owner path. It scans the roster, applies the Hero transition to each Hero using `PartyBase.MainParty`, and then publishes `CampaignEvents.OnPrisonerTakenEvent` for the whole flattened roster. It is the boundary used by the party-screen transfer flow, not a convenience overload for an arbitrary list.

Use this Action after the capture owner has a live `PartyBase` and `Hero`. Do not use it to decide battle results, to move ordinary troops, or to imitate a party-screen transfer by manually changing `Hero.CharacterStates.Prisoner`.

## Dependency graph

```text
Battle / conversation / quest owner
  -> TakePrisonerAction.Apply(capturerParty, prisoner)
      -> old PartyBase roster and leader cleanup
      -> Hero captivity state and capturer prisoner roster
      -> CampaignEventDispatcher.OnHeroPrisonerTaken
          -> CampaignEvents.HeroPrisonerTaken

PartyScreenHelper
  -> ApplyByTakenFromPartyScreen(flattenedRoster)
      -> Hero transitions for the main party
      -> CampaignEvents.OnPrisonerTakenEvent
```

**Upstream:** [MapEvent](../../campaign/MapEvent) resolution, [PartyBase](../../campaign/PartyBase), conversation flows, and issue quest owners provide the live capturer and target.  
**Downstream:** [CampaignEvents](../../campaign/CampaignEvents), [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher), captivity UI and campaign Behaviors react to `HeroPrisonerTaken` or `OnPrisonerTakenEvent`.  
**Related state transitions:** [EndCaptivityAction](../EndCaptivityAction), [EnterSettlementAction](../EnterSettlementAction), [Hero](../../campaign/Hero), and [MobileParty](../../campaign/MobileParty).

## Key entry points and timing

### `Apply`

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

Call this when one specific Hero has been accepted as a prisoner by the owning Campaign flow. The source does not return a success value or validate that the caller chose a legal target. The event is sent after the roster and Hero state changes, so listeners should read the post-transition objects.

### `ApplyByTakenFromPartyScreen`

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

Call this only from a party-screen transfer that already owns a `FlattenedTroopRoster`. Each Hero is processed individually, with its Hero event emitted by the internal path; the aggregate `OnPrisonerTakenEvent` is emitted after the scan. The method always uses `PartyBase.MainParty` as capturer.

## Real current-Campaign examples

### Capture the live conversation Hero after the owner has validated the action

The stock conversation behaviors use `Hero.OneToOneConversationHero` and `PartyBase.MainParty` as real acquisition paths. A mod should add its own eligibility checks before calling the immediate mutation:

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

This code does not construct a fake party or Hero. It still belongs in a Campaign conversation/quest owner that has already checked the encounter, faction, and quest rules; the Action itself does not perform those checks.

### Observe the result from a persistent Behavior

Register the listener from a [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) during Campaign startup, then copy stable IDs or other needed values in the callback:

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

## Risks and save boundaries

- **The inputs are live objects.** The implementation dereferences the Hero and capturer without a null or stage guard. Call only after `Campaign.Current` has created the object graph; never from module loading, the main menu, or Campaign teardown.
- **The Action does not deduplicate prisoners.** Reapplying it to a Hero who is already a prisoner can add another prisoner-roster count because the former-party removal path no longer applies. Let the capture owner prove that the transition has not already happened.
- **Do not bypass the old-party cleanup.** Assigning `CharacterStates.Prisoner` or adding a `CharacterObject` directly to a roster leaves the old leader, old roster, `CaptivityStartTime`, and event consumers out of sync.
- **Main Hero has extra side effects.** Capturing `Hero.MainHero` starts player captivity and destroys every ship in the main party when it is at sea. Do not use the general route as a harmless status toggle.
- **Events are part of the contract.** A listener may move UI, quest, or captivity state in response. Do not recursively call `TakePrisonerAction` for the same Hero from `HeroPrisonerTaken`, and do not publish a second synthetic event after a real Action call.
- **Party-screen semantics are aggregate semantics.** Use the flattened-roster route only while the party-screen owner still owns the transfer. Replaying it later against a stale roster can capture the wrong current Hero state and duplicate downstream reactions.
- **Save/load boundary:** persist your own stable IDs or quest state, not a transient `PartyBase`/`Hero` reference from the callback. Reacquire the live objects after load before performing another transition.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [EndCaptivityAction](../EndCaptivityAction) · [EnterSettlementAction](../EnterSettlementAction) · [DestroyPartyAction](../DestroyPartyAction)
- **Related entities:** [Hero](../../campaign/Hero) · [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [MapEvent](../../campaign/MapEvent)
- **Events and owners:** [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)
