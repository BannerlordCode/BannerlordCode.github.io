---
title: "MapEvent"
description: "The runtime carrier for one in-progress hostile encounter on the campaign map: it holds the attacker and defender MapEventSide, drives the per-tick combat simulation and the settlement of loot, prisoners, and captured settlements, and is the shared base for field battles, raids, sieges, and hideout fights."
---
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**Source:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## Overview

`MapEvent` is the runtime carrier for a **single hostile encounter currently playing out on the campaign map**. When two (or two groups of) [`MobileParty`](../MobileParty/)/[`PartyBase`](../PartyBase/) meet and start fighting, the engine creates a `MapEvent`, sorts the participants into an attacker side (`AttackerSide`) and a defender side (`DefenderSide`) — each modelled by a [`MapEventSide`](../../campaign-ext/MapEventSide/) — and then, on every campaign tick, runs a combat simulation via `CombatSimulationModel` until one side wins or retreats. Afterwards it finalizes the distribution of loot, prisoners, renown, influence, and captured settlements (for sieges).

It is **not** the battle scene itself: the actual 3-D fight is a `Mission`. `MapEvent` always lives in the campaign (Campaign/Map) layer. The two are bridged by a `BattleObserver` (`IBattleObserver`): the battle scene reports per-round casualties back to the `MapEvent`, which applies them to rosters and hero state.

## Mental Model

### What it is / is not

- **Is:** a snapshot of one map-layer encounter plus a state machine that advances it (`MapEventState.Begin → Wait → WaitingRemoval`).
- **Is not:** a renderable 3-D battle, a plain class you are free to `new`, or a persistent "battle history" container. It only ever describes the encounter that is **happening right now**.

### Lifecycle (engine-driven — do not replay manually)

1. **Creation.** The engine internally calls `new MapEvent()` and then `Initialize(attacker, defender, component, battleType)`. Sieges, sally-outs, and blockades are started by [`MapEventManager`](../../campaign-ext/MapEventManager/) through `StartSiegeMapEvent` / `StartSallyOutMapEvent` / `StartSiegeOutsideMapEvent` / `StartBlockadeBattleMapEvent`. The player's field/raid/hideout encounters are created by [`PlayerEncounter`](../../campaign-ext/PlayerEncounter/)`StartBattle()` via `StartBattleInternal`. After creation `State = Wait` and `OnMapEventStarted` fires.
2. **Both sides enter.** Each party is routed into a side through `party.MapEventSide = ...` (`AddInvolvedPartyInternal`); the `Parties` lists of `AttackerSide` / `DefenderSide` grow. Garrison and nearby friendly troops get pulled in too.
3. **Simulation advances.** Every campaign tick, `MapEventManager.Tick()` walks the active events and calls `Update()` — running combat simulation (`SimulateBattleSessionForMapEvent`) on non-player and raid events, judging `BattleState` from troops reaching zero, morale collapse, or retreat, then computing the result in `OnBattleWon` once a winner is decided.
4. **Settlement and teardown.** Once a side wins, a ceasefire/peace is reached, or a retreat happens, `FinalizeEvent()` runs, `State` becomes `WaitingRemoval`, `OnMapEventEnded` fires, and the engine distributes loot/prisoners/ships, applies `KillCharacterAction` (dead heroes), `DestroyPartyAction` (defeated party dissolves), and `SiegeCompleted` / `AfterSiegeCompleted` for sieges.
5. **Removal.** On the next tick `MapEventManager.Tick()` sees `IsFinalized` and removes the event from its `MBList`.

### Who creates / who holds

- **Creator:** the engine only (`MapEventManager` + `PlayerEncounter`). The constructor is `internal`; **mods cannot `new MapEvent()`**.
- **Holder:** `Campaign.Current.MapEventManager` keeps all active events in an `MBReadOnlyList<MapEvent>` (`MapEvents`). Because `MapEvent` derives from `MBObjectBase`, it is also registered in the [`MBObjectManager`](../../campaign-ext/MBObjectManager/) object system and is serializable into saves. The player's encounter is additionally referenced by `PlayerEncounter.Current`.

### Layer

Campaign (Campaign)/map layer, parallel to `Mission` (the battle scene). Every public member is "map-state" data and does not depend on a concrete battle instance.

## When to Use / When NOT to Use

**Use `MapEvent` when**

