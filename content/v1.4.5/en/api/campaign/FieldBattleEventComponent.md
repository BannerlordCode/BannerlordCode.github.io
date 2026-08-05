---
title: "FieldBattleEventComponent"
description: "The MapEvent component for field battles, including field or naval-raid simulation context and old-save reattachment."
---

# FieldBattleEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class FieldBattleEventComponent : MapEventComponent`  
**Base:** [`MapEventComponent`](../MapEventComponent)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/FieldBattleEventComponent.cs`

## One-line responsibility

`FieldBattleEventComponent` gives a field-battle [`MapEvent`](../MapEvent) its terrain-based simulation context and its standard creation/load component boundary.

## Mental model

The public factory creates a new `MapEvent`, constructs this component with that event, initializes the event with `MapEvent.BattleTypes.FieldBattle`, and registers the completed event with `Campaign.Current.MapEventManager`. The component is therefore the type-specific part of a Campaign event, while `MapEvent` owns parties, sides, state, result, and removal.

Despite its name, the component's `SimulationContext` can be `NavalRaid` when `MapEventHelper.IsNavalRaid` identifies a naval raid; otherwise it asks `MilitaryPowerModel` for the context at the event position. It has no public setter for the context and no public “finish battle” command. Mission and simulation code consume the component through the event lifecycle.

## When to use and when not to use

**Use it when:**

- Reading whether an active event uses the field-battle component and which simulation context it exposes.
- Starting a supported field-battle event through `CreateFieldBattleEvent` when your integration already has valid attacker and defender `PartyBase` objects.
- Handling a loaded event after the engine reattaches its component.

**Do not use it when:**

- Creating a field battle with `new MapEvent()` or a protected component constructor; the factory also initializes sides and registers the event.
- Assuming every field component is a normal land battle; naval-raid context is a source-backed exception.
- Holding the component after `MapEvent.IsFinalized` or using it as an Agent/Mission lifecycle object.

## Dependencies and lifecycle

- **Base contract:** [`MapEventComponent`](../MapEventComponent) provides the owner and internal initialization/finalization hooks.
- **Creator:** [`DefaultEncounterModel`](../DefaultEncounterModel) and [`PlayerEncounter`](../PlayerEncounter) select `CreateFieldBattleEvent` for `FieldBattle` encounters.
- **Owner:** [`MapEvent`](../MapEvent) stores the component and calls its lifecycle through the Campaign event flow.
- **Inputs:** attacker/defender [`PartyBase`](../PartyBase), event position, `MapEventHelper`, and `MilitaryPowerModel`.
- **Downstream:** [`MapEventSide`](../MapEventSide), SandBox Mission setup, combat simulation, `CampaignEvents`, and `MapEventManager` consume the initialized event.
- **Persistence:** `CreateComponentForOldSaves(MapEvent)` reattaches a component to an already loaded event; the saved event remains the source of parties and state.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `SimulationContext` | Returns `NavalRaid` for a naval raid; otherwise delegates to `MilitaryPowerModel.GetContextForPosition(MapEvent.Position)`. Read after the component is attached. |
| `CreateFieldBattleEvent(PartyBase, PartyBase)` | Creates a `MapEvent`, initializes it as `FieldBattle`, registers it, and returns the component. This is the supported creation boundary. |
| `CreateComponentForOldSaves(MapEvent)` | Creates a component for a loaded event without creating or registering a second event. |
| `OnInitialize()` / `OnFinalize()` | Current v1.4.5 hooks are empty overrides; the base lifecycle still determines when they are called. Do not use emptiness as permission to bypass the lifecycle. |

## Real acquisition example

For an existing Campaign event, read the concrete component through the manager rather than constructing one:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static MapEvent.PowerCalculationContext? GetFieldContext()
{
    FieldBattleEventComponent component = Campaign.Current.MapEventManager.MapEvents
        .Select(mapEvent => mapEvent.Component)
        .OfType<FieldBattleEventComponent>()
        .FirstOrDefault();
    return component?.SimulationContext;
}
```

When starting a field event, pass real `PartyBase` objects from the current encounter to `CreateFieldBattleEvent`; do not use a placeholder party or manually call `MapEvent.Initialize` from a mod.

## Risks and crash boundaries

1. A component created for an old save must be attached to that loaded `MapEvent`; creating a fresh event instead duplicates the encounter and can corrupt the active event graph.
2. The component's context is consumed by strength and combat Models. Replacing the Model or reading it before `MapEvent.Position` is valid can produce incorrect simulation rules.
3. The factory registers the event only after initialization. Holding the returned component before checking Campaign state or using it after finalization can expose incomplete or stale sides.
4. A field component does not itself open or close a Mission. Agent and Mission references belong to the temporary Mission projection and must not be stored in the Campaign event.

## Version note

The v1.4.5 factory uses `MapEvent.BattleTypes.FieldBattle` and the naval-raid exception shown above. Factory names, old-save repair behavior, and the Model context contract should be rechecked for other versions.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [`MapEventComponent`](../MapEventComponent) · [`RaidEventComponent`](../RaidEventComponent) · [`MapEvent`](../MapEvent)
- Related: [`MapEventManager`](../MapEventManager) · [`MapEventSide`](../MapEventSide) · [`BattleTypes`](../BattleTypes) · [`PlayerEncounter`](../PlayerEncounter)
- 中文: [FieldBattleEventComponent](../../../../zh/api/campaign/FieldBattleEventComponent)
