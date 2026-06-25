---
title: "ItemData"
description: "Auto-generated class reference for ItemData."
---
# ItemData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ItemData.cs`

## Overview

`ItemData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ItemData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeId` | `public string TypeId { get; set; }` |
| `ModifierId` | `public string ModifierId { get; set; }` |
| `Index` | `public int? Index { get; set; }` |
| `Price` | `public int Price { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ItemKey` | `public string ItemKey { get; }` |

## Key Methods

### CopyItemData
`public void CopyItemData(ItemData itemdata)`

**Purpose:** Copies the item data state of the this instance to a target.

```csharp
// Obtain an instance of ItemData from the subsystem API first
ItemData itemData = ...;
itemData.CopyItemData(itemdata);
```

### CanItemToEquipmentDragPossible
`public bool CanItemToEquipmentDragPossible(int equipmentIndex)`

**Purpose:** Checks whether the this instance meets the preconditions for item to equipment drag possible.

```csharp
// Obtain an instance of ItemData from the subsystem API first
ItemData itemData = ...;
var result = itemData.CanItemToEquipmentDragPossible(0);
```

### CanItemToEquipmentDragPossible
`public static bool CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)`

**Purpose:** Checks whether the this instance meets the preconditions for item to equipment drag possible.

```csharp
// Static call; no instance required
ItemData.CanItemToEquipmentDragPossible("example", 0);
```

### GetPriceOf
`public static int GetPriceOf(string itemId, string modifierId)`

**Purpose:** Reads and returns the price of value held by the this instance.

```csharp
// Static call; no instance required
ItemData.GetPriceOf("example", "example");
```

### IsItemValid
`public static bool IsItemValid(string itemId, string modifierId)`

**Purpose:** Determines whether the this instance is in the item valid state or condition.

```csharp
// Static call; no instance required
ItemData.IsItemValid("example", "example");
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ItemData entry = ...;
```

## See Also

- [Area Index](../)