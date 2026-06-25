---
title: "EducationGainGroupItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationGainGroupItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationGainGroupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainGroupItemVM.cs`

## Overview

`EducationGainGroupItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttributeObj` | `public CharacterAttribute AttributeObj { get; }` |
| `Skills` | `public MBBindingList<EducationGainedSkillItemVM> Skills { get; set; }` |
| `Attribute` | `public EducationGainedAttributeItemVM Attribute { get; set; }` |

## Key Methods

### ResetValues
`public void ResetValues()`

**Purpose:** Resets `values` to its initial state.

## Usage Example

```csharp
var value = new EducationGainGroupItemVM();
value.ResetValues();
```

## See Also

- [Complete Class Catalog](../catalog)