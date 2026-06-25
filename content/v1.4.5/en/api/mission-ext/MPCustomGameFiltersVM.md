---
title: "MPCustomGameFiltersVM"
description: "Auto-generated class reference for MPCustomGameFiltersVM."
---
# MPCustomGameFiltersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameFiltersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameFiltersVM.cs`

## Overview

`MPCustomGameFiltersVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `SearchInitialText` | `public string SearchInitialText { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `Items` | `public MBBindingList<MPCustomGameFilterItemVM> Items { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPCustomGameFiltersVM from the subsystem API first
MPCustomGameFiltersVM mPCustomGameFiltersVM = ...;
mPCustomGameFiltersVM.RefreshValues();
```

### GetFilteredServerList
`public List<GameServerEntry> GetFilteredServerList(IEnumerable<GameServerEntry> unfilteredList)`

**Purpose:** Reads and returns the `filtered server list` value held by the current object.

```csharp
// Obtain an instance of MPCustomGameFiltersVM from the subsystem API first
MPCustomGameFiltersVM mPCustomGameFiltersVM = ...;
var result = mPCustomGameFiltersVM.GetFilteredServerList(unfilteredList);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPCustomGameFiltersVM mPCustomGameFiltersVM = ...;
mPCustomGameFiltersVM.RefreshValues();
```

## See Also

- [Area Index](../)