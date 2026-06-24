<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecutePreviewItem
`public void ExecutePreviewItem()`

**Purpose:** Executes the `preview item` operation or workflow.

### ExecuteUnequipItem
`public void ExecuteUnequipItem()`

**Purpose:** Executes the `unequip item` operation or workflow.

### ExecuteEquipItem
`public void ExecuteEquipItem()`

**Purpose:** Executes the `equip item` operation or workflow.

### ReleaseStaticContent
`public static void ReleaseStaticContent()`

**Purpose:** Handles logic related to `release static content`.

### ExecuteRefreshTooltip
`public void ExecuteRefreshTooltip()`

**Purpose:** Executes the `refresh tooltip` operation or workflow.

### ExecuteCancelTooltip
`public void ExecuteCancelTooltip()`

**Purpose:** Executes the `cancel tooltip` operation or workflow.

### ExecuteBuyItem
`public void ExecuteBuyItem()`

**Purpose:** Executes the `buy item` operation or workflow.

### ExecuteSelectItem
`public void ExecuteSelectItem()`

**Purpose:** Executes the `select item` operation or workflow.

### GetItemTypeWithItemObject
`public EquipmentIndex GetItemTypeWithItemObject()`

**Purpose:** Gets the current value of `item type with item object`.

## Usage Example

```csharp
var value = new ItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)