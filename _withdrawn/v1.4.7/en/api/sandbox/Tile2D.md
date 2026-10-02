---
title: "Tile2D"
description: "Tile2D — class in SandBox.BoardGames.Tiles. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# Tile2D

**Namespace:** `SandBox.BoardGames.Tiles`  
**Module:** `SandBox`  
**Type:** `public class Tile2D : TileBase`  
**Base:** `TileBase`  
**Source:** `SandBox/BoardGames/Tiles/Tile2D.cs`

## Overview

`Tile2D` is a named type in the SandBox.BoardGames.Tiles namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends TileBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Tile2D`.
- **Instance members** (2): `X`, `Y`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `X` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Y` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Tile2D` | ctor | Instance entry point. Takes 4 arguments: `GameEntity entity`, `BoardGameDecal decal`, `int x`, `int y`. Returns ``. |

- Constructed as `public Tile2D(GameEntity entity, BoardGameDecal decal, int x, int y)`.

## Usage Example

```csharp
var tile2D = new Tile2D(entity, decal, x, y);
// Read current state through tile2D.X.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/BoardGames/Tiles/Tile2D.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TileBase](../TileBase/) — `SandBox.BoardGames.Tiles`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
