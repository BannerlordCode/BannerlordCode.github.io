---
title: "BoardGameAIBase"
description: "BoardGameAIBase: a public class in SandBox; 17 exposed members (11 methods, 4 properties, 0 fields). Source: SandBox/BoardGames/AI/BoardGameAIBase.cs."
---
# BoardGameAIBase

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public abstract class BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIBase.cs`

## Overview

BoardGameAIBase lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAIBase.cs. It is a public class (abstract); the inheritance chain is BoardGameAIBase. It exposes 17 public/protected members: 11 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAIBase is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.AI) the module directory; inheritance chain BoardGameAIBase. The surface is method-led (methods 11/17, properties 4/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAIBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public BoardGameAIBase.AIState State` | property |
| `RecentMoveCalculated` | `public Move RecentMoveCalculated` | property |
| `AbortRequested` | `public bool AbortRequested` | property |
| `BoardGameAIBase` | `protected BoardGameAIBase(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler)` | constructor |
| `CalculatePreMovementStageMove` | `public virtual Move CalculatePreMovementStageMove()` | method |
| `CalculateMovementStageMove` | `public abstract Move CalculateMovementStageMove();` | method |
| `InitializeDifficulty` | `protected abstract void InitializeDifficulty();` | method |
| `WantsToForfeit` | `public virtual bool WantsToForfeit()` | method |
| `OnSetGameOver` | `public virtual void OnSetGameOver()` | method |
| `Initialize` | `public virtual void Initialize()` | method |
| `SetDifficulty` | `public void SetDifficulty(BoardGameHelper.AIDifficulty difficulty)` | method |
| `HowLongDidAIThinkAboutMove` | `public float HowLongDidAIThinkAboutMove()` | method |
| `UpdateThinkingAboutMove` | `public void UpdateThinkingAboutMove(float dt)` | method |
| `ResetThinking` | `public void ResetThinking()` | method |
| `CanMakeMove` | `public bool CanMakeMove()` | method |
| `AIState` | `public enum AIState` | property |
| `AIState` | `public enum AIState` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere)
- [same namespace BoardGameAIPuluc](../BoardGameAIPuluc)
