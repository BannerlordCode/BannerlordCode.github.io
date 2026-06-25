---
title: "MPLobbyPlayerRecentGameDataVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyPlayerRecentGameDataVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPlayerRecentGameDataVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerRecentGameDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerRecentGameDataVM.cs`

## Overview

`MPLobbyPlayerRecentGameDataVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Result` | `public int Result { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Map` | `public string Map { get; set; }` |
| `Date` | `public string Date { get; set; }` |

## Usage Example

```csharp
var value = new MPLobbyPlayerRecentGameDataVM();
```

## See Also

- [Complete Class Catalog](../catalog)