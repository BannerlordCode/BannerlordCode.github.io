---
title: "MapEventComponent"
description: "The v1.4.5 Campaign extension owned by a MapEvent for event-specific simulation, initialization, and cleanup rules."
---
# MapEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MapEventComponent`  
**Base:** `object` (implicit)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventComponent.cs`

## Responsibility in one sentence

This is the event-specific Campaign object that a concrete battle component creates and the owning `MapEvent` stores, so the map event can run type-specific simulation rules and finalization hooks.

## Mental model

`MapEventComponent` is not a general-purpose component attached to an `Agent` or a Mission scene. It is the Campaign-side policy object for one `MapEvent`. The abstract base gives the event a back-reference through `MapEvent`, exposes the event's `SimulationContext`, and provides lifecycle hooks; concrete types such as `FieldBattleEventComponent`, `RaidEventComponent`, `HideoutEventComponent`, and `BlockadeBattleMapEvent` add the rules and state for their event kind.

The component is created by a concrete event factory, not by mod code calling the abstract base. For example, `FieldBattleEventComponent.CreateFieldBattleEvent` creates a `MapEvent`, constructs the concrete component with that event, passes the component into `MapEvent.Initialize`, registers the event with `Campaign.Current.MapEventManager`, and returns the component. `StartBattleAction` reaches this path through `Campaign.Current.Models.EncounterModel.CreateMapEventComponentForEncounter`. The `EncounterModel` chooses the concrete factory from `MapEvent.BattleTypes`; siege, sally-out, and siege-outside paths instead let `MapEventManager` create an event with a null component in this source version.

After initialization, `MapEvent.Component` is the owner-visible reference. `MapEvent.SimulationContext` delegates to `Component.SimulationContext` when a component exists, so the component can select terrain or event-specific power rules. The component does not own the parties or the Mission: `MapEvent` owns the two `MapEventSide` objects and their `MapEventParty` records, while a player Mission temporarily consumes that Campaign state.

Use the component to inspect or implement event-specific Campaign behavior at its lifecycle boundary. Do not use it to create an arbitrary battle, to hold `Mission`, `Agent`, or `Team` objects, or to replace the `MapEvent` state machine with direct field writes.

## Dependency graph

```text
StartBattleAction
  └─ EncounterModel ── concrete event factory ── MapEvent
                                             └─ MapEventComponent
