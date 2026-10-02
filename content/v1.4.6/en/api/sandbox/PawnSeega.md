---
title: "PawnSeega"
description: "PawnSeega: a public class in SandBox, inheriting PawnBase; 8 exposed members (3 methods, 4 properties, 0 fields). Source: SandBox/BoardGames/Pawns/PawnSeega.cs."
---
# PawnSeega

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public class PawnSeega : PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnSeega.cs`

## Overview

PawnSeega lives in the SandBox module, source file SandBox/BoardGames/Pawns/PawnSeega.cs. It is a public class, implementing/inheriting PawnBase; the inheritance chain is PawnSeega → PawnBase. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PawnSeega is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.Pawns) the module directory; inheritance chain PawnSeega → PawnBase. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Pawns/PawnSeega.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPlaced` | `public override bool IsPlaced` | property |
| `MovedThisTurn` | `public bool MovedThisTurn` | property |
| `PrevX` | `public int PrevX` | property |
| `PrevY` | `public int PrevY` | property |
| `PawnSeega` | `public PawnSeega(GameEntity entity, bool playerOne) : base(entity, playerOne)` | constructor |
| `Reset` | `public override void Reset()` | method |
| `UpdateMoveBackAvailable` | `public void UpdateMoveBackAvailable()` | method |
| `AISetMovedThisTurn` | `public void AISetMovedThisTurn(bool moved)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PawnBase](../PawnBase)
- [same namespace PawnBaghChal](../PawnBaghChal)
- [same namespace PawnBase](../PawnBase)
- [same namespace PawnKonane](../PawnKonane)
- [same namespace PawnMuTorere](../PawnMuTorere)
