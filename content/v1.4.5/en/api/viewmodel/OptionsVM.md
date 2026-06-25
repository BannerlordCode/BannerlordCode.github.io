---
title: "OptionsVM"
description: "Auto-generated class reference for OptionsVM."
---
# OptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/OptionsVM.cs`

## Overview

`OptionsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentOptionsMode` | `public OptionsMode CurrentOptionsMode { get; }` |
| `CategoryIndex` | `public int CategoryIndex { get; set; }` |
| `OptionsLbl` | `public string OptionsLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `IsConsole` | `public bool IsConsole { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `VideoMemoryUsageName` | `public string VideoMemoryUsageName { get; set; }` |
| `VideoMemoryUsageText` | `public string VideoMemoryUsageText { get; set; }` |
| `VideoMemoryUsageNormalized` | `public float VideoMemoryUsageNormalized { get; set; }` |
| `BrightnessPopUp` | `public BrightnessOptionVM BrightnessPopUp { get; set; }` |
| `ExposurePopUp` | `public ExposureOptionVM ExposurePopUp { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.RefreshValues();
```

### ExecuteCloseOptions
`public void ExecuteCloseOptions()`

**Purpose:** Runs the operation or workflow associated with `close options`.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.ExecuteCloseOptions();
```

### GetActiveCategory
`public ViewModel GetActiveCategory()`

**Purpose:** Reads and returns the `active category` value held by the current object.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
var result = optionsVM.GetActiveCategory();
```

### GetIndexOfCategory
`public int GetIndexOfCategory(ViewModel categoryVM)`

**Purpose:** Reads and returns the `index of category` value held by the current object.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
var result = optionsVM.GetIndexOfCategory(categoryVM);
```

### GetConfig
`public float GetConfig(IOptionData data)`

**Purpose:** Reads and returns the `config` value held by the current object.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
var result = optionsVM.GetConfig(data);
```

### SetConfig
`public void SetConfig(IOptionData data, float val)`

**Purpose:** Assigns a new value to `config` and updates the object's internal state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SetConfig(data, 0);
```

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SelectPreviousCategory();
```

### SelectNextCategory
`public void SelectNextCategory()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SelectNextCategory();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.OnFinalize();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with `done`.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.ExecuteDone();
```

### IsOptionsChanged
`public bool IsOptionsChanged()`

**Purpose:** Determines whether the current object is in the `options changed` state or condition.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
var result = optionsVM.IsOptionsChanged();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SetCancelInputKey(hotkey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `previous tab input key` and updates the object's internal state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SetPreviousTabInputKey(hotkey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `next tab input key` and updates the object's internal state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SetNextTabInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `reset input key` and updates the object's internal state.

```csharp
// Obtain an instance of OptionsVM from the subsystem API first
OptionsVM optionsVM = ...;
optionsVM.SetResetInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OptionsVM optionsVM = ...;
optionsVM.RefreshValues();
```

## See Also

- [Area Index](../)