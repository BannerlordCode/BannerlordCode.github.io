---
title: "TeleportationDetail"
description: "Explains immediate and delayed hero moves to settlements, parties, governor roles, and party-leader roles through TeleportHeroAction."
---
# TeleportationDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum TeleportHeroAction.TeleportationDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs`

## One-line responsibility

Identify the destination and timing semantics of a hero teleport so rosters, governor assignments, party leaders, AI, and delayed-save data take the correct migration branch.

## Mental Model

`TeleportationDetail` is the reason carried by [`TeleportHeroAction`](../TeleportHeroAction). The Action first sends `OnHeroTeleportationRequestedEvent`, then either performs an immediate settlement/party move or marks the hero as traveling for `TeleportationCampaignBehavior` to finish later. The immediate party-leader branch also clears party-name caches, restores party decisions, and cancels pending disbanding; delayed branches remove old governor and roster relationships before queuing the trip.

The event is therefore a synchronous request boundary, not a promise that the target has finished loading. Call the matching `ApplyImmediate*` or `ApplyDelayed*` method. Do not remove the hero from a roster and publish a teleport event yourself.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `ImmediateTeleportToSettlement` | `ApplyImmediateTeleportToSettlement` | Leave the old position and enter the target settlement immediately. |
| `ImmediateTeleportToParty` | `ApplyImmediateTeleportToParty` | Join the target mobile party immediately. |
| `ImmediateTeleportToPartyAsPartyLeader` | `ApplyImmediateTeleportToPartyAsPartyLeader` | Join the party, become its leader, and clear pending disband/decision state. |
| `DelayedTeleportToSettlement` | `ApplyDelayedTeleportToSettlement` | Schedule a move to the target settlement through the delayed-teleport model. |
| `DelayedTeleportToParty` | `ApplyDelayedTeleportToParty` | Schedule a later move into a mobile party. |
| `DelayedTeleportToSettlementAsGovernor` | `ApplyDelayedTeleportToSettlementAsGovernor` | Schedule a later governor assignment. |
| `DelayedTeleportToPartyAsPartyLeader` | `ApplyDelayedTeleportToPartyAsPartyLeader` | Schedule a later move and party-leader change. |

The enum order is not the delayed queue's save format. `TeleportationCampaignBehavior` saves the hero, target, time, and role flags as its own `TeleportationData`.

## Dependencies and Event Consumers

- **Upstream:** [`TeleportHeroAction`](../TeleportHeroAction), [`Hero`](../../campaign/Hero), [`Settlement`](../../campaign/Settlement), [`MobileParty`](../../campaign/MobileParty), and `DelayedTeleportationModel`.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `OnHeroTeleportationRequestedEvent` as `IMbEvent<Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail>`.
- **Downstream:** `TeleportationCampaignBehavior`, [`CampaignBehaviorBase`](../CampaignBehaviorBase), `DisbandPartyCampaignBehavior`, nameplates, governor behaviors, and party behaviors consume the request.
- **Save boundary:** Delayed `TeleportationData` is persisted through [`IDataStore`](../IDataStore) and the save system; the immediate request is not a mod-owned persistent queue.

## Risks and Lifetime

- An immediate move can remove the hero from the old party before entering the new settlement or party. Re-read `PartyBelongedTo` after the callback instead of retaining the old party reference.
- A null or invalid target, an active engagement, or a dead hero can make the Action return early. Check real targets and the Campaign lifecycle before calling.
- Becoming a party leader changes custom names, AI decisions, and disbanding state; do not confuse `ImmediateTeleportToParty` with its party-leader variant.
- Delayed teleport saves hero, target, and `CampaignTime`. Do not destroy the target, retain stale objects in a second mod queue, or maintain a parallel queue outside `SyncData`.
- The event is a synchronous request notification. Non-serialized listeners do not receive old requests after load; rebuild runtime state from the teleport behavior or the hero's current location.

## Real Usage Example

The built-in `TeleportationCampaignBehavior` consumes this event shape:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class TeleportAuditBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnHeroTeleportationRequestedEvent.AddNonSerializedListener(this, OnTeleportRequested);
    }

    private void OnTeleportRequested(
        Hero hero,
        Settlement targetSettlement,
        MobileParty targetParty,
        TeleportHeroAction.TeleportationDetail detail)
    {
        if (hero != null && detail == TeleportHeroAction.TeleportationDetail.DelayedTeleportToSettlementAsGovernor)
        {
            RecordGovernorMove(hero, targetSettlement);
        }
    }

    private void RecordGovernorMove(Hero hero, Settlement targetSettlement)
    {
        // Record the request; the delayed behavior completes it at the correct time.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example does not copy the behavior's save queue.
    }
}
```

An actual move should run from a live Campaign flow with a valid target, for example `TeleportHeroAction.ApplyDelayedTeleportToSettlementAsGovernor(hero, settlement)`. Do not treat `Hero.ChangeState` as a complete teleport.

## Version Note

v1.3.15 and v1.4.5 expose the same seven values and immediate/delayed branches. The v1.4.5 delayed-save and party-AI behavior is the authority for the risk notes here.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [TeleportHeroAction](../TeleportHeroAction) · [DisbandPartyAction](../DisbandPartyAction)
- ↓ Owner and event: [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase)
- Related: [Hero](../../campaign/Hero) · [Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty) · [IDataStore](../IDataStore)

