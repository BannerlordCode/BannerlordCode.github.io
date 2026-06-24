<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBFastRandomSelector`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBFastRandomSelector

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandomSelector<T>`
**Base:** none
**File:** `TaleWorlds.Core/MBFastRandomSelector.cs`

## Overview

`MBFastRandomSelector` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new MBFastRandomSelector();
value.Initialize(list);
```

## See Also

- [Complete Class Catalog](../catalog)