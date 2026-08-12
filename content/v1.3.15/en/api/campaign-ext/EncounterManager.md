---
title: "EncounterManager"
description: "The campaign-map encounter boundary: routing mobile-party interaction into PlayerEncounter, MapEvent, and Mission lifecycles."
---
# EncounterManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class EncounterManager`  
**Base:** none  
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## One-line responsibility

It routes campaign-map decisions about mobile-party interaction, party-versus-party contact, and settlement arrival into the existing `PlayerEncounter`, `MapEvent`, `SiegeEvent`, and `*Action` flows. It does not own encounter state and it is not the battle-scene `Mission`.

## Mental model

`EncounterManager` is a stateless campaign-layer router. When it is called, the state that changes normally belongs to a `MobileParty` / `PartyBase`, a `Settlement`, `PlayerEncounter.Current`, or a `MapEvent`.

- **Who creates and owns what:** There is no `EncounterManager` instance and no `Current`. `Campaign.Current` owns `MobileParties`, `MapEventManager`, and `PlayerEncounter`; `MapEventManager` owns the active `MapEvent` list; `MissionState` / `CampaignMissionManager` owns a battle scene's `Mission`.
- **Layer:** The class lives in the Campaign/Map layer. It checks party and settlement state and delegates to `IInteractablePoint`, `StartBattleAction`, `EnterSettlementAction`, or `PlayerEncounter`.
- **Player encounter:** `StartPartyEncounter` and `StartSettlementEncounter` establish or switch the player's campaign encounter context. `PlayerEncounter.Start()` stores a new object in `Campaign.Current.PlayerEncounter`; `PlayerEncounter.Init(...)` binds the parties. `PlayerEncounter.StartBattle()` then creates or joins a `MapEvent`.
- **Actual battle scene:** `MapEvent` remains the map-layer battle state. Only the player path crosses into `Mission` through `CampaignMission.OpenBattleMission` / `OpenSiegeMissionWithDeployment` when Agent, Team, Formation, or scene objects are needed. `Mission.Current` is a short-lived scene entry point, not an alternative to `EncounterManager`.
- **Timing:** The engine calls `Tick(dt)` from the campaign map tick. `MobilePartyAi.CheckPartyNeedsUpdate()` can also re-check one party with `dt = 0f` after an AI change. These are not custom timers or Mission-frame callbacks.

## Encounter state machine: who advances what

The table follows the actual source boundaries. `EncounterManager` owns only the first two stages and the routing; the corresponding owners advance the later stages.

| Stage | Engine entry | Actual state change | Where a mod should observe or intervene |
|---|---|---|---|
| 1. Map tick | `Campaign.Tick` -> `EncounterManager.Tick(dt)` | While time is not stopped, iterates `Campaign.Current.MobileParties` | Do not call `Tick` manually; subscribe to `CampaignEvents` to observe encounters |
| 2. Single-party eligibility | `HandleEncounterForMobileParty(mobileParty, dt)` | Checks active/attached/map-event/settlement/siege/target/AI conditions, then calls `IInteractablePoint.CanPartyInteract` and `OnPartyInteraction` | After changing an AI target, let the engine re-check the party from the behavior-update path |
| 3. Routing | `StartPartyEncounter` or `StartSettlementEncounter` | The player may join/restart `PlayerEncounter`; an NPC party may call `StartBattleAction`, join an existing `MapEvent`, start a siege, or enter a settlement | Call the matching entry only from a confirmed menu, quest, or interaction callback |
| 4. Player context | `PlayerEncounter.Start()` -> `Init(...)` | `Campaign.Current.PlayerEncounter` owns the current object, encounter parties, settlement, and initial player strength; `EncounterGameMenuModel` decides menu/instant-battle behavior | Read `PlayerEncounter.Current` only after a null and `IsActive` check |
| 5. Map event | `PlayerEncounter.StartBattle()` or `MapEventManager.Start*MapEvent` | Selects a field battle, raid, settlement, siege, sally-out, or blockade event; registers it in `Campaign.Current.MapEventManager.MapEvents`; `MapEvent.Initialize` attaches parties to `MapEventSide` and raises the start event | Observe through `MapEvent` and `CampaignEvents.MapEventStarted`; do not `new MapEvent()` |
| 6. Scene and cleanup | `CampaignMission.Open*Mission` -> `Mission.Current`; then `PlayerEncounter.Finish()` | `Mission` owns temporary Agents/Teams/Formations; `MapEvent` receives battle observations; encounter, menu, and map state are cleaned in order | Use `MissionBehavior` for scene logic and `MapEvent`/`PlayerEncounter` for campaign logic; do not cache objects across layers |

