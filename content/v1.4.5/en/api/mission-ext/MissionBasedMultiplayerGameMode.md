---
title: "MissionBasedMultiplayerGameMode"
description: "Auto-generated class reference for MissionBasedMultiplayerGameMode."
---
# MissionBasedMultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBasedMultiplayerGameMode : MultiplayerGameMode`
**Base:** `MultiplayerGameMode`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MissionBasedMultiplayerGameMode.cs`

## Overview

`MissionBasedMultiplayerGameMode` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### JoinCustomGame
`public override void JoinCustomGame(JoinGameData joinGameData)`

**Purpose:** **Purpose:** Joins several custom game items into a single whole.

```csharp
// Obtain an instance of MissionBasedMultiplayerGameMode from the subsystem API first
MissionBasedMultiplayerGameMode missionBasedMultiplayerGameMode = ...;
missionBasedMultiplayerGameMode.JoinCustomGame(joinGameData);
```

### StartMultiplayerGame
`public override void StartMultiplayerGame(string scene)`

**Purpose:** **Purpose:** Starts the multiplayer game flow or state machine.

```csharp
// Obtain an instance of MissionBasedMultiplayerGameMode from the subsystem API first
MissionBasedMultiplayerGameMode missionBasedMultiplayerGameMode = ...;
missionBasedMultiplayerGameMode.StartMultiplayerGame("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionBasedMultiplayerGameMode missionBasedMultiplayerGameMode = ...;
missionBasedMultiplayerGameMode.JoinCustomGame(joinGameData);
```

## See Also

- [Area Index](../)