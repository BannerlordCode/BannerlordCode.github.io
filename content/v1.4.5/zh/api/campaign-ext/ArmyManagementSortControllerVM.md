---
title: "ArmyManagementSortControllerVM"
description: "ArmyManagementSortControllerVM 的自动生成类参考。"
---
# ArmyManagementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs`

## 概述

`ArmyManagementSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DistanceState` | `public int DistanceState { get; set; }` |
| `CostState` | `public int CostState { get; set; }` |
| `StrengthState` | `public int StrengthState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `ClanState` | `public int ClanState { get; set; }` |
| `ShipCountState` | `public int ShipCountState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsCostSelected` | `public bool IsCostSelected { get; set; }` |
| `IsStrengthSelected` | `public bool IsStrengthSelected { get; set; }` |
| `IsDistanceSelected` | `public bool IsDistanceSelected { get; set; }` |
| `IsClanSelected` | `public bool IsClanSelected { get; set; }` |
| `IsShipCountSelected` | `public bool IsShipCountSelected { get; set; }` |

## 主要方法

### ExecuteSortByDistance
`public void ExecuteSortByDistance()`

**用途 / Purpose:** 执行 sort by distance 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByDistance();
```

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**用途 / Purpose:** 执行 sort by cost 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByCost();
```

### ExecuteSortByStrength
`public void ExecuteSortByStrength()`

**用途 / Purpose:** 执行 sort by strength 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByStrength();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 sort by name 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByClan
`public void ExecuteSortByClan()`

**用途 / Purpose:** 执行 sort by clan 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByClan();
```

### ExecuteSortByShipCount
`public void ExecuteSortByShipCount()`

**用途 / Purpose:** 执行 sort by ship count 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByShipCount();
```

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementSortControllerVM 实例
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByDistance();
```

## 参见

- [本区域目录](../)