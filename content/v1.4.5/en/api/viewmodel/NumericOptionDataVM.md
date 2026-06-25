---
title: "NumericOptionDataVM"
description: "Auto-generated class reference for NumericOptionDataVM."
---
# NumericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NumericOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/NumericOptionDataVM.cs`

## Overview

`NumericOptionDataVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval { get; set; }` |
| `Min` | `public float Min { get; set; }` |
| `Max` | `public float Max { get; set; }` |
| `OptionValue` | `public float OptionValue { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `UpdateContinuously` | `public bool UpdateContinuously { get; set; }` |

## Key Methods

### UpdateValue
`public override void UpdateValue()`

**Purpose:** Recalculates and stores the latest representation of `value`.

```csharp
// Obtain an instance of NumericOptionDataVM from the subsystem API first
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.UpdateValue();
```

### Cancel
`public override void Cancel()`

**Purpose:** Checks whether the current object meets the preconditions for `cel`.

```csharp
// Obtain an instance of NumericOptionDataVM from the subsystem API first
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.Cancel();
```

### SetValue
`public override void SetValue(float value)`

**Purpose:** Assigns a new value to `value` and updates the object's internal state.

```csharp
// Obtain an instance of NumericOptionDataVM from the subsystem API first
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.SetValue(0);
```

### ResetData
`public override void ResetData()`

**Purpose:** Returns `data` to its default or initial condition.

```csharp
// Obtain an instance of NumericOptionDataVM from the subsystem API first
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.ResetData();
```

### IsChanged
`public override bool IsChanged()`

**Purpose:** Determines whether the current object is in the `changed` state or condition.

```csharp
// Obtain an instance of NumericOptionDataVM from the subsystem API first
NumericOptionDataVM numericOptionDataVM = ...;
var result = numericOptionDataVM.IsChanged();
```

### ApplyValue
`public override void ApplyValue()`

**Purpose:** Applies the effect of `value` to the current object.

```csharp
// Obtain an instance of NumericOptionDataVM from the subsystem API first
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.ApplyValue();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.UpdateValue();
```

## See Also

- [Area Index](../)