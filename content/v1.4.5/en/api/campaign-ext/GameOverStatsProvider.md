---
title: "GameOverStatsProvider"
description: "Auto-generated class reference for GameOverStatsProvider."
---
# GameOverStatsProvider

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverStatsProvider`
**Base:** none
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.GameOver/GameOverStatsProvider.cs`

## Overview

`GameOverStatsProvider` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameOverStats
`public IEnumerable<StatCategory> GetGameOverStats()`

**Purpose:** **Purpose:** Reads and returns the game over stats value held by the this instance.

```csharp
// Obtain an instance of GameOverStatsProvider from the subsystem API first
GameOverStatsProvider gameOverStatsProvider = ...;
var result = gameOverStatsProvider.GetGameOverStats();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameOverStatsProvider gameOverStatsProvider = ...;
gameOverStatsProvider.GetGameOverStats();
```

## See Also

- [Area Index](../)