---
title: "BoardGameAIPuluc"
description: "BoardGameAIPuluc: a public class in SandBox, inheriting BoardGameAIBase; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/BoardGames/AI/BoardGameAIPuluc.cs."
---
# BoardGameAIPuluc

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class BoardGameAIPuluc : BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIPuluc.cs`

## Overview

BoardGameAIPuluc lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAIPuluc.cs. It is a public class, implementing/inheriting BoardGameAIBase; the inheritance chain is BoardGameAIPuluc → BoardGameAIBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAIPuluc is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.AI) the module directory; inheritance chain BoardGameAIPuluc → BoardGameAIBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAIPuluc.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameAIPuluc` | `public BoardGameAIPuluc(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler) : base(difficulty, boardGameHandler)` | constructor |
| `InitializeDifficulty` | `protected override void InitializeDifficulty()` | method |
| `CalculateMovementStageMove` | `public override Move CalculateMovementStageMove()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal)
- [same namespace BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere)
