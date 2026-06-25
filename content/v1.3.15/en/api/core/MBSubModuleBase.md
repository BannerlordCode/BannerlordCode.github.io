---
title: "MBSubModuleBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSubModuleBase`
- [← Area / Back to core](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSubModuleBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBSubModuleBase`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## Overview

`MBSubModuleBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnConfigChanged
`public virtual void OnConfigChanged()`

**Purpose:** Called when the `config changed` event is raised.

### OnGameLoaded
`public virtual void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnAfterGameLoaded
`public virtual void OnAfterGameLoaded(Game game)`

**Purpose:** Called when the `after game loaded` event is raised.

### OnNewGameCreated
`public virtual void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Called when the `new game created` event is raised.

### BeginGameStart
`public virtual void BeginGameStart(Game game)`

**Purpose:** Handles logic related to `begin game start`.

### OnCampaignStart
`public virtual void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `campaign start` event is raised.

### RegisterSubModuleObjects
`public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `register sub module objects`.

### AfterRegisterSubModuleObjects
`public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `after register sub module objects`.

### OnMultiplayerGameStart
`public virtual void OnMultiplayerGameStart(Game game, object starterObject)`

**Purpose:** Called when the `multiplayer game start` event is raised.

### OnGameInitializationFinished
`public virtual void OnGameInitializationFinished(Game game)`

**Purpose:** Called when the `game initialization finished` event is raised.

### OnAfterGameInitializationFinished
`public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)`

**Purpose:** Called when the `after game initialization finished` event is raised.

### DoLoading
`public virtual bool DoLoading(Game game)`

**Purpose:** Handles logic related to `do loading`.

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### OnMissionBehaviorInitialize
`public virtual void OnMissionBehaviorInitialize(Mission mission)`

**Purpose:** Called when the `mission behavior initialize` event is raised.

### OnBeforeMissionBehaviorInitialize
`public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)`

**Purpose:** Called when the `before mission behavior initialize` event is raised.

### OnInitialState
`public virtual void OnInitialState()`

**Purpose:** Called when the `initial state` event is raised.

### OnSubModuleActivated
`public virtual void OnSubModuleActivated()`

**Purpose:** Called when the `sub module activated` event is raised.

### OnSubModuleDeactivated
`public virtual void OnSubModuleDeactivated()`

**Purpose:** Called when the `sub module deactivated` event is raised.

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Initializes the state, resources, or bindings for `sub module game objects`.

## Usage Example

```csharp
var implementation = new CustomMBSubModuleBase();
```

## See Also

- [Complete Class Catalog](../catalog)