<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SkillVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `HowToLearnText` | `public string HowToLearnText { get; set; }` |
| `HowToLearnTitle` | `public string HowToLearnTitle { get; set; }` |
| `CanAddFocus` | `public bool CanAddFocus { get; set; }` |
| `CanLearnSkill` | `public bool CanLearnSkill { get; set; }` |
| `NextLevelLearningRateText` | `public string NextLevelLearningRateText { get; set; }` |
| `NextLevelCostText` | `public string NextLevelCostText { get; set; }` |
| `ProgressHint` | `public BasicTooltipViewModel ProgressHint { get; set; }` |
| `SkillXPHint` | `public BasicTooltipViewModel SkillXPHint { get; set; }` |
| `AddFocusHint` | `public HintViewModel AddFocusHint { get; set; }` |
| `LearningLimitTooltip` | `public BasicTooltipViewModel LearningLimitTooltip { get; set; }` |
| `LearningRateTooltip` | `public BasicTooltipViewModel LearningRateTooltip { get; set; }` |
| `ProgressPercentage` | `public double ProgressPercentage { get; set; }` |
| `LearningRate` | `public float LearningRate { get; set; }` |
| `CurrentSkillXP` | `public int CurrentSkillXP { get; set; }` |
| `NextLevel` | `public int NextLevel { get; set; }` |
| `FullLearningRateLevel` | `public int FullLearningRateLevel { get; set; }` |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel { get; set; }` |
| `NumOfUnopenedPerks` | `public int NumOfUnopenedPerks { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### InitializeValues

```csharp
public void InitializeValues()
```

### RefreshWithCurrentValues

```csharp
public void RefreshWithCurrentValues()
```

### CreateLists

```csharp
public void CreateLists()
```

### RefreshLists

```csharp
public void RefreshLists(SkillObject skill = null)
```

### RefreshCanAddFocus

```csharp
public void RefreshCanAddFocus()
```

### ExecuteAddFocus

```csharp
public void ExecuteAddFocus()
```

### ExecuteShowFocusConcept

```csharp
public void ExecuteShowFocusConcept()
```

### ExecuteShowSkillConcept

```csharp
public void ExecuteShowSkillConcept()
```

### ExecuteInspect

```csharp
public void ExecuteInspect()
```

### ResetChanges

```csharp
public void ResetChanges()
```

### IsThereAnyChanges

```csharp
public bool IsThereAnyChanges()
```

### ApplyChanges

```csharp
public void ApplyChanges()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)