### Creation and ownership flow

```text
Campaign.Tick
  -> EncounterManager.Tick
     -> HandleEncounterForMobileParty
        -> MobileParty.Ai.AiBehaviorInteractable.OnPartyInteraction
           -> StartPartyEncounter / StartSettlementEncounter
              -> PlayerEncounter.Start + PlayerEncounter.Init
                 -> PlayerEncounter.StartBattle
                    -> MapEventManager / MapEventComponent -> MapEvent
                       -> CampaignMission -> Mission.Current (scene lifetime only)
```

`PlayerEncounter.Finish()` is the closing point for the player path. It finishes the battle, handles defeat-side separation and related cleanup, and clears `Campaign.Current.PlayerEncounter` and `Campaign.Current.LocationEncounter`. `MapEvent.FinalizeEventAux` first sets the state to `WaitingRemoval` and raises `MapEventEnded`, then continues by clearing both sides; `MapEventManager.Tick()` removes the event on a later tick. Copy scalar values or party data immediately in the end callback, and do not carry `MapEventSide` / `MapEventParty` references out of it.

## When to use and when not to use

### Use it when

- **Starting an already-valid party encounter:** From a quest, menu, or party-interaction callback, you have two real `PartyBase` objects and want the engine's player-join, same-faction merge, hostile-battle, and sally-out branches. Use `StartPartyEncounter(attackerParty, defenderParty)`.
- **Handling arrival at a settlement:** From a settlement menu/map interaction, you have a real `MobileParty` and `Settlement` and need the engine to distinguish entering, raiding, besieging, assaulting walls, blockade, and player encounter paths. Use `StartSettlementEncounter(attackerParty, settlement)`.
- **Reading the current rules model:** After Campaign initialization, read `EncounterManager.EncounterModel` when custom code needs the current `EncounterModel` implementation. Do not duplicate its join/retreat rules in front of it.
- **Observing lifecycle:** Subscribe to `CampaignEvents.MapEventStarted` / `MapEventEnded`, read parties/type/settlement from `MapEvent`, and use `MissionBehavior` after the player has entered a scene and needs Agent logic.

### Do not use it when

- **Do not call `Tick` or `HandleEncounterForMobileParty` every frame.** `Campaign.Tick` already schedules them. Repeating the call can repeat `CanPartyInteract` / `OnPartyInteraction`, create duplicate menus, join events twice, or switch the player encounter. `dt = 0f` is a deliberate re-check path in `CheckPartyNeedsUpdate`, not a general time step.
- **Do not use it instead of an `*Action`.** If the goal is simply entering/leaving a settlement, use `EnterSettlementAction.ApplyForParty` / `LeaveSettlementAction.ApplyForParty`; if the goal is explicitly starting a raid or wall assault, follow the source's `StartBattleAction.ApplyStartRaid` / `ApplyStartAssaultAgainstWalls` path. Do not write `MapEventSide`, `CurrentSettlement`, or AI state directly.
- **Do not construct a map event or battle scene yourself.** `MapEvent` must be created and registered by `MapEventManager` or a `MapEventComponent`; player encounters should use `PlayerEncounter.StartBattle()` to select the event type. Use `CampaignMission` / `Mission` only after the battle-scene boundary.
- **Do not read map encounters from the Mission layer.** `Mission.Current` can be `null`, and Agents become invalid after the Mission ends. Read campaign parties, sides, results, and settlements from `MobileParty`, `PartyBase`, `PlayerEncounter`, and `MapEvent`.
- **Do not treat this static class as an injectable service.** `EncounterManager.Current` does not exist. Do not store a manager instance or add save fields to it.

