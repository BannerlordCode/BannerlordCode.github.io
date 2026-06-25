---
title: "EducationVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EducationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationVM.cs`

## 概述

`EducationVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Education`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Education` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `StageTitleText` | `public string StageTitleText { get; set; }` |
| `ChooseText` | `public string ChooseText { get; set; }` |
| `PageDescriptionText` | `public string PageDescriptionText { get; set; }` |
| `OptionEffectText` | `public string OptionEffectText { get; set; }` |
| `OptionDescriptionText` | `public string OptionDescriptionText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |
| `CanGoBack` | `public bool CanGoBack { get; set; }` |
| `OnlyHasOneOption` | `public bool OnlyHasOneOption { get; set; }` |
| `Options` | `public MBBindingList<EducationOptionVM> Options { get; set; }` |
| `GainedPropertiesController` | `public EducationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `Review` | `public EducationReviewVM Review { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteNextStage
`public void ExecuteNextStage()`

**用途 / Purpose:** 执行 `next stage` 操作或流程。

### ExecutePreviousStage
`public void ExecutePreviousStage()`

**用途 / Purpose:** 执行 `previous stage` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new EducationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)