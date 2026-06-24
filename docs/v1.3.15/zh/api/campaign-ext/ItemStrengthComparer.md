<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemStrengthComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemStrengthComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class ItemStrengthComparer : ArmyManagementSortControllerVM.ItemComparerBase`
**Base:** `ArmyManagementSortControllerVM.ItemComparerBase`
**领域:** campaign-ext

## 概述

`ItemStrengthComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ItemStrengthComparer 实例，再调用它的公开方法
var value = new ItemStrengthComparer();
value.ExecuteSortByDistance();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