- You subscribe to [`CampaignEvents`](../../campaign-ext/CampaignEvents/) such as `OnMapEventStarted` / `OnMapEventEnded` / `OnPartyAddedToMapEvent` and want to read or react inside an encounter's lifecycle (statistics, notifications, quest triggers).
- At a legal moment (player decision, menu logic) you read `MapEvent.PlayerMapEvent` / `MobileParty.MapEvent` state: both sides' troop counts, strength, winner, settlement, whether it is a naval fight, etc.
- You drive an engine-hosted "ending": `MapEventManager.FinalizePlayerMapEvent()` (for the player event — it also calls `PlayerEncounter.Finish()` internally), `MapEvent.DoSurrender(side)`, or `MapEvent.SetOverrideWinner(...)` (to force a quest/scripted result).

**Do NOT use / dangerous usage**

- Do not `new MapEvent()` or call the `internal Initialize(...)`. Events must be built by the engine through the standard flow; otherwise `MapEventManager` never registers it and simulation/teardown never run.
- Do not rewrite `_sides`, the `Parties` of `AttackerSide`/`DefenderSide`, or hand-assign `party.MapEventSide` to "pull troops in". Let the engine manage sides via the standard `PartyBase.MapEventSide` path; forcing it breaks simulation and loot attribution.
- Do not access the concrete `MapEventParty` entries of either side after the event is `IsFinalized` (it has entered `WaitingRemoval`) — see Risks below.
- To *start* a battle, go through [`PlayerEncounter`](../../campaign-ext/PlayerEncounter/) and the encounter model, not by constructing a `MapEvent`.

## Detecting and resolving map events (and the myth of `GetMapEventAtPosition`)

There is **no built-in `GetMapEventAtPosition` method** in the Bannerlord API (checked across 1.3.0 / 1.3.15 / 1.4.5). To find "the event at a position" you enumerate the active events and compare `Position` yourself. The supported detection paths are:

- **The player's own event:** `MapEvent.PlayerMapEvent` (a static property returning `MobileParty.MainParty?.MapEvent`).
- **Any specific party's event:** read `party.MapEvent` on a [`MobileParty`](../MobileParty/) or [`PartyBase`](../PartyBase/).
- **All active events:** iterate `Campaign.Current.MapEventManager.MapEvents` (`MBReadOnlyList<MapEvent>`); filter by `mapEvent.Position` (a `CampaignVec2`) when you need the event near a map coordinate, and skip `mapEvent.IsFinalized` before touching either side.
- **Reactive instead of polling:** subscribe to `CampaignEvents.OnMapEventStarted` / `OnMapEventEnded` / `OnPartyAddedToMapEvent` from a [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase/).

The engine decides the winner and resolves loot/prisoners; mods should read the result, not re-run the simulation. To *force* an outcome, use `SetOverrideWinner` / `DoSurrender` (see below), not a hand-rolled settlement.

## Dependencies

- **Upstream (create / supply data)**
  - [`MobileParty`](../MobileParty/) / [`PartyBase`](../PartyBase/): the participating parties, aggregated through `MapEventSide.Parties`.
  - [`PlayerEncounter`](../../campaign-ext/PlayerEncounter/): drives the creation and ending of the player's encounter.
  - [`MapEventManager`](../../campaign-ext/MapEventManager/) (internal to the campaign system): registers, ticks, and removes all active events.
  - [`MBObjectManager`](../../campaign-ext/MBObjectManager/): the registration and save container for `MapEvent` as an `MBObjectBase`.
- **Downstream (driven / result sinks)**
  - [`MapEventSide`](../../campaign-ext/MapEventSide/): the concrete per-side faction data and simulation.
  - [`SiegeEvent`](../../campaign-ext/SiegeEvent/): the parent abstraction for siege events; `MapEventSettlement.SiegeEvent` is linked during teardown.
  - Settlements being raided ([`Settlement`](../Settlement/)) or captured towns.
  - `*Action` classes applied during settlement: `KillCharacterAction`, `TakePrisonerAction`, `DestroyPartyAction`, `ChangeShipOwnerAction`, `EndCaptivityAction`, `LeaveSettlementAction`.
- **Related events (the [`CampaignEvents`](../../campaign-ext/CampaignEvents/) family)**
  - `OnMapEventStarted(MapEvent, PartyBase, PartyBase)`, `OnMapEventEnded(MapEvent)`
  - `OnPartyAddedToMapEvent(PartyBase)`, `OnNearbyPartyAddedToPlayerMapEvent(MobileParty)`
  - `OnCollectLootItems(PartyBase, ItemRoster)`, `OnLootDistributedToParty(PartyBase, PartyBase, ItemRoster)`, `OnPlayerPartyKnockedOrKilledTroop(CharacterObject)`
  - `SiegeCompleted(Settlement, MobileParty, bool, BattleTypes)`, `AfterSiegeCompleted(Settlement, MobileParty, bool, BattleTypes)`
