<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericComparer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericComparer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class GenericComparer<T> : Comparer<T> where T : IComparable<T>`
**Base:** `Comparer<T> where T : IComparable<T>`
**File:** `TaleWorlds.Library/GenericComparer.cs`

## Overview

`GenericComparer` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(T x, T y)`

**Purpose:** Handles logic related to `compare`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new GenericComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)