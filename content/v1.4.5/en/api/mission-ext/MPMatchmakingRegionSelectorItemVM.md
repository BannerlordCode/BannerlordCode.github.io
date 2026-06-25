---
title: "MPMatchmakingRegionSelectorItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPMatchmakingRegionSelectorItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPMatchmakingRegionSelectorItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingRegionSelectorItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingRegionSelectorItemVM.cs`

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
var value = new MPMatchmakingRegionSelectorItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)