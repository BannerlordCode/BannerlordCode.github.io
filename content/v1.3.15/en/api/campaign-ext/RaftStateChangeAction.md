---
title: "RaftStateChangeAction"
description: "Transitions a mobile party into or out of raft state, including army, AI, prisoner, navigation, and campaign-event side effects."
---
# RaftStateChangeAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class RaftStateChangeAction` (static entry points only)  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/RaftStateChangeAction.cs`

## Responsibility

Moves a `MobileParty` through the campaign's raft transition. It is not a visual boolean toggle: entering raft state also changes army membership, navigation, AI, prisoners, and the raft-state event; leaving it restores AI scheduling but does not restore what was removed.

## Mental model

Raft state is the campaign transition between losing naval mobility and reaching land. The naval encounter flow activates it after a party has lost its ships, while `MobileParty.FinishNavigationTransitionInternal` deactivates it after navigation has completed. Although `MobileParty.IsInRaftState` has a public setter, that setter only updates the saved flag and party presentation; it does not perform the Action's army, AI, prisoner, or event cascade.

The class is instantiable in its declaration but has no instance state or instance behavior. Treat its two static methods as synchronous world-mutation commands. Check the party and phase before calling them, and do not persist an instance.

## When to use / when not to

- Use `ActivateRaftStateForParty` from a naval-encounter completion path when a party has no ships and must drift toward land.
- Use `DeactivateRaftStateForParty` only after the navigation transition has reached its land-side completion point.
- Do not assign `MobileParty.IsInRaftState` directly when the full transition is required; that skips the army, AI, prisoner, and event work.
- Do not call either method from a Mission tick, an active `MapEvent`, save synchronization, or an arbitrary daily tick. The upstream encounter or navigation owner must establish the correct ordering.

## Public entries

### ActivateRaftStateForParty

```csharp
public static void ActivateRaftStateForParty(MobileParty mobileParty)
```

Sets raft state, removes the party from its army, moves it toward the closest land, disables AI, releases hero prisoners through `EndCaptivityAction.ApplyByEscape`, clears the prisoner roster, and dispatches `OnMobilePartyRaftStateChanged`.

### DeactivateRaftStateForParty

```csharp
public static void DeactivateRaftStateForParty(MobileParty mobileParty)
```

Clears raft state, keeps `Army` detached, enables AI, recalculates short-term behavior, requests the next AI update, and dispatches the same raft-state event. It does not recreate a former army or prisoner roster.

The private `ApplyInternal(MobileParty, bool)` performs both transitions synchronously. It has no null check, current-state check, or phase check.

## Dependencies and call sites

The upstream object is a live [MobileParty](../../campaign/MobileParty). In the 1.4.5 source, `PlayerEncounter` activates the main party and eligible defeated parties after naval encounter resolution; `MobileParty.FinishNavigationTransitionInternal` deactivates the party once its navigation position is updated. The Action calls [EndCaptivityAction](../EndCaptivityAction) for every hero found in the prisoner roster, then publishes [CampaignEvents](../CampaignEvents)' `OnMobilePartyRaftStateChangedEvent` for [CampaignBehaviorBase](../CampaignBehaviorBase) listeners.

The party's [PartyBase](../../campaign/PartyBase) and AI are mutated as part of the same transaction. Treat the saved `MobileParty` raft flag and the campaign event as downstream state, not as substitutes for the transition.

## State cascade

When activating:

1. `mobileParty.IsInRaftState` becomes `true`; the property setter resets the anchor and marks the party presentation dirty.
2. Any current `Army` reference is cleared.
3. `MovePartyToTheClosestLand()` selects the landward movement target and `mobileParty.Ai.DisableAi()` stops ordinary decisions.
4. Hero prisoners are released with `EndCaptivityAction.ApplyByEscape`; the entire prisoner roster, including ordinary troops, is then cleared.
5. `OnMobilePartyRaftStateChanged` is dispatched synchronously.

When deactivating, the Action sets the flag to `false`, leaves `Army` null, enables AI, recalculates short-term behavior, sets `DefaultBehaviorNeedsUpdate` and `RethinkAtNextHourlyTick`, and dispatches the same event. Listeners should read `mobileParty.IsInRaftState` to determine the direction.

## Risks and save boundaries

- The raft flag is stored on `MobileParty` as `[SaveableField(1026)]`. Saving after an incorrect activation preserves the transition state; changing the flag back after load does not restore released prisoners, army membership, or the previous AI target.
- Activation clears the whole prisoner roster and releases hero prisoners first. It is not a cosmetic way to disable a ship icon and can create irreversible campaign changes.
- Calling the Action while a party is still in an army, an active encounter, or an enumerated party collection can make the caller continue with an object whose army, movement target, or prisoners have already changed.
- The entry points are not idempotent. Repeated activation repeats movement, AI disabling, prisoner processing, and event dispatch; repeated deactivation repeats AI recalculation and events. Guard with the current `IsInRaftState` value.
- Do not call from `SyncData`, early load, or campaign shutdown. The dispatcher, party AI, navigation graph, and prisoner roster must all be live.

## Real example: gate activation from campaign state

The following uses the real `MobileParty.MainParty` acquisition path and limits activation to a completed campaign encounter where the party has no ships but still has land navigation.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void EnterRaftStateAfterNavalEncounter()
{
    if (Campaign.Current == null)
        return;

    MobileParty party = MobileParty.MainParty;
    if (party == null || party.MapEvent != null || party.IsInRaftState)
        return;

    if (party.Ships.Count == 0 &&
        !party.HasNavalNavigationCapability &&
        party.HasLandNavigationCapability)
    {
        RaftStateChangeAction.ActivateRaftStateForParty(party);
    }
}
```

This belongs in an encounter-completion callback or equivalent campaign workflow, not a polling loop. A mod that owns a different transition should allow the core navigation path to call deactivation after land navigation finishes.

## Version note

The v1.3.15 and v1.4.5 public entries and state cascade are equivalent. The 1.4.5 decompiled source does not add phase validation or duplicate-call protection. Recompile against the target version and keep the caller responsible for lifecycle ordering.

## Navigation

- Save boundary: [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) registers persistent `MobileParty` state; the raft flag survives loading but the event and cleared relationships are not replayed.
- Parent: [campaign-ext API](../)
- Siblings: [EndCaptivityAction](../EndCaptivityAction) · [RepairShipAction](../RepairShipAction) · [RemoveCompanionDetail](../RemoveCompanionDetail)
- Children: [ActivateRaftStateForParty](#activateraftstateforparty) · [DeactivateRaftStateForParty](#deactivateraftstateforparty)
- Related: [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase)
