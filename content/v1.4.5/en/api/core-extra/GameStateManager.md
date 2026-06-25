---
title: "GameStateManager"
description: "Auto-generated class reference for GameStateManager."
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## Overview

`GameStateManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameStateManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GameStateManager Current { get; set; }` |
| `CurrentType` | `public GameStateManagerType CurrentType { get; }` |
| `Owner` | `public IGameStateManagerOwner Owner { get; }` |
| `ActiveState` | `public GameState ActiveState { get; }` |

## Key Methods

### RegisterListener
`public bool RegisterListener(IGameStateManagerListener listener)`

**Purpose:** Registers `listener` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
var result = gameStateManager.RegisterListener(listener);
```

### UnregisterListener
`public bool UnregisterListener(IGameStateManagerListener listener)`

**Purpose:** Unregisters `listener` from the current system.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
var result = gameStateManager.UnregisterListener(listener);
```

### RegisterActiveStateDisableRequest
`public void RegisterActiveStateDisableRequest(object requestingInstance)`

**Purpose:** Registers `active state disable request` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.RegisterActiveStateDisableRequest(requestingInstance);
```

### UnregisterActiveStateDisableRequest
`public void UnregisterActiveStateDisableRequest(object requestingInstance)`

**Purpose:** Unregisters `active state disable request` from the current system.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.UnregisterActiveStateDisableRequest(requestingInstance);
```

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**Purpose:** Invoked when the `saved game load finished` event is raised.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.OnSavedGameLoadFinished();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.OnTick(0);
```

### PushState
`public void PushState(GameState gameState, int level = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.PushState(gameState, 0);
```

### PopState
`public void PopState(int level = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.PopState(0);
```

### CleanAndPushState
`public void CleanAndPushState(GameState gameState, int level = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.CleanAndPushState(gameState, 0);
```

### CleanStates
`public void CleanStates(int level = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameStateManager from the subsystem API first
GameStateManager gameStateManager = ...;
gameStateManager.CleanStates(0);
```

## Usage Example

```csharp
var manager = GameStateManager.Current;
```

## See Also

- [Area Index](../)