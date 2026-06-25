---
title: "MBList2D"
description: "Auto-generated class reference for MBList2D."
---
# MBList2D

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBList2D<T> : IMBCollection`
**Base:** `IMBCollection`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBList2D.cs`

## Overview

`MBList2D` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count1` | `public int Count1 { get; }` |
| `Count2` | `public int Count2 { get; }` |
| `this` | `public T this { get; set; }` |

## Key Methods

### Contains
`public bool Contains(T item)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of MBList2D from the subsystem API first
MBList2D mBList2D = ...;
var result = mBList2D.Contains(item);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of MBList2D from the subsystem API first
MBList2D mBList2D = ...;
mBList2D.Clear();
```

### ResetWithNewCount
`public void ResetWithNewCount(int newCount1, int newCount2)`

**Purpose:** Returns `with new count` to its default or initial condition.

```csharp
// Obtain an instance of MBList2D from the subsystem API first
MBList2D mBList2D = ...;
mBList2D.ResetWithNewCount(0, 0);
```

### CopyRowTo
`public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T> destination, int destinationIndex1, int destinationIndex2, int copyCount)`

**Purpose:** Copies the `row to` state of the current object to a target.

```csharp
// Obtain an instance of MBList2D from the subsystem API first
MBList2D mBList2D = ...;
mBList2D.CopyRowTo(0, 0, destination, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBList2D mBList2D = ...;
mBList2D.Contains(item);
```

## See Also

- [Area Index](../)