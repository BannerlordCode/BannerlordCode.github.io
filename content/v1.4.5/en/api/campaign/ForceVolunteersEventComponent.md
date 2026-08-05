---
title: "ForceVolunteersEventComponent"
description: "The MapEvent component for forcing village volunteers, including village-state transitions, militia binding, completion events, and naval-raid context."
---
# ForceVolunteersEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ForceVolunteersEventComponent : MapEventComponent`  
**Base:** [MapEventComponent](../MapEventComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/ForceVolunteersEventComponent.cs`

## One-sentence responsibility

It gives a village-forced-volunteers `MapEvent` its village or naval-raid simulation context and restores the village after the volunteer encounter completes.

## Mental Model

This component is the Campaign event policy for a forced-volunteers encounter. `PlayerEncounter` selects it when `ForceVolunteers` is set, and its factory creates a `MapEvent` with `MapEvent.BattleTypes.IsForcingVolunteers`, binds the settlement militia to the defender side when available, and registers the event in the active [MapEventManager](../MapEventManager).

The source deliberately names the public factory `CreateForceSuppliesEvent`, even though the type is `ForceVolunteersEventComponent`. That exact name is part of the v1.4.5 API. The lifecycle differs from force supplies through `ChangeVillageStateAction.ApplyBySettingToBeingForcedForVolunteers` and the `ForceVolunteersCompleted` event; it still returns the village to normal in `OnFinalize`.

## When to use and when not to use

- Inspect `PlayerEncounter.Battle?.Component` when a live encounter must distinguish forced volunteers from other village events.
- Let the `PlayerEncounter` force-volunteers path call `CreateForceSuppliesEvent`; do not invent a `CreateForceVolunteersEvent` method.
- Subscribe to `CampaignEvents.ForceVolunteersCompletedEvent` for post-encounter work rather than invoking lifecycle hooks.
- Use [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) when the encounter is collecting supplies; the two components have different village states and completion events.
- Do not attach this component to a hand-built `MapEvent` or run its factory repeatedly for one player encounter.

## Dependencies

```text
PlayerEncounter.ForceVolunteers
  -> ForceVolunteersEventComponent.CreateForceSuppliesEvent
  -> MapEvent.Initialize(IsForcingVolunteers)
  -> village state + optional militia MapEventSide binding
  -> ForceVolunteersCompleted + village normalization
```

- Event host: [MapEvent](../MapEvent) owns battle state, sides, settlement, and finalization.
- Creation: [PlayerEncounter](../PlayerEncounter) chooses the factory; [MapEventManager](../MapEventManager) stores the initialized event.
- State mutation: [ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction) enters and leaves the forced-volunteers village state.
- Completion: `CampaignEvents.ForceVolunteersCompletedEvent` is dispatched through the Campaign event receiver/dispatcher chain.
- Persistence: `CreateComponentForOldSaves` rebinds a loaded event without creating a second encounter.

## State and operations

| Member | Meaning and timing |
|---|---|
| `MapEvent` | Inherited event back-reference, rebound during old-save reconstruction. |
| `SimulationContext` | Returns `Village` for land events and `NavalRaid` for events identified as naval raids. |
| `CreateForceSuppliesEvent` | Source-defined factory name that creates and registers an `IsForcingVolunteers` event. |
| `CreateComponentForOldSaves` | Reconstructs the component for an already loaded event. |
| `OnInitialize` | Sets the event settlement to the forced-volunteers state. |
| `OnBeforeFinalize` | Dispatches `ForceVolunteersCompleted` with the source-defined winning side. |
| `OnFinalize` | Restores the event settlement to the normal village state. |

## Real example

Read the current event through the live player encounter; do not construct the protected component:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is ForceVolunteersEventComponent volunteers && !battle.IsFinalized)
{
    bool isVolunteerEvent = battle.IsForcingVolunteers;
    MapEvent.PowerCalculationContext context = volunteers.SimulationContext;
}
```

The source `PlayerEncounter.StartBattleInternal` calls the oddly named factory only when its `ForceVolunteers` flag is true, so the event type is the reliable discriminator.

## Risks and save boundaries

- The factory requires a village-style attacker/defender pair. An arbitrary settlement or party can make the village-state Action and militia binding operate on the wrong object.
- The militia side assignment is conditional. The event can exist without a `MilitiaPartyComponent`; code must check the actual event sides instead of assuming a militia party.
- Calling `CreateForceSuppliesEvent` twice creates duplicate event state. It is not an idempotent “ensure volunteers encounter” operation.
- Manually invoking `OnBeforeFinalize` or `OnFinalize` can duplicate completion notifications or leave the village in the wrong state.
- The winner callback maps every non-attacker-victory result to the defender side. Consumers that care about interruption or draw behavior must inspect the event state themselves.
- During old-save loading use `CreateComponentForOldSaves(MapEvent)` so the existing event remains the save identity.

## Version note

This page follows v1.4.5 `ForceVolunteersEventComponent`, `PlayerEncounter.StartBattleInternal`, `MapEvent.OnLateLoad`, `ChangeVillageStateAction`, and the `ForceVolunteersCompleted` event path. The public factory name is a source-level version detail.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [MapEventComponent](../MapEventComponent) · [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) · [SiegeAmbushEventComponent](../SiegeAmbushEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- Related: [MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [MapEventManager](../MapEventManager) · [ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction)
- Chinese: [ForceVolunteersEventComponent](../../../../zh/api/campaign/ForceVolunteersEventComponent)
