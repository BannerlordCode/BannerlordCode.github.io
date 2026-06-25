---
title: "MPMatchmakingItemVM"
description: "Auto-generated class reference for MPMatchmakingItemVM."
---
# MPMatchmakingItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingItemVM.cs`

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

**Purpose:** Executes the MPMatchmakingItemVM logic.

```csharp
// Obtain an instance of MPMatchmakingItemVM from the subsystem API first
MPMatchmakingItemVM mPMatchmakingItemVM = ...;
var result = mPMatchmakingItemVM.MPMatchmakingItemVM(type);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPMatchmakingItemVM from the subsystem API first
MPMatchmakingItemVM mPMatchmakingItemVM = ...;
mPMatchmakingItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPMatchmakingItemVM mPMatchmakingItemVM = ...;
mPMatchmakingItemVM.MPMatchmakingItemVM(type);
```

## See Also

- [Area Index](../)