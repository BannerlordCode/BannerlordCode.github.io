---
title: "ItemRoster"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemRoster`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `find index of item`.

### FindIndex
`public int FindIndex(Predicate<ItemObject> predicate)`

**Purpose:** Handles logic related to `find index`.

### FindIndexFirstAfterXthElement
`public int FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)`

**Purpose:** Handles logic related to `find index first after xth element`.

### FindIndexOfElement
`public int FindIndexOfElement(EquipmentElement rosterElement)`

**Purpose:** Handles logic related to `find index of element`.

### AddToCounts
`public int AddToCounts(ItemObject item, int number)`

**Purpose:** Adds `to counts` to the current collection or state.

### AddToCounts
`public int AddToCounts(EquipmentElement rosterElement, int number)`

**Purpose:** Adds `to counts` to the current collection or state.

### GetElementCopyAtIndex
`public ItemRosterElement GetElementCopyAtIndex(int index)`

**Purpose:** Gets the current value of `element copy at index`.

### GetItemAtIndex
`public ItemObject GetItemAtIndex(int index)`

**Purpose:** Gets the current value of `item at index`.

### GetElementNumber
`public int GetElementNumber(int index)`

**Purpose:** Gets the current value of `element number`.

### GetElementUnitCost
`public int GetElementUnitCost(int index)`

**Purpose:** Gets the current value of `element unit cost`.

### GetItemNumber
`public int GetItemNumber(ItemObject item)`

**Purpose:** Gets the current value of `item number`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### RostersAreIdentical
`public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`

**Purpose:** Handles logic related to `rosters are identical`.

### GetEnumerator
`public IEnumerator<ItemRosterElement> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### SelectRandomIndex
`public int SelectRandomIndex(Func<ItemRosterElement, float> weightFunction)`

**Purpose:** Handles logic related to `select random index`.

### RemoveIf
`public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`

**Purpose:** Removes `if` from the current collection or state.

### Add
`public void Add(IEnumerable<ItemRosterElement> rosterElementList)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public void Add(ItemRosterElement itemRosterElement)`

**Purpose:** Adds `add` to the current collection or state.

### Remove
`public void Remove(ItemRosterElement itemRosterElement)`

**Purpose:** Removes `remove` from the current collection or state.

### UpdateVersion
`public void UpdateVersion()`

**Purpose:** Updates the state or data of `version`.

### OnLoadStarted
`public void OnLoadStarted(MetaData metaData)`

**Purpose:** Called when the `load started` event is raised.

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**Purpose:** Handles logic related to `calculate cached stats on load`.

### RosterUpdatedEventDelegate
`public delegate void RosterUpdatedEventDelegate(ItemRosterElement item, int count)`

**Purpose:** Handles logic related to `roster updated event delegate`.

## Usage Example

```csharp
ItemRoster example = ItemRoster.this;
```

## See Also

- [Complete Class Catalog](../catalog)