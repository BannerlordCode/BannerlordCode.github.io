<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PriorityQueue`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PriorityQueue

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `PriorityQueue` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Count` | `public int Count { get; }` |
| `IsReadOnly` | `public bool IsReadOnly { get; }` |


## Key Methods

### MergeQueues

```csharp
public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2)
```

### MergeQueues

```csharp
public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2, IComparer<TPriority> comparer)
```

### Enqueue

```csharp
public void Enqueue(TPriority priority, TValue value)
```

### Dequeue

```csharp
public KeyValuePair<TPriority, TValue> Dequeue()
```

### DequeueValue

```csharp
public TValue DequeueValue()
```

### Peek

```csharp
public KeyValuePair<TPriority, TValue> Peek()
```

### PeekValue

```csharp
public TValue PeekValue()
```

### Add

```csharp
public void Add(KeyValuePair<TPriority, TValue> item)
```

### Clear

```csharp
public void Clear()
```

### Contains

```csharp
public bool Contains(KeyValuePair<TPriority, TValue> item)
```

### CopyTo

```csharp
public void CopyTo(KeyValuePair<TPriority, TValue> array, int arrayIndex)
```

### Remove

```csharp
public bool Remove(KeyValuePair<TPriority, TValue> item)
```

### GetEnumerator

```csharp
public IEnumerator<KeyValuePair<TPriority, TValue>> GetEnumerator()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)