---
title: "PopUpBaseVM"
description: "Auto-generated class reference for PopUpBaseVM."
---
# PopUpBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`

## Overview

`PopUpBaseVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `PopUpLabel` | `public string PopUpLabel { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; set; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; set; }` |
| `IsButtonOkEnabled` | `public bool IsButtonOkEnabled { get; set; }` |
| `IsButtonCancelEnabled` | `public bool IsButtonCancelEnabled { get; set; }` |
| `ButtonOkHint` | `public HintViewModel ButtonOkHint { get; set; }` |
| `ButtonCancelHint` | `public HintViewModel ButtonCancelHint { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### ExecuteAffirmativeAction
`public abstract void ExecuteAffirmativeAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with affirmative action.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.ExecuteAffirmativeAction();
```

### ExecuteNegativeAction
`public abstract void ExecuteNegativeAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with negative action.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.ExecuteNegativeAction();
```

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.OnTick(0);
```

### OnClearData
`public virtual void OnClearData()`

**Purpose:** **Purpose:** Invoked when the clear data event is raised.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.OnClearData();
```

### ForceRefreshKeyVisuals
`public void ForceRefreshKeyVisuals()`

**Purpose:** **Purpose:** Executes the ForceRefreshKeyVisuals logic.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.ForceRefreshKeyVisuals();
```

### CloseQuery
`public void CloseQuery()`

**Purpose:** **Purpose:** Closes the resource or UI associated with query.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.CloseQuery();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of PopUpBaseVM from the subsystem API first
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PopUpBaseVM instance = ...;
```

## See Also

- [Area Index](../)