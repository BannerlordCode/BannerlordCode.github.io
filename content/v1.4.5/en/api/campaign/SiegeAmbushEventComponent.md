---
title: "SiegeAmbushEventComponent"
description: "The MapEvent component for a sally-out siege ambush, deriving simulation context from the besieger camp and preserving the encounter lifecycle."
---
# SiegeAmbushEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class SiegeAmbushEventComponent : MapEventComponent`  
**Base:** [MapEventComponent](../MapEventComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/SiegeAmbushEventComponent.cs`

## One-sentence responsibility

It marks a siege ambush `MapEvent` and supplies the military-power context at the besieger camp position for simulation and strength calculations.

## Mental Model

This is a narrow event component for the sally-out ambush branch, not a general siege controller. `PlayerEncounter.StartBattleInternal` selects it when `_isSallyOutAmbush` is true. `CreateSiegeAmbushEvent` creates a `MapEvent`, constructs the component, initializes the attacker and defender sides, registers the event with `Campaign.Current.MapEventManager`, and returns the component.

Unlike the forced-village components, this class has no `OnInitialize`, `OnBeforeFinalize`, or `OnFinalize` override. Its only event-specific policy is `SimulationContext`: it reads the attacker leader's `SiegeEvent.BesiegerCamp.LeaderParty.Position` and asks `MilitaryPowerModel` for the context at that position. Event resolution and cleanup remain the responsibility of [MapEvent](../MapEvent) and its other protocols.

## When to use and when not to use

- Inspect `PlayerEncounter.Battle?.Component` or `MapEvent.IsSiegeAmbush` while the siege ambush is active.
- Let the player encounter flow call `CreateSiegeAmbushEvent`; do not use the public constructor as a shortcut around `MapEvent.Initialize` and manager registration.
- Use the component's `SimulationContext` when a diagnostic needs the same military-power context used by the event.
- Do not treat this component as a place to store siege state, replace `SiegeEvent`, or finalize the battle manually.
- Do not call `SimulationContext` on an event whose attacker leader has no `SiegeEvent` or `BesiegerCamp`; the source assumes the siege-ambush shape.

## Dependencies

```text
PlayerEncounter._isSallyOutAmbush
  -> SiegeAmbushEventComponent.CreateSiegeAmbushEvent
  -> MapEvent.Initialize(attacker, defender, component)
  -> MilitaryPowerModel at BesiegerCamp.LeaderParty.Position
  -> MapEvent simulation and normal finalization
```

- Event host: [MapEvent](../MapEvent) owns sides, battle state, position, and cleanup.
- Encounter entry: [PlayerEncounter](../PlayerEncounter) selects the factory for the ambush branch.
- Siege input: [SiegeEvent](../SiegeEvent) and [BesiegerCamp](../BesiegerCamp) provide the position used for context selection.
- Model: [MilitaryPowerModel](../MilitaryPowerModel) converts the campaign position into a [MapEvent](../MapEvent) power context.
- Registry and save: [MapEventManager](../MapEventManager) registers the event; the component is part of the event save graph.

## State and operations

| Member | Meaning and timing |
|---|---|
| `MapEvent` | Inherited event reference passed by the factory or restored by the base load path. |
| `SimulationContext` | Gets the besieger camp leader position and queries `Campaign.Current.Models.MilitaryPowerModel`. |
| `SiegeAmbushEventComponent(MapEvent)` | Public source constructor, but normal callers should use the factory so the event is initialized and registered together. |
| `CreateSiegeAmbushEvent` | Creates, initializes, registers, and returns the ambush component. |

## Real example

The safe observation path is the live player battle:

```csharp
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is SiegeAmbushEventComponent ambush && battle.IsSiegeAmbush)
{
    MapEvent.PowerCalculationContext context = ambush.SimulationContext;
}
```

The source path reaches this component only after a siege encounter has established the attacker and defender parties. A custom encounter should preserve that invariant before asking the component for its context.

## Risks and save boundaries

- `SimulationContext` dereferences the attacker leader's `SiegeEvent`, `BesiegerCamp`, and leader party position. Calling it for a non-siege event can fail before any null-safe fallback exists.
- The constructor is public but does not initialize sides or register the event. Constructing it alone creates an incomplete object graph.
- The factory's default `MapEvent.Initialize` path supplies the event identity and side binding. Do not replace it with direct component assignment.
- The component has no custom finalization hook. Subscribe to the surrounding `MapEvent` lifecycle instead of expecting this type to notify completion.
- The `MapEvent` and siege objects are save/runtime state. Release cached references after the event is finalized and reacquire the current event after loading.

## Version note

This page follows v1.4.5 `SiegeAmbushEventComponent`, `PlayerEncounter.StartBattleInternal`, `MapEvent.IsSiegeAmbush`, and the `MilitaryPowerModel` context lookup. The siege-ambush branch and constructor visibility are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [MapEventComponent](../MapEventComponent) · [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) · [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- Related: [MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [SiegeEvent](../SiegeEvent) · [BesiegerCamp](../BesiegerCamp) · [MilitaryPowerModel](../MilitaryPowerModel)
- Chinese: [SiegeAmbushEventComponent](../../../../zh/api/campaign/SiegeAmbushEventComponent)
