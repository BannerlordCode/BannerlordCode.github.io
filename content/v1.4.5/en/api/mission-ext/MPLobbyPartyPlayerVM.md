---
title: "MPLobbyPartyPlayerVM"
description: "Auto-generated class reference for MPLobbyPartyPlayerVM."
---
# MPLobbyPartyPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyPlayerVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyPlayerVM.cs`

## Overview

`MPLobbyPartyPlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWaitingConfirmation` | `public bool IsWaitingConfirmation { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MPLobbyPartyPlayerVM instance = ...;
```

## See Also

- [Area Index](../)