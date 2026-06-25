---
title: "SingleQueryPopUpVM"
description: "Auto-generated class reference for SingleQueryPopUpVM."
---
# SingleQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries/SingleQueryPopUpVM.cs`

## Overview

`SingleQueryPopUpVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingQueryTime` | `public float RemainingQueryTime { get; set; }` |
| `TotalQueryTime` | `public float TotalQueryTime { get; set; }` |
| `IsTimerShown` | `public bool IsTimerShown { get; set; }` |

## Key Methods

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of SingleQueryPopUpVM from the subsystem API first
SingleQueryPopUpVM singleQueryPopUpVM = ...;
singleQueryPopUpVM.OnTick(0);
```

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**Purpose:** Runs the operation or workflow associated with affirmative action.

```csharp
// Obtain an instance of SingleQueryPopUpVM from the subsystem API first
SingleQueryPopUpVM singleQueryPopUpVM = ...;
singleQueryPopUpVM.ExecuteAffirmativeAction();
```

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**Purpose:** Runs the operation or workflow associated with negative action.

```csharp
// Obtain an instance of SingleQueryPopUpVM from the subsystem API first
SingleQueryPopUpVM singleQueryPopUpVM = ...;
singleQueryPopUpVM.ExecuteNegativeAction();
```

### OnClearData
`public override void OnClearData()`

**Purpose:** Invoked when the clear data event is raised.

```csharp
// Obtain an instance of SingleQueryPopUpVM from the subsystem API first
SingleQueryPopUpVM singleQueryPopUpVM = ...;
singleQueryPopUpVM.OnClearData();
```

### SetData
`public void SetData(InquiryData data)`

**Purpose:** Assigns a new value to data and updates the object's internal state.

```csharp
// Obtain an instance of SingleQueryPopUpVM from the subsystem API first
SingleQueryPopUpVM singleQueryPopUpVM = ...;
singleQueryPopUpVM.SetData(data);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SingleQueryPopUpVM singleQueryPopUpVM = ...;
singleQueryPopUpVM.OnTick(0);
```

## See Also

- [Area Index](../)