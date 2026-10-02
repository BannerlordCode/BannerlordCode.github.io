---
title: "BoardGameAIBaghChal"
description: "BoardGameAIBaghChal: a public class in SandBox, inheriting BoardGameAIBase; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/BoardGames/AI/BoardGameAIBaghChal.cs."
---
# BoardGameAIBaghChal

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class BoardGameAIBaghChal : BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIBaghChal.cs`

## Overview

BoardGameAIBaghChal lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAIBaghChal.cs. It is a public class, implementing/inheriting BoardGameAIBase; the inheritance chain is BoardGameAIBaghChal → BoardGameAIBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAIBaghChal is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.AI) the module directory; inheritance chain BoardGameAIBaghChal → BoardGameAIBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAIBaghChal.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameAIBaghChal` | `public BoardGameAIBaghChal(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler) : base(difficulty, boardGameHandler)` | constructor |
| `InitializeDifficulty` | `protected override void InitializeDifficulty()` | method |
| `CalculateMovementStageMove` | `public override Move CalculateMovementStageMove()` | method |
| `CalculatePreMovementStageMove` | `public override Move CalculatePreMovementStageMove()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere)
- [same namespace BoardGameAIPuluc](../BoardGameAIPuluc)
