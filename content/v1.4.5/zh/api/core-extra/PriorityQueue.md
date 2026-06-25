---
title: "PriorityQueue"
description: "PriorityQueue 的自动生成类参考。"
---
# PriorityQueue

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PriorityQueue<TPriority, TValue> : ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable`
**Base:** `ICollection<KeyValuePair<TPriority`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PriorityQueue.cs`

## 概述

`PriorityQueue` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2)`

**用途 / Purpose:** 调用 MergeQueues 对应的操作。

```csharp
// 静态调用，不需要实例
PriorityQueue.MergeQueues(priorityQueue<TPriority, pq1, priorityQueue<TPriority, pq2);
```

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2, IComparer<TPriority> comparer)`

**用途 / Purpose:** 调用 MergeQueues 对应的操作。

```csharp
// 静态调用，不需要实例
PriorityQueue.MergeQueues(priorityQueue<TPriority, pq1, priorityQueue<TPriority, pq2, comparer);
```

### Enqueue
`public void Enqueue(TPriority priority, TValue value)`

**用途 / Purpose:** 调用 Enqueue 对应的操作。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
priorityQueue.Enqueue(priority, value);
```

### Dequeue
`public KeyValuePair<TPriority, TValue> Dequeue()`

**用途 / Purpose:** 调用 Dequeue 对应的操作。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Dequeue();
```

### DequeueValue
`public TValue DequeueValue()`

**用途 / Purpose:** 调用 DequeueValue 对应的操作。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.DequeueValue();
```

### Peek
`public KeyValuePair<TPriority, TValue> Peek()`

**用途 / Purpose:** 调用 Peek 对应的操作。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Peek();
```

### PeekValue
`public TValue PeekValue()`

**用途 / Purpose:** 调用 PeekValue 对应的操作。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.PeekValue();
```

### Add
`public void Add(KeyValuePair<TPriority, TValue> item)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
priorityQueue.Add(keyValuePair<TPriority, item);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
priorityQueue.Clear();
```

### Contains
`public bool Contains(KeyValuePair<TPriority, TValue> item)`

**用途 / Purpose:** 检查当前对象是否含有目标项。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Contains(keyValuePair<TPriority, item);
```

### CopyTo
`public void CopyTo(KeyValuePair<TPriority, TValue> array, int arrayIndex)`

**用途 / Purpose:** 把当前对象的to状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
priorityQueue.CopyTo(keyValuePair<TPriority, array, 0);
```

### Remove
`public bool Remove(KeyValuePair<TPriority, TValue> item)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Remove(keyValuePair<TPriority, item);
```

### GetEnumerator
`public IEnumerator<KeyValuePair<TPriority, TValue>> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 enumerator 的结果。

```csharp
// 先通过子系统 API 拿到 PriorityQueue 实例
PriorityQueue priorityQueue = ...;
var result = priorityQueue.GetEnumerator();
```

## 使用示例

```csharp
PriorityQueue.MergeQueues(priorityQueue<TPriority, pq1, priorityQueue<TPriority, pq2);
```

## 参见

- [本区域目录](../)