---
title: "StringOptionDataVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringOptionDataVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StringOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/StringOptionDataVM.cs`

## Overview

`StringOptionDataVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Selector` | `public SelectorVM<SelectorItemVM> Selector { get; set; }` |

## Key Methods

### UpdateData
`public override void UpdateData(bool initialUpdate)`

**Purpose:** Updates the state or data of `data`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateValue
`public void UpdateValue(SelectorVM<SelectorItemVM> selector)`

**Purpose:** Updates the state or data of `value`.

### UpdateValue
`public override void UpdateValue()`

**Purpose:** Updates the state or data of `value`.

### Cancel
`public override void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

### SetValue
`public override void SetValue(float value)`

**Purpose:** Sets the value or state of `value`.

### ResetData
`public override void ResetData()`

**Purpose:** Resets `data` to its initial state.

### IsChanged
`public override bool IsChanged()`

**Purpose:** Handles logic related to `is changed`.

### ApplyValue
`public override void ApplyValue()`

**Purpose:** Applies `value` to the current object.

## Usage Example

```csharp
var value = new StringOptionDataVM();
value.UpdateData(false);
```

## See Also

- [Complete Class Catalog](../catalog)