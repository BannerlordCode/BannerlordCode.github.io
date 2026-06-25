---
title: "InputHostGameOptionDataVM"
description: "Auto-generated class reference for InputHostGameOptionDataVM."
---
# InputHostGameOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InputHostGameOptionDataVM : GenericHostGameOptionDataVM`
**Base:** `GenericHostGameOptionDataVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions/InputHostGameOptionDataVM.cs`

## Overview

`InputHostGameOptionDataVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## Key Methods

### RefreshData
`public override void RefreshData()`

**Purpose:** **Purpose:** Keeps the display or cache of data in sync with the underlying state.

```csharp
// Obtain an instance of InputHostGameOptionDataVM from the subsystem API first
InputHostGameOptionDataVM inputHostGameOptionDataVM = ...;
inputHostGameOptionDataVM.RefreshData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InputHostGameOptionDataVM inputHostGameOptionDataVM = ...;
inputHostGameOptionDataVM.RefreshData();
```

## See Also

- [Area Index](../)