---
title: "InitializeSessionResponse"
description: "Auto-generated class reference for InitializeSessionResponse."
---
# InitializeSessionResponse

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class InitializeSessionResponse : LoginResultObject`
**Base:** `LoginResultObject`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/InitializeSessionResponse.cs`

## Overview

`InitializeSessionResponse` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `ServerStatus` | `public ServerStatus ServerStatus { get; }` |
| `AvailableScenes` | `public AvailableScenes AvailableScenes { get; }` |
| `SupportedFeatures` | `public SupportedFeatures SupportedFeatures { get; }` |
| `HasPendingRejoin` | `public bool HasPendingRejoin { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
InitializeSessionResponse instance = ...;
```

## See Also

- [Area Index](../)