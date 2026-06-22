<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationGainedSkillItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationGainedSkillItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EducationGainedSkillItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Education` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SkillObj` | `public SkillObject SkillObj { get; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `SkillValueInt` | `public int SkillValueInt { get; set; }` |
| `Skill` | `public EncyclopediaSkillVM Skill { get; set; }` |
| `HasFocusIncreasedInCurrentStage` | `public bool HasFocusIncreasedInCurrentStage { get; set; }` |
| `HasSkillValueIncreasedInCurrentStage` | `public bool HasSkillValueIncreasedInCurrentStage { get; set; }` |
| `FocusPointGainList` | `public MBBindingList<BoolItemWithActionVM> FocusPointGainList { get; set; }` |


## 主要方法

### SetFocusValue

```csharp
public void SetFocusValue(int gainedFromOtherStages, int gainedFromCurrentStage)
```

### SetSkillValue

```csharp
public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)