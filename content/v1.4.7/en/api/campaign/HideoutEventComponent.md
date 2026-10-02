---
title: "HideoutEventComponent"
description: "HideoutEventComponent — class in TaleWorlds.CampaignSystem.MapEvents. 6 public members (2 static)."
---

<!-- v147-skeleton -->
# HideoutEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class HideoutEventComponent : MapEventComponent`  
**Base:** `MapEventComponent`  
**Source:** `TaleWorlds.CampaignSystem/MapEvents/HideoutEventComponent.cs`

## Overview

`HideoutEventComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends MapEventComponent, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `HideoutEventComponent`.
- **Static entry points** (2): `CreateHideoutEvent`, `CreateComponentForOldSaves`.
- **Instance members** (3): `SimulationContext`, `OnBeforeFinalize`, `HideoutBattleEndState`.
- **Extension points** (2): `SimulationContext`, `OnBeforeFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateComponentForOldSaves` | method (static) | Static entry point. Takes 2 arguments: `MapEvent mapEvent`, `bool isSendTroops`. Returns `HideoutEventComponent`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateHideoutEvent` | method (static) | Static entry point. Takes 3 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`, `bool isSendTroops`. Returns `HideoutEventComponent`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `SimulationContext` | property (override) | Overrides the base member `MapEvent.PowerCalculationContext` property. Read it for current state; a declared setter writes that state in place. |
| `OnBeforeFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HideoutBattleEndState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `HideoutEventComponent` | ctor | Protected — for subclasses only. Takes 2 arguments: `MapEvent mapEvent`, `bool isSendTroops`. Returns ``. |

- Constructed as `protected HideoutEventComponent(MapEvent mapEvent, bool isSendTroops)`.

## Usage Example

```csharp
// Static entry points on HideoutEventComponent:
HideoutEventComponent.CreateHideoutEvent(attackerParty, defenderParty, isSendTroops);
HideoutEventComponent.CreateComponentForOldSaves(mapEvent, isSendTroops);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/MapEvents/HideoutEventComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Hideout](../Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/campaign/](../) — the other types in this bucket.
