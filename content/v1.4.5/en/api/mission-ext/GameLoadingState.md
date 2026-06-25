---
title: "GameLoadingState"
description: "Auto-generated class reference for GameLoadingState."
---
# GameLoadingState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameLoadingState : GameState`
**Base:** `GameState`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameLoadingState.cs`

## Overview

`GameLoadingState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetLoadingParameters
`public void SetLoadingParameters(MBGameManager gameLoader)`

**Purpose:** Assigns a new value to `loading parameters` and updates the object's internal state.

```csharp
// Obtain an instance of GameLoadingState from the subsystem API first
GameLoadingState gameLoadingState = ...;
gameLoadingState.SetLoadingParameters(gameLoader);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameLoadingState gameLoadingState = ...;
gameLoadingState.SetLoadingParameters(gameLoader);
```

## See Also

- [Area Index](../)