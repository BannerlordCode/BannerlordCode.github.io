---
title: "MBGameManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGameManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBGameManager : GameManagerBase`
**Base:** `GameManagerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs`

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

**Purpose:** Handles logic related to `start new game`.

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Handles logic related to `begin game start`.

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `new campaign start` event is raised.

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Initializes the state, resources, or bindings for `sub module game objects`.

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `register sub module objects`.

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes()`

**Purpose:** Handles logic related to `register sub module types`.

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `after register sub module objects`.

### InitializeGameStarter
`public override void InitializeGameStarter(Game game, IGameStarter starterObject)`

**Purpose:** Initializes the state, resources, or bindings for `game starter`.

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Called when the `game initialization finished` event is raised.

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**Purpose:** Called when the `after game initialization finished` event is raised.

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game)`

**Purpose:** Called when the `after game loaded` event is raised.

### OnNewGameCreated
`public override void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Called when the `new game created` event is raised.

### OnGameStart
`public override void OnGameStart(Game game, IGameStarter gameStarter)`

**Purpose:** Called when the `game start` event is raised.

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### EndGame
`public static async void EndGame()`

**Purpose:** Handles logic related to `end game`.

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Called when the `load finished` event is raised.

### CheckAndSetEnding
`public bool CheckAndSetEnding()`

**Purpose:** Handles logic related to `check and set ending`.

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**Purpose:** Called when the `session invitation accepted` event is raised.

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer()`

**Purpose:** Called when the `platform requested multiplayer` event is raised.

## Usage Example

```csharp
var implementation = new CustomMBGameManager();
```

## See Also

- [Complete Class Catalog](../catalog)