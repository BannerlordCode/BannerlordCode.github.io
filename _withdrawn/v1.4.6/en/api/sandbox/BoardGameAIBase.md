---
title: "BoardGameAIBase"
description: "BoardGameAIBase: a public class in SandBox.BoardGames.AI; 17 exposed members (11 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/AI/BoardGameAIBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameAIBase

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public abstract class BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameAIBase lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAIBase.cs. It is a public class (abstract); the inheritance chain is BoardGameAIBase. It exposes 17 public/protected members: 11 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAIBase lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames.AI`, inheritance chain BoardGameAIBase. The surface is method-led (methods 11/17, properties 4/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAIBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal/)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane/)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere/)
- [same namespace BoardGameAIPuluc](../BoardGameAIPuluc/)
