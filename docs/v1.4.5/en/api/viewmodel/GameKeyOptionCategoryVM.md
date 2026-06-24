<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyOptionCategoryVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameKeyOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys/GameKeyOptionCategoryVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### IsChanged
`public bool IsChanged()`

**Purpose:** Handles logic related to `is changed`.

### ExecuteResetToDefault
`public void ExecuteResetToDefault()`

**Purpose:** Executes the `reset to default` operation or workflow.

### OnDone
`public void OnDone()`

**Purpose:** Called when the `done` event is raised.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

### ApplyValues
`public void ApplyValues()`

**Purpose:** Applies `values` to the current object.

## Usage Example

```csharp
var value = new GameKeyOptionCategoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)