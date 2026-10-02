---
title: "AmmoBarrelBase"
description: "AmmoBarrelBase — class in TaleWorlds.MountAndBlade.Objects.Usables. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# AmmoBarrelBase

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class AmmoBarrelBase : UsableMachine`  
**Base:** `UsableMachine`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs`

## Overview

`AmmoBarrelBase` is a named type in the TaleWorlds.MountAndBlade.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMachine, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AmmoBarrelBase`.
- **Instance members** (10): `OnInit`, `GetRequiredWeaponClasses`, `OnDeploymentFinished`, `GetSoundEvent`, `GetActionTextForStandingPoint`, `GetDescriptionText`, ….
- **Extension points** (7): `GetRequiredWeaponClasses`, `OnDeploymentFinished`, `GetSoundEvent`, `GetActionTextForStandingPoint`, `GetDescriptionText`, `GetTickRequirement`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDescriptionText` | method (override) | Abstract — a subclass must supply it. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetActionTextForStandingPoint` | method (override) | Overrides the base member. Takes 1 argument: `UsableMissionObject usableGameObject`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetOrder` | method (override) | Overrides the base member. Takes 1 argument: `BattleSideEnum side`. Returns `OrderType`. Read path: prefer it over reaching for the backing store. |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `OnDeploymentFinished` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetRequiredWeaponClasses` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `WeaponClass[]`. Read path: prefer it over reaching for the backing store. |
| `GetSoundEvent` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `AmmoBarrelBase` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `OnInit` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTickParallel` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

- Constructed as `public AmmoBarrelBase()`.

## Usage Example

```csharp
var ammoBarrelBase = new AmmoBarrelBase();
ammoBarrelBase.OnInit();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.
