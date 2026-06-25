---
title: "PriorityQueue"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PriorityQueue`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PriorityQueue

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PriorityQueue<TPriority, TValue> : ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable`
**Base:** `ICollection<KeyValuePair<TPriority`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/PriorityQueue.cs`

## 概述

`PriorityQueue` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2)`

**用途 / Purpose:** 处理 `merge queues` 相关逻辑。

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2, IComparer<TPriority> comparer)`

**用途 / Purpose:** 处理 `merge queues` 相关逻辑。

### Enqueue
`public void Enqueue(TPriority priority, TValue value)`

**用途 / Purpose:** 处理 `enqueue` 相关逻辑。

### Dequeue
`public KeyValuePair<TPriority, TValue> Dequeue()`

**用途 / Purpose:** 处理 `dequeue` 相关逻辑。

### DequeueValue
`public TValue DequeueValue()`

**用途 / Purpose:** 处理 `dequeue value` 相关逻辑。

### Peek
`public KeyValuePair<TPriority, TValue> Peek()`

**用途 / Purpose:** 处理 `peek` 相关逻辑。

### PeekValue
`public TValue PeekValue()`

**用途 / Purpose:** 处理 `peek value` 相关逻辑。

### Add
`public void Add(KeyValuePair<TPriority, TValue> item)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### Contains
`public bool Contains(KeyValuePair<TPriority, TValue> item)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### CopyTo
`public void CopyTo(KeyValuePair<TPriority, TValue> array, int arrayIndex)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Remove
`public bool Remove(KeyValuePair<TPriority, TValue> item)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### GetEnumerator
`public IEnumerator<KeyValuePair<TPriority, TValue>> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

## 使用示例

```csharp
PriorityQueue example = PriorityQueue.Value;
```

## 参见

- [完整类目录](../catalog)