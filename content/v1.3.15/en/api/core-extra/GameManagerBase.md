---
title: "GameManagerBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameManagerBase`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameManagerBase

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerBase`
**Base:** none
**File:** `TaleWorlds.Core/GameManagerBase.cs`

## Overview

`GameManagerBase` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GameManagerBase Current { get; }` |
| `Game` | `public Game Game { get; set; }` |
| `Components` | `public IEnumerable<GameManagerComponent> Components { get; }` |
| `ApplicationTime` | `public abstract float ApplicationTime { get; }` |
| `CheatMode` | `public abstract bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public abstract bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public abstract bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public abstract UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddComponent
`public GameManagerComponent AddComponent(Type componentType)`

**Purpose:** Adds `component` to the current collection or state.

### GetComponent
`public GameManagerComponent GetComponent(Type componentType)`

**Purpose:** Gets the current value of `component`.

### RemoveComponent
`public void RemoveComponent(GameManagerComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnGameNetworkBegin
`public void OnGameNetworkBegin()`

**Purpose:** Called when the `game network begin` event is raised.

### OnGameNetworkEnd
`public void OnGameNetworkEnd()`

**Purpose:** Called when the `game network end` event is raised.

### OnPlayerConnect
`public void OnPlayerConnect(VirtualPlayer peer)`

**Purpose:** Called when the `player connect` event is raised.

### OnPlayerDisconnect
`public void OnPlayerDisconnect(VirtualPlayer peer)`

**Purpose:** Called when the `player disconnect` event is raised.

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### DoLoadingForGameManager
`public bool DoLoadingForGameManager()`

**Purpose:** Handles logic related to `do loading for game manager`.

### OnLoadFinished
`public virtual void OnLoadFinished()`

**Purpose:** Called when the `load finished` event is raised.

### InitializeGameStarter
`public virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`

**Purpose:** Initializes the state, resources, or bindings for `game starter`.

### OnGameStart
`public abstract void OnGameStart(Game game, IGameStarter gameStarter)`

**Purpose:** Called when the `game start` event is raised.

### BeginGameStart
`public abstract void BeginGameStart(Game game)`

**Purpose:** Handles logic related to `begin game start`.

### OnNewCampaignStart
`public abstract void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `new campaign start` event is raised.

### OnAfterCampaignStart
`public abstract void OnAfterCampaignStart(Game game)`

**Purpose:** Called when the `after campaign start` event is raised.

### RegisterSubModuleObjects
`public abstract void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `register sub module objects`.

### AfterRegisterSubModuleObjects
`public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `after register sub module objects`.

### OnGameInitializationFinished
`public abstract void OnGameInitializationFinished(Game game)`

**Purpose:** Called when the `game initialization finished` event is raised.

### OnNewGameCreated
`public abstract void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Called when the `new game created` event is raised.

### OnGameLoaded
`public abstract void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnAfterGameLoaded
`public abstract void OnAfterGameLoaded(Game game)`

**Purpose:** Called when the `after game loaded` event is raised.

### OnAfterGameInitializationFinished
`public abstract void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**Purpose:** Called when the `after game initialization finished` event is raised.

### RegisterSubModuleTypes
`public abstract void RegisterSubModuleTypes()`

**Purpose:** Handles logic related to `register sub module types`.

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Initializes the state, resources, or bindings for `sub module game objects`.

## Usage Example

```csharp
var implementation = new CustomGameManagerBase();
```

## See Also

- [Complete Class Catalog](../catalog)