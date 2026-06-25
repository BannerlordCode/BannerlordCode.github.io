---
title: "MPLobbyClassFilterVM"
description: "Auto-generated class reference for MPLobbyClassFilterVM."
---
# MPLobbyClassFilterVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyClassFilterVM.cs`

## Overview

`MPLobbyClassFilterVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedClassItem` | `public MPLobbyClassFilterClassItemVM SelectedClassItem { get; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `Factions` | `public MBBindingList<MPLobbyClassFilterFactionItemVM> Factions { get; set; }` |
| `ActiveClassGroups` | `public MBBindingList<MPLobbyClassFilterClassGroupItemVM> ActiveClassGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClassFilterVM from the subsystem API first
MPLobbyClassFilterVM mPLobbyClassFilterVM = ...;
mPLobbyClassFilterVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClassFilterVM mPLobbyClassFilterVM = ...;
mPLobbyClassFilterVM.RefreshValues();
```

## See Also

- [Area Index](../)