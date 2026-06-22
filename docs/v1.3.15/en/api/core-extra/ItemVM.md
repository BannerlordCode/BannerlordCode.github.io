<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ItemVM` is a class in the `TaleWorlds.Core.ViewModelCollection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public override void RefreshValues()
```

### ExecutePreviewItem

```csharp
public void ExecutePreviewItem()
```

### ExecuteUnequipItem

```csharp
public void ExecuteUnequipItem()
```

### ExecuteEquipItem

```csharp
public void ExecuteEquipItem()
```

### ReleaseStaticContent

```csharp
public static void ReleaseStaticContent()
```

### ExecuteRefreshTooltip

```csharp
public void ExecuteRefreshTooltip()
```

### ExecuteCancelTooltip

```csharp
public void ExecuteCancelTooltip()
```

### ExecuteBuyItem

```csharp
public void ExecuteBuyItem()
```

### ExecuteSelectItem

```csharp
public void ExecuteSelectItem()
```

### GetItemTypeWithItemObject

```csharp
public EquipmentIndex GetItemTypeWithItemObject()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)