---
title: "GenericOptionDataVM"
description: "Auto-generated class reference for GenericOptionDataVM."
---
# GenericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GenericOptionDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/GenericOptionDataVM.cs`

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

**Purpose:** Recalculates and stores the latest representation of `data`.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.UpdateData(false);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.RefreshValues();
```

### GetOptionType
`public object GetOptionType()`

**Purpose:** Reads and returns the `option type` value held by the current object.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
var result = genericOptionDataVM.GetOptionType();
```

### GetOptionData
`public IOptionData GetOptionData()`

**Purpose:** Reads and returns the `option data` value held by the current object.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
var result = genericOptionDataVM.GetOptionData();
```

### ResetToDefault
`public void ResetToDefault()`

**Purpose:** Returns `to default` to its default or initial condition.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.ResetToDefault();
```

### UpdateEnableState
`public void UpdateEnableState()`

**Purpose:** Recalculates and stores the latest representation of `enable state`.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.UpdateEnableState();
```

### UpdateValue
`public abstract void UpdateValue()`

**Purpose:** Recalculates and stores the latest representation of `value`.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.UpdateValue();
```

### Cancel
`public abstract void Cancel()`

**Purpose:** Checks whether the current object meets the preconditions for `cel`.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.Cancel();
```

### IsChanged
`public abstract bool IsChanged()`

**Purpose:** Determines whether the current object is in the `changed` state or condition.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
var result = genericOptionDataVM.IsChanged();
```

### SetValue
`public abstract void SetValue(float value)`

**Purpose:** Assigns a new value to `value` and updates the object's internal state.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.SetValue(0);
```

### ResetData
`public abstract void ResetData()`

**Purpose:** Returns `data` to its default or initial condition.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.ResetData();
```

### ApplyValue
`public abstract void ApplyValue()`

**Purpose:** Applies the effect of `value` to the current object.

```csharp
// Obtain an instance of GenericOptionDataVM from the subsystem API first
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.ApplyValue();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GenericOptionDataVM instance = ...;
```

## See Also

- [Area Index](../)