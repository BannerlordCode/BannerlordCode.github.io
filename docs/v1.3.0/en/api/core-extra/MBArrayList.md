<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBArrayList`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `index of`.

### Contains
`public bool Contains(T item)`

**Purpose:** Handles logic related to `contains`.

### GetEnumerator
`public IEnumerator<T> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### Add
`public void Add(T item)`

**Purpose:** Adds `add` to the current collection or state.

### AddRange
`public void AddRange(IEnumerable<T> list)`

**Purpose:** Adds `range` to the current collection or state.

### Remove
`public bool Remove(T item)`

**Purpose:** Removes `remove` from the current collection or state.

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** Handles logic related to `copy to`.

## Usage Example

```csharp
MBArrayList example = MBArrayList.Count;
```

## See Also

- [Complete Class Catalog](../catalog)