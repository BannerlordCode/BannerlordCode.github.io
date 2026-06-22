<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderSetVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `HasSingleOrder` | `public bool HasSingleOrder { get; }` |
| `OrderSet` | `public VisualOrderSet OrderSet { get; }` |
| `SelectedOrderText` | `public string SelectedOrderText { get; set; }` |
| `SoloOrder` | `public OrderItemVM SoloOrder { get; set; }` |
| `Orders` | `public MBBindingList<OrderItemVM> Orders { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

### ExecuteDeSelect

```csharp
public void ExecuteDeSelect()
```

### OnOrderExecuted

```csharp
public void OnOrderExecuted(OrderItemVM order)
```

### RefreshOrders

```csharp
public void RefreshOrders()
```

### RefreshOrderStates

```csharp
public void RefreshOrderStates()
```

### UpdateCanUseShortcuts

```csharp
public void UpdateCanUseShortcuts(bool value)
```

### OnOrderSetSelectionStateChangedDelegate

```csharp
public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)