---
title: "KingdomArmySortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomArmySortControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomArmySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies/KingdomArmySortControllerVM.cs`

## 概述

`KingdomArmySortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OwnerState` | `public int OwnerState { get; set; }` |
| `PartiesState` | `public int PartiesState { get; set; }` |
| `StrengthState` | `public int StrengthState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `DistanceState` | `public int DistanceState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `IsStrengthSelected` | `public bool IsStrengthSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsDistanceSelected` | `public bool IsDistanceSelected { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new KingdomArmySortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)