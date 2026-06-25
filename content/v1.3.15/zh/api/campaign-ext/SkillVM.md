---
title: "SkillVM"
description: "SkillVM 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.RefreshValues();
```

### InitializeValues
`public void InitializeValues()`

**用途 / Purpose:** **用途 / Purpose:** 为 values 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.InitializeValues();
```

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 with current values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.RefreshWithCurrentValues();
```

### CreateLists
`public void CreateLists()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 lists 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.CreateLists();
```

### RefreshLists
`public void RefreshLists(SkillObject skill = null)`

**用途 / Purpose:** **用途 / Purpose:** 使 lists 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.RefreshLists(null);
```

### RefreshCanAddFocus
`public void RefreshCanAddFocus()`

**用途 / Purpose:** **用途 / Purpose:** 使 can add focus 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.RefreshCanAddFocus();
```

### ExecuteAddFocus
`public void ExecuteAddFocus()`

**用途 / Purpose:** **用途 / Purpose:** 执行 add focus 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.ExecuteAddFocus();
```

### ExecuteShowFocusConcept
`public void ExecuteShowFocusConcept()`

**用途 / Purpose:** **用途 / Purpose:** 执行 show focus concept 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.ExecuteShowFocusConcept();
```

### ExecuteShowSkillConcept
`public void ExecuteShowSkillConcept()`

**用途 / Purpose:** **用途 / Purpose:** 执行 show skill concept 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.ExecuteShowSkillConcept();
```

### ExecuteInspect
`public void ExecuteInspect()`

**用途 / Purpose:** **用途 / Purpose:** 执行 inspect 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.ExecuteInspect();
```

### ResetChanges
`public void ResetChanges()`

**用途 / Purpose:** **用途 / Purpose:** 将 changes 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.ResetChanges();
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there any changes 状态或条件。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
var result = skillVM.IsThereAnyChanges();
```

### ApplyChanges
`public void ApplyChanges()`

**用途 / Purpose:** **用途 / Purpose:** 将 changes 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 SkillVM 实例
SkillVM skillVM = ...;
skillVM.ApplyChanges();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SkillVM skillVM = ...;
skillVM.RefreshValues();
```

## 参见

- [本区域目录](../)