---
title: "TextQueryPopUpVM"
description: "Auto-generated class reference for TextQueryPopUpVM."
---
# TextQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TextQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries/TextQueryPopUpVM.cs`

## Overview

`TextQueryPopUpVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InputText` | `public string InputText { get; set; }` |
| `IsInputObfuscated` | `public bool IsInputObfuscated { get; set; }` |
| `DoneButtonDisabledReasonHint` | `public HintViewModel DoneButtonDisabledReasonHint { get; set; }` |

## Key Methods

### SetData
`public void SetData(TextInquiryData data)`

**Purpose:** **Purpose:** Assigns a new value to data and updates the object's internal state.

```csharp
// Obtain an instance of TextQueryPopUpVM from the subsystem API first
TextQueryPopUpVM textQueryPopUpVM = ...;
textQueryPopUpVM.SetData(data);
```

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with affirmative action.

```csharp
// Obtain an instance of TextQueryPopUpVM from the subsystem API first
TextQueryPopUpVM textQueryPopUpVM = ...;
textQueryPopUpVM.ExecuteAffirmativeAction();
```

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with negative action.

```csharp
// Obtain an instance of TextQueryPopUpVM from the subsystem API first
TextQueryPopUpVM textQueryPopUpVM = ...;
textQueryPopUpVM.ExecuteNegativeAction();
```

### OnClearData
`public override void OnClearData()`

**Purpose:** **Purpose:** Invoked when the clear data event is raised.

```csharp
// Obtain an instance of TextQueryPopUpVM from the subsystem API first
TextQueryPopUpVM textQueryPopUpVM = ...;
textQueryPopUpVM.OnClearData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextQueryPopUpVM textQueryPopUpVM = ...;
textQueryPopUpVM.SetData(data);
```

## See Also

- [Area Index](../)