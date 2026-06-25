---
title: "EducationGainedPropertiesVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationGainedPropertiesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
var value = new EducationGainedPropertiesVM();
```

## See Also

- [Complete Class Catalog](../catalog)