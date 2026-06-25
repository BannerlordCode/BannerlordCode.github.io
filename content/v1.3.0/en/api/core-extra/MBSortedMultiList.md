---
title: "MBSortedMultiList"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSortedMultiList`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`
**Base:** `IReadOnlyList<TValue>`
**File:** `TaleWorlds.Library/MBSortedMultiList.cs`

## Overview

`MBSortedMultiList` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public bool Contains(TKey key)`

**Purpose:** Handles logic related to `contains`.

### Contains
`public bool Contains(TKey key, TValue value)`

**Purpose:** Handles logic related to `contains`.

### Get
`public KeyValuePair<TKey, TValue> Get(int index)`

**Purpose:** Gets the current value of `get`.

### FirstIndexOf
`public int FirstIndexOf(TKey key)`

**Purpose:** Handles logic related to `first index of`.

### FirstIndexOf
`public int FirstIndexOf(TKey key, TValue value)`

**Purpose:** Handles logic related to `first index of`.

### LastIndexOf
`public int LastIndexOf(TKey key)`

**Purpose:** Handles logic related to `last index of`.

### LastIndexOf
`public int LastIndexOf(TKey key, TValue value)`

**Purpose:** Handles logic related to `last index of`.

### All
`public bool All(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Handles logic related to `all`.

### Any
`public bool Any(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Handles logic related to `any`.

### GetValues
`public IEnumerator<TValue> GetValues(TKey key)`

**Purpose:** Gets the current value of `values`.

### Find
`public bool Find(Predicate<KeyValuePair<TKey, TValue>> predicate, out KeyValuePair<TKey, TValue> found, bool searchForward = true)`

**Purpose:** Handles logic related to `find`.

### FindIndex
`public int FindIndex(Predicate<KeyValuePair<TKey, TValue>> predicate, bool searchForward = true)`

**Purpose:** Handles logic related to `find index`.

### FindAll
`public MBList<KeyValuePair<TKey, TValue>> FindAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Handles logic related to `find all`.

### Add
`public void Add(TKey key, TValue value)`

**Purpose:** Adds `add` to the current collection or state.

### AddRange
`public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>> items)`

**Purpose:** Adds `range` to the current collection or state.

### Remove
`public bool Remove(TKey key, TValue value)`

**Purpose:** Removes `remove` from the current collection or state.

### Remove
`public bool Remove(TKey key)`

**Purpose:** Removes `remove` from the current collection or state.

### RemoveAll
`public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Removes `all` from the current collection or state.

### RemoveAt
`public void RemoveAt(int index)`

**Purpose:** Removes `at` from the current collection or state.

### RemoveLast
`public void RemoveLast()`

**Purpose:** Removes `last` from the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### SetCustomComparer
`public void SetCustomComparer(IComparer<TKey> customComparer)`

**Purpose:** Sets the value or state of `custom comparer`.

### SetDefaultComparer
`public void SetDefaultComparer(bool isAscending = true)`

**Purpose:** Sets the value or state of `default comparer`.

### Reverse
`public void Reverse()`

**Purpose:** Handles logic related to `reverse`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetEnumerator
`public IEnumerator<TValue> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### MoveNext
`public bool MoveNext()`

**Purpose:** Handles logic related to `move next`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### MoveNext
`public bool MoveNext()`

**Purpose:** Handles logic related to `move next`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
MBSortedMultiList example = MBSortedMultiList.Comparer;
```

## See Also

- [Complete Class Catalog](../catalog)