---
title: "MapEventComponent"
description: "The event-specific strategy object owned by MapEvent for simulation context, initialization, updates, and finalization."
---

# MapEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MapEventComponent`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventComponent.cs`

## One-line responsibility

`MapEventComponent` supplies the event-specific rules and lifecycle hooks that a [`MapEvent`](../MapEvent) delegates to for simulation context, party additions, updates, and finalization.

## Mental model

`MapEventComponent` is a Campaign-owned strategy object, not a general-purpose component attached to an Agent or Mission. A concrete subtype such as [`FieldBattleEventComponent`](../FieldBattleEventComponent) or [`RaidEventComponent`](../RaidEventComponent) is created by the encounter model or a concrete factory. `MapEvent.Initialize` assigns it to `MapEvent.Component`, then the event invokes its internal lifecycle in order: load repair, `OnInitialize`, party notifications, `Update`, `OnBeforeFinalize`, `FinishComponent`, and `OnFinalize`.

The component owns the rules specific to the event kind, while `MapEvent` owns sides, state, position, result, and manager registration. `SimulationContext` is a calculation input; it does not itself start a battle or open a Mission. Most lifecycle entry points are `internal`, so a mod should observe the concrete component and use the public creation/Action path rather than manually replaying the protocol.

## When to use and when not to use

**Use it when:**

- A read-only behavior needs the event-specific `SimulationContext` or component type.
- A mod is integrating a supported concrete event component and can preserve the host's initialization and finalization order.
- A diagnostic needs to distinguish a raid, field battle, hideout, or siege component behind the common `MapEvent.Component` property.

**Do not use it when:**

- Treating it as an Agent, MissionBehavior, or Campaign behavior. Its lifetime is the lifetime of one map event.
- Calling `InitializeComponent`, `BeforeFinalizeComponent`, `FinalizeComponent`, or `Update` manually. These are engine protocol methods and several are internal.
- Creating a component and assigning it to a live event without the matching `MapEvent.Initialize` path; the sides, event type, save graph, and component can become inconsistent.

## Dependencies and lifecycle

- **Owner:** [`MapEvent`](../MapEvent) stores the component and decides when to initialize, update, and finalize it.
- **Creator:** `EncounterModel.CreateMapEventComponentForEncounter` and concrete factories such as `FieldBattleEventComponent.CreateFieldBattle` create a subtype before `MapEvent.Initialize` registers the event.
- **Inputs:** [`PartyBase`](../PartyBase), [`MapEventSide`](../MapEventSide), [`MapEventParty`](../MapEventParty), and the selected `MapEvent.BattleTypes` value.
- **Consumers:** `MapEvent` simulation, [`MapEventManager`](../MapEventManager), `PlayerEncounter`, settlement/siege code, and `CampaignEvents` consume the component's result at their own boundaries.
- **Persistence:** `MapEvent.Component` is part of the save graph. `AfterLoad` reattaches the loaded component to its `MapEvent`; it is not a replacement for a mod behavior's `SyncData`.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `MapEvent` | The owning event. It is assigned by the protected constructor and reattached during load. Do not cache it beyond event cleanup. |
| `SimulationContext` | Abstract terrain/battle context used by Models and strength calculations. A subtype supplies the correct value for its event. |
| `OnInitialize()` | Protected hook for subtype setup, called by the host after the component has been attached to the event. |
| `OnPartyAdded(PartyBase)` | Internal notification when a party enters the event. It is not a public invitation API. |
| `Update(ref bool finish)` | Internal per-event update hook. The component may request finishing through the host's `finish` protocol; do not tick it independently. |
| `OnBeforeFinalize()` | Protected hook before final resolution cleanup. Results and party state may still be in transition. |
| `FinishComponent()` / `OnFinish()` | Marks the component finished and performs subtype finish work once. Replaying this boundary can duplicate rewards or cleanup. |
| `FinalizeComponent()` / `OnFinalize()` | Final cleanup hook after the finish guard. It belongs to the event finalization order. |
| `OnAfterLoad()` | Protected repair hook after a save loader reattaches the component to a `MapEvent`. |

## Real acquisition example

The supported mod-facing operation is observation through the active event. This example obtains a player event from the Campaign manager and reads the concrete component without invoking its lifecycle:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static MapEvent.PowerCalculationContext? GetPlayerEventContext()
{
    MapEvent mapEvent = Campaign.Current.MapEventManager.MapEvents
        .FirstOrDefault(eventRecord => eventRecord.IsPlayerMapEvent);
    return mapEvent?.Component?.SimulationContext;
}
```

To create an event, call the appropriate Action or encounter-model path. Do not instantiate an abstract component in isolation and expect the manager to discover it.

## Risks and crash boundaries

1. A component can be non-null while its event is already finalized. Check `MapEvent.State`/`IsFinalized` before reading event-owned parties or settlement state.
2. Calling finish/finalize hooks twice can duplicate raid damage, loot, notifications, or party cleanup. The private finish guard protects only the component's own path, not arbitrary external side effects.
3. A component with the wrong `SimulationContext` makes Models calculate strength or terrain rules for the wrong event and can desynchronize simulation and Mission setup.
4. After load, use the reattached `MapEvent` and let `OnAfterLoad` repair subtype state. Do not serialize a second component reference in a Campaign behavior.
5. Components are not Missions and do not own Agents. Release any mod references when `MapEventEnded` fires or when the event enters `WaitingRemoval`.

## Version note

This page follows the v1.4.5 `MapEventComponent.cs` contract. The internal hook order and concrete factory set are version-sensitive; recheck the target `EncounterModel`, `MapEvent.Initialize`, and save type definer before porting a custom component.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [`MapEvent`](../MapEvent) · [`MapEventParty`](../MapEventParty) · [`MapEventSide`](../MapEventSide)
- Concrete components: [`FieldBattleEventComponent`](../FieldBattleEventComponent) · [`RaidEventComponent`](../RaidEventComponent)
- Related: [`MapEventManager`](../MapEventManager) · [`MapEventState`](../MapEventState) · [`BattleTypes`](../BattleTypes)
- 中文: [MapEventComponent](../../../../zh/api/campaign/MapEventComponent)
