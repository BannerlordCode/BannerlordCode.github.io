---
title: "ItemVM"
description: "Auto-generated class reference for ItemVM."
---
# ItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemVM.cs`

## Overview

`ItemVM` lives in `TaleWorlds.Core.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeId` | `public int TypeId { get; }` |
| `Version` | `public int Version { get; set; }` |
| `ItemType` | `public EquipmentIndex ItemType { get; }` |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `ItemDescription` | `public string ItemDescription { get; set; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `ItemCost` | `public int ItemCost { get; set; }` |
| `TypeName` | `public string TypeName { get; set; }` |
| `PreviewHint` | `public HintViewModel PreviewHint { get; set; }` |
| `EquipHint` | `public HintViewModel EquipHint { get; set; }` |
| `UnequipHint` | `public HintViewModel UnequipHint { get; set; }` |
| `SlaughterHint` | `public BasicTooltipViewModel SlaughterHint { get; set; }` |
| `DonateHint` | `public BasicTooltipViewModel DonateHint { get; set; }` |
| `BuyAndEquipHint` | `public BasicTooltipViewModel BuyAndEquipHint { get; set; }` |
| `SellHint` | `public BasicTooltipViewModel SellHint { get; set; }` |
| `BuyHint` | `public BasicTooltipViewModel BuyHint { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.RefreshValues();
```

### ExecutePreviewItem
`public void ExecutePreviewItem()`

**Purpose:** Runs the operation or workflow associated with `preview item`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecutePreviewItem();
```

### ExecuteUnequipItem
`public void ExecuteUnequipItem()`

**Purpose:** Runs the operation or workflow associated with `unequip item`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecuteUnequipItem();
```

### ExecuteEquipItem
`public void ExecuteEquipItem()`

**Purpose:** Runs the operation or workflow associated with `equip item`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecuteEquipItem();
```

### ReleaseStaticContent
`public static void ReleaseStaticContent()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ItemVM.ReleaseStaticContent();
```

### ExecuteRefreshTooltip
`public void ExecuteRefreshTooltip()`

**Purpose:** Runs the operation or workflow associated with `refresh tooltip`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecuteRefreshTooltip();
```

### ExecuteCancelTooltip
`public void ExecuteCancelTooltip()`

**Purpose:** Runs the operation or workflow associated with `cancel tooltip`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecuteCancelTooltip();
```

### ExecuteBuyItem
`public void ExecuteBuyItem()`

**Purpose:** Runs the operation or workflow associated with `buy item`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecuteBuyItem();
```

### ExecuteSelectItem
`public void ExecuteSelectItem()`

**Purpose:** Runs the operation or workflow associated with `select item`.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
itemVM.ExecuteSelectItem();
```

### GetItemTypeWithItemObject
`public EquipmentIndex GetItemTypeWithItemObject()`

**Purpose:** Reads and returns the `item type with item object` value held by the current object.

```csharp
// Obtain an instance of ItemVM from the subsystem API first
ItemVM itemVM = ...;
var result = itemVM.GetItemTypeWithItemObject();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemVM itemVM = ...;
itemVM.RefreshValues();
```

## See Also

- [Area Index](../)