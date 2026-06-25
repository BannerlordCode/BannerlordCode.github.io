---
title: "SkillVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SkillVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs`

## 概述

`SkillVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `FocusCostText` | `public string FocusCostText { get; set; }` |
| `Perks` | `public MBBindingList<PerkVM> Perks { get; set; }` |
| `SkillEffects` | `public MBBindingList<BindingListStringItem> SkillEffects { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `CurrentLearningRateText` | `public string CurrentLearningRateText { get; set; }` |
| `CurrentFocusLevel` | `public int CurrentFocusLevel { get; set; }` |
| `AddFocusText` | `public string AddFocusText { get; set; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `Level` | `public int Level { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### InitializeValues
`public void InitializeValues()`

**用途 / Purpose:** 初始化 `values` 的状态、资源或绑定。

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**用途 / Purpose:** 刷新 `with current values` 的显示或缓存。

### CreateLists
`public void CreateLists()`

**用途 / Purpose:** 创建一个 `lists` 实例或对象。

### RefreshLists
`public void RefreshLists(SkillObject skill = null)`

**用途 / Purpose:** 刷新 `lists` 的显示或缓存。

### RefreshCanAddFocus
`public void RefreshCanAddFocus()`

**用途 / Purpose:** 刷新 `can add focus` 的显示或缓存。

### ExecuteAddFocus
`public void ExecuteAddFocus()`

**用途 / Purpose:** 执行 `add focus` 操作或流程。

### ExecuteShowFocusConcept
`public void ExecuteShowFocusConcept()`

**用途 / Purpose:** 执行 `show focus concept` 操作或流程。

### ExecuteShowSkillConcept
`public void ExecuteShowSkillConcept()`

**用途 / Purpose:** 执行 `show skill concept` 操作或流程。

### ExecuteInspect
`public void ExecuteInspect()`

**用途 / Purpose:** 执行 `inspect` 操作或流程。

### ResetChanges
`public void ResetChanges()`

**用途 / Purpose:** 将 `changes` 重置为初始状态。

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 处理 `is there any changes` 相关逻辑。

### ApplyChanges
`public void ApplyChanges()`

**用途 / Purpose:** 将 `changes` 应用到当前对象。

## 使用示例

```csharp
var value = new SkillVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)