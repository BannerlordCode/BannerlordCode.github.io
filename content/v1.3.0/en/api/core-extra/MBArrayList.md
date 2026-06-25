---
title: "MBArrayList"
description: "Auto-generated class reference for MBArrayList."
---
# MBArrayList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBArrayList<T> : IMBCollection, ICollection, IEnumerable, IEnumerable<T>`
**Base:** `IMBCollection`
**File:** `TaleWorlds.Library/MBArrayList.cs`

## Overview

`MBArrayList` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `Capacity` | `public int Capacity { get; }` |
| `RawArray` | `public T RawArray { get; set; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |
| `SyncRoot` | `public object SyncRoot { get; set; }` |
| `this` | `public T this { get; set; }` |

## Key Methods

### IndexOf
`public int IndexOf(T item)`

**Purpose:** Finds the position index of the specified content in the current object.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
var result = mBArrayList.IndexOf(item);
```

### Contains
`public bool Contains(T item)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
var result = mBArrayList.Contains(item);
```

### GetEnumerator
`public IEnumerator<T> GetEnumerator()`

**Purpose:** Reads and returns the `enumerator` value held by the current object.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
var result = mBArrayList.GetEnumerator();
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
mBArrayList.Clear();
```

### Add
`public void Add(T item)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
mBArrayList.Add(item);
```

### AddRange
`public void AddRange(IEnumerable<T> list)`

**Purpose:** Adds `range` to the current collection or state.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
mBArrayList.AddRange(list);
```

### Remove
`public bool Remove(T item)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
var result = mBArrayList.Remove(item);
```

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** Copies the `to` state of the current object to a target.

```csharp
// Obtain an instance of MBArrayList from the subsystem API first
MBArrayList mBArrayList = ...;
mBArrayList.CopyTo(array, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBArrayList mBArrayList = ...;
mBArrayList.IndexOf(item);
```

## See Also

- [Area Index](../)