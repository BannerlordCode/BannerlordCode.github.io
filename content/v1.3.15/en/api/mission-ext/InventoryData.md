---
title: "InventoryData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/InventoryData.cs`

## Overview

`InventoryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InventoryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Items` | `public List<ItemData> Items { get; }` |

## Key Methods

### GetItemWithIndex
`public ItemData GetItemWithIndex(int itemIndex)`

**Purpose:** Gets the current value of `item with index`.

### DebugPrint
`public void DebugPrint()`

**Purpose:** Handles logic related to `debug print`.

## Usage Example

```csharp
var value = new InventoryData();
```

## See Also

- [Complete Class Catalog](../catalog)