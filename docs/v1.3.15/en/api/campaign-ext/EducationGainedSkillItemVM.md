<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationGainedSkillItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationGainedSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EducationGainedSkillItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Education` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void SetFocusValue(int gainedFromOtherStages, int gainedFromCurrentStage)
```

### SetSkillValue

```csharp
public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)