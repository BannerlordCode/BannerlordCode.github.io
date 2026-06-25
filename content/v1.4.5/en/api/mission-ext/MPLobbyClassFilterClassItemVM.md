---
title: "MPLobbyClassFilterClassItemVM"
description: "Auto-generated class reference for MPLobbyClassFilterClassItemVM."
---
# MPLobbyClassFilterClassItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterClassItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter/MPLobbyClassFilterClassItemVM.cs`

## Overview

`MPLobbyClassFilterClassItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroClass` | `public MPHeroClass HeroClass { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CultureColor` | `public Color CultureColor { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClassFilterClassItemVM from the subsystem API first
MPLobbyClassFilterClassItemVM mPLobbyClassFilterClassItemVM = ...;
mPLobbyClassFilterClassItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyClassFilterClassItemVM from the subsystem API first
MPLobbyClassFilterClassItemVM mPLobbyClassFilterClassItemVM = ...;
mPLobbyClassFilterClassItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClassFilterClassItemVM mPLobbyClassFilterClassItemVM = ...;
mPLobbyClassFilterClassItemVM.RefreshValues();
```

## See Also

- [Area Index](../)