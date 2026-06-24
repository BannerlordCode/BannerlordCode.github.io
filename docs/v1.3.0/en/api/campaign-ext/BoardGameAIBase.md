<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameAIBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameAIBase

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameAIBase`
**Base:** none
**File:** `SandBox/BoardGames/AI/BoardGameAIBase.cs`

## Overview

`BoardGameAIBase` lives in `SandBox.BoardGames.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public BoardGameAIBase.AIState State { get; }` |
| `RecentMoveCalculated` | `public Move RecentMoveCalculated { get; }` |
| `AbortRequested` | `public bool AbortRequested { get; }` |

## Key Methods

### CalculatePreMovementStageMove
`public virtual Move CalculatePreMovementStageMove()`

**Purpose:** Handles logic related to `calculate pre movement stage move`.

### CalculateMovementStageMove
`public abstract Move CalculateMovementStageMove()`

**Purpose:** Handles logic related to `calculate movement stage move`.

### WantsToForfeit
`public virtual bool WantsToForfeit()`

**Purpose:** Handles logic related to `wants to forfeit`.

### OnSetGameOver
`public virtual void OnSetGameOver()`

**Purpose:** Called when the `set game over` event is raised.

### Initialize
`public virtual void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SetDifficulty
`public void SetDifficulty(BoardGameHelper.AIDifficulty difficulty)`

**Purpose:** Sets the value or state of `difficulty`.

### HowLongDidAIThinkAboutMove
`public float HowLongDidAIThinkAboutMove()`

**Purpose:** Handles logic related to `how long did a i think about move`.

### UpdateThinkingAboutMove
`public void UpdateThinkingAboutMove(float dt)`

**Purpose:** Updates the state or data of `thinking about move`.

### ResetThinking
`public void ResetThinking()`

**Purpose:** Resets `thinking` to its initial state.

### CanMakeMove
`public bool CanMakeMove()`

**Purpose:** Checks whether the current object can `make move`.

## Usage Example

```csharp
var implementation = new CustomBoardGameAIBase();
```

## See Also

- [Complete Class Catalog](../catalog)