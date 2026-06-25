---
title: "MultiSelectionQueryPopUpVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiSelectionQueryPopUpVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiSelectionQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiSelectionQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs`

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

**Purpose:** Sets the value or state of `data`.

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**Purpose:** Executes the `affirmative action` operation or workflow.

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**Purpose:** Executes the `negative action` operation or workflow.

### OnClearData
`public override void OnClearData()`

**Purpose:** Called when the `clear data` event is raised.

## Usage Example

```csharp
var value = new MultiSelectionQueryPopUpVM();
value.SetData(data);
```

## See Also

- [Complete Class Catalog](../catalog)