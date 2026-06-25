---
title: "TextQueryPopUpVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextQueryPopUpVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TextQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs`

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
var value = new TextQueryPopUpVM();
value.SetData(data);
```

## See Also

- [Complete Class Catalog](../catalog)