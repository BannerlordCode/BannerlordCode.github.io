---
title: "GameOverStatsProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverStatsProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverStatsProvider

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverStatsProvider`
**Base:** none
**File:** `SandBox.ViewModelCollection/GameOver/GameOverStatsProvider.cs`

## Overview

`GameOverStatsProvider` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameOverStats
`public IEnumerable<StatCategory> GetGameOverStats()`

**Purpose:** Gets the current value of `game over stats`.

## Usage Example

```csharp
var value = new GameOverStatsProvider();
value.GetGameOverStats();
```

## See Also

- [Complete Class Catalog](../catalog)