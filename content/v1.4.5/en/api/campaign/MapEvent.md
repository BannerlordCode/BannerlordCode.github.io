---
title: "MapEvent: the Campaign battle state machine"
description: "The v1.4.5 Campaign object that connects PartyBase, encounters, sieges, and Mission projection; explains how to observe battles without treating state as a freely writable result."
---
# MapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class MapEvent : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

## Responsibility in one sentence

`MapEvent` stores the parties, map position, event kind, simulation result, and resolution stage for a Campaign encounter, then projects that state to encounter UI, Mission, Campaign events, and the save system.

## Mental model

`MapEvent` is not a boolean saying that two parties met. It is a Campaign-owned state machine. It owns two `MapEventSide` instances, each containing `MapEventParty` records that refer to [PartyBase](../PartyBase), `MobileParty`, settlements, and siege objects. `EventType` distinguishes field battles, raids, sieges, sally-outs, blockades, and other flows; `Component` supplies the rules specific to that kind of event.

Creation is orchestrated by [MapEventManager](../MapEventManager), [StartBattleAction](../../campaign-ext/StartBattleAction), and `EncounterModel`. The selected component initializes the event and registers it with `Campaign.Current.MapEventManager`. A mod should observe a registered event instead of calling `new MapEvent()`: the constructor is not a public extension point, and bypassing the component skips sides, position, visuals, event dispatch, and save initialization.

The requested `BattleTypes` is not an immutable promise. During initialization and later party joining, a besieged defender, garrison, or blockade participant can turn the event into `SiegeOutside`, `SallyOut`, or `BlockadeSallyOutBattle`. Read the current `EventType`; do not rely only on the type passed to the creation method.

An event normally starts in `Wait` and advances as Campaign time and encounter or simulation logic run. A Mission consumes a temporary projection of that Campaign state when the player enters combat. After battle resolution, pursuit, and loot processing, the event reaches its removal stage and `IsFinalized` becomes `true`. Do not retain the old `MapEvent`, its sides, or Mission objects after that boundary.

## When to use it, and when not to

- **Use it to observe:** Read the sides, event kind, involved men, winner, retreat state, position, and Campaign/Mission boundary from a behavior or event listener.
- **Use the lifecycle events:** Observe creation and cleanup through `CampaignEvents.MapEventStarted` and `CampaignEvents.MapEventEnded`; read the player encounter through `MobileParty.MainParty?.MapEvent`.
- **Do not create battles with it:** Start a battle through `StartBattleAction.Apply`, the encounter model, and the existing `MapEventManager` path. `Initialize` is an internal protocol method.
- **Do not treat it as a world mutator:** `SetOverrideWinner`, `DoSurrender`, `EndByRunAway`, `FinishBattleAndKeepSiegeEvent`, and `FinalizeEvent` are protocol hooks used by specific battle flows, not general “set the result” or “delete the object” methods. Use the relevant Action and official timing for Campaign changes.
- **Do not cross the runtime boundary:** `MapEvent` belongs to Campaign. `Mission.Current`, Agent, Team, and Mission behavior objects are short-lived and should not become long-lived references in a map event or save record.

## Dependency graph

```text
Campaign
  └─ MapEventManager ── MapEvent ── MapEventSide ── MapEventParty ── PartyBase
                                      ├─ MobileParty / Army
                                      ├─ Settlement / SiegeEvent
                                      └─ MapEventComponent

StartBattleAction / EncounterModel ── creation and initialization
CampaignEvents.MapEventStarted ───── CampaignBehavior listeners
CampaignMission / Mission ────────── temporary player-battle projection
MapEventEnded ────────────────────── resolution and downstream cleanup
```

**Upstream:** [Campaign](../Campaign), [MapEventManager](../MapEventManager), [StartBattleAction](../../campaign-ext/StartBattleAction), [EncounterModel](../EncounterModel), and the attacker and defender `PartyBase` objects. Siege events also depend on `Settlement.SiegeEvent` and `BesiegerCamp`.  
**Downstream:** [CampaignEvents](../CampaignEvents) `MapEventStarted/Ended`, encounter menus, [CampaignMission](../CampaignMission), [Mission](../../mission/Mission), [CampaignBehaviorBase](../CampaignBehaviorBase), battle statistics, settlement nameplates, and visual objects.  
**Related models:** [MilitaryPowerModel](../MilitaryPowerModel) supplies the `SimulationContext` and party-strength calculations; [CombatSimulationModel](../CombatSimulationModel) and related models calculate rules but do not replace the `MapEvent` lifecycle.

## Acquiring an instance

### The player's current event

