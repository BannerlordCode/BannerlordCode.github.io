---
title: "RemoveExtraWeaponOnStopUsageComponent"
description: "RemoveExtraWeaponOnStopUsageComponent — class in TaleWorlds.MountAndBlade.Objects.Usables. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# RemoveExtraWeaponOnStopUsageComponent

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class RemoveExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`  
**Base:** `UsableMissionObjectComponent`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Usables/RemoveExtraWeaponOnStopUsageComponent.cs`

## Overview

`RemoveExtraWeaponOnStopUsageComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends UsableMissionObjectComponent, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Instance members** (1): `OnUseStopped`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnUseStopped` | method | Protected — for subclasses only. Takes 2 arguments: `Agent userAgent`, `bool isSuccessful`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// RemoveExtraWeaponOnStopUsageComponent exposes no public members in TaleWorlds.MountAndBlade.Objects.Usables.
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Usables/RemoveExtraWeaponOnStopUsageComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.