- **Related models (via `Campaign.Current.Models`)**
  - `CombatSimulationModel` (battle simulation & rounds), `BattleRewardModel` (loot/renown/influence/ships), `EncounterModel` (retreat/join checks), `MilitaryPowerModel`, `MapDistanceModel`, `PartyMoraleModel`, `PartyHealingModel`, `DifficultyModel`, `ShipCostModel`, `TroopSupplierProbabilityModel`.
- **Save points:** serialized with the campaign save as a whole (`MapEvent` itself + the `MBList` inside `MapEventManager`); `OnLateLoad` / `OnAfterLoad` rebuild older saves (e.g. v1.2.0 / v1.3.0 / v1.4.1 field migration).

## Risks

1. **Accessing sides after the event has ended.** `FinalizeEvent()` → `FinalizeEventAux()` calls `sides[i].Clear()`, emptying each side's `MapEventParty` list. Once `State == WaitingRemoval`, `AttackerSide.Parties` / `DefenderSide.Parties` are empty and `LeaderParty` may be `null`. Inside `OnMapEventEnded`, iterating `InvolvedParties` or reading `LeaderParty.Name` yields empty data or a `NullReferenceException`. Cache any result you need (winner, settlement) before finalize or at the top of the callback.
2. **Holding stale `MobileParty` / `PartyBase` references.** The loser may be destroyed by `DestroyPartyAction.Apply` during teardown, and the winning leader may be swapped by `RemovePartyLeader()`. Storing a party reference taken from a `MapEvent` into a cross-event / cross-day structure points at an already-dead object. Always use the current fields on `Hero`/`PartyBase`, or null-check and test `IsActive` before use.
3. **Mutating state in the wrong phase.** `SetOverrideWinner` / `SetDefenderPulledBack` / `ResetBattleState` / `DoSurrender` only make sense in specific battle phases. Calling them on an already-`IsFinalized` event, or before it has really started, produces states that conflict with the simulation or triggers a double settlement.
4. **Player events must use the dedicated teardown.** Calling `MapEvent.FinalizeEvent()` directly only cleans up the event itself; the player's encounter still needs `PlayerEncounter.Finish()` to close the encounter state, or `PlayerEncounter.Current` stays set and the menu / subsequent encounter logic goes wrong. Prefer `MapEventManager.FinalizePlayerMapEvent()`.
5. **Dangling references / bad saves.** `MapEvent` references `PartyBase`, settlements, and `MapEventComponent` through `SaveableField`. If your mod keeps a long-lived `MapEvent` reference in its own save data, and that event was `FinalizeEvent()`-ed during load because of a version migration (see the v1.2.0 cleanup branch in `OnAfterLoad`), the reference points at a discarded, waiting-for-removal object. Never keep a `MapEvent` reference in save data — store the `stringId` or a stable `PartyBase` identifier instead.
6. **Do not hand-write `party.MapEventSide`.** It is maintained uniformly by the engine inside `Initialize` / `AddInvolvedPartyInternal` / `RemoveInvolvedPartyInternal`. Manual assignment bypasses the strength recalculation (`RecalculateRenownAndInfluenceValuesOnPartyInvolved`) and the visual/AI update, corrupting battle results or map presentation.
7. **Mutating map-event state outside its lifecycle.** Because the event only reflects the *currently active* encounter, any mutation you perform outside `Wait`/`Begin` (e.g. while `IsFinalized`, or on an event you re-fetched from save data) is orphaned: the manager will not tick it, no settlement runs, and other systems reading `PartyBase.MapEventSide` see inconsistent data. Treat every `MapEvent` as read-mostly except for the narrow control methods below, called only while the event is live.

## Key Members (grouped by theme)

### Sides and factions

- `MapEventSide AttackerSide` / `MapEventSide DefenderSide`: the attacker/defender aggregate views, backed by `_sides[1]` / `_sides[0]`. **Side effect:** their `Parties` are cleared after finalize. **When:** read participants, troop counts, strength; do not rewrite them.
- `MapEventSide GetMapEventSide(BattleSideEnum side)`: fetch a side by enum, equivalent to `(side == Attacker ? AttackerSide : DefenderSide)`. **When:** generic access; avoids hard-coding the index.
- `MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`: read-only list of that side's participating `MapEventParty`. **When:** iterate each side's troops and contribution.
- `PartyBase GetLeaderParty(BattleSideEnum side)`: the leader party of that side (usually the first to join). **When:** get the opponent's name / check a clan; may be `null` after finalize.
- `IEnumerable<PartyBase> InvolvedParties`: flattens both sides' participants. **When:** act on all participants (e.g. notifications); empty after finalize.
- `BattleSideEnum GetOtherSide(BattleSideEnum side)`: get the opposite side's enum.
- `bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`: can this party join as that side (same side must be at peace, opposite side at war)? **When:** read-only probe of "will nearby AI get pulled in"; do not use it to pull troops in manually.

