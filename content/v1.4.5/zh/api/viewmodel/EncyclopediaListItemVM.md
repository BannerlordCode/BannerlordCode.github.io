---
title: "EncyclopediaListItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListItemVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Execute
`public void Execute()`

**用途 / Purpose:** 执行 `execute` 操作或流程。

### SetComparedValue
`public void SetComparedValue(EncyclopediaListItemComparerBase comparer)`

**用途 / Purpose:** 设置 `compared value` 的值或状态。

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**用途 / Purpose:** 执行 `begin tooltip` 操作或流程。

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**用途 / Purpose:** 执行 `end tooltip` 操作或流程。

## 使用示例

```csharp
var value = new EncyclopediaListItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)