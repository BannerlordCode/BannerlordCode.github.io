<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PriorityQueue`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PriorityQueue

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PriorityQueue<TPriority, TValue> : ICollection<KeyValuePair<TPriority, TValue>>, IEnumerable<KeyValuePair<TPriority, TValue>>, IEnumerable`
**Base:** `ICollection<KeyValuePair<TPriority`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/PriorityQueue.cs`

## Overview

`PriorityQueue` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2)`

**Purpose:** Handles logic related to `merge queues`.

### MergeQueues
`public static PriorityQueue<TPriority, TValue> MergeQueues(PriorityQueue<TPriority, TValue> pq1, PriorityQueue<TPriority, TValue> pq2, IComparer<TPriority> comparer)`

**Purpose:** Handles logic related to `merge queues`.

### Enqueue
`public void Enqueue(TPriority priority, TValue value)`

**Purpose:** Handles logic related to `enqueue`.

### Dequeue
`public KeyValuePair<TPriority, TValue> Dequeue()`

**Purpose:** Handles logic related to `dequeue`.

### DequeueValue
`public TValue DequeueValue()`

**Purpose:** Handles logic related to `dequeue value`.

### Peek
`public KeyValuePair<TPriority, TValue> Peek()`

**Purpose:** Handles logic related to `peek`.

### PeekValue
`public TValue PeekValue()`

**Purpose:** Handles logic related to `peek value`.

### Add
`public void Add(KeyValuePair<TPriority, TValue> item)`

**Purpose:** Adds `add` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### Contains
`public bool Contains(KeyValuePair<TPriority, TValue> item)`

**Purpose:** Handles logic related to `contains`.

### CopyTo
`public void CopyTo(KeyValuePair<TPriority, TValue> array, int arrayIndex)`

**Purpose:** Handles logic related to `copy to`.

### Remove
`public bool Remove(KeyValuePair<TPriority, TValue> item)`

**Purpose:** Removes `remove` from the current collection or state.

### GetEnumerator
`public IEnumerator<KeyValuePair<TPriority, TValue>> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

## Usage Example

```csharp
PriorityQueue example = PriorityQueue.Value;
```

## See Also

- [Complete Class Catalog](../catalog)