MapEvent ── MapEventSide ── MapEventParty ── PartyBase / roster
MapEvent ── CampaignEvents.MapEventStarted / MapEventEnded
MapEvent ── Campaign tick and simulation ── component Update(ref finish)
MapEvent ── Mission projection ── PartyGroupTroopSupplier
Campaign save graph ── MapEvent.Component ── concrete component state
```

**Creation and upstream rules:** [StartBattleAction](../../campaign-ext/StartBattleAction), [EncounterModel](../EncounterModel), [MapEventManager](../MapEventManager), and `Campaign.Current.Models` select and register the event.  
**Owned runtime state:** [MapEvent](../MapEvent), [MapEventSide](../MapEventSide), and [MapEventParty](../MapEventParty) own sides, parties, and battle rosters; the component only supplies event-specific behavior.  
**Events and downstream consumers:** `CampaignEvents.MapEventStarted` and `CampaignEvents.MapEventEnded` bracket the event; [Mission](../../mission/Mission) and [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) are a temporary player-battle projection.  
**Models and save:** `MilitaryPowerModel` is the fallback context provider when no component exists, while concrete components can query [BattleRewardModel](../BattleRewardModel) and other models. `MapEvent.Component` is a saveable property, and concrete saveable fields remain part of the Campaign save graph managed by [SaveManager](../../save-system/SaveManager).

## Creation and ownership

The source-level creation sequence is:

1. `StartBattleAction.Apply` determines a `MapEvent.BattleTypes` value and asks `Campaign.Current.Models.EncounterModel` for a component when the defender has no existing map event.
2. `DefaultEncounterModel.CreateMapEventComponentForEncounter` selects a concrete factory. Field battles, raids, hideouts, and blockades return concrete components; siege-family manager methods create `MapEvent` instances with no component.
3. A concrete factory creates `MapEvent`, creates the concrete `MapEventComponent` with that event, and calls `mapEvent.Initialize(attackerParty, defenderParty, component, battleType)`.
4. `MapEvent.Initialize` creates the defender and attacker `MapEventSide` objects, binds the initial `PartyBase` objects to those sides, initializes the component, and dispatches `CampaignEvents.MapEventStarted`.
5. `MapEvent.Update` calls `Component.Update(ref finish)` during Campaign simulation. When the event finishes, the map event calls the component finish and finalization hooks in the same cleanup protocol that processes parties, loot, siege state, and `MapEventEnded`.

The base constructor is protected, and the base lifecycle entry methods are internal. There is no public setter that attaches a component to an existing `MapEvent`; observing `mapEvent.Component` is the normal mod-facing path. A custom encounter model can participate in the engine's creation contract, but it still has to produce a complete `MapEvent` and respect the internal initialization and finalization order.

## Public members and lifecycle hooks

| Member | Meaning and safe timing |
|---|---|
| `MapEvent` | The `MapEvent` passed to the concrete component constructor. It is assigned again by `AfterLoad(MapEvent)` during save loading. Read it only while that event is active or while handling its documented load/end callback. |
| `SimulationContext` | Abstract event-specific context consumed by `MapEvent.SimulationContext` and strength calculations. It is a getter, not a place to mutate battle state. |
| `OnInitialize` | Protected hook called by `MapEvent.Initialize` after sides and positions exist. Concrete components use it to reset event-specific state and apply type-specific Campaign changes. |
| `OnPartyAdded(PartyBase)` | Internal hook called after `MapEventSide` has added a party and updated event bookkeeping. It is for concrete component reactions, not a public way to add a party. |
| `Update(ref bool finish)` | Internal per-Campaign-update hook. A component may participate in the decision to finish the event; it must not assume that a player Mission is active. |
| `FinishComponent` / `OnFinish` | Internal one-time finish hook. `_isFinished` prevents the component finish callback from running twice, but does not make an early manual finish safe. |
| `OnBeforeFinalize` | Protected hook called before sides are cleared, after the event has reached its final resolution path. Raid components use this kind of boundary for event-specific settlement and completion work. |
| `OnFinalize` | Protected hook called after the final event cleanup work. Release or clear component-owned temporary state here; do not keep Mission references. |
| `AfterLoad` / `OnAfterLoad` | Internal load-rebinding path. The base rebinds `MapEvent` and then gives the concrete type a chance to rebuild derived state. |

The base class itself has no public `Apply`, `Create`, or `Finalize` command. The public `MapEvent` and `SimulationContext` properties are primarily observation and calculation boundaries; battle creation and state changes belong to [StartBattleAction](../../campaign-ext/StartBattleAction), the encounter model, and the `MapEvent` lifecycle.

## Real acquisition path

For a Campaign behavior that needs to identify the current event kind, acquire the event from the player's `MobileParty` and inspect the component without constructing anything:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static bool IsActiveFieldBattleComponent()
{
    MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
    return mapEvent != null
        && !mapEvent.IsFinalized
        && mapEvent.Component is FieldBattleEventComponent;
}
```

For all events, use the Campaign event boundary when timing matters. `CampaignEvents.MapEventStarted` supplies the initialized `MapEvent`, attacker, and defender; `CampaignEvents.MapEventEnded` is the cleanup boundary. Copy the type or stable identifiers you need instead of storing the component across a save or after finalization:

```csharp
public sealed class ComponentAuditBehavior : CampaignBehaviorBase
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
        MapEventComponent component = mapEvent.Component;
        Debug.Print($"{mapEvent.EventType}: component={component?.GetType().Name ?? \"none\"}");
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        Debug.Print($"Ended {mapEvent.EventType}; finalized={mapEvent.IsFinalized}");
    }
}
```

This is an observation path. It does not imply that every event has a component: siege-family events created by `MapEventManager` can legitimately expose `null`, and `MapEvent.SimulationContext` has a fallback for that case.

## Mission and Campaign boundaries

