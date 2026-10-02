---
title: "PawnPuluc"
description: "PawnPuluc: a public class in SandBox, inheriting PawnBase; 18 exposed members (7 methods, 7 properties, 2 fields). Source: SandBox/BoardGames/Pawns/PawnPuluc.cs."
---
# PawnPuluc

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public class PawnPuluc : PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnPuluc.cs`

## Overview

PawnPuluc lives in the SandBox module, source file SandBox/BoardGames/Pawns/PawnPuluc.cs. It is a public class, implementing/inheriting PawnBase; the inheritance chain is PawnPuluc → PawnBase. It exposes 18 public/protected members: 7 methods, 7 properties, 2 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PawnPuluc is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.Pawns) the module directory; inheritance chain PawnPuluc → PawnBase. The surface is method-led (methods 7/18, properties 7/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Pawns/PawnPuluc.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Height` | `public float Height` | property |
| `PosBeforeMoving` | `public override Vec3 PosBeforeMoving` | property |
| `IsPlaced` | `public override bool IsPlaced` | property |
| `X` | `public int X` | property |
| `List` | `public List<PawnPuluc>PawnsBelow` | property |
| `InPlay` | `public bool InPlay` | property |
| `PawnPuluc` | `public PawnPuluc(GameEntity entity, bool playerOne) : base(entity, playerOne)` | constructor |
| `Reset` | `public override void Reset()` | method |
| `AddGoalPosition` | `public override void AddGoalPosition(Vec3 goal)` | method |
| `MovePawnToGoalPositions` | `public override void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)` | method |
| `SetPawnAtPosition` | `public override void SetPawnAtPosition(Vec3 position)` | method |
| `EnableCollisionBody` | `public override void EnableCollisionBody()` | method |
| `DisableCollisionBody` | `public override void DisableCollisionBody()` | method |
| `MovePawnBackToSpawn` | `public void MovePawnBackToSpawn(bool instantMove, float speed, bool fake = false)` | method |
| `IsInSpawn` | `public bool IsInSpawn` | field |
| `IsTopPawn` | `public bool IsTopPawn` | field |
| `MovementState` | `public enum MovementState` | property |
| `MovementState` | `public enum MovementState` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PawnBase](../PawnBase)
- [same namespace PawnBaghChal](../PawnBaghChal)
- [same namespace PawnBase](../PawnBase)
- [same namespace PawnKonane](../PawnKonane)
- [same namespace PawnMuTorere](../PawnMuTorere)
