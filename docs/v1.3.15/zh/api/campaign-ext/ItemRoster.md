<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemRoster`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemRoster

**命名空间:** TaleWorlds.CampaignSystem.Roster
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ItemRoster` 是 `TaleWorlds.CampaignSystem.Roster` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public int FindIndexOfItem(ItemObject item)
```

### FindIndex

```csharp
public int FindIndex(Predicate<ItemObject> predicate)
```

### FindIndexFirstAfterXthElement

```csharp
public int FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)
```

### FindIndexOfElement

```csharp
public int FindIndexOfElement(EquipmentElement rosterElement)
```

### AddToCounts

```csharp
public int AddToCounts(ItemObject item, int number)
```

### AddToCounts

```csharp
public int AddToCounts(EquipmentElement rosterElement, int number)
```

### GetElementCopyAtIndex

```csharp
public ItemRosterElement GetElementCopyAtIndex(int index)
```

### GetItemAtIndex

```csharp
public ItemObject GetItemAtIndex(int index)
```

### GetElementNumber

```csharp
public int GetElementNumber(int index)
```

### GetElementUnitCost

```csharp
public int GetElementUnitCost(int index)
```

### GetItemNumber

```csharp
public int GetItemNumber(ItemObject item)
```

### Clear

```csharp
public void Clear()
```

### RostersAreIdentical

```csharp
public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)
```

### GetEnumerator

```csharp
public IEnumerator<ItemRosterElement> GetEnumerator()
```

### SelectRandomIndex

```csharp
public int SelectRandomIndex(Func<ItemRosterElement, float> weightFunction)
```

### RemoveIf

```csharp
public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)
```

### Add

```csharp
public void Add(IEnumerable<ItemRosterElement> rosterElementList)
```

### Add

```csharp
public void Add(ItemRosterElement itemRosterElement)
```

### Remove

```csharp
public void Remove(ItemRosterElement itemRosterElement)
```

### UpdateVersion

```csharp
public void UpdateVersion()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)