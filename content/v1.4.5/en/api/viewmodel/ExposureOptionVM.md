---
title: "ExposureOptionVM"
description: "Auto-generated class reference for ExposureOptionVM."
---
# ExposureOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ExposureOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ExposureOptionVM.cs`

## Overview

`ExposureOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ExplanationText` | `public string ExplanationText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `InitialValue` | `public float InitialValue { get; set; }` |
| `Visible` | `public bool Visible { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ExposureOptionVM from the subsystem API first
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.RefreshValues();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Runs the operation or workflow associated with confirm.

```csharp
// Obtain an instance of ExposureOptionVM from the subsystem API first
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.ExecuteConfirm();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of ExposureOptionVM from the subsystem API first
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.ExecuteCancel();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of ExposureOptionVM from the subsystem API first
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.SetCancelInputKey(hotkey);
```

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to confirm input key and updates the object's internal state.

```csharp
// Obtain an instance of ExposureOptionVM from the subsystem API first
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.SetConfirmInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)