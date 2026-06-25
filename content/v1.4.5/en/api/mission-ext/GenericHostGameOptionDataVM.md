---
title: "GenericHostGameOptionDataVM"
description: "Auto-generated class reference for GenericHostGameOptionDataVM."
---
# GenericHostGameOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GenericHostGameOptionDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions/GenericHostGameOptionDataVM.cs`

## Overview

`GenericHostGameOptionDataVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionType` | `public OptionType OptionType { get; set; }` |
| `PreferredIndex` | `public int PreferredIndex { get; set; }` |
| `Index` | `public int Index { get; set; }` |
| `Category` | `public int Category { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GenericHostGameOptionDataVM from the subsystem API first
GenericHostGameOptionDataVM genericHostGameOptionDataVM = ...;
genericHostGameOptionDataVM.RefreshValues();
```

### RefreshData
`public abstract void RefreshData()`

**Purpose:** **Purpose:** Keeps the display or cache of data in sync with the underlying state.

```csharp
// Obtain an instance of GenericHostGameOptionDataVM from the subsystem API first
GenericHostGameOptionDataVM genericHostGameOptionDataVM = ...;
genericHostGameOptionDataVM.RefreshData();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GenericHostGameOptionDataVM instance = ...;
```

## See Also

- [Area Index](../)