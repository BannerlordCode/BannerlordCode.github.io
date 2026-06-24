<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemSizeComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemSizeComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class ItemSizeComparer : ClanPartiesSortControllerVM.ItemComparerBase`
**Base:** `ClanPartiesSortControllerVM.ItemComparerBase`
**领域:** campaign-ext

## 概述

`ItemSizeComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `SizeState` | `public int SizeState { get; set; }` |
| `ShipCountState` | `public int ShipCountState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `IsSizeSelected` | `public bool IsSizeSelected { get; set; }` |
| `IsShipCountSelected` | `public bool IsShipCountSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 `sort by name` 操作或流程。

### ExecuteSortByLocation
`public void ExecuteSortByLocation()`

**用途 / Purpose:** 执行 `sort by location` 操作或流程。

### ExecuteSortBySize
`public void ExecuteSortBySize()`

**用途 / Purpose:** 执行 `sort by size` 操作或流程。

### ExecuteSortByShipCount
`public void ExecuteSortByShipCount()`

**用途 / Purpose:** 执行 `sort by ship count` 操作或流程。

### ResetAllStates
`public void ResetAllStates()`

**用途 / Purpose:** 将 `all states` 重置为初始状态。

### SetSortMode
`public void SetSortMode(bool isAcending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ItemSizeComparer 实例，再调用它的公开方法
var value = new ItemSizeComparer();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
