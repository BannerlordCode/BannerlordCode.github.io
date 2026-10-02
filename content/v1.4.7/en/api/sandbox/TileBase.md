---
title: "TileBase"
description: "TileBase — class in SandBox.BoardGames.Tiles. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# TileBase

**Namespace:** `SandBox.BoardGames.Tiles`  
**Module:** `SandBox`  
**Type:** `public abstract class TileBase`  
**Source:** `SandBox/BoardGames/Tiles/TileBase.cs`

## Overview

`TileBase` is a named type in the SandBox.BoardGames.Tiles namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TileBase`.
- **Instance members** (5): `Entity`, `ValidMoveDecal`, `Reset`, `Tick`, `SetVisibility`.
- **Extension points** (1): `Reset`.
- **Data and constants** (1): `PawnOnTile`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Reset` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `Entity` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `SetVisibility` | method | Instance entry point. Takes 1 argument: `bool isVisible`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `ValidMoveDecal` | property | Instance entry point `BoardGameDecal` property. Read it for current state; a declared setter writes that state in place. |
| `PawnOnTile` | field | Instance entry point `PawnBase` field — direct storage with no validation or notification. |
| `TileBase` | ctor | Protected — for subclasses only. Takes 2 arguments: `GameEntity entity`, `BoardGameDecal decal`. Returns ``. |

- Constructed as `protected TileBase(GameEntity entity, BoardGameDecal decal)`.

## Usage Example

```csharp
// TileBase is read through its properties:
//   Entity : GameEntity
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/Tiles/TileBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.

Section: [api/sandbox/](../) — the other types in this bucket.
