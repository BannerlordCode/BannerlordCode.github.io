---
title: "TilePuluc"
description: "TilePuluc — class in SandBox.BoardGames.Tiles. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# TilePuluc

**Namespace:** `SandBox.BoardGames.Tiles`  
**Module:** `SandBox`  
**Type:** `public class TilePuluc : Tile1D`  
**Base:** `Tile1D`  
**Source:** `SandBox/BoardGames/Tiles/TilePuluc.cs`

## Overview

`TilePuluc` is a named type in the SandBox.BoardGames.Tiles namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Tile1D, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TilePuluc`.
- **Instance members** (5): `PosLeft`, `PosLeftMid`, `PosRight`, `PosRightMid`, `UpdateTilePosition`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `PosLeft` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `PosLeftMid` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `PosRight` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `PosRightMid` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateTilePosition` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `TilePuluc` | ctor | Instance entry point. Takes 3 arguments: `GameEntity entity`, `BoardGameDecal decal`, `int x`. Returns ``. |

- Constructed as `public TilePuluc(GameEntity entity, BoardGameDecal decal, int x)`.

## Usage Example

```csharp
var tilePuluc = new TilePuluc(entity, decal, x);
tilePuluc.UpdateTilePosition();
// Read current state through tilePuluc.PosLeft.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/BoardGames/Tiles/TilePuluc.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Tile1D](../Tile1D/) — `SandBox.BoardGames.Tiles`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.
- [Tile](../Tile/) — `SandBox.BoardGames.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
