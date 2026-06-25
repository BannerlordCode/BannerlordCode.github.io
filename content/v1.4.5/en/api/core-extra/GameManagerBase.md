---
title: "GameManagerBase"
description: "Auto-generated class reference for GameManagerBase."
---
# GameManagerBase

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerBase`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameManagerBase.cs`

## Overview

`GameManagerBase` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GameManagerBase Current { get; }` |
| `Game` | `public Game Game { get; set; }` |
| `ApplicationTime` | `public abstract float ApplicationTime { get; }` |
| `CheatMode` | `public abstract bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public abstract bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public abstract bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public abstract UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.Initialize();
```

### AddComponent
`public GameManagerComponent AddComponent(Type componentType)`

**Purpose:** Adds `component` to the current collection or state.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
var result = gameManagerBase.AddComponent(componentType);
```

### GetComponent
`public GameManagerComponent GetComponent(Type componentType)`

**Purpose:** Reads and returns the `component` value held by the current object.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
var result = gameManagerBase.GetComponent(componentType);
```

### RemoveComponent
`public void RemoveComponent(GameManagerComponent component)`

**Purpose:** Removes `component` from the current collection or state.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.RemoveComponent(component);
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnTick(0);
```

### OnGameNetworkBegin
`public void OnGameNetworkBegin()`

**Purpose:** Invoked when the `game network begin` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameNetworkBegin();
```

### OnGameNetworkEnd
`public void OnGameNetworkEnd()`

**Purpose:** Invoked when the `game network end` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameNetworkEnd();
```

### OnPlayerConnect
`public void OnPlayerConnect(VirtualPlayer peer)`

**Purpose:** Invoked when the `player connect` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnPlayerConnect(peer);
```

### OnPlayerDisconnect
`public void OnPlayerDisconnect(VirtualPlayer peer)`

**Purpose:** Invoked when the `player disconnect` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnPlayerDisconnect(peer);
```

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameEnd(game);
```

### DoLoadingForGameManager
`public bool DoLoadingForGameManager()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
var result = gameManagerBase.DoLoadingForGameManager();
```

### OnLoadFinished
`public virtual void OnLoadFinished()`

**Purpose:** Invoked when the `load finished` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnLoadFinished();
```

### InitializeGameStarter
`public virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`

**Purpose:** Prepares the resources, state, or bindings required by `game starter`.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.InitializeGameStarter(game, starterObject);
```

### OnGameStart
`public abstract void OnGameStart(Game game, IGameStarter gameStarter)`

**Purpose:** Invoked when the `game start` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameStart(game, gameStarter);
```

### BeginGameStart
`public abstract void BeginGameStart(Game game)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.BeginGameStart(game);
```

### OnNewCampaignStart
`public abstract void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** Invoked when the `new campaign start` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnNewCampaignStart(game, starterObject);
```

### OnAfterCampaignStart
`public abstract void OnAfterCampaignStart(Game game)`

**Purpose:** Invoked when the `after campaign start` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnAfterCampaignStart(game);
```

### RegisterSubModuleObjects
`public abstract void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Registers `sub module objects` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.RegisterSubModuleObjects(false);
```

### AfterRegisterSubModuleObjects
`public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.AfterRegisterSubModuleObjects(false);
```

### OnGameInitializationFinished
`public abstract void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the `game initialization finished` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameInitializationFinished(game);
```

### OnNewGameCreated
`public abstract void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Invoked when the `new game created` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnNewGameCreated(game, initializerObject);
```

### OnGameLoaded
`public abstract void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public abstract void OnAfterGameLoaded(Game game)`

**Purpose:** Invoked when the `after game loaded` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnAfterGameLoaded(game);
```

### OnAfterGameInitializationFinished
`public abstract void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**Purpose:** Invoked when the `after game initialization finished` event is raised.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnAfterGameInitializationFinished(game, initializerObject);
```

### RegisterSubModuleTypes
`public abstract void RegisterSubModuleTypes()`

**Purpose:** Registers `sub module types` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.RegisterSubModuleTypes();
```

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Prepares the resources, state, or bindings required by `sub module game objects`.

```csharp
// Obtain an instance of GameManagerBase from the subsystem API first
GameManagerBase gameManagerBase = ...;
gameManagerBase.InitializeSubModuleGameObjects(game);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameManagerBase instance = ...;
```

## See Also

- [Area Index](../)