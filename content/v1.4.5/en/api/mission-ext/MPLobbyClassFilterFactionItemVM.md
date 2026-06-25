---
title: "MPLobbyClassFilterFactionItemVM"
description: "Auto-generated class reference for MPLobbyClassFilterFactionItemVM."
---
# MPLobbyClassFilterFactionItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterFactionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter/MPLobbyClassFilterFactionItemVM.cs`

## Overview

`MPLobbyClassFilterFactionItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `SelectedClassItem` | `public MPLobbyClassFilterClassItemVM SelectedClassItem { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CultureCode` | `public string CultureCode { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `ClassGroups` | `public MBBindingList<MPLobbyClassFilterClassGroupItemVM> ClassGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClassFilterFactionItemVM from the subsystem API first
MPLobbyClassFilterFactionItemVM mPLobbyClassFilterFactionItemVM = ...;
mPLobbyClassFilterFactionItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyClassFilterFactionItemVM from the subsystem API first
MPLobbyClassFilterFactionItemVM mPLobbyClassFilterFactionItemVM = ...;
mPLobbyClassFilterFactionItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClassFilterFactionItemVM mPLobbyClassFilterFactionItemVM = ...;
mPLobbyClassFilterFactionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)