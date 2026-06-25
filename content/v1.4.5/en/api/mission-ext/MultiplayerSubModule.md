---
title: "MultiplayerSubModule"
description: "Auto-generated class reference for MultiplayerSubModule."
---
# MultiplayerSubModule

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerSubModule.cs`

## Overview

`MultiplayerSubModule` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of MultiplayerSubModule from the subsystem API first
MultiplayerSubModule multiplayerSubModule = ...;
multiplayerSubModule.OnGameLoaded(game, initializerObject);
```

### OnInitialState
`public override void OnInitialState()`

**Purpose:** Invoked when the initial state event is raised.

```csharp
// Obtain an instance of MultiplayerSubModule from the subsystem API first
MultiplayerSubModule multiplayerSubModule = ...;
multiplayerSubModule.OnInitialState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerSubModule multiplayerSubModule = ...;
multiplayerSubModule.OnGameLoaded(game, initializerObject);
```

## See Also

- [Area Index](../)