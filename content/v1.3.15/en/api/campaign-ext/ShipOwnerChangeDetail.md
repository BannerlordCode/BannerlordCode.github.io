---
title: "ShipOwnerChangeDetail"
description: "Explains ship ownership changes caused by trade, transfer, looting, production, or mobile-party creation, including the payment boundary."
---
# ShipOwnerChangeDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum ChangeShipOwnerAction.ShipOwnerChangeDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

## One-line responsibility

Carry the source of a ship ownership transaction through `OnShipOwnerChangedEvent` so settlement-nameplate notifications and patrol AI can distinguish trade, looting, and system creation.

## Mental Model

`ShipOwnerChangeDetail` is the reason selected by [`ChangeShipOwnerAction`](../ChangeShipOwnerAction), not a replacement for `Ship.Owner`. The Action keeps the old `PartyBase`, calculates and pays the ship value through `ShipCostModel` and [`GiveGoldAction`](../GiveGoldAction) on the trade path, writes `ship.Owner`, dirties naval visuals for both sides, and then publishes `CampaignEvents.OnShipOwnerChangedEvent`.

Use `ApplyByTrade`, `ApplyByTransferring`, or another matching public entry. Do not assign the owner directly or pay outside the trade wrapper, because that can double-settle the transaction.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `ApplyByTrade` | `ApplyByTrade` | A trade buys or sells the ship; the Action calculates and settles its price. |
| `ApplyByTransferring` | `ApplyByTransferring` | The ship moves between owners without a trade price. |
| `ApplyByLooting` | `ApplyByLooting` | Battle or looting resolution takes the ship. |
| `ApplyByMobilePartyCreation` | `ApplyByMobilePartyCreation` | A newly created mobile party receives the ship. |
| `ApplyByProduction` | `ApplyByProduction` | A produced ship is registered with its target owner. |

The `ApplyBy` spelling is part of each enum name, but its integer ordering is not a persistence contract.

## Dependencies

- **Upstream:** [`ChangeShipOwnerAction`](../ChangeShipOwnerAction), `Ship`, [`PartyBase`](../../campaign/PartyBase), and `ShipCostModel`.
- **Payment boundary:** Only `ApplyByTrade` enters value calculation and [`GiveGoldAction`](../GiveGoldAction); the other reasons are not free-trade variants.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `OnShipOwnerChangedEvent` as `IMbEvent<Ship, PartyBase, ChangeShipOwnerAction.ShipOwnerChangeDetail>`.
- **Downstream:** `SettlementNameplateNotificationsVM` and `AiPatrollingBehavior` consume the ownership-change event. The authoritative call sites do not show a port or shipyard behavior listening to it.
- **Save boundary:** Ship ownership is campaign state; the event reason is not replayed for non-serialized listeners after a load.

## Risks and Lifetime

- Writing `ship.Owner` directly skips ship-list registration, naval visual invalidation, and `OnShipOwnerChangedEvent`.
- `ApplyByTrade` chooses different gold paths for settlements, caravans, villagers, and lord parties. Do not pre-pay the same `cost` outside the Action.
- The event is synchronous. The ownership has changed when the callback runs, but downstream visual and party caches may still be processing; do not immediately destroy or transfer the same ship again.
- `oldOwner` may be null, and the new owner must satisfy the Action's mobile-party or settlement assumptions. Check before accessing `oldOwner.MobileParty`.

## Real Usage Example

The built-in settlement nameplate notifications listen with this signature:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;

public sealed class ShipOwnerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnShipOwnerChangedEvent.AddNonSerializedListener(this, OnShipOwnerChanged);
    }

    private void OnShipOwnerChanged(
        Ship ship,
        PartyBase oldOwner,
        ChangeShipOwnerAction.ShipOwnerChangeDetail detail)
    {
        if (detail == ChangeShipOwnerAction.ShipOwnerChangeDetail.ApplyByLooting && ship != null)
        {
            RecordLootedShip(ship, oldOwner);
        }
    }

    private void RecordLootedShip(Ship ship, PartyBase oldOwner)
    {
        // Read the new Owner and update a mod-owned runtime naval index.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example does not persist the transient reason.
    }
}
```

When a mod genuinely transfers a ship, it should obtain a real `PartyBase` and `Ship` from the campaign and call `ChangeShipOwnerAction.ApplyByTransferring(newOwner, ship)`. Trade should remain responsible for price and gold flow.

## Version Note

v1.3.15 and v1.4.5 expose the same five values and `OnShipOwnerChangedEvent` argument order. The v1.4.5 naval source is the authority for the payment, visual, and caller notes here.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↓ Owner Action: [ChangeShipOwnerAction](../ChangeShipOwnerAction)
- ↔ Siblings: [ShipDestroyDetail](../ShipDestroyDetail)
- Events: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [GiveGoldAction](../GiveGoldAction)
