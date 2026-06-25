---
title: "GenericOptionDataVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericOptionDataVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GenericOptionDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/GenericOptionDataVM.cs`

## Overview

`GenericOptionDataVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Description` | `public string Description { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### UpdateData
`public virtual void UpdateData(bool initUpdate)`

**Purpose:** Updates the state or data of `data`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### GetOptionType
`public object GetOptionType()`

**Purpose:** Gets the current value of `option type`.

### GetOptionData
`public IOptionData GetOptionData()`

**Purpose:** Gets the current value of `option data`.

### ResetToDefault
`public void ResetToDefault()`

**Purpose:** Resets `to default` to its initial state.

### UpdateEnableState
`public void UpdateEnableState()`

**Purpose:** Updates the state or data of `enable state`.

### UpdateValue
`public abstract void UpdateValue()`

**Purpose:** Updates the state or data of `value`.

### Cancel
`public abstract void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

### IsChanged
`public abstract bool IsChanged()`

**Purpose:** Handles logic related to `is changed`.

### SetValue
`public abstract void SetValue(float value)`

**Purpose:** Sets the value or state of `value`.

### ResetData
`public abstract void ResetData()`

**Purpose:** Resets `data` to its initial state.

### ApplyValue
`public abstract void ApplyValue()`

**Purpose:** Applies `value` to the current object.

## Usage Example

```csharp
var implementation = new CustomGenericOptionDataVM();
```

## See Also

- [Complete Class Catalog](../catalog)