`MobileParty.MainParty` is the direct path for the player's encounter. It may be null outside a Campaign, and it may have no event after the party leaves combat. Always check the result and the finalization boundary.

```csharp
MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    int totalMen = mapEvent.GetNumberOfInvolvedMen();
    BattleSideEnum winner = mapEvent.WinningSide;
    Debug.Print($"Map event {mapEvent.EventType}: {totalMen} men, winner={winner}");
}
```

`MapEvent.PlayerMapEvent` is a static convenience path for the same player event. It still depends on an active `MobileParty.MainParty` and Campaign, so it is not a main-menu or post-teardown API.

### Listening for creation and cleanup

A `CampaignBehaviorBase` that needs every battle should subscribe during registration and use its owner as the listener lifetime. In v1.4.5 the start event supplies the `MapEvent`, attacker, and defender; the end event supplies the `MapEvent`.

```csharp
public sealed class BattleAuditBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
        CampaignEvents.MapEventEnded.AddNonSerializedListener(this, OnMapEventEnded);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)
    {
        Debug.Print($"Started {mapEvent.EventType}: {attackerParty.Name} vs {defenderParty.Name}");
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        Debug.Print($"Ended {mapEvent.EventType}; finalized={mapEvent.IsFinalized}");
    }
}
```

### Enumerating active events

`Campaign.Current.MapEventManager.MapEvents` is the manager's active collection. It is useful for a read-only diagnostic pass. Do not mutate that collection during enumeration by finalizing an event, destroying a party, or starting another battle.

```csharp
foreach (MapEvent mapEvent in Campaign.Current.MapEventManager.MapEvents)
{
    if (!mapEvent.IsFinalized && mapEvent.IsSiegeAssault)
    {
        PartyBase leader = mapEvent.GetLeaderParty(BattleSideEnum.Attacker);
        Debug.Print($"Siege assault leader: {leader?.Name}");
    }
}
```

## Key state to read

| Members | Use and boundary |
|---|---|
| `EventType`, `IsFieldBattle`, `IsRaid`, `IsSiegeAssault`, `IsSallyOut`, `IsBlockade` | Select the type-specific flow. Do not replace event type with “has a `MapEventSettlement`”; a field battle near a village can also have a related settlement. |
| `State`, `IsFinalized`, `BattleState` | Determine whether the event is active, waiting for removal, or resolved. `BattleState` may still be undecided; read `Winner` or `WinningSide` as a final result only when `HasWinner` is true. |
| `AttackerSide`, `DefenderSide`, `GetMapEventSide`, `PartiesOnSide` | Read a side's leader and participating parties. The returned view represents event state; it is not a roster that a mod should own or edit. |
| `InvolvedParties`, `GetLeaderParty`, `GetNumberOfInvolvedMen` | Query all involved `PartyBase` objects, a side leader, and party counts. Parties can leave before resolution, so consume the values at the event boundary. |
| `Position`, `MapEventSettlement`, `EventTerrainType`, `SimulationContext` | Locate the battle and select terrain or military-power context. Position may be corrected during a map change or a raid-to-field-battle transition. |
| `WinningSide`, `Winner`, `DefeatedSide`, `RetreatingSide`, `EndedByRetreat`, `PursuitRoundNumber` | Read resolution and pursuit state. An unfinished event, a no-winner state, or an active retreat is not a safe point for permanent rewards or save data. |
| `PlayerMapEvent`, `IsPlayerMapEvent`, `IsPlayerSimulation` | Distinguish the player's encounter from AI or simulation events. A simulation event may never enter a Mission or encounter menu. |
| `Component`, `TroopUpgradeTracker`, `WasEverInLootingPhase` | Access the event-type component, player troop-upgrade tracking, and loot-phase state. Component-specific data is meaningful only for the matching event type. |

## Key methods by purpose

### Reading participants and strength

`GetMapEventSide`, `PartiesOnSide`, `GetLeaderParty`, `CanPartyJoinBattle`, `GetNumberOfInvolvedMen`, `HasTroopsOnBothSides`, and `GetStrengthsRelativeToParty` are read-oriented checks. `CanPartyJoinBattle` checks current eligibility; it does not add a party. Joining still requires the party, encounter, and component synchronization performed by the Campaign flow.

### Simulation and the player-battle boundary

`SimulateBattleSetup`, `SimulateBattleRound`, `ResetBattleState`, `SetOverrideWinner`, and `SetDefenderPulledBack` affect simulation or resolution state. SandBox Mission controllers and Campaign simulation invoke them at defined phases. A custom Mission should not set a winner merely to skip combat; let `CampaignMission`, `PlayerEncounter`, and the relevant `MissionBehavior` produce a legal result so the Campaign layer can resolve it.

