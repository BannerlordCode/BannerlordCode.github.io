<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationReviewItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationReviewItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationReviewItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewItemVM.cs`

## Overview

`EducationReviewItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `GainText` | `public string GainText { get; set; }` |

## Key Methods

### UpdateWith
`public void UpdateWith(string gainText)`

**Purpose:** Updates the state or data of `with`.

## Usage Example

```csharp
var value = new EducationReviewItemVM();
value.UpdateWith("example");
```

## See Also

- [Complete Class Catalog](../catalog)