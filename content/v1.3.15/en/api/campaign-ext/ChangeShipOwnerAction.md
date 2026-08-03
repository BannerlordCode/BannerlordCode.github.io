---
title: "ChangeShipOwnerAction"
description: "Transfers an existing ship through the campaign transaction boundary, including trade payment, naval visuals, ownership lists, and the owner-changed event."
---
# ChangeShipOwnerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeShipOwnerAction`  
**Base:** none (static class)  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

## Overview

**One-line responsibility:** Move an existing `Ship` from its current `PartyBase` to a new owner while keeping party ship lists, trade money, naval visuals, and campaign notifications consistent.

This action receives a ship and a new owner after an upstream system has already decided that the transfer is valid. It does not create or register a ship, decide whether a trade is legal, or replace a destroyed ship. Its five named entry points select a reason, then the private transaction updates ownership and raises `OnShipOwnerChanged` for AI and mod listeners.

## Mental Model

`ChangeShipOwnerAction` is a campaign transaction, not a thin assignment to `Ship.Owner`. `ApplyInternal` first remembers the old owner. For `ApplyByTrade`, it asks `Campaign.Current.Models.ShipCostModel` for a value and settles gold through `GiveGoldAction`. It then assigns `ship.Owner`; the `Ship` setter removes the ship from the old party, adds it to the new party, and resets unlocked upgrade-piece state. Finally, both mobile parties have their naval visuals marked dirty and `CampaignEventDispatcher` sends the old owner plus the reason.

The event is synchronous and is raised after the new owner is installed. A listener must use the event's `oldOwner` argument for the previous party; reading `ship.Owner` in the callback only returns the new owner. Call the action from a campaign command or upstream behavior after its source collection has been snapshotted. Do not call it while drawing UI, during save deserialization, or while iterating the same `Ships` collection that the setter will mutate.

## Transaction and Event Flow

```text
ApplyBy*(newOwner, ship)
  -> ApplyInternal remembers ship.Owner as oldOwner
  -> ApplyByTrade: ShipCostModel value -> GiveGoldAction payment
  -> ship.Owner = newOwner
       -> remove from oldOwner ship list
       -> add to newOwner ship list
       -> reset unlocked upgrade pieces
  -> mark old and new naval visuals dirty
  -> CampaignEvents.OnShipOwnerChangedEvent(ship, oldOwner, detail)
```

The 1.4.5 callers show the intended timing: `PartyScreenHelper` transfers ships in reverse order before destroying an empty party; `MapEvent` and `EncounterGameMenuBehavior` use the looting reason after battle resolution; and `CaravansCampaignBehavior` uses the trade path only after the caravan's ship value and gold threshold have been checked.

## Public Entry Points and Detail Values

`ShipOwnerChangeDetail` is the nested public enum used by the event. Each value is produced by exactly one public `ApplyBy*` wrapper:

| Detail value | Public entry point | Purpose and typical timing |
|---|---|---|
| `ApplyByTrade` | `ApplyByTrade(newOwner, ship)` | Transfers through a sale. `ShipCostModel` calculates the value and `GiveGoldAction` applies the appropriate party or character payment before ownership changes. Used by `CaravansCampaignBehavior` when a caravan buys a ship. |
| `ApplyByTransferring` | `ApplyByTransferring(newOwner, ship)` | Moves a ship without a trade payment, such as party-screen consolidation or `ChangePlayerCharacterAction` handing ships to the new main party. |
| `ApplyByLooting` | `ApplyByLooting(newOwner, ship)` | Records capture as loot without payment. `MapEvent` and `EncounterGameMenuBehavior` use it after loot allocation. |
| `ApplyByMobilePartyCreation` | `ApplyByMobilePartyCreation(newOwner, ship)` | Assigns an already existing ship while a new mobile party is being assembled. `MobileParty` creation uses this path. |
| `ApplyByProduction` | `ApplyByProduction(newOwner, ship)` | Preserves the production reason for a ship already created by an upstream production flow. The scanned 1.4.5 source has no built-in call site for this wrapper; it still performs the same owner, visual, and event steps. |

The enum is an event reason, not a second API for changing ownership. Mods should call the matching wrapper and inspect `ShipOwnerChangeDetail` only when reacting to an event.