### Outcome and battle state

- `BattleState BattleState` (`None`/`AttackerVictory`/`DefenderVictory`/`DefenderPullBack`, …): the current outcome. **Side effect:** setting victory triggers `OnBattleWon` → result computation. **When:** observe read-only; to force a result use `SetOverrideWinner`.
- `bool HasWinner` / `BattleSideEnum WinningSide` / `MapEventSide Winner` / `BattleSideEnum DefeatedSide`: derived outcome info. **When:** read during settlement / notifications.
- `MapEventState State` (`Begin`/`Wait`/`WaitingRemoval`); `bool IsFinalized => State == WaitingRemoval`. **Always check `IsFinalized` before touching either side's members.**
- `BattleTypes EventType` and the predicates `IsFieldBattle` / `IsRaid` / `IsSiegeAssault` / `IsSallyOut` / `IsSiegeOutside` / `IsBlockade` / `IsHideoutBattle` / `IsForcingVolunteers` / `IsForcingSupplies` / `IsSiegeAmbush`: the event type and per-subtype tests. **When:** branch logic by type (e.g. only process villages for `Raid`).
- `BattleSideEnum RetreatingSide` / `bool EndedByRetreat` / `int PursuitRoundNumber`: retreat and pursuit info (stable from v1.3.0). **When:** detect "ended by being driven off".
- `bool IsPlayerMapEvent` (`this == MapEvent.PlayerMapEvent`), `BattleSideEnum PlayerSide` (`PartyBase.MainParty.Side`), `static MapEvent PlayerMapEvent` (`MobileParty.MainParty?.MapEvent`): player-related shortcuts. **When:** scope logic to the player's encounter.
- `float[] StrengthOfSide` (length 2, attacker/defender strength), `void RecalculateStrengthOfSides()`: a snapshot of both sides' strength. **When:** pre-battle estimate, UI display; `RecalculateStrengthOfSides` refreshes after side changes.
- `MBList<BattleSideEnum> WonRounds`; `int UpdateCount => WonRounds.Count`: the winner of each simulated round. **When:** replay a single battle's progress.

### Map position and settlement

- `CampaignVec2 Position`: the event's map coordinate. **When:** rendering, distance checks; `SetPositionAfterMapChange` / `CheckPositionsForMapChangeAndUpdateIfNeeded` are called on map switches.
- `Settlement MapEventSettlement`: the related settlement (raided village, besieged town, or a nearby village). May be `null` for a pure field battle. **When:** read the raided/besieged target; siege teardown uses `MapEventSettlement.SiegeEvent`.
- `TerrainType EventTerrainType`, `PowerCalculationContext SimulationContext`: terrain and simulation context (affect strength models). **When:** custom simulation or display.
- `bool IsNavalMapEvent => !Position.IsOnLand`: whether the fight is at sea. **When:** branch ship logic.
- `CampaignTime BattleStartTime`: when the fight started. **When:** measure duration.

### Participant enumeration and contribution

- `int GetNumberOfInvolvedMen()` / `int GetNumberOfInvolvedMen(BattleSideEnum side)`: total / per-side troop count. **When:** strength hints, quest conditions.
- `bool HasTroopsOnBothSides()`: both sides still have living troops. **When:** decide whether the fight can continue.
- `void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`: relative strength based on `SimulationContext`. **When:** show the player "us vs. them".
- `float GetPlayerBattleContributionRate()`: the player's share of their own side's contribution (0–1). **When:** loot-distribution display.
- `bool IsPlayerSergeant()`: whether the player fights as an attached troop (not the leader). **When:** distinguish "lord leads in person" from "a army subordinate".

### Control (use with care)

- `void FinalizeEvent()`: finalize immediately (sets `WaitingRemoval` and runs settlement). For the player event, prefer `MapEventManager.FinalizePlayerMapEvent()`.
- `void DoSurrender(BattleSideEnum side)`: make a side surrender, equivalent to the opponent winning. **When:** quest / story forced result.
- `void SetOverrideWinner(BattleSideEnum winner)` / `void SetDefenderPulledBack()` / `void ResetBattleState()`: override or reset the outcome. **When:** scripted battles; must be called while the event is live and not yet finalized.

## Example

### Example 1: subscribe to campaign events and observe the player's encounter start/end

