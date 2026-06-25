---
title: "ItemRoster"
description: "Auto-generated class reference for ItemRoster."
---
# ItemRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IEnumerable, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`
**Base:** `IReadOnlyList<ItemRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

## Overview

`ItemRoster` lives in `TaleWorlds.CampaignSystem.Roster` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Roster` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public int FindIndexOfItem(ItemObject item)`

**Purpose:** Looks up the matching index of item in the current collection or scope.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndexOfItem(item);
```

### FindIndex
`public int FindIndex(Predicate<ItemObject> predicate)`

**Purpose:** Looks up the matching index in the current collection or scope.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndex(predicate);
```

### FindIndexFirstAfterXthElement
`public int FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)`

**Purpose:** Looks up the matching index first after xth element in the current collection or scope.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndexFirstAfterXthElement(predicate, 0);
```

### FindIndexOfElement
`public int FindIndexOfElement(EquipmentElement rosterElement)`

**Purpose:** Looks up the matching index of element in the current collection or scope.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.FindIndexOfElement(rosterElement);
```

### AddToCounts
`public int AddToCounts(ItemObject item, int number)`

**Purpose:** Adds to counts to the current collection or state.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.AddToCounts(item, 0);
```

### AddToCounts
`public int AddToCounts(EquipmentElement rosterElement, int number)`

**Purpose:** Adds to counts to the current collection or state.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.AddToCounts(rosterElement, 0);
```

### GetElementCopyAtIndex
`public ItemRosterElement GetElementCopyAtIndex(int index)`

**Purpose:** Reads and returns the element copy at index value held by the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.GetElementCopyAtIndex(0);
```

### GetItemAtIndex
`public ItemObject GetItemAtIndex(int index)`

**Purpose:** Reads and returns the item at index value held by the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.GetItemAtIndex(0);
```

### GetElementNumber
`public int GetElementNumber(int index)`

**Purpose:** Reads and returns the element number value held by the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.GetElementNumber(0);
```

### GetElementUnitCost
`public int GetElementUnitCost(int index)`

**Purpose:** Reads and returns the element unit cost value held by the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.GetElementUnitCost(0);
```

### GetItemNumber
`public int GetItemNumber(ItemObject item)`

**Purpose:** Reads and returns the item number value held by the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.GetItemNumber(item);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.Clear();
```

### RostersAreIdentical
`public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`

**Purpose:** Executes the RostersAreIdentical logic.

```csharp
// Static call; no instance required
ItemRoster.RostersAreIdentical(a, b);
```

### GetEnumerator
`public IEnumerator<ItemRosterElement> GetEnumerator()`

**Purpose:** Reads and returns the enumerator value held by the this instance.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.GetEnumerator();
```

### SelectRandomIndex
`public int SelectRandomIndex(Func<ItemRosterElement, float> weightFunction)`

**Purpose:** Executes the SelectRandomIndex logic.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.SelectRandomIndex(func<ItemRosterElement, 0);
```

### RemoveIf
`public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`

**Purpose:** Removes if from the current collection or state.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
var result = itemRoster.RemoveIf(func<ItemRosterElement, 0);
```

### Add
`public void Add(IEnumerable<ItemRosterElement> rosterElementList)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.Add(rosterElementList);
```

### Add
`public void Add(ItemRosterElement itemRosterElement)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.Add(itemRosterElement);
```

### Remove
`public void Remove(ItemRosterElement itemRosterElement)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.Remove(itemRosterElement);
```

### UpdateVersion
`public void UpdateVersion()`

**Purpose:** Recalculates and stores the latest representation of version.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.UpdateVersion();
```

### OnLoadStarted
`public void OnLoadStarted(MetaData metaData)`

**Purpose:** Invoked when the load started event is raised.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.OnLoadStarted(metaData);
```

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**Purpose:** Calculates the current value or result of cached stats on load.

```csharp
// Static call; no instance required
ItemRoster.CalculateCachedStatsOnLoad();
```

### RosterUpdatedEventDelegate
`public delegate void RosterUpdatedEventDelegate(ItemRosterElement item, int count)`

**Purpose:** Executes the RosterUpdatedEventDelegate logic.

```csharp
// Obtain an instance of ItemRoster from the subsystem API first
ItemRoster itemRoster = ...;
itemRoster.RosterUpdatedEventDelegate(item, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemRoster itemRoster = ...;
itemRoster.FindIndexOfItem(item);
```

## See Also

- [Area Index](../)