### Resolution and map changes

`BeginWait` expresses a waiting phase. `EndByRunAway`, `DoSurrender`, `FinishBattleAndKeepSiegeEvent`, and `FinalizeEvent` can trigger retreat, victory, siege preservation, party removal, event broadcasts, and resource cleanup. `SetPositionAfterMapChange`, `CheckPositionsForMapChangeAndUpdateIfNeeded`, and `OverrideMapEventSettlementForRaidToFieldBattleSwitch` likewise require their specific map or encounter phase. They are not ordinary setters for an arbitrary tick.

## Mission, siege, and event boundaries

- **Campaign to Mission:** `MapEvent` stores the Campaign battle; the native `Open` entry on `CampaignMission` projects current sides and component state into a `Mission`. After the Mission ends, the result must be returned to Campaign in the native order. Do not retain Agent, Team, or Mission references from `OnMissionEnded`.
- **Player-only completion:** `PlayerEncounter.DoApplyMapEventResults` publishes the player battle-end notification before committing MapEvent results. `FinalizeBattle` calls `FinalizeEvent` only for a winner, diplomatic completion, or the special raid/ambush conditions; otherwise it only leaves the current battle and keeps the event alive. Do not replace this path with the ordinary AI `Update` completion logic.
- **Siege:** Siege assault, sally-out, siege-outside, and blockade flows create different `BattleTypes` of `MapEvent`. `SiegeEvent` can pause or wait while a battle is active. Do not clear only `Settlement.SiegeEvent`, or the event, besieger camp, and party relationships will disagree.
- **Events:** `CampaignEvents.MapEventStarted` is dispatched after initialization has established the sides, position, component, and initial state. `MapEventEnded` is dispatched during cleanup. Listeners should copy the needed values into their own scalars or stable IDs rather than carrying the event across a save/load.
- **Models:** `MilitaryPowerModel`, `CombatSimulationModel`, and other models calculate rules; `MapEvent` owns runtime state and resolution. Replacing a model does not replace an existing event, and a model must not be made null while an event is running.

## Risks and crash boundaries

- **Wrong phase:** Reading `Campaign.Current`, `MapEvent.PlayerMapEvent`, or `CampaignTime` during module loading, in the main menu, before Campaign creation, or after teardown can produce null references or invalid lifecycle access.
- **Stale references:** After `IsFinalized`, `MapEventSide`, `MapEventParty`, `MapEventVisual`, and related `PartyBase` references may have been cleaned up or reassigned. Extract values in the callback and reacquire the current object on the next tick.
- **Direct state writes:** Editing `BattleState`, winner data, side lists, or a party's `MapEventSide` bypasses pursuit, prisoners, loot, relation, renown, settlement, and event-dispatch work. The inconsistency often appears later during a tick or save load.
- **Ending at the wrong time:** Calling `FinalizeEvent` while a Mission, siege, or pursuit still uses the event can remove objects too early. Siege cleanup can also hit phase assertions while removing besieger parties or resetting the settlement.
- **End-event timing:** `MapEventEnded` is dispatched after `State` becomes `WaitingRemoval` but before both sides run their final `Clear`. A listener may read committed scalar results, but should not carry in-memory Party or Side references into the next frame or a save record.
- **Missing siege state:** For siege event types, `Initialize` reads participant parties through `MapEventSettlement.SiegeEvent`. A custom flow that sets only a settlement or battle party without creating the complete `SiegeEvent` can null-reference during initialization.
- **Player versus AI confusion:** `MapEvent.PlayerMapEvent` only represents the main party's event. Treating every event as a player battle leads to invalid UI or Mission access for AI simulations.
- **Save boundary:** `MapEvent` and `MapEventManager` belong to the Campaign save graph managed by [SaveManager](../../save-system/SaveManager). `[SaveableField]` and `[SaveableProperty]` persist part of the state, while visuals and terrain caches are rebuilt after load. A custom behavior should save only its own stable IDs, enums, and scalars, then reacquire the event from `Campaign.Current.MapEventManager` or its parties after loading.

## Version note

This page follows the v1.4.5 decompiled source. `BattleTypes`, naval and blockade components, siege Mission projection, and load-repair behavior can change between versions. Recheck `MapEventManager`, `EncounterModel`, and `CampaignEvents` against the target version before sharing a cross-version mod.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [PartyBase](../PartyBase) · [MobileParty](../MobileParty) · [Settlement](../Settlement) · [SiegeEvent](../SiegeEvent)
- Related: [MapEventManager](../MapEventManager) · [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignMission](../CampaignMission)
- Mission boundary: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- Mutation entry: [StartBattleAction](../../campaign-ext/StartBattleAction)
