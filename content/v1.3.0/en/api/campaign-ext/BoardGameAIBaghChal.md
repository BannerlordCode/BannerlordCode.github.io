---
title: "BoardGameAIBaghChal"
description: "Auto-generated class reference for BoardGameAIBaghChal."
---
# BoardGameAIBaghChal

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameAIBaghChal : BoardGameAIBase`
**Base:** `BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIBaghChal.cs`

## Overview

`BoardGameAIBaghChal` lives in `SandBox.BoardGames.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CalculateMovementStageMove
`public override Move CalculateMovementStageMove()`

**Purpose:** Calculates the current value or result of movement stage move.

```csharp
// Obtain an instance of BoardGameAIBaghChal from the subsystem API first
BoardGameAIBaghChal boardGameAIBaghChal = ...;
var result = boardGameAIBaghChal.CalculateMovementStageMove();
```

### CalculatePreMovementStageMove
`public override Move CalculatePreMovementStageMove()`

**Purpose:** Calculates the current value or result of pre movement stage move.

```csharp
// Obtain an instance of BoardGameAIBaghChal from the subsystem API first
BoardGameAIBaghChal boardGameAIBaghChal = ...;
var result = boardGameAIBaghChal.CalculatePreMovementStageMove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameAIBaghChal boardGameAIBaghChal = ...;
boardGameAIBaghChal.CalculateMovementStageMove();
```

## See Also

- [Area Index](../)