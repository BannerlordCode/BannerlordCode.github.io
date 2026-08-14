---
title: "EducationGainedSkillItemVM"
description: "EducationGainedSkillItemVM 的自动生成类参考。"
---
# EducationGainedSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainedSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs`

## 概述

`EducationGainedSkillItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Education`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Education` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetFocusValue(int gainedFromOtherStages, int gainedFromCurrentStage)`

**用途 / Purpose:** 为 focus value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EducationGainedSkillItemVM 实例
EducationGainedSkillItemVM educationGainedSkillItemVM = ...;
educationGainedSkillItemVM.SetFocusValue(0, 0);
```

### SetSkillValue
`public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)`

**用途 / Purpose:** 为 skill value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EducationGainedSkillItemVM 实例
EducationGainedSkillItemVM educationGainedSkillItemVM = ...;
educationGainedSkillItemVM.SetSkillValue(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EducationGainedSkillItemVM educationGainedSkillItemVM = ...;
educationGainedSkillItemVM.SetFocusValue(0, 0);
```

## 参见

- [本区域目录](../)