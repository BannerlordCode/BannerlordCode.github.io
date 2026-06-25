---
title: "LobbyGameStatePlayerBasedCustomServer"
description: "Auto-generated class reference for LobbyGameStatePlayerBasedCustomServer."
---
# LobbyGameStatePlayerBasedCustomServer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class LobbyGameStatePlayerBasedCustomServer : LobbyGameState`
**Base:** `LobbyGameState`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs`

## Overview

`LobbyGameStatePlayerBasedCustomServer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetStartingParameters
`public void SetStartingParameters(LobbyGameClientHandler lobbyGameClientHandler)`

**Purpose:** **Purpose:** Assigns a new value to starting parameters and updates the object's internal state.

```csharp
// Obtain an instance of LobbyGameStatePlayerBasedCustomServer from the subsystem API first
LobbyGameStatePlayerBasedCustomServer lobbyGameStatePlayerBasedCustomServer = ...;
lobbyGameStatePlayerBasedCustomServer.SetStartingParameters(lobbyGameClientHandler);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LobbyGameStatePlayerBasedCustomServer lobbyGameStatePlayerBasedCustomServer = ...;
lobbyGameStatePlayerBasedCustomServer.SetStartingParameters(lobbyGameClientHandler);
```

## See Also

- [Area Index](../)