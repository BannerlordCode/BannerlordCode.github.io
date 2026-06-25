---
title: "EducationReviewItemVM"
description: "Auto-generated class reference for EducationReviewItemVM."
---
# EducationReviewItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationReviewItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationReviewItemVM.cs`

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

**Purpose:** Recalculates and stores the latest representation of `with`.

```csharp
// Obtain an instance of EducationReviewItemVM from the subsystem API first
EducationReviewItemVM educationReviewItemVM = ...;
educationReviewItemVM.UpdateWith("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationReviewItemVM educationReviewItemVM = ...;
educationReviewItemVM.UpdateWith("example");
```

## See Also

- [Area Index](../)