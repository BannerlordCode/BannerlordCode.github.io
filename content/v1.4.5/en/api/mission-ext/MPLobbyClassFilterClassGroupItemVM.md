---
title: "MPLobbyClassFilterClassGroupItemVM"
description: "Auto-generated class reference for MPLobbyClassFilterClassGroupItemVM."
---
# MPLobbyClassFilterClassGroupItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterClassGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter/MPLobbyClassFilterClassGroupItemVM.cs`

## Overview

`MPLobbyClassFilterClassGroupItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClassGroup` | `public MPHeroClassGroup ClassGroup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Classes` | `public MBBindingList<MPLobbyClassFilterClassItemVM> Classes { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClassFilterClassGroupItemVM from the subsystem API first
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyClassFilterClassGroupItemVM from the subsystem API first
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.OnFinalize();
```

### AddClass
`public void AddClass(BasicCultureObject culture, MPHeroClass heroClass, Action<MPLobbyClassFilterClassItemVM> onSelect)`

**Purpose:** Adds class to the current collection or state.

```csharp
// Obtain an instance of MPLobbyClassFilterClassGroupItemVM from the subsystem API first
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.AddClass(culture, heroClass, onSelect);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.RefreshValues();
```

## See Also

- [Area Index](../)