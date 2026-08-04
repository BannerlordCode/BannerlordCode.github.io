---
title: "DisbandPartyAction"
description: "Starts or cancels a real MobileParty disband through Campaign events and waiting rules instead of deleting a map party directly."
---
# DisbandPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DisbandPartyAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DisbandPartyAction.cs`  
**Version note:** This page describes the v1.4.5 Campaign and Action implementation.

## One-line responsibility

It tells Campaign that a real map `MobileParty` should begin disbanding and provides the cancellation entry; the owning Behavior decides when `IsDisbanding` becomes true, when troops are merged, and when [DestroyPartyAction](../DestroyPartyAction) finally removes the party.

## Mental model

`DisbandPartyAction` is a **disband-flow entry point**, not a `MobileParty` deletion helper. `StartDisband` handles immediate terminal cases first: an already-disbanding party returns, an empty party goes directly to `DestroyPartyAction.Apply(null, disbandParty)`, and a party already waiting in the disband Behavior is not queued twice. Otherwise it coordinates army membership, assigns a temporary party name, and dispatches `OnPartyDisbandStartedEvent`.

That event is consumed by [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior). The Behavior chooses a replacement leader when needed, waits for Campaign time, sets `IsDisbanding`, and later merges members or prisoners into an appropriate settlement. Calling `StartDisband` therefore does not mean that the party has already vanished. `CancelDisband` cancels a pending request: it dispatches cancellation, clears the flag and temporary name, and holds movement.

## When to use and when not to

- Call `StartDisband` after an owner system has decided that a real, active `MobileParty` should follow the game's disband rules.
- Call `CancelDisband` only when the owner is withdrawing a pending disband request; it cannot restore a party that has already been destroyed.
- Do not expect the empty-roster branch to emit `OnPartyDisbandStartedEvent` or wait for a settlement. The source immediately calls `DestroyPartyAction.Apply(null, disbandParty)`.
- Do not set `IsDisbanding`, rename the party, remove it from `MobileParty.All`, or clear its rosters to simulate disbanding. Those edits skip events, waiting state, army handling, settlement merging, prisoner handling, and final party cleanup.

## Dependencies and lifecycle cascade

```text
Campaign Behavior that owns the disband decision
  -> DisbandPartyAction.StartDisband(MobileParty)
      -> CampaignEvents.OnPartyDisbandStartedEvent
          -> DisbandPartyCampaignBehavior waiting/replacement/merge logic
              -> DestroyPartyAction or settlement/garrison merge
```

- [MobileParty](../../campaign/MobileParty) owns the member roster, army, current settlement, `IsDisbanding`, and active lifetime; the Action does not decide whether gameplay permits the party to disappear.
- [CampaignEvents](../../campaign/CampaignEvents) exposes `OnPartyDisbandStartedEvent` and `OnPartyDisbandCanceledEvent` for subscribers. Mods should observe those public events instead of calling [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) directly.
- [DestroyPartyAction](../DestroyPartyAction) owns final map-party removal. [LeaveSettlementAction](../LeaveSettlementAction) owns the separate settlement-exit boundary used when a disbanding party is removed from a settlement.
- The Behavior may use [TransferPrisonerAction](../TransferPrisonerAction) and [SellPrisonersAction](../SellPrisonersAction) while resolving a disband party. Do not clear `PrisonRoster` during the waiting period.

## Public entries

### `StartDisband`

```csharp
public static void StartDisband(MobileParty disbandParty)
```

The source order is an observable contract:

1. If `IsDisbanding` is already true, it returns without dispatching another start event.
2. If `MemberRoster.TotalManCount == 0`, it calls `DestroyPartyAction.Apply(null, disbandParty)` and returns. `null` is the real system branch for “no destroyer party”, not a fake replacement object.
3. If `DisbandPartyCampaignBehavior` says that the party is already waiting, it returns.
4. An army leader is handed to `DisbandArmyAction.ApplyByUnknownReason`; an attached non-leader is detached from the army. The Action does not decide the rest of the army's gameplay.
5. The normal path assigns a temporary name from the actual clan, or `CampaignData.NeutralFactionName`, then dispatches `OnPartyDisbandStarted` through the dispatcher.

`StartDisband` does not directly assign `IsDisbanding = true` on its normal path. The default Behavior receives the event, adds the party to its waiting table, and sets the property later during an hourly tick. A mod should not treat the property change as a synchronous return value.

### `CancelDisband`

```csharp
public static void CancelDisband(MobileParty disbandParty)
```

It dispatches `OnPartyDisbandCanceled`, sets `IsDisbanding` to false, clears the custom name with an empty `TextObject`, and calls `SetMoveModeHold()`. The cancellation listener removes the party from `DisbandPartyCampaignBehavior`'s waiting table. Passing an old reference after destruction does not revive it.

## Real current-Campaign example

This party comes from the current Campaign's registered collection. The example selects a non-main party that still has members, so it does not accidentally take the empty-roster immediate-destruction branch. The owning gameplay system must still decide whether the party is eligible.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

MobileParty party = null;
if (Campaign.Current != null)
{
    party = MobileParty.All.FirstOrDefault(candidate =>
        candidate != MobileParty.MainParty &&
        candidate.IsActive &&
        candidate.MemberRoster.TotalManCount > 0 &&
        !candidate.IsDisbanding);
}

if (party != null)
{
    DisbandPartyAction.StartDisband(party);
}
```

After the call, observe `CampaignEvents.OnPartyDisbandStartedEvent` or the owner state instead of assuming that `party.IsDisbanding` has already changed. If the owner withdraws a still-pending request, it can call `CancelDisband` on the same validated party.

## Save and crash boundaries

- `MobileParty.IsDisbanding`, the custom name, army relationship, rosters, and waiting time jointly describe the flow. Saving or restoring only a Boolean in a custom Behavior can disagree with `DisbandPartyCampaignBehavior`'s waiting table.
- The normal path depends on `Campaign.Current`, the event dispatcher, and the Campaign behaviors being initialized. Do not call it before Campaign construction, while a save is still being restored, or during module teardown.
- A listener receives a party that may still be in a `MapEvent`, army, or settlement visit. Treat it as a closing object; do not create a new army, add it to a new roster, or use it as an ordinary movable party from the callback.
- [DestroyPartyAction](../DestroyPartyAction) and `MobileParty.RemoveParty()` later clean map locators, hero prisoners, ships, and Campaign collections. Removing the object from a list yourself can leave references that reappear as invalid objects after loading.

## Navigation

- **↑ Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [LeaveSettlementAction](../LeaveSettlementAction) · [DestroyPartyAction](../DestroyPartyAction) · [TakePrisonerAction](../TakePrisonerAction)
- **Related:** [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior) · [TransferPrisonerAction](../TransferPrisonerAction)
