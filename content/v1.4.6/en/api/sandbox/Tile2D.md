---
title: "Tile2D"
description: "Tile2D: a public class in SandBox, inheriting TileBase; 3 exposed members (0 methods, 2 properties, 0 fields). Source: SandBox/BoardGames/Tiles/Tile2D.cs."
---
# Tile2D

**Namespace:** `SandBox.BoardGames.Tiles`
**Module:** `SandBox`
**Type:** `public class Tile2D : TileBase`
**File:** `SandBox/BoardGames/Tiles/Tile2D.cs`

## Overview

Tile2D lives in the SandBox module, source file SandBox/BoardGames/Tiles/Tile2D.cs. It is a public class, implementing/inheriting TileBase; the inheritance chain is Tile2D → TileBase. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Tile2D is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.Tiles) the module directory; inheritance chain Tile2D → TileBase. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Tiles/Tile2D.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public int X` | property |
| `Y` | `public int Y` | property |
| `Tile2D` | `public Tile2D(GameEntity entity, BoardGameDecal decal, int x, int y) : base(entity, decal)` | constructor |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TileBase](../TileBase)
- [same namespace Tile1D](../Tile1D)
- [same namespace TileBase](../TileBase)
- [same namespace TileMuTorere](../TileMuTorere)
- [same namespace TilePuluc](../TilePuluc)
