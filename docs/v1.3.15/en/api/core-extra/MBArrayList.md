<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBArrayList`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBArrayList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBArrayList` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `Capacity` | `public int Capacity { get; }` |
| `RawArray` | `public T RawArray { get; set; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |
| `SyncRoot` | `public object SyncRoot { get; set; }` |
| `this` | `public T this { get; set; }` |


## Key Methods

### IndexOf

```csharp
public int IndexOf(T item)
```

### Contains

```csharp
public bool Contains(T item)
```

### GetEnumerator

```csharp
public IEnumerator<T> GetEnumerator()
```

### Clear

```csharp
public void Clear()
```

### Add

```csharp
public void Add(T item)
```

### AddRange

```csharp
public void AddRange(IEnumerable<T> list)
```

### Remove

```csharp
public bool Remove(T item)
```

### CopyTo

```csharp
public void CopyTo(Array array, int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)