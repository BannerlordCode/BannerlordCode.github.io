---
title: "InventoryData"
description: "Auto-generated class reference for InventoryData."
---
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

**Purpose:** Reads and returns the `item with index` value held by the current object.

```csharp
// Obtain an instance of InventoryData from the subsystem API first
InventoryData inventoryData = ...;
var result = inventoryData.GetItemWithIndex(0);
```

### DebugPrint
`public void DebugPrint()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of InventoryData from the subsystem API first
InventoryData inventoryData = ...;
inventoryData.DebugPrint();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
InventoryData entry = ...;
```

## See Also

- [Area Index](../)