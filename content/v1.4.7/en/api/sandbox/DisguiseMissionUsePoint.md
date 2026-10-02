---
title: "DisguiseMissionUsePoint"
description: "DisguiseMissionUsePoint — class in SandBox.Objects.Usables. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# DisguiseMissionUsePoint

**Namespace:** `SandBox.Objects.Usables`  
**Module:** `SandBox`  
**Type:** `public class DisguiseMissionUsePoint : UsableMissionObject`  
**Base:** `UsableMissionObject`  
**Source:** `SandBox/Objects/Usables/DisguiseMissionUsePoint.cs`

## Overview

`DisguiseMissionUsePoint` is a named type in the SandBox.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMissionObject, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DisguiseMissionUsePoint`.
- **Instance members** (6): `GetDescriptionText`, `OnUse`, `OnUseStopped`, `IsDisabledForAgent`, `IsUsableByAgent`, `GetUserFrameForAgent`.
- **Extension points** (6): `GetDescriptionText`, `OnUse`, `OnUseStopped`, `IsDisabledForAgent`, `IsUsableByAgent`, `GetUserFrameForAgent`.
- **Data and constants** (1): `InteractionPointDistance`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetUserFrameForAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `WorldFrame`. Read path: prefer it over reaching for the backing store. |
| `IsDisabledForAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsUsableByAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent userAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnUse` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUseStopped` | method (override) | Overrides the base member. Takes 3 arguments: `Agent userAgent`, `bool isSuccessful`, `int preferenceIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InteractionPointDistance` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `DisguiseMissionUsePoint` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DisguiseMissionUsePoint()`.

## Usage Example

```csharp
var disguiseMissionUsePoint = new DisguiseMissionUsePoint();
disguiseMissionUsePoint.GetDescriptionText(gameEntity);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/Usables/DisguiseMissionUsePoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
