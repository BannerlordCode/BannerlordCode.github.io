---
title: "AIState"
description: "The six-state machine governing a board-game AI's background thinking thread — NeedsToRun, ReadyToRun, Running, AbortRequested, Aborted and Done, declared nested inside BoardGameAIBase and driven entirely through a lock plus an AsyncTask."
---

# AIState

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox.BoardGames`
**Type:** `public enum AIState`
**Base:** `System.Enum` (nested inside `BoardGameAIBase`)
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.AI/BoardGameAIBase.cs`

## Overview

Board-game AI does not think instantly. When the player's turn ends, the opponent needs a visible pause — long enough to feel like an opponent is considering the board — before its move appears. This enum is that pause, expressed as a state machine over a background thread.

It is declared nested inside `BoardGameAIBase`, so the compile-time name is `BoardGameAIBase.AIState` and the containing class is the only thing that ever writes it. The containing class exposes it read-only through `public AIState State => _state`, backed by a `private volatile AIState _state` guarded by a `private readonly object _stateLock`. The actual thinking runs on an `AsyncTask` created in the base constructor, wrapping a `ManagedDelegate` bound to `UpdateThinkingAboutMoveOnSeparateThread`.

The six values, in declaration order at `BoardGameAIBase.cs:13-18`: `NeedsToRun`, `ReadyToRun`, `Running`, `AbortRequested`, `Aborted`, `Done`.

## Mental Model

Read the machine as **one forward path and one abort path**, and note that `Aborted` is terminal in practice while `Done` is the success terminal.

The forward path is driven by the main thread's `UpdateThinkingAboutMove(dt)`. That method does two things: it accumulates `_aiDecisionTimer += dt`, and then, under the lock, if the state is still `NeedsToRun` it flips to `ReadyToRun` and calls `_aiTask.Invoke()`. So the AI starts thinking on the **first tick of a new turn**, and every subsequent tick is spent only accumulating the timer — the dispatch is idempotent because the state has already moved past `NeedsToRun`.

The worker then runs `UpdateThinkingAboutMoveOnSeparateThread`, which branches on `BoardGameHandler.Board.InPreMovementStage` and calls either `CalculatePreMovementStageOnSeparateThread` or `CalculateMovementStageMoveOnSeparateThread`. Both do the same three-step dance through two private helpers:

- `OnBeginSeparateThread()` — under the lock, if `AbortRequested` it sets `Aborted` and returns `false` so the calculation is skipped; otherwise it sets `Running` and returns `true`.
- the virtual/abstract calculation runs.
- `OnExitSeparateThread(calculatedMove)` — under the lock, if `AbortRequested` it sets `Aborted` and throws the move away (`RecentMoveCalculated = Move.Invalid`); otherwise it sets `Done` and stores the move.

**The abort path** is entered from `OnSetGameOver()`, which under the lock promotes `ReadyToRun` or `Running` to `AbortRequested` and nothing else. It then calls `_aiTask.Wait()` — a hard join on the worker thread — before `Reset()`. That ordering is the important part: game-over cannot return until the thinking thread has actually noticed the abort flag, which it can only do at the next `OnBeginSeparateThread` / `OnExitSeparateThread` checkpoint. A long-running search therefore delays game over by exactly as long as one search iteration.

**The consumer gate** is `CanMakeMove()`. It is not `State == Done` — it is `State == Done && _aiDecisionTimer >= 1.5f`, with the `1.5f` inlined as a literal that duplicates the private `AIDecisionDuration = 1.5f` constant rather than referencing it. So even after the thread reports `Done`, the move is withheld for at least a second and a half of accumulated `dt`. That double-gate (thread completion *and* elapsed think time) is the whole "visible thinking pause" effect.

`Reset()` — called from `OnSetGameOver` and from `Initialize()` — sets `RecentMoveCalculated = Move.Invalid`, sets `MayForfeit = true`, calls `ResetThinking()` (timer to zero, state back to `NeedsToRun`), and zeroes `MaxDepth`.

Two subtleties worth internalising. **`Aborted` and `Aborted` are the same value** — a check written as `State == AIState.Aborted` compiles and reads as a typo, because the enum member and the `_state = AIState.Aborted` assignment look alike; the real member name is `Aborted`. And **`AbortRequested` is both a state and a query**: `public bool AbortRequested => State == AIState.AbortRequested`, so inside the base class `AbortRequested` alone reads as the boolean and `AIState.AbortRequested` as the enum value.

## Key Members

