---
title: "PlayersAddedToPartyMessage"
description: "Auto-generated class reference for PlayersAddedToPartyMessage."
---
# PlayersAddedToPartyMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class PlayersAddedToPartyMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/PlayersAddedToPartyMessage.cs`

## Overview

`PlayersAddedToPartyMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Players` | `public List<ValueTuple<PlayerId, string, bool>> Players { get; }` |
| `InvitedPlayers` | `public List<ValueTuple<PlayerId, string>> InvitedPlayers { get; }` |

## Key Methods

### AddPlayer
`public void AddPlayer(PlayerId playerId, string playerName, bool isPartyLeader)`

**Purpose:** Adds `player` to the current collection or state.

```csharp
// Obtain an instance of PlayersAddedToPartyMessage from the subsystem API first
PlayersAddedToPartyMessage playersAddedToPartyMessage = ...;
playersAddedToPartyMessage.AddPlayer(playerId, "example", false);
```

### AddInvitedPlayer
`public void AddInvitedPlayer(PlayerId playerId, string playerName)`

**Purpose:** Adds `invited player` to the current collection or state.

```csharp
// Obtain an instance of PlayersAddedToPartyMessage from the subsystem API first
PlayersAddedToPartyMessage playersAddedToPartyMessage = ...;
playersAddedToPartyMessage.AddInvitedPlayer(playerId, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayersAddedToPartyMessage playersAddedToPartyMessage = ...;
playersAddedToPartyMessage.AddPlayer(playerId, "example", false);
```

## See Also

- [Area Index](../)