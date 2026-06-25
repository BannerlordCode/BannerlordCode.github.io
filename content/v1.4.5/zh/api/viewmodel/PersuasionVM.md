---
title: "PersuasionVM"
description: "PersuasionVM 的自动生成类参考。"
---
# PersuasionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Conversation/PersuasionVM.cs`

## 概述

`PersuasionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PersuasionHint` | `public BasicTooltipViewModel PersuasionHint { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `PersuasionProgress` | `public MBBindingList<BoolItemWithActionVM> PersuasionProgress { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |
| `CurrentSuccessChance` | `public int CurrentSuccessChance { get; set; }` |
| `CurrentPersuasionOption` | `public PersuasionOptionVM CurrentPersuasionOption { get; set; }` |
| `CurrentFailChance` | `public int CurrentFailChance { get; set; }` |
| `CurrentCritSuccessChance` | `public int CurrentCritSuccessChance { get; set; }` |
| `CurrentCritFailChance` | `public int CurrentCritFailChance { get; set; }` |

## 主要方法

### OnPersuasionProgress
`public void OnPersuasionProgress(Tuple<PersuasionOptionArgs, PersuasionOptionResult> selectedOption)`

**用途 / Purpose:** **用途 / Purpose:** 在 persuasion progress 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PersuasionVM 实例
PersuasionVM persuasionVM = ...;
persuasionVM.OnPersuasionProgress(tuple<PersuasionOptionArgs, selectedOption);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PersuasionVM 实例
PersuasionVM persuasionVM = ...;
persuasionVM.RefreshValues();
```

### SetCurrentOption
`public void SetCurrentOption(PersuasionOptionVM option)`

**用途 / Purpose:** **用途 / Purpose:** 为 current option 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PersuasionVM 实例
PersuasionVM persuasionVM = ...;
persuasionVM.SetCurrentOption(option);
```

### RefreshPersusasion
`public void RefreshPersusasion()`

**用途 / Purpose:** **用途 / Purpose:** 使 persusasion 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PersuasionVM 实例
PersuasionVM persuasionVM = ...;
persuasionVM.RefreshPersusasion();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PersuasionVM persuasionVM = ...;
persuasionVM.OnPersuasionProgress(tuple<PersuasionOptionArgs, selectedOption);
```

## 参见

- [本区域目录](../)