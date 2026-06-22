<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `FormOrder` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |
| `OrderType` | `public OrderType OrderType { get; }` |


## Key Methods

### FormOrderCustom

```csharp
public static FormOrder FormOrderCustom(float customWidth)
```

### OnApply

```csharp
public void OnApply(Formation formation)
```

### GetUnitCountOf

```csharp
public static int GetUnitCountOf(Formation formation)
```

### OnApplyToCustomArrangement

```csharp
public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)
```

### GetMaxFileCountStatic

```csharp
public static int? GetMaxFileCountStatic(FormOrder.FormOrderEnum order, int unitCount)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)