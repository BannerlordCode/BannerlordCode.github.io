---
title: "MPLobbyPlayerTroopClassVM"
description: "Auto-generated class reference for MPLobbyPlayerTroopClassVM."
---
# MPLobbyPlayerTroopClassVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerTroopClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerTroopClassVM.cs`

## Overview

`MPLobbyPlayerTroopClassVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Preview` | `public CharacterImageIdentifierVM Preview { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MPLobbyPlayerTroopClassVM instance = ...;
```

## See Also

- [Area Index](../)