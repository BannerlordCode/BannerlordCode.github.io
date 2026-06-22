<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `VisualOrder` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `IconId` | `public string IconId { get; }` |


## Key Methods

### GetName

```csharp
public abstract TextObject GetName(OrderController orderController)
```

### IsTargeted

```csharp
public abstract bool IsTargeted()
```

### ExecuteOrder

```csharp
public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)
```

### BeforeExecuteOrder

```csharp
public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)
```

### AfterExecuteOrder

```csharp
public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)
```

### GetFormationHasOrder

```csharp
public bool GetFormationHasOrder(Formation formation)
```

### GetActiveState

```csharp
public OrderState GetActiveState(OrderController orderController)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)