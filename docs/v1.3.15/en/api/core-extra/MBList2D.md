<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBList2D`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBList2D

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBList2D` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Count1` | `public int Count1 { get; }` |
| `Count2` | `public int Count2 { get; }` |
| `RawArray` | `public T RawArray { get; set; }` |
| `this` | `public T this { get; set; }` |


## Key Methods

### Contains

```csharp
public bool Contains(T item)
```

### Clear

```csharp
public void Clear()
```

### ResetWithNewCount

```csharp
public void ResetWithNewCount(int newCount1, int newCount2)
```

### CopyRowTo

```csharp
public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T> destination, int destinationIndex1, int destinationIndex2, int copyCount)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)