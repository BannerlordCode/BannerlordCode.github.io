---
title: "EducationGainGroupItemVM"
description: "Auto-generated class reference for EducationGainGroupItemVM."
---
# EducationGainGroupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationGainGroupItemVM.cs`

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

**Purpose:** Returns values to its default or initial condition.

```csharp
// Obtain an instance of EducationGainGroupItemVM from the subsystem API first
EducationGainGroupItemVM educationGainGroupItemVM = ...;
educationGainGroupItemVM.ResetValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationGainGroupItemVM educationGainGroupItemVM = ...;
educationGainGroupItemVM.ResetValues();
```

## See Also

- [Area Index](../)