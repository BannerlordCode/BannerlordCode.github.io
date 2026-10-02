---
title: "PawnBase"
description: "PawnBase: a public class in SandBox; 26 exposed members (12 methods, 13 properties, 0 fields). Source: SandBox/BoardGames/Pawns/PawnBase.cs."
---
# PawnBase

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public abstract class PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnBase.cs`

## Overview

PawnBase lives in the SandBox module, source file SandBox/BoardGames/Pawns/PawnBase.cs. It is a public class (abstract); the inheritance chain is PawnBase. It exposes 26 public/protected members: 12 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PawnBase is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.Pawns) the module directory; inheritance chain PawnBase. The surface is property-led (properties 13/26, methods 12/26), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Pawns/PawnBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PawnMoveSoundCodeID` | `public static int PawnMoveSoundCodeID` | property |
| `PawnSelectSoundCodeID` | `public static int PawnSelectSoundCodeID` | property |
| `PawnTapSoundCodeID` | `public static int PawnTapSoundCodeID` | property |
| `PawnRemoveSoundCodeID` | `public static int PawnRemoveSoundCodeID` | property |
| `IsPlaced` | `public abstract bool IsPlaced` | property |
| `PosBeforeMoving` | `public virtual Vec3 PosBeforeMoving` | property |
| `Entity` | `public GameEntity Entity` | property |
| `List` | `protected List<Vec3>GoalPositions` | property |
| `Captured` | `public bool Captured` | property |
| `MovingToDifferentTile` | `public bool MovingToDifferentTile` | property |
| `Moving` | `public bool Moving` | property |
| `PlayerOne` | `public bool PlayerOne` | property |
| `HasAnyGoalPosition` | `public bool HasAnyGoalPosition` | property |
| `PawnBase` | `protected PawnBase(GameEntity entity, bool playerOne)` | constructor |
| `Reset` | `public virtual void Reset()` | method |
| `AddGoalPosition` | `public virtual void AddGoalPosition(Vec3 goal)` | method |
| `SetPawnAtPosition` | `public virtual void SetPawnAtPosition(Vec3 position)` | method |
| `MovePawnToGoalPositions` | `public virtual void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)` | method |
| `EnableCollisionBody` | `public virtual void EnableCollisionBody()` | method |
| `DisableCollisionBody` | `public virtual void DisableCollisionBody()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `MovePawnToGoalPositionsDelayed` | `public void MovePawnToGoalPositionsDelayed(bool instantMove, float speed, bool dragged, float delay)` | method |
| `SetPlayerOne` | `public void SetPlayerOne(bool playerOne)` | method |
| `ClearGoalPositions` | `public void ClearGoalPositions()` | method |
| `UpdatePawnPosition` | `public void UpdatePawnPosition()` | method |
| `PlayPawnSelectSound` | `public void PlayPawnSelectSound()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PawnBaghChal](../PawnBaghChal)
- [same namespace PawnKonane](../PawnKonane)
- [same namespace PawnMuTorere](../PawnMuTorere)
- [same namespace PawnPuluc](../PawnPuluc)
