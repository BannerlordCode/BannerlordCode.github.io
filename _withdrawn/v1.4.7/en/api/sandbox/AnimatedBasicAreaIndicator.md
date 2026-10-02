---
title: "AnimatedBasicAreaIndicator"
description: "AnimatedBasicAreaIndicator — class in SandBox.Objects.AreaMarkers. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# AnimatedBasicAreaIndicator

**Namespace:** `SandBox.Objects.AreaMarkers`  
**Module:** `SandBox`  
**Type:** `public class AnimatedBasicAreaIndicator : AreaMarker`  
**Base:** `AreaMarker`  
**Source:** `SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs`

## Overview

`AnimatedBasicAreaIndicator` is a named type in the SandBox.Objects.AreaMarkers namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AreaMarker, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (6): `IsActive`, `OnInit`, `SetIsActive`, `SetOverriddenName`, `GetName`, `NameStringId`.
- **Extension points** (2): `OnInit`, `GetName`.
- **Data and constants** (1): `Type`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NameStringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SetIsActive` | method | Instance entry point. Takes 1 argument: `bool isActive`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetOverriddenName` | method | Instance entry point. Takes 1 argument: `TextObject name`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Type` | field | Instance entry point `string` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// AnimatedBasicAreaIndicator is read through its properties:
//   IsActive : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AreaMarker](../../mission-ext/AreaMarker/) — `TaleWorlds.MountAndBlade.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
