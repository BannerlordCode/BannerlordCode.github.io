---
title: "FieldBattleEventComponent"
description: "FieldBattleEventComponent — class in TaleWorlds.CampaignSystem.MapEvents. 6 public members (2 static)."
---

<!-- v147-skeleton -->
# FieldBattleEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class FieldBattleEventComponent : MapEventComponent`  
**Base:** `MapEventComponent`  
**Source:** `TaleWorlds.CampaignSystem/MapEvents/FieldBattleEventComponent.cs`

## Overview

`FieldBattleEventComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends MapEventComponent, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FieldBattleEventComponent`.
- **Static entry points** (2): `CreateFieldBattleEvent`, `CreateComponentForOldSaves`.
- **Instance members** (3): `SimulationContext`, `OnInitialize`, `OnFinalize`.
- **Extension points** (3): `SimulationContext`, `OnInitialize`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateComponentForOldSaves` | method (static) | Static entry point. Takes 1 argument: `MapEvent mapEvent`. Returns `FieldBattleEventComponent`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateFieldBattleEvent` | method (static) | Static entry point. Takes 2 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`. Returns `FieldBattleEventComponent`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `SimulationContext` | property (override) | Overrides the base member `MapEvent.PowerCalculationContext` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FieldBattleEventComponent` | ctor | Protected — for subclasses only. Takes 1 argument: `MapEvent mapEvent`. Returns ``. |

- Constructed as `protected FieldBattleEventComponent(MapEvent mapEvent)`.

## Usage Example

```csharp
// Static entry points on FieldBattleEventComponent:
FieldBattleEventComponent.CreateFieldBattleEvent(attackerParty, defenderParty);
FieldBattleEventComponent.CreateComponentForOldSaves(mapEvent);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/MapEvents/FieldBattleEventComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