## Dependencies

### Upstream: what sends work here

- [`Campaign`](../../campaign/Campaign/) calls `EncounterManager.Tick` from the map tick and supplies `EncounterModel` through `Models`.
- [`MobileParty`](../../campaign/MobileParty/) AI behavior and party collision can trigger the single-party check or `StartPartyEncounter`.
- [`PartyBase`](../../campaign/PartyBase/) is the common participant type for `StartPartyEncounter`; `PartyBase.MainParty` is the player's campaign party representation.
- `Settlement` interaction passes a real `MobileParty` and `Settlement` to `StartSettlementEncounter`.
- `EncounterGameMenuBehavior`, `SallyOutsCampaignBehavior`, `PlayerArmyWaitBehavior`, and issue/quest behaviors are concrete menu, sally-out, waiting, and task call sites in the source.

### Downstream: where state goes

- [`PlayerEncounter`](../PlayerEncounter/) creates, binds, starts, joins, resolves, and finishes the player's encounter.
- [`MapEventManager`](../MapEventManager/) creates, registers, ticks, and removes active `MapEvent` objects; `MapEvents` is its owning list.
- [`MapEvent`](../../campaign/MapEvent/) and [`MapEventSide`](../MapEventSide/) represent the map battle and its attacker/defender party groups.
- [`SiegeEvent`](../SiegeEvent/) stores the settlement siege state; `StartSettlementEncounter` starts a siege or attaches a party to an existing siege.
- [`StartBattleAction`](../StartBattleAction/), [`EnterSettlementAction`](../EnterSettlementAction/), and [`LeaveSettlementAction`](../LeaveSettlementAction/) perform the official battle, settlement-entry, and player-position transitions.
- [`EncounterModel`](../EncounterModel/) is obtained through `Campaign.Current.Models.EncounterModel`; `EncounterManager` does not own the model instance.

### Events and the Mission bridge

- After `MapEvent.Initialize` registers both sides, it raises `CampaignEvents.MapEventStarted`; `FinalizeEventAux` sets `WaitingRemoval` and raises `MapEventEnded` before it clears both sides. Event subscription is more stable than polling from `Tick`; copy anything needed immediately in the end callback.
- `PlayerEncounter.StartBattleInternal` selects `FieldBattleEventComponent`, `RaidEventComponent`, `HideoutEventComponent`, `SiegeAmbushEventComponent`, or a `MapEventManager.Start*MapEvent` method according to context.
- `PlayerEncounter.StartAttackMission`, `StartSiegeAmbushMission`, and `StartVillageBattleMission` call `CampaignMission.Open*Mission`. `Mission` then owns the scene's Agents, Teams, Formations, and `MissionBehavior` objects.

## Key members and timing

### `EncounterModel`

`public static EncounterModel EncounterModel { get; }`

The getter returns `Campaign.Current.Models.EncounterModel`. It is a rules lookup, not an `EncounterManager` cache. Read it only after Campaign and its Models have been initialized; replacing it with `null` is not a valid way to disable encounters.

### `Tick(float dt)`

`public static void Tick(float dt)`

It only forwards to the private `HandleEncounters(dt)`. That method checks `Campaign.Current.TimeControlMode != CampaignTimeControlMode.Stop`, iterates the current `MobileParties`, and sends each party to `HandleEncounterForMobileParty`. `Campaign.cs` calls it during the map update; `dt` may be zero, so it is not guaranteed to represent elapsed campaign time.

### `HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

