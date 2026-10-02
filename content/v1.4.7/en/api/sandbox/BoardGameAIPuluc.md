---
title: "BoardGameAIPuluc"
description: "BoardGameAIPuluc — class in SandBox.BoardGames.AI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# BoardGameAIPuluc

**Namespace:** `SandBox.BoardGames.AI`  
**Module:** `SandBox`  
**Type:** `public class BoardGameAIPuluc : BoardGameAIBase`  
**Base:** `BoardGameAIBase`  
**Source:** `SandBox/BoardGames/AI/BoardGameAIPuluc.cs`

## Overview

`BoardGameAIPuluc` is a named type in the SandBox.BoardGames.AI namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BoardGameAIBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoardGameAIPuluc`.
- **Instance members** (2): `InitializeDifficulty`, `CalculateMovementStageMove`.
- **Extension points** (2): `InitializeDifficulty`, `CalculateMovementStageMove`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateMovementStageMove` | method (override) | Overrides the base member. Takes no arguments. Returns `Move`. |
| `InitializeDifficulty` | method (override) | Overrides the base member. Takes no arguments. |
| `BoardGameAIPuluc` | ctor | Instance entry point. Takes 2 arguments: `BoardGameHelper.AIDifficulty difficulty`, `MissionBoardGameLogic boardGameHandler`. Returns ``. |

- Constructed as `public BoardGameAIPuluc(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler)`.

## Usage Example

```csharp
var boardGameAIPuluc = new BoardGameAIPuluc(difficulty, boardGameHandler);
boardGameAIPuluc.InitializeDifficulty();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/AI/BoardGameAIPuluc.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BoardGameAIBase](../BoardGameAIBase/) — `SandBox.BoardGames.AI`.
- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.
- [BoardGamePuluc](../BoardGamePuluc/) — `SandBox.BoardGames`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [PawnPuluc](../PawnPuluc/) — `SandBox.BoardGames.Pawns`.

Section: [api/sandbox/](../) — the other types in this bucket.
