---
title: "EncyclopediaListFilterVM"
description: "EncyclopediaListFilterVM 的自动生成类参考。"
---
# EncyclopediaListFilterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListFilterVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs`

## 概述

`EncyclopediaListFilterVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListFilterVM 实例
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.RefreshValues();
```

### CopyFilterFrom
`public void CopyFilterFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**用途 / Purpose:** **用途 / Purpose:** 把当前对象的filter from状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListFilterVM 实例
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.CopyFilterFrom(dictionary<EncyclopediaFilterItem, false);
```

### ExecuteOnFilterActivated
`public void ExecuteOnFilterActivated()`

**用途 / Purpose:** **用途 / Purpose:** 执行 on filter activated 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListFilterVM 实例
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.ExecuteOnFilterActivated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.RefreshValues();
```

## 参见

- [本区域目录](../)