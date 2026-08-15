---
title: "StartBattleAction"
description: "Creates or joins a MapEvent for an already-validated campaign encounter and raises the battle-start boundary for campaign and quest flows to take over."
---

# StartBattleAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class StartBattleAction`  
**Base:** None (static class)  
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/StartBattleAction.cs`

## Overview

Creates two real Campaign parties already validated by the EncounterManager, AI, or a player-encounter owner as fit to fight into a `MapEvent` battle, or joins a party into an existing event, completing participant registration, encounter state, and the battle-start notification; it only reaches the battle-start boundary and does not decide the war result, Mission content, or casualty settlement.

## Mental Model

`StartBattleAction` is the campaign map-event **create/join boundary**. It does not run the 3D Mission, settle casualties, decide the war, or replace [EncounterManager](../../campaign/EncounterManager) in deciding whether two parties may interact. The caller must first establish a legal attacker, defender, and encounter context.

The general `Apply(PartyBase, PartyBase)` derives `MapEvent.BattleTypes` from the current settlement, siege, raid, blockade, and existing map-event state. The explicit entries are narrower: `ApplyStartBattle` builds a field battle, `ApplyStartRaid` starts a raid on a settlement, `ApplyStartSallyOut` uses the town garrison against the defender, and `ApplyStartAssaultAgainstWalls` builds a siege assault.

If the defender has no map event, the internal path asks the current `EncounterModel` to create a map-event component; if an event already exists, it attaches the attacker on the opposite side. When the player is inside a settlement it may interrupt the current encounter, then compute whether to show a start notification, and raise `CampaignEventReceiver.OnStartBattle` through the dispatcher. The subsequent `MapEvent` and `PlayerEncounter` flows are responsible for entering the Mission and settling.

Use it directly only when a mod extends an existing encounter owner and holds live parties. Do not write `MapEventSide` directly, do not call it in an arbitrary tick, and do not treat it as a shortcut to teleport or start a 3D Mission.

## Dependencies

```text
EncounterManager / siege / raid owner
  -> StartBattleAction.Apply(attackerParty, defenderParty) or explicit typed entry
      -> Campaign.Current.Models.EncounterModel
          -> create MapEvent component or join a side
      -> CampaignEventDispatcher.OnStartBattle
          -> CampaignEvents / CampaignEventReceiver listeners
      -> PlayerEncounter / MapEvent / Mission projection
```

**Upstream:** [EncounterManager](../../campaign/EncounterManager), `PlayerEncounter`, the siege and raid flows supply the current party and settlement context.  
**Downstream:** [MapEvent](../../campaign/MapEvent), [CampaignEvents](../../campaign/CampaignEvents), the map-event Behavior, the player-encounter state, and finally the [Mission](../../mission/Mission) consume the result.  
**Related entities:** [PartyBase](../../campaign/PartyBase), [MobileParty](../../campaign/MobileParty), [Settlement](../../campaign/Settlement) and [SiegeEvent](../../campaign/SiegeEvent).

## Key Entry Points & BattleType Choice

### `Apply`

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

When the defender has no existing event, the source derives field battle, siege, perimeter siege, hideout, sally-out, raid, blockade, or blockade-sally-out from the live party and settlement state. When an event already exists, it preserves the event family and may change a special mutual sea-raid branch to a field battle. The `subject` passed to the event is the relevant settlement when a settlement context exists.

### Explicit entries

| Entry | Arguments that must be live objects | Meaning |
| --- | --- | --- |
| `ApplyStartBattle(MobileParty, MobileParty)` | attacker and defender party | Create or join a field battle. |
| `ApplyStartRaid(MobileParty, Settlement)` | attacker and settlement | Start a raid on the settlement party. |
| `ApplyStartSallyOut(Settlement, MobileParty)` | town garrison and defender | Launch a sally-out, requires `settlement.Town.GarrisonParty`. |
| `ApplyStartAssaultAgainstWalls(MobileParty, Settlement)` | attacker and settlement | Launch a siege assault on the settlement party. |

The explicit names do not perform the active, faction-hostile, siege/raid-state, and player-encounter-owner validation for the caller.

## State & Event Order

1. When the defender has no event, create a map-event component via the current `EncounterModel`; otherwise attach the attacker to the correct side.
2. When the player is in a settlement encounter and interruption is needed, call `PlayerEncounter.InterruptEncounter`.
3. A start notification is shown only when both sides are each an army leader; settlement events with multiple defender parties suppress this flag.
4. Dispatch `OnStartBattle(attackerParty, defenderParty, subject, showNotification)`.
5. `MapEvent`, the player encounter, the siege, and the Mission flows continue afterward; this Action does not end the event.

To observe map-event creation and cleanup, subscribe to `CampaignEvents.MapEventStarted` and `CampaignEvents.MapEventEnded`; to observe the immediate start boundary, use the battle callback on `CampaignEvents`/receiver. Neither notification means the battle is already settled.

## Real Current-Campaign Examples

### Start a mod's own field battle after validating both parties

The vanilla EncounterManager supplies live parties from the current Campaign and usually calls `StartPartyEncounter` first. A very narrowly scoped mod-owned encounter may use the explicit field-battle entry only after performing the same kind of checks:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void StartValidatedFieldBattle()
{
    if (Campaign.Current == null || MobileParty.MainParty == null)
        return;

    MobileParty attacker = MobileParty.MainParty;
    MobileParty defender = Campaign.Current.MobileParties.FirstOrDefault(p =>
        p != attacker && p.IsActive && p.MapEvent == null &&
        p.MapFaction != attacker.MapFaction);
    if (defender == null || attacker.MapEvent != null || attacker.CurrentSettlement != null ||
        defender.CurrentSettlement != null)
        return;

    StartBattleAction.ApplyStartBattle(attacker, defender);
}
```

