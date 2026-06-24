<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyGroupVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys/GameKeyGroupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnDone
`public void OnDone()`

**Purpose:** Called when the `done` event is raised.

### OnGamepadActiveStateChanged
`public void OnGamepadActiveStateChanged()`

**Purpose:** Called when the `gamepad active state changed` event is raised.

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

### ApplyValues
`public void ApplyValues()`

**Purpose:** Applies `values` to the current object.

## Usage Example

```csharp
var value = new GameKeyGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)