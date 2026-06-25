---
title: "MPMatchmakingRegionSelectorItemVM"
description: "Auto-generated class reference for MPMatchmakingRegionSelectorItemVM."
---
# MPMatchmakingRegionSelectorItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingRegionSelectorItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingRegionSelectorItemVM.cs`

## Overview

`MPMatchmakingRegionSelectorItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegionCode` | `public string RegionCode { get; }` |
| `IsRegionNone` | `public bool IsRegionNone { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MPMatchmakingRegionSelectorItemVM instance = ...;
```

## See Also

- [Area Index](../)