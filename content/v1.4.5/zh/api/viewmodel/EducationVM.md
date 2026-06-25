---
title: "EducationVM"
description: "EducationVM 的自动生成类参考。"
---
# EducationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EducationVM 实例
EducationVM educationVM = ...;
educationVM.RefreshValues();
```

### ExecuteNextStage
`public void ExecuteNextStage()`

**用途 / Purpose:** 执行 「next stage」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EducationVM 实例
EducationVM educationVM = ...;
educationVM.ExecuteNextStage();
```

### ExecutePreviousStage
`public void ExecutePreviousStage()`

**用途 / Purpose:** 执行 「previous stage」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EducationVM 实例
EducationVM educationVM = ...;
educationVM.ExecutePreviousStage();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EducationVM 实例
EducationVM educationVM = ...;
educationVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EducationVM 实例
EducationVM educationVM = ...;
educationVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EducationVM 实例
EducationVM educationVM = ...;
educationVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EducationVM educationVM = ...;
educationVM.RefreshValues();
```

## 参见

- [本区域目录](../)