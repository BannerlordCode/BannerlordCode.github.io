<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemRoster`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemRoster` is a class in the `TaleWorlds.CampaignSystem.Roster` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)