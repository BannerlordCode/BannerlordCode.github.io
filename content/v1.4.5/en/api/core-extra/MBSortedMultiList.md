---
title: "MBSortedMultiList"
description: "Auto-generated class reference for MBSortedMultiList."
---
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`
**Base:** `IReadOnlyList<TValue>`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBSortedMultiList.cs`

## Overview

`MBSortedMultiList` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MoveNext
`public bool MoveNext()`

**Purpose:** Moves `next` to a new position or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.MoveNext();
```

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the current object.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Dispose();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Reset();
```

### MoveNext
`public bool MoveNext()`

**Purpose:** Moves `next` to a new position or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.MoveNext();
```

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the current object.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Dispose();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Reset();
```

### Contains
`public bool Contains(TKey key)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Contains(key);
```

### Contains
`public bool Contains(TKey key, TValue value)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Contains(key, value);
```

### Get
`public KeyValuePair<TKey, TValue> Get(int index)`

**Purpose:** Reads the current object's value or state and returns it.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Get(0);
```

### FirstIndexOf
`public int FirstIndexOf(TKey key)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FirstIndexOf(key);
```

### FirstIndexOf
`public int FirstIndexOf(TKey key, TValue value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FirstIndexOf(key, value);
```

### LastIndexOf
`public int LastIndexOf(TKey key)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.LastIndexOf(key);
```

### LastIndexOf
`public int LastIndexOf(TKey key, TValue value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.LastIndexOf(key, value);
```

### All
`public bool All(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.All(predicate<KeyValuePair<TKey, predicate);
```

### Any
`public bool Any(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Any(predicate<KeyValuePair<TKey, predicate);
```

### GetValues
`public IEnumerator<TValue> GetValues(TKey key)`

**Purpose:** Reads and returns the `values` value held by the current object.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.GetValues(key);
```

### Find
`public bool Find(Predicate<KeyValuePair<TKey, TValue>> predicate, out KeyValuePair<TKey, TValue> found, bool searchForward = true)`

**Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Find(predicate<KeyValuePair<TKey, predicate, keyValuePair<TKey, found, false);
```

### FindIndex
`public int FindIndex(Predicate<KeyValuePair<TKey, TValue>> predicate, bool searchForward = true)`

**Purpose:** Looks up the matching `index` in the current collection or scope.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FindIndex(predicate<KeyValuePair<TKey, predicate, false);
```

### FindAll
`public MBList<KeyValuePair<TKey, TValue>> FindAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Looks up the matching `all` in the current collection or scope.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FindAll(predicate<KeyValuePair<TKey, predicate);
```

### Add
`public void Add(TKey key, TValue value)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Add(key, value);
```

### AddRange
`public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>> items)`

**Purpose:** Adds `range` to the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.AddRange(iEnumerable<KeyValuePair<TKey, items);
```

### Remove
`public bool Remove(TKey key, TValue value)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Remove(key, value);
```

### Remove
`public bool Remove(TKey key)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Remove(key);
```

### RemoveAll
`public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**Purpose:** Removes `all` from the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.RemoveAll(predicate<KeyValuePair<TKey, predicate);
```

### RemoveAt
`public void RemoveAt(int index)`

**Purpose:** Removes `at` from the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.RemoveAt(0);
```

### RemoveLast
`public void RemoveLast()`

**Purpose:** Removes `last` from the current collection or state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.RemoveLast();
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Clear();
```

### SetCustomComparer
`public void SetCustomComparer(IComparer<TKey> customComparer)`

**Purpose:** Assigns a new value to `custom comparer` and updates the object's internal state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.SetCustomComparer(customComparer);
```

### SetDefaultComparer
`public void SetDefaultComparer(bool isAscending = true)`

**Purpose:** Assigns a new value to `default comparer` and updates the object's internal state.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.SetDefaultComparer(false);
```

### Reverse
`public void Reverse()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Reverse();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.ToString();
```

### GetEnumerator
`public IEnumerator<TValue> GetEnumerator()`

**Purpose:** Reads and returns the `enumerator` value held by the current object.

```csharp
// Obtain an instance of MBSortedMultiList from the subsystem API first
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.GetEnumerator();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.MoveNext();
```

## See Also

- [Area Index](../)