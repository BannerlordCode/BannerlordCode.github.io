---
title: "TileBase"
description: "TileBase: a public class in SandBox.BoardGames.Tiles; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/Tiles/TileBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TileBase

**Namespace:** `SandBox.BoardGames.Tiles`
**Module:** `SandBox`
**Type:** `public abstract class TileBase`
**File:** `SandBox/BoardGames/Tiles/TileBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TileBase lives in the SandBox module, source file SandBox/BoardGames/Tiles/TileBase.cs. It is a public class (abstract); the inheritance chain is TileBase. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TileBase lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames.Tiles`, inheritance chain TileBase. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Tiles/TileBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Entity` | `public GameEntity Entity` | property |
| `ValidMoveDecal` | `public BoardGameDecal ValidMoveDecal` | property |
| `TileBase` | `protected TileBase(GameEntity entity, BoardGameDecal decal)` | constructor |
| `Reset` | `public virtual void Reset()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `SetVisibility` | `public void SetVisibility(bool isVisible)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Tile1D](../Tile1D/)
- [same namespace Tile2D](../Tile2D/)
- [same namespace TileMuTorere](../TileMuTorere/)
- [same namespace TilePuluc](../TilePuluc/)
