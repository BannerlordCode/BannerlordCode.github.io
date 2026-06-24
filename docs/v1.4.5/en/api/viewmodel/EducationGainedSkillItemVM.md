<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationGainedSkillItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EducationGainedSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainedSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationGainedSkillItemVM.cs`

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

**Purpose:** Sets the value or state of `focus value`.

### SetSkillValue
`public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)`

**Purpose:** Sets the value or state of `skill value`.

## Usage Example

```csharp
var value = new EducationGainedSkillItemVM();
value.SetFocusValue(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)