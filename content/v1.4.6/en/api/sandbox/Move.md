---
title: "Move"
description: "Move: a public struct in SandBox; 3 exposed members (0 methods, 2 properties, 0 fields). Source: SandBox/BoardGames/Move.cs."
---
# Move

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public struct Move`
**File:** `SandBox/BoardGames/Move.cs`

## Overview

Move lives in the SandBox module, source file SandBox/BoardGames/Move.cs. It is a public struct; the inheritance chain is Move. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Move is a top-level type in SandBox, namespace differing from (SandBox.BoardGames) the module directory; inheritance chain Move. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Move.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `Move` | `public Move(PawnBase unit, TileBase goalTile)` | constructor |
| `Invalid` | `public static readonly Move Invalid` | property |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameBaghChal](../BoardGameBaghChal)
- [same namespace BoardGameBase](../BoardGameBase)
- [same namespace BoardGameKonane](../BoardGameKonane)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere)
