---
title: "EducationGainedAttributeItemVM"
description: "Auto-generated class reference for EducationGainedAttributeItemVM."
---
# EducationGainedAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainedAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationGainedAttributeItemVM.cs`

## Overview

`EducationGainedAttributeItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage { get; set; }` |

## Key Methods

### SetValue
`public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)`

**Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of EducationGainedAttributeItemVM from the subsystem API first
EducationGainedAttributeItemVM educationGainedAttributeItemVM = ...;
educationGainedAttributeItemVM.SetValue(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationGainedAttributeItemVM educationGainedAttributeItemVM = ...;
educationGainedAttributeItemVM.SetValue(0, 0);
```

## See Also

- [Area Index](../)