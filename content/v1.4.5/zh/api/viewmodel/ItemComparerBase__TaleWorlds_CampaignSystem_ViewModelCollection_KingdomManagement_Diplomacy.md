---
title: "ItemComparerBase"
description: "ItemComparerBase 的自动生成类参考。"
---
# ItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>`
**Base:** `IComparer<KingdomWarItemVM>`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomWarSortControllerVM.cs`

## 概述

`ItemComparerBase` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemComparerBase 实例
ItemComparerBase itemComparerBase = ...;
itemComparerBase.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ItemComparerBase 实例
ItemComparerBase itemComparerBase = ...;
var result = itemComparerBase.Compare(x, y);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ItemComparerBase instance = ...;
```

## 参见

- [本区域目录](../)