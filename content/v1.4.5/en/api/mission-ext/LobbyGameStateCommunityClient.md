---
title: "LobbyGameStateCommunityClient"
description: "Auto-generated class reference for LobbyGameStateCommunityClient."
---
# LobbyGameStateCommunityClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class LobbyGameStateCommunityClient : LobbyGameState`
**Base:** `LobbyGameState`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameStateCommunityClient.cs`

## Overview

`LobbyGameStateCommunityClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetStartingParameters
`public void SetStartingParameters(CommunityClient communityClient, string address, int port, int peerIndex, int sessionKey)`

**Purpose:** Assigns a new value to `starting parameters` and updates the object's internal state.

```csharp
// Obtain an instance of LobbyGameStateCommunityClient from the subsystem API first
LobbyGameStateCommunityClient lobbyGameStateCommunityClient = ...;
lobbyGameStateCommunityClient.SetStartingParameters(communityClient, "example", 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LobbyGameStateCommunityClient lobbyGameStateCommunityClient = ...;
lobbyGameStateCommunityClient.SetStartingParameters(communityClient, "example", 0, 0, 0);
```

## See Also

- [Area Index](../)