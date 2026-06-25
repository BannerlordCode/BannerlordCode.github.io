---
title: "InitialState"
description: "Auto-generated class reference for InitialState."
---
# InitialState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/InitialState.cs`

## Overview

`InitialState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMusicMenuState` | `public override bool IsMusicMenuState { get; }` |

## Key Methods

### OnExecutedInitialStateOption
`public void OnExecutedInitialStateOption(InitialStateOption target)`

**Purpose:** Invoked when the executed initial state option event is raised.

```csharp
// Obtain an instance of InitialState from the subsystem API first
InitialState initialState = ...;
initialState.OnExecutedInitialStateOption(target);
```

### RefreshContentState
`public void RefreshContentState()`

**Purpose:** Keeps the display or cache of content state in sync with the underlying state.

```csharp
// Obtain an instance of InitialState from the subsystem API first
InitialState initialState = ...;
initialState.RefreshContentState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InitialState initialState = ...;
initialState.OnExecutedInitialStateOption(target);
```

## See Also

- [Area Index](../)