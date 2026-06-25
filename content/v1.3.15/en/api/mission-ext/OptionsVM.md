---
title: "OptionsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs`

## Overview

`OptionsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentOptionsMode` | `public OptionsVM.OptionsMode CurrentOptionsMode { get; }` |
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
| `GameKeyOptionGroups` | `public GameKeyOptionCategoryVM GameKeyOptionGroups { get; }` |
| `GamepadOptions` | `public GamepadOptionCategoryVM GamepadOptions { get; }` |
| `PerformanceOptions` | `public GroupedOptionCategoryVM PerformanceOptions { get; }` |
| `AudioOptions` | `public GroupedOptionCategoryVM AudioOptions { get; }` |
| `GameplayOptions` | `public GroupedOptionCategoryVM GameplayOptions { get; }` |
| `VideoOptions` | `public GroupedOptionCategoryVM VideoOptions { get; set; }` |
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteCloseOptions
`public void ExecuteCloseOptions()`

**Purpose:** Executes the `close options` operation or workflow.

### GetActiveCategory
`public ViewModel GetActiveCategory()`

**Purpose:** Gets the current value of `active category`.

### GetIndexOfCategory
`public int GetIndexOfCategory(ViewModel categoryVM)`

**Purpose:** Gets the current value of `index of category`.

### GetConfig
`public float GetConfig(IOptionData data)`

**Purpose:** Gets the current value of `config`.

### SetConfig
`public void SetConfig(IOptionData data, float val)`

**Purpose:** Sets the value or state of `config`.

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**Purpose:** Handles logic related to `select previous category`.

### SelectNextCategory
`public void SelectNextCategory()`

**Purpose:** Handles logic related to `select next category`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### IsOptionsChanged
`public bool IsOptionsChanged()`

**Purpose:** Handles logic related to `is options changed`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `previous tab input key`.

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `next tab input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

## Usage Example

```csharp
var value = new OptionsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)