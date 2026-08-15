---
title: "ShipDestroyDetail"
description: "Distinguishes an ordinary ship loss from an intentional discard and carries that reason through OnShipDestroyed to AI, Behaviors, and mod listeners."
---
# ShipDestroyDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`

**Module:** `TaleWorlds.CampaignSystem`

**Type:** `public enum ShipDestroyDetail`

**Declaring type:** `DestroyShipAction`

**Base:** `System.Enum`

**Source:** `TaleWorlds.CampaignSystem/Actions/DestroyShipAction.cs`

## One-line job

Preserves whether a ship was destroyed normally or deliberately discarded so downstream systems can distinguish identical ownership changes.

## Overview

`ShipDestroyDetail` is a public enum nested in `DestroyShipAction`; it has no `Apply` method of its own. A caller selects a public entry point on the parent Action. The Action captures the former owner, dirties naval visuals, assigns `Ship.Owner = null`, and then dispatches the corresponding enum value through `OnShipDestroyed`. `CaravansCampaignBehavior` uses the discard reason while trimming excess ships. Encounter resolution and cleanup of unclaimed loot ships use the default reason.

## Mental model

Destruction here does not free a CLR object. It removes a saveable `Ship` from a `PartyBase` fleet. The `Ship.Owner` setter removes the ship from the former owner's internal ship list and resets available upgrade pieces. By the time the event runs, its `owner` argument is the pre-change snapshot while `ship.Owner` is already `null`. The enum explains the intent of that state transition; it does not carry damage, attacker, or battle context.

Mods therefore normally **receive** this value from `CampaignEvents.OnShipDestroyedEvent` rather than constructing or persisting it. Produce the event with `DestroyShipAction.Apply` or `ApplyByDiscard`; do not assign a null owner directly.

## Actual entry point and event contract

The parent Action's private `ApplyInternal(Ship ship, ShipDestroyDetail detail)` has a fixed order:

```text
Capture the original Ship.Owner
  -> If it belongs to a MobileParty, SetNavalVisualAsDirty()
  -> ship.Owner = null (removes it from original PartyBase.Ships)
  -> OnShipDestroyed(originalOwner, ship, detail)
```

Each public parent entry point selects exactly one reason:

| Parent Action entry point | Enum value | Side effect and native timing |
|---|---|---|
| `DestroyShipAction.Apply(Ship ship)` | `ApplyDefault` (numeric value 0) | Used for an unassignable loot ship after an encounter, an ordinary loss, or destruction with no more specific reason. |
| `DestroyShipAction.ApplyByDiscard(Ship ship)` | `ApplyByDiscard` (numeric value 1) | Used for deliberate fleet trimming. In v1.4.5, `CaravansCampaignBehavior` calls it when a convoy exceeds its ideal ship count or a ship is no longer suitable. |

Both values perform the same ownership removal; only the event reason differs. Current `AiPatrollingBehavior` rechecks the former owner after either value. If a lord party is patrolling at sea but has lost naval navigation capability, it switches to Hold. Mod listeners can further separate economy statistics, notifications, and quest progress by reason.

## Dependencies

| Dependency | Relationship |
|---|---|
| [`DestroyShipAction`](../DestroyShipAction) | The parent Action that supplies this reason. It completes the state change before dispatching the event. |
| [`Ship`](../Ship) | Saveable object whose ownership is removed. Event listeners can still read its hull and name, but cannot recover the former owner from it. |
| [`PartyBase`](../../campaign/PartyBase) | Upstream owner and fleet container. The event preserves its reference, while `PartyBase.Ships` no longer contains the ship. |
| [`CampaignEvents`](../CampaignEvents) | Exposes `OnShipDestroyedEvent` with the former owner, ship, and reason to Behaviors and non-serialized listeners. |
| [`SetPartyAiAction`](../SetPartyAiAction) | Losing a ship can remove naval capability; subsequent AI may Hold or choose a recovery route to land or port. |

## Do not edit fields directly

Assigning `ship.Owner = null` does remove the ship from its fleet, but it does not dirty naval visuals first and does not dispatch `OnShipDestroyed`. UI can retain stale fleet visuals, AI cannot reassess navigation capability, and quest or mod accounting never observes the loss. Setting `HitPoints` to zero is likewise not a committed destruction. Once the owning workflow decides the ship is gone, choose the appropriate parent Action entry point.