The component stays on the Campaign side. `SandBoxMissions` creates `PartyGroupTroopSupplier` instances from `MapEvent.PlayerMapEvent` and a `BattleSideEnum`; those suppliers read `MapEventSide` and allocate `MapEventParty` troops to Mission agents. The Mission owns the scene and agents for the encounter, but the component and `MapEvent` remain the authoritative Campaign objects. When the Mission reports casualties, the supplier routes them back through `MapEventSide` and `MapEventParty`; after resolution, `MapEvent` calculates and commits Campaign results.

The practical boundary is:

- `Mission.Current`, `Agent`, and `Team` are temporary scene state. Read them from Mission code and release them when the Mission ends.
- `MapEvent.Component`, `MapEventSide`, and `MapEventParty` are Campaign encounter state. Read them from Campaign behaviors or event callbacks and stop using them after `MapEventEnded` and final cleanup.
- `Campaign.Current.Models` supplies rules. A model can calculate a context or reward, but replacing or changing a model does not attach a component or finalize an existing event.

## Events, Actions, Models, and save behavior

- **Action:** `StartBattleAction` is the supported battle-start entry. It determines the event type, asks `EncounterModel` for a concrete component or manager-created event, and dispatches `OnStartBattle`; it is not a shortcut to directly instantiate the abstract base.
- **Events:** `MapEventStarted` fires after `MapEvent.Initialize` has established sides and the component. `MapEventEnded` fires during finalization. Concrete components may dispatch type-specific events such as raid completion from their own hooks.
- **Models:** `EncounterModel` selects the component factory. The component's `SimulationContext` feeds `MapEvent` power calculations, and concrete implementations may use `MilitaryPowerModel`, [BattleRewardModel](../BattleRewardModel), or other Campaign models.
- **Save:** `MapEvent.Component` is marked with `[SaveableProperty(105)]`. The concrete component's saveable state is serialized with the Campaign event; after load, `MapEvent` invokes `Component.AfterLoad(this)`, which rebinds the event before `OnAfterLoad`. Visuals and cached data are rebuilt by the owning map event. A custom behavior should save stable IDs and scalar decisions, then reacquire the current event and component after load.

## Risks and cleanup

- **Do not call `new MapEvent()` or try to new the abstract component from a mod.** The constructor and initialization protocol are engine-owned. Bypassing them omits sides, party binding, registration, visual setup, event dispatch, and save integration.
- **Do not assume `Component` is non-null.** Siege, sally-out, and siege-outside manager paths can create a `MapEvent` without a component in v1.4.5. Use `MapEvent.SimulationContext` if the fallback behavior is what you need.
- **Do not call lifecycle hooks from a random Campaign tick.** `OnInitialize`, `Update`, `OnBeforeFinalize`, and `OnFinalize` depend on side, Mission, siege, and loot ordering. An early finish can leave parties, rewards, or siege objects inconsistent.
- **Do not retain Mission objects in component state.** Agents and teams die with the Mission; retaining them can cause null references and prevents a save-safe component graph.
- **Do not keep a component after `MapEventEnded` or across a save load.** Finalization clears the event sides after the end notification, and loading can rebind the component to a newly materialized `MapEvent` object.
- **Do not persist a custom component mirror before the engine restores the Campaign event.** Restore stable data through the owning behavior and reacquire the component only after Campaign load has completed.

## Version note

This page follows the v1.4.5 decompiled source. Concrete component coverage, `EncounterModel` mappings, naval event types, and save-load repair paths can change between versions; recheck the target version's `StartBattleAction`, `DefaultEncounterModel`, `MapEventManager`, and concrete component factories before sharing a cross-version mod.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [MapEvent](../MapEvent) · [MapEventSide](../MapEventSide) · [MapEventParty](../MapEventParty)
- Concrete components: [FieldBattleEventComponent](../FieldBattleEventComponent) · [RaidEventComponent](../RaidEventComponent) · [HideoutEventComponent](../HideoutEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- Related: [EncounterModel](../EncounterModel) · [MapEventManager](../MapEventManager) · [CampaignEvents](../CampaignEvents) · [StartBattleAction](../../campaign-ext/StartBattleAction) · [Mission](../../mission/Mission)
- 中文: [MapEventComponent](../../../../zh/api/campaign/MapEventComponent)
