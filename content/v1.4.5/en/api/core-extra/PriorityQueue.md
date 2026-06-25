---
title: "PriorityQueue"
description: "Auto-generated class reference for PriorityQueue."
---
# PriorityQueue

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PriorityQueue<TPriority, TValue> : ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable`
**Base:** `ICollection<KeyValuePair<TPriority`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PriorityQueue.cs`

## Overview

`PriorityQueue` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2)`

**Purpose:** **Purpose:** Executes the MergeQueues logic.

```csharp
// Static call; no instance required
PriorityQueue.MergeQueues(priorityQueue<TPriority, pq1, priorityQueue<TPriority, pq2);
```

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2, IComparer<TPriority> comparer)`

**Purpose:** **Purpose:** Executes the MergeQueues logic.

```csharp
// Static call; no instance required
PriorityQueue.MergeQueues(priorityQueue<TPriority, pq1, priorityQueue<TPriority, pq2, comparer);
```

### Enqueue
`public void Enqueue(TPriority priority, TValue value)`

**Purpose:** **Purpose:** Executes the Enqueue logic.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
priorityQueue.Enqueue(priority, value);
```

### Dequeue
`public KeyValuePair<TPriority, TValue> Dequeue()`

**Purpose:** **Purpose:** Executes the Dequeue logic.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Dequeue();
```

### DequeueValue
`public TValue DequeueValue()`

**Purpose:** **Purpose:** Executes the DequeueValue logic.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.DequeueValue();
```

### Peek
`public KeyValuePair<TPriority, TValue> Peek()`

**Purpose:** **Purpose:** Executes the Peek logic.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Peek();
```

### PeekValue
`public TValue PeekValue()`

**Purpose:** **Purpose:** Executes the PeekValue logic.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.PeekValue();
```

### Add
`public void Add(KeyValuePair<TPriority, TValue> item)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
priorityQueue.Add(keyValuePair<TPriority, item);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
priorityQueue.Clear();
```

### Contains
`public bool Contains(KeyValuePair<TPriority, TValue> item)`

**Purpose:** **Purpose:** Indicates whether the this instance contains the specified item.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Contains(keyValuePair<TPriority, item);
```

### CopyTo
`public void CopyTo(KeyValuePair<TPriority, TValue> array, int arrayIndex)`

**Purpose:** **Purpose:** Copies the to state of the this instance to a target.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
priorityQueue.CopyTo(keyValuePair<TPriority, array, 0);
```

### Remove
`public bool Remove(KeyValuePair<TPriority, TValue> item)`

**Purpose:** **Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.Remove(keyValuePair<TPriority, item);
```

### GetEnumerator
`public IEnumerator<KeyValuePair<TPriority, TValue>> GetEnumerator()`

**Purpose:** **Purpose:** Reads and returns the enumerator value held by the this instance.

```csharp
// Obtain an instance of PriorityQueue from the subsystem API first
PriorityQueue priorityQueue = ...;
var result = priorityQueue.GetEnumerator();
```

## Usage Example

```csharp
PriorityQueue.MergeQueues(priorityQueue<TPriority, pq1, priorityQueue<TPriority, pq2);
```

## See Also

- [Area Index](../)