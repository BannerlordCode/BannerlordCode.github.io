---
title: "KingdomArmySortControllerVM"
description: "KingdomArmySortControllerVM 的自动生成类参考。"
---
# KingdomArmySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs`

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

**用途 / Purpose:** 为 「sort mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
kingdomArmySortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 KingdomArmySortControllerVM 实例
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
kingdomArmySortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)