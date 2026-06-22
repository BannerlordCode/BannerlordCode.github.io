<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PriorityQueue`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PriorityQueue

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`PriorityQueue` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Count` | `public int Count { get; }` |
| `IsReadOnly` | `public bool IsReadOnly { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)