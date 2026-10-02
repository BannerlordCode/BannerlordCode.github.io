---
title: "BoardGameAISeega"
description: "BoardGameAISeega: a public class in SandBox.BoardGames.AI, inheriting BoardGameAIBase; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/AI/BoardGameAISeega.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameAISeega

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class BoardGameAISeega : BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAISeega.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameAISeega lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAISeega.cs. It is a public class, implementing/inheriting BoardGameAIBase; the inheritance chain is BoardGameAISeega → BoardGameAIBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAISeega lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames.AI`, inheritance chain BoardGameAISeega → BoardGameAIBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAISeega.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BoardGameAISeega` | `public BoardGameAISeega(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler) : base(difficulty, boardGameHandler)` | constructor |
| `InitializeDifficulty` | `protected override void InitializeDifficulty()` | method |
| `CalculateMovementStageMove` | `public override Move CalculateMovementStageMove()` | method |
| `WantsToForfeit` | `public override bool WantsToForfeit()` | method |
| `CalculatePreMovementStageMove` | `public override Move CalculatePreMovementStageMove()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BoardGameAIBase](../BoardGameAIBase/)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal/)
- [same namespace BoardGameAIBase](../BoardGameAIBase/)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane/)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere/)
