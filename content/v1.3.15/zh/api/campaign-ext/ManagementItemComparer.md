---
title: "ManagementItemComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementItemComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagementItemComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>`
**Base:** `IComparer<ArmyManagementItemVM>`
**领域:** campaign-ext

## 概述

`ManagementItemComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `SortControllerVM` | `public ArmyManagementSortControllerVM SortControllerVM { get; set; }` |
| `BoostTitleText` | `public string BoostTitleText { get; set; }` |
| `DisbandArmyText` | `public string DisbandArmyText { get; set; }` |
| `CohesionBoostAmountText` | `public string CohesionBoostAmountText { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `CostText` | `public string CostText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |
| `LordsText` | `public string LordsText { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `TotalStrength` | `public int TotalStrength { get; set; }` |
| `TotalCost` | `public int TotalCost { get; set; }` |
| `TotalLords` | `public string TotalLords { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `CanBoostCohesion` | `public bool CanBoostCohesion { get; set; }` |
| `CanDisbandArmy` | `public bool CanDisbandArmy { get; set; }` |
| `CanAffordInfluenceCost` | `public bool CanAffordInfluenceCost { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteDisbandArmy
`public void ExecuteDisbandArmy()`

**用途 / Purpose:** 执行 `disband army` 操作或流程。

### ExecuteBoostCohesionManual
`public void ExecuteBoostCohesionManual()`

**用途 / Purpose:** 执行 `boost cohesion manual` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `remove input key` 的值或状态。

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ManagementItemComparer 实例，再调用它的公开方法
var value = new ManagementItemComparer();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
