---
title: "GameKeyOptionCategoryVM"
description: "Auto-generated class reference for GameKeyOptionCategoryVM."
---
# GameKeyOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys/GameKeyOptionCategoryVM.cs`

## Overview

`GameKeyOptionCategoryVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `GameKeyGroups` | `public MBBindingList<GameKeyGroupVM> GameKeyGroups { get; set; }` |
| `AuxiliaryKeyGroups` | `public MBBindingList<AuxiliaryKeyGroupVM> AuxiliaryKeyGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.RefreshValues();
```

### IsChanged
`public bool IsChanged()`

**Purpose:** Determines whether the current object is in the `changed` state or condition.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
var result = gameKeyOptionCategoryVM.IsChanged();
```

### ExecuteResetToDefault
`public void ExecuteResetToDefault()`

**Purpose:** Runs the operation or workflow associated with `reset to default`.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.ExecuteResetToDefault();
```

### OnDone
`public void OnDone()`

**Purpose:** Invoked when the `done` event is raised.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.OnDone();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.OnFinalize();
```

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the current object meets the preconditions for `cel`.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.Cancel();
```

### ApplyValues
`public void ApplyValues()`

**Purpose:** Applies the effect of `values` to the current object.

```csharp
// Obtain an instance of GameKeyOptionCategoryVM from the subsystem API first
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.ApplyValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameKeyOptionCategoryVM gameKeyOptionCategoryVM = ...;
gameKeyOptionCategoryVM.RefreshValues();
```

## See Also

- [Area Index](../)