## Dependencies and Downstream Consumers

| Direction | Type or subsystem | Contract |
|---|---|---|
| Upstream object | [`Ship`](../Ship) | Stores the persistent owner and updates both parties' ship lists from its `Owner` setter. |
| Party state | [`MobileParty`](../../campaign/MobileParty) and `PartyBase` | Supply the new/old party context, anchors, leaders, and naval visual state. |
| Trade model | [`ShipCostModel`](../ShipCostModel) and [`GiveGoldAction`](../GiveGoldAction) | Price and settle trade money. Do not pre-charge or directly mutate gold. |
| Downstream event | [`CampaignEvents`](../CampaignEvents) and [`CampaignEventReceiver`](../CampaignEventReceiver) | Expose `OnShipOwnerChangedEvent` with `(Ship, PartyBase oldOwner, ShipOwnerChangeDetail)`. |
| AI/UI consumers | `AiPatrollingBehavior` and the SandBox settlement nameplate listener | Re-evaluate patrol capability or update player-facing naval notifications after the transfer. |
| Destruction alternative | [`DestroyShipAction`](../DestroyShipAction) | Use when the ship should be removed, not assigned to another party. |
| Save boundary | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) | The ship owner is saveable state; the event is not replayed on load. |

## Risks, Save State, and Lifetime

- Do not replace this action with a raw `ship.Owner` write. The setter maintains the two party lists and upgrade cache, but a direct write still skips trade settlement, naval visual invalidation, and `OnShipOwnerChangedEvent`.
- Do not transfer ships in a forward `foreach` over `owner.Ships`. The setter changes that collection immediately. The built-in party-screen caller iterates by index from the last element, or a mod can take a `ToList()` snapshot before calling the action.
- `Ship._owner` is a saveable field. A partial custom cache or an exception between a mod's own bookkeeping steps and the action can persist an inconsistent owner; loading a save does not replay the ownership event for non-serialized listeners.
- `ApplyByTrade` changes the economy immediately. Do not deduct money before calling it. The source also expects usable party/leader context for its payment branches; an unhandled owner shape reaches a failed assertion and a fallback payment path.
- The callback runs synchronously. Do not re-transfer the same ship from inside the callback without a guard, and discard cached flagship or ship-count values obtained before the action.

## Real Usage Example

This `CampaignBehaviorBase` listener uses the real event acquisition path and preserves the old party supplied by the engine. It can be registered from a campaign behavior added by a mod's campaign startup hook:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;

public sealed class NavalTransferBehavior : CampaignBehaviorBase
{
    private Ship _lastLootedShip;
    private PartyBase _lastShipOwner;

    public override void RegisterEvents()
    {
        CampaignEvents.OnShipOwnerChangedEvent.AddNonSerializedListener(this, OnShipOwnerChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail detail)
    {
        if (detail == ChangeShipOwnerAction.ShipOwnerChangeDetail.ApplyByLooting)
        {
            _lastLootedShip = ship;
            _lastShipOwner = oldOwner;
        }
    }
}
```

For a direct transfer, obtain a real ship from a current settlement and let the action perform the collection and event updates:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

Settlement port = Settlement.CurrentSettlement;
Ship ship = port?.Party.Ships.FirstOrDefault();

if (ship != null && ship.Owner == port.Party)
{
    ChangeShipOwnerAction.ApplyByTransferring(PartyBase.MainParty, ship);
}
```

Use `ApplyByTrade` instead when the operation is a purchase; do not change the owner or gold manually first.

## Version Note

The v1.3.15 and v1.4.5 routes use the same five entry points and the same observable order: trade settlement, `Ship.Owner` update, naval visual invalidation, then the owner-changed event. The 1.4.5 source has no built-in caller for `ApplyByProduction`; do not infer an automatic ship creation or registration step from that name. Keep the reason semantics when targeting both versions rather than depending on raw enum integers.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [DestroyShipAction](../DestroyShipAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- ↓ Children: no separate child page; the nested reason enum is exposed by [ChangeShipOwnerAction](../ChangeShipOwnerAction)
- Related: [Ship](../Ship) · [ShipCostModel](../ShipCostModel) · [CampaignEvents](../CampaignEvents) · [MobileParty](../../campaign/MobileParty)
