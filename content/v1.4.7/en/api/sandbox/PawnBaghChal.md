---
title: "PawnBaghChal"
description: "PawnBaghChal — class in SandBox.BoardGames.Pawns. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# PawnBaghChal

**Namespace:** `SandBox.BoardGames.Pawns`  
**Module:** `SandBox`  
**Type:** `public class PawnBaghChal : PawnBase`  
**Base:** `PawnBase`  
**Source:** `SandBox/BoardGames/Pawns/PawnBaghChal.cs`

## Overview

`PawnBaghChal` is a named type in the SandBox.BoardGames.Pawns namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends PawnBase, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PawnBaghChal`.
- **Instance members** (5): `IsPlaced`, `InitialFrame`, `IsTiger`, `IsGoat`, `Reset`.
- **Extension points** (2): `IsPlaced`, `Reset`.
- **Data and constants** (4): `X`, `Y`, `PrevX`, `PrevY`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsPlaced` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `InitialFrame` | property | Instance entry point `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `IsGoat` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTiger` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PawnBaghChal` | ctor | Instance entry point. Takes 3 arguments: `GameEntity entity`, `bool playerOne`, `bool isTiger`. Returns ``. |
| `PrevX` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `PrevY` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `X` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Y` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public PawnBaghChal(GameEntity entity, bool playerOne, bool isTiger)`.

## Usage Example

```csharp
var pawnBaghChal = new PawnBaghChal(entity, playerOne, isTiger);
pawnBaghChal.Reset();
// Read current state through pawnBaghChal.IsPlaced.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/Pawns/PawnBaghChal.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [BoardGameBaghChal](../BoardGameBaghChal/) — `SandBox.BoardGames`.

Section: [api/sandbox/](../) — the other types in this bucket.
