---
title: "EducationReviewVM"
description: "Auto-generated class reference for EducationReviewVM."
---
# EducationReviewVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationReviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationReviewVM.cs`

## Overview

`EducationReviewVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `StageCompleteText` | `public string StageCompleteText { get; set; }` |
| `ReviewList` | `public MBBindingList<EducationReviewItemVM> ReviewList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EducationReviewVM from the subsystem API first
EducationReviewVM educationReviewVM = ...;
educationReviewVM.RefreshValues();
```

### SetGainForStage
`public void SetGainForStage(int pageIndex, string gainText)`

**Purpose:** Assigns a new value to gain for stage and updates the object's internal state.

```csharp
// Obtain an instance of EducationReviewVM from the subsystem API first
EducationReviewVM educationReviewVM = ...;
educationReviewVM.SetGainForStage(0, "example");
```

### SetCurrentPage
`public void SetCurrentPage(int currentPageIndex)`

**Purpose:** Assigns a new value to current page and updates the object's internal state.

```csharp
// Obtain an instance of EducationReviewVM from the subsystem API first
EducationReviewVM educationReviewVM = ...;
educationReviewVM.SetCurrentPage(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationReviewVM educationReviewVM = ...;
educationReviewVM.RefreshValues();
```

## See Also

- [Area Index](../)