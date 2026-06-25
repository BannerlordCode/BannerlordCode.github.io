---
title: "MultiSelectionQueryPopUpVM"
description: "Auto-generated class reference for MultiSelectionQueryPopUpVM."
---
# MultiSelectionQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiSelectionQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries/MultiSelectionQueryPopUpVM.cs`

## Overview

`MultiSelectionQueryPopUpVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InquiryElements` | `public MBBindingList<InquiryElementVM> InquiryElements { get; set; }` |
| `MaxSelectableOptionCount` | `public int MaxSelectableOptionCount { get; set; }` |
| `MinSelectableOptionCount` | `public int MinSelectableOptionCount { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |

## Key Methods

### SetData
`public void SetData(MultiSelectionInquiryData data)`

**Purpose:** Assigns a new value to `data` and updates the object's internal state.

```csharp
// Obtain an instance of MultiSelectionQueryPopUpVM from the subsystem API first
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.SetData(data);
```

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**Purpose:** Runs the operation or workflow associated with `affirmative action`.

```csharp
// Obtain an instance of MultiSelectionQueryPopUpVM from the subsystem API first
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.ExecuteAffirmativeAction();
```

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**Purpose:** Runs the operation or workflow associated with `negative action`.

```csharp
// Obtain an instance of MultiSelectionQueryPopUpVM from the subsystem API first
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.ExecuteNegativeAction();
```

### OnClearData
`public override void OnClearData()`

**Purpose:** Invoked when the `clear data` event is raised.

```csharp
// Obtain an instance of MultiSelectionQueryPopUpVM from the subsystem API first
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.OnClearData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.SetData(data);
```

## See Also

- [Area Index](../)