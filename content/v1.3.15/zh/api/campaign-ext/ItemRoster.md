---
title: "ItemRoster"
description: "ItemRoster 的自动生成类参考。"
---
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

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「index of item」。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndexOfItem(item);
```

### FindIndex
`public int FindIndex(Predicate<ItemObject> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「index」。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndex(predicate);
```

### FindIndexFirstAfterXthElement
`public int FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「index first after xth element」。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndexFirstAfterXthElement(predicate, 0);
```

### FindIndexOfElement
`public int FindIndexOfElement(EquipmentElement rosterElement)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「index of element」。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndexOfElement(rosterElement);
```

### AddToCounts
`public int AddToCounts(ItemObject item, int number)`

**用途 / Purpose:** 将 「to counts」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.AddToCounts(item, 0);
```

### AddToCounts
`public int AddToCounts(EquipmentElement rosterElement, int number)`

**用途 / Purpose:** 将 「to counts」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.AddToCounts(rosterElement, 0);
```

### GetElementCopyAtIndex
`public ItemRosterElement GetElementCopyAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element copy at index」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.GetElementCopyAtIndex(0);
```

### GetItemAtIndex
`public ItemObject GetItemAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「item at index」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.GetItemAtIndex(0);
```

### GetElementNumber
`public int GetElementNumber(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element number」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.GetElementNumber(0);
```

### GetElementUnitCost
`public int GetElementUnitCost(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element unit cost」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.GetElementUnitCost(0);
```

### GetItemNumber
`public int GetItemNumber(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「item number」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.GetItemNumber(item);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.Clear();
```

### RostersAreIdentical
`public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`

**用途 / Purpose:** 处理与 「rosters are identical」 相关的逻辑。

```csharp
// 静态调用，不需要实例
ItemRoster.RostersAreIdentical(a, b);
```

### GetEnumerator
`public IEnumerator<ItemRosterElement> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 「enumerator」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.GetEnumerator();
```

### SelectRandomIndex
`public int SelectRandomIndex(Func<ItemRosterElement, float> weightFunction)`

**用途 / Purpose:** 处理与 「select random index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.SelectRandomIndex(func<ItemRosterElement, 0);
```

### RemoveIf
`public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`

**用途 / Purpose:** 从当前容器或状态中移除 「if」。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
var result = itemRoster.RemoveIf(func<ItemRosterElement, 0);
```

### Add
`public void Add(IEnumerable<ItemRosterElement> rosterElementList)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.Add(rosterElementList);
```

### Add
`public void Add(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.Add(itemRosterElement);
```

### Remove
`public void Remove(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.Remove(itemRosterElement);
```

### UpdateVersion
`public void UpdateVersion()`

**用途 / Purpose:** 重新计算并更新 「version」 的最新表示。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.UpdateVersion();
```

### OnLoadStarted
`public void OnLoadStarted(MetaData metaData)`

**用途 / Purpose:** 在 「load started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.OnLoadStarted(metaData);
```

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**用途 / Purpose:** 计算「cached stats on load」的当前值或结果。

```csharp
// 静态调用，不需要实例
ItemRoster.CalculateCachedStatsOnLoad();
```

### RosterUpdatedEventDelegate
`public delegate void RosterUpdatedEventDelegate(ItemRosterElement item, int count)`

**用途 / Purpose:** 处理与 「roster updated event delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ItemRoster 实例
ItemRoster itemRoster = ...;
itemRoster.RosterUpdatedEventDelegate(item, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemRoster itemRoster = ...;
itemRoster.FindIndexOfItem(item);
```

## 参见

- [本区域目录](../)