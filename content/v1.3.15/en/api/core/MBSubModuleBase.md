---
title: "MBSubModuleBase"
description: "Auto-generated class reference for MBSubModuleBase."
---
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

**Purpose:** Invoked when the config changed event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnConfigChanged();
```

### OnGameLoaded
`public virtual void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public virtual void OnAfterGameLoaded(Game game)`

**Purpose:** Invoked when the after game loaded event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnAfterGameLoaded(game);
```

### OnNewGameCreated
`public virtual void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Invoked when the new game created event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnNewGameCreated(game, initializerObject);
```

### BeginGameStart
`public virtual void BeginGameStart(Game game)`

**Purpose:** Executes the BeginGameStart logic.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.BeginGameStart(game);
```

### OnCampaignStart
`public virtual void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Invoked when the campaign start event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnCampaignStart(game, starterObject);
```

### RegisterSubModuleObjects
`public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Registers sub module objects with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.RegisterSubModuleObjects(false);
```

### AfterRegisterSubModuleObjects
`public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Executes the AfterRegisterSubModuleObjects logic.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.AfterRegisterSubModuleObjects(false);
```

### OnMultiplayerGameStart
`public virtual void OnMultiplayerGameStart(Game game, object starterObject)`

**Purpose:** Invoked when the multiplayer game start event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnMultiplayerGameStart(game, starterObject);
```

### OnGameInitializationFinished
`public virtual void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the game initialization finished event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnGameInitializationFinished(game);
```

### OnAfterGameInitializationFinished
`public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)`

**Purpose:** Invoked when the after game initialization finished event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnAfterGameInitializationFinished(game, starterObject);
```

### DoLoading
`public virtual bool DoLoading(Game game)`

**Purpose:** Executes the DoLoading logic.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
var result = mBSubModuleBase.DoLoading(game);
```

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**Purpose:** Invoked when the game end event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnGameEnd(game);
```

### OnMissionBehaviorInitialize
`public virtual void OnMissionBehaviorInitialize(Mission mission)`

**Purpose:** Invoked when the mission behavior initialize event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnMissionBehaviorInitialize(mission);
```

### OnBeforeMissionBehaviorInitialize
`public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)`

**Purpose:** Invoked when the before mission behavior initialize event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnBeforeMissionBehaviorInitialize(mission);
```

### OnInitialState
`public virtual void OnInitialState()`

**Purpose:** Invoked when the initial state event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnInitialState();
```

### OnSubModuleActivated
`public virtual void OnSubModuleActivated()`

**Purpose:** Invoked when the sub module activated event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnSubModuleActivated();
```

### OnSubModuleDeactivated
`public virtual void OnSubModuleDeactivated()`

**Purpose:** Invoked when the sub module deactivated event is raised.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnSubModuleDeactivated();
```

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Prepares the resources, state, or bindings required by sub module game objects.

```csharp
// Obtain an instance of MBSubModuleBase from the subsystem API first
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.InitializeSubModuleGameObjects(game);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MBSubModuleBase instance = ...;
```

## See Also

- [Area Index](../)