## Lifecycle, save, and corruption risks

- The parent Action does not test `ship == null`, `IsInvulnerable`, `IsUsedByQuest`, or current hit points. The caller must establish that destruction is legal, or it can crash immediately or invalidate a quest asset.
- Never Apply twice to the same ship. The second event has a null former owner but still dispatches; listeners that dereference its `MobileParty` can fail, and accounting can double count the loss.
- `Owner` is a saveable `Ship` field. If code bypasses the Action and saves immediately, the detached fleet state becomes permanent while event-maintained mod state, quest counters, and AI caches never synchronize, producing a logical bad save.
- The event is synchronous and runs after ownership removal. Use its `owner` argument when the former party matters; do not read `ship.Owner` or destroy the ship again from the callback.
- Do not persist an event-delivered `Ship` reference under the assumption that it remains in a Campaign fleet. Save a stable identifier and your own loss record, then validate object resolution after loading.
- The enum currently has implicit values 0 and 1, but save data or protocols should not store only a raw integer. Future reasons would lose their meaning; preserve a semantic name and handle unknown values without another destructive action.

## Key members and consumption timing

| Member | When to read it | Do not assume |
|---|---|---|
| `ApplyDefault` | In `OnShipDestroyedEvent` to record a general loss, or when the parent Action selects ordinary destruction. | It does not prove battle damage and carries no attacker. |
| `ApplyByDiscard` | In the event callback to identify fleet trimming, economic disposal, or an explicit mod discard command. | It is not a sale or ownership transfer; those intents require transaction or owner-change workflows. |

## Real acquisition path

This `CampaignBehaviorBase` acquires the enum from the public event and obtains a real discard candidate from `PartyBase.MainParty.Ships`. The command retains at least one player ship so it does not accidentally remove the last source of naval capability.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.SaveSystem;

public sealed class ShipLossTrackerBehavior : CampaignBehaviorBase
{
    private int _discardedPlayerShips;

    public override void RegisterEvents()
    {
        CampaignEvents.OnShipDestroyedEvent.AddNonSerializedListener(this, OnShipDestroyed);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("my_mod_discarded_player_ships", ref _discardedPlayerShips);
    }

    private void OnShipDestroyed(
        PartyBase owner,
        Ship ship,
        DestroyShipAction.ShipDestroyDetail detail)
    {
        if (owner == PartyBase.MainParty &&
            detail == DestroyShipAction.ShipDestroyDetail.ApplyByDiscard)
        {
            _discardedPlayerShips++;
        }
    }

    public static void DiscardLastExtraPlayerShip()
    {
        PartyBase owner = PartyBase.MainParty;
        if (owner.Ships.Count > 1)
        {
            DestroyShipAction.ApplyByDiscard(owner.Ships[owner.Ships.Count - 1]);
        }
    }
}
```

Register the non-serialized event listener whenever the Campaign Behavior is initialized. Persist the counter through `SyncData`; the delegate and the counter have different lifecycles.

## Version notes

Both v1.3.15 and the inspected v1.4.5 core assembly nest this enum in `DestroyShipAction` and retain the same members, implicit values, `ApplyInternal` order, and `OnShipDestroyed` arguments. Real v1.4.5 callers include discard cleanup in `CaravansCampaignBehavior`, default destruction in `EncounterGameMenuBehavior`, and cleanup of unclaimed loot ships in `PlayerEncounter`. The type does not belong to SandBox.

## Navigation

- Save boundary: [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) registers affected `Ship` and party state; the destruction event is not replayed after loading.
- Parent: [DestroyShipAction](../DestroyShipAction) · [Campaign extension API](../)
- Sibling: [Ship](../Ship) · [SetPartyAiAction](../SetPartyAiAction)
- Children: no separate child page; the enum is owned by [DestroyShipAction](../DestroyShipAction)
- Related: [PartyBase](../../campaign/PartyBase) · [CampaignEvents](../CampaignEvents) · [ChangeShipOwnerAction](../ChangeShipOwnerAction)
