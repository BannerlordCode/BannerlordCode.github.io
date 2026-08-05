---
title: "ForceSuppliesEventComponent"
description: "The MapEvent component for forcing supplies from a village, including village-state transitions, militia binding, completion events, and naval-raid context."
---
# ForceSuppliesEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ForceSuppliesEventComponent : MapEventComponent`  
**Base:** [MapEventComponent](../MapEventComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/ForceSuppliesEventComponent.cs`

## One-sentence responsibility

It gives a village-forced-supplies `MapEvent` its village or naval-raid simulation context and keeps the village in the forced-supplies state until the event completes.

## Mental Model

This is a concrete [MapEventComponent](../MapEventComponent), not a village inventory service and not a `MobileParty` component. `PlayerEncounter` selects it when `ForceSupplies` is set; the factory creates the containing `MapEvent`, initializes it with `MapEvent.BattleTypes.IsForcingSupplies`, binds a defender militia party when one exists, and registers the event through `Campaign.Current.MapEventManager`.

The component owns the phase-specific village transition. `OnInitialize` applies `ChangeVillageStateAction.ApplyBySettingToBeingForcedForSupplies`; `OnBeforeFinalize` dispatches `ForceSuppliesCompleted` with the attacker side only for an attacker victory and otherwise the defender side; `OnFinalize` returns the settlement to the normal village state. The component has no public mutable result fields, so the event and its parties remain the state authority.

## When to use and when not to use

- Read `PlayerEncounter.Battle?.Component` when a live player encounter needs to identify a force-supplies event.
- Let `PlayerEncounter.StartBattle` or the corresponding encounter flow call `CreateForceSuppliesEvent`; the factory is a Campaign mutation, not a polling helper.
- Subscribe to `CampaignEvents.ForceSuppliesCompletedEvent` for completion work instead of calling `OnBeforeFinalize` or `OnFinalize`.
- Use [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) for volunteer recruitment. Its source contract is similar but its village state and completion event are different.
- Do not construct the protected component directly, attach it to an arbitrary `MapEvent`, or assume every defender has a militia party.

## Dependencies

```text
PlayerEncounter.ForceSupplies
  -> ForceSuppliesEventComponent.CreateForceSuppliesEvent
  -> MapEvent.Initialize(IsForcingSupplies)
  -> village state + optional militia MapEventSide binding
  -> ForceSuppliesCompleted + village normalization
```

- Event host: [MapEvent](../MapEvent) owns the sides, battle state, settlement, and finalization order.
- Creation: [PlayerEncounter](../PlayerEncounter) selects the factory; [MapEventManager](../MapEventManager) registers the initialized event.
- State mutation: [ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction) marks the village as being forced and restores normal state.
- Completion: `CampaignEvents.ForceSuppliesCompletedEvent` reaches [CampaignEventReceiver](../CampaignEventReceiver) through the dispatcher.
- Persistence: `CreateComponentForOldSaves` reattaches the component to a loaded `MapEvent`; the event and component are part of the Campaign save graph.

## State and operations

| Member | Meaning and timing |
|---|---|
| `MapEvent` | Inherited event back-reference. It is valid after construction and is rebound by the old-save path. |
| `SimulationContext` | Returns `Village` for a land event and `NavalRaid` when `MapEventHelper.IsNavalRaid(MapEvent)` is true. |
| `CreateForceSuppliesEvent` | Creates, initializes, militia-binds, registers, and returns the component for an active event. |
| `CreateComponentForOldSaves` | Reconstructs the component around an already loaded event; it does not create or register a new event. |
| `OnInitialize` | Marks the event settlement as being forced for supplies. Called by `MapEvent.Initialize`. |
| `OnBeforeFinalize` | Sends the completion callback with the source-defined winner side before final event cleanup. |
| `OnFinalize` | Restores the event settlement to the normal village state. |

## Real example

A Campaign behavior that observes the current player event should acquire it from the live encounter and inspect the component:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Settlements;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is ForceSuppliesEventComponent supplies && !battle.IsFinalized)
{
    MapEvent.PowerCalculationContext context = supplies.SimulationContext;
    Settlement village = battle.MapEventSettlement;
}
```

The source start path creates the component only after it has selected the force-supplies encounter. A mod that needs completion should listen to `CampaignEvents.ForceSuppliesCompletedEvent` and release event references after `MapEventEnded`.

## Risks and save boundaries

- The factory assumes `attackerParty` and `defenderParty` describe a village encounter. Passing arbitrary parties can make `MapEventSettlement` or village-state transitions invalid.
- The defender militia's `MobileParty.MapEventSide` is updated only when `defenderParty.Settlement?.MilitiaPartyComponent` exists. Do not infer that a missing militia component means the event is invalid.
- Repeating the factory for the same encounter creates another event and can leave village state, militia participation, and player encounter state inconsistent.
- `OnInitialize`, `OnBeforeFinalize`, and `OnFinalize` are lifecycle hooks. Calling them manually can dispatch completion twice or leave a village permanently marked as forced.
- The completion callback treats every non-attacker victory state as the defender side. Consumers must inspect the event result if draw or interruption semantics matter.
- Old-save reconstruction must use `CreateComponentForOldSaves` on the loaded event. Creating a fresh event while loading changes the save graph and can duplicate encounter state.

## Version note

This page follows v1.4.5 `ForceSuppliesEventComponent`, `PlayerEncounter.StartBattleInternal`, `MapEvent.OnLateLoad`, `ChangeVillageStateAction`, and the `ForceSuppliesCompleted` event path. The battle type and save-version conditions are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [MapEventComponent](../MapEventComponent) · [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) · [SiegeAmbushEventComponent](../SiegeAmbushEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- Related: [MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [MapEventManager](../MapEventManager) · [ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction)
- Chinese: [ForceSuppliesEventComponent](../../../../zh/api/campaign/ForceSuppliesEventComponent)
