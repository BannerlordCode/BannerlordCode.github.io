---
title: "MapEvent"
description: "The resolved state and settlement boundary of one campaign-map encounter: it ties together the attacker, defender, involved parties, battle type, simulation state, and outcome, and sits between the map resolution and a battle Mission's MapEventStarted/Ended events."
---
# MapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class MapEvent : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

Holds the resolved state of one campaign-map encounter — attacker, defender, involved parties, battle type, simulation progress, and outcome — and is the settlement boundary that connects the map layer to the battle Mission and the `MapEventStarted`/`MapEventEnded` events.

## Overview

`MapEvent` is the **persistent state container and settlement boundary of one encounter on the campaign map**. It binds the attacker, defender, involved parties, encounter type, battle-simulation state, and resolved outcome onto a single object. It is not the `Agent` collection inside a Mission scene, and it is not the siege itself. A siege assault, a sally-out, a raid, a field battle, and a naval battle may each surface as a `MapEvent` with a different `BattleTypes` value; only afterwards may a Mission scene be created to play out the battle the player actually controls.

## Mental Model

Think of it as **"a combat ledger at the campaign layer"**:

- **Creation and ownership:** `MapEventManager` and the event components (`FieldBattleEventComponent`, `RaidEventComponent`, the siege-related components) create and register instances. `MobileParty.MapEvent`, the settlement's `Party.MapEvent`, and `MapEvent.PlayerMapEvent` are the common reverse-entry points. A mod must not bypass the manager and `new MapEvent()` itself — construction and `Initialize` are internal lifecycle steps.
- **Lifecycle:** a component creates and initializes the attacker and defender → `CampaignEvents.MapEventStarted` notifies behaviors → the manager's campaign tick calls `Update`, advancing the simulation or waiting on the player → outcome, loot, prisoners, and party positions are committed → `FinalizeEvent()` marks the event for removal and fires `MapEventEnded` → `MapEventManager` removes it from its list on a later tick.
- **Layering:** it lives at the Campaign map layer. `MapEventComponent` supplies the specialized rules for field battles, raids, and sieges; `PlayerEncounter` turns a player encounter into a menu / Mission entry point; only once the player enters the scene do `Mission` and `Agent` own the in-scene fighting.
- **Who observes it:** read the involved parties, sides, encounter type, troop counts, and settlement state inside the `MapEventStarted`/`MapEventEnded` events to record or adjust campaign-layer consequences.

## When to use

- Read or adjust campaign-layer consequences inside the `MapEventStarted` / `MapEventEnded` events.
- Inspect the involved parties, attacker/defender sides, encounter type, troop counts, and settlement state.
- Decide whether the player is currently in some kind of map encounter (via `MapEvent.PlayerMapEvent`).

## When NOT to use

- Do **not** use it to query an individual in-scene `Agent`.
- Do **not** call `Update` / drive simulation rounds from outside a `MapEvent`.
- Do **not** use it to manage an ongoing siege in place of `SiegeEvent`.
- When an encounter must end, let the vanilla encounter / settlement flow call `FinalizeEvent()` — do not clear the `MapEvent` reference on a party directly.

## Dependencies

### Upstream (creation and lifecycle)

- [MapEventManager](../MapEventManager/) holds the `MBList<MapEvent>`, registering new events, updating them each tick, and removing `IsFinalized` events.
- [MapEventComponent](../MapEventComponent/) supplies the concrete simulation context and outcome hooks for field battles, raids, and sieges.
- [MobileParty](../../campaign/MobileParty/) and [PartyBase](../../campaign/PartyBase/) provide the attacker/defender, map position, and the `MapEvent` back-reference on the parties.
- [Settlement](../../campaign/Settlement/) is the related settlement for sieges, raids, and village fights; a field battle with no settlement has a `null` `MapEventSettlement`.

### Downstream (observation and presentation)

- [CampaignEvents](../CampaignEvents/) exposes `MapEventStarted` / `MapEventEnded` to [CampaignBehaviorBase](../CampaignBehaviorBase/)-derived behaviors.
- [PlayerEncounter](../PlayerEncounter/) routes the player encounter to a menu, simulation, or Mission entry point; do not manipulate `Agent`s at this layer.
- [Mission](../../mission/Mission/) and [Agent](../../mission/Agent/) only own the real-time battle once the scene is entered and cannot replace `MapEvent`'s campaign-layer settlement.
- [SiegeEvent](../SiegeEvent/) owns the long-lived siege strategic state; an assault or sally-out is only a `MapEvent` produced during the siege.

### Save boundary

`MapEvent` is collected by `MapEventManager`; the attacker/defender sides, encounter type, position, and settlement state are serialized through the save system's definitions. Caching a `MapEvent` or `MapEventParty` reference after the event ends may give you an object that is waiting for removal or already cleaned up. Mod data that must persist should store a stable party / hero id, not the event instance itself.

## Key members

### Identifying the current encounter

- `PlayerMapEvent` (`static`): returns `MobileParty.MainParty?.MapEvent`; `null` when the player is not in a map encounter.
- `EventType` plus `IsFieldBattle`, `IsRaid`, `IsSiegeAssault`, `IsSallyOut`, `IsHideoutBattle`, `IsBlockade`: distinguish campaign rules. Prefer these semantic properties over guessing the concrete `MapEventComponent` type.
- `MapEventSettlement`, `Position`, `BattleStartTime`: the related settlement (may be `null`), the battle position, and the campaign-map start time.

### Reading attacker/defender and outcome

