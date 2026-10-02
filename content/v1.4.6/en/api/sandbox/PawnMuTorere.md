---
title: "PawnMuTorere"
description: "PawnMuTorere: a public class in SandBox, inheriting PawnBase; 4 exposed members (1 methods, 2 properties, 0 fields). Source: SandBox/BoardGames/Pawns/PawnMuTorere.cs."
---
# PawnMuTorere

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public class PawnMuTorere : PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnMuTorere.cs`

## Overview

PawnMuTorere lives in the SandBox module, source file SandBox/BoardGames/Pawns/PawnMuTorere.cs. It is a public class, implementing/inheriting PawnBase; the inheritance chain is PawnMuTorere → PawnBase. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PawnMuTorere is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.Pawns) the module directory; inheritance chain PawnMuTorere → PawnBase. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Pawns/PawnMuTorere.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public int X` | property |
| `IsPlaced` | `public override bool IsPlaced` | property |
| `PawnMuTorere` | `public PawnMuTorere(GameEntity entity, bool playerOne) : base(entity, playerOne)` | constructor |
| `Reset` | `public override void Reset()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PawnBase](../PawnBase)
- [same namespace PawnBaghChal](../PawnBaghChal)
- [same namespace PawnBase](../PawnBase)
- [same namespace PawnKonane](../PawnKonane)
- [same namespace PawnPuluc](../PawnPuluc)
