---
title: "BoardGameAIKonane"
description: "Auto-generated class reference for BoardGameAIKonane."
---
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

**Purpose:** Calculates the current value or result of `movement stage move`.

```csharp
// Obtain an instance of BoardGameAIKonane from the subsystem API first
BoardGameAIKonane boardGameAIKonane = ...;
var result = boardGameAIKonane.CalculateMovementStageMove();
```

### CalculatePreMovementStageMove
`public override Move CalculatePreMovementStageMove()`

**Purpose:** Calculates the current value or result of `pre movement stage move`.

```csharp
// Obtain an instance of BoardGameAIKonane from the subsystem API first
BoardGameAIKonane boardGameAIKonane = ...;
var result = boardGameAIKonane.CalculatePreMovementStageMove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameAIKonane boardGameAIKonane = ...;
boardGameAIKonane.CalculateMovementStageMove();
```

## See Also

- [Area Index](../)