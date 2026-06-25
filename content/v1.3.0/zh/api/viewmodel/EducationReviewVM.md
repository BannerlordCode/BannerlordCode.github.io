---
title: "EducationReviewVM"
description: "EducationReviewVM 的自动生成类参考。"
---
# EducationReviewVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationReviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs`

## 概述

`EducationReviewVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Education`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Education` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `StageCompleteText` | `public string StageCompleteText { get; set; }` |
| `ReviewList` | `public MBBindingList<EducationReviewItemVM> ReviewList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EducationReviewVM 实例
EducationReviewVM educationReviewVM = ...;
educationReviewVM.RefreshValues();
```

### SetGainForStage
`public void SetGainForStage(int pageIndex, string gainText)`

**用途 / Purpose:** 为 「gain for stage」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EducationReviewVM 实例
EducationReviewVM educationReviewVM = ...;
educationReviewVM.SetGainForStage(0, "example");
```

### SetCurrentPage
`public void SetCurrentPage(int currentPageIndex)`

**用途 / Purpose:** 为 「current page」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EducationReviewVM 实例
EducationReviewVM educationReviewVM = ...;
educationReviewVM.SetCurrentPage(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EducationReviewVM educationReviewVM = ...;
educationReviewVM.RefreshValues();
```

## 参见

- [本区域目录](../)