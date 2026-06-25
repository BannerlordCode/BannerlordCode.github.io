---
title: "MPHostGameVM"
description: "Auto-generated class reference for MPHostGameVM."
---
# MPHostGameVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHostGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame/MPHostGameVM.cs`

## Overview

`MPHostGameVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HostGameOptions` | `public MPHostGameOptionsVM HostGameOptions { get; set; }` |
| `CreateText` | `public string CreateText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPHostGameVM from the subsystem API first
MPHostGameVM mPHostGameVM = ...;
mPHostGameVM.RefreshValues();
```

### ExecuteStart
`public void ExecuteStart()`

**Purpose:** Runs the operation or workflow associated with start.

```csharp
// Obtain an instance of MPHostGameVM from the subsystem API first
MPHostGameVM mPHostGameVM = ...;
mPHostGameVM.ExecuteStart();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPHostGameVM mPHostGameVM = ...;
mPHostGameVM.RefreshValues();
```

## See Also

- [Area Index](../)