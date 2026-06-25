---
title: "EducationVM"
description: "Auto-generated class reference for EducationVM."
---
# EducationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationVM.cs`

## Overview

`EducationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `StageTitleText` | `public string StageTitleText { get; set; }` |
| `ChooseText` | `public string ChooseText { get; set; }` |
| `PageDescriptionText` | `public string PageDescriptionText { get; set; }` |
| `OptionEffectText` | `public string OptionEffectText { get; set; }` |
| `OptionDescriptionText` | `public string OptionDescriptionText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |
| `CanGoBack` | `public bool CanGoBack { get; set; }` |
| `OnlyHasOneOption` | `public bool OnlyHasOneOption { get; set; }` |
| `Options` | `public MBBindingList<EducationOptionVM> Options { get; set; }` |
| `GainedPropertiesController` | `public EducationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `Review` | `public EducationReviewVM Review { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EducationVM from the subsystem API first
EducationVM educationVM = ...;
educationVM.RefreshValues();
```

### ExecuteNextStage
`public void ExecuteNextStage()`

**Purpose:** Runs the operation or workflow associated with `next stage`.

```csharp
// Obtain an instance of EducationVM from the subsystem API first
EducationVM educationVM = ...;
educationVM.ExecuteNextStage();
```

### ExecutePreviousStage
`public void ExecutePreviousStage()`

**Purpose:** Runs the operation or workflow associated with `previous stage`.

```csharp
// Obtain an instance of EducationVM from the subsystem API first
EducationVM educationVM = ...;
educationVM.ExecutePreviousStage();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of EducationVM from the subsystem API first
EducationVM educationVM = ...;
educationVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of EducationVM from the subsystem API first
EducationVM educationVM = ...;
educationVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of EducationVM from the subsystem API first
EducationVM educationVM = ...;
educationVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationVM educationVM = ...;
educationVM.RefreshValues();
```

## See Also

- [Area Index](../)