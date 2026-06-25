---
title: "EncyclopediaListItemVM"
description: "EncyclopediaListItemVM 的自动生成类参考。"
---
# EncyclopediaListItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListItemVM.cs`

## 概述

`EncyclopediaListItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Object` | `public object Object { get; }` |
| `ListItem` | `public EncyclopediaListItem ListItem { get; set; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues { get; set; }` |
| `Id` | `public string Id { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ComparedValue` | `public string ComparedValue { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListItemVM 实例
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.RefreshValues();
```

### Execute
`public void Execute()`

**用途 / Purpose:** **用途 / Purpose:** 执行当前对象代表的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListItemVM 实例
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.Execute();
```

### SetComparedValue
`public void SetComparedValue(EncyclopediaListItemComparerBase comparer)`

**用途 / Purpose:** **用途 / Purpose:** 为 compared value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListItemVM 实例
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.SetComparedValue(comparer);
```

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 begin tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListItemVM 实例
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.ExecuteBeginTooltip();
```

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 end tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListItemVM 实例
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.ExecuteEndTooltip();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)