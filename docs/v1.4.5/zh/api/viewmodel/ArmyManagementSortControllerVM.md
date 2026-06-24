<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyManagementSortControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyManagementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementSortControllerVM.cs`

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

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### ExecuteSortByDistance
`public void ExecuteSortByDistance()`

**用途 / Purpose:** 执行 `sort by distance` 操作或流程。

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**用途 / Purpose:** 执行 `sort by cost` 操作或流程。

### ExecuteSortByStrength
`public void ExecuteSortByStrength()`

**用途 / Purpose:** 执行 `sort by strength` 操作或流程。

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 `sort by name` 操作或流程。

### ExecuteSortByClan
`public void ExecuteSortByClan()`

**用途 / Purpose:** 执行 `sort by clan` 操作或流程。

### ExecuteSortByShipCount
`public void ExecuteSortByShipCount()`

**用途 / Purpose:** 执行 `sort by ship count` 操作或流程。

## 使用示例

```csharp
var value = new ArmyManagementSortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)