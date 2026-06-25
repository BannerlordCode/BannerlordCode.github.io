---
title: "MBGameManager"
description: "Auto-generated class reference for MBGameManager."
---
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBGameManager : GameManagerBase`
**Base:** `GameManagerBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs`

## Overview

`MBGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnding` | `public bool IsEnding { get; }` |
| `IsLoaded` | `public bool IsLoaded { get; set; }` |

## Key Methods

### StartNewGame
`public static void StartNewGame(MBGameManager gameLoader)`

**Purpose:** Starts the `new game` flow or state machine.

```csharp
// Static call; no instance required
MBGameManager.StartNewGame(gameLoader);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.BeginGameStart(game);
```

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** Invoked when the `new campaign start` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnNewCampaignStart(game, starterObject);
```

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Prepares the resources, state, or bindings required by `sub module game objects`.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.InitializeSubModuleGameObjects(game);
```

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Registers `sub module objects` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.RegisterSubModuleObjects(false);
```

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes()`

**Purpose:** Registers `sub module types` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.RegisterSubModuleTypes();
```

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.AfterRegisterSubModuleObjects(false);
```

### InitializeGameStarter
`public override void InitializeGameStarter(Game game, IGameStarter starterObject)`

**Purpose:** Prepares the resources, state, or bindings required by `game starter`.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.InitializeGameStarter(game, starterObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the `game initialization finished` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameInitializationFinished(game);
```

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**Purpose:** Invoked when the `after game initialization finished` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnAfterGameInitializationFinished(game, initializerObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game)`

**Purpose:** Invoked when the `after game loaded` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnAfterGameLoaded(game);
```

### OnNewGameCreated
`public override void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Invoked when the `new game created` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnNewGameCreated(game, initializerObject);
```

### OnGameStart
`public override void OnGameStart(Game game, IGameStarter gameStarter)`

**Purpose:** Invoked when the `game start` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameStart(game, gameStarter);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameEnd(game);
```

### EndGame
`public static async void EndGame()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBGameManager.EndGame();
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Invoked when the `load finished` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnLoadFinished();
```

### CheckAndSetEnding
`public bool CheckAndSetEnding()`

**Purpose:** Verifies whether `and set ending` holds true for the current object.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
var result = mBGameManager.CheckAndSetEnding();
```

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**Purpose:** Invoked when the `session invitation accepted` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnSessionInvitationAccepted(targetGameType);
```

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer()`

**Purpose:** Invoked when the `platform requested multiplayer` event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnPlatformRequestedMultiplayer();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MBGameManager instance = ...;
```

## See Also

- [Area Index](../)