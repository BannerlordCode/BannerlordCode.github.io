<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TWParallel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class TWParallel`
**Area:** core-extra

## Overview

`TWParallel` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)`

**Purpose:** Initializes the state, resources, or bindings for `and set implementation`.

### For
`public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for`.

### ForWithoutRenderThread
`public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for without render thread`.

### For
`public static void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for`.

### AssertIsMainThread
`public static void AssertIsMainThread()`

**Purpose:** Handles logic related to `assert is main thread`.

### IsMainThread
`public static bool IsMainThread()`

**Purpose:** Handles logic related to `is main thread`.

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)`

**Purpose:** Handles logic related to `parallel for aux predicate`.

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)`

**Purpose:** Handles logic related to `parallel for with dt aux predicate`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TWParallel.InitializeAndSetImplementation(parallelDriver);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
