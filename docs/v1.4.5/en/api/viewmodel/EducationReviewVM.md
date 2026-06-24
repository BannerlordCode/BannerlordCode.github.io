<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationReviewVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EducationReviewVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationReviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationReviewVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### SetGainForStage
`public void SetGainForStage(int pageIndex, string gainText)`

**Purpose:** Sets the value or state of `gain for stage`.

### SetCurrentPage
`public void SetCurrentPage(int currentPageIndex)`

**Purpose:** Sets the value or state of `current page`.

## Usage Example

```csharp
var value = new EducationReviewVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)