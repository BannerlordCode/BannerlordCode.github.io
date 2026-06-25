---
title: "BannerlordNetwork"
description: "Auto-generated class reference for BannerlordNetwork."
---
# BannerlordNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordNetwork`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BannerlordNetwork.cs`

## Overview

`BannerlordNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LobbyMissionType` | `public static LobbyMissionType LobbyMissionType { get; }` |

## Key Methods

### CreateServerPeer
`public static void CreateServerPeer()`

**Purpose:** Constructs a new `server peer` entity and returns it to the caller.

```csharp
// Static call; no instance required
BannerlordNetwork.CreateServerPeer();
```

### StartMultiplayerLobbyMission
`public static void StartMultiplayerLobbyMission(LobbyMissionType lobbyMissionType)`

**Purpose:** Starts the `multiplayer lobby mission` flow or state machine.

```csharp
// Static call; no instance required
BannerlordNetwork.StartMultiplayerLobbyMission(lobbyMissionType);
```

### EndMultiplayerLobbyMission
`public static void EndMultiplayerLobbyMission()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
BannerlordNetwork.EndMultiplayerLobbyMission();
```

## Usage Example

```csharp
BannerlordNetwork.CreateServerPeer();
```

## See Also

- [Area Index](../)