```csharp
// In a CampaignBehaviorBase.RegisterEvents override, attach listeners
CampaignEvents.OnMapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
CampaignEvents.OnMapEventEnded.AddNonSerializedListener(this, OnMapEventEnded);

private void OnMapEventStarted(MapEvent mapEvent, PartyBase attacker, PartyBase defender)
{
    if (!mapEvent.IsPlayerMapEvent)
        return;

    // EventType is the BattleTypes enum; use the IsRaid / IsSiegeAssault predicates to branch
    string typeName = mapEvent.IsRaid ? "raid"
        : (mapEvent.IsSiegeAssault ? "siege" : "field battle");
    InformationManager.DisplayMessage(new InformationMessage(
        $"Player drawn into {typeName}: {attacker.Name} vs {defender.Name}"));
}

private void OnMapEventEnded(MapEvent mapEvent)
{
    // The event may already be in WaitingRemoval and its sides cleared; only read safe scalar fields
    if (mapEvent.EventType == MapEvent.BattleTypes.Raid && mapEvent.HasWinner)
    {
        Settlement raided = mapEvent.MapEventSettlement; // the raided village (not cleared)
        if (raided != null)
        {
            // e.g. record how many times this village has been raided
        }
    }
}
```

### Example 2: read the player's current MapEvent at a legal moment

```csharp
// Grab the event the player is currently in through the static property
MapEvent playerEvent = MapEvent.PlayerMapEvent;
if (playerEvent == null)
    return;

BattleSideEnum mySide = playerEvent.PlayerSide;
MapEventSide mySideData = playerEvent.GetMapEventSide(mySide);
int involvedMen = playerEvent.GetNumberOfInvolvedMen(mySide);
float myStrength = playerEvent.StrengthOfSide[(int)mySide];
bool enemyStillFighting = playerEvent.HasTroopsOnBothSides();

InformationManager.DisplayMessage(new InformationMessage(
    $"Our troops in fight: {involvedMen}, strength {myStrength:F0}, enemy still resisting: {enemyStillFighting}"));

// You can also reach an event from any party in reverse
MobileParty someParty = MobileParty.MainParty;
MapEvent partyEvent = someParty.MapEvent; // also works for non-player parties
```

### Example 3: enumerate all active events (debug / statistics)

```csharp
// Campaign.Current.MapEventManager holds every active event
foreach (MapEvent mapEvent in Campaign.Current.MapEventManager.MapEvents)
{
    if (mapEvent.IsFinalized)
        continue; // skip finalized ones to avoid touching cleared sides

    int attackers = mapEvent.GetNumberOfInvolvedMen(BattleSideEnum.Attacker);
    int defenders = mapEvent.GetNumberOfInvolvedMen(BattleSideEnum.Defender);
    // ...
}
```

## Cross-version notes

- This page treats the **v1.4.5** source as authoritative; the document lives under the `v1.3.15` subtree. The core lifecycle was already stable in 1.3.x.
- `WonRounds`, `RetreatingSide`, `PursuitRoundNumber` became stable fields in **v1.3.0** (there is a compatibility rebuild for `< v1.3.0` saves in `OnAfterLoad`); null/ default-guard these fields when writing cross-version mods.
- **v1.4.1:** in a raid, if `MapEventSettlement.LastAttackerParty != MobileParty.MainParty`, loading an old save force-calls `PlayerEncounter.Finish()`. If your mod touches raid events during old-save loading, watch that teardown branch.

## See Also

- ↑ Parent: [Campaign hub](../Campaign/)
- ↑ Bucket index: [api index](../)
- ↔ Siblings / related types
  - [MapEventSide](../../campaign-ext/MapEventSide/) — concrete per-side faction data
  - [SiegeEvent](../../campaign-ext/SiegeEvent/) — parent abstraction for siege events
  - [PlayerEncounter](../../campaign-ext/PlayerEncounter/) — creation and ending of the player's encounter
  - [MapEventManager](../../campaign-ext/MapEventManager/) — registers, ticks, and removes map events
  - [CampaignEvents](../../campaign-ext/CampaignEvents/) — the map-event event family
- Same bucket
  - [MobileParty](../MobileParty/) — participant (moving party)
  - [PartyBase](../PartyBase/) — participant (garrison / settlement party)
  - [Settlement](../Settlement/) — raided / besieged settlement
  - [Hero](../Hero/) — participating heroes and death settlement
  - [Army](../../campaign-ext/Army/) — multi-party army a participant may belong to
- Infrastructure
  - [MBObjectBase](../../campaign-ext/MBObjectBase/) — `MapEvent`'s base, registered in the object manager
  - [MBObjectManager](../../campaign-ext/MBObjectManager/) — registration and save container for `MapEvent`
