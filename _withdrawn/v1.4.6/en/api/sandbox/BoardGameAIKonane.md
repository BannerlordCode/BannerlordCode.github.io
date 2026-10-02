---
title: "BoardGameAIKonane"
description: "BoardGameAIKonane: a public class in SandBox.BoardGames.AI, inheriting BoardGameAIBase; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/AI/BoardGameAIKonane.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameAIKonane

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class BoardGameAIKonane : BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIKonane.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameAIKonane lives in the SandBox module, source file SandBox/BoardGames/AI/BoardGameAIKonane.cs. It is a public class, implementing/inheriting BoardGameAIBase; the inheritance chain is BoardGameAIKonane → BoardGameAIBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAIKonane lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames.AI`, inheritance chain BoardGameAIKonane → BoardGameAIBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/BoardGameAIKonane.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BoardGameAIKonane` | `public BoardGameAIKonane(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler) : base(difficulty, boardGameHandler)` | constructor |
| `InitializeDifficulty` | `protected override void InitializeDifficulty()` | method |
| `CalculateMovementStageMove` | `public override Move CalculateMovementStageMove()` | method |
| `CalculatePreMovementStageMove` | `public override Move CalculatePreMovementStageMove()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BoardGameAIBase](../BoardGameAIBase/)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal/)
- [same namespace BoardGameAIBase](../BoardGameAIBase/)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere/)
- [same namespace BoardGameAIPuluc](../BoardGameAIPuluc/)
