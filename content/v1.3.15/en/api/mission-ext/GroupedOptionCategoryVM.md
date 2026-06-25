---
title: "GroupedOptionCategoryVM"
description: "Auto-generated class reference for GroupedOptionCategoryVM."
---
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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GroupedOptionCategoryVM from the subsystem API first
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.RefreshValues();
```

### ResetData
`public void ResetData()`

**Purpose:** **Purpose:** Returns data to its default or initial condition.

```csharp
// Obtain an instance of GroupedOptionCategoryVM from the subsystem API first
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.ResetData();
```

### ExecuteResetToDefault
`public void ExecuteResetToDefault()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset to default.

```csharp
// Obtain an instance of GroupedOptionCategoryVM from the subsystem API first
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.ExecuteResetToDefault();
```

### GetOption
`public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)`

**Purpose:** **Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of GroupedOptionCategoryVM from the subsystem API first
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
var result = groupedOptionCategoryVM.GetOption(optionType);
```

### GetOption
`public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)`

**Purpose:** **Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of GroupedOptionCategoryVM from the subsystem API first
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
var result = groupedOptionCategoryVM.GetOption(optionType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.RefreshValues();
```

## See Also

- [Area Index](../)