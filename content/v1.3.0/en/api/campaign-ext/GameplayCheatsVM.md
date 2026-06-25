---
title: "GameplayCheatsVM"
description: "Auto-generated class reference for GameplayCheatsVM."
---
# GameplayCheatsVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameplayCheatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs`

## Overview

`GameplayCheatsVM` lives in `SandBox.ViewModelCollection.Map.Cheat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Cheat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `ButtonCloseLabel` | `public string ButtonCloseLabel { get; set; }` |
| `Cheats` | `public MBBindingList<CheatItemBaseVM> Cheats { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameplayCheatsVM from the subsystem API first
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameplayCheatsVM from the subsystem API first
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.OnFinalize();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of GameplayCheatsVM from the subsystem API first
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.ExecuteClose();
```

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to close input key and updates the object's internal state.

```csharp
// Obtain an instance of GameplayCheatsVM from the subsystem API first
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.SetCloseInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.RefreshValues();
```

## See Also

- [Area Index](../)