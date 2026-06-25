---
title: "BrightnessOptionVM"
description: "Auto-generated class reference for BrightnessOptionVM."
---
# BrightnessOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of BrightnessOptionVM from the subsystem API first
BrightnessOptionVM brightnessOptionVM = ...;
brightnessOptionVM.RefreshValues();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Runs the operation or workflow associated with `confirm`.

```csharp
// Obtain an instance of BrightnessOptionVM from the subsystem API first
BrightnessOptionVM brightnessOptionVM = ...;
brightnessOptionVM.ExecuteConfirm();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of BrightnessOptionVM from the subsystem API first
BrightnessOptionVM brightnessOptionVM = ...;
brightnessOptionVM.ExecuteCancel();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of BrightnessOptionVM from the subsystem API first
BrightnessOptionVM brightnessOptionVM = ...;
brightnessOptionVM.SetCancelInputKey(hotkey);
```

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `confirm input key` and updates the object's internal state.

```csharp
// Obtain an instance of BrightnessOptionVM from the subsystem API first
BrightnessOptionVM brightnessOptionVM = ...;
brightnessOptionVM.SetConfirmInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrightnessOptionVM brightnessOptionVM = ...;
brightnessOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)