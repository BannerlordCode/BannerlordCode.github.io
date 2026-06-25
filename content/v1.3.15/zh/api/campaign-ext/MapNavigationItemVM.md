---
title: "MapNavigationItemVM"
description: "MapNavigationItemVM 的自动生成类参考。"
---
# MapNavigationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNavigationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs`

## 概述

`MapNavigationItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasAlert` | `public bool HasAlert { get; set; }` |
| `ItemId` | `public string ItemId { get; set; }` |
| `AlertText` | `public string AlertText { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `AlertTooltip` | `public BasicTooltipViewModel AlertTooltip { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapNavigationItemVM 实例
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.RefreshValues();
```

### RefreshStates
`public void RefreshStates(bool forceRefresh = false)`

**用途 / Purpose:** 使 「states」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapNavigationItemVM 实例
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.RefreshStates(false);
```

### ExecuteOpen
`public void ExecuteOpen()`

**用途 / Purpose:** 执行 「open」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationItemVM 实例
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.ExecuteOpen();
```

### ExecuteGoToLink
`public void ExecuteGoToLink()`

**用途 / Purpose:** 执行 「go to link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNavigationItemVM 实例
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.ExecuteGoToLink();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)