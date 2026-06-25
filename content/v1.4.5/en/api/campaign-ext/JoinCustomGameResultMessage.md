---
title: "JoinCustomGameResultMessage"
description: "Auto-generated class reference for JoinCustomGameResultMessage."
---
# JoinCustomGameResultMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class JoinCustomGameResultMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToClient/JoinCustomGameResultMessage.cs`

## Overview

`JoinCustomGameResultMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `JoinGameData` | `public JoinGameData JoinGameData { get; }` |
| `Success` | `public bool Success { get; }` |
| `Response` | `public CustomGameJoinResponse Response { get; }` |
| `MatchId` | `public string MatchId { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## Key Methods

### CreateSuccess
`public static JoinCustomGameResultMessage CreateSuccess(JoinGameData joinGameData, string matchId, bool isAdmin)`

**Purpose:** Constructs a new success entity and returns it to the caller.

```csharp
// Static call; no instance required
JoinCustomGameResultMessage.CreateSuccess(joinGameData, "example", false);
```

### CreateFailed
`public static JoinCustomGameResultMessage CreateFailed(CustomGameJoinResponse response)`

**Purpose:** Constructs a new failed entity and returns it to the caller.

```csharp
// Static call; no instance required
JoinCustomGameResultMessage.CreateFailed(response);
```

## Usage Example

```csharp
JoinCustomGameResultMessage.CreateSuccess(joinGameData, "example", false);
```

## See Also

- [Area Index](../)