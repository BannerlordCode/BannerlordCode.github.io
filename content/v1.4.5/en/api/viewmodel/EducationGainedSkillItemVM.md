---
title: "EducationGainedSkillItemVM"
description: "Auto-generated class reference for EducationGainedSkillItemVM."
---
# EducationGainedSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainedSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationGainedSkillItemVM.cs`

## Overview

`EducationGainedSkillItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillObj` | `public SkillObject SkillObj { get; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `SkillValueInt` | `public int SkillValueInt { get; set; }` |
| `Skill` | `public EncyclopediaSkillVM Skill { get; set; }` |
| `HasFocusIncreasedInCurrentStage` | `public bool HasFocusIncreasedInCurrentStage { get; set; }` |
| `HasSkillValueIncreasedInCurrentStage` | `public bool HasSkillValueIncreasedInCurrentStage { get; set; }` |
| `FocusPointGainList` | `public MBBindingList<BoolItemWithActionVM> FocusPointGainList { get; set; }` |

## Key Methods

### SetFocusValue
`public void SetFocusValue(int gainedFromOtherStages, int gainedFromCurrentStage)`

**Purpose:** Assigns a new value to focus value and updates the object's internal state.

```csharp
// Obtain an instance of EducationGainedSkillItemVM from the subsystem API first
EducationGainedSkillItemVM educationGainedSkillItemVM = ...;
educationGainedSkillItemVM.SetFocusValue(0, 0);
```

### SetSkillValue
`public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)`

**Purpose:** Assigns a new value to skill value and updates the object's internal state.

```csharp
// Obtain an instance of EducationGainedSkillItemVM from the subsystem API first
EducationGainedSkillItemVM educationGainedSkillItemVM = ...;
educationGainedSkillItemVM.SetSkillValue(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationGainedSkillItemVM educationGainedSkillItemVM = ...;
educationGainedSkillItemVM.SetFocusValue(0, 0);
```

## See Also

- [Area Index](../)