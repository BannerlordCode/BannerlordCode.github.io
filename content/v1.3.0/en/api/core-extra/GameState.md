---
title: "GameState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameState`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/GameState.cs`

## Overview

`GameState` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Predecessor` | `public GameState Predecessor { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Listeners` | `public IReadOnlyCollection<IGameStateListener> Listeners { get; set; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; set; }` |
| `IsMusicMenuState` | `public virtual bool IsMusicMenuState { get; }` |
| `IsMenuState` | `public virtual bool IsMenuState { get; }` |
| `Activated` | `public bool Activated { get; }` |

## Key Methods

### RegisterListener
`public bool RegisterListener(IGameStateListener listener)`

**Purpose:** Handles logic related to `register listener`.

### UnregisterListener
`public bool UnregisterListener(IGameStateListener listener)`

**Purpose:** Handles logic related to `unregister listener`.

## Usage Example

```csharp
var implementation = new CustomGameState();
```

## See Also

- [Complete Class Catalog](../catalog)