<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameAIKonane`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameAIKonane

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameAIKonane : BoardGameAIBase`
**Base:** `BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIKonane.cs`

## Overview

`BoardGameAIKonane` lives in `SandBox.BoardGames.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CalculateMovementStageMove
`public override Move CalculateMovementStageMove()`

**Purpose:** Handles logic related to `calculate movement stage move`.

### CalculatePreMovementStageMove
`public override Move CalculatePreMovementStageMove()`

**Purpose:** Handles logic related to `calculate pre movement stage move`.

## Usage Example

```csharp
var value = new BoardGameAIKonane();
value.CalculateMovementStageMove();
```

## See Also

- [Complete Class Catalog](../catalog)