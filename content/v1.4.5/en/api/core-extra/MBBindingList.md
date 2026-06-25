---
title: "MBBindingList"
description: "Auto-generated class reference for MBBindingList."
---
# MBBindingList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBBindingList<T> : Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`
**Base:** `Collection<T>`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBBindingList.cs`

## Overview

`MBBindingList` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListChanged` | `public event ListChangedEventHandler ListChanged { get; }` |

## Key Methods

### Sort
`public void Sort()`

**Purpose:** Sorts the content inside the this instance.

```csharp
// Obtain an instance of MBBindingList from the subsystem API first
MBBindingList mBBindingList = ...;
mBBindingList.Sort();
```

### Sort
`public void Sort(IComparer<T> comparer)`

**Purpose:** Sorts the content inside the this instance.

```csharp
// Obtain an instance of MBBindingList from the subsystem API first
MBBindingList mBBindingList = ...;
mBBindingList.Sort(comparer);
```

### IsOrdered
`public bool IsOrdered(IComparer<T> comparer)`

**Purpose:** Determines whether the this instance is in the ordered state or condition.

```csharp
// Obtain an instance of MBBindingList from the subsystem API first
MBBindingList mBBindingList = ...;
var result = mBBindingList.IsOrdered(comparer);
```

### ApplyActionOnAllItems
`public void ApplyActionOnAllItems(Action<T> action)`

**Purpose:** Applies the effect of action on all items to the this instance.

```csharp
// Obtain an instance of MBBindingList from the subsystem API first
MBBindingList mBBindingList = ...;
mBBindingList.ApplyActionOnAllItems(action);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBBindingList mBBindingList = ...;
mBBindingList.Sort();
```

## See Also

- [Area Index](../)