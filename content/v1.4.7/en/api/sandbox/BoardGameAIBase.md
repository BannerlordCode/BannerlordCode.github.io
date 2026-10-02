---
title: "BoardGameAIBase"
description: "BoardGameAIBase — class in SandBox.BoardGames.AI. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# BoardGameAIBase

**Namespace:** `SandBox.BoardGames.AI`  
**Module:** `SandBox`  
**Type:** `public abstract class BoardGameAIBase`  
**Source:** `SandBox/BoardGames/AI/BoardGameAIBase.cs`

## Overview

`BoardGameAIBase` is a named type in the SandBox.BoardGames.AI namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoardGameAIBase`.
- **Instance members** (15): `State`, `RecentMoveCalculated`, `AbortRequested`, `CalculatePreMovementStageMove`, `CalculateMovementStageMove`, `InitializeDifficulty`, ….
- **Extension points** (6): `CalculatePreMovementStageMove`, `CalculateMovementStageMove`, `InitializeDifficulty`, `WantsToForfeit`, `OnSetGameOver`, `Initialize`.
- **Data and constants** (2): `MayForfeit`, `MaxDepth`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateMovementStageMove` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `Move`. |
| `CalculatePreMovementStageMove` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `Move`. |
| `Initialize` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `OnSetGameOver` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `WantsToForfeit` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. |
| `AbortRequested` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `AIState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `CanMakeMove` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HowLongDidAIThinkAboutMove` | method | Instance entry point. Takes no arguments. Returns `float`. |
| `InitializeDifficulty` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `RecentMoveCalculated` | property | Instance entry point `Move` property. Read it for current state; a declared setter writes that state in place. |
| `ResetThinking` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetDifficulty` | method | Instance entry point. Takes 1 argument: `BoardGameHelper.AIDifficulty difficulty`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `State` | property | Instance entry point `BoardGameAIBase.AIState` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateThinkingAboutMove` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `BoardGameAIBase` | ctor | Protected — for subclasses only. Takes 2 arguments: `BoardGameHelper.AIDifficulty difficulty`, `MissionBoardGameLogic boardGameHandler`. Returns ``. |
| `MaxDepth` | field | Protected — for subclasses only `int` field — direct storage with no validation or notification. |
| `MayForfeit` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |

- Constructed as `protected BoardGameAIBase(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler)`.

## Usage Example

```csharp
// BoardGameAIBase is read through its properties:
//   State : BoardGameAIBase.AIState
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/AI/BoardGameAIBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.

Section: [api/sandbox/](../) — the other types in this bucket.