| Member | Value | What it is for |
| --- | --- | --- |
| `NeedsToRun` | 0 | The reset state and the normal starting point. `ResetThinking` puts the state here after zeroing the think timer, and `UpdateThinkingAboutMove` looks for exactly this value to dispatch the worker thread. If the AI is not in `NeedsToRun`, ticking does nothing but accumulate the timer. |
| `ReadyToRun` | 1 | Set by `UpdateThinkingAboutMove` under the lock at the moment `_aiTask.Invoke()` is called — dispatched, not yet started. It exists as a distinct state so `OnSetGameOver` can distinguish "asked but not begun" from "actively searching", and abort either. |
| `Running` | 2 | Set by `OnBeginSeparateThread` when the worker actually begins a calculation and no abort was pending. This is the state a long minimax search sits in, and the one that makes `OnSetGameOver`'s `_aiTask.Wait()` expensive. |
| `AbortRequested` | 3 | The cooperative cancellation signal. Written only by `OnSetGameOver`, which promotes `ReadyToRun` or `Running` into it and then joins the thread. It is also the *only* value that `public bool AbortRequested => State == AIState.AbortRequested` tests, so inside the base class the bare name reads as a boolean rather than the enum value. |
| `Aborted` | 4 | The cancellation outcome. Set by `OnBeginSeparateThread` when an abort was already pending (skipping the calculation) or by `OnExitSeparateThread` when one completed but was discarded. In the latter case `RecentMoveCalculated` is forced to `Move.Invalid`. Nothing transitions out of it except `Reset()`. |
| `Done` | 5 | The success terminal. Set by `OnExitSeparateThread` alongside storing the calculated `Move`. It is necessary but **not sufficient** for the move to be played — `CanMakeMove()` additionally requires `_aiDecisionTimer >= 1.5f`, which is what produces the visible thinking pause. |

## Real Example

Drive the state machine from a board-game mission logic, the way the shipped flow does:

```csharp
ai.UpdateThinkingAboutMove(dt);
if (ai.State == BoardGameAIBase.AIState.Done)
{
    Debug.Print("thread done after " + ai.HowLongDidAIThinkAboutMove() + "s", 0);
}
```

Only play the move once both gates are satisfied — state `Done` alone will make the opponent feel instant:

```csharp
ai.UpdateThinkingAboutMove(dt);
if (ai.CanMakeMove())
{
    Move move = ai.RecentMoveCalculated;
    Debug.Print("playing move, target = " + move.TargetIndex, 0);
}
```

Abort cleanly on game over, understanding that this blocks until the worker checkpoints:

```csharp
ai.OnSetGameOver();
Debug.Print("aborted, state = " + ai.State, 0);
```

Reset for a new turn and confirm the machine is back at its start:

```csharp
ai.ResetThinking();
Debug.Print("state = " + ai.State + ", timer = " + ai.HowLongDidAIThinkAboutMove(), 0);
```

Change difficulty mid-game and note that it re-runs initialisation without touching the state machine:

```csharp
ai.SetDifficulty(AIDifficulty.Hard);
Debug.Print("now at depth " + ai.MaxDepth, 0);
```

## Risks and Boundaries

- **Declared nested inside `BoardGameAIBase`.** The compile-time name is `BoardGameAIBase.AIState`; importing the namespace alone is not enough.
- **`Aborted` is a very short name.** Writing `AIState.Aborted` next to an assignment `_state = AIState.Aborted;` is easy to misread as a duplicate; the enum member is `Aborted` and there is no separate `Abort` state.
- **`AbortRequested` is overloaded between a state and a query property.** `State == AIState.AbortRequested` tests the state; the bare `AbortRequested` inside the base class reads as a boolean property.
- **State `Done` does not mean "playable".** `CanMakeMove()` additionally requires a 1.5-second accumulated think time. Gating on `State == Done` removes the opponent's visible pause.
- **The `1.5f` is inlined in `CanMakeMove` rather than referencing `AIDecisionDuration`.** The two are independent literals; changing one does not change the other.
- **Abort is cooperative, not preemptive.** `OnSetGameOver` sets the flag and then blocks on `_aiTask.Wait()`. The worker only observes it at the next checkpoint, so game over stalls for up to one search iteration.
- **The worker touches campaign state off the main thread.** `CalculateMovementStageMove` and `CalculatePreMovementStageMove` run on the `AsyncTask`; any shared mutable state they read must be thread-safe, and the `lock (_stateLock)` only protects `_state`, not the board.
- **`RecentMoveCalculated` is set to `Move.Invalid` on abort and on reset.** Treat `Invalid` as "no move", never as a playable move.
- **`Reset()` sets `MayForfeit = true`,** so the AI is willing to resign immediately after any reset. A derived class that wants to hold out must set it back.
- **Enum values are ordinals** and are compared by name throughout the base class, but they are never serialised — the state machine does not survive a save.

## Cross-version note

In v1.4.5 the enum has exactly six values declared at `BoardGameAIBase.cs:13-18`, and every transition is performed inside `BoardGameAIBase`'s own private helpers. There is no seventh "Paused" or "Idle" state; `NeedsToRun` covers both.

## Dependencies

- Owner: [BoardGameAIBase](../BoardGameAIBase) is the only writer — it holds `private volatile AIState _state`, guards it with `_stateLock`, and exposes it read-only as `State`.
- Threading: `ITask` and `AsyncTask.CreateWithDelegate` are what run the search off the main thread; `ManagedDelegate` binds the worker entry point.
- Difficulty and board: [AIDifficulty](../../system/AIDifficulty) selects the search parameters via `InitializeDifficulty`, and [MissionBoardGameLogic](../MissionBoardGameLogic) supplies the board whose `InPreMovementStage` selects which calculation runs.
- Result type: [Move](../Move) is what a successful calculation produces, and `Move.Invalid` is the "nothing" sentinel used on abort and reset.
- Bucket index: [campaign-ext API section](../)