`public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

This is an eligibility-and-AI-interaction entry, not a low-level battle constructor. The source rejects inactive or attached parties, parties already assigned to a `MapEventSide`, ordinary settlement occupants, and besieged parties that are not assaulting. It also rejects missing/invalid interaction targets and a main party that already has a player encounter. Only then does it call `mobileParty.Ai.AiBehaviorInteractable.CanPartyInteract(mobileParty, dt)` and, if allowed, `OnPartyInteraction(mobileParty)`.

The concrete `IInteractablePoint` controls the side effect and may eventually call either `Start*Encounter` entry. Normal timing is `Campaign.Tick` or `MobilePartyAi.CheckPartyNeedsUpdate` after an AI change, not a mod's render or battle tick.

### `StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

`public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

It routes by player involvement, existing player event, faction, and activity:

1. If the player is already in a `MapEvent` with both sides populated, it calls `PlayerEncounter.Current.OnPartyJoinEncounter(...)` to add the mobile party to that event.
2. If the player encounter is absent or must switch opponents, private `RestartPlayerEncounter` finishes the old `PlayerEncounter`, then starts and initializes a new pair. If the target is engaging the player, it can reverse the attacker/defender binding.
3. Two active non-player parties on opposing factions go through `StartBattleAction.Apply(attackerParty, defenderParty)`; same-faction parties are assigned to an existing `MapEventSide`.
4. Siege cases can recursively rebuild the player encounter with the main party; a qualifying sally-out case switches to the `join_sally_out` menu.

This is therefore not a pure “force any two objects into a new battle” function. The `PartyBase` values must be current campaign objects, parties must be in a valid active/interactable state, and the caller must accept that an existing player encounter may be finished and rebuilt.

### `StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

