<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBList2D`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBList2D

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBList2D<T> : IMBCollection`
**Base:** `IMBCollection`
**File:** `TaleWorlds.Library/MBList2D.cs`

## Overview

`MBList2D` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count1` | `public int Count1 { get; }` |
| `Count2` | `public int Count2 { get; }` |
| `RawArray` | `public T RawArray { get; set; }` |
| `this` | `public T this { get; set; }` |

## Key Methods

### Contains
`public bool Contains(T item)`

**Purpose:** Handles logic related to `contains`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### ResetWithNewCount
`public void ResetWithNewCount(int newCount1, int newCount2)`

**Purpose:** Resets `with new count` to its initial state.

### CopyRowTo
`public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T> destination, int destinationIndex1, int destinationIndex2, int copyCount)`

**Purpose:** Handles logic related to `copy row to`.

## Usage Example

```csharp
var value = new MBList2D();
value.Contains(item);
```

## See Also

- [Complete Class Catalog](../catalog)