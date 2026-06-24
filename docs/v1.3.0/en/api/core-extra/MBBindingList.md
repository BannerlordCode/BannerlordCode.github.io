<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBBindingList`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBBindingList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBBindingList<T> : Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`
**Base:** `Collection<T>`
**File:** `TaleWorlds.Library/MBBindingList.cs`

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

**Purpose:** Handles logic related to `sort`.

### Sort
`public void Sort(IComparer<T> comparer)`

**Purpose:** Handles logic related to `sort`.

### IsOrdered
`public bool IsOrdered(IComparer<T> comparer)`

**Purpose:** Handles logic related to `is ordered`.

### ApplyActionOnAllItems
`public void ApplyActionOnAllItems(Action<T> action)`

**Purpose:** Applies `action on all items` to the current object.

## Usage Example

```csharp
MBBindingList example = MBBindingList.ListChanged;
```

## See Also

- [Complete Class Catalog](../catalog)