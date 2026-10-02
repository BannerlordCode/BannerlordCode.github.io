---
title: "Tile1D"
description: "Tile1D — class in SandBox.BoardGames.Tiles. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# Tile1D

**Namespace:** `SandBox.BoardGames.Tiles`  
**Module:** `SandBox`  
**Type:** `public class Tile1D : TileBase`  
**Base:** `TileBase`  
**Source:** `SandBox/BoardGames/Tiles/Tile1D.cs`

## Overview

`Tile1D` is a named type in the SandBox.BoardGames.Tiles namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends TileBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Tile1D`.
- **Instance members** (1): `X`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `X` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Tile1D` | ctor | Instance entry point. Takes 3 arguments: `GameEntity entity`, `BoardGameDecal decal`, `int x`. Returns ``. |

- Constructed as `public Tile1D(GameEntity entity, BoardGameDecal decal, int x)`.

## Usage Example

```csharp
var tile1D = new Tile1D(entity, decal, x);
// Read current state through tile1D.X.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/BoardGames/Tiles/Tile1D.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TileBase](../TileBase/) — `SandBox.BoardGames.Tiles`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
