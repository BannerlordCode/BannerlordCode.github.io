---
title: "BrightnessOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrightnessOptionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrightnessOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/BrightnessOptionVM.cs`

## Overview

`BrightnessOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ExplanationText` | `public string ExplanationText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `Value` | `public int Value { get; set; }` |
| `InitialValue` | `public int InitialValue { get; set; }` |
| `InitialValue1` | `public float InitialValue1 { get; set; }` |
| `InitialValue2` | `public float InitialValue2 { get; set; }` |
| `Value1` | `public int Value1 { get; set; }` |
| `Value2` | `public int Value2 { get; set; }` |
| `Visible` | `public bool Visible { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Executes the `confirm` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `confirm input key`.

## Usage Example

```csharp
var value = new BrightnessOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)