`public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

The parameter name does not mean that the party is always an enemy. The method also handles player entry, army-attached parties, defenders, sieges, raids, wall assaults, and naval blockades:

- With `DefaultBehavior == BesiegeSettlement`, it ensures a `SiegeEvent` exists and connects the party to its `BesiegerCamp`; it returns early if the settlement has no map event yet.
- A sea-going defender approaching a blockaded settlement may create `BlockadeBattleMapEvent` or join an existing side; an existing map event can lead to `EnterSettlementAction`.
- An NPC `RaidSettlement` / `AssaultSettlement` path calls the corresponding `StartBattleAction` entry and establishes a `PlayerEncounter` when the player is present.
- When `attackerParty == MobileParty.MainParty`, it calls `PlayerEncounter.Start()` and initializes the player settlement context with `PlayerEncounter.Current.Init(attackerParty.Party, settlement.Party, settlement)`. During a hostile raid it may first promote a defending lord from the existing event into the battle pair.
- After an army leader is processed, the source recursively processes attached parties that are not already in an event; ordinary arrival uses `EnterSettlementAction.ApplyForParty`.

Calling this method does not mean that a `Mission` has already been created. It usually establishes the campaign/menu precondition; the actual scene is opened later by `PlayerEncounter` / `CampaignMission`.

### Private phase: `RestartPlayerEncounter`

This private method explains why the two public Start methods are not stateless factories. It identifies the main party's current raid event and settlement, may call `PlayerEncounter.Finish(false)`, calls `PlayerEncounter.Start()` if no current object exists, and finally calls `Init(...)`. In 1.4.5 it also carries the interrupted-looting state into the new `PlayerEncounter`; that is an internal protocol, not something a mod should reproduce through reflection.

## Campaign, MapEvent, and Mission boundaries

### Campaign layer

`Campaign.Current` is a prerequisite for every route. `EncounterManager.EncounterModel`, `Campaign.Current.MobileParties`, `Campaign.Current.MapEventManager`, and `Campaign.Current.PlayerEncounter` all require an initialized campaign. `Campaign.Tick` advances map time; when time control is stopped, the global party-interaction pass does not run.

### MapEvent layer

`MapEvent` represents one map battle, not a 3D scene. `MapEventManager.OnMapEventCreated` adds it to the saveable `_mapEvents` list; `MapEventManager.Tick` updates non-player and raid events and removes finalized events. `MapEvent.Initialize` assigns both parties to `MapEventSide`, adds relevant settlement participants, sets the initial battle state, and raises `MapEventStarted`.

The player's battle is still referenced by `PlayerEncounter`. When the scene/menu path ends, `PlayerEncounter.Finish()` performs the player cleanup; do not call only `MapEvent.FinalizeEvent()` and leave `PlayerEncounter.Current` alive.

### Mission layer

`PlayerEncounter` selects the map-event type in `StartBattleInternal`; when a real battle scene is needed it calls `CampaignMission.OpenBattleMission`, `OpenSiegeMissionWithDeployment`, or another `Open*Mission` method. `Mission.Initialize` sets `Mission.Current`; Mission finalization clears behaviors, scene state, and `Mission.Current`. Therefore:

- Map movement, participants, sides, settlements, and campaign results: read `MobileParty`, `PartyBase`, `PlayerEncounter`, and `MapEvent`.
- Agents, Teams, Formations, scene objects, and `MissionBehavior`: use them only while `Mission.Current != null` and its state is still `Continuing`.
- Data that crosses a Mission or save: store your own stable business identifiers and results, not a `Mission`, `Agent`, or finished `MapEvent` reference.

## Dependency, event, action, model, and save risks

1. **Action boundary:** `StartPartyEncounter` uses `StartBattleAction.Apply` for hostile non-player parties. `StartSettlementEncounter` uses `ApplyStartRaid`, `ApplyStartAssaultAgainstWalls`, `EnterSettlementAction.ApplyForParty`, and `LeaveSettlementAction.ApplyForParty` for official state transitions. Direct writes to `MapEventSide` or settlement fields bypass party, AI, diplomacy, and result bookkeeping.
2. **Event boundary:** `CampaignEvents.MapEventStarted` is safe for reading participants after `MapEvent.Initialize`; by `MapEventEnded` the event is already in `WaitingRemoval`, and the source clears both sides after the callback. Copy needed party data at callback entry; do not carry `AttackerSide.Parties` / `DefenderSide.Parties` references beyond it.
3. **Empty-model risk:** `EncounterManager.EncounterModel` directly dereferences `Campaign.Current.Models.EncounterModel`; it does not protect an uninitialized Campaign or a broken model replacement. A custom model registration must remain non-null and functional.
4. **Player-finalization risk:** `MapEventManager.FinalizePlayerMapEvent()` throws `MBNotFoundException` when the main party has no `MapEvent`, and it also calls `PlayerEncounter.Finish(true)`. Confirm `MobileParty.MainParty.MapEvent != null` before using it; do not use player-only finalization on an ordinary AI event.
5. **Wrong-phase risk:** Joining a party after `MapEvent.IsFinalized`, overriding a winner at the wrong stage, or reading a leader after finalization can produce null references or duplicate resolution. Calling `PlayerEncounter.StartBattle()` while `PlayerEncounter.Current == null` is invalid.
6. **Mission/Agent lifetime:** `Mission.Current` exists only after Mission initialization and is cleared during Mission-state finalization. Accessing an old `Agent`, `Team`, or `Scene` after the end callback can crash. The campaign encounter tick is not a replacement for `MissionBehavior.OnMissionTick`.
7. **Save risk:** `EncounterManager` is a static router and should never be serialized. `PlayerEncounter` is attached to `Campaign.Current`, while `MapEventManager` stores active events in a `SaveableField` list. Custom save data should not retain `MapEvent`, `Mission`, `Agent`, or temporary `PartyBase` references; save stable identifiers/business state and resolve current objects after load.
8. **Behavior lifetime:** Campaign behaviors register non-serialized event listeners with `AddNonSerializedListener`. Do not keep old event or Mission references after the behavior/Campaign changes. Values that must survive a save belong in `SyncData`, not in the listener delegate.

## Real API examples

### Example 1: Observe player map encounters from a CampaignBehavior

Several built-in CampaignBehaviors subscribe to these same events in `RegisterEvents`. This example uses the real event names and callback signatures, and stores only a string statistic through `IDataStore`:

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public sealed class EncounterTelemetryBehavior : CampaignBehaviorBase
{
    private string _lastPlayerEncounterType;

    public override void RegisterEvents()
    {
        CampaignEvents.MapEventStarted.AddNonSerializedListener(
            this, new Action<MapEvent, PartyBase, PartyBase>(OnMapEventStarted));
        CampaignEvents.MapEventEnded.AddNonSerializedListener(
            this, new Action<MapEvent>(OnMapEventEnded));
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("lastPlayerEncounterType", ref _lastPlayerEncounterType);
    }

    private void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)
    {
        if (!mapEvent.IsPlayerMapEvent)
            return;

        _lastPlayerEncounterType = mapEvent.EventType.ToString();
        InformationManager.DisplayMessage(new InformationMessage(
            $"{mapEvent.EventType}: {attackerParty.Name} vs {defenderParty.Name}"));
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        if (mapEvent.MapEventSettlement != null)
            _lastPlayerEncounterType = mapEvent.EventType.ToString();
    }
}
```

