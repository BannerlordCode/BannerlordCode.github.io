---
title: "BoardGameAITablut"
description: "BoardGameAITablut: a public class in SandBox, inheriting BoardGameAIBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/BoardGames/AI/BoardGameAITablut.cs."
---
# BoardGameAITablut

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class BoardGameAITablut : BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAITablut.cs`

## Overview

BoardGameAITablut lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAITablut.cs. It is a public class, implementing/inheriting BoardGameAIBase; the inheritance chain is BoardGameAITablut → BoardGameAIBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAITablut is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.AI) the module directory; inheritance chain BoardGameAITablut → BoardGameAIBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAITablut.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameAITablut` | `public BoardGameAITablut(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler) : base(difficulty, boardGameHandler)` | constructor |
| `Initialize` | `public override void Initialize()` | method |
| `OnSetGameOver` | `public override void OnSetGameOver()` | method |
| `CalculateMovementStageMove` | `public override Move CalculateMovementStageMove()` | method |
| `InitializeDifficulty` | `protected override void InitializeDifficulty()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal)
- [same namespace BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere)