- `AttackerSide` / `DefenderSide`: the two `MapEventSide`s; the `Parties` within a side are the actual `MapEventParty` collection.
- `PlayerSide`, `GetMapEventSide(BattleSideEnum)`, `PartiesOnSide(BattleSideEnum)`: unified entry points keyed by the player side or an explicit enum side.
- `InvolvedParties`, `GetNumberOfInvolvedMen()`, `GetLeaderParty(BattleSideEnum)`: for counting and display; they do not create new involved parties.
- `BattleState`, `HasWinner`, `WinningSide`, `DefeatedSide`, `IsFinalized`: describe settlement progress. `HasWinner` being true does not mean the event is already removed from the manager — also distinguish `IsFinalized`.

### Entries that change flow

- `BeginWait()`: used when the player's encounter menu chooses to wait / continue; it hands control back to the campaign tick. It is not a generic "skip battle" method.
- `SetOverrideWinner(BattleSideEnum)`: the vanilla menu sets the winner when explicit cheat / special settlement is allowed; a mod calling it directly skips normal casualties, loot, and relation consequences and must have a clear settlement strategy.
- `FinalizeEvent()`: commits and ends the map event. It affects party positions, loot, event notifications, and manager cleanup — you must not set `MobileParty.MapEvent` to `null` from the outside instead.
- `SimulateBattleSetup(FlattenedTroopRoster[])` / `SimulateBattleRound(int, int)`: internal state entries used for simulated battles; let `PlayerEncounter` / the vanilla simulation flow drive them rather than re-calling them inside a daily tick.

## Risk

- **Dangling event lifecycle:** reading `MapEventSide`, `MapEventParty`, or storing the `MapEvent` in a custom long-lived field after `MapEventEnded` references a ledger that is waiting for removal. Store only a stable `PartyBase` / `Hero` id and release the temporary reference when the event ends.
- **Cross-layer operations:** mutating an `Agent` inside a Campaign tick, or using `MapEvent` to infer in-scene `Agent` state after a Mission ends, mixes two lifecycles. Put scene logic in a `MissionBehavior` and map-settlement logic in `CampaignEvents` subscriptions.
- **Double settlement:** manually calling `FinalizeEvent()`, `SetOverrideWinner()`, or simulation rounds can race with `MapEventManager.Tick` and `PlayerEncounter`, causing duplicated loot, wrong casualties, or `MapEventEnded` firing multiple times. Confirm the current state and caller, then let the single vanilla flow finish the settlement.
- **Broken siege state:** `IsSiegeAssault` / `IsSallyOut` describe only this one battle, not that the siege is over. The siege strategic state is still owned by [SiegeEvent](../SiegeEvent/); do not clear `Settlement.SiegeEvent` just because one assault ended.
- **Null references:** `MapEventSettlement` is `null` for a field battle with no related settlement; `PlayerMapEvent` is `null` when the player is not in an encounter; after it ends `IsFinalized` may already be true. Guard every read against these boundaries first.

## Real examples

### Example 1: read both sides and the encounter type from the player entry point

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent == null || mapEvent.IsFinalized)
{
    return;
}

MapEventSide playerSide = mapEvent.GetMapEventSide(mapEvent.PlayerSide);
PartyBase opponentLeader = mapEvent.GetLeaderParty(
    mapEvent.PlayerSide == BattleSideEnum.Attacker
        ? BattleSideEnum.Defender
        : BattleSideEnum.Attacker);

InformationManager.DisplayMessage(new InformationMessage(
    $"{mapEvent.EventType}: {mapEvent.GetNumberOfInvolvedMen()} men, " +
    $"player side {playerSide.MissionSide}, opponent {opponentLeader?.Name}"));
```

### Example 2: observe start/end in a campaign behavior, instead of polling and driving manually

```csharp
public override void RegisterEvents()
{
    CampaignEvents.MapEventStarted.AddNonSerializedListener(
        this, OnMapEventStarted);
    CampaignEvents.MapEventEnded.AddNonSerializedListener(
        this, OnMapEventEnded);
}

private void OnMapEventStarted(
    MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)
{
    if (mapEvent.IsRaid && mapEvent.MapEventSettlement != null)
    {
        // Persist the stable settlement id; do not store the mapEvent instance as long-lived state.
        string settlementId = mapEvent.MapEventSettlement.StringId;
    }
}

private void OnMapEventEnded(MapEvent mapEvent)
{
    bool endedWithWinner = mapEvent.HasWinner;
    // Read the outcome during the notification, then release the temporary reference to mapEvent.
}
```

## Version notes

- Both v1.3.0 and v1.3.15 place `MapEvent` in `TaleWorlds.CampaignSystem.MapEvents`, but the naval-encounter `BattleTypes` and several component dependencies grow across versions; do not assume the 1.4.5 naval branches exist in 1.3.0 code.
- The 1.4.5 `MapEventManager` explicitly defers removing finalized events to a later tick; a mod must not rely on the implementation detail that "the list has no object immediately after `FinalizeEvent` is called."
- The settlement entries and the `CampaignEvents.MapEventStarted`/`MapEventEnded` semantics are more stable than specific internal fields; cross-version mods should prefer these public events and semantic properties.

## See Also

- ↑ Parent: [campaign-ext module index](../) · [API index](../../)
- ↔ Siblings: [MapEventManager](../MapEventManager/) · [MapEventComponent](../MapEventComponent/) · [CampaignEvents](../CampaignEvents/) · [PlayerEncounter](../PlayerEncounter/)
- Related layers: [MobileParty](../../campaign/MobileParty/) · [PartyBase](../../campaign/PartyBase/) · [Settlement](../../campaign/Settlement/) · [Mission](../../mission/Mission/) · [Agent](../../mission/Agent/) · [SiegeEvent](../SiegeEvent/)
