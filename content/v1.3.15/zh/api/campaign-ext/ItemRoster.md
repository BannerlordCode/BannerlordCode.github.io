---
title: "ItemRoster"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemRoster`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IEnumerable, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`
**Base:** `IReadOnlyList<ItemRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

## 概述

`ItemRoster` 位于 `TaleWorlds.CampaignSystem.Roster`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Roster` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public ItemRosterElement this { get; }` |
| `Count` | `public int Count { get; }` |
| `VersionNo` | `public int VersionNo { get; }` |
| `RosterUpdatedEvent` | `public event ItemRoster.RosterUpdatedEventDelegate RosterUpdatedEvent { get; }` |
| `TotalFood` | `public int TotalFood { get; set; }` |
| `FoodVariety` | `public int FoodVariety { get; }` |
| `TotalValue` | `public int TotalValue { get; }` |
| `TradeGoodsTotalValue` | `public int TradeGoodsTotalValue { get; }` |
| `NumberOfPackAnimals` | `public int NumberOfPackAnimals { get; }` |
| `NumberOfLivestockAnimals` | `public int NumberOfLivestockAnimals { get; }` |
| `NumberOfMounts` | `public int NumberOfMounts { get; }` |

## 主要方法

### FindIndexOfItem
`public int FindIndexOfItem(ItemObject item)`

**用途 / Purpose:** 处理 `find index of item` 相关逻辑。

### FindIndex
`public int FindIndex(Predicate<ItemObject> predicate)`

**用途 / Purpose:** 处理 `find index` 相关逻辑。

### FindIndexFirstAfterXthElement
`public int FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)`

**用途 / Purpose:** 处理 `find index first after xth element` 相关逻辑。

### FindIndexOfElement
`public int FindIndexOfElement(EquipmentElement rosterElement)`

**用途 / Purpose:** 处理 `find index of element` 相关逻辑。

### AddToCounts
`public int AddToCounts(ItemObject item, int number)`

**用途 / Purpose:** 向当前集合/状态中添加 `to counts`。

### AddToCounts
`public int AddToCounts(EquipmentElement rosterElement, int number)`

**用途 / Purpose:** 向当前集合/状态中添加 `to counts`。

### GetElementCopyAtIndex
`public ItemRosterElement GetElementCopyAtIndex(int index)`

**用途 / Purpose:** 获取 `element copy at index` 的当前值。

### GetItemAtIndex
`public ItemObject GetItemAtIndex(int index)`

**用途 / Purpose:** 获取 `item at index` 的当前值。

### GetElementNumber
`public int GetElementNumber(int index)`

**用途 / Purpose:** 获取 `element number` 的当前值。

### GetElementUnitCost
`public int GetElementUnitCost(int index)`

**用途 / Purpose:** 获取 `element unit cost` 的当前值。

### GetItemNumber
`public int GetItemNumber(ItemObject item)`

**用途 / Purpose:** 获取 `item number` 的当前值。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### RostersAreIdentical
`public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`

**用途 / Purpose:** 处理 `rosters are identical` 相关逻辑。

### GetEnumerator
`public IEnumerator<ItemRosterElement> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### SelectRandomIndex
`public int SelectRandomIndex(Func<ItemRosterElement, float> weightFunction)`

**用途 / Purpose:** 处理 `select random index` 相关逻辑。

### RemoveIf
`public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`

**用途 / Purpose:** 从当前集合/状态中移除 `if`。

### Add
`public void Add(IEnumerable<ItemRosterElement> rosterElementList)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public void Add(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Remove
`public void Remove(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### UpdateVersion
`public void UpdateVersion()`

**用途 / Purpose:** 更新 `version` 的状态或数据。

### OnLoadStarted
`public void OnLoadStarted(MetaData metaData)`

**用途 / Purpose:** 当 `load started` 事件触发时调用此方法。

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**用途 / Purpose:** 处理 `calculate cached stats on load` 相关逻辑。

### RosterUpdatedEventDelegate
`public delegate void RosterUpdatedEventDelegate(ItemRosterElement item, int count)`

**用途 / Purpose:** 处理 `roster updated event delegate` 相关逻辑。

## 使用示例

```csharp
ItemRoster example = ItemRoster.this;
```

## 参见

- [完整类目录](../catalog)