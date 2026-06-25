---
title: "BoardGameAITablut"
description: "Auto-generated class reference for BoardGameAITablut."
---
# BoardGameAITablut

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameAITablut : BoardGameAIBase`
**Base:** `BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAITablut.cs`

## Overview

`BoardGameAITablut` lives in `SandBox.BoardGames.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of BoardGameAITablut from the subsystem API first
BoardGameAITablut boardGameAITablut = ...;
boardGameAITablut.Initialize();
```

### OnSetGameOver
`public override void OnSetGameOver()`

**Purpose:** Invoked when the set game over event is raised.

```csharp
// Obtain an instance of BoardGameAITablut from the subsystem API first
BoardGameAITablut boardGameAITablut = ...;
boardGameAITablut.OnSetGameOver();
```

### CalculateMovementStageMove
`public override Move CalculateMovementStageMove()`

**Purpose:** Calculates the current value or result of movement stage move.

```csharp
// Obtain an instance of BoardGameAITablut from the subsystem API first
BoardGameAITablut boardGameAITablut = ...;
var result = boardGameAITablut.CalculateMovementStageMove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameAITablut boardGameAITablut = ...;
boardGameAITablut.Initialize();
```

## See Also

- [Area Index](../)