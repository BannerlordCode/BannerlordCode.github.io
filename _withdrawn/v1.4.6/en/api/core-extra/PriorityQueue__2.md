---
title: "PriorityQueue<TPriority,TValue>"
description: "PriorityQueue<TPriority,TValue>: a public class in TaleWorlds.Library, inheriting ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>; 22 exposed members (13 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/PriorityQueue.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PriorityQueue<TPriority,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class PriorityQueue<TPriority, TValue>: ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable`
**File:** `TaleWorlds.Library/PriorityQueue.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

PriorityQueue<TPriority,TValue> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/PriorityQueue.cs. It is a public class, implementing/inheriting ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable; the inheritance chain is PriorityQueue → ICollection. It exposes 22 public/protected members: 13 methods, 3 properties, 6 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PriorityQueue<TPriority,TValue> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain PriorityQueue → ICollection. The surface is method-led (methods 13/22, properties 3/22), so it mostly exposes operations. ICollection on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/PriorityQueue.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PriorityQueue` | `public PriorityQueue()` | constructor |
| `PriorityQueue` | `public PriorityQueue(int capacity)` | constructor |
| `PriorityQueue` | `public PriorityQueue(int capacity, IComparer<TPriority>comparer)` | constructor |
| `PriorityQueue` | `public PriorityQueue(IComparer<TPriority>comparer)` | constructor |
| `PriorityQueue` | `public PriorityQueue(IEnumerable<KeyValuePair<TPriority, TValue>>data) : this(data, Comparer<TPriority>.Default)` | constructor |
| `PriorityQueue` | `public PriorityQueue(IEnumerable<KeyValuePair<TPriority, TValue>>data, IComparer<TPriority>comparer)` | constructor |
| `TValue>MergeQueues` | `public static PriorityQueue<TPriority, TValue>MergeQueues(PriorityQueue<TPriority, TValue>pq1, PriorityQueue<TPriority, TValue>pq2)` | method |
| `TValue>MergeQueues` | `public static PriorityQueue<TPriority, TValue>MergeQueues(PriorityQueue<TPriority, TValue>pq1, PriorityQueue<TPriority, TValue>pq2, IComparer<TPriority>comparer)` | method |
| `Enqueue` | `public void Enqueue(TPriority priority, TValue value)` | method |
| `TValue>Dequeue` | `public KeyValuePair<TPriority, TValue>Dequeue()` | method |
| `DequeueValue` | `public TValue DequeueValue()` | method |
| `TValue>Peek` | `public KeyValuePair<TPriority, TValue>Peek()` | method |
| `PeekValue` | `public TValue PeekValue()` | method |
| `IsEmpty` | `public bool IsEmpty` | property |
| `Add` | `public void Add(KeyValuePair<TPriority, TValue>item)` | method |
| `Clear` | `public void Clear()` | method |
| `Contains` | `public bool Contains(KeyValuePair<TPriority, TValue>item)` | method |
| `Count` | `public int Count` | property |
| `CopyTo` | `public void CopyTo(KeyValuePair<TPriority, TValue>[]array, int arrayIndex)` | method |
| `IsReadOnly` | `public bool IsReadOnly` | property |
| `Remove` | `public bool Remove(KeyValuePair<TPriority, TValue>item)` | method |
| `TValue>>GetEnumerator` | `public IEnumerator<KeyValuePair<TPriority, TValue>>GetEnumerator()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