This example deliberately restricts itself to two live map parties with no current event or settlement position. When you need player encounter, army joining, siege checks, or AI interaction rules, prefer to let [EncounterManager](../../campaign/EncounterManager) handle the owner flow.

### Observe the created MapEvent and start boundary

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

private void RegisterEvents()
{
    CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
}

private void OnMapEventStarted(MapEvent mapEvent, PartyBase attacker, PartyBase defender)
{
    if (mapEvent != null && attacker != null && defender != null)
        RecordBattle(mapEvent.StringId, attacker.StringId, defender.StringId);
}
```

Copy the id or other needed values in the callback. The `MapEvent` may be settled afterward and must not be saved directly as the mod's persistent state.

## Risks & Save Boundaries

- **The Action returns no validity result.** It assumes the Campaign, party, and encounter state are complete; null or stale input may fail inside `EncounterModel` or party/event access.
- **Player encounters should go through the owner.** Calling the explicit entry directly without the `PlayerEncounter`, siege, army, and EncounterManager setup steps may yield a map event with no correct menu or Mission projection.
- **The BattleType must match world state.** `ApplyStartRaid`, `ApplyStartSallyOut`, and `ApplyStartAssaultAgainstWalls` depend on the corresponding settlement component and AI/siege state; an ordinary village or a town without a garrison does not meet the entry contract.
- **An existing event is shared state.** The Action may join a party to a side, interrupt the player encounter, or change the sea-raid branch. Do not call it again inside the same pair's `MapEventStarted` callback.
- **Start is not settlement.** Do not arbitrarily remove troops, finalize the event, or enter the Mission from an `OnStartBattle` listener; the owner may still be preparing participants and the player flow.
- **A MapEvent is not a stably-savable callback object.** Save stable party/event ids and re-acquire live objects after a load; do not serialize the event reference or treat `showNotification` as persistent state.
- **Do not hand-write the side.** Directly assigning `MapEventSide` or `MapEvent` skips `EncounterModel` creation, event dispatch, player interruption, and participant registration; the problem may surface only in a later encounter or save.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [EnterSettlementAction](../EnterSettlementAction) · [TakePrisonerAction](../TakePrisonerAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related entities:** [MapEvent](../../campaign/MapEvent) · [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [SiegeEvent](../../campaign/SiegeEvent)
- **Owners & notifications:** [EncounterManager](../../campaign/EncounterManager) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [Mission](../../mission/Mission)
