---
title: "ActionOptionDataVM"
description: "Auto-generated class reference for ActionOptionDataVM."
---
# ActionOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ActionOptionDataVM.cs`

## Overview

`ActionOptionDataVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionName` | `public string ActionName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.RefreshValues();
```

### Cancel
`public override void Cancel()`

**Purpose:** Checks whether the current object meets the preconditions for `cel`.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.Cancel();
```

### IsChanged
`public override bool IsChanged()`

**Purpose:** Determines whether the current object is in the `changed` state or condition.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
var result = actionOptionDataVM.IsChanged();
```

### ResetData
`public override void ResetData()`

**Purpose:** Returns `data` to its default or initial condition.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.ResetData();
```

### SetValue
`public override void SetValue(float value)`

**Purpose:** Assigns a new value to `value` and updates the object's internal state.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.SetValue(0);
```

### UpdateValue
`public override void UpdateValue()`

**Purpose:** Recalculates and stores the latest representation of `value`.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.UpdateValue();
```

### ApplyValue
`public override void ApplyValue()`

**Purpose:** Applies the effect of `value` to the current object.

```csharp
// Obtain an instance of ActionOptionDataVM from the subsystem API first
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.ApplyValue();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ActionOptionDataVM actionOptionDataVM = ...;
actionOptionDataVM.RefreshValues();
```

## See Also

- [Area Index](../)