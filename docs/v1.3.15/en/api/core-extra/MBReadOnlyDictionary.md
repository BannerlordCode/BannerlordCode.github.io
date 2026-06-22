<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBReadOnlyDictionary`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBReadOnlyDictionary

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBReadOnlyDictionary` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |
| `this` | `public TValue this { get; }` |
| `Keys` | `public IEnumerable<TKey> Keys { get; }` |
| `Values` | `public IEnumerable<TValue> Values { get; }` |


## Key Methods

### GetEnumerator

```csharp
public Dictionary<TKey, TValue>.Enumerator GetEnumerator()
```

### ContainsKey

```csharp
public bool ContainsKey(TKey key)
```

### TryGetValue

```csharp
public bool TryGetValue(TKey key, out TValue value)
```

### CopyTo

```csharp
public void CopyTo(Array array, int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)