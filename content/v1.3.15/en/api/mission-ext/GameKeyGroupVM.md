---
title: "GameKeyGroupVM"
description: "Auto-generated class reference for GameKeyGroupVM."
---
# GameKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyGroupVM.cs`

## Overview

`GameKeyGroupVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameKeys` | `public MBBindingList<GameKeyOptionVM> GameKeys { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameKeyGroupVM from the subsystem API first
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.RefreshValues();
```

### OnDone
`public void OnDone()`

**Purpose:** Invoked when the done event is raised.

```csharp
// Obtain an instance of GameKeyGroupVM from the subsystem API first
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.OnDone();
```

### OnGamepadActiveStateChanged
`public void OnGamepadActiveStateChanged()`

**Purpose:** Invoked when the gamepad active state changed event is raised.

```csharp
// Obtain an instance of GameKeyGroupVM from the subsystem API first
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.OnGamepadActiveStateChanged();
```

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the this instance meets the preconditions for cel.

```csharp
// Obtain an instance of GameKeyGroupVM from the subsystem API first
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.Cancel();
```

### ApplyValues
`public void ApplyValues()`

**Purpose:** Applies the effect of values to the this instance.

```csharp
// Obtain an instance of GameKeyGroupVM from the subsystem API first
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.ApplyValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)