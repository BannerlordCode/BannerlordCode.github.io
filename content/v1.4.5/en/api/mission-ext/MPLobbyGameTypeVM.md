---
title: "MPLobbyGameTypeVM"
description: "Auto-generated class reference for MPLobbyGameTypeVM."
---
# MPLobbyGameTypeVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyGameTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyGameTypeVM.cs`

## Overview

`MPLobbyGameTypeVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `GameTypeID` | `public string GameTypeID { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyGameTypeVM from the subsystem API first
MPLobbyGameTypeVM mPLobbyGameTypeVM = ...;
mPLobbyGameTypeVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyGameTypeVM mPLobbyGameTypeVM = ...;
mPLobbyGameTypeVM.RefreshValues();
```

## See Also

- [Area Index](../)