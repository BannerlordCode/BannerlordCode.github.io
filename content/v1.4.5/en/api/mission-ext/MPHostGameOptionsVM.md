---
title: "MPHostGameOptionsVM"
description: "Auto-generated class reference for MPHostGameOptionsVM."
---
# MPHostGameOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHostGameOptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame/MPHostGameOptionsVM.cs`

## Overview

`MPHostGameOptionsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GeneralOptions` | `public MBBindingList<GenericHostGameOptionDataVM> GeneralOptions { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsInMission` | `public bool IsInMission { get; set; }` |

## Key Methods

### Compare
`public int Compare(GenericHostGameOptionDataVM x, GenericHostGameOptionDataVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MPHostGameOptionsVM from the subsystem API first
MPHostGameOptionsVM mPHostGameOptionsVM = ...;
var result = mPHostGameOptionsVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPHostGameOptionsVM from the subsystem API first
MPHostGameOptionsVM mPHostGameOptionsVM = ...;
mPHostGameOptionsVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPHostGameOptionsVM mPHostGameOptionsVM = ...;
mPHostGameOptionsVM.Compare(x, y);
```

## See Also

- [Area Index](../)