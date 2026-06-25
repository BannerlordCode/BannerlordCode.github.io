---
title: "StringOptionDataVM"
description: "Auto-generated class reference for StringOptionDataVM."
---
# StringOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StringOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/StringOptionDataVM.cs`

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

**Purpose:** Recalculates and stores the latest representation of data.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateData(false);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.RefreshValues();
```

### UpdateValue
`public void UpdateValue(SelectorVM<SelectorItemVM> selector)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateValue(selector);
```

### UpdateValue
`public override void UpdateValue()`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateValue();
```

### Cancel
`public override void Cancel()`

**Purpose:** Checks whether the this instance meets the preconditions for cel.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.Cancel();
```

### SetValue
`public override void SetValue(float value)`

**Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.SetValue(0);
```

### ResetData
`public override void ResetData()`

**Purpose:** Returns data to its default or initial condition.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.ResetData();
```

### IsChanged
`public override bool IsChanged()`

**Purpose:** Determines whether the this instance is in the changed state or condition.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
var result = stringOptionDataVM.IsChanged();
```

### ApplyValue
`public override void ApplyValue()`

**Purpose:** Applies the effect of value to the this instance.

```csharp
// Obtain an instance of StringOptionDataVM from the subsystem API first
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.ApplyValue();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateData(false);
```

## See Also

- [Area Index](../)