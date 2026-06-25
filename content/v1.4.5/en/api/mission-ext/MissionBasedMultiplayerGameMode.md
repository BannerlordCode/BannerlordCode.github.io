---
title: "MissionBasedMultiplayerGameMode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBasedMultiplayerGameMode`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBasedMultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBasedMultiplayerGameMode : MultiplayerGameMode`
**Base:** `MultiplayerGameMode`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MissionBasedMultiplayerGameMode.cs`

## Overview

`MissionBasedMultiplayerGameMode` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### JoinCustomGame
`public override void JoinCustomGame(JoinGameData joinGameData)`

**Purpose:** Handles logic related to `join custom game`.

### StartMultiplayerGame
`public override void StartMultiplayerGame(string scene)`

**Purpose:** Handles logic related to `start multiplayer game`.

## Usage Example

```csharp
var value = new MissionBasedMultiplayerGameMode();
value.JoinCustomGame(joinGameData);
```

## See Also

- [Complete Class Catalog](../catalog)