Do not iterate either `MapEventSide` in `OnMapEventEnded`; cache names, strength, or winner before finalization if that information is needed. The example saves a string, not a temporary map-event object.

### Example 2: Enter the current settlement from an existing menu/interaction callback

`MenuHelper` and `EncounterGameMenuBehavior` obtain the settlement from the current campaign context, then pass the main party's `Party` through the same public route. A custom menu should also avoid restarting an active player encounter:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static class EncounterMenuCallbacks
{
    public static void EnterCurrentSettlementFromMenu()
    {
        Settlement currentSettlement = Settlement.CurrentSettlement;
        if (currentSettlement == null || PlayerEncounter.IsActive)
            return;

        EncounterManager.StartSettlementEncounter(
            MobileParty.MainParty, currentSettlement);
    }
}
```

Run this from a menu option or interaction action, not from `OnTick`. It establishes the campaign encounter precondition; `PlayerEncounter.Init`, `EncounterGameMenuModel`, and the later `CampaignMission` path decide the menu, immediate battle, and Mission transition.

### Example 3: Request a party encounter only for a real active target

The `MobileParty` collision path calls this method with `engagingParty.Party` and `mobileParty.Party`. A custom quest with the same current target must use the live party objects and validate their state first:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static class EncounterQuestCallbacks
{
    public static void StartMainPartyTargetEncounter()
    {
        MobileParty mainParty = MobileParty.MainParty;
        MobileParty targetParty = mainParty.ShortTermTargetParty;
        if (targetParty == null || !targetParty.IsActive || !mainParty.IsCurrentlyEngagingParty)
            return;

        EncounterManager.StartPartyEncounter(mainParty.Party, targetParty.Party);
    }
}
```

Do not manufacture arbitrary `PartyBase` values or retry unconditionally after a target has joined a `MapEventSide`, the main party has a different `PlayerEncounter`, or either party is inactive. This entry can finish and rebuild an existing player encounter binding.

## 1.3.15 and 1.4.5 source differences

- Both versions keep the four public `EncounterManager` entries and the `EncounterModel => Campaign.Current.Models.EncounterModel` acquisition path. The main flow remains Campaign tick -> mobile-party interaction -> `PlayerEncounter` / `MapEvent`.
- In 1.3.15, the siege recursion in `StartPartyEncounter` calls `HasInvolvedPartyForEventType` with `MapEvent.BattleTypes.Siege`; 1.4.5 uses the overload without an explicit battle type. Do not treat a decompiled private branch from one version as a cross-version contract.
- 1.4.5 uses modern pattern matching and moves the main-party branch earlier in `StartSettlementEncounter`, but the public signature and responsibilities for siege, blockade, raid, assault, and settlement entry are unchanged.
- 1.4.5 `RestartPlayerEncounter` reads `WasEverInLootingPhase` from the main party's current raid event and carries interruption state into the new `PlayerEncounter`; 1.3.15 does not have this extra transfer. Cross-version mods should use public `PlayerEncounter` / `MapEvent` APIs rather than copying private fields.
- 1.3.15 places `MapEvent` under `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`; 1.4.5 splits the source layout into `TaleWorlds.CampaignSystem.MapEvents`. That is a source-layout difference, not a change to this page's relative navigation.

