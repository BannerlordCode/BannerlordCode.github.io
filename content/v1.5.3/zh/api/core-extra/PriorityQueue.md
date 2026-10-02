---
title: "PriorityQueue"
description: "PriorityQueue 的自动生成类参考。"
---
# PriorityQueue

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PriorityQueue<TPriority,TValue> : ICollection<KeyValuePair<TPriority,TValue>>,IEnumerable<KeyValuePair<TPriority,TValue>>,IEnumerable `
**Base:** ICollection<KeyValuePair<TPriority,TValue>>,IEnumerable<KeyValuePair<TPriority,TValue>>,IEnumerable
**Source:** TaleWorlds.Library/PriorityQueue.cs

## 概述

`PriorityQueue` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/PriorityQueue.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### MergeQueues
`public static PriorityQueue<TPriority,TValue> MergeQueues(PriorityQueue<TPriority,TValue> pq1,PriorityQueue<TPriority,TValue> pq2) `
`public static PriorityQueue<TPriority,TValue> MergeQueues(PriorityQueue<TPriority,TValue> pq1,PriorityQueue<TPriority,TValue> pq2,IComparer<TPriority> comparer) `

### Enqueue
`public void Enqueue(TPriority priority,TValue value) `

### Dequeue
`public KeyValuePair<TPriority,TValue> Dequeue() `

### DequeueValue
`public TValue DequeueValue() `

### Peek
`public KeyValuePair<TPriority,TValue> Peek() `

### PeekValue
`public TValue PeekValue() `

### Add
`public void Add(KeyValuePair<TPriority,TValue> item) `

### Clear
`public void Clear() `

### Contains
`public bool Contains(KeyValuePair<TPriority,TValue> item) `

### CopyTo
`public void CopyTo(KeyValuePair<TPriority,TValue>[] array,int arrayIndex) `

### Remove
`public bool Remove(KeyValuePair<TPriority,TValue> item) `

### GetEnumerator
`public IEnumerator<KeyValuePair<TPriority,TValue>> GetEnumerator() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
