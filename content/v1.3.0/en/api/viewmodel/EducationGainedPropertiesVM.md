---
title: "EducationGainedPropertiesVM"
description: "Auto-generated class reference for EducationGainedPropertiesVM."
---
# EducationGainedPropertiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainedPropertiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedPropertiesVM.cs`

## Overview

`EducationGainedPropertiesVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GainGroups` | `public MBBindingList<EducationGainGroupItemVM> GainGroups { get; set; }` |
| `OtherSkills` | `public MBBindingList<EducationGainedSkillItemVM> OtherSkills { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EducationGainedPropertiesVM instance = ...;
```

## See Also

- [Area Index](../)