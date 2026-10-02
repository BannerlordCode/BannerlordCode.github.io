---
title: "PawnSeega"
description: "PawnSeega — class in SandBox.BoardGames.Pawns. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# PawnSeega

**Namespace:** `SandBox.BoardGames.Pawns`  
**Module:** `SandBox`  
**Type:** `public class PawnSeega : PawnBase`  
**Base:** `PawnBase`  
**Source:** `SandBox/BoardGames/Pawns/PawnSeega.cs`

## Overview

`PawnSeega` is a named type in the SandBox.BoardGames.Pawns namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends PawnBase, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PawnSeega`.
- **Instance members** (7): `IsPlaced`, `MovedThisTurn`, `PrevX`, `PrevY`, `Reset`, `UpdateMoveBackAvailable`, ….
- **Extension points** (2): `IsPlaced`, `Reset`.
- **Data and constants** (2): `X`, `Y`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsPlaced` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `AISetMovedThisTurn` | method | Instance entry point. Takes 1 argument: `bool moved`. |
| `MovedThisTurn` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `PrevX` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PrevY` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateMoveBackAvailable` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `PawnSeega` | ctor | Instance entry point. Takes 2 arguments: `GameEntity entity`, `bool playerOne`. Returns ``. |
| `X` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Y` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public PawnSeega(GameEntity entity, bool playerOne)`.

## Usage Example

```csharp
var pawnSeega = new PawnSeega(entity, playerOne);
pawnSeega.Reset();
// Read current state through pawnSeega.IsPlaced.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/Pawns/PawnSeega.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [BoardGameSeega](../BoardGameSeega/) — `SandBox.BoardGames`.

Section: [api/sandbox/](../) — the other types in this bucket.
