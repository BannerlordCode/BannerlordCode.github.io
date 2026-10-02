---
title: "PlayMusicPoint"
description: "PlayMusicPoint — class in SandBox.Objects.AnimationPoints. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# PlayMusicPoint

**Namespace:** `SandBox.Objects.AnimationPoints`  
**Module:** `SandBox`  
**Type:** `public class PlayMusicPoint : AnimationPoint`  
**Base:** `AnimationPoint`  
**Source:** `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs`

## Overview

`PlayMusicPoint` is a named type in the SandBox.Objects.AnimationPoints namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AnimationPoint, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (7): `OnInit`, `StartLoop`, `EndLoop`, `GetTickRequirement`, `OnTick`, `OnUseStopped`, ….
- **Extension points** (4): `OnInit`, `GetTickRequirement`, `OnTick`, `OnUseStopped`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `OnUseStopped` | method (override) | Overrides the base member. Takes 3 arguments: `Agent userAgent`, `bool isSuccessful`, `int preferenceIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ChangeInstrument` | method | Instance entry point. Takes 2 arguments: `Tuple<InstrumentData`, `float> instrument`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `EndLoop` | method | Instance entry point. Takes no arguments. |
| `StartLoop` | method | Instance entry point. Takes 1 argument: `SoundEvent trackEvent`. |

## Usage Example

```csharp
// PlayMusicPoint exposes no public members in SandBox.Objects.AnimationPoints.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AnimationPoint](../AnimationPoint/) — `SandBox.Objects.AnimationPoints`.
- [InstrumentData](../InstrumentData/) — `SandBox.Objects`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/sandbox/](../) — the other types in this bucket.
