---
title: "MPNewsVM"
description: "Auto-generated class reference for MPNewsVM."
---
# MPNewsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPNewsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPNewsVM.cs`

## Overview

`MPNewsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasValidNews` | `public bool HasValidNews { get; set; }` |
| `MainNews` | `public MPNewsItemVM MainNews { get; set; }` |
| `ImportantNews` | `public MBBindingList<MPNewsItemVM> ImportantNews { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPNewsVM from the subsystem API first
MPNewsVM mPNewsVM = ...;
mPNewsVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPNewsVM mPNewsVM = ...;
mPNewsVM.OnFinalize();
```

## See Also

- [Area Index](../)