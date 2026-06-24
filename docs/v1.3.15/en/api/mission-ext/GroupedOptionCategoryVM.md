<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GroupedOptionCategoryVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GroupedOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GroupedOptionCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs`

## Overview

`GroupedOptionCategoryVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllOptions` | `public IEnumerable<GenericOptionDataVM> AllOptions { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsResetSupported` | `public bool IsResetSupported { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `Groups` | `public MBBindingList<OptionGroupVM> Groups { get; set; }` |
| `BaseOptions` | `public MBBindingList<GenericOptionDataVM> BaseOptions { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ResetData
`public void ResetData()`

**Purpose:** Resets `data` to its initial state.

### ExecuteResetToDefault
`public void ExecuteResetToDefault()`

**Purpose:** Executes the `reset to default` operation or workflow.

### GetOption
`public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)`

**Purpose:** Gets the current value of `option`.

### GetOption
`public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)`

**Purpose:** Gets the current value of `option`.

## Usage Example

```csharp
var value = new GroupedOptionCategoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)