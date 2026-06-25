---
title: "IndexEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IndexEntry`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IndexEntry

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct IndexEntry`
**Area:** core-extra

## Overview

`IndexEntry` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public ushort RemainingCount { get; }` |

## Key Methods

### Initialize
`public void Initialize(MBReadOnlyList<T> list)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Pack
`public void Pack()`

**Purpose:** Handles logic related to `pack`.

### SelectRandom
`public bool SelectRandom(out T selection, Predicate<T> conditions = null)`

**Purpose:** Handles logic related to `select random`.

## Usage Example

```csharp
// First obtain a IndexEntry instance from game state, then call one of its public methods
var value = new IndexEntry();
value.Initialize(list);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
