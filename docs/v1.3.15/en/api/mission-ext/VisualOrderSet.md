<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrderSet`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `VisualOrderSet` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Orders` | `public MBReadOnlyList<VisualOrder> Orders { get; }` |
| `SoloOrder` | `public VisualOrder SoloOrder { get; }` |
| `IsSoloOrder` | `public abstract bool IsSoloOrder { get; }` |
| `StringId` | `public abstract string StringId { get; }` |
| `IconId` | `public abstract string IconId { get; }` |


## Key Methods

### GetName

```csharp
public abstract TextObject GetName(OrderController orderController)
```

### AddOrder

```csharp
public void AddOrder(VisualOrder order)
```

### RemoveOrder

```csharp
public void RemoveOrder(VisualOrder order)
```

### ClearOrders

```csharp
public void ClearOrders()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)