## Source call-site evidence

The state machine and risks above come from these actual call sites, not from signatures alone:

- **EncounterManager:** 1.3.15 `TaleWorlds.CampaignSystem/EncounterManager.cs` methods `Tick`, `HandleEncounterForMobileParty`, `StartPartyEncounter`, `StartSettlementEncounter`, and `RestartPlayerEncounter`; 1.4.5 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/EncounterManager.cs` contains the corresponding methods.
- **Campaign / Party:** 1.3.15 `Campaign.cs` calls `EncounterManager.Tick`; `Party/MobilePartyAi.cs` calls the single-party check; `Party/MobileParty.cs` calls `StartPartyEncounter` from collision handling; `Settlements/Settlement.cs` calls `StartSettlementEncounter`. The 1.4.5 counterparts are `TaleWorlds.CampaignSystem/Campaign.cs`, `TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`, `TaleWorlds.CampaignSystem.Party/MobileParty.cs`, and `TaleWorlds.CampaignSystem.Settlements/Settlement.cs`.
- **Encounter:** `Encounters/PlayerEncounter.cs` methods `Start`, `Init`, `StartBattleInternal`, `Finish`, and `DoEnd` show player-object creation, map-event selection, the Mission precondition, and cleanup. `CampaignBehaviors/EncounterGameMenuBehavior.cs`, `SallyOutsCampaignBehavior.cs`, and `PlayerArmyWaitBehavior.cs` show menu, sally-out, and waiting call sites.
- **MapEvent:** `MapEvents/MapEventManager.cs` members `_mapEvents`, `OnMapEventCreated`, `Tick`, `FinalizePlayerMapEvent`, and `Start*MapEvent` show creation, ownership, removal, and player cleanup. `MapEvents/FieldBattleEventComponent.cs` shows field-event creation and registration; `MapEvents/MapEvent.cs` raises `OnMapEventStarted` from `Initialize`.
- **Mission:** `CampaignMission.cs` forwards `OpenBattleMission` / `OpenSiegeMissionWithDeployment` to `Campaign.Current.CampaignMissionManager`; `TaleWorlds.MountAndBlade/Mission.cs` sets `Mission.Current` during `Initialize` and clears it in `OnMissionStateFinalize`. This proves that `Mission` is a downstream scene container, not this class's owner.

## Navigation

### ↑ Parent

- [CampaignSystem API index](../)
- [Campaign](../../campaign/Campaign/)
- [Doc contract](../../../architecture/doc-contract/)

### ↔ Siblings

- [PlayerEncounter](../PlayerEncounter/) - player encounter context and result state
- [MapEventManager](../MapEventManager/) - active map-event ownership and ticking
- [MapEventSide](../MapEventSide/) - attacker/defender party groups
- [SiegeEvent](../SiegeEvent/) - settlement siege state
- [CampaignEvents](../CampaignEvents/) - map-event lifecycle listeners

### ↓ Children / next steps

- [StartBattleAction](../StartBattleAction/) - official field/raid/siege battle action
- [EnterSettlementAction](../EnterSettlementAction/) and [LeaveSettlementAction](../LeaveSettlementAction/) - settlement entry and exit
- [EncounterModel](../EncounterModel/) - encounter rules model
- [MobileParty](../../campaign/MobileParty/) and [PartyBase](../../campaign/PartyBase/) - participant acquisition and state
- [MapEvent](../../campaign/MapEvent/) - map-layer battle object
- [Mission](../../mission/Mission/) - short-lived scene container after the 3D battle boundary
