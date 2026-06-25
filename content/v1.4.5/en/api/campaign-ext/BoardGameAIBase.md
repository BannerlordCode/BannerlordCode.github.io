---
title: "BoardGameAIBase"
description: "Auto-generated class reference for BoardGameAIBase."
---
# BoardGameAIBase

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameAIBase`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.AI/BoardGameAIBase.cs`

## Overview

`BoardGameAIBase` lives in `SandBox.BoardGames.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RecentMoveCalculated` | `public Move RecentMoveCalculated { get; }` |

## Key Methods

### CalculatePreMovementStageMove
`public virtual Move CalculatePreMovementStageMove()`

**Purpose:** Calculates the current value or result of `pre movement stage move`.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.CalculatePreMovementStageMove();
```

### CalculateMovementStageMove
`public abstract Move CalculateMovementStageMove()`

**Purpose:** Calculates the current value or result of `movement stage move`.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.CalculateMovementStageMove();
```

### WantsToForfeit
`public virtual bool WantsToForfeit()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.WantsToForfeit();
```

### OnSetGameOver
`public virtual void OnSetGameOver()`

**Purpose:** Invoked when the `set game over` event is raised.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.OnSetGameOver();
```

### Initialize
`public virtual void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.Initialize();
```

### SetDifficulty
`public void SetDifficulty(AIDifficulty difficulty)`

**Purpose:** Assigns a new value to `difficulty` and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.SetDifficulty(difficulty);
```

### HowLongDidAIThinkAboutMove
`public float HowLongDidAIThinkAboutMove()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.HowLongDidAIThinkAboutMove();
```

### UpdateThinkingAboutMove
`public void UpdateThinkingAboutMove(float dt)`

**Purpose:** Recalculates and stores the latest representation of `thinking about move`.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.UpdateThinkingAboutMove(0);
```

### ResetThinking
`public void ResetThinking()`

**Purpose:** Returns `thinking` to its default or initial condition.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.ResetThinking();
```

### CanMakeMove
`public bool CanMakeMove()`

**Purpose:** Checks whether the current object meets the preconditions for `make move`.

```csharp
// Obtain an instance of BoardGameAIBase from the subsystem API first
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.CanMakeMove();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BoardGameAIBase instance = ...;
```

## See Also

- [Area Index](../)