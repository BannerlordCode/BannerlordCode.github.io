---
title: "ProfileSelectionState"
description: "Auto-generated class reference for ProfileSelectionState."
---
# ProfileSelectionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/ProfileSelectionState.cs`

## Overview

`ProfileSelectionState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible { get; }` |

## Key Methods

### OnProfileSelected
`public void OnProfileSelected()`

**Purpose:** Invoked when the profile selected event is raised.

```csharp
// Obtain an instance of ProfileSelectionState from the subsystem API first
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.OnProfileSelected();
```

### StartGame
`public void StartGame()`

**Purpose:** Starts the game flow or state machine.

```csharp
// Obtain an instance of ProfileSelectionState from the subsystem API first
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.StartGame();
```

### OnProfileSelectionEvent
`public delegate void OnProfileSelectionEvent()`

**Purpose:** Invoked when the profile selection event event is raised.

```csharp
// Obtain an instance of ProfileSelectionState from the subsystem API first
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.OnProfileSelectionEvent();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.OnProfileSelected();
```

## See Also

- [Area Index](../)