<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSubjectVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSubjectVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderSubjectVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsSelectionHighlightActive` | `public bool IsSelectionHighlightActive { get; set; }` |
| `ShowSelectionInputs` | `public bool ShowSelectionInputs { get; set; }` |
| `BehaviorType` | `public int BehaviorType { get; set; }` |
| `UnderAttackOfType` | `public int UnderAttackOfType { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `ApplySelectionKey` | `public InputKeyItemVM ApplySelectionKey { get; set; }` |
| `ToggleSelectionKey` | `public InputKeyItemVM ToggleSelectionKey { get; set; }` |
| `ActiveOrders` | `public MBBindingList<OrderItemVM> ActiveOrders { get; set; }` |


## Key Methods

### AddActiveOrder

```csharp
public void AddActiveOrder(OrderItemVM order)
```

### RemoveActiveOrder

```csharp
public void RemoveActiveOrder(OrderItemVM order)
```

### ClearActiveOrders

```csharp
public void ClearActiveOrders()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)