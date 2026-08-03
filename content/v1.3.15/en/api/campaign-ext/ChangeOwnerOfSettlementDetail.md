---
title: "ChangeOwnerOfSettlementDetail"
description: "Records whether settlement ownership changed through siege, barter, rebellion, gift, kingdom decision, or clan cleanup, and explains the event boundary."
---
# ChangeOwnerOfSettlementDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`

## One-line responsibility

Carry the reason for a settlement ownership transfer through `OnSettlementOwnerChangedEvent` so map, garrison, quest, and notification systems can distinguish siege, rebellion, barter, and cleanup.

## Mental Model

`ChangeOwnerOfSettlementDetail` is not the current owner and does not decide who may claim a settlement. It is the reason selected by [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction). A public `ApplyBy*` method updates the settlement owner, town/castle components, map visuals, and related caches before `CampaignEvents.OnSettlementOwnerChangedEvent` publishes the detail.

Use the public wrapper matching the source of the transfer, such as `ApplyBySiege`, `ApplyByBarter`, or `ApplyByGift`. Do not assign `Settlement.OwnerClan` directly or publish the event yourself. A listener can use the reason for logs and quests, but should treat the ownership mutation as already applied.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `Default` | `ApplyByDefault` | A transfer without a narrower business cause. |
| `BySiege` | `ApplyBySiege` | A siege winner takes ownership through the capture flow. |
| `ByBarter` | `ApplyByBarter` | Ownership changes through barter or negotiation. |
| `ByLeaveFaction` | `ApplyByLeaveFaction` | A lord's faction departure requires ownership cleanup. |
| `ByKingDecision` | `ApplyByKingDecision` | A kingdom decision selects the new ownership. |
| `ByGift` | `ApplyByGift` | The settlement is granted to a new hero. |
| `ByRebellion` | `ApplyByRebellion` | A rebellion changes the settlement's ownership. |
| `ByClanDestruction` | `ApplyByDestroyClan` | The former owner clan is destroyed and ownership is reassigned. |

The numeric ordering is not a save format. Persist the resulting settlement state and any mod-owned explanation, not the enum integer.

## Dependencies and Event Consumers

- **Upstream:** [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction), [`Settlement`](../../campaign/Settlement), new/old [`Hero`](../../campaign/Hero), and siege or barter context.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `OnSettlementOwnerChangedEvent` as `IMbEvent<Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail>`.
- **Downstream:** [`CampaignEventReceiver`](../CampaignEventReceiver), [`Army`](../Army), garrison/building behaviors, map nameplates, and quest listeners consume the reason.
- **Related actions:** Siege resolution may also involve [`SiegeEvent`](../SiegeEvent), [`SiegeAftermathAction`](../SiegeAftermathAction), and [`ChangeKingdomAction`](../ChangeKingdomAction).
- **Save boundary:** Ownership, settlement components, and relations are saved; the event reason is runtime-only.

## Risks and Lifetime

- Writing ownership directly skips garrison, building, village-bound, map-visual, and army-member synchronization, leaving the map and campaign state inconsistent.
- `openToClaim`, `newOwner`, `oldOwner`, and `capturerHero` have different meanings and may be null on some paths. Do not infer that all event arguments are present from the detail alone.
- The event synchronously fans out to several behaviors. Transferring the same settlement again from a listener can recurse into quest and cache updates or modify a collection being traversed.
- A save load does not replay non-serialized ownership events. Rebuild UI and navigation caches from the settlement's current owner.

## Real Usage Example

The built-in `SettlementNameplatesVM` and `Army` use this event shape:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class SettlementOwnerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(this, OnSettlementOwnerChanged);
    }

    private void OnSettlementOwnerChanged(
        Settlement settlement,
        bool openToClaim,
        Hero newOwner,
        Hero oldOwner,
        Hero capturerHero,
        ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
    {
        if (detail == ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege && openToClaim)
        {
            RecordSiegeTransfer(settlement, oldOwner, newOwner, capturerHero);
        }
    }

    private void RecordSiegeTransfer(Settlement settlement, Hero oldOwner, Hero newOwner, Hero capturerHero)
    {
        // Update mod-owned runtime records from the current settlement state.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example has no event reason to persist.
    }
}
```

A real siege resolution should call `ChangeOwnerOfSettlementAction.ApplyBySiege(newOwner, capturerHero, settlement)`. It should not mutate ownership fields itself.

## Version Note

v1.3.15 and v1.4.5 expose the same eight reasons and event parameter order. The v1.4.5 source is the authority for the downstream timing and side effects described here.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction) · [ChangeKingdomActionDetail](../ChangeKingdomActionDetail)
- ↓ Owner and event: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [Settlement](../../campaign/Settlement) · [Hero](../../campaign/Hero) · [SiegeEvent](../SiegeEvent)
