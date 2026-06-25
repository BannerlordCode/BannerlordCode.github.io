---
title: "MPMatchmakingItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPMatchmakingItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPMatchmakingItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingItemVM.cs`

## Overview

`MPMatchmakingItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |

## Key Methods

### MPMatchmakingItemVM
`public unsafe MPMatchmakingItemVM(MultiplayerGameType type)`

**Purpose:** Handles logic related to `m p matchmaking item v m`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MPMatchmakingItemVM();
value.MPMatchmakingItemVM(type);
```

## See Also

- [Complete Class Catalog](../catalog)