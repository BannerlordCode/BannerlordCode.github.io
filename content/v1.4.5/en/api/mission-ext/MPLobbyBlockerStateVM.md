---
title: "MPLobbyBlockerStateVM"
description: "Auto-generated class reference for MPLobbyBlockerStateVM."
---
# MPLobbyBlockerStateVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBlockerStateVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyBlockerStateVM.cs`

## Overview

`MPLobbyBlockerStateVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## Key Methods

### OnLobbyStateIsBlocker
`public void OnLobbyStateIsBlocker(TextObject description)`

**Purpose:** **Purpose:** Invoked when the lobby state is blocker event is raised.

```csharp
// Obtain an instance of MPLobbyBlockerStateVM from the subsystem API first
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.OnLobbyStateIsBlocker(description);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBlockerStateVM from the subsystem API first
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.RefreshValues();
```

### OnLobbyStateNotBlocker
`public void OnLobbyStateNotBlocker()`

**Purpose:** **Purpose:** Invoked when the lobby state not blocker event is raised.

```csharp
// Obtain an instance of MPLobbyBlockerStateVM from the subsystem API first
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.OnLobbyStateNotBlocker();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.OnLobbyStateIsBlocker(description);
```

## See Also

- [Area Index](../)