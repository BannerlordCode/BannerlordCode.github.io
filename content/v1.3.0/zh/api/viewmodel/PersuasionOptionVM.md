---
title: "PersuasionOptionVM"
description: "PersuasionOptionVM 的自动生成类参考。"
---
# PersuasionOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs`

## 概述

`PersuasionOptionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPersuasionResultReady` | `public bool IsPersuasionResultReady { get; set; }` |
| `IsABlockingOption` | `public bool IsABlockingOption { get; set; }` |
| `IsAProgressingOption` | `public bool IsAProgressingOption { get; set; }` |
| `SuccessChance` | `public int SuccessChance { get; set; }` |
| `PersuasionResultIndex` | `public int PersuasionResultIndex { get; set; }` |
| `FailChance` | `public int FailChance { get; set; }` |
| `CritSuccessChance` | `public int CritSuccessChance { get; set; }` |
| `CritFailChance` | `public int CritFailChance { get; set; }` |
| `FailChanceText` | `public string FailChanceText { get; set; }` |
| `CritFailChanceText` | `public string CritFailChanceText { get; set; }` |
| `SuccessChanceText` | `public string SuccessChanceText { get; set; }` |
| `CritSuccessChanceText` | `public string CritSuccessChanceText { get; set; }` |
| `CritFailHint` | `public BasicTooltipViewModel CritFailHint { get; set; }` |
| `FailHint` | `public BasicTooltipViewModel FailHint { get; set; }` |
| `SuccessHint` | `public BasicTooltipViewModel SuccessHint { get; set; }` |
| `CritSuccessHint` | `public BasicTooltipViewModel CritSuccessHint { get; set; }` |
| `BlockingOptionHint` | `public HintViewModel BlockingOptionHint { get; set; }` |
| `ProgressingOptionHint` | `public HintViewModel ProgressingOptionHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PersuasionOptionVM 实例
PersuasionOptionVM persuasionOptionVM = ...;
persuasionOptionVM.RefreshValues();
```

### GetPersuasionAdditionalText
`public string GetPersuasionAdditionalText()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion additional text」 的结果。

```csharp
// 先通过子系统 API 拿到 PersuasionOptionVM 实例
PersuasionOptionVM persuasionOptionVM = ...;
var result = persuasionOptionVM.GetPersuasionAdditionalText();
```

### ExecuteReadyToContinue
`public void ExecuteReadyToContinue()`

**用途 / Purpose:** 执行 「ready to continue」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PersuasionOptionVM 实例
PersuasionOptionVM persuasionOptionVM = ...;
persuasionOptionVM.ExecuteReadyToContinue();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PersuasionOptionVM persuasionOptionVM = ...;
persuasionOptionVM.RefreshValues();
```

## 参见

- [本区域目录](../)