---
title: "PriorityQueue<TPriority,TValue>"
description: "PriorityQueue<TPriority,TValue>：TaleWorlds.Library 的 public 类，继承 ICollection<KeyValuePair<TPriority, TValue>>、IEnumerable<KeyValuePair<TPriority, TValue>>；公开成员 22 个（方法 13、属性 3、字段 0）。源文件 TaleWorlds.Library/PriorityQueue.cs。"
---
# PriorityQueue<TPriority,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class PriorityQueue<TPriority, TValue>: ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable`
**File:** `TaleWorlds.Library/PriorityQueue.cs`

## 概述

PriorityQueue<TPriority,TValue> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/PriorityQueue.cs。它是一个 public 类，实现/继承 ICollection<KeyValuePair<TPriority, TValue>>、IEnumerable<KeyValuePair<TPriority, TValue>>、IEnumerable，继承链为 PriorityQueue → ICollection。public/protected 成员共 22 个：13 方法、3 属性、6 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PriorityQueue<TPriority,TValue> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 PriorityQueue → ICollection。成员构成以方法为主（方法 13/22，属性 3/22），对外主要以操作入口暴露。继承链上的 ICollection 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/PriorityQueue.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PriorityQueue` | `public PriorityQueue()` | 构造函数 |
| `PriorityQueue` | `public PriorityQueue(int capacity)` | 构造函数 |
| `PriorityQueue` | `public PriorityQueue(int capacity, IComparer<TPriority>comparer)` | 构造函数 |
| `PriorityQueue` | `public PriorityQueue(IComparer<TPriority>comparer)` | 构造函数 |
| `PriorityQueue` | `public PriorityQueue(IEnumerable<KeyValuePair<TPriority, TValue>>data) : this(data, Comparer<TPriority>.Default)` | 构造函数 |
| `PriorityQueue` | `public PriorityQueue(IEnumerable<KeyValuePair<TPriority, TValue>>data, IComparer<TPriority>comparer)` | 构造函数 |
| `TValue>MergeQueues` | `public static PriorityQueue<TPriority, TValue>MergeQueues(PriorityQueue<TPriority, TValue>pq1, PriorityQueue<TPriority, TValue>pq2)` | 方法 |
| `TValue>MergeQueues` | `public static PriorityQueue<TPriority, TValue>MergeQueues(PriorityQueue<TPriority, TValue>pq1, PriorityQueue<TPriority, TValue>pq2, IComparer<TPriority>comparer)` | 方法 |
| `Enqueue` | `public void Enqueue(TPriority priority, TValue value)` | 方法 |
| `TValue>Dequeue` | `public KeyValuePair<TPriority, TValue>Dequeue()` | 方法 |
| `DequeueValue` | `public TValue DequeueValue()` | 方法 |
| `TValue>Peek` | `public KeyValuePair<TPriority, TValue>Peek()` | 方法 |
| `PeekValue` | `public TValue PeekValue()` | 方法 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `Add` | `public void Add(KeyValuePair<TPriority, TValue>item)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `Contains` | `public bool Contains(KeyValuePair<TPriority, TValue>item)` | 方法 |
| `Count` | `public int Count` | 属性 |
| `CopyTo` | `public void CopyTo(KeyValuePair<TPriority, TValue>[]array, int arrayIndex)` | 方法 |
| `IsReadOnly` | `public bool IsReadOnly` | 属性 |
| `Remove` | `public bool Remove(KeyValuePair<TPriority, TValue>item)` | 方法 |
| `TValue>>GetEnumerator` | `public IEnumerator<KeyValuePair<TPriority, TValue>>GetEnumerator()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
