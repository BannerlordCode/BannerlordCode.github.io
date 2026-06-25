---
title: "ItemData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ItemData.cs`

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

## Key Methods

### CopyItemData
`public void CopyItemData(ItemData itemdata)`

**Purpose:** Handles logic related to `copy item data`.

### CanItemToEquipmentDragPossible
`public bool CanItemToEquipmentDragPossible(int equipmentIndex)`

**Purpose:** Checks whether the current object can `item to equipment drag possible`.

### CanItemToEquipmentDragPossible
`public static bool CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)`

**Purpose:** Checks whether the current object can `item to equipment drag possible`.

### GetPriceOf
`public static int GetPriceOf(string itemId, string modifierId)`

**Purpose:** Gets the current value of `price of`.

### IsItemValid
`public static bool IsItemValid(string itemId, string modifierId)`

**Purpose:** Handles logic related to `is item valid`.

## Usage Example

```csharp
var value = new ItemData();
```

## See Also

- [Complete Class Catalog](../catalog)