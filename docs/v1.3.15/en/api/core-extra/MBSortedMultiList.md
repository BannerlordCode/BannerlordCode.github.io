<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSortedMultiList`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBSortedMultiList` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Comparer` | `public MBSortedMultiList<TKey, TValue>.ComparerType Comparer { get; }` |
| `Count` | `public int Count { get; }` |
| `this` | `public TValue this { get; }` |
| `FirstValue` | `public TValue FirstValue { get; }` |
| `LastValue` | `public TValue LastValue { get; }` |
| `Current` | `public TValue Current { get; }` |
| `Current` | `public TValue Current { get; }` |


## Key Methods

### Contains

```csharp
public bool Contains(TKey key)
```

### Contains

```csharp
public bool Contains(TKey key, TValue value)
```

### Get

```csharp
public KeyValuePair<TKey, TValue> Get(int index)
```

### FirstIndexOf

```csharp
public int FirstIndexOf(TKey key)
```

### FirstIndexOf

```csharp
public int FirstIndexOf(TKey key, TValue value)
```

### LastIndexOf

```csharp
public int LastIndexOf(TKey key)
```

### LastIndexOf

```csharp
public int LastIndexOf(TKey key, TValue value)
```

### All

```csharp
public bool All(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### Any

```csharp
public bool Any(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### GetValues

```csharp
public IEnumerator<TValue> GetValues(TKey key)
```

### Find

```csharp
public bool Find(Predicate<KeyValuePair<TKey, TValue>> predicate, out KeyValuePair<TKey, TValue> found, bool searchForward = true)
```

### FindIndex

```csharp
public int FindIndex(Predicate<KeyValuePair<TKey, TValue>> predicate, bool searchForward = true)
```

### FindAll

```csharp
public MBList<KeyValuePair<TKey, TValue>> FindAll(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### Add

```csharp
public void Add(TKey key, TValue value)
```

### AddRange

```csharp
public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>> items)
```

### Remove

```csharp
public bool Remove(TKey key, TValue value)
```

### Remove

```csharp
public bool Remove(TKey key)
```

### RemoveAll

```csharp
public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### RemoveAt

```csharp
public void RemoveAt(int index)
```

### RemoveLast

```csharp
public void RemoveLast()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)