---
title: "FlagCapturePoint"
description: "FlagCapturePoint — class in TaleWorlds.MountAndBlade.Objects. 21 public members (0 static)."
---

<!-- v147-skeleton -->
# FlagCapturePoint

**Namespace:** `TaleWorlds.MountAndBlade.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class FlagCapturePoint : SynchedMissionObject`  
**Base:** `SynchedMissionObject`  
**Source:** `TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs`

## Overview

`FlagCapturePoint` is a named type in the TaleWorlds.MountAndBlade.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends SynchedMissionObject, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (18): `FlagChar`, `IsContested`, `IsFullyRaised`, `IsDeactivated`, `OnMissionReset`, `ResetPointAsServer`, ….
- **Data and constants** (3): `PointRadius`, `RadiusMultiplierForContestedArea`, `FlagIndex`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ChangeMovementSpeed` | method | Instance entry point. Takes 1 argument: `float speedMultiplier`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `FlagChar` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetFlagColor` | method | Instance entry point. Takes no arguments. Returns `uint`. Read path: prefer it over reaching for the backing store. |
| `GetFlagColor2` | method | Instance entry point. Takes no arguments. Returns `uint`. Read path: prefer it over reaching for the backing store. |
| `GetFlagProgress` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `IsContested` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsDeactivated` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsFullyRaised` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAfterTick` | method | Instance entry point. Takes 2 arguments: `bool canOwnershipChange`, `out bool ownerTeamChanged`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemovePointAsServer` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ResetPointAsServer` | method | Instance entry point. Takes 2 arguments: `uint defaultColor`, `uint defaultColor2`. Removes from or clears the collection this type owns. |
| `SetMoveFlag` | method | Instance entry point. Takes 2 arguments: `CaptureTheFlagFlagDirection directionTo`, `float speedMultiplier`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMoveNone` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTeamColorsWithAllSynched` | method | Instance entry point. Takes 2 arguments: `uint color`, `uint color2`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetVisibleWithAllSynched` | method | Instance entry point. Takes 2 arguments: `bool value`, `bool forceChildrenVisible`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `PointRadius` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `RadiusMultiplierForContestedArea` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `OnEditorTick` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionReset` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FlagIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// FlagCapturePoint is read through its properties:
//   